export type IsEmptyObject<O> = keyof O extends never ? true : false
