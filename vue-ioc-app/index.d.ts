import {Provider} from './interface'
export  class Container {
  register(provider:Provider<any>):void
  inject<T>(provider:Provider<T>):T
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    /**
     * injects
     */
    serviceInject?: (this: V) => object
  }
}

// declare module 'vue/types/vue' {
//   type CombinedVueInstance<{
//     serviceInject
// }>
// }