type StateKV = {
  A: string
}

const creteUseState =
  <T extends keyof StateKV>(key: T, init: () => StateKV[T] | Ref<StateKV[T]>) =>
  (): globalThis.Ref<StateKV[T], StateKV[T]> & {
    reset: () => void
  } => {
    const state = useState(key, init)
    Reflect.set(state, 'reset', () => (state.value = toValue(init())))
    return state as any
  }

export const useAState = creteUseState('A', () => '1')
