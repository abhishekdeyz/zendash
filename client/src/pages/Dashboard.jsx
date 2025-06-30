import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [stats, setStats] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/dashboard", {
          headers: {
            Authorization: token,
          },
        });
        setStats(res.data.stats);
      } catch (err) {
        console.error(err);
        navigate("/login");
      }
    };

    fetchStats();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">📊 Dashboard Overview</h1>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`${item.color} text-white p-6 rounded shadow-md`} //
          >
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-3xl mt-2 font-bold">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;