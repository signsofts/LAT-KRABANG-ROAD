var express = require('express');
var router = express.Router();
var mysql = require('../connect');

var omise = require('omise')({
  'publicKey': "pkey_test_5v5zy2me9pbw85r9h6i",
  'secretKey': "skey_test_5v5zy3932dasr926s1q"
});
// Add member
// Add member
router.post('/formregister', async (req, res) => {
  try {
    const data = req.body;
    data.role = 'member';

    // Check if the email already exists
    const checkEmailQuery = 'SELECT COUNT(*) AS count FROM customers WHERE Email = ?';
    const emailExists = await new Promise((resolve, reject) => {
      mysql.query(checkEmailQuery, data.Email, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result[0].count > 0);
        }
      });
    });

    if (emailExists) {
      res.status(201).json({ message: 'Email already exists' });
    } else {
      const insertQuery = 'INSERT INTO customers SET ?';
      mysql.query(insertQuery, data, (err, result) => {
        if (err) {
          res.status(500).json({ error: err.message });
        } else {
          res.status(200).json(result)
        }
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.post('/reserve', async (req, res) => {

  // return ;
  let { ID_Room, Name_Room, Style_Room, Detail_Room, Name_member, Tel_member, checkIn, checkOut, Total_price, ID_CUS, formProps } = req.body;

  const data = {
    ID_Room: ID_Room,
    Name_Room: Name_Room,
    Style_Room: Style_Room,
    Detail_Room: Detail_Room,
    Name_member: Name_member,
    Tel_member: Tel_member,
    checkIn: checkIn,
    checkOut: checkOut,
    Total_price: Total_price,
    ID_CUS: ID_CUS,
  };


  try {

    // const omise = require('omise')({
    //   publicKey: 'pkey_test_no1t4tnemucod0e51mo',
    // });

    // const token = await omise.tokens.create({
    //   card: {
    //     name: 'JOHN DOE',
    //     city: 'Bangkok',
    //     postal_code: 10320,
    //     number: '4242424242424242',
    //     expiration_month: 2,
    //     expiration_year: 2027,
    //     security_code: 123,
    //   },
    // });

    const customer = await omise.customers.create({
      Tel_member,
      description: Detail_Room,
      card: formProps.omiseToken
    });

    const charge = await omise.charges.create({
      amount: Total_price * 100,
      currency: "THB",
      customer: customer.id
    });

    // res.json(customer);

    var sql = 'INSERT INTO reservemember SET ?';
    mysql.query(sql, data, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.redirect('/');
      }
    });

  } catch (error) {
    res.send(err);
  }



});


router.post('/updateRoomStatus', (req, res) => {
  const { ID_Room, status } = req.body;
  const sql = 'UPDATE room SET status = ? WHERE ID_Room = ?';

  mysql.query(sql, [status, ID_Room], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send({ success: true });
    }
  });
});


router.get('/rooms', (req, res) => {
  // ดึงข้อมูลจากตาราง 'room'
  mysql.query('SELECT * FROM room', (error, results, fields) => {
    if (error) {
      console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results);
  });
});

router.get('/rooms/:ID_Room', (req, res) => {
  const roomId = req.params.ID_Room;
  // ดึงข้อมูลจากตาราง 'room' โดยใช้ ID_Room
  const query = 'SELECT * FROM room WHERE ID_Room = ?';
  mysql.query(query, [roomId], (error, results, fields) => {
    if (error) {
      console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
      res.status(500).send('Internal Server Error');
      return;
    }

    // ตรวจสอบว่ามีข้อมูลห้องที่ตรงกับ ID_Room ที่ระบุหรือไม่
    if (results.length === 0) {
      res.status(404).send('Room not found');
      return;
    }

    res.json(results[0]); // ส่งข้อมูลห้องที่พบกลับไป
  });
});

router.get('/returnroom/:ID_Room', (req, res) => {
  // const ID = req.params.ID;
  const roomId = req.params.ID_Room;


  // res.status(200).send(roomId);

  let updatedData = {
    status: "ว่าง"
  }
  const sql = 'UPDATE room SET ? WHERE ID_Room = ?';
  mysql.query(sql, [updatedData, roomId], (error, results, fields) => {
    if (error) {
      console.error('เกิดข้อผิดพลาดในการอัปเดตข้อมูล:', error);
      res.status(500).send('Internal Server Error');
      return;
    }
    if (results.affectedRows === 0) {
      res.statu(200).send('ไม่พบข้อมูลที่ต้องการอัปเดต');
    } else {
      res.status(200).send('อัปเดตข้อมูลเรียบร้อยแล้ว');
    }
  });
});


router.get('/customers/:id_cus', (req, res) => {
  const customerId = req.params.id_cus;
  const query = 'SELECT Name_CUS, Surname_CUS, Address_CUS, Tel_CUS, Email FROM customers WHERE ID_CUS = ?';
  mysql.query(query, [customerId], (error, results, fields) => {
    if (error) {
      console.error('Error fetching user data:', error);
      res.status(500).send('Internal Server Error');
      return;
    }

    if (results.length === 0) {
      res.status(404).send('User not found');
      return;
    }

    res.json(results[0]); // ส่งข้อมูลผู้ใช้ที่พบกลับไป
  });
});

router.get('/reservemember/:id_cus', (req, res) => {
  const customerId = req.params.id_cus;
  const query = 'SELECT * FROM reservemember WHERE ID_CUS = ?';
  mysql.query(query, [customerId], (error, results, fields) => {
    if (error) {
      console.error('Error fetching booking data:', error);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results); // ส่งข้อมูลการจองของสมาชิกทั้งหมดกลับไป
  });
});


router.post('/customers/:id_cus', (req, res) => {
  const customerId = req.params.id_cus;
  const updatedUserData = req.body;
  const query = 'UPDATE customers SET ? WHERE ID_CUS = ?';
  mysql.query(query, [updatedUserData, customerId], (error, results, fields) => {
    if (error) {
      console.error('Error updating user data:', error);
      res.status(500).send('Internal Server Error');
      return;
    }

    res.status(200).send('Profile updated successfully');
  });
});



module.exports = router;