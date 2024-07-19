import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Specification from "./components/Specification";
import Review from "./components/Review";

// setup router with object
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/details",
//     element: <Details />,
//   },
// ]);

function App() {
  return (
    <div className="flex justify-center items-center p-4">
      {/* <RouterProvider router={router} /> */}

      {/* setup router with jsx */}
      <Routes>
        <Route path="/" element={<Home />} />

        {/* dynamic route */}
        <Route path="/details/:id" element={<Details />}> 
          {/* nested route */}
          <Route path="specification" element={<Specification />} />
          <Route path="review" element={<Review />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
