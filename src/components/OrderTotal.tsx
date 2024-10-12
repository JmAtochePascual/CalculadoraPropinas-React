import { Dispatch } from "react";
import { formatCurrency } from "../helpers";
import { OrderItem } from "../types";
import { OrderActions } from "../reducer/orderReducer";

type OrderTotalProps = {
  order: OrderItem[];
  tip: number;
  dispatch: Dispatch<OrderActions>;
}

const OrderTotal = ({ order, tip, dispatch }: OrderTotalProps) => {
  const subtotal = order.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tipQuanity = subtotal * tip;
  const total = subtotal + tipQuanity;

  return (
    <div>
      <div className="space-y-3">
        <h2 className="font-black text-2xl text-center">Totales y Propina</h2>

        <p>Subtotal a pagar: <span className="font-bold">{formatCurrency(subtotal)}</span></p>
        <p>Propina: <span className="font-bold">{formatCurrency(tipQuanity)}</span></p>
        <p>Total a pagar: <span className="font-bold">{formatCurrency(total)}</span></p>

        <button
          disabled={tip === 0}
          onClick={() => dispatch({ type: 'clear-order' })}
          className="w-full p-4 block text-center font-bold uppercase text-white bg-black ease-in-out duration-300 hover:bg-gray-900 disabled:opacity-10">
          Guardar Orden
        </button>
      </div>
    </div>
  )
}

export default OrderTotal