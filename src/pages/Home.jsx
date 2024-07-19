import {
  Link,
  useNavigate,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";
import { products } from "../data/product";

function Home() {
  const navigate = useNavigate();
  // const [, setSearchParams] = useSearchParams();

  function handleClickDetail(id, name) {
    // setSearchParams(name);
    // navigate(`/details/${id}`);
    // navigate({
    //   pathname: `/details/${id}`,
    //   search: createSearchParams({
    //     name: name,
    //   }).toString(),
    // });
    navigate(`/details/${id}`, {
      state: {
        name: name,
      },
    });
  }

  return (
    <div>
      <h1 className="font-bold text-lg text-center">Home</h1>
      <div className="flex gap-4 my-4">
        {/* mapping product ke dalam card */}
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded border p-2 w-64"
            onClick={() => handleClickDetail(product.id, product.title)}
          >
            <img
              src={product.image}
              alt=""
              className="aspect-square w-full rounded object-cover"
            />

            <div className="mt-3">
              <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                {product.title}
              </h3>
              <p className="mt-1 text-sm text-gray-700">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
