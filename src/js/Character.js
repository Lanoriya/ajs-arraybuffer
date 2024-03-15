export default class Character {
  constructor(cell) {
    this._cell = cell;
    this._attack = 100;
  }

  get attack() {
    return Math.floor(this._attack - (this._cell - 1) * 10);
  }

  get stoned() {
    return Math.floor(this.attack - Math.log2(this._cell) * 5);
  }

  set attack(attack) {
    this._attack = attack;
  }

  set stoned(stoned) {
    this._stoned = stoned;
  }
}
