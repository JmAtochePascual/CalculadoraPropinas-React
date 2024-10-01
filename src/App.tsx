import MenuItem from './components/MenuItem';
import useOrder from './hook/useOrder';
import { menuItems } from './data/db';
import { formatCurrency } from './helpers';

function App() {
  const { order, addItem, deleteItem } = useOrder();

  return (
    <>
      <header className="mb-12 p-8 bg-teal-500">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="w-11/12 max-w-7xl mx-auto pb-12 grid gap-8 md:grid-cols-2">
        <div className="">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-600">Menú</h2>
          {
            menuItems.map((item) =>
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            )
          }
        </div>

        <div className="">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-600">Orden</h2>
          {
            order.map((item) =>
              <div
                key={item.id}
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
        </div>
      </main >
    </>
  )
}

export default App
