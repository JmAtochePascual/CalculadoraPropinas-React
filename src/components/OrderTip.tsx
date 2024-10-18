import { orderContext } from "../contex/OrderContext";
import { useContext } from "react";

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

const OrderTip = () => {
  const { dispatch } = useContext(orderContext);

  return (
    <form >
      <div className="space-y-4">
        <h2 className="font-black text-2xl">Propina</h2>
        {
          tipOptions.map(option => (
            <div
              key={option.id}
              className="flex items-center gap-2">

              <label
                htmlFor={option.id}>
                {option.label}
              </label>

              <input
                type="radio"
                name="tip"
                id={option.id}
                value={option.value}
                onChange={() => dispatch({ type: 'set-tip', payload: { tip: option.value } })}
                className="cursor-pointer"
              />
            </div>
          ))
        }
      </div>
    </form>
  )
}

export default OrderTip