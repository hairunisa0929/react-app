import axios from "axios";
import useSWR from "swr";
import Card from "../components/Card";

function Home() {
  // function get data usin axios
  const getData = (url) => axios.get(url).then((response) => response.data);

  const {
    data: dataProducts,
    isLoading,
    error,
    mutate,
  } = useSWR("http://localhost:3000/products", getData);

  // if isLoading is true, loading will be shown  
  if (isLoading) return <div>Loading...</div>;

  // if error, message error will be shown  
  if (error) return <div>{error.message}</div>;

  //   function for posting data
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
