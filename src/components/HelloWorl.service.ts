import InfoService from "@/services/info.service";
import { Injectable } from "vue-ioc-app/injectable";

@Injectable()
export default class HelloWorldService {
  msg: string;
  constructor(private infoService: InfoService) {
    this.msg = "hello world!";
  }
  getMsg(): string {
    return this.msg;
  }
  setMsg(msg: string) {
    this.msg = msg;
  }
  getName(): string {
    return this.infoService.getName();
  }
}
