import { VueConstructor } from "vue";
import { Container } from "./index";
import { Type } from './interface'
export default {
  install(Vue: VueConstructor, rootContainer: Container) {
    Vue.mixin({
      beforeCreate() {
        const { serviceInject } = this.$options;
        if (serviceInject) {
          const injects = serviceInject.call(this);
          console.log(injects);
          for (const name in injects) {
            (this as any)[name] = rootContainer.inject((injects as any)[name] as Type<any>);
          }
        }
      }
    });
  }
};
