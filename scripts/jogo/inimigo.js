class Inimigo extends Animacao {
    constructor(matriz, imagem, x, largura, 
        altura, larguraSprite, alturaSprite){
       
        super(matriz, imagem, x, largura, 
        altura, larguraSprite, alturaSprite)

        this.velocidade = 8
    }

    //movimento do inimigo//
    move() {
      this.x = this.x - this.velocidade

      if (this.x < -this.largura){
        this.x = width
      }
    }

}