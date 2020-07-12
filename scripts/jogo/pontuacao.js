class Pontuaca {
    constructor(){
        this.pontos = 0
    }


    exibe () {
        textAlign(RIGHT)
        fill ('#fff')
        textSize(50)
        text(paseInt(this.pontos), width - 30, 50);
    }

    adicionarPonto() {
        this.pontos = this.pontos = + 0.2
    }




}