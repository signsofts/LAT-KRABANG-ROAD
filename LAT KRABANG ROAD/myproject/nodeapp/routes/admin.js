var express = require('express');
var router = express.Router();
var mysql = require('../connect');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// const omise = require('omise')({
//   secretKey: "skey_test_5v5zy3932dasr926s1q",
//   omiseVersion: '2019-05-29'
// })


// const createCharge = (source, amount, orderId) => {
//   return new Promise((resolve, reject) => {
//     omise.charges.create({
//       amount: (amount * 100),
//       currency: 'THB',
//       return_uri: `http://localhost:5173/success?order_id=${orderId}`,
//       metadata: {
//         orderId
//       },
//       source,
//     }, (err, resp) => {
//       if (err) {
//         return reject(err)
//       }
//       resolve(resp)
//     })
//   })
// }

//แสดงรายละเอียดลูกค้า 
router.get('/customers', (req, res) => {
  mysql.query('SELECT * FROM customers', (error, results, fields) => {
    if (error) {
      console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results);
  });
});

//แสดงรายละเอียดลูกค้า 
router.get('/bookings', (req, res) => {
  mysql.query('SELECT * FROM reservemember', (error, results, fields) => {
    if (error) {
      console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
      res.status(500).send('Internal Server Error');
      return;
    }
    let temp = results
    res.json(results);
  });
});


router.get('/bookingsSum', async (req, res) => {
  mysql.query('SELECT * FROM loglogin', (error, results, fields) => {
    if (error) {
      console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
      res.status(500).send('Internal Server Error');
      return;
    }
    // let temp = results

    res.status(200).send(results);
    // return ;
  });
});

//แก้ไขข้อมูลลูกค้า
router.post('/customers/update/:ID_CUS', (req, res) => {
  const customerId = req.params.ID_CUS;
  const updatedData = req.body;
  const sql = 'UPDATE customers SET ? WHERE ID_CUS = ?';
  mysql.query(sql, [updatedData, customerId], (error, results, fields) => {
    if (error) {
      console.error('เกิดข้อผิดพลาดในการอัปเดตข้อมูล:', error);
      res.status(500).send('Internal Server Error');
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).send('ไม่พบข้อมูลที่ต้องการอัปเดต');
    } else {
      res.status(200).send('อัปเดตข้อมูลเรียบร้อยแล้ว');
    }
  });
});

router.post('/admin/returnroom/', (req, res) => {
  // const ID = req.params.ID;
  const updatedDatax = req.body;
  let updatedData = {
    status: "ว่าง"
  }
  const sql = 'UPDATE room SET ? WHERE ID_Room = ?';
  mysql.query(sql, [updatedData, updatedDatax.ID_Room], (error, results, fields) => {
    if (error) {
      console.error('เกิดข้อผิดพลาดในการอัปเดตข้อมูล:', error);
      res.status(500).send('Internal Server Error');
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).send('ไม่พบข้อมูลที่ต้องการอัปเดต');
    } else {
      res.status(200).send('อัปเดตข้อมูลเรียบร้อยแล้ว');
    }
  });
});


//แก้ไขข้อมูลห้อง
router.post('/rooms/update/:ID_Room', upload.single('IMG_Room'), (req, res) => {
  const roomId = req.params.ID_Room;
  const { Name_Room, Price, Detail_Room, Style_Room, status } = req.body;
  const imageBuffer = req.file ? req.file.buffer : null; // Access image buffer

  // ตรวจสอบว่ามีการอัปโหลดรูปภาพใหม่หรือไม่
  if (imageBuffer) {
    // ถ้ามีการอัปโหลดรูปภาพใหม่ ให้ทำการอัปเดตทั้งข้อมูลและรูปภาพ
    const sql = 'UPDATE room SET `Name_Room` = ?, `Price` = ?, `Detail_Room` = ?, `Style_Room` = ?, `IMG_Room` = ?, `status` = ? WHERE ID_Room = ?';

    mysql.query(sql, [Name_Room, Price, Detail_Room, Style_Room, imageBuffer, status, roomId], (error, results, fields) => {
      if (error) {
        console.error('Error updating room:', error);
        res.status(500).send('Internal Server Error');
        return;
      }
      if (results.affectedRows === 0) {
        res.status(404).send('Room not found for updating');
      } else {
        res.status(200).send('Room updated successfully');
      }
    });
  } else {
    // ถ้าไม่มีการอัปโหลดรูปภาพใหม่ ให้ทำการอัปเดตเฉพาะข้อมูลทั่วไป
    const sql = 'UPDATE room SET `Name_Room` = ?, `Price` = ?, `Detail_Room` = ?, `Style_Room` = ?, `status` = ? WHERE ID_Room = ?';

    mysql.query(sql, [Name_Room, Price, Detail_Room, Style_Room, status, roomId], (error, results, fields) => {
      if (error) {
        console.error('Error updating room:', error);
        res.status(500).send('Internal Server Error');
        return;
      }
      if (results.affectedRows === 0) {
        res.status(404).send('Room not found for updating');
      } else {
        res.status(200).send('Room updated successfully');
      }
    });
  }
});
// ลบข้อผู้ใช้งาน 
router.delete('/customers/:ID_CUS', (req, res) => {
  const customerId = req.params.ID_CUS;
  const sql = 'DELETE FROM customers WHERE ID_CUS = ?';

  mysql.query(sql, [customerId], (error, results, fields) => {
    if (error) {
      console.error('เกิดข้อผิดพลาดในการลบข้อมูลลูกค้า:', error);
      res.status(500).send('Internal Server Error');
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).send('ไม่พบข้อมูลลูกค้าที่ต้องการลบ');
    } else {
      res.status(200).send('ลบข้อมูลลูกค้าสำเร็จ');
    }
  });
});



module.exports = router;