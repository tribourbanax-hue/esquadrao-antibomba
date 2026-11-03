"""Teste de ponta a ponta em tela de celular: joga todas as questões e confere os fluxos."""
import pathlib, sys
from playwright.sync_api import sync_playwright

RAIZ = pathlib.Path(__file__).parent
URL = (RAIZ / "index.html").as_uri()
SAIDA = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else RAIZ / "prints"
SAIDA.mkdir(exist_ok=True)

ACERTA = """() => {
  const q = POR_ID[R.fila[R.i]];
  const bt = (t) => [...document.querySelectorAll('.area button')].find(b => b.textContent === t);
  if (q.t === 'm') bt(q.o[0]).click();
  if (q.t === 'v') bt(q.a ? '✅ Verdadeiro' : '❌ Falso').click();
  if (q.t === 'i') document.querySelector(`.op-img[data-k="${q.op[0]}"]`).click();
  if (q.t === 'd') document.querySelector(`.hs[data-k="${q.alvo}"]`).dispatchEvent(new MouseEvent('click',{bubbles:true}));
  if (q.t === 'o') q.passos.forEach(p => bt(p).click());
  if (q.t === 'p') {
    [...document.querySelectorAll('.col:first-child .par')].forEach(e => {
      e.click();
      [...document.querySelectorAll('.par-d')].find(d => d.textContent === e.dataset.k).click();
    });
  }
  return q.t;
}"""
ACERTA_SEPARAR = """async () => {
  const q = POR_ID[R.fila[R.i]];
  while (document.querySelector('.sep-item')) {
    const txt = document.querySelector('.sep-item').textContent;
    const it = q.itens.find(i => i[0] === txt);
    document.querySelectorAll('.op-cat')[it[1]].click();
    await new Promise(r => setTimeout(r, 300));
  }
}"""
ERRA_M = """() => {
  const q = POR_ID[R.fila[R.i]];
  [...document.querySelectorAll('.area button')].find(b => b.textContent === q.o[1]).click();
}"""
SEM_ESTOURO = "() => document.documentElement.scrollWidth <= 360 && window.innerWidth <= 360"

with sync_playwright() as p:
    nav = p.chromium.launch(channel="chrome")
    ctx = nav.new_context(viewport={"width": 360, "height": 640}, has_touch=True, is_mobile=True, device_scale_factor=2, service_workers="block")
    pag = ctx.new_page()
    erros = []
    pag.on("pageerror", lambda e: erros.append(str(e)))
    pag.on("console", lambda m: erros.append(m.text) if m.type == "error" else None)
    pag.goto(URL)
    pag.wait_for_timeout(1200)
    pag.screenshot(path=SAIDA / "1-inicio.png", full_page=True)

    # 1) Todas as questões, respondidas certo, sem quebra de layout.
    total = pag.evaluate("Q.length")
    pag.evaluate("() => { R = {modo:'rapida',fila:Q.map(q=>q.id),i:0,ok:0,erro:0,combo:0,maxCombo:0,repetidas:{},simRes:[]}; E.rodada=R; pergunta(); }")
    estouros, vistos, prints = [], set(), {}
    for i in range(total):
        if not pag.evaluate(SEM_ESTOURO): estouros.append(("pergunta", i))
        t = pag.evaluate("POR_ID[R.fila[R.i]].t")
        if t not in prints:
            prints[t] = 1
            pag.screenshot(path=SAIDA / f"2-tipo-{t}.png")
        if t == "s": pag.evaluate(ACERTA_SEPARAR)
        else: pag.evaluate(ACERTA)
        fb = pag.locator(".fb-ok")
        assert fb.count() == 1, f"questão {i} ({t}) não foi marcada como certa"
        if not pag.evaluate(SEM_ESTOURO): estouros.append(("resposta", i))
        if t in ("i", "d") and prints[t] == 1:
            prints[t] = 2
            pag.wait_for_timeout(300)
            pag.screenshot(path=SAIDA / f"3-resposta-{t}.png")
        vistos.add(t)
        pag.locator(".fb .btn").click()
        assert pag.locator(".fb").count() == 0
    print("questões jogadas:", total, "| tipos:", sorted(vistos), "| estouros:", estouros)
    pag.screenshot(path=SAIDA / "3-fim.png", full_page=True)

    # 2) Progresso salvo depois de recarregar.
    pct = pag.evaluate("pct(Q.filter(q=>q.n==='b'))")
    pag.get_by_role("button", name="Início").click()
    pag.locator("#b-album").click()
    pag.screenshot(path=SAIDA / "7-album.png", full_page=True)
    print("figurinhas:", pag.evaluate("Object.keys(E.alb).length"), "de", pag.evaluate("ordemF.length"), "| faltando:", pag.evaluate("ordemF.filter(f=>!E.alb[f]).join()"))
    pag.locator(".carta").first.click()
    assert pag.locator(".ficha").count() == 1
    pag.screenshot(path=SAIDA / "8-ficha.png")
    pag.get_by_role("button", name="Fechar").click()
    pag.reload()
    salvo = pag.evaluate("Object.keys(E.q).length")
    print("progresso após recarregar:", salvo, "questões | bombas:", pct, "%")
    assert salvo == total

    # 3) Reiniciar apaga tudo e cada início embaralha de forma diferente.
    pag.locator("#b-reiniciar").click()
    pag.locator("#b-reiniciar").click()
    assert pag.evaluate("Object.keys(E.q).length") == 0
    ordens = set()
    for _ in range(5):
        ordens.add(pag.evaluate("() => { iniciar(Q,'rapida'); const f=R.fila.join(); home(); return f; }"))
    print("ordens diferentes em 5 inícios:", len(ordens))
    assert len(ordens) > 1
    opcoes = set()
    alvo = "Q.find(q=>q.t==='m').id"
    for _ in range(6):
        opcoes.add(pag.evaluate(f"() => {{ R={{modo:'rapida',fila:[{alvo}],i:0,ok:0,erro:0,combo:0,maxCombo:0,repetidas:{{}},simRes:[]}}; pergunta(); return [...document.querySelectorAll('.op')].map(b=>b.textContent).join('|'); }}"))
    print("ordens de alternativas em 6 exibições:", len(opcoes))
    assert len(opcoes) > 1

    # 4) Errar faz a questão voltar e aparecer em "Meus erros".
    pag.evaluate(f"() => {{ E.q={{}}; R={{modo:'rapida',fila:[{alvo},Q[40].id,Q[41].id],i:0,ok:0,erro:0,combo:0,maxCombo:0,repetidas:{{}},simRes:[]}}; E.rodada=R; pergunta(); }}")
    pag.evaluate(ERRA_M)
    assert pag.locator(".fb-er").count() == 1
    pag.wait_for_timeout(600)
    pag.screenshot(path=SAIDA / "4-erro.png", full_page=True)
    assert pag.evaluate("R.fila.length") == 4
    assert pag.evaluate(f"comErro({alvo})")
    print("erro volta na rodada: ok")

    # 5) Sair no meio e continuar depois (a parada do ônibus).
    pag.reload()
    assert "Continuar" in pag.locator("#b-jogar").inner_text()
    pag.locator("#b-jogar").click()
    assert pag.locator(".enunc").count() == 1
    print("continuar rodada: ok")

    # 6) Simulado até o fim e sessão final.
    pag.evaluate("home()")
    pag.locator("#b-simulado").click()
    assert pag.evaluate("R.fila.length") == 20
    for i in range(20):
        if i % 4 == 0:
            pag.evaluate("() => { const q=POR_ID[R.fila[R.i]]; const bs=[...document.querySelectorAll('.area button')]; (q.t==='m'? bs.find(b=>b.textContent!==q.o[0]) : bs.find(b=>b.textContent===(q.a?'❌ Falso':'✅ Verdadeiro'))).click(); }")
        else:
            pag.evaluate(ACERTA)
    assert pag.locator(".enunc", has_text="Nota").count() == 1
    nota = pag.locator(".enunc").inner_text()
    print("simulado:", nota)
    assert "7,5" in nota
    pag.screenshot(path=SAIDA / "5-simulado.png", full_page=True)
    pag.evaluate("home()")
    pag.locator("#b-revisao").click()
    n = pag.locator(".rev-card").count()
    pag.locator(".rev-card .op").first.click()
    pag.screenshot(path=SAIDA / "6-revisao.png", full_page=True)
    assert n == 9
    print("sessão final: ", n, "pontos")
    assert pag.evaluate(SEM_ESTOURO)
    print("erros de console:", erros)
    assert not erros and not estouros
    nav.close()
print("TUDO OK")
