export class Pokedex {
  name;
  url;

  constructor(data) {
    this.name = data.name;
    this.url = data.url;
  }
}
