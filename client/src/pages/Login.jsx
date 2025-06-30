import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      localStorage.setItem("token", res.data.token); // 🔐 Save token
      setMsg("Login successful!");
      navigate("/dashboard"); // 🚀 Redirect to Dashboard
    } catch (err) {
      setMsg(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96 space-y-4">
        <h2 className="text-2xl font-bold">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded w-full">
          Login
        </button>

        {msg && <p className="text-sm text-center text-blue-600">{msg}</p>}
      </form>
    </div>
  );
};

export default Login;