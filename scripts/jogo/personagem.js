class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura,
    altura, larguraSprite, alturaSprite) {

    super(matriz, imagem, x, variacaoY, largura,
      altura, larguraSprite, alturaSprite);

    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;

    this.velocidadeDoPulo = 0;
    this.gravidade = 6;
    this; alturaDoPulo = -50
    this.pulos = 0
  }

  pula() {
    if (this.pulos < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo
      this.pulos++
    }

  }

  //caida de volta do pulo da personagem//
  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade

    if (this.y > this.yInicial) {
      this.y = this.yInicial
      this.pulos = 0
      this.invencivel = false
    }
  }

  tornarIvencivel() {
    this.invencivel = true
    setTimeout(() => {
      this.invencivel = false
    }, 1000)
  }
  //função do encontro personagens// 
  estaColidindo(inimigo) {
    if (this.invencivel) {
      return false
    }
    const precisao = .7
    const colisao = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao);
    return false;
  }
}