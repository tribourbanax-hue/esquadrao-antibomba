// Personagens desenhados em SVG. A forma de cada um carrega o fato a memorizar.
const INK = "#2a1738";
const TR = `stroke="${INK}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"`;
const TF = `stroke="${INK}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"`;
const olho = (x, y, r = 5) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" ${TF}/><circle cx="${x + 1}" cy="${y + 1}" r="${r * 0.5}" fill="${INK}"/>`;
const rosto = (x, y, d = 9, r = 5) => olho(x - d, y, r) + olho(x + d, y, r) + `<path d="M${x - 5} ${y + 9} q5 5 10 0" fill="none" ${TF}/>`;
const bravo = (x, y, d = 9, r = 5) => olho(x - d, y, r) + olho(x + d, y, r) + `<path d="M${x - d - 6} ${y - 8} l10 4 M${x + d + 6} ${y - 8} l-10 4" fill="none" ${TF}/><path d="M${x - 5} ${y + 11} q5 -5 10 0" fill="none" ${TF}/>`;
const circ = (x, y, r, f, t = TR) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${f}" ${t}/>`;
const pontos = (l, r, f) => l.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${f}"/>`).join("");
const yMini = (x, y, rot, c = "#2b6cf6") => `<g transform="translate(${x} ${y}) rotate(${rot})" fill="none" stroke="${c}" stroke-width="4" stroke-linecap="round"><path d="M0 8V0M0 0L-6 -8M0 0L6 -8"/></g>`;

const BOMBA = `<path d="M62 24 q8 -14 20 -10" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round"/><rect x="50" y="20" width="16" height="12" rx="3" transform="rotate(30 58 26)" fill="#5b3f73" ${TR}/>${circ(46, 58, 32, "#7a2d6b")}<circle cx="35" cy="46" r="8" fill="#fff" opacity=".45"/>`;

const F = {
  // ---------- CÉLULA ----------
  eucarionte: ["Célula eucarionte", "cel", "Tem núcleo verdadeiro, com o DNA em cromossomos, e organelas definidas.", 25,
    `${circ(50, 50, 42, "#ffe2b8")}${circ(52, 50, 17, "#8e5bd6")}<circle cx="47" cy="45" r="4" fill="#fff" opacity=".5"/><ellipse cx="24" cy="36" rx="11" ry="6" fill="#f46d6d" ${TF} transform="rotate(-25 24 36)"/><ellipse cx="76" cy="70" rx="11" ry="6" fill="#f46d6d" ${TF} transform="rotate(30 76 70)"/><circle cx="26" cy="68" r="5" fill="#4cc38a" ${TF}/><circle cx="76" cy="30" r="4" fill="#4cc38a" ${TF}/>`],
  procarionte: ["Célula procarionte", "cel", "A bactéria: DNA sem núcleo formado (nucleoide), mais simples e menor.", 22,
    `<path d="M74 50 q12 -14 22 -2" fill="none" ${TR}/><rect x="8" y="26" width="72" height="48" rx="24" fill="#8ad36b" ${TR}/><path d="M26 54 q8 -14 16 0 t16 0" fill="none" stroke="#3f7d2c" stroke-width="3"/>${rosto(40, 40, 8)}`],
  mitocondria: ["Mitocôndria", "cel", "Produz energia: o ATP, a “moeda energética” da célula.", 26,
    `<ellipse cx="50" cy="50" rx="42" ry="28" fill="#f46d6d" ${TR}/><path d="M22 50 q5 -18 10 0 t10 0 t10 0 t10 0 t10 0" fill="none" stroke="#fff" stroke-width="3"/>${rosto(50, 34, 10, 4)}`],
  neuronio: ["Neurônio", "cel", "Célula especializada do cérebro: recebe, processa e transmite impulsos nervosos.", 29,
    `<path d="M50 50 L15 20 M50 50 L10 55 M50 50 L25 86 M50 50 L58 12 M50 50 L92 80 M92 80 l6 -8 M92 80 l-2 10" fill="none" stroke="${INK}" stroke-width="7" stroke-linecap="round"/><path d="M50 50 L15 20 M50 50 L10 55 M50 50 L25 86 M50 50 L58 12 M50 50 L92 80" fill="none" stroke="#ffcf5c" stroke-width="3" stroke-linecap="round"/>${circ(50, 50, 20, "#ffcf5c")}${rosto(50, 47, 7, 4)}`],

  // ---------- DNA E PROTEÍNAS ----------
  dna: ["DNA", "gen", "Fita dupla que guarda a informação. Vive no núcleo e não sai de lá.", 54,
    `<g transform="rotate(20 50 50)"><path d="M34 6 C70 22 70 34 34 50 C-2 66 -2 78 34 94" transform="translate(16 0)" fill="none" stroke="#8e5bd6" stroke-width="7" stroke-linecap="round"/><path d="M66 6 C30 22 30 34 66 50 C102 66 102 78 66 94" transform="translate(-16 0)" fill="none" stroke="#f2709c" stroke-width="7" stroke-linecap="round"/><path d="M32 14H68M38 26H62M38 74H62M32 86H68" stroke="${INK}" stroke-width="3"/></g>`],
  rna: ["RNA", "gen", "Fita simples mensageira: leva a informação do núcleo até os ribossomos.", 55,
    `<path d="M14 80 C30 40 40 96 54 54 S80 40 88 16" fill="none" stroke="#f2709c" stroke-width="8" stroke-linecap="round"/><path d="M26 58l-8 -6M46 66l-10 -6M58 44l-9 -6M76 32l-9 -6" stroke="${INK}" stroke-width="3" stroke-linecap="round"/><path d="M70 74h22v14H70z" fill="#fff" ${TF}/><path d="M70 74l11 8 11 -8" fill="none" ${TF}/>`],
  proteina: ["Proteína", "gen", "Executa a função: enzimas, estrutura, transporte, defesa, hormônios, movimento.", 58,
    `<path d="M16 66 C8 40 34 24 44 42 C54 60 24 62 36 80 C48 96 76 86 66 62 C58 44 44 26 62 16 C78 8 96 30 84 46" fill="none" stroke="${INK}" stroke-width="14" stroke-linecap="round"/><path d="M16 66 C8 40 34 24 44 42 C54 60 24 62 36 80 C48 96 76 86 66 62 C58 44 44 26 62 16 C78 8 96 30 84 46" fill="none" stroke="#ffb340" stroke-width="8" stroke-linecap="round"/>`],

  // ---------- SANGUE ----------
  hemacia: ["Hemácia", "san", "Glóbulo vermelho, sem núcleo para carregar mais hemoglobina. Transporta O₂ e CO₂.", 69,
    `${circ(50, 50, 40, "#e5383b")}<ellipse cx="50" cy="56" rx="20" ry="17" fill="#b81f2b"/>${rosto(50, 36, 12, 6)}`],
  falciforme: ["Hemácia falciforme", "san", "Mutação genética deixa a hemácia em forma de meia lua. Ela pode obstruir o fluxo.", 70,
    `<path d="M14 24 C34 52 66 52 88 22 C96 62 60 92 28 82 C14 74 8 50 14 24Z" fill="#e5383b" ${TR}/>${olho(40, 66, 5)}${olho(58, 66, 5)}<path d="M44 76 q5 -4 10 0" fill="none" ${TF}/>`],
  ferropriva: ["Anemia ferropriva", "san", "Falta de ferro: hemácias pequenas e descoradas.", 70,
    `${circ(50, 50, 22, "#f7b5b5")}<circle cx="50" cy="55" r="10" fill="#fbdede"/>${rosto(50, 44, 7, 3.5)}<path d="M80 18l-4 8h6l-4 8" fill="none" stroke="#9aa0ae" stroke-width="3"/><text x="10" y="26" font-size="13" font-weight="800" fill="#9aa0ae">Fe?</text>`],
  megaloblastica: ["Anemia megaloblástica", "san", "Falta de vitamina B12: hemácias grandes e imaturas, que morrem antes de amadurecer.", 70,
    `${circ(50, 52, 44, "#d62839")}<circle cx="58" cy="66" r="13" fill="#7c1320"/>${rosto(46, 36, 13, 6)}<text x="72" y="16" font-size="14" font-weight="800" fill="${INK}">B12?</text>`],
  plaqueta: ["Plaqueta", "san", "Fragmento celular da medula que forma o coágulo. Circula de 7 a 10 dias.", 71,
    `<path d="M50 14 l12 14 18 -4 -2 18 14 12 -16 8 0 18 -18 -6 -14 12 -6 -16 -18 -4 8 -16 -10 -14 18 -4z" fill="#b48cf2" ${TR}/>${rosto(50, 46, 9, 5)}`],
  neutrofilo: ["Neutrófilo", "san", "Primeira linha de defesa, principalmente contra bactérias. Núcleo em vários lobos.", 75,
    `${circ(50, 50, 42, "#f8e7ff")}${pontos([[24, 64], [34, 76], [68, 78], [78, 60], [50, 84]], 2.5, "#d3b5e8")}<path d="M28 58 a11 11 0 1 1 18 8 a11 11 0 1 1 16 0 a11 11 0 1 1 8 -14" fill="#7d4bc2" ${TF}/><g>${rosto(50, 26, 10, 5)}</g>`],
  monocito: ["Monócito", "san", "Glóbulo branco com núcleo em forma de rim. Dá origem aos macrófagos.", 75,
    `${circ(50, 50, 42, "#dcecff")}<path d="M24 58 C24 42 44 42 50 50 C58 42 78 44 76 60 C74 78 26 78 24 58Z" fill="#4667c9" ${TF}/>${rosto(50, 28, 10, 5)}`],
  macrofago: ["Macrófago", "san", "O “comilão”: faz a fagocitose de invasores e restos de células e inicia a resposta imune.", 75,
    `<path d="M12 44 C4 22 30 6 48 16 C66 4 92 18 88 38 L52 52 L92 62 C94 82 70 96 50 88 C30 98 2 78 14 58 C6 54 8 48 12 44Z" fill="#ffc9a3" ${TR}/>${olho(34, 32, 6)}${olho(54, 28, 6)}<rect x="70" y="44" width="24" height="13" rx="6" fill="#8ad36b" ${TF}/>`],
  eosinofilo: ["Eosinófilo", "san", "Combate parasitas e age em alergias. Núcleo em dois lobos e grãos alaranjados.", 75,
    `${circ(50, 50, 42, "#ffe9dc")}${pontos([[22, 50], [30, 66], [44, 80], [62, 80], [76, 66], [80, 48], [34, 38], [68, 38], [50, 72], [20, 62], [72, 74]], 4, "#f4733b")}<circle cx="38" cy="54" r="11" fill="#7d4bc2" ${TF}/><circle cx="62" cy="54" r="11" fill="#7d4bc2" ${TF}/><path d="M46 54h8" stroke="#7d4bc2" stroke-width="5"/>${rosto(50, 24, 10, 5)}`],
  basofilo: ["Basófilo", "san", "Envolvido em alergias: libera histamina. Cheio de grãos escuros.", 75,
    `${circ(50, 50, 42, "#e8defa")}${pontos([[24, 46], [20, 60], [30, 72], [42, 62], [56, 56], [68, 64], [78, 52], [72, 76], [52, 80], [38, 82], [60, 72], [32, 52], [48, 72], [80, 66]], 5, "#3d1f82")}${rosto(50, 28, 10, 5)}`],
  linfT: ["Linfócito T", "san", "O comandante: coordena a resposta imune e destrói células infectadas ou tumorais.", 76,
    `${circ(50, 54, 40, "#c8f0e0")}${circ(50, 60, 26, "#1f8a70")}${rosto(50, 54, 10, 5)}<path d="M20 26 C30 10 70 10 80 26 L92 32 H8Z" fill="#2a4a9f" ${TR}/><text x="50" y="27" text-anchor="middle" font-size="13" font-weight="800" fill="#ffcf5c">T</text>`],
  linfB: ["Linfócito B", "san", "O atirador: produz anticorpos específicos contra os antígenos.", 76,
    `${circ(42, 54, 36, "#cfe3ff")}${circ(42, 58, 23, "#2b6cf6")}${rosto(42, 52, 9, 5)}${yMini(82, 30, 55)}${yMini(88, 56, 90)}${yMini(80, 82, 125)}`],
  nk: ["Célula NK", "san", "Natural Killer: resposta rápida e inespecífica contra infecções e tumores.", 76,
    `<path d="M50 6 L62 28 L88 20 L76 44 L96 58 L72 66 L72 92 L50 76 L28 92 L28 66 L4 58 L24 44 L12 20 L38 28Z" fill="#ff8fa3" ${TR}/>${circ(50, 52, 20, "#b3123f")}${bravo(50, 48, 8, 4)}`],
  tronco: ["Célula-tronco hematopoética", "san", "Fica na medula e se transforma em todos os tipos de células do sangue.", 67,
    `${circ(50, 34, 24, "#ffd166")}${rosto(50, 30, 8, 4)}<path d="M36 58 L20 72 M50 60 V74 M64 58 L80 72" ${TR}/>${circ(16, 84, 11, "#e5383b")}${circ(50, 86, 11, "#f8e7ff")}<path d="M76 76 l6 4 5 -3 1 8 5 5 -7 3 -1 7 -6 -5 -7 1 1 -7 -5 -5 7 -2z" fill="#b48cf2" ${TF}/>`],
  medula: ["Medula óssea", "san", "Principal local do sistema hematopoiético: produz, amadurece e renova as células do sangue.", 63,
    `<path d="M20 12 a13 13 0 0 1 16 18 L70 64 a13 13 0 1 1 8 18 a13 13 0 1 1 -18 -8 L26 40 a13 13 0 1 1 -6 -28z" fill="#fff4dc" ${TR}/><path d="M34 38 L64 68" stroke="#e5383b" stroke-width="10" stroke-linecap="round"/>`],

  // ---------- IMUNIDADE ----------
  anticorpo: ["Anticorpo", "imu", "Proteína em forma de Y, também chamada de imunoglobulina. Produzida por linfócitos.", 87,
    `<g stroke="${INK}" stroke-width="3" stroke-linejoin="round"><rect x="43" y="46" width="14" height="46" rx="6" fill="#e5383b"/><rect x="20" y="4" width="14" height="50" rx="6" fill="#ffb340" transform="rotate(-32 27 29) translate(8 8)"/><rect x="66" y="4" width="14" height="50" rx="6" fill="#ffb340" transform="rotate(32 73 29) translate(-8 8)"/></g>`],
  chave: ["Chave-fechadura", "imu", "Cada anticorpo se liga a um único antígeno, como uma chave na sua fechadura.", 87,
    `<path d="M50 8 C74 8 92 24 92 46 H64 L58 36 H42 L36 46 H8 C8 24 26 8 50 8Z" fill="#8ad36b" ${TR}/>${bravo(50, 24, 12, 4)}<path d="M42 40 V58 L50 66 L58 58 V40 M50 66 V92" fill="none" stroke="${INK}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><path d="M42 40 V58 L50 66 L58 58 V40 M50 66 V92" fill="none" stroke="#ffb340" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`],
  escudo: ["Imunidade inata", "imu", "Congênita, é a primeira linha. Barreiras físicas (pele), químicas (suor) e biológicas (células).", 85,
    `<path d="M50 6 L88 20 V50 C88 74 68 88 50 95 C32 88 12 74 12 50 V20Z" fill="#6fb6ff" ${TR}/>${rosto(50, 42, 12, 6)}`],
  vacina: ["Vacina", "imu", "Ligada à imunidade adaptativa: adquirida ao longo da vida, cria memória imunológica.", 86,
    `<g transform="rotate(45 50 50)"><rect x="38" y="20" width="24" height="46" rx="3" fill="#dff3ff" ${TR}/><rect x="42" y="40" width="16" height="24" fill="#4cc38a"/><path d="M50 66 V94 M36 20 H64 M50 20 V4 M40 4 H60" fill="none" ${TR}/></g>`],
  sepse: ["Sepse", "imu", "Emergência! Febre persistente, queda de pressão, taquicardia e confusão mental.", 91,
    `<path d="M42 62 V18 a10 10 0 0 1 20 0 V62 a18 18 0 1 1 -20 0z" fill="#fff" ${TR}/><path d="M52 24 V72" stroke="#e5383b" stroke-width="7" stroke-linecap="round"/>${circ(52, 76, 11, "#e5383b", TF)}<path d="M18 22 L8 42 H28Z" fill="#ffcf5c" ${TF}/><text x="18" y="39" text-anchor="middle" font-size="14" font-weight="800" fill="${INK}">!</text>`],

  // ---------- BACTÉRIAS ----------
  coco: ["Cocos", "bac", "Bactérias arredondadas.", 113,
    `${circ(30, 62, 22, "#a06ee8")}${circ(70, 60, 22, "#a06ee8")}${circ(50, 30, 22, "#a06ee8")}${rosto(50, 28, 7, 4)}`],
  estafilo: ["Estafilococos", "bac", "Cocos agrupados em forma de cacho.", 113,
    pontos([], 0, "") + [[28, 34], [50, 26], [72, 34], [18, 56], [40, 50], [62, 50], [84, 56], [32, 72], [54, 72], [74, 74], [50, 90]].map(([x, y]) => circ(x, y, 12, "#f2b84b", TF)).join("")],
  estrepto: ["Estreptococos", "bac", "Cocos em fileira, como um colar.", 113,
    [[12, 66], [28, 54], [44, 58], [60, 48], [76, 38], [90, 24]].map(([x, y]) => circ(x, y, 10, "#6fb6ff", TF)).join("")],
  bacilo: ["Bacilos", "bac", "Bactérias em forma de bastão. Ex.: Mycobacterium tuberculosis, causador da tuberculose.", 113,
    `<rect x="6" y="28" width="88" height="44" rx="22" fill="#8ad36b" ${TR}/>${rosto(50, 46, 12, 6)}`],
  vibriao: ["Vibriões", "bac", "Bactéria em forma de vírgula. Ex.: Vibrio cholerae, causador da cólera.", 113,
    `<path d="M24 14 C70 8 92 44 78 80 C72 92 58 88 60 76 C64 54 44 36 22 34 C10 32 10 16 24 14Z" fill="#f2709c" ${TR}/>${olho(50, 32, 5)}${olho(66, 44, 5)}`],
  espirilo: ["Espirilos", "bac", "Bactérias em forma de espiral.", 113,
    `<path d="M8 54 C18 20 30 20 38 50 S58 82 66 50 S84 22 94 42" fill="none" stroke="${INK}" stroke-width="15" stroke-linecap="round"/><path d="M8 54 C18 20 30 20 38 50 S58 82 66 50 S84 22 94 42" fill="none" stroke="#ffb340" stroke-width="9" stroke-linecap="round"/>`],
  grampos: ["Gram-positiva", "bac", "Cor violeta. Parede mais simples e rica em peptideoglicano. Menos resistente a antibióticos.", 128,
    `<rect x="6" y="20" width="88" height="60" rx="30" fill="#6a2fc2" ${TR}/><rect x="20" y="33" width="60" height="34" rx="17" fill="#d9c4ff" ${TF}/>${rosto(50, 46, 10, 5)}`],
  gramneg: ["Gram-negativa", "bac", "Cor vermelha. Parede complexa e menos peptideoglicano. Mais resistente: inclui as multirresistentes.", 128,
    `<rect x="6" y="20" width="88" height="60" rx="30" fill="#ffc2cc" ${TR}/><rect x="13" y="27" width="74" height="46" rx="23" fill="#e8384f" ${TF}/><rect x="19" y="33" width="62" height="34" rx="17" fill="#ffdfe4" ${TF}/>${bravo(50, 48, 10, 5)}`],
  aerobia: ["Bactéria aeróbia", "bac", "Precisa de oxigênio: cresce perto da superfície.", 115, tubo([[38, 22], [50, 18], [62, 24], [44, 30], [56, 32], [50, 26]])],
  anaerobia: ["Bactéria anaeróbia", "bac", "O oxigênio pode ser letal. Vive em solos profundos e tecidos necróticos.", 115, tubo([[42, 78], [52, 84], [60, 76], [46, 70], [56, 66], [50, 74]])],
  facultativa: ["Bactéria facultativa", "bac", "Vive e cresce com ou sem oxigênio: espalhada pelo tubo.", 115, tubo([[42, 22], [58, 28], [50, 38], [40, 48], [60, 52], [48, 62], [58, 72], [44, 80], [54, 84]])],
  lactobacilo: ["Probiótica", "bac", "Melhora o equilíbrio microbiano e faz bem à saúde. Ex.: Lactobacillus bulgaricus.", 117,
    `<rect x="10" y="38" width="80" height="38" rx="19" fill="#7fe0b0" ${TR}/>${rosto(50, 54, 12, 5)}<path d="M50 30 C42 16 26 26 36 12 M50 30 C58 16 74 26 64 12" fill="none"/><path d="M50 32 C38 22 40 8 50 16 C60 8 62 22 50 32Z" fill="#f2709c" ${TF}/>`],
  divisao: ["Divisão binária", "bac", "Reprodução assexuada (cissiparidade): uma bactéria se divide em duas.", 114,
    `<path d="M8 50 C8 26 34 22 50 40 C66 22 92 26 92 50 C92 74 66 78 50 60 C34 78 8 74 8 50Z" fill="#8ad36b" ${TR}/><path d="M50 40V60" ${TF} stroke-dasharray="4 4"/>${olho(22, 46, 4)}${olho(36, 46, 4)}${olho(64, 46, 4)}${olho(78, 46, 4)}`],

  // ---------- VÍRUS ----------
  viruse: ["Vírus envelopado", "vir", "Entra melhor na célula, mas resiste menos no ambiente. Espículas reconhecem receptores.", 150,
    `${[0, 45, 90, 135, 180, 225, 270, 315].map((a) => `<g transform="rotate(${a} 50 50)"><path d="M50 16 V4" ${TR}/><circle cx="50" cy="5" r="4.5" fill="#ff6fb1" ${TF}/></g>`).join("")}${circ(50, 50, 34, "#ffd3e8")}${circ(50, 50, 25, "#c0398e")}${bravo(50, 48, 9, 5)}`],
  virusn: ["Vírus não envelopado", "vir", "Sem envelope: muito resistente no ambiente e em superfícies. Formato icosaédrico, como o adenovírus.", 151,
    `<path d="M50 6 L88 28 V72 L50 94 L12 72 V28Z" fill="#6fd0c3" ${TR}/><path d="M50 6 V30 M88 28 L68 42 M12 28 L32 42 M50 94 V74 M12 72 L32 62 M88 72 L68 62 M32 42 H68 V62 H32Z" fill="none" stroke="#1d7f73" stroke-width="2"/>${bravo(50, 50, 9, 5)}`],
  helicoidal: ["Vírus helicoidal", "vir", "Formato alongado. Ex.: vírus da raiva.", 149,
    `<path d="M26 92 V38 C26 4 74 4 74 38 V92Z" fill="#55b2ff" ${TR}/><path d="M26 44 q24 14 48 0 M26 60 q24 14 48 0 M26 76 q24 14 48 0" fill="none" stroke="#1f5fa8" stroke-width="3"/>${bravo(50, 30, 9, 4)}`],
  fago: ["Bacteriófago", "vir", "Vírus de formato complexo: cabeça, cauda e “pernas”.", 149,
    `<path d="M50 4 L72 16 V38 L50 50 L28 38 V16Z" fill="#ff9d5c" ${TR}/>${bravo(50, 24, 7, 4)}<path d="M50 50 V76" stroke="${INK}" stroke-width="7"/><path d="M50 74 L20 66 L8 94 M50 74 L34 92 M50 74 L66 92 M50 74 L80 66 L92 94" fill="none" ${TR}/>`],
  retro: ["Retrovírus", "vir", "Tem RNA e usa a transcriptase reversa: RNA vira DNA, o caminho inverso. Ex.: HIV.", 154,
    `${[0, 60, 120, 180, 240, 300].map((a) => `<g transform="rotate(${a} 50 50)"><path d="M50 14 V6" ${TR}/></g>`).join("")}${circ(50, 50, 37, "#8e5bd6")}<text x="50" y="42" text-anchor="middle" font-size="15" font-weight="800" fill="#fff">RNA</text><path d="M30 52 H70 M36 46 L30 52 L36 58" fill="none" stroke="#ffcf5c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><text x="50" y="74" text-anchor="middle" font-size="15" font-weight="800" fill="#fff">DNA</text>`],
  mosquito: ["Arbovírus", "vir", "Transmitido por artrópodes, como mosquitos: dengue, zika, chikungunya e febre amarela.", 161,
    `<ellipse cx="34" cy="28" rx="26" ry="10" fill="#dff3ff" ${TF} transform="rotate(-30 34 28)"/><ellipse cx="66" cy="26" rx="24" ry="9" fill="#dff3ff" ${TF} transform="rotate(26 66 26)"/><path d="M36 64 L20 90 M48 66 L44 94 M60 62 L78 90" fill="none" ${TR}/><ellipse cx="52" cy="52" rx="30" ry="13" fill="#4a4a68" ${TR} transform="rotate(10 52 52)"/><path d="M26 46 L4 40" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>${olho(30, 44, 5)}`],

  // ---------- PROTOZOÁRIOS ----------
  ameba: ["Ameba (rizópodo)", "pro", "Se locomove com pseudópodos, os “pés falsos”. Causa amebíase (Entamoeba histolytica).", 173,
    `<path d="M16 28 C28 6 46 26 54 14 C70 0 86 22 74 38 C96 44 96 66 76 66 C84 90 58 96 48 78 C36 96 8 88 20 64 C0 58 2 34 16 28Z" fill="#7fd9c8" ${TR}/>${rosto(46, 46, 11, 6)}`],
  flagelado: ["Flagelado", "pro", "Se locomove com um longo flagelo. Ex.: giárdia, tripanossoma e leishmania.", 173,
    `<path d="M22 56 C8 28 62 8 72 34 C80 58 50 82 30 72 C26 70 24 62 22 56Z" fill="#b8e986" ${TR}/><path d="M28 70 C12 84 34 90 18 98" fill="none" ${TR}/>${rosto(48, 42, 9, 5)}`],
  ciliado: ["Ciliado", "pro", "Se movimenta com cílios. Ex.: Balantidium.", 173,
    `${Array.from({ length: 18 }, (_, i) => `<g transform="rotate(${i * 20} 50 50)"><path d="M50 18 V8" ${TF}/></g>`).join("")}<ellipse cx="50" cy="50" rx="34" ry="32" fill="#ffd166" ${TR}/>${rosto(50, 46, 11, 6)}`],
  esporozoario: ["Esporozoário", "pro", "Sem organela de locomoção, é parasita obrigatório. Ex.: Plasmodium (malária) e Toxoplasma.", 173,
    `<path d="M12 72 C10 30 60 8 90 22 C88 62 50 92 12 72Z" fill="#f4a3c0" ${TR}/>${circ(66, 36, 7, "#b3123f", TF)}${rosto(42, 56, 9, 5)}`],
  cisto: ["Cisto", "pro", "Forma de transmissão: ingerido na água ou alimento, libera o trofozoíto no intestino.", 174,
    `${circ(50, 50, 40, "#c9b08f")}${circ(50, 50, 29, "#f1e0c6")}<path d="M28 40 q6 -8 12 0 M60 40 q6 -8 12 0" fill="none" ${TF}/><path d="M44 58 q6 4 12 0" fill="none" ${TF}/><text x="74" y="22" font-size="14" font-weight="800" fill="${INK}">z</text>`],
  barbeiro: ["Barbeiro", "pro", "Inseto que transmite a doença de Chagas (Trypanosoma cruzi).", 179,
    `<path d="M50 22 L30 8 M50 22 L70 8 M28 44 L6 36 M72 44 L94 36 M26 60 L8 74 M74 60 L92 74" fill="none" ${TR}/><path d="M50 18 C78 26 80 70 50 94 C20 70 22 26 50 18Z" fill="#54382a" ${TR}/><path d="M34 56 L66 56 M38 70 L62 70" stroke="#ff9d5c" stroke-width="4"/>${olho(42, 34, 5)}${olho(58, 34, 5)}`],

  // ---------- FUNGOS ----------
  levedura: ["Levedura", "fun", "Fungo unicelular que se reproduz por brotamento. Ex.: Candida albicans.", 186,
    `<ellipse cx="42" cy="56" rx="32" ry="30" fill="#f9e39c" ${TR}/>${circ(82, 26, 13, "#f9e39c")}${rosto(42, 52, 11, 6)}`],
  bolor: ["Bolor", "fun", "Fungo pluricelular que forma hifas e micélios. Ex.: Aspergillus, da aspergilose.", 186,
    `<path d="M50 96 V44 M50 72 L22 50 M50 62 L78 40 M22 50 V28 M78 40 V24 M50 44 V24" fill="none" stroke="${INK}" stroke-width="5" stroke-linecap="round"/>${[[50, 16], [22, 20], [78, 16]].map(([x, y]) => circ(x, y, 12, "#6aa8e0") + pontos([[x - 4, y - 3], [x + 4, y + 2], [x, y + 5]], 2, "#fff")).join("")}`],
  cogumelo: ["Cogumelo", "fun", "Fungo macroscópico e pluricelular. O que vemos é só a estrutura reprodutiva.", 187,
    `<path d="M36 52 H64 L68 90 C60 96 40 96 32 90Z" fill="#fff4dc" ${TR}/><path d="M8 54 C8 8 92 8 92 54 C70 62 30 62 8 54Z" fill="#e5383b" ${TR}/>${circ(32, 32, 7, "#fff", TF)}${circ(62, 26, 8, "#fff", TF)}${circ(78, 44, 5, "#fff", TF)}${rosto(50, 70, 8, 4)}`],
  micelio: ["Micélio", "fun", "A rede de hifas, escondida no solo: o verdadeiro corpo do fungo.", 187,
    `<path d="M0 46 H100" stroke="#6d4c33" stroke-width="4"/><rect y="46" width="100" height="54" fill="#caa57f"/><path d="M50 46 V62 M50 62 L26 76 L12 70 M26 76 L30 94 M50 62 L72 78 L90 68 M72 78 L66 94 M50 62 V88" fill="none" stroke="#fff4dc" stroke-width="3.5" stroke-linecap="round"/><path d="M42 26 H58 L60 46 H40Z" fill="#fff4dc" ${TF}/><path d="M28 28 C28 6 72 6 72 28Z" fill="#e5383b" ${TF}/>`],
};
function tubo(p) {
  return `<rect x="30" y="6" width="40" height="88" rx="18" fill="#fff6e0" ${TR}/><rect x="30" y="6" width="40" height="12" fill="#6fd0c3" ${TF}/>${pontos(p, 4, "#6a2fc2")}<text x="72" y="16" font-size="13" font-weight="800" fill="#1d7f73">O₂</text>`;
}
const MASCOTE = { cel: "eucarionte", gen: "dna", san: "hemacia", imu: "macrofago", bac: "bacilo", vir: "viruse", pro: "ameba", fun: "cogumelo" };
const ordemF = Object.keys(F);
function fig(k, cls = "") {
  return `<svg class="fig ${cls}" viewBox="0 0 100 100" aria-hidden="true">${F[k] ? F[k][4] : ""}</svg>`;
}
const figBomba = (cls = "") => `<svg class="fig ${cls}" viewBox="0 0 100 100" aria-hidden="true">${BOMBA}</svg>`;

// Qual desenho reforça cada resposta. A primeira regra que combinar vence.
const REGRAS = [
  [/falciforme|meia lua/i, "falciforme"], [/ferropriva/i, "ferropriva"], [/megaloblást|b12/i, "megaloblastica"],
  [/plaqueta|petéquia|trombo|coágul|hemostasia/i, "plaqueta"], [/neutrófilo/i, "neutrofilo"], [/monócito/i, "monocito"],
  [/macrófago|fagocit/i, "macrofago"], [/eosinófilo/i, "eosinofilo"], [/basófilo|histamina/i, "basofilo"],
  [/linfócito t\b/i, "linfT"], [/natural killer|célula nk|\bnk\b/i, "nk"], [/linfócito b\b/i, "linfB"],
  [/célula-tronco/i, "tronco"], [/medula|hematopoié|hematopoét/i, "medula"], [/hemácia|eritrócito|hemoglobina|anemia|hemograma|arterial/i, "hemacia"],
  [/chave-fechadura|antígeno/i, "chave"], [/anticorpo|imunoglobulina/i, "anticorpo"], [/vacina/i, "vacina"], [/sepse/i, "sepse"],
  [/inata|barreira/i, "escudo"], [/linfócito/i, "linfB"],
  [/gram-positiva|gram \+|violeta/i, "grampos"], [/gram-negativa|gram −|multirresist/i, "gramneg"], [/gram/i, "grampos"],
  [/anaeróbi|necrótico/i, "anaerobia"], [/facultativ/i, "facultativa"], [/aeróbi/i, "aerobia"],
  [/vibri/i, "vibriao"], [/espirilo/i, "espirilo"], [/estafilo/i, "estafilo"], [/\bcocos?\b/i, "coco"], [/bacilo|tuberculose/i, "bacilo"],
  [/probiót|lactobacillus/i, "lactobacilo"], [/divisão binária|cissiparidade/i, "divisao"],
  [/não envelopad/i, "virusn"], [/envelopad|espícula|envelope|capsídeo/i, "viruse"], [/icosa|adenovírus/i, "virusn"],
  [/helicoidal|raiva/i, "helicoidal"], [/bacteriófago/i, "fago"], [/retrovírus|transcriptase|antirretro|integrase|aids|hiv/i, "retro"],
  [/arbovírus|mosquito|dengue|zika|febre amarela/i, "mosquito"], [/barbeiro|chagas/i, "barbeiro"],
  [/malária|plasmodium|esporozo|toxoplasma/i, "esporozoario"], [/amebí|ameba|entamoeba|pseudópod|rizópodo/i, "ameba"],
  [/ciliad|balantidium/i, "ciliado"], [/flagelad|giardí|giárdia|leishmania/i, "flagelado"], [/cisto|trofozoíto/i, "cisto"],
  [/levedura|candid|sapinho/i, "levedura"], [/bolor|aspergil/i, "bolor"], [/micélio|hifa/i, "micelio"], [/cogumelo/i, "cogumelo"],
  [/mitocôndria|atp/i, "mitocondria"], [/neurônio/i, "neuronio"], [/\bdna\b/i, "dna"], [/\brna\b/i, "rna"],
  [/proteína|colágeno|actina|queratina/i, "proteina"], [/eucarionte/i, "eucarionte"], [/procarionte/i, "procarionte"],
];
function figDaQuestao(q) {
  if (q.fig) return q.fig;
  const certa = q.t === "m" ? q.o[0] : q.t === "i" ? "" : "";
  for (const txt of [certa, q.q, q.e || ""]) {
    for (const [re, k] of REGRAS) if (txt && re.test(txt)) return k;
  }
  return MASCOTE[q.s];
}

// Diagramas de tocar. Cada parte clicável é um <g class="hs" data-k="...">.
const DIAG = {
  virus: `<svg class="diag" viewBox="0 0 300 240" role="img" aria-label="Estrutura do vírus">
    <g class="hs" data-k="glico"><g fill="#ff6fb1" stroke="${INK}" stroke-width="3">${[0, 40, 80, 120, 160, 200, 240, 280, 320].map((a) => `<g transform="rotate(${a} 150 120)"><path d="M150 26 V8" stroke-width="6"/><circle cx="150" cy="8" r="9"/></g>`).join("")}</g></g>
    <g class="hs" data-k="envelope"><circle cx="150" cy="120" r="88" fill="none" stroke="${INK}" stroke-width="26"/><circle cx="150" cy="120" r="88" fill="none" stroke="#ffd3e8" stroke-width="20"/></g>
    <g class="hs" data-k="matriz"><circle cx="150" cy="120" r="64" fill="none" stroke="${INK}" stroke-width="24"/><circle cx="150" cy="120" r="64" fill="none" stroke="#7fd9c8" stroke-width="18"/></g>
    <g class="hs" data-k="capsideo"><path d="M150 66 L197 93 V147 L150 174 L103 147 V93Z" fill="#8e5bd6" stroke="${INK}" stroke-width="3"/></g>
    <g class="hs" data-k="genoma"><circle cx="150" cy="120" r="30" fill="#f4e9ff" stroke="${INK}" stroke-width="3"/><path d="M130 120 q7 -18 14 0 t14 0 t14 0" fill="none" stroke="#e5383b" stroke-width="5" stroke-linecap="round"/></g>
  </svg>`,
  bacteria: `<svg class="diag" viewBox="0 0 320 220" role="img" aria-label="Estrutura da bactéria">
    <g class="hs" data-k="flagelo"><path d="M240 110 C262 70 278 150 312 100" fill="none" stroke="transparent" stroke-width="26"/><path d="M240 110 C262 70 278 150 312 100" fill="none" stroke="${INK}" stroke-width="6" stroke-linecap="round"/></g>
    <g class="hs" data-k="fimbrias"><path d="M60 40 L46 10 M100 36 L92 6 M140 34 L140 4 M180 36 L188 6 M60 180 L46 210 M100 184 L92 214 M140 186 L140 216 M180 184 L188 214" stroke="transparent" stroke-width="20"/><path d="M60 40 L46 10 M100 36 L92 6 M140 34 L140 4 M180 36 L188 6 M60 180 L46 210 M100 184 L92 214 M140 186 L140 216 M180 184 L188 214" stroke="${INK}" stroke-width="4" stroke-linecap="round"/></g>
    <g class="hs" data-k="capsula"><rect x="10" y="26" width="240" height="168" rx="82" fill="#e4f6c8" stroke="${INK}" stroke-width="3"/></g>
    <g class="hs" data-k="parede"><rect x="30" y="46" width="200" height="128" rx="62" fill="#5aa832" stroke="${INK}" stroke-width="3"/></g>
    <g class="hs" data-k="membrana"><rect x="48" y="64" width="164" height="92" rx="44" fill="#f4c25b" stroke="${INK}" stroke-width="3"/></g>
    <g class="hs" data-k="citoplasma"><rect x="64" y="80" width="132" height="60" rx="28" fill="#fff4dc" stroke="${INK}" stroke-width="3"/></g>
    <g class="hs" data-k="nucleoide"><rect x="86" y="88" width="50" height="44" fill="transparent"/><path d="M92 112 q8 -22 16 0 t16 0 t8 -4" fill="none" stroke="#b3123f" stroke-width="5" stroke-linecap="round"/></g>
    <g class="hs" data-k="ribossomos"><rect x="146" y="90" width="40" height="40" rx="10" fill="transparent"/><g fill="#6a2fc2"><circle cx="154" cy="100" r="5"/><circle cx="172" cy="98" r="5"/><circle cx="162" cy="114" r="5"/><circle cx="178" cy="118" r="5"/></g></g>
  </svg>`,
  celula: `<svg class="diag" viewBox="0 0 320 240" role="img" aria-label="Célula eucarionte">
    <g class="hs" data-k="membrana"><ellipse cx="160" cy="120" rx="152" ry="112" fill="none" stroke="${INK}" stroke-width="20"/><ellipse cx="160" cy="120" rx="152" ry="112" fill="none" stroke="#f4a3c0" stroke-width="14"/></g>
    <g class="hs" data-k="citoplasma"><ellipse cx="160" cy="120" rx="142" ry="102" fill="#fff0d8"/></g>
    <g class="hs" data-k="nucleo"><circle cx="160" cy="116" r="42" fill="#8e5bd6" stroke="${INK}" stroke-width="3"/><circle cx="170" cy="122" r="12" fill="#5d339f"/></g>
    <g class="hs" data-k="rer"><path d="M112 72 q-24 44 0 90 M98 78 q-22 40 0 78" fill="none" stroke="transparent" stroke-width="16"/><path d="M112 72 q-24 44 0 90 M98 78 q-22 40 0 78" fill="none" stroke="#3f8fd6" stroke-width="8" stroke-linecap="round"/><g fill="${INK}"><circle cx="93" cy="96" r="2.5"/><circle cx="88" cy="118" r="2.5"/><circle cx="93" cy="140" r="2.5"/><circle cx="106" cy="94" r="2.5"/><circle cx="101" cy="116" r="2.5"/><circle cx="106" cy="142" r="2.5"/></g></g>
    <g class="hs" data-k="mitocondria"><ellipse cx="48" cy="104" rx="30" ry="18" fill="#f46d6d" stroke="${INK}" stroke-width="3" transform="rotate(-20 48 104)"/><path d="M28 108 q5 -14 10 0 t10 0 t10 -2" fill="none" stroke="#fff" stroke-width="2.5"/></g>
    <g class="hs" data-k="golgi"><rect x="214" y="44" width="62" height="46" fill="transparent"/><path d="M218 50 q26 -12 52 2 M218 64 q26 -12 52 2 M218 78 q26 -12 52 2" fill="none" stroke="#e09a1a" stroke-width="9" stroke-linecap="round"/></g>
    <g class="hs" data-k="lisossomo"><circle cx="252" cy="136" r="19" fill="#6fd0c3" stroke="${INK}" stroke-width="3"/><circle cx="246" cy="132" r="3" fill="${INK}"/><circle cx="258" cy="140" r="3" fill="${INK}"/></g>
    <g class="hs" data-k="rel"><rect x="164" y="168" width="84" height="40" fill="transparent"/><path d="M170 190 q12 -18 24 0 t24 0 t24 -2" fill="none" stroke="#4cc38a" stroke-width="9" stroke-linecap="round"/></g>
  </svg>`,
};
const NOMES_DIAG = {
  virus: { glico: "Glicoproteínas (espículas)", envelope: "Envelope", matriz: "Matriz viral", capsideo: "Capsídeo", genoma: "DNA ou RNA" },
  bacteria: { flagelo: "Flagelo", fimbrias: "Fímbrias", capsula: "Cápsula", parede: "Parede celular", membrana: "Membrana plasmática", citoplasma: "Citoplasma", nucleoide: "Nucleoide", ribossomos: "Ribossomos" },
  celula: { membrana: "Membrana plasmática", citoplasma: "Citoplasma", nucleo: "Núcleo", rer: "Retículo rugoso (RER)", mitocondria: "Mitocôndria", golgi: "Complexo de Golgi", lisossomo: "Lisossomo", rel: "Retículo liso (REL)" },
};
if (typeof module !== "undefined") module.exports = { F, DIAG, NOMES_DIAG, REGRAS, MASCOTE, figDaQuestao };
