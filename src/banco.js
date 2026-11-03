// Banco de questões. Fonte: Microbiologia OSCH.pdf
// nivel b = página com bomba | nivel c = contexto do mesmo tema
// m = múltipla (1ª opção é a certa) | v = verdadeiro/falso | p = pares | s = separar | o = ordem
const SETORES = {
  cel: { nome: "Célula", ico: "🧫" },
  gen: { nome: "DNA e proteínas", ico: "🧬" },
  san: { nome: "Sangue", ico: "🩸" },
  imu: { nome: "Imunidade", ico: "🛡️" },
  bac: { nome: "Bactérias", ico: "🦠" },
  vir: { nome: "Vírus", ico: "👾" },
  pro: { nome: "Protozoários", ico: "🦟" },
  fun: { nome: "Fungos", ico: "🍄" },
};
const Q = [];
const m = (s, n, p, q, o, e) => Q.push({ t: "m", s, n, p, q, o, e });
const v = (s, n, p, q, a, e) => Q.push({ t: "v", s, n, p, q, a, e });
const pr = (s, n, p, q, pares, e) => Q.push({ t: "p", s, n, p, q, pares, e });
const so = (s, n, p, q, cats, itens, e) => Q.push({ t: "s", s, n, p, q, cats, itens, e });
const or = (s, n, p, q, passos, e) => Q.push({ t: "o", s, n, p, q, passos, e });
const im = (s, n, p, q, op, e) => Q.push({ t: "i", s, n, p, q, op, e, fig: op[0] }); // escolher a imagem (1ª é a certa)
const di = (s, n, p, q, diag, alvo, e, fig) => Q.push({ t: "d", s, n, p, q, diag, alvo, e, fig }); // tocar na estrutura

/* ===================== CÉLULA ===================== */
m("cel","b",3,"O que a microbiologia estuda?",["Os microrganismos (as vidas pequenas)","Somente os órgãos do corpo","Somente as doenças hereditárias","Os ossos e os músculos"],"Micro = pequeno, bio = vida, logia = estudo.");
pr("cel","b",3,"Ligue cada parte da palavra ao significado",[["Micro","Pequeno"],["Bio","Vida"],["Logia","Estudo"]],"Microbiologia = estudo das vidas pequenas.");
v("cel","b",3,"O estudo da microbiologia exige o uso do microscópio.",true,"Os microrganismos não são vistos a olho nu.");
m("cel","b",3,"Qual destes NÃO é objeto de estudo da microbiologia?",["Vértebras","Bactérias","Fungos","Protozoários"],"A aula lista células, bactérias, fungos, vírus, algas e protozoários.");
m("cel","b",19,"A palavra célula vem do latim cella, que significa:",["Câmara","Vida","Pequeno","Núcleo"],"Cella = câmara.");
v("cel","b",19,"As células são as menores unidades funcionais, estruturais e genéticas dos seres vivos.",true,"Essa é a definição da aula. Vale decorar.");
m("cel","b",19,"Quantas células o corpo humano possui, aproximadamente?",["30 trilhões","30 bilhões","3 trilhões","300 milhões"],"Cerca de 30 trilhões, em 200 formas diferentes.");
m("cel","b",19,"Quantas formas diferentes de células possuímos, aproximadamente?",["200","20","2.000","46"],"São 30 trilhões de células em cerca de 200 formas.");
m("cel","b",19,"Como as células podem ser classificadas?",["Eucariontes ou procariontes","Aeróbias ou anaeróbias","Dominantes ou recessivas","Inatas ou adaptativas"],"Euca = núcleo verdadeiro. Proca = sem núcleo formado.");
v("cel","b",19,"As células se diferem em forma e função dependendo de onde se encontram.",true,"O neurônio e a hemácia são exemplos bem diferentes.");
so("cel","c",20,"Procarionte ou eucarionte?",["Procarionte","Eucarionte"],[["Bactérias",0],["Archeas",0],["Cianobactérias",0],["Protozoários",1],["Fungos",1],["Seres humanos",1],["Plantas",1]],"Procariontes formam o antigo reino monera.");
pr("cel","c",22,"Estruturas da bactéria: ligue à função",[["Cápsula","Escudo protetor"],["Parede celular","Dá forma, é rígida"],["Membrana plasmática","Controla entrada e saída"],["Citoplasma","Onde ocorrem as reações"],["Nucleoide","DNA sem núcleo formado"],["Ribossomos","Produzem proteínas"],["Flagelo","Locomoção"],["Fímbrias","Fixação, como ganchos"]],"Bactéria tem DNA, mas não tem núcleo formado.");
v("cel","b",25,"A célula eucarionte possui núcleo verdadeiro.",true,"Dentro do núcleo fica o DNA, organizado em cromossomos.");
v("cel","c",22,"A célula procarionte possui um núcleo bem formado.",false,"Ela tem nucleoide: o DNA fica sem núcleo formado.");
m("cel","b",25,"Na célula eucarionte, onde fica o DNA?",["No núcleo, organizado em cromossomos","Solto no citoplasma","Na membrana plasmática","Nos lisossomos"],"O núcleo guarda a informação e comanda a célula.");
m("cel","b",25,"Qual é a função da membrana plasmática?",["Controlar a entrada e a saída de substâncias","Produzir energia","Digerir a célula","Guardar o DNA"],"Ela envolve toda a célula e controla o que entra e sai.");
m("cel","b",25,"O citoplasma é a região:",["Entre a membrana e o núcleo","Dentro do núcleo","Fora da membrana","Dentro da mitocôndria"],"Ali ficam organelas, água, proteínas, sais minerais e citoesqueleto.");
pr("cel","c",26,"Organelas: ligue à função",[["Mitocôndria","Energia (ATP)"],["RER","Síntese de proteínas"],["REL","Lipídios e desintoxicação"],["Complexo de Golgi","Modifica, empacota, secreta"],["Lisossomos","Digestão celular"],["Peroxissomos","Degrada substâncias tóxicas"]],"RER tem ribossomos, por isso faz proteínas.");
m("cel","c",26,"Qual organela produz a “moeda energética” da célula (ATP)?",["Mitocôndria","Lisossomo","Complexo de Golgi","Peroxissomo"],"Mitocôndria = usina de energia.");
m("cel","b",27,"Qual destas NÃO é uma função geral das células na aula?",["Fotossíntese","Produção de energia","Síntese de proteínas","Manutenção da homeostase"],"As cinco funções: energia, proteínas, reprodução, transporte e homeostase.");
v("cel","b",27,"Reprodução (divisão celular) e transporte de substâncias são funções gerais das células.",true,"Junto com energia, síntese de proteínas e homeostase.");
m("cel","b",28,"As células especializadas são chamadas de “unidade funcional” porque:",["São responsáveis pela função característica do órgão","São as maiores células do corpo","Existem apenas no sangue","Não possuem núcleo"],"Cada órgão tem células que sustentam a sua função.");
pr("cel","c",29,"Ligue a célula ao órgão",[["Neurônio","Cérebro"],["Cardiomiócito","Coração"],["Pneumócito","Pulmões"],["Hepatócito","Fígado"],["Célula tubular","Rim"],["Enterócito","Intestino"],["Célula folicular","Tireoide"],["Queratinócito","Pele"],["Fotorreceptor","Retina"],["Oócito","Ovário"]],"Hepato = fígado. Cardio = coração. Pneumo = pulmão.");
pr("cel","c",30,"Ligue a célula à função",[["Neurônio","Transmite impulsos nervosos"],["Cardiomiócito","Contração do coração"],["Pneumócito","Trocas gasosas e surfactante"],["Hepatócito","Metabolismo e detoxificação"],["Enterócito","Absorve nutrientes"],["Melanócito","Produz melanina"],["Célula folicular","Produz T3 e T4"]],"Tireoide produz T3 e T4 pela célula folicular.");
m("cel","c",30,"Qual célula do pâncreas produz insulina?",["Célula β pancreática","Hepatócito","Enterócito","Célula folicular"],"Beta = insulina.");
m("cel","c",31,"Qual célula dá origem às células sanguíneas?",["Célula-tronco hematopoética","Osteócito","Célula ciliada","Oócito"],"Ela fica na medula óssea.");
m("cel","c",60,"Por que o antibiótico destrói a bactéria e não as nossas células?",["Porque a célula da bactéria (procarionte) é diferente da humana (eucarionte)","Porque as nossas células não têm membrana","Porque a bactéria não tem DNA","Porque a célula humana não tem proteínas"],"É a diferença de estrutura que permite esse alvo.");
pr("cel","c",16,"Quem fez o quê?",[["Robert Hooke","Viu a cortiça e criou o nome célula"],["Leeuwenhoek","Viu os “animálculos”"],["Schleiden e Schwann","Teoria Celular"],["Ruska e Knoll","Microscópio eletrônico"]],"Hooke = 1665, cortiça. Leeuwenhoek = 1674, animálculos.");
v("cel","c",18,"Pela Teoria Celular, toda célula tem origem de outra célula.",true,"Também é a unidade estrutural e funcional do ser vivo.");

/* ===================== DNA E PROTEÍNAS ===================== */
v("gen","b",51,"Toda predisposição genética envolve hereditariedade, mas nem toda hereditariedade significa doença.",true,"Essa frase é da aula.");
m("gen","b",51,"O que é predisposição genética?",["Uma herança que pode aumentar o risco de desenvolver uma doença","A certeza de que a pessoa terá a doença","Uma infecção transmitida pelos pais","Uma doença causada por vírus"],"É tendência, não destino.");
m("gen","b",51,"Hereditariedade é:",["O que você recebe geneticamente da família","Um hábito de vida","Uma infecção adquirida","A produção de anticorpos"],"A aula resume como o que vem da família.");
v("gen","b",51,"Ter predisposição genética significa que a pessoa com certeza terá a doença.",false,"Ela é tendência. Hábitos saudáveis podem reduzir a chance.");
v("gen","b",51,"Quem tem mãe e avó com diabetes pode reduzir a chance de ter a doença com hábitos saudáveis.",true,"Esse é o exemplo do slide.");
so("gen","b",52,"Hereditariedade ou predisposição?",["Hereditariedade","Predisposição"],[["Anemia falciforme",0],["Daltonismo",0],["Síndromes cromossômicas",0],["Diabetes",1],["Hipertensão",1],["Câncer",1]],"Falciforme e daltonismo são hereditários. Diabetes, hipertensão e câncer são tendência.");
pr("gen","b",58,"Ligue cada molécula ao papel dela",[["DNA","Guarda a informação"],["RNA","Leva a informação"],["Proteína","Executa a função"]],"Guarda, leva, executa.");
v("gen","b",58,"São as proteínas que executam praticamente todas as funções do organismo.",true,"O DNA guarda e o RNA leva, mas a proteína faz.");
m("gen","c",54,"Onde vive o DNA?",["No núcleo: ele não sai de dentro","No citoplasma","Nos ribossomos","Na corrente sanguínea"],"Quem sai do núcleo é o RNA.");
m("gen","c",55,"Quem leva a informação para fora do núcleo?",["RNA","DNA","Hemoglobina","Mitocôndria"],"RNA é o mensageiro do DNA.");
or("gen","c",55,"Coloque em ordem as fases da síntese de proteínas",["Transcrição: cópia de parte do DNA","Mensagem: RNA leva a informação","Tradução: formam-se as proteínas"],"Transcreve, leva, traduz.");
m("gen","c",55,"Na síntese de proteínas, a transcrição é:",["A cópia de parte do DNA","A união dos aminoácidos","A divisão da célula","A entrada do vírus"],"A tradução é que forma a proteína a partir de aminoácidos.");
m("gen","c",55,"O RNA leva a informação até qual estrutura?",["Ribossomos","Lisossomos","Mitocôndrias","Peroxissomos"],"É nos ribossomos que a proteína é produzida.");
pr("gen","c",59,"Função da proteína: ligue ao exemplo",[["Enzimas","Digestivas"],["Estrutura","Colágeno e queratina"],["Transporte","Hemoglobina"],["Defesa","Anticorpos"],["Comunicação","Insulina"],["Movimento","Actina e miosina"]],"Seis funções da aula.");
m("gen","c",59,"Actina e miosina são proteínas ligadas a qual função?",["Contração muscular","Transporte de oxigênio","Controle da glicemia","Formação do cabelo"],"Movimento = actina e miosina.");
m("gen","c",59,"Qual proteína leva oxigênio no sangue?",["Hemoglobina","Insulina","Queratina","Colágeno"],"Hemoglobina = transporte.");
m("gen","c",59,"Colágeno e queratina formam:",["Pele, cabelo, unhas e tecidos","Anticorpos","Enzimas digestivas","Hormônios"],"São proteínas de estrutura.");

/* ===================== SANGUE ===================== */
m("san","b",63,"Qual é o principal local do sistema hematopoiético?",["Medula óssea","Fígado","Pâncreas","Rim"],"A medula dá origem às células do sangue.");
m("san","b",63,"O sistema hematopoiético é responsável por:",["Produção, maturação e renovação das células do sangue","Digestão dos alimentos","Produção de hormônios da tireoide","Filtragem da urina"],"Ele repõe bilhões de células por dia.");
v("san","b",63,"O sistema hematopoiético usa células-tronco para repor bilhões de células todos os dias.",true,"Isso garante oxigênio, defesa e coagulação.");
m("san","b",64,"Qual é a proporção de plasma no sangue, segundo a aula?",["55%","15%","75%","95%"],"Plasma = 55%.");
m("san","b",64,"Qual destas NÃO é função do sangue?",["Produzir queratina","Transportar oxigênio","Transportar hormônios","Regular a coagulação"],"Sangue também defende e elimina substâncias tóxicas.");
v("san","b",64,"O sangue ajuda a eliminar substâncias tóxicas e a defender o organismo.",true,"Além de transportar oxigênio, nutrientes e hormônios.");
so("san","c",65,"Sangue arterial ou venoso?",["Arterial","Venoso"],[["Vermelho vivo",0],["Oxigenado",0],["Mais escuro, cor de vinho",1],["Desoxigenado",1]],"Mais oxigênio = vermelho mais vivo.");
so("san","c",67,"Qual linhagem dá origem?",["Mielóide","Linfóide"],[["Hemácias",0],["Plaquetas",0],["Neutrófilos",0],["Monócitos",0],["Linfócito T",1],["Linfócito B",1],["Célula NK",1]],"Linfóide = linfócitos. Quase todo o resto é mielóide.");
m("san","b",69,"Outro nome das hemácias:",["Eritrócitos","Leucócitos","Trombócitos","Linfócitos"],"Também chamadas de glóbulos vermelhos.");
m("san","b",69,"Por que a hemácia não ter núcleo é uma vantagem?",["Permite carregar mais hemoglobina","Faz ela viver para sempre","Permite produzir anticorpos","Faz ela coagular melhor"],"Sem núcleo, sobra espaço para a hemoglobina.");
v("san","b",69,"As hemácias possuem núcleo.",false,"Não têm núcleo, o que permite carregar mais hemoglobina.");
v("san","b",69,"A hemoglobina é rica em ferro e dá a cor vermelha ao sangue na presença de oxigênio.",true,"O ferro se liga ao O₂.");
m("san","b",69,"Quais são os elementos figurados mais numerosos do sangue?",["Hemácias","Plaquetas","Neutrófilos","Linfócitos"],"Os glóbulos vermelhos são os mais numerosos.");
pr("san","b",70,"Ligue a anemia à característica",[["Ferropriva","Falta de ferro: hemácias pequenas e descoradas"],["Megaloblástica","Falta de B12: hemácias grandes e imaturas"],["Falciforme","Mutação genética: forma de meia lua"]],"Ferro = ferropriva. B12 = megaloblástica. Foice = falciforme.");
m("san","b",70,"O que é anemia, segundo a aula?",["Diminuição ou malformação das hemácias","Aumento de plaquetas","Falta de linfócitos","Excesso de hemoglobina"],"O exame que mede é o hemograma.");
m("san","b",70,"A anemia megaloblástica é causada pela deficiência de:",["Vitamina B12","Ferro","Vitamina C","Cálcio"],"As hemácias ficam grandes, imaturas e morrem antes de amadurecer.");
m("san","b",70,"Qual anemia é causada por mutação genética que deforma a hemácia?",["Falciforme","Ferropriva","Megaloblástica","Nenhuma delas"],"A hemácia fica em forma de meia lua.");
m("san","b",70,"Qual exame mede a quantidade e a saúde das hemácias?",["Hemograma","Coloração de Gram","Urina tipo 1","Raio X"],"Hemograma.");
m("san","b",70,"Qual dieta ajuda a manter a saúde das hemácias?",["Rica em ferro, vitamina B12 e ácido fólico","Rica em açúcar","Sem nenhuma proteína","Rica apenas em gordura"],"Junto com a hidratação.");
v("san","c",79,"Na anemia falciforme, as hemácias podem se aglomerar e obstruir o fluxo de sangue.",true,"A hemoglobina forma um bastão rígido e deforma a hemácia.");
m("san","b",71,"O que são as plaquetas?",["Fragmentos celulares essenciais para a coagulação","Células com núcleo que carregam O₂","Células que produzem anticorpos","Proteínas do plasma"],"São produzidas na medula óssea.");
m("san","b",71,"Quanto tempo as plaquetas circulam, aproximadamente?",["7 a 10 dias","1 hora","120 dias","1 ano"],"Vida útil de 7 a 10 dias.");
m("san","b",71,"Qual é a principal função das plaquetas?",["Formar o coágulo e cessar sangramentos","Transportar oxigênio","Fagocitar bactérias","Produzir histamina"],"Hemostasia.");
v("san","b",71,"As plaquetas são produzidas na medula óssea.",true,"Assim como as outras células do sangue.");
or("san","c",72,"Ordem da ação das plaquetas na lesão do vaso",["Adesão plaquetária","Ativação plaquetária","Agregação plaquetária"],"Gruda, ativa, agrega.");
m("san","b",73,"Pontos vermelhos na pele por plaquetas baixas são chamados de:",["Petéquias","Trombos","Bolhas","Cistos"],"Podem vir com hematomas e sangramento.");
m("san","b",73,"Qual é uma causa comum de plaquetas baixas citada na aula?",["Dengue","Hipertensão","Cárie","Miopia"],"Também infecções, falta de vitaminas, autoimunes e problemas na medula.");
m("san","b",73,"Plaquetas altas (trombocitose) favorecem:",["Formação de trombos","Petéquias","Anemia ferropriva","Queda de cabelo"],"Plaqueta demais = trombo.");
pr("san","b",75,"Ligue o leucócito à função",[["Neutrófilos","1ª linha, infecções bacterianas"],["Monócitos","Dão origem aos macrófagos"],["Eosinófilos","Parasitas e alergias"],["Basófilos","Alergias e histamina"],["Macrófagos","Fagocitose"]],"Eosinófilo = parasita. Basófilo = histamina.");
m("san","b",75,"Qual leucócito é a primeira linha de defesa, principalmente contra bactérias?",["Neutrófilo","Eosinófilo","Basófilo","Linfócito B"],"Neutrófilo = primeira linha.");
m("san","b",75,"Qual leucócito combate parasitas?",["Eosinófilo","Neutrófilo","Monócito","Linfócito T"],"Também age em reações alérgicas.");
m("san","b",75,"Qual leucócito está ligado à liberação de histamina?",["Basófilo","Monócito","Neutrófilo","Macrófago"],"Basófilo = alergia e histamina.");
m("san","b",75,"Os monócitos dão origem a:",["Macrófagos","Hemácias","Plaquetas","Linfócitos"],"Os macrófagos fazem fagocitose.");
m("san","b",75,"Os leucócitos também são conhecidos como:",["Glóbulos brancos","Glóbulos vermelhos","Plaquetas","Eritrócitos"],"Células de defesa produzidas na medula.");
pr("san","b",76,"Ligue o linfócito à função",[["Linfócito T","Coordena e destrói células infectadas"],["Linfócito B","Produz anticorpos"],["Célula NK","Resposta rápida e inespecífica"]],"B de “bala”: dispara anticorpos.");
m("san","b",76,"Qual a proporção de linfócitos entre os leucócitos?",["20 a 40%","1 a 2%","60 a 80%","Menos de 1%"],"Representam 20 a 40%.");
m("san","b",76,"Qual célula produz anticorpos específicos?",["Linfócito B","Linfócito T","Célula NK","Neutrófilo"],"B = anticorpos.");
v("san","b",76,"As células NK dão resposta rápida contra infecções e tumores.",true,"NK = Natural Killer.");
m("san","b",77,"Na clínica, o técnico deve ficar atento a:",["Fraqueza, falta de ar sem causa, desmaios e sangramentos repentinos","Apenas à cor do cabelo","Apenas à altura do paciente","Apenas à queixa de sede"],"Também taquicardia, taquipneia, confusão mental e hematomas.");
v("san","b",77,"O uso de anticoagulantes é um dado que o técnico deve observar.",true,"Junto com hematomas e sangramentos repentinos.");
pr("san","c",78,"Hemograma: ligue o item ao significado",[["VCM","Tamanho das hemácias"],["HCM","Hb nas hemácias"],["CHCM","% de Hb na hemácia"],["RDW","Variação do tamanho"],["Hematócrito","% ocupada por hemácias"],["Hemoglobina","Proteína que carrega O₂"]],"Hemograma tem série vermelha, série branca e plaquetas.");
pr("san","c",78,"Hemograma, série branca: ligue à defesa",[["Neutrófilos","Bactérias"],["Eosinófilos","Parasitas e algumas alergias"],["Basófilos","Reações alérgicas"],["Linfócitos","Vírus e produção de anticorpos"],["Monócitos","Inflamação e fagocitose"]],"Tabela do hemograma da aula.");

/* ===================== IMUNIDADE ===================== */
m("imu","b",82,"Qual destes NÃO é órgão do sistema imunológico na aula?",["Estômago","Timo","Baço","Linfonodos"],"Timo, baço, medula óssea, tonsilas, linfonodos e vasos linfáticos.");
m("imu","b",82,"O sistema imunológico é responsável por:",["Defender o organismo","Produzir a urina","Digerir a comida","Sustentar o corpo"],"É uma grande barreira de proteção.");
v("imu","b",82,"Tonsilas e medula óssea fazem parte do sistema imunológico.",true,"Junto com timo, baço, linfonodos e vasos linfáticos.");
m("imu","c",83,"Qual célula fagocita restos de células e microrganismos e inicia a resposta imune?",["Macrófago","Hemácia","Plaqueta","Linfócito B"],"Macrófago = fagocitose.");
v("imu","c",83,"Os linfócitos B e T reconhecem e destroem microrganismos.",true,"É a resposta específica.");
so("imu","b",85,"Qual tipo de barreira da imunidade inata?",["Física","Química","Biológica"],[["Pelos",0],["Cílios",0],["Muco",0],["Pele",0],["Suco gástrico",1],["Suor",1],["Neutrófilos",2],["Macrófagos",2]],"Física bloqueia, química destrói, biológica são as células.");
m("imu","b",85,"A imunidade inata é:",["Natural e congênita: a primeira linha de defesa","Adquirida apenas por vacina","Produzida só depois de adulto","Exclusiva dos linfócitos"],"Nascemos com ela.");
v("imu","b",85,"Quando a imunidade inata não é suficiente, a imunidade adquirida entra em ação.",true,"A inata vem primeiro.");
so("imu","b",86,"Inata ou adaptativa?",["Inata","Adaptativa"],[["Congênita",0],["Primeira linha de defesa",0],["Pele e muco",0],["Adquirida ao longo da vida",1],["Vacinas",1],["Depende de linfócitos",1]],"Inata: nasce com você. Adaptativa: você adquire.");
m("imu","b",86,"A imunidade adaptativa depende da ativação de quais células?",["Linfócitos","Hemácias","Plaquetas","Queratinócitos"],"Ela age diante de um problema específico.");
v("imu","b",86,"As vacinas estão ligadas à imunidade adaptativa.",true,"É a defesa adquirida ao longo da vida.");
m("imu","b",87,"Anticorpos também são chamados de:",["Imunoglobulinas","Antígenos","Histaminas","Hemoglobinas"],"São proteínas produzidas pelos linfócitos.");
m("imu","b",87,"Antígeno é:",["Substância capaz de desencadear resposta do sistema imune","Uma célula de defesa","Um tipo de anticorpo","Uma proteína do plasma"],"Exemplos: alérgeno, microrganismo e corpo estranho.");
m("imu","b",87,"O modelo “chave-fechadura” significa que cada anticorpo:",["Se liga apenas a um determinado antígeno","Se liga a qualquer antígeno","Destrói qualquer célula","Só atua no intestino"],"Atuação específica.");
v("imu","b",87,"Um mesmo anticorpo atua igualmente contra qualquer antígeno.",false,"Cada anticorpo é específico para um antígeno (chave-fechadura).");
m("imu","b",87,"Depois de se ligar ao antígeno, o anticorpo pode:",["Destruir, inativar ou sinalizar para a fagocitose","Virar uma hemácia","Formar um coágulo","Produzir um novo vírus"],"Sinaliza para os leucócitos fagocitarem.");
m("imu","b",87,"Qual destes pode agir como antígeno?",["Um alérgeno","A água do plasma","Um linfócito sadio do próprio corpo","Uma hemácia sadia do próprio corpo"],"Alérgeno, microrganismo ou corpo estranho.");
m("imu","b",90,"Memória imunológica é:",["A capacidade de recordar um invasor já combatido e reagir rápido","A perda das células de defesa","Uma alergia a medicamentos","O início de uma doença autoimune"],"Permite defesa rápida e eficaz em futuras invasões.");
v("imu","b",90,"A memória imunológica pode dar resposta rápida antes mesmo dos primeiros sinais e sintomas.",true,"Por isso protege contra doenças.");
m("imu","b",91,"Febre muito alta ou persistente, queda de pressão, taquicardia e confusão mental: pensar em:",["Sepse: emergência","Alergia leve","Anemia ferropriva","Cãibra"],"Sepse é emergência.");
v("imu","b",91,"Alterações no sistema imune aumentam o risco de infecção e podem piorar a recuperação.",true,"E podem causar doenças autoimunes.");
pr("imu","c",92,"Ligue a alteração à doença",[["Imunodeficiência","HIV/AIDS"],["Doença autoimune","Lúpus"],["Alergia","Asma"]],"Autoimune: o corpo ataca a si mesmo.");
m("imu","c",92,"Na doença autoimune:",["O corpo ataca a si mesmo","A defesa fica exagerada contra pólen","Faltam hemácias","Falta ferro"],"Exemplos: lúpus e artrite reumatoide.");
m("imu","c",92,"Assistência de enfermagem em alterações imunes inclui:",["Observar febre, sinais de infecção e controle de isolamento","Suspender todo alimento","Evitar a higiene das mãos","Dispensar a vigilância"],"Cuidar também de imunossuprimidos.");

/* ===================== BACTÉRIAS E PATÓGENOS ===================== */
m("bac","b",100,"Qual destes NÃO favorece o surgimento de doenças, segundo a aula?",["Água limpa","Falta de saneamento básico","Proliferação de roedores","Contato com dejetos contaminantes"],"A falta de água limpa é que favorece doenças.");
v("bac","b",100,"Falta de higiene, proliferação de insetos e de roedores favorecem doenças.",true,"Junto com a falta de saneamento e de água limpa.");
m("bac","b",110,"Qual é a mensagem final da aula sobre microrganismos?",["Mesmo pequenos, podem impactar milhões de vidas","São inofensivos","Só atingem plantas","Não precisam ser estudados"],"Só cuidamos com segurança daquilo que conhecemos.");
m("bac","c",109,"O que causou as grandes epidemias da história estudadas na aula?",["Microrganismos","Guerras","Desastres naturais","Falta de sono"],"Seres invisíveis, porém muito poderosos.");
m("bac","c",101,"A Peste Negra é causada por qual bactéria, transmitida por qual vetor?",["Yersinia pestis, por pulgas de ratos","Vibrio cholerae, por água","Salmonella typhi, por mosquitos","Treponema pallidum, por contato sexual"],"Y de Yersinia, P de peste e de pulga.");
m("bac","c",104,"Quem relacionou a cólera à água contaminada, em 1850?",["John Snow","Robert Hooke","Louis Pasteur","Galileu Galilei"],"Em 1883, Robert Koch identificou o Vibrio cholerae.");
m("bac","c",104,"A cólera mata principalmente por:",["Desidratação severa","Hemorragia cerebral","Fratura óssea","Falta de insulina"],"Persiste onde falta saneamento básico.");
pr("bac","c",108,"HIV/AIDS: ligue o ano ao fato",[["1983","Identificação do vírus HIV"],["1987","Início dos testes com AZT"],["1988","Programa Nacional DST/Aids e SUS"],["1996","Lei 9.313: remédios gratuitos"]],"Linha do tempo da aula.");
m("bac","b",112,"As bactérias são organismos:",["Unicelulares, procariontes e assexuados","Pluricelulares e eucariontes","Acelulares","Unicelulares e eucariontes"],"Reprodução por divisão binária.");
v("bac","b",112,"Bactérias são seres eucariontes.",false,"São procariontes.");
m("bac","b",112,"O nome científico da bactéria tem:",["Gênero e espécie","Reino e filo","Só a espécie","Só o gênero"],"Exemplos: Staphylococcus aureus e Escherichia coli.");
m("bac","b",112,"Quanto à forma, as bactérias são classificadas em:",["Cocos, bacilos, espirilos e vibriões","Icosaédricas e helicoidais","Leveduras e bolores","Ciliadas e flageladas"],"A forma é a sua “identidade visual”.");
m("bac","b",112,"Quanto ao oxigênio, as bactérias podem ser:",["Aeróbias e anaeróbias","Envelopadas e não envelopadas","Inatas e adaptativas","Dominantes e recessivas"],"Há também as facultativas.");
so("bac","b",112,"Isto é classificação de bactéria por:",["Forma","Oxigênio","Coloração"],[["Cocos",0],["Bacilos",0],["Aeróbia",1],["Anaeróbia",1],["Gram-positiva",2],["Gram-negativa",2]],"Forma, oxigênio e Gram são três jeitos de classificar.");
pr("bac","c",113,"Ligue a morfologia ao formato",[["Cocos","Arredondadas"],["Bacilos","Bastonetes"],["Vibriões","Formato de vírgula"],["Espirilos","Espiraladas"]],"Morfologia = formato.");
m("bac","c",113,"Por que a morfologia bacteriana é importante?",["Identificação, diagnóstico, tratamento e controle de infecção","Define o tipo sanguíneo","Mede a glicemia","Serve só para pesquisa"],"É a “identidade visual” da bactéria.");
m("bac","b",114,"A reprodução das bactérias é:",["Assexuada, por divisão binária (cissiparidade)","Sexuada, por gametas","Por brotamento","Por esporos de pólen"],"Uma bactéria se divide em duas.");
so("bac","b",115,"Que tipo de bactéria é?",["Aeróbia","Anaeróbia","Facultativa"],[["Precisa de oxigênio para crescer",0],["O oxigênio pode ser letal",1],["Encontrada em tecidos necróticos",1],["Encontrada em solos profundos",1],["Vive com ou sem oxigênio",2]],"Facultativa = tanto faz.");
m("bac","b",115,"Bactérias anaeróbias são encontradas em:",["Solos profundos e tecidos necróticos","Topo de montanhas","Superfície de folhas ao sol","Ar puro"],"O oxigênio é um problema para elas.");
v("bac","b",115,"Bactérias facultativas vivem e crescem com ou sem oxigênio.",true,"Facultativa = pode escolher.");
m("bac","b",117,"Bactérias probióticas são aquelas que:",["Melhoram o equilíbrio microbiano e fazem bem à saúde","Sempre causam doença","Só vivem em tecidos necróticos","Produzem toxinas letais"],"Pró-vida.");
m("bac","b",117,"Qual destas é citada como probiótica?",["Lactobacillus bulgaricus","Yersinia pestis","Clostridium tetani","Vibrio cholerae"],"Também Bifidobacterium bifidum e Streptococcus thermophilus.");
m("bac","b",118,"Microbiota é:",["O conjunto de microrganismos que vive nos tecidos e fluidos humanos","Um tipo de vacina","Uma doença causada por fungos","Um tipo de antibiótico"],"Composta principalmente de bactérias, mas com fungos e vírus.");
m("bac","b",118,"Estima-se que a superfície do corpo tenha quantos kg de microrganismos?",["1 a 2 kg","10 a 20 kg","100 g","50 kg"],"De 1 a 2 kg.");
v("bac","b",118,"Cada local do corpo tem microbioma e função específicos.",true,"Oral, intestinal, vaginal, cutânea, pulmonar.");
pr("bac","c",119,"Ligue a microbiota à função",[["Oral","Saúde bucal, ajuda a digerir"],["Intestinal","Digestão e regulação metabólica"],["Vaginal","Regula pH e protege"],["Cutânea","Protege a pele contra patógenos"],["Pulmonar","Muco e retenção de partículas"]],"Cada lugar, uma função.");
v("bac","b",120,"Bactérias da nossa própria microbiota podem causar doença se entrarem no tecido após uma lesão.",true,"Podem até se disseminar na corrente sanguínea.");
m("bac","b",120,"Normalmente, as bactérias da microbiota têm a função de:",["Proteção, produção de muco e decomposição de alimentos","Destruir hemácias","Causar febre diariamente","Bloquear o oxigênio"],"Geralmente não causam doenças.");
m("bac","b",121,"A invasão bacteriana começa com:",["A adesão à superfície celular","A divisão do DNA humano","A fagocitose","A produção de anticorpos"],"Depois vêm as alterações que permitem a entrada.");
m("bac","b",121,"Qual destes é um local potencialmente estéril?",["Corrente sanguínea","Intestino","Pele","Boca"],"Corrente sanguínea e sistema nervoso central.");
m("bac","b",121,"Qual destas é causa de exposição a patógenos, segundo a aula?",["Feridas cirúrgicas e dispositivos médicos","Dormir bem","Lavar as mãos","Beber água tratada"],"Também alimentos, cortes e feridas.");
or("bac","c",122,"Coloque em ordem o caminho da infecção bacteriana",["Exposição","Adesão","Invasão","Infecção","Dano tecidual"],"Expõe, adere, invade, infecta, danifica.");
m("bac","b",123,"A patogênese depende da interação entre:",["Virulência da bactéria e resistência do hospedeiro","Altura e peso do paciente","Vacina e antibiótico","Glicemia e pressão"],"Ataque contra defesa.");
m("bac","b",123,"Quais sintomas podem surgir na invasão bacteriana?",["Febre alta, dor intensa, dificuldade de respirar e confusão mental","Apenas coceira leve","Apenas aumento de apetite","Nenhum, nunca há sintomas"],"Dependem do local, do órgão e do tempo de exposição.");
m("bac","b",127,"A coloração de Gram analisa:",["A composição da parede celular","A cor do DNA","O tipo sanguíneo","A forma do núcleo"],"Classifica em Gram-positivas e Gram-negativas.");
m("bac","b",127,"Por que diferenciar Gram-positiva de Gram-negativa?",["Para determinar o tratamento eficaz","Para saber a idade da bactéria","Para definir a dieta","Para medir o oxigênio do sangue"],"Terapia adequada para cada tipo.");
so("bac","b",128,"Gram-positiva ou Gram-negativa?",["Gram +","Gram −"],[["Cor violeta",0],["Parede simples",0],["Rica em peptideoglicano",0],["Menos resistente a antibióticos",0],["Cor vermelha",1],["Parede complexa",1],["Menos peptideoglicano",1],["Multirresistentes",1]],"Positiva = violeta. Negativa = vermelha e mais resistente.");
m("bac","b",128,"Qual grupo é mais resistente a antibióticos?",["Gram-negativas","Gram-positivas","Os dois são iguais","Nenhum tem resistência"],"Entre elas estão as multirresistentes.");
m("bac","b",128,"Qual é a cor da Gram-positiva?",["Violeta","Vermelha","Verde","Azul-claro"],"Positiva = violeta.");
v("bac","b",128,"A Gram-negativa tem parede mais complexa e menos peptideoglicano.",true,"Por isso é mais resistente.");
v("bac","b",128,"As Gram-positivas são mais resistentes a antibióticos que as Gram-negativas.",false,"É o contrário: Gram-negativas são mais resistentes.");
or("bac","c",129,"Etapas da coloração de Gram",["Cristal violeta","Iodo","Álcool","Safranina"],"Violeta, iodo, lava com álcool, safranina.");
so("bac","c",130,"Gram-positiva ou negativa?",["Gram +","Gram −"],[["Staphylococcus",0],["Streptococcus",0],["Clostridium",0],["Bacillus",0],["Lactobacillus",0],["Escherichia",1],["Salmonella",1],["Neisseria",1],["Pseudomonas",1],["Klebsiella",1],["Helicobacter",1]],"Lista dos slides.");
m("bac","b",131,"Qual destas é uma forma de bactéria?",["Vibrião","Icosaédrica","Levedura","Helicoidal"],"Cocos, bacilos, espirilos, vibriões e esporulados.");
m("bac","c",132,"Qual destas NÃO é forma de transmissão de doença bacteriana?",["Herança dos cromossomos","Ar e gotículas","Água e alimentos contaminados","Ferimentos e cortes"],"Também contato direto, objetos e relações sexuais.");
pr("bac","c",133,"Respiratórias: ligue a doença à bactéria",[["Tuberculose","Mycobacterium tuberculosis"],["Pneumonia","Streptococcus pneumoniae"],["Coqueluche","Bordetella pertussis"],["Difteria","Corynebacterium diphtheriae"],["Meningite","Neisseria meningitidis"]],"Bordetella = coqueluche. Coryne = difteria.");
pr("bac","c",134,"Gastrointestinais: ligue a doença à bactéria",[["Cólera","Vibrio cholerae"],["Febre tifoide","Salmonella typhi"],["Disenteria","Shigella spp."],["Gastrite e úlcera","Helicobacter pylori"],["Botulismo","Clostridium botulinum"]],"Pylori = piloro, parte do estômago.");
pr("bac","c",135,"Pele e tecidos: ligue a doença à bactéria",[["Hanseníase","Mycobacterium leprae"],["Erisipela","Streptococcus pyogenes"],["Celulite infecciosa","Staphylococcus aureus"],["Tétano","Clostridium tetani"]],"Lepra = leprae. Tétano = tetani.");
pr("bac","c",136,"Sistêmicas: ligue a doença à bactéria",[["Leptospirose","Leptospira interrogans"],["Peste bubônica","Yersinia pestis"],["Antraz","Bacillus anthracis"]],"Os nomes ajudam: lepto, pestis, anthracis.");
pr("bac","c",138,"ISTs bacterianas: ligue a doença à bactéria",[["Sífilis","Treponema pallidum"],["Gonorreia","Neisseria gonorrhoeae"],["Clamídia","Chlamydia trachomatis"]],"Gonorreia = gonorrhoeae.");
pr("bac","c",137,"Ligue a infecção à bactéria",[["Infecção urinária","Escherichia coli"],["Intoxicação alimentar","Staphylococcus aureus"],["Listeriose","Listeria monocytogenes"]],"ITU = E. coli.");
pr("bac","c",134,"Ligue a doença ao principal sinal",[["Tuberculose","Afeta principalmente os pulmões"],["Coqueluche","Tosse seca e crises de engasgo"],["Cólera","Diarreia intensa e desidratação"],["Disenteria","Diarreia com sangue"],["Botulismo","Fraqueza muscular e paralisia"],["Tétano","Rigidez muscular"],["Hanseníase","Lesões na pele e nervos"],["Sífilis","Feridas indolores"]],"Sinais dos quadros das p.133 a 138.");
m("bac","c",136,"Qual doença é transmitida pela urina de animais?",["Leptospirose","Tuberculose","Coqueluche","Sífilis"],"Lepto = rato e enchente na memória.");
m("bac","c",135,"O tétano entra no corpo principalmente por:",["Ferimentos","Tosse","Água tratada","Herança genética"],"Causa rigidez muscular.");
m("bac","c",136,"Sepse bacteriana é:",["Infecção generalizada que pode levar à falência de órgãos","Infecção restrita à unha","Alergia alimentar","Deficiência de ferro"],"É grave e sistêmica.");
m("bac","c",139,"Sobre antibióticos, o correto é:",["Nunca usar por conta própria: só com prescrição","Usar sempre que tiver gripe","Parar assim que melhorar","Compartilhar com a família"],"O uso correto evita resistência bacteriana.");
m("bac","c",139,"Qual destas é uma medida de prevenção de doenças bacterianas?",["Vacinação e higiene","Compartilhar objetos pessoais","Consumir alimentos crus","Dispensar preservativos"],"Também água tratada e alimentos bem cozidos.");

/* ===================== VÍRUS ===================== */
m("vir","b",146,"A palavra vírus vem do latim e significa:",["Fluido venenoso ou toxina","Pequena câmara","Vida pequena","Pé falso"],"Vírus = veneno.");
v("vir","b",146,"Os vírus são acelulares: não possuem célula.",true,"Por isso não são considerados seres vivos.");
m("vir","b",146,"O vírus é um parasita:",["Intracelular obrigatório","De vida livre","Extracelular","Apenas de plantas"],"Só se multiplica dentro de uma célula.");
m("vir","b",146,"Do que é composto um vírus?",["Capa proteica (capsídeo), ácido nucleico (DNA ou RNA) e, às vezes, envelope","Núcleo, mitocôndrias e parede de quitina","Citoplasma e ribossomos","Só de gordura"],"Lembre: capsídeo + DNA ou RNA + envelope*.");
m("vir","b",146,"Os vírus podem ter cerca de:",["20 nanômetros","20 centímetros","2 milímetros","20 metros"],"Por isso não são vistos no microscópio comum.");
pr("vir","b",146,"Classificação dos vírus: ligue",[["Adenovírus","Compostos de DNA"],["Retrovírus","Compostos de RNA"],["Arbovírus","Transmitidos por insetos"]],"Adeno = DNA. Retro = RNA. Arbo = artrópode.");
v("vir","b",146,"A reprodução viral depende do tipo de vírus e da célula invadida.",true,"Por isso os ciclos variam.");
pr("vir","b",148,"Estrutura viral: ligue à função",[["Envelope","Entrada na célula e proteção"],["Capsídeo","Proteção e forma"],["RNA/DNA","Informação genética"],["Matriz","Organização e montagem"]],"Decore essa tabelinha: costuma render questão.");
m("vir","b",148,"Qual estrutura viral dá proteção e forma?",["Capsídeo","Matriz","Envelope","Glicoproteína"],"Capsídeo = capa.");
m("vir","b",148,"Qual estrutura viral é responsável pela organização e montagem?",["Matriz","Capsídeo","RNA/DNA","Envelope"],"Matriz monta.");
pr("vir","c",149,"Morfologia viral: ligue ao exemplo",[["Icosaédrico","Adenovírus"],["Helicoidal","Vírus da raiva"],["Complexo","Bacteriófago"]],"Ico = geométrico. Hélice = alongado.");
so("vir","b",150,"Envelopado ou não envelopado?",["Envelopado","Não envelopado"],[["Menos resistente no ambiente",0],["Funde o envelope com a membrana",0],["Tem espículas para os receptores",0],["Invade a célula com facilidade",0],["Muito resistente no ambiente",1],["Sobrevive em superfícies",1],["Resiste a pH ácido",1],["Transmite com mais facilidade",1]],"Com envelope entra melhor. Sem envelope resiste melhor.");
v("vir","b",150,"Vírus envelopados são mais resistentes no ambiente que os não envelopados.",false,"É o contrário. O envelope ajuda a entrar, mas o vírus resiste menos fora da célula.");
v("vir","b",151,"Vírus não envelopados sobrevivem mais tempo em superfícies.",true,"Também resistem a pH ácido e variações térmicas.");
m("vir","b",151,"Vírus não envelopados:",["Infectam com menos eficiência, mas se transmitem com mais facilidade","Infectam melhor e transmitem menos","Morrem logo em qualquer superfície","Possuem espículas no envelope"],"Essa frase é do slide. Boa pegadinha.");
m("vir","b",150,"O que reconhece os receptores específicos da célula nos vírus envelopados?",["Espículas","Capsídeo","Citoplasma","Parede de quitina"],"São as pontinhas externas.");
so("vir","b",152,"Adenovírus ou retrovírus?",["Adenovírus","Retrovírus"],[["DNA",0],["Incubação menor",0],["Multiplicação acelerada",0],["Patologias agudas",0],["RNA",1],["Incubação mais longa",1],["Multiplicação lenta",1],["Patologias crônicas",1]],"Adeno é rápido e agudo. Retro é lento e crônico.");
m("vir","b",152,"O adenovírus é capaz de produzir patologias:",["Agudas","Apenas crônicas","Apenas ósseas","Hereditárias"],"Multiplicação acelerada e incubação menor.");
m("vir","b",152,"No adenovírus, o combate depende principalmente:",["Do sistema imunológico, com alívio de sintomas","Do antibiótico","Da transcriptase reversa","De antifúngicos"],"O tratamento alivia os sintomas.");
so("vir","b",155,"Qual grupo de vírus causa?",["Adenovírus","Retrovírus","Arbovírus"],[["Faringite",0],["Conjuntivite viral",0],["Cistite",0],["Amigdalite",0],["AIDS",1],["Dengue",2],["Zika",2],["Chikungunya",2],["Febre amarela",2]],"Arbo = mosquito. AIDS = retrovírus.");
m("vir","c",153,"Quais sistemas os adenovírus infectam principalmente?",["Respiratório, gastrointestinal, urinário e ocular","Ósseo e muscular","Nervoso e endócrino","Reprodutor apenas"],"Por isso faringite, gastroenterite, cistite e conjuntivite.");
m("vir","b",154,"O que os retrovírus usam para “se modificar”?",["Transcriptase reversa","Integrase apenas","Queratina","Histamina"],"É a enzima que faz RNA virar DNA.");
m("vir","b",154,"Qual é o tratamento específico citado para retrovírus?",["Antirretroviral","Antifúngico","Antiparasitário","Vitamina B12"],"Retrovírus afeta o sistema imunológico.");
m("vir","b",155,"Qual é a enzima dos retrovírus?",["Transcriptase reversa","Amilase","Insulina","Lactase"],"Inversa ao fluxo normal.");
or("vir","c",156,"Coloque em ordem: o que o retrovírus faz na célula",["Libera o RNA viral no citoplasma","Transcriptase reversa copia o RNA","Forma-se o DNA viral","DNA viral entra no núcleo","Integra-se ao DNA da célula","A célula produz novos vírus"],"RNA vira DNA, que se esconde no DNA da célula.");
m("vir","c",156,"Qual enzima ajuda o DNA viral a se integrar ao DNA da célula?",["Integrase","Transcriptase reversa","Amilase","Hemoglobina"],"Integrase integra.");
m("vir","b",157,"Por que o retrovírus é perigoso?",["Se esconde no DNA da célula e pode ficar latente por muito tempo","Morre em poucos minutos","Não entra nas células","Só atinge plantas"],"É difícil de detectar e de eliminar.");
m("vir","b",157,"Muitos antirretrovirais atuam:",["Inibindo a transcriptase reversa","Destruindo a parede de quitina","Aumentando as plaquetas","Bloqueando os flagelos"],"Impede que o RNA viral vire DNA.");
v("vir","b",157,"Inibir a transcriptase reversa impede que o RNA viral vire DNA e bloqueia a multiplicação.",true,"Por isso é alvo de medicamentos.");
so("vir","c",158,"Célula humana ou retrovírus?",["Célula humana","Retrovírus"],[["DNA → RNA",0],["Transcrição normal",0],["Produz proteínas",0],["Processo fisiológico",0],["RNA → DNA",1],["Transcrição reversa",1],["Produz novos vírus",1],["Processo infeccioso",1]],"O retrovírus faz o caminho inverso.");
m("vir","b",160,"O arbovírus é transmitido principalmente por:",["Insetos","Água tratada","Herança genética","Antibióticos"],"Precisa de um hospedeiro, geralmente inseto.");
m("vir","b",160,"O que significa plasticidade no arbovírus?",["Capacidade de adaptação a ambientes e hospedeiros, com alta mutação","Ter parede de plástico","Não sofrer mutação","Não precisar de hospedeiro"],"Alta mutação = adapta rápido.");
v("vir","b",160,"O arbovírus tem período de incubação curto e pode deixar sequelas graves.",true,"Patologia aguda, mas com possíveis sequelas.");
v("vir","b",160,"Arbovírus causam quadros agudos e nunca deixam sequelas.",false,"Podem causar sequelas graves.");
m("vir","c",161,"Qual destas é doença causada por arbovírus?",["Febre amarela","AIDS","Faringite","Cistite"],"Dengue, zika, chikungunya e febre amarela.");
m("vir","c",163,"Qual destas é medida de prevenção de doenças virais citada?",["Vacinação e controle de mosquitos","Antibiótico por conta própria","Evitar lavar as mãos","Compartilhar máscara"],"Também higiene, máscara, preservativo e alimentos seguros.");
so("vir","c",164,"Qual tipo de doença viral?",["Respiratória","Neurológica","IST","Gastrointestinal"],[["COVID-19",0],["Sarampo",0],["Gripe",0],["Raiva",1],["Poliomielite",1],["HIV/AIDS",2],["HPV",2],["Rotavírus",3],["Norovírus",3]],"Quadros das p.164 a 168.");

/* ===================== PROTOZOÁRIOS ===================== */
m("pro","b",171,"Os protozoários são microrganismos:",["Mais complexos, com células organizadas","Sem célula","Sem núcleo","Sempre inofensivos"],"Podem causar doenças importantes.");
m("pro","b",172,"Os protozoários fazem parte de qual reino?",["Protista","Monera","Fungi","Plantae"],"Reino protista.");
pr("pro","b",172,"Protozoário: ligue a característica ao significado",[["Eucarionte","Célula completa, núcleo definido"],["Unicelular","Formado por célula única"],["Heterotrófico","Não produz o próprio alimento"]],"Euca, uni, hetero.");
v("pro","b",172,"Protozoários são capazes de produzir o próprio alimento.",false,"São heterotróficos: não produzem.");
v("pro","b",172,"Protozoários são eucariontes e unicelulares.",true,"Célula completa, com núcleo definido.");
m("pro","b",172,"Onde vive a maioria dos protozoários?",["Em vida livre, em ambientes aquáticos e úmidos","Apenas no sangue humano","Apenas em desertos","Apenas no ar"],"A maior parte tem vida livre.");
m("pro","b",172,"Como os protozoários se reproduzem?",["Assexuada (divisão binária) e sexuada","Só por brotamento","Só por transcriptase reversa","Só por esporos"],"Tem as duas formas.");
pr("pro","c",173,"Forma de locomoção: ligue ao tipo",[["Ciliados","Cílios: Balantidium"],["Flagelados","Flagelo: giárdia e leishmania"],["Rizópodos","Pseudópodos: ameba"],["Esporozoários","Sem locomoção: Plasmodium"]],"Rizópodo = pé falso.");
m("pro","c",173,"A ameba se locomove por meio de:",["Pseudópodos","Flagelos","Cílios","Asas"],"Falsos pés.");
m("pro","c",173,"Os protozoários são classificados de acordo com:",["A forma de locomoção","O tipo de DNA","A cor na coloração de Gram","A presença de envelope"],"Cílio, flagelo, pseudópodo ou nenhum.");
or("pro","c",174,"Coloque em ordem o ciclo do protozoário",["Ingestão do cisto na água ou alimento","Cisto se rompe e libera o trofozoíto","Trofozoíto se multiplica e invade tecidos","Vira cisto e sai nas fezes"],"Cisto entra, trofozoíto ataca, cisto sai.");
m("pro","c",174,"Qual forma do protozoário se multiplica e causa sintomas?",["Trofozoíto","Cisto","Capsídeo","Micélio"],"Cisto é a forma de transmissão.");
m("pro","b",177,"Qual destas é forma de transmissão de protozoários?",["Transmissão vertical, da mãe para o bebê","Herança dos cromossomos","Falta de vitamina","Exposição ao sol"],"Também água, alimentos, insetos, contato sexual e transfusão.");
m("pro","b",177,"Qual destes NÃO é sintoma comum de doenças por protozoários, na aula?",["Fratura óssea","Diarreia","Febre","Perda de peso"],"Também cólicas, náuseas, vômitos, anemia e fraqueza.");
v("pro","b",177,"Protozoários podem ser transmitidos por transfusão de sangue contaminado.",true,"E por picada de insetos, como barbeiro e mosquitos.");
pr("pro","c",178,"Ligue a doença ao protozoário",[["Amebíase","Entamoeba histolytica"],["Giardíase","Giardia lamblia"],["Chagas","Trypanosoma cruzi"],["Leishmaniose","Leishmania spp."],["Malária","Plasmodium spp."],["Toxoplasmose","Toxoplasma gondii"],["Tricomoníase","Trichomonas vaginalis"]],"A maioria dos nomes já lembra a doença.");
m("pro","c",179,"A doença de Chagas é transmitida por:",["Barbeiro","Anopheles","Pulga","Pombo"],"Pode afetar coração e sistema digestório.");
m("pro","c",179,"A malária é transmitida pelo mosquito:",["Anopheles","Barbeiro","Aedes","Pulga de rato"],"Causada por Plasmodium: febre alta, calafrios, suores e anemia.");
pr("pro","c",179,"Ligue a doença ao que ela causa",[["Chagas","Afeta coração e digestório"],["Leishmaniose","Tegumentar ou visceral"],["Amebíase","Pode dar abscesso no fígado"],["Giardíase","Má absorção de nutrientes"],["Toxoplasmose","Grave em gestantes"],["Tricomoníase","IST com corrimento e coceira"]],"Quadros das p.178 a 180.");
m("pro","c",180,"Toxoplasmose pode ser grave em:",["Gestantes e imunodeprimidos","Apenas crianças saudáveis","Apenas atletas","Apenas idosos saudáveis"],"Causada por Toxoplasma gondii.");
m("pro","c",180,"Qual doença por protozoário é uma infecção sexualmente transmissível?",["Tricomoníase","Malária","Giardíase","Chagas"],"Trichomonas vaginalis.");

/* ===================== FUNGOS ===================== */
v("fun","b",182,"Os fungos são eucariontes: têm célula com núcleo definido.",true,"Mais complexos que as bactérias.");
m("fun","b",182,"A parede celular dos fungos é rica em:",["Quitina","Peptideoglicano","Queratina","Colágeno"],"Peptideoglicano é da bactéria. Quitina é do fungo.");
m("fun","b",182,"Os fungos podem ser:",["Unicelulares ou pluricelulares","Somente unicelulares","Somente acelulares","Somente procariontes"],"Levedura é uni. Bolor e cogumelo são pluri.");
v("fun","b",182,"Os fungos têm organização celular mais simples que a das bactérias.",false,"Têm organização mais complexa.");
m("fun","b",183,"Fungos são heterotróficos porque:",["Não produzem seu próprio alimento","Fazem fotossíntese","Não precisam de alimento","Comem apenas luz"],"Podem ser parasitas ou sapróbicos.");
m("fun","b",183,"Dizer que os fungos são ubíquos significa que:",["Vivem na água, no solo, em vegetais, animais, no homem e em detritos","Só vivem em lugares secos","Só vivem no intestino","Só existem em laboratório"],"Estão em todo lugar.");
m("fun","b",183,"Fungos sapróbicos:",["Absorvem matéria orgânica","Vivem só dentro das hemácias","Produzem luz","Fazem fotossíntese"],"O outro comportamento é ser parasita.");
so("fun","b",183,"Macroscópico ou microscópico?",["Macroscópico","Microscópico"],[["Cogumelos",0],["Leveduras",1],["Bolores",1]],"Só o cogumelo é visto a olho nu.");
m("fun","b",183,"Quantas espécies de fungos estima-se existir?",["1,5 milhão","15 mil","150","15 bilhões"],"Mas só 97.861 estão registradas.");
m("fun","b",184,"Qual destas é função importante dos fungos?",["Decomposição da matéria orgânica","Produção de hemácias","Transporte de oxigênio","Coagulação do sangue"],"Também alimentação e medicamentos.");
pr("fun","c",188,"Fungos e medicamentos: ligue",[["Penicilina","Antibiótico"],["Ciclosporina","Imunossupressor"],["Lovastatina","Colesterol"]],"Três remédios vindos de fungos.");
m("fun","b",184,"Qual antibiótico é produzido a partir de fungos?",["Penicilina","Insulina","AZT","Vacina"],"Ciclosporina (imunossupressor) também vem de fungos.");
m("fun","b",184,"Qual destes alimentos depende de fungos?",["Queijo, vinho, cerveja e pão","Sal de cozinha","Água mineral","Açúcar refinado"],"Fermentação.");
v("fun","c",185,"Os fungos podem viver de forma harmoniosa no corpo, mas a superpopulação causa problemas.",true,"Na pele, mucosas e em infecções cutâneas.");
pr("fun","c",186,"Apresentação dos fungos: ligue",[["Leveduras","Unicelulares, brotamento"],["Bolores","Pluricelulares, hifas e micélios"],["Cogumelos","Pluricelulares, macroscópicos"]],"Levedura brota. Bolor faz hifas.");
m("fun","c",186,"Candida albicans é um exemplo de:",["Levedura","Bolor","Cogumelo","Bactéria"],"Reproduz por brotamento.");
m("fun","c",187,"O cogumelo que vemos na superfície é:",["Apenas a estrutura reprodutiva do fungo","Todo o fungo","Uma planta","Uma bactéria gigante"],"O restante fica no solo, em rede de hifas: o micélio.");
m("fun","c",187,"Como se chama a rede de hifas do fungo?",["Micélio","Capsídeo","Citoplasma","Cisto"],"Fica escondida no solo.");
pr("fun","c",192,"Ligue a doença ao fungo",[["Pano branco","Malassezia furfur"],["Candidíase","Candida spp."],["Esporotricose","Sporothrix schenckii"],["Criptococose","Cryptococcus neoformans"],["Aspergilose","Aspergillus spp."]],"O nome da doença lembra o nome do fungo.");
pr("fun","c",192,"Ligue a doença ao tipo de infecção",[["Pano branco","Superficial"],["Pé de atleta","Cutânea"],["Sapinho","Mucosa"],["Esporotricose","Subcutânea"],["Criptococose","Sistêmica"]],"Da superfície para o interior do corpo.");
m("fun","c",189,"Qual doença é conhecida como “doença do pombo”?",["Criptococose","Aspergilose","Esporotricose","Candidíase"],"Causada por Cryptococcus neoformans.");
m("fun","c",189,"Qual doença é conhecida como “doença do gato”?",["Esporotricose","Criptococose","Candidíase","Pano branco"],"Causada por Sporothrix schenckii.");
m("fun","c",192,"“Sapinho” é uma infecção de boca causada por:",["Candida","Aspergillus","Malassezia","Sporothrix"],"Candidíase.");
m("fun","c",192,"A tinea (micose de pele) inclui:",["Pé de atleta","Sapinho","Doença do pombo","Malária"],"Também micose de corpo, de virilha e da cabeça.");
m("fun","c",191,"Qual destas é forma de transmissão de fungos?",["Inalação de esporos no ar","Picada de barbeiro","Transcriptase reversa","Herança dos cromossomos"],"Também contato direto e penetração por feridas.");
m("fun","c",191,"Qual destes é sintoma comum em infecções por fungos?",["Coceira e descamação","Rigidez muscular","Tosse com engasgo","Paralisia"],"Também vermelhidão, manchas e corrimento.");

/* ===================== RECONHECER PELA IMAGEM ===================== */
im("bac","b",131,"Qual destas é o vibrião?",["vibriao","coco","bacilo","espirilo"],"Vibrião tem formato de vírgula. Vibrio cholerae causa a cólera.");
im("bac","b",131,"Qual destas é o bacilo?",["bacilo","coco","vibriao","espirilo"],"Bacilo tem forma de bastão.");
im("bac","b",131,"Qual destas é o espirilo?",["espirilo","vibriao","bacilo","coco"],"Espirilo = espiral.");
im("bac","b",131,"Qual destas mostra cocos?",["coco","bacilo","espirilo","vibriao"],"Cocos são arredondados.");
im("bac","c",113,"Qual imagem mostra estafilococos?",["estafilo","estrepto","bacilo","vibriao"],"Estafilo = cacho.");
im("bac","c",113,"Qual imagem mostra estreptococos?",["estrepto","estafilo","coco","espirilo"],"Estrepto = fileira, como um colar.");
im("bac","b",128,"Qual imagem mostra a bactéria Gram-positiva?",["grampos","gramneg"],"Positiva = violeta, com parede rica em peptideoglicano.");
im("bac","b",128,"Qual imagem mostra a bactéria Gram-negativa?",["gramneg","grampos"],"Negativa = vermelha, com parede complexa.");
im("bac","b",115,"Qual tubo mostra uma bactéria aeróbia?",["aerobia","anaerobia","facultativa"],"Precisa de oxigênio, então cresce no alto do tubo.");
im("bac","b",115,"Qual tubo mostra uma bactéria anaeróbia?",["anaerobia","aerobia","facultativa"],"Foge do oxigênio, então cresce no fundo.");
im("bac","b",115,"Qual tubo mostra uma bactéria facultativa?",["facultativa","aerobia","anaerobia"],"Tanto faz: cresce no tubo todo.");
im("san","b",70,"Qual é a hemácia da anemia falciforme?",["falciforme","hemacia","ferropriva","megaloblastica"],"Forma de meia lua, por mutação genética.");
im("san","b",70,"Qual imagem representa a anemia ferropriva?",["ferropriva","megaloblastica","falciforme","hemacia"],"Falta de ferro: hemácias pequenas e descoradas.");
im("san","b",70,"Qual imagem representa a anemia megaloblástica?",["megaloblastica","ferropriva","falciforme","hemacia"],"Falta de B12: hemácias grandes e imaturas.");
im("san","b",71,"Qual destas é a plaqueta?",["plaqueta","hemacia","neutrofilo","linfB"],"É um fragmento celular, irregular e pequeno.");
im("san","b",75,"Qual célula “come” os invasores?",["macrofago","hemacia","plaqueta","eosinofilo"],"Macrófago faz fagocitose.");
im("san","b",76,"Qual célula dispara anticorpos?",["linfB","linfT","hemacia","basofilo"],"Linfócito B produz anticorpos.");
im("san","b",76,"Qual é o comandante da resposta imune?",["linfT","linfB","nk","monocito"],"Linfócito T coordena a resposta.");
im("san","c",84,"Qual é o neutrófilo, com núcleo em vários lobos?",["neutrofilo","monocito","eosinofilo","linfB"],"Vários lobos no núcleo: neutrófilo.");
im("san","c",84,"Qual é o basófilo, cheio de grãos escuros?",["basofilo","eosinofilo","neutrofilo","monocito"],"Grãos escuros: basófilo, ligado à histamina.");
im("san","c",84,"Qual é o eosinófilo, com grãos alaranjados?",["eosinofilo","basofilo","neutrofilo","monocito"],"Grãos alaranjados e núcleo em dois lobos.");
im("san","c",84,"Qual é o monócito, com núcleo em forma de rim?",["monocito","neutrofilo","basofilo","eosinofilo"],"Núcleo em forma de rim. Dá origem aos macrófagos.");
im("cel","c",29,"Qual destas é a célula especializada do cérebro?",["neuronio","hemacia","mitocondria"],"Neurônio: recebe, processa e transmite impulsos nervosos.");
im("imu","c",88,"Qual destas é o anticorpo?",["anticorpo","plaqueta","virusn","hemacia"],"Formato de Y.");
im("vir","b",150,"Qual imagem mostra um vírus envelopado?",["viruse","virusn","fago"],"Tem envelope e espículas.");
im("vir","b",151,"Qual imagem mostra um vírus não envelopado?",["virusn","viruse","retro"],"Sem envelope: mais resistente no ambiente.");
im("vir","c",149,"Qual é o formato helicoidal, como o vírus da raiva?",["helicoidal","virusn","fago","viruse"],"Formato alongado.");
im("vir","c",149,"Qual é o vírus de formato complexo, o bacteriófago?",["fago","helicoidal","virusn","viruse"],"Cabeça, cauda e “pernas”.");
im("vir","b",154,"Qual imagem representa o retrovírus?",["retro","virusn","helicoidal","fago"],"RNA vira DNA: caminho inverso.");
im("pro","c",173,"Qual protozoário se locomove com pseudópodos?",["ameba","flagelado","ciliado","esporozoario"],"Ameba: “pés falsos”.");
im("pro","c",173,"Qual protozoário se locomove com flagelo?",["flagelado","ameba","ciliado","esporozoario"],"Flagelado: um longo “chicote”.");
im("pro","c",173,"Qual protozoário se locomove com cílios?",["ciliado","flagelado","ameba","esporozoario"],"Ciliado: pelinhos em volta.");
im("pro","c",179,"Qual inseto transmite a doença de Chagas?",["barbeiro","mosquito"],"Barbeiro.");
im("fun","c",186,"Qual fungo se reproduz por brotamento?",["levedura","bolor","cogumelo"],"Levedura solta um broto.");
im("fun","c",186,"Qual fungo forma hifas e micélios?",["bolor","levedura","cogumelo"],"Bolor.");
im("fun","c",186,"Qual destes é o fungo macroscópico?",["cogumelo","levedura","bolor"],"O cogumelo se vê a olho nu.");
im("gen","c",54,"Qual imagem representa o DNA?",["dna","rna","proteina"],"Fita dupla.");
im("gen","c",55,"Qual imagem representa o RNA?",["rna","dna","proteina"],"Fita simples, o mensageiro.");
im("cel","c",26,"Qual organela produz energia?",["mitocondria","neuronio","eucarionte"],"Mitocôndria: faz o ATP.");

/* ===================== TOCAR NA ESTRUTURA ===================== */
di("vir","b",148,"Toque no capsídeo","virus","capsideo","Capsídeo: proteção e forma.","viruse");
di("vir","b",148,"Toque no envelope","virus","envelope","Envelope: entrada na célula e proteção.","viruse");
di("vir","b",148,"Toque na matriz viral","virus","matriz","Matriz: organização e montagem.","viruse");
di("vir","b",148,"Onde fica a informação genética (DNA ou RNA)?","virus","genoma","RNA/DNA: informação genética.","viruse");
di("vir","c",147,"Toque nas glicoproteínas","virus","glico","As espículas reconhecem os receptores da célula.","viruse");
di("bac","c",22,"Toque na cápsula, o escudo protetor","bacteria","capsula","Cápsula: escudo protetor.","procarionte");
di("bac","c",22,"Toque na parede celular","bacteria","parede","Parede celular: rígida, dá forma e protege.","procarionte");
di("bac","c",22,"Toque na membrana plasmática","bacteria","membrana","Membrana: controla entrada e saída.","procarionte");
di("bac","c",22,"Toque no nucleoide","bacteria","nucleoide","Nucleoide: DNA sem núcleo formado.","procarionte");
di("bac","c",22,"Toque nos ribossomos","bacteria","ribossomos","Ribossomos produzem proteínas.","procarionte");
di("bac","c",22,"Toque no flagelo","bacteria","flagelo","Flagelo permite a locomoção.","procarionte");
di("bac","c",22,"Toque nas fímbrias","bacteria","fimbrias","Fímbrias ajudam a aderir, como ganchos.","procarionte");
di("cel","b",25,"Toque no núcleo","celula","nucleo","O núcleo guarda o DNA e comanda a célula.","eucarionte");
di("cel","b",25,"Toque no citoplasma","celula","citoplasma","Região entre a membrana e o núcleo.","eucarionte");
di("cel","b",25,"Toque na membrana plasmática","celula","membrana","Controla a entrada e a saída de substâncias.","eucarionte");
di("cel","c",26,"Toque na mitocôndria","celula","mitocondria","Produz energia (ATP).","mitocondria");
di("cel","c",26,"Toque no complexo de Golgi","celula","golgi","Modifica, empacota e secreta substâncias.","eucarionte");
di("cel","c",26,"Toque no lisossomo","celula","lisossomo","Faz a digestão celular.","eucarionte");
di("cel","c",26,"Toque no retículo rugoso (RER)","celula","rer","Tem ribossomos: síntese de proteínas.","eucarionte");
di("cel","c",26,"Toque no retículo liso (REL)","celula","rel","Produz lipídios e desintoxica.","eucarionte");

/* ===================== SESSÃO FINAL: REVISAR COM A PROFESSORA ===================== */
const REVISAO = [
  { id:"rev-155", pag:155, bomba:true, pergunta:"Herpes e hepatites são causados por retrovírus?",
    slide:"Lista AIDS, herpes e hepatites como doenças causadas por retrovírus (RNA).",
    conferencia:"Retrovírus clássico é o HIV. Herpes é vírus de DNA, e o vírus da hepatite B também tem DNA, de outra família, embora use transcrição reversa.",
    indicacao:"A p.146 diz que retrovírus é composto de RNA, e a p.149 mostra herpes e hepatite B como vírus separados. Pergunte como ela quer esta resposta na prova." },
  { id:"rev-70", pag:70, bomba:true, pergunta:"O que é anemia hemolítica?",
    slide:"Anemia hemolítica = grandes perdas sanguíneas.",
    conferencia:"Hemolítica é a destruição das hemácias. Perda de sangue é anemia hemorrágica.",
    indicacao:"Nenhum outro slide explica o termo. Pergunte qual definição vale para a prova." },
  { id:"rev-154", pag:154, bomba:true, pergunta:"Quanto dura a janela imunológica do retrovírus (HIV)?",
    slide:"Período de incubação mais longo (janela imunológica de 6 meses a 1 ano).",
    conferencia:"O Ministério da Saúde indica cerca de 30 a 60 dias para anticorpos detectáveis, variando conforme o teste. Janela e incubação também são conceitos diferentes.",
    indicacao:"A ideia de incubação longa é segura. Pergunte se o número 6 meses a 1 ano será cobrado." },
  { id:"rev-117", pag:117, bomba:true, pergunta:"Arqueobactérias e cianobactérias são probióticas?",
    slide:"Depois de Lactobacillus, Bifidobacterium e Streptococcus thermophilus, cita arqueobactérias, actinobactérias e cianobactérias.",
    conferencia:"Os três primeiros são exemplos clássicos de probióticos. Os outros grupos não costumam ser classificados como probióticos.",
    indicacao:"Estude pelos três primeiros e confirme se a lista ampliada é cobrada." },
  { id:"rev-83", pag:83, bomba:false, pergunta:"Quem produz anticorpos: todos os leucócitos?",
    slide:"Leucócitos: “produtor de anticorpos. Neutrófilos, eosinófilos, basófilos, fagócitos, monócitos.”",
    conferencia:"As p.76 e 87 da própria aula dizem que quem produz anticorpos são os linfócitos (B). Linfócitos também são glóbulos brancos.",
    indicacao:"Use linfócito B na resposta, salvo orientação diferente da professora." },
  { id:"rev-30", pag:30, bomba:false, pergunta:"A célula β do pâncreas produz insulina e glucagon?",
    slide:"Célula β pancreática: produção de insulina e glucagon.",
    conferencia:"A célula β produz insulina. O glucagon vem da célula α.",
    indicacao:"Tema de contexto, sem bomba direta. Confirme se cai." },
  { id:"rev-26", pag:26, bomba:false, pergunta:"Ribossomo é organela membranosa?",
    slide:"Inclui ribossomos na lista de “organelas membranosas”.",
    conferencia:"Ribossomos não têm membrana. Tanto que aparecem também na bactéria (p.22), que não tem organelas membranosas.",
    indicacao:"A função, produzir proteínas, está certa. O problema é só a classificação." },
  { id:"rev-189", pag:189, bomba:false, pergunta:"Psoríase é causada por fungo?",
    slide:"Coloca psoríase na lista de doenças por fungos.",
    conferencia:"Psoríase é doença autoimune, como diz a aula de Tegumentar (p.49). Ela nem aparece na tabela de fungos da p.192.",
    indicacao:"Página sem bomba. Se cair, confirme com a professora." },
  { id:"rev-130", pag:130, bomba:false, pergunta:"Mycoplasma é Gram-positivo?",
    slide:"Inclui Mycoplasma entre as bactérias Gram-positivas.",
    conferencia:"Mycoplasma não tem parede celular e por isso não se cora de forma típica pelo Gram.",
    indicacao:"Página sem bomba, risco baixo. Foi deixada fora do jogo." },
];
if (typeof module !== "undefined") module.exports = { SETORES, Q, REVISAO };
