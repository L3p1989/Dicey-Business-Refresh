//assign new class Die
class Die {
  constructor() {
    this.newDie = $(`<div class="die"></div>`);
    this.value = Math.floor(Math.random() * 6) + 1;
    this.newDie.text(this.value).appendTo(`#die-div`);
  }
  roll() {
    let sum = Math.floor(Math.random() * 6) + 1;
  }
}
