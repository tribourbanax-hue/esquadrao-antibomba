// Junta tudo em um único index.html e confere o banco de questões.
const fs = require("fs"), path = require("path");
const src = (f) => fs.readFileSync(path.join(__dirname, "src", f), "utf8");
const { Q, SETORES, REVISAO } = require("./src/banco.js");
const { F, DIAG, NOMES_DIAG, figDaQuestao } = require("./src/figuras.js");

const PAGINAS_BOMBA = [3,19,25,27,28,51,52,58,63,64,69,70,71,73,75,76,77,82,85,86,87,90,91,100,110,112,114,115,117,118,120,121,123,127,128,131,146,148,150,151,152,154,155,157,160,171,172,177,182,183,184];
const problemas = [];
const textoDe = (q) => JSON.stringify(q).toLowerCase();
const vistos = new Set();
for (const q of Q) {
  const nome = `[p.${q.p}] ${q.q}`;
  if (!SETORES[q.s]) problemas.push("setor inválido: " + nome);
  if (!["b", "c"].includes(q.n)) problemas.push("nível inválido: " + nome);
  if (q.n === "b" && !PAGINAS_BOMBA.includes(q.p)) problemas.push("marcada como bomba em página sem bomba: " + nome);
  if (q.n === "c" && PAGINAS_BOMBA.includes(q.p)) problemas.push("marcada como contexto em página com bomba: " + nome);
  const chave = q.q + (q.o ? q.o[0] : "") + (q.pares ? q.pares[0][1] : "") + q.p;
  if (vistos.has(chave)) problemas.push("duplicada: " + nome);
  vistos.add(chave);
  if (!q.e) problemas.push("sem explicação: " + nome);
  if (q.t === "m") { if (q.o.length !== 4 || new Set(q.o).size !== 4) problemas.push("opções inválidas: " + nome); }
  if (q.t === "v" && typeof q.a !== "boolean") problemas.push("V/F inválido: " + nome);
  if (q.t === "p") {
    if (q.pares.length < 3) problemas.push("poucos pares: " + nome);
    if (new Set(q.pares.map((x) => x[1])).size !== q.pares.length) problemas.push("par repetido: " + nome);
    if (new Set(q.pares.map((x) => x[0])).size !== q.pares.length) problemas.push("par repetido: " + nome);
  }
  if (q.t === "s") q.itens.forEach((i) => { if (!q.cats[i[1]]) problemas.push("categoria inválida: " + nome); });
  if (q.t === "i") { q.op.forEach((k) => { if (!F[k]) problemas.push("figura inexistente " + k + ": " + nome); }); if (new Set(q.op).size !== q.op.length) problemas.push("imagem repetida: " + nome); }
  if (q.t === "d" && !(NOMES_DIAG[q.diag] && NOMES_DIAG[q.diag][q.alvo] && DIAG[q.diag].includes(`data-k="${q.alvo}"`))) problemas.push("alvo inválido: " + nome);
  if (!F[figDaQuestao(q)]) problemas.push("sem figura: " + nome);
  if (q.t === "o" && new Set(q.passos).size !== q.passos.length) problemas.push("passo repetido: " + nome);
  // Pontos em revisão não podem entrar no jogo.
  const t = textoDe(q);
  for (const proibido of ["hemolítica", "glucagon", "janela imunológica", "psoríase", "mycoplasma", "arqueobact", "organelas membranosas"]) {
    if (t.includes(proibido)) problemas.push(`usa ponto em revisão (${proibido}): ` + nome);
  }
}
const semQuestao = PAGINAS_BOMBA.filter((p) => !Q.some((q) => q.p === p));
if (semQuestao.length) problemas.push("páginas com bomba sem questão: " + semQuestao.join(", "));
if (problemas.length) { console.error(problemas.join("\n")); process.exit(1); }

const html = `<!DOCTYPE html>
<html lang="pt-BR" translate="no">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="google" content="notranslate">
<meta name="theme-color" content="#3a1d4f">
<title>Esquadrão Antibomba</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;700&family=Nunito:wght@600;800&display=swap" rel="stylesheet">
<style>${src("style.css")}</style>
</head>
<body>
<main id="app"></main>
<nav id="nav"></nav>
<script>${src("banco.js")}
${src("figuras.js")}
${src("app.js")}
${src("feedback.js").replace(/__APP__/g, "antibomba").replace("https://apps-enfermagem.forjadoleao.workers.dev", process.env.FBK_URL || "https://apps-enfermagem.forjadoleao.workers.dev")}</script>
</body>
</html>
`;
fs.writeFileSync(path.join(__dirname, "index.html"), html);
const cont = (f) => Q.filter(f).length;
console.log(`OK: ${Q.length} questões | 💣 ${cont((q) => q.n === "b")} | 🧨 ${cont((q) => q.n === "c")} | revisão ${REVISAO.length} | ${Buffer.byteLength(html) >> 10} KB`);
for (const k in SETORES) console.log(`  ${SETORES[k].nome}: ${cont((q) => q.s === k)}`);
const dist = {}; Q.forEach((q) => { const k = figDaQuestao(q); dist[k] = (dist[k] || 0) + 1; });
console.log("  sem questão ligada:", Object.keys(F).filter((k) => !dist[k]).join(", ") || "nenhuma");
console.log("  tipos:", ["m", "v", "p", "s", "o", "i", "d"].map((t) => `${t}=${cont((q) => q.t === t)}`).join(" "));
