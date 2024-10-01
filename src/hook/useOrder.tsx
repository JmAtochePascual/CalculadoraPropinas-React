import { useState } from "react"
import { MenuItem, OrderItem } from "../types"

const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([])

  // Icrease the quantity of an item in the order
  const increaseQuantity = (id: OrderItem['id']) => {
    const newOrder = order.map((orderItem) => id === orderItem.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem)
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

  return {
    addItem,
  }
}

export default useOrder