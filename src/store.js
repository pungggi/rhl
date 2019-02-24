import { store as stateStore, view } from "react-easy-state"

const init = {
  fahrenheit: 77,
  Accounts: [{id: '1', balance: 40}]
}

const store = stateStore(init)
export { view, store }
