import { formatCurrency } from "../helpers";
import { MenuItem } from "../types"

type MenuItemsProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
}

const MenuItems = ({ item, addItem }: MenuItemsProps) => {
  return (
    <div
      key={item.id}
      className="mb-4 flex justify-between items-center py-2 px-4 border rounded-md border-teal-400">
      <div>
        <p className="text-lg font-bold text-gray-800">{item.name}</p>
        <p className="text-lg font-black">{formatCurrency(item.price)}</p>
      </div>
      <button
        onClick={() => addItem(item)}
        className="bg-teal-500 text-white font-bold px-4 py-2 rounded hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-300 ease-in-out">
        Agregar
      </button>
    </div>
  )
}

export default MenuItems