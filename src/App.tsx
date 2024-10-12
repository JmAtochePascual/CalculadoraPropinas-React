import MenuItems from './components/MenuItems';
import { menuItems } from './data/db';
import OrderContent from './components/OrderContent';
import OrderTotal from './components/OrderTotal';
import OrderTip from './components/OrderTip';
import { initialState, orderReducer } from './reducer/orderReducer';
import { useReducer } from 'react';

function App() {
  const [state, dispatch] = useReducer(orderReducer, initialState)

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
                dispatch={dispatch}
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
                      dispatch={dispatch}
                    />
                  )
                }

                <OrderTip
                  dispatch={dispatch}
                />

                <OrderTotal
                  order={state.order}
                  tip={state.tip}
                  dispatch={dispatch}
                />
              </>
          }
        </div>
      </main >
    </>
  )
}

export default App
