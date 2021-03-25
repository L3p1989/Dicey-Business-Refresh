//assign new class Die
class Die {
  static dice = [];
  constructor() {
    this.newDie = $(`<div class="die"></div>`);
    this.value = this.roll();
    this.newDie.click(() => this.roll());
    this.newDie.dblclick(() => {
      this.newDie.remove();
      Die.dice.splice(this.newDie, 1);
    });
    Die.dice.push(this.newDie);
    this.newDie.appendTo(`#die-div`);
    console.log(Die.dice);
  }
  roll() {
    this.value = Math.floor(Math.random() * 6) + 1;
    this.newDie.text(this.value);
  }
}
//give die-btn click listener
$(`#die-btn`).click(() => new Die());
