type KV = {
  A: string
}

const creteUseState =
  <T extends keyof KV>(key: T, init: () => KV[T] | Ref<KV[T]>) =>
  () =>
    useState(key, init)

export const useAState = creteUseState('A', () => '1')
