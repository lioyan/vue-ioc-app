import 'reflect-metadata'
import { Type } from './interface'

export const INJECTED = 'INJECTED_TYPES'

export function Injectable() {
  return function(target: any) {
    // 记录前置依赖
    const outInjected = Reflect.getMetadata('design:paramtypes', target) as (Type<any> | undefined)[]
    const innerInjected = target[INJECTED]
    if(!innerInjected) {
      target[INJECTED] = outInjected
    } else {
      outInjected.forEach((argType, index) => {
        if(!innerInjected[index]) {
          target[INJECTED][index] = argType
        }
      })
    }
    return target
  }
}