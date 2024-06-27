import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Summary() {
  const { userData } = useContext(UserContext);

  console.log(userData);

  return (
    <div className="p-8 flex flex-col justify-center items-center">
      <h1 className="font-bold text-lg">Summary</h1>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
        <p>City: {userData.city}</p>
    </div>
  );
}

export default Summary;
