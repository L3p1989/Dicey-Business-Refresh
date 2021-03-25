//assign new class Die
class Die {
  constructor() {
    this.newDie = $(`<div class="dice"></div>`);
    this.value = Math.floor(Math.random() * 6) + 1;
    this.newDie.text(this.value);
  }
  roll() {
    let sum = Math.floor(Math.random() * 6) + 1;
  }
}
