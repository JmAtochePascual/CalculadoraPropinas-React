import { MenuItem, OrderItem } from "../types"

export type OrderActions =
  { type: 'add-order', payload: { newItem: MenuItem } } |
  { type: 'delete-order', payload: { id: OrderItem['id'] } } |
  { type: 'set-tip', payload: { tip: number } } |
  { type: 'clear-order' }

export type OrderState = {
  order: OrderItem[],
  tip: number
}

export const initialState: OrderState = {
  order: [],
  tip: 0
}


export const orderReducer = (state: OrderState = initialState, action: OrderActions) => {

  const increaseQuantity = (id: OrderItem['id']) => state.order.map((orderItem) => id === orderItem.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem)

  const searchItem = (id: OrderItem['id']) => state.order.find((orderItem) => orderItem.id === id)


  if (action.type === 'add-order') {
    const existingItem = searchItem(action.payload.newItem.id)

    return existingItem
      ? { ...state, order: increaseQuantity(action.payload.newItem.id) }
      : { ...state, order: [...state.order, { ...action.payload.newItem, quantity: 1 }] }
  }

  // Delete an item from the order, if the order has only one item, the tip is set to 0 because the order is empty and the tip is not needed anymore 
  if (action.type === 'delete-order') return {
    ...state,
    order: state.order.filter((orderItem) => orderItem.id !== action.payload.id),
    tip: state.order.length === 1 ? 0 : state.tip
  }

  if (action.type === 'set-tip') return { ...state, tip: action.payload.tip }

  if (action.type === 'clear-order') return { ...state, order: [], tip: 0 }

  return state;
}