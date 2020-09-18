export default class HelloWorldService {
  msg: string;
  constructor() {
    this.msg = "hello world!";
  }
  getMsg(): string {
    return this.msg;
  }
}
