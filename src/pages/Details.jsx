import { Link, Outlet, useParams, useSearchParams } from "react-router-dom";
import { products } from "../data/product";

function Details() {
  const { id } = useParams();
  const [searcParams] = useSearchParams();

  // method find untuk mencari produk yang sesuai dengan id yang didapatkan dari params url
  const detailProduct = products.find((product) => product.id === parseInt(id));

  console.log(searcParams.get("name"));
  return (
    <div>
      <h1 className="font-bold text-lg text-center">Details</h1>
      <div className="flex my-4 gap-8">
        <div className="w-96">
          <img src={detailProduct.image} alt="" />
        </div>

        <div className="flex flex-col gap-4 w-96">
          <h2 className="font-bold">{detailProduct.title}</h2>
          <p className="font-bold">${detailProduct.price}</p>
          <p>{detailProduct.description}</p>
        </div>
      </div>
      <nav className="flex justify-center gap-4">
        <Link to="specification" className="underline">
          Specification
        </Link>
        <Link to="review" className="underline">
          Review
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Details;
