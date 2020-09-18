export interface ContainerInterface {
  register<T>(provider: Provider<T>): void;
  inject<T>(token: Type<T>): T;
}

export interface Type<T> extends Function {
  new (...args: any[]): T;
}

export type Provider<T> = Type<any> | ClassProvider<T> | ValueProvider<T> | FactoryProvider<T>;
/**
 * a Base type provider
 */
export interface BaseProvider<T> {
  /**
   * Injection token
   */
  provide: string | Type<T>
}
/**
 * a Class type provider.
 */
export interface ClassProvider<T> extends BaseProvider<T>{
  /**
   * Injection token
   */
  provide: string | Type<any>;
  /**
   * Type (class name) of provider (instance to be injected)
   */
  useClass: Type<T>;
}
/**
 * a Value type provider.
 */
export interface ValueProvider<T> extends BaseProvider<T>{
  /**
   * Injection token
   */
  provide: string | Type<any>;
  /**
   * Instance of a provider to be injected
   */
  useValue: T;
}
/**
 * a Factory type provider.
 */
export interface FactoryProvider<T> extends BaseProvider<T> {
  /**
   * Injection token
   */
  provide: string | Type<any>;
  /**
   * Factory function that returns an instance of the provider to be injected
   */
  useFactory: (...args: any[]) => T;
}
