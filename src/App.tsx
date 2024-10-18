import MenuItems from './components/MenuItems';
import { menuItems } from './data/db';
import OrderContent from './components/OrderContent';
import OrderTotal from './components/OrderTotal';
import OrderTip from './components/OrderTip';
import { useContext } from 'react';
import { orderContext } from './contex/OrderContext';

function App() {
  const { state } = useContext(orderContext);

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
              />
            )
          }
        </div>

        <div>
          <h2 className="mb-8 text-center text-2xl font-bold uppercase">Orden</h2>

          {
            state.order.length === 0
              ? <p className="text-center">Aún no hay platillos en la orden</p>
              : <>
                {
                  state.order.map((item) =>
                    <OrderContent
                      key={item.id}
                      item={item}
                    />
                  )
                }

                <OrderTip />

                <OrderTotal
                  tip={state.tip}
                />
              </>
          }
        </div>
      </main >
    </>
  )
}

export default App
