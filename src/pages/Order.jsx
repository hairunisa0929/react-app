import axios from "axios";
import useSWR from "swr";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import CartItem from "../components/CartItem";
import { addToCart } from "../store/actions/cartAction";

function Order() {
  const dispatch = useDispatch();

  const { dataCart } = useSelector((state) => state.cart);

  const getData = (url) => axios.get(url).then((response) => response.data);

  const {
    data: dataProducts,
    isLoading,
    error,
  } = useSWR("http://localhost:3000/products", getData);

  const addItemToCart = (product) => {
    const payload = {
      ...product,
      qty: 1,
    };
    dispatch(addToCart(payload));
  };

  console.log(dataCart);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="p-4 flex flex-col">
      <h1 className="font-bold text-lg text-center">Order</h1>

      <div className="flex">
        <div className="w-3/4 px-4 grid grid-cols-3 gap-4">
          {dataProducts.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              image={product.thumbnail}
              onClick={() => addItemToCart(product)}
            />
          ))}
        </div>

        <div className="w-1/4">
          {dataCart.map((item) => (
            <CartItem
              key={item.id}
              name={item.title}
              image={item.thumbnail}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Order;
