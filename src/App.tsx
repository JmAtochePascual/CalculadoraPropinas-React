import MenuItems from './components/MenuItems';
import useOrder from './hook/useOrder';
import { menuItems } from './data/db';
import OrderContent from './components/OrderContent';
import OrderTotal from './components/OrderTotal';
import OrderTip from './components/OrderTip';

function App() {
  const { order, tip, setTip, addItem, deleteItem, clearOrder } = useOrder()

  return (
    <>
      <header className="mb-12 p-8 bg-teal-500">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="w-11/12 max-w-7xl mx-auto pb-12 grid gap-8 md:grid-cols-2">
        <div className="">
          <h2 className="mb-8 text-center text-2xl font-bold uppercase">Menú</h2>
          {
            menuItems.map((item) =>
              <MenuItems
                key={item.id}
                item={item}
                addItem={addItem}
              />
            )
          }
        </div>

        <div>
          <h2 className="mb-8 text-center text-2xl font-bold uppercase">Orden</h2>

          {
            order.length === 0
              ? <p className="text-center">Aún no hay platillos en la orden</p>
              : <>
                {
                  order.map((item) =>
                    <OrderContent
                      key={item.id}
                      item={item}
                      deleteItem={deleteItem}
                    />
                  )
                }

                <OrderTip
                  setTip={setTip}
                />

                <OrderTotal
                  order={order}
                  tip={tip}
                  clearOrder={clearOrder}
                />
              </>
          }
        </div>
      </main >
    </>
  )
}

export default App
