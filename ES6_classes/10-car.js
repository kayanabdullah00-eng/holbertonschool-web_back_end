export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const Species = this[Symbol.species] || this.constructor;
    return new Species();
  }
}
