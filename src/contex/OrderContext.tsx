import { Dispatch, ReactNode, createContext, useReducer } from "react"
import { OrderActions, OrderState, initialState, orderReducer } from "../reducer/orderReducer"

type OrderProviderProps = {
  children: ReactNode
}

type OrderContextProps = {
  state: OrderState,
  dispatch: Dispatch<OrderActions>
}

export const orderContext = createContext<OrderContextProps>(null!)

const OrderProvider = ({ children }: OrderProviderProps) => {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  return (
    <orderContext.Provider
      value={{ state, dispatch }}>
      {children}
    </orderContext.Provider>
  )
}

export default OrderProvider