import { useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";
import Card from "../components/Card";

function Home() {
  // const [dataProducts, setDataProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  const getData = (url) => axios.get(url).then((response) => response.data);

  const {
    data: dataProducts,
    isLoading,
    error,
    mutate,
  } = useSWR("http://localhost:3000/products", getData);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  // console.log(dataProducts);

  // async function getData() {
  //   setIsLoading(true);
  //   try {
  //     const result = await axios.get("http://localhost:3000/products");
  //     setDataProducts(result.data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  // async function getData() {
  //   try {
  //     const response = await fetch("http://localhost:3000/products");
  //     const data = await response.json();
  //     setDataProducts(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  function postData() {
    const payload = {
      title: "Calvin Klein CK One",
      price: 49.99,
      description: "Perfume for men and women.",
      category: "beauty",
      thumbnail:
        "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png",
    };

    axios
      .post("http://localhost:3000/products", payload)
      .then(() => {
        console.log("New Product successfully added!");
        mutate();
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="p-8 flex flex-col justify-center items-center">
      <h1 className="font-bold text-lg">Home</h1>
      {/* <div className="flex gap-4">
        <button className="p-2 bg-sky-400 rounded" onClick={getData}>
          Get Data
        </button>
        <button className="p-2 bg-sky-400 rounded" onClick={postData}>
          Post Data
        </button>
      </div> */}
      <button className="p-2 bg-sky-400 rounded" onClick={postData}>
        Post Data
      </button>

      <div className="grid grid-cols-3 gap-4">
        {dataProducts.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            image={product.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
