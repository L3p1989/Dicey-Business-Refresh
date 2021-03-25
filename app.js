//assign new class Die
class Die {
  static dice = [];
  static rollAll() {
    Die.dice.forEach((die) => {
      die.roll();
    });
  }
  static getSum() {
    let sum = Die.dice.reduce((tally, die) => {
      return (tally += die.value);
    }, 0);
    alert(sum);
  }
  constructor() {
    this.newDie = $(`<div class="die"></div>`);
    this.roll();
    this.newDie.click(() => this.roll());
    this.newDie.dblclick(() => {
      this.newDie.remove();
      Die.dice.splice(this.newDie, 1);
    });
    Die.dice.push(this);
    this.newDie.appendTo(`#die-div`);
  }
  roll() {
    this.value = Math.floor(Math.random() * 6) + 1;
    this.newDie.text(this.value);
  }
}
//give die-btn click listener
$(`#die-btn`).click(() => new Die());
//give roll-btn click handler
$(`#roll-btn`).click(() => Die.rollAll());
