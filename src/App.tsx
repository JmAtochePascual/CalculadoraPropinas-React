import MenuItem from './components/MenuItem';
import useOrder from './hook/useOrder';
import { menuItems } from './data/db';
import OrderContent from './components/OrderContent';
import OrderTotal from './components/OrderTotal';

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

        <div>
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-600">Orden</h2>
          {
            order.map((item) =>
              <OrderContent
                key={item.id}
                item={item}
                deleteItem={deleteItem}
              />
            )
          }

          <OrderTotal
            order={order}
          />
        </div>
      </main >
    </>
  )
}

export default App
