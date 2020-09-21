import {
  ContainerInterface,
  Provider,
  Type,
  ClassProvider,
  BaseProvider,
  ValueProvider,
  FactoryProvider
} from "./interface";
import { isClassProvider, isValueProvider, isFactoryProvider } from "./util";
import { INJECTED } from "./injectable";
export class Container implements ContainerInterface {
  private _providers = new Map();
  /**
   * @description 实例化provider
   * @param provider
   */
  private getInstance<T>(provider: Provider<T>) {
    if (isClassProvider(provider)) {
      return this.getInstanceFromClass(provider as ClassProvider<T>);
    } else if (isValueProvider(provider)) {
      return this.getInstanceFromValue(provider as ValueProvider<T>);
    } else if (isFactoryProvider(provider)) {
      return this.getInstanceFromFactory(provider as FactoryProvider<T>);
    }
  }
  /**
   * @description 实例化class类型的provider
   * @param provider
   */
  private getInstanceFromClass<T>(provider: ClassProvider<T>): T {
    const target = provider.useClass;
    if (target[INJECTED]) {
      const injects = target[INJECTED]!.map(childToken => this.inject(childToken));
      return new target(...injects)
    } else {
      if(target.length) {
        throw new Error(
          `Injection error.${target.name} has dependancy injection but,but no @Injectable() or @Inject() decorate it`
        )
      }
      return new target();
    }
  }
  /**
   * @description 实例化value类型的provider
   * @param provider
   */
  private getInstanceFromValue<T>(provider: ValueProvider<T>): T {
    return provider.useValue;
  }
  /**
   * @description 实例化factory类型的provider
   * @param provider
   */
  private getInstanceFromFactory<T>(provider: FactoryProvider<T>): T {
    return provider.useFactory();
  }

  register<T>(provider: Provider<T>) {
    const instance = this.getInstance(provider);
    this._providers.set((provider as BaseProvider<T>).provide, instance);
  }
  inject<T>(token: Type<T>): T {
    if (!this._providers.has(token)) {
      const provider = {
        provide: token,
        useClass: token
      };
      this.register(provider);
    }
    return this._providers.get(token);
  }
}
