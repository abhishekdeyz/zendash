const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

router.get("/", protect, (req, res) => {
  res.json({
    stats: [
      { title: "Total Users", value: 1200, color: "bg-blue-500" },
      { title: "Active Orders", value: 235, color: "bg-green-500" },
      { title: "Revenue", value: "₹48,000", color: "bg-yellow-500" },
    ],
  });
});

module.exports = router;