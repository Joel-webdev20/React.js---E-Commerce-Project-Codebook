import { useTitle } from "../../hooks/useTitle";
import { useCart } from "../../context";
import { CarList } from "./components/CarList";
import { CartEmpty } from "./components/CartEmpty";

export const CartPage = () => {
  const { cartList } = useCart();
  useTitle(`Cart(${cartList.length})`);

  return (
    <main>
      {cartList.length ? <CarList /> : <CartEmpty />}
    </main>
  )
}
