//assign new class Die
class Die {
  //static property dice array
  static dice = [];
  //static method rollAll
  static rollAll() {
    //for each die in the dice array
    Die.dice.forEach((die) => {
      //call the roll function
      die.roll();
    });
  }
  //static method getSum
  static getSum() {
    //assign sum to a reduce function that takes in tally(an unassigned variable) and each die in dice array
    let sum = Die.dice.reduce((tally, die) => {
      //return the product of adding tally and die.value
      return (tally += die.value);
      //with an initial value of zero
    }, 0);
    //alert sum
    alert(sum);
  }
  constructor() {
    //newDie is assigned as a new div.die
    this.newDie = $(`<div class="die"></div>`);
    //call roll method to assign a value
    this.roll();
    //each newDie is assigned a click handler that calls roll method
    this.newDie.click(() => this.roll());
    //each newDie is assigned a dblclick handler
    this.newDie.dblclick(() => {
      //that will remove the die
      this.newDie.remove();
      //that will splice the die from the dice array
      Die.dice.splice(this.newDie, 1);
    });
    //add the newDie to the dice array
    Die.dice.push(this);
    //append the newDie to #die-div
    this.newDie.appendTo(`#die-div`);
  }
  //assign roll method
  roll() {
    //assign this.value a number between 1 and 6
    this.value = Math.floor(Math.random() * 6) + 1;
    //assign the text of newDie the value of newDie
    this.newDie.text(this.value);
  }
}
//give die-btn click listener that assigns a new Die
$(`#die-btn`).click(() => new Die());
//give roll-btn click handler that calls rollAll method
$(`#roll-btn`).click(() => Die.rollAll());
//give sum-btn click handler that calls getSum method
$(`#sum-btn`).click(() => Die.getSum());
