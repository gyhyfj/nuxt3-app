export const createStringEnum = <T extends string>(keys: Readonly<T[]>) => {
  return keys.reduce(
    (acc, key) => {
      acc[key] = key
      return acc
    },
    {} as { [K in T]: K },
  )
}
