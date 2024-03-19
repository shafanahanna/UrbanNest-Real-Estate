import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignIn() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  //   console.log(formData, "ooooooo");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signin",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // console.log(response.data, "hlo");
      if (response.data.success === false) {
        setError(response.data.message);
        return;
      }
      setError(null);
      navigate("/");
    } catch (error) {
      // console.error("Error:", error);

      if (error.response.status === 404) {
        setError("User not found");
      } else if (error.response.status === 401) {
        setError("Wrong Password");
      } else {
        setError("An error occured!!,Please try again later");
      }
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg "
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg "
          id="password"
          onChange={handleChange}
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Sign In
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont have an account ?</p>
        <Link to={"/signup"}>
          <span className="text-blue-700">Sign up</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-6">{error} </p>}
    </div>
  );
}

export default SignIn;
