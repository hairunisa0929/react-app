import { useState } from "react";

function HomeManyStates() {
  // create state for each input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  console.log("name", name);
  console.log("email", email);

  return (
    <div className="p-8 flex flex-col justify-center items-center">
      <h1 className="font-bold text-lg">Form</h1>

      <form className="flex flex-col gap-4 mt-4">
        <div>
          <label htmlFor="name">Name</label>
          <input
            placeholder="Name"
            className="w-full rounded-lg border-[1px] border-gray-300 p-4 pe-12 text-sm focus:outline-sky-200"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            placeholder="Email"
            className="w-full rounded-lg border-[1px] border-gray-300 p-4 pe-12 text-sm focus:outline-sky-200"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          className="rounded-lg bg-sky-400 p-2 text-white self-center w-full"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default HomeManyStates;
