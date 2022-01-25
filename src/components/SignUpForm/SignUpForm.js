import axios from "axios";
import { useEffect, useState } from "react";
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

const SignUpForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [token, setToken] = useState("");

  useEffect(async () => {

    const res = await axios({
      method: "GET",
      url: "http://localhost:8100/api/token",
    });
    console.log(res.data.data);
    setToken(res.data.data);
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();

    var bodyFormData = new FormData();

    bodyFormData.append("name", name);
    bodyFormData.append("email", email);
    bodyFormData.append("password", password);
    bodyFormData.append("confirm_password", confirmPassword);
    bodyFormData.append("_token", token);

    const res = await axios({
      method: "POST",
      url: "http://localhost:8100/api/register",
      headers: { "Content-Type": "multipart/form-data", 'X-CSRF-TOKEN': token},
      data: bodyFormData,
      withCredentials: true
    });
    

    console.log(res);
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <form className="bg-white px-6 py-8 rounded shadow-md text-black w-full" method="POST">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="block border border-grey-light w-full p-3 rounded mb-4" name="name" placeholder="Full Name" />

          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block border border-grey-light w-full p-3 rounded mb-4" name="email" placeholder="Email" />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
          />
          <input type="hidden" name="_token" value={token} />

          <button type="submit" onClick={handleSubmit} className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
