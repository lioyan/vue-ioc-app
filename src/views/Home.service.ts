export default class HomeService {
  name: string;

  constructor() {
    this.name = '----- home service -----';
  }

  call(): string {
    return this.name;
  }
}
