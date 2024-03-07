<template>
  <head> </head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    href="https://fonts.googleapis.com/css?family=Kanit&subset=thai,latin"
    rel="stylesheet"
    type="text/css"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
    rel="stylesheet"
  />
  <link href="https://fonts.googleapis.com/css?family=Rufina:400,700" rel="stylesheet" />
  <title>Pratya Biz Home Road</title>
  <link rel="shortcut icon" type="image/icon" href="logo/favicon.png" />
  <link rel="stylesheet" href="css/font-awesome.min.css" />
  <link rel="stylesheet" href="css/linearicons.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
  />
  <link rel="stylesheet" href="css/flaticon.css" />
  <link rel="stylesheet" href="css/animate.css" />
  <link rel="stylesheet" href="css/owl.carousel.min.css" />
  <link rel="stylesheet" href="css/owl.theme.default.min.css" />
  <link rel="stylesheet" href="css/bootstrap.min.css" />
  <link rel="stylesheet" href="css/bootsnav.css" />
  <link rel="stylesheet" href="css/style.css" />
  <link rel="stylesheet" href="css/responsive.css" />

  <section
    id="home"
    class="welcome-hero"
    style="background-image: url('images/index/BG1.jpg')"
  >
    <div class="top-area">
      <div class="header-area">
        <nav
          class="navbar navbar-default bootsnav navbar-sticky navbar-scrollspy"
          data-minus-value-desktop="70"
          data-minus-value-mobile="55"
          data-speed="1000"
        >
          <div class="container">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
              >
                <i class="fa fa-bars"></i>
              </button>
              <a class="navbar-brand" href="/indexadmin"
                >Pratya Biz Home Lat Krabang<span></span
              ></a>
            </div>
            <div class="collapse navbar-collapse menu-ui-design" id="navbar-menu">
              <ul
                class="nav navbar-nav navbar-right"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                <li><a href="/indexadmin">หน้าแรก</a></li>
                <li><a href="/updatememberadmin">ผู้ใช้งาน</a></li>
                <li><a href="/updateroomadmin">ห้องพักเกสเฮ้าต์</a></li>
                <li><a href="/reserveadmin">ข้อมูลการจองห้องพัก</a></li>
                <li class="dropdown">
                  <a
                    href="#"
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >email <span class="caret"></span
                  ></a>
                  <ul class="dropdown-menu">
                    <li role="separator" class="divider"></li>
                    <li>
                      <a href="" @click="logout">Logout</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div class="clearfix"></div>
    </div>

    <div class="container">
      <div class="welcome-hero-txt">
        <h2>Guest house of Pratya Biz Home Lat Krabang Road</h2>
        <p>
          ทำเลที่เหมาะกับการอยู่อาศัย ด้วยความที่อยู่ใกล้แหล่งงานขนาดใหญ่
          รวมถึงเดินทางได้สะดวกสบาย และมีสิ่งอำนวยความสะดวกที่ครบครัน
        </p>
      </div>
    </div>
  </section>

  <div class="row p-5">
    <div class="col-md-4">
      <div class="card-body">
        <h2
          style="
            padding: 40px;
            background: burlywood;
            align-items: center;
            text-align: center;
            margin: 30px;
            border-radius: 30px;
          "
        >
          สรุปราคา <span id="amount">{{ amount }}</span> บาท
        </h2>
      </div>
    </div>
    <div class="col-md-4 mt-4">
      <div class="card-body">
        <h2
          style="
            padding: 40px;
            background: yellowgreen;
            align-items: center;
            text-align: center;
            margin: 30px;
            border-radius: 30px;
          "
        >
          ยอดจอง <span id="amount">{{ sumPerson }}</span> ครั้ง
        </h2>
      </div>
    </div>
    <div class="col-md-4 mt-4">
      <div class="card-body">
        <h2
          style="
            padding: 40px;
            background: #337ab7;
            align-items: center;
            text-align: center;
            margin: 30px;
            border-radius: 30px;
          "
        >
          ใช้บริการ <span id="sumLogin">{{ sumLogin }}</span> คน
        </h2>
      </div>
    </div>
  </div>
  <div class="search-container" style="align-items: center; text-align: center">
    <input type="text" placeholder="ค้นหาข้อมูล..." id="searchInput" />
    <button type="button" class="btn-search" @click="search">ค้นหา</button>
  </div>
  <div class="customer-container">
    <table>
      <thead>
        <tr>
          <th>ลำดับการจอง</th>
          <th>ชื่อห้องพัก</th>
          <th>รหัสผู้จอง</th>
          <th>ชื่อผู้จอง</th>
          <th>เข้าพัก</th>
          <th>ออก</th>
          <th>ราคา</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="booking in bookings" :key="booking.ID_booking">
          <td>{{ booking.ID_booking }}</td>
          <td>{{ booking.Name_Room }}</td>
          <td>{{ booking.ID_CUS }}</td>
          <td>{{ booking.Name_member }}</td>
          <td>{{ formatDate(booking.checkIn) }}</td>
          <td>{{ formatDate(booking.checkOut) }}</td>
          <td>{{ booking.Total_price }} บาท</td>
          <td>
            <button class="btn-moree" @click="showBookingDetails(booking)">
              ดูข้อมูล
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div
    class="modal fade"
    id="bookingModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="bookingModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <center>
            <h2 class="modal-title" id="bookingModalLabel">ข้อมูลการจอง</h2>
          </center>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p><strong>ชื่อผู้จอง :</strong> {{ selectedBooking.Name_member }}</p>
          <p><strong>ชื่อห้องพัก :</strong> {{ selectedBooking.Name_Room }}</p>
          <p><strong>รหัสลูกค้า :</strong> {{ selectedBooking.ID_CUS }}</p>
          <p><strong>รหัสห้องพัก :</strong> {{ selectedBooking.ID_Room }}</p>
          <p><strong>ขนาดห้อง :</strong> {{ selectedBooking.Style_Room }}</p>
          <p><strong>รายละเอียด :</strong> {{ selectedBooking.Detail_Room }}</p>
          <p><strong>เบอร์ผู้จอง :</strong> {{ selectedBooking.Tel_member }}</p>
          <p><strong>วันเช็คอิน :</strong> {{ formatDate(selectedBooking.checkIn) }}</p>
          <p>
            <strong>วันเช็คเอ้าท์ :</strong> {{ formatDate(selectedBooking.checkOut) }}
          </p>

          <p><strong>ราคารวม :</strong> {{ selectedBooking.Total_price }}</p>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary btn-close" data-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  // Your component options go here

  mounted() {
    // Include external JavaScript files here
    this.includeExternalScripts();
    this.checkLocalStorage();
    this.fetchBookingData();
    this.fetchBookingSum();
  },

  data() {
    return {
      userEmail: "",
      bookings: [],
      selectedBooking: {},
      amount: 0,
      sumPerson: 0,
      sumLogin: 0,
    };
  },

  methods: {
    async fetchBookingSum() {
      try {
        const response = await axios.get("http://localhost:3000/bookings");
        const resbookingsSum = await axios.get("http://localhost:3000/bookingsSum");
        const bookings = response.data; // ข้อมูลการจอง
        const bookingsSum = resbookingsSum.data; // ข้อมูลการจอง
        // console.log(bookings); // แสดงข้อมูลการจองใน Console เพื่อตรวจสอบ

        let x = 0;
        let sumPer = 0;
        let sumLo = 0;
        for (const item of bookings) {
          x = x + parseInt(item.Total_price);

          ++sumPer;
        }
        for (const item of bookingsSum) {
          ++sumLo;
        }

        this.sumPerson = sumPer;
        this.sumLogin = sumLo;
        this.amount = x;

        this.bookings = bookings; // กำหนดข้อมูลการจองให้กับตัวแปร bookings
      } catch (error) {
        console.error("Error fetching booking data:", error);
      }
    },
    formatDate(dateString) {
      if (!dateString) return ""; // ถ้าไม่มีวันที่ให้คืนค่าว่าง

      const date = new Date(dateString); // สร้าง Date object จากข้อมูลวันที่ในรูปแบบสตริง
      const options = { year: "numeric", month: "long", day: "numeric" }; // ตัวเลือกการแสดงผลวันที่
      return date.toLocaleDateString("en-US", options); // แปลงเป็นรูปแบบวันที่และเวลาที่ต้องการ
    },
    search() {
      const searchText = document.getElementById("searchInput").value.trim();

      if (searchText === "") {
        Swal.fire({
          title: "กำลังโหลดข้อมูล",
          text: "กรุณารอสักครู่...",
          icon: "info",
          showCancelButton: false,
          showConfirmButton: false,
          allowOutsideClick: false,
          willOpen: () => {
            Swal.showLoading();
          },
        });
        this.fetchBookingData();
        setTimeout(() => {
          Swal.close(); // ปิด SweetAlert2 เมื่อโหลดข้อมูลเสร็จสิ้น
        }, 3000); // โหลดข้อมูลเป็นเวลา 3 วินาที
        return;
      }

      Swal.fire({
        title: "กำลังค้นหาข้อมูล",
        text: "กรุณารอสักครู่...",
        icon: "info",
        showCancelButton: false,
        showConfirmButton: false,
        allowOutsideClick: false,
        willOpen: () => {
          Swal.showLoading();
        },
      });

      setTimeout(() => {
        const regex = new RegExp(searchText, "i");
        this.bookings = this.bookings.filter(
          (booking) =>
            regex.test(booking.ID_booking) ||
            regex.test(booking.Name_Room) ||
            regex.test(booking.ID_CUS) ||
            regex.test(booking.Name_member)
        );

        Swal.close(); // ปิด SweetAlert2 เมื่อเสร็จสิ้นการค้นหา
      }, 2000); // โหลดข้อมูลเป็นเวลา 3 วินาที
    },
    async fetchBookingData() {
      try {
        const response = await axios.get("http://localhost:3000/bookings");
        const bookings = response.data; // ข้อมูลการจอง
        console.log(bookings); // แสดงข้อมูลการจองใน Console เพื่อตรวจสอบ

        // let x = 0;
        // for (const item of bookings) {
        //   x = x + parseInt(item.Total_price);
        // }

        // this.amount = x;

        this.bookings = bookings; // กำหนดข้อมูลการจองให้กับตัวแปร bookings
      } catch (error) {
        console.error("Error fetching booking data:", error);
      }
    },
    formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    },
    includeExternalScripts() {
      // Include jQuery
      const jqueryScript = document.createElement("script");
      jqueryScript.src = "js/jquery.js";
      document.head.appendChild(jqueryScript);

      // Include Modernizr
      const modernizrScript = document.createElement("script");
      modernizrScript.src =
        "https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js";
      document.head.appendChild(modernizrScript);

      // Include Bootstrap
      const bootstrapScript = document.createElement("script");
      bootstrapScript.src = "js/bootstrap.min.js";
      document.head.appendChild(bootstrapScript);

      // Include Bootsnav
      const bootsnavScript = document.createElement("script");
      bootsnavScript.src = "js/bootsnav.js";
      document.head.appendChild(bootsnavScript);

      // Include Owl Carousel
      const owlCarouselScript = document.createElement("script");
      owlCarouselScript.src = "js/owl.carousel.min.js";
      document.head.appendChild(owlCarouselScript);

      // Include jQuery Easing
      const jqueryEasingScript = document.createElement("script");
      jqueryEasingScript.src =
        "https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js";
      document.head.appendChild(jqueryEasingScript);

      // Include Custom Script
      const customScript = document.createElement("script");
      customScript.src = "js/custom.js";
      document.head.appendChild(customScript);
    },
    showBookingDetails(booking) {
      this.selectedBooking = booking;
      $("#bookingModal").modal("show"); // Show the modal using jQuery
    },
    checkLocalStorage() {
      // ตรวจสอบว่า local storage มีข้อมูล email หรือไม่
      if (localStorage.getItem("email")) {
        // ดึงค่า email จาก local storage
        this.userEmail = localStorage.getItem("email");
      }
    },

    logout() {
      // ลบค่า email จาก LocalStorage
      localStorage.removeItem("email");
      localStorage.removeItem("role");
      localStorage.removeItem("id_cus");
      // ลบค่า email ใน Vue instance
      this.userEmail = "";
      this.$router.push("/");
      // สามารถทำการ redirect หรือทำอย่างอื่นต่อไปได้ตามต้องการ
    },
  },
};

document.addEventListener("DOMContentLoaded", function () {
  // ตรวจสอบว่า local storage มีข้อมูล email หรือไม่
  if (localStorage.getItem("email")) {
    // ดึงค่า email จาก local storage
    var userEmail = localStorage.getItem("email");

    // ค้นหา element ที่มี class "dropdown-toggle" และทำการเปลี่ยนข้อความใน element นั้น
    var dropdownToggle = document.querySelector(".dropdown-toggle");
    dropdownToggle.innerHTML = userEmail + ' <span class="caret"></span>';
  }
});
</script>

<style>
.customer-container {
  display: flex;
  flex-wrap: wrap;
}

.customer {
  flex: 0 0 calc(25% - 20px);
  margin: 10px;
  box-sizing: border-box;

  /* ปรับแต่งสไตล์ของข้อมูลลูกค้า */
  border: 1px solid #ddd;
  padding: 15px;
  text-align: center;
  border-radius: 10px;

  /* เพิ่มเอฟเฟค hover สำหรับลูกค้า */
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* เพิ่ม shadow */
}

.customer:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  /* เพิ่ม shadow เมื่อ hover */
}

.customer-container {
  margin-top: 20px;
}

table {
  width: 100%;
  border: none;
  margin: 20px;
}

th,
td {
  padding: 10px;
  text-align: left;
  border: none;
  padding: 15px 10px;
  /* ปรับระยะห่างของเซลล์ตาราง */
}

th {
  background-color: #f2f2f2;
}

.btn-moree {
  background-color: #4caf50;
  /* สีพื้นหลังปุ่ม */
  color: white;
  /* สีข้อความ */
  padding: 6px 10px;
  /* ขนาด padding ของปุ่ม */
  border: none;
  /* ไม่มีเส้นขอบ */
  border-radius: 4px;
  /* รูปร่างของเส้นขอบ */
  cursor: pointer;
  /* เปลี่ยนเป็น cursor เมื่อชี้ */
  font-size: 14px;
  /* ขนาดตัวอักษร */
  transition: background-color 0.3s;
  /* เพิ่มเอฟเฟค transition เมื่อ hover */
  margin-top: 5px;
  /* กำหนดระยะห่างด้านบน */
  margin-bottom: 5px;
  /* กำหนดระยะห่างด้านล่าง */
}

.btn-moree:hover {
  background-color: #45a049;
  /* เปลี่ยนสีพื้นหลังเมื่อ hover */
}

tr {
  margin-bottom: 20px;
  /* ปรับระยะห่างของแถวตาราง */
}

.search-container {
  margin-bottom: 20px;
  text-align: center;
  margin: 10px;
}

#searchInput {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 10px;
}

.btn-search {
  padding: 10px 20px;
  border: none;
  background-color: #4caf50;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.btn-search:hover {
  background-color: #45a049;
}

.btn-close:hover {
  background-color: red;
  color: white;
}

header {
  position: fixed;
  /* ทำให้ส่วนหัวของหน้าเว็บติดอยู่ด้านบน */
  top: 0;
  /* ติดอยู่ที่ด้านบนของหน้าจอ */
  left: 0;
  width: 100%;
  /* ความกว้างเท่ากับหน้าจอ */
  background-color: #fff;
  /* สีพื้นหลังของส่วนหัว */
  z-index: 1000;
  /* ให้ส่วนหัวของเว็บไซต์อยู่ด้านหน้า */
}

/* ปรับขนาดของเนื้อหาเมื่อส่วนหัวติดอยู่ด้านบน */
.main-content {
  padding-top: 100px;
  /* ปรับระยะห่างด้านบนของเนื้อหา */
}
</style>
