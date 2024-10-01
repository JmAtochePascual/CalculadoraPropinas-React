import { useState } from "react"
import { MenuItem, OrderItem } from "../types"

const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([])
  const [tip, setTip] = useState(0)

  // Icrease the quantity of an item in the order
  const increaseQuantity = (id: OrderItem['id']) => {
    const newOrder = order.map((orderItem) => id === orderItem.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem)
    setOrder(newOrder)
  }

  // Delete an item from the order
  const deleteItem = (id: OrderItem['id']) => {
    const newOrder = order.filter((orderItem) => orderItem.id !== id)
    setOrder(newOrder)
  }

  // Add an item to the order or increase its quantity if it already exists
  const addItem = (item: MenuItem) => {
    const existingItem = order.find((orderItem) => orderItem.id === item.id)

    if (existingItem) {
      increaseQuantity(item.id)
      return;
    }

    setOrder([...order, { ...item, quantity: 1 }])
  }

  // Clear the order
  const clearOrder = () => {
    setOrder([])
    setTip(0)
  }

  return {
    order,
    tip,
    setTip,
    addItem,
    deleteItem,
    clearOrder
  }
}

export default useOrder