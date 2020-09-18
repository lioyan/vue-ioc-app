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
    const instance = provider.useClass;
    return new instance();
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
    const instance = this._providers.get(token);
    if (this._providers.has(token)) {
      return instance;
    } else {
      return instance;
    }
  }
}
