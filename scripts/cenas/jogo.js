class Jogo {
    constructor() {
        this.inimigoAtual = 0;
    }
    setup() {
        cenario = new Cenario(imagemCenario, 3);
        pontucao = new pontuacao();
        vida = new Vida(3, 3);

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

    }
    keyPressed(key) {
        if (key === 'ArrowUp') {
            personagem.pula()
            somDoPulo.play()
        }
    }

    draw() {
        cenario.exibe();
        cenario.move();
        vida.draw();
        pontucao.exibe();
        pontucao.adicionarPonto();

        personagem.exibe();
        personagem.aplicaGravidade();


        const inimigo = inimigos[this.inimigoAtual];
        const inimigoVisivel = inimigo.x < - inimigo.largura;

        inimigo.exibe()
        inimigo.move()

        if (inimigoVisivel) {
            this.inimigoAtual++;
            if (this.inimigoAtual > 2) {
                this.inimigoAtual = 0;
            }
            inimigo.velocidade = parseInt(random(10, 30));
        }

        if (personagem.estaColidindo(inimigo)) {
            vida.perdeVida();
            personagem.tornarInvencivel();
            if (vida.vidas === 0)
                image(imagemGameOver, width / 2 - 200, heigth / 3)
            noLoop()
        }
    }
}