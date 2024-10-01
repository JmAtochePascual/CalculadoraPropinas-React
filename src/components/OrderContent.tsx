import { formatCurrency } from "../helpers";
import { OrderItem } from "../types";

type OrderContentProps = {
  item: OrderItem;
  deleteItem: (id: OrderItem['id']) => void;
}

const OrderContent = ({ item, deleteItem }: OrderContentProps) => {
  return (
    <div
      className="py-4 flex justify-between items-center border-t border-gray-200 last-of-type:border-b">
      <div>
        <p>{item.name} - {formatCurrency(item.price)}</p>
        <p className='font-black'>{item.quantity} - {formatCurrency(item.price * item.quantity)}</p>
      </div>
      <button
        onClick={() => deleteItem(item.id)}
        className="w-8 h-8 bg-red-500 text-white font-bold rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300 ease-in-out">
        X
      </button>
    </div>
  )
}

export default OrderContent