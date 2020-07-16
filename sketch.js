



function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  pontucao = new pontuacao()

  personagem = new Personagem(matrizPersonagem, imagemPersonagem,
    0, 30, 110, 135, 220, 270);
  const inimigo = new Inimigo(matrizInimigo, imagemInimigo,
    width - 52, 30, 52, 52, 108, 108, 10, 100);
  const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador,
    width - 52, 200, 52, 52, 200, 150, 10, 150);
  const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande,
    width, 0, 200, 200, 400, 400, 15, 300);


  inimigos.push(inimigo)
  inimigos.push(inimigoGrande)
  inimigos.push(inimigoVoador)

  frameRate(40)
  somDoJogo.loop();

}

//função do pulo//
function keyPressed() {
  if (key === 'ArrowUp') {
    personagem.pula()
    somDoPulo.play()
  }
}

function draw() {
  cenario.exibe();
  cenario.move();
  pontucao.exibe();
  pontucao.adicionarPonto();

  personagem.exibe();
  personagem.aplicaGravidade();


  const inimigo = inimigos[inimigoAtual];
  const inimigoVisivel = inimigo.x < - inimigo.largura; 

  inimigo.exibe()
  inimigo.move()

  if(inimigoVisivel){
    inimigoAtual++;
    if (inimigoAtual > 2){
      inimigoAtual =0;
    }
    inimigo.velocidade = parseInt(random(10,30));
  }

  if (personagem.estaColidindo(inimigo)) {
    image(imagemGameOver, width / 2 - 200, heigth / 3)
    noLoop()
  }
}

