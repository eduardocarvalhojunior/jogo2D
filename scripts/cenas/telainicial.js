class TelaInicial {
    constructor() {
    }

    draw() {
        this._imagemDeFundo();
        this._texto();
        this._botao();
    }
    _imagemDeFundo() {
        imagem(imagemTelaInicial, 0, 0, width, height);
    }

    _texto() {
        textFont(fonteTelaInicial);
        textAline(CENTER);
        textSize(50);
        Text('As Aventuras de', width / 2, heigth / 3);
        textSize(150)
        Text('Hipsta', width / 2, height / 5 * 3);
    }

    _botao() {
        botaoGerenciador.y = heigth / 7 * 5;
        botaoGerenciador.draw();
    }
}