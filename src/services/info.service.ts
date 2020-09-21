export default class InfoService {
  name: string;
  constructor() {
    this.name = "info name";
  }
  getName(): string {
    return this.name;
  }
}
