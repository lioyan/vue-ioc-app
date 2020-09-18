import { Provider, ClassProvider, ValueProvider, FactoryProvider } from "./interface";

export const isClassProvider = <T>(provider: Provider<T>): boolean =>
  (provider as ClassProvider<T>).useClass !== undefined;

export const isValueProvider = <T>(provider: Provider<T>): boolean =>
  (provider as ValueProvider<T>).useValue !== undefined;

export const isFactoryProvider = <T>(provider: Provider<T>):boolean =>
  (provider as FactoryProvider<T>).useFactory !== undefined 