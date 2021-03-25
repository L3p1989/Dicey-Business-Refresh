//assign new class Die
class Die {
  constructor() {
    this.newDie = $(`<div class="die"></div>`);
    this.value = this.roll();
    this.newDie.click(() => this.roll());
    this.newDie.dblclick(() => this.newDie.remove());
    this.newDie.appendTo(`#die-div`);
  }
  roll() {
    this.value = Math.floor(Math.random() * 6) + 1;
    this.newDie.text(this.value);
  }
}
//give die-btn click listener
$(`#die-btn`).click(() => new Die());
