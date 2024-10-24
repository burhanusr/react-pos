import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

import Button from "./../components/ui/Button/Button";
import { register } from "../api/authApi";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const { name, email, password, passwordConfirm } = formData;

    try {
      await register(name, email, password, passwordConfirm);
      setFormData({});
      toast.success("Register Successful, Please Login Again!");
      navigate("/login");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className="flex h-screen items-center justify-center px-4 sm:px-6 md:px-8 md:py-8">
      <div className="rounded-md border bg-white p-8 shadow-lg">
        <header className="mb-8 text-center">
          <h1 className="text-lg font-bold">Register</h1>
          <div className="flex justify-center gap-1 text-sm">
            <p>Already have an account?</p>
            <Link to="/login" className="text-sky-600 hover:text-sky-500">
              Login
            </Link>
          </div>
        </header>

        <form className="flex flex-col gap-4 md:w-80" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold" htmlFor="username">
              Name
            </label>
            <input
              className="rounded-md border px-4 py-2 text-sm shadow"
              type="text"
              name="name"
              id="username"
              autoComplete="off"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold" htmlFor="email">
              Email
            </label>
            <input
              className="rounded-md border px-4 py-2 text-sm shadow"
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold" htmlFor="password">
              Password
            </label>
            <input
              className="rounded-md border px-4 py-2 text-sm shadow"
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              value={formData.password}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold" htmlFor="passConfirm">
              Password Confirm
            </label>
            <input
              className="rounded-md border px-4 py-2 text-sm shadow"
              type="password"
              name="passwordConfirm"
              id="passConfirm"
              onChange={handleChange}
              value={formData.passwordConfirm}
            />
          </div>
          <div className="mt-4 w-full">
            <Button type="submit" size="sm" className="w-full">
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
