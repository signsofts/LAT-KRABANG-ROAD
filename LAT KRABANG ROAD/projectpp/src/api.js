const express = require('express');
const router = express.Router();
const Room = require('./models/room'); // ต้องมีโมเดล Room ที่เชื่อมต่อกับฐานข้อมูล

// สร้าง Endpoint สำหรับดึงข้อมูล room ทั้งหมด
router.get('/rooms', async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
