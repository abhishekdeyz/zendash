import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // 🔥 import karo

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate(); //

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", form);

      // ✅ Save token
      localStorage.setItem("token", res.data.token);

      // ✅ Redirect to dashboard
      navigate("/dashboard");
    } catch (err) {
      setMsg(err.response?.data?.msg || "Error occurred");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96 space-y-4">
        <h2 className="text-2xl font-bold">Register</h2>
        <input type="text" name="name" placeholder="Name" className="input" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" className="input" value={form.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" className="input" value={form.password} onChange={handleChange} required />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Register</button>
        {msg && <p className="text-sm text-center">{msg}</p>}
      </form>
    </div>
  );
};

export default Register;