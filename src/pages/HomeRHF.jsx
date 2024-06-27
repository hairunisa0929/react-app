import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../context/UserContext";


function HomeRHF() {
  const { setUserData } = useContext(UserContext);
  
  const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitForm = (data) => {
    console.log(data);
    setUserData(data);
    navigate("/summary");
  };

  return (
    <div className="p-8 flex flex-col justify-center items-center">
      <h1 className="font-bold text-lg">Form</h1>
      <form
        className="flex flex-col gap-4 mt-4"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            placeholder="Name"
            className="w-full rounded-lg border-[1px] border-gray-300 p-4 pe-12 text-sm focus:outline-sky-200"
            id="name"
            {...register("name")}
          />
          <p className="text-red-600">{errors.name?.message}</p>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            placeholder="Email"
            className="w-full rounded-lg border-[1px] border-gray-300 p-4 pe-12 text-sm focus:outline-sky-200"
            id="email"
            {...register("email")}
          />
          <p className="text-red-600">{errors.email?.message}</p>
        </div>

        <div>
          <label htmlFor="city">City</label>
          <select
            placeholder="City"
            className="p-4 pe-12 w-full rounded-lg border-[1px] border-gray-300 text-gray-700 sm:text-sm"
            id="city"
            {...register("city")}
          >
            <option value="">Please select</option>
            <option value="Jakarta">Jakarta</option>
            <option value="Bandung">Bandung</option>
          </select>
        </div>

        <div className="flex gap-8">
          <p>Gender</p>
          <div className="flex gap-2">
            <input
              type="radio"
              id="male"
              {...register("gender")}
              value="male"
            />
            <label htmlFor="male">Male</label>
          </div>

          <div className="flex gap-2">
            <input
              type="radio"
              id="female"
              {...register("gender")}
              value="female"
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>

        <div className="flex gap-2">
          <input type="checkbox" id="agree" {...register("agree")} />
          <label htmlFor="agree">I agree to terms and conditions</label>
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

export default HomeRHF;
