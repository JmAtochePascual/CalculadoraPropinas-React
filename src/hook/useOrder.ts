import { useContext } from "react";
import { orderContext } from "../contex/OrderContext";

export const useOrder = () => {
  const context = useContext(orderContext);
  if (!context) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
};