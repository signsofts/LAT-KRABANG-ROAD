<template>
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
    style="background-image: url('images/room/BG1.jpeg')"
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
              <a class="navbar-brand" href="/indexmember"
                >Pratya Biz Home Lat Krabang<span></span
              ></a>
            </div>
            <div class="collapse navbar-collapse menu-ui-design" id="navbar-menu">
              <ul
                class="nav navbar-nav navbar-right"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                <li><a href="/indexstaff">หน้าแรก</a></li>
                <li><a href="/addmemberstaff">สมัครสมาชิก</a></li>
                <li><a href="/roomstaff">จองห้องพัก</a></li>
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
                    <li>
                      <a href="#">My Account</a>
                    </li>
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
          บ้านขนาด 3 ชั้นครึ่ง 3 ห้องนอน 3 ห้องน้ำ 2
          ห้องนั่งเล่นจะซื้ออยู่หรือจะปล่อยเช่าก็คุ้มหมู่บ้านติดถนนใหญ่
          ใกล้ห้างโรบินสันส่วนกลาง สระว่ายน้ำ สวน ฟิตเนต
        </p>
      </div>
    </div>
  </section>
  <section class="columns">
    <div class="column" v-for="room in rooms" :key="room.ID_Room">
      <div class="content">
        <a class="imgg">
          <div class="image img-zoom">
            <img :src="imageSrc(room.IMG_Room)" alt="Room Image" />
          </div>
          <div class="caption">
            <h2 class="title" style="font-size: 24px">{{ room.Name_Room }}</h2>
            <div class="time">
              <button class="btn-more" @click="openRoomModal(room)">
                ดูรายละเอียด »
              </button>
              <button
                class="btn-more"
                style="margin-top: 10px"
                @click="reserveRoom(room)"
              >
                จองห้อง
              </button>
            </div>
            <h3
              class="title"
              :style="{
                'margin-top': '30px',
                color: room.status === 'ห้องว่าง' ? 'green' : 'red',
              }"
            >
              <strong style="color: black">สถานะห้อง : </strong>{{ room.status }}
            </h3>
          </div>
        </a>
      </div>
    </div>

    <div
      class="modal fade"
      id="roomModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="roomModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="roomModalLabel">
              {{ selectedRoom && selectedRoom.Name_Room }}
            </h5>
          </div>
          <div class="modal-body">
            <img
              :src="imageSrc(selectedRoom && selectedRoom.IMG_Room)"
              alt="Room Image"
              class="img-fluid"
            />
            <p><strong>ราคา :</strong> {{ selectedRoom && selectedRoom.Price }} บาท</p>
            <p><strong>ห้อง :</strong> {{ selectedRoom && selectedRoom.Name_Room }}</p>
            <p>
              <strong>ขนาดห้อง :</strong> {{ selectedRoom && selectedRoom.Style_Room }}
            </p>
            <p>
              <strong>รายละเอียด :</strong> {{ selectedRoom && selectedRoom.Detail_Room }}
            </p>
            <p><strong>เช็คอินได้ตั้งแต่ : 14:00 </strong></p>
            <p><strong>เช็คเอ้าท์ได้ตั้งแต่ : 12:00 </strong></p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              ปิด
            </button>
            <button
              v-if="selectedRoom && selectedRoom.status == 'ห้องไม่ว่าง'"
              type="button"
              @click="Roomstatus(selectedRoom)"
              class="btn btn-primary"
            >
              คืนห้อง
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--blog start -->
  <section id="blog" class="blog"></section>
  <!--/.blog-->
  <!--blog end -->

  <!--contact start-->
  <footer id="contact" class="contact">
    <div class="container">
      <div class="footer-top">
        <div class="row">
          <div class="col-md-3 col-sm-6">
            <div class="single-footer-widget">
              <div class="footer-logo">
                <a href="/indexmember"> Pratya Biz Home</a>
              </div>
              <p>
                โครงการปรัชญา บิซโฮม ถนนลาดกระบัง แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร
              </p>
              <div class="footer-contact">
                <p>mesangpry@gmail.com</p>
                <p>+1 (66) 0623573421</p>
              </div>
            </div>
          </div>
          <div class="col-md-2 col-sm-6">
            <div class="single-footer-widget">
              <h2>เกี่ยวกับเรา</h2>
              <ul>
                <li><a href="/indexmember">หน้าแรก</a></li>
                <li><a href="/roommember">ห้องพักเกสเฮ้าต์</a></li>
                <li><a href="/contactmember">ติดต่อเรา</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="row">
          <div class="col-sm-6">
            <p>
              <a>Guest house management system Case Study of Pratya Biz Home Project</a>.
            </p>
            <!--/p-->
          </div>
        </div>
      </div>
      <!--/.footer-copyright-->
    </div>
    <!--/.container-->

    <div id="scroll-Top">
      <div class="return-to-top">
        <i
          class="fa fa-angle-up"
          id="scroll-top"
          data-toggle="tooltip"
          data-placement="top"
          title=""
          data-original-title="Back to Top"
          aria-hidden="true"
        ></i>
      </div>
    </div>
    <!--/.scroll-Top-->
  </footer>
  <!--/.contact-->
</template>

<script>
import Swal from "sweetalert2";
import axios from "axios";
export default {
  mounted() {
    // Include external JavaScript files here
    this.includeExternalScripts();
    this.checkLocalStorage();
    axios
      .get("http://localhost:3000/rooms")
      .then((response) => {
        // เก็บข้อมูลที่ได้ลงในตัวแปร rooms
        this.rooms = response.data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
  data() {
    return {
      userEmail: "",
      rooms: [],
      selectedRoom: null,
      isModalVisible: false,
      statusbtn: false,
    };
  },

  methods: {
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

    imageSrc(buffer) {
      if (!buffer || !buffer.data) {
        return ""; // ไม่มีข้อมูลรูปภาพ
      }
      const arrayBufferView = new Uint8Array(buffer.data);
      const blob = new Blob([arrayBufferView], { type: "image/*" });
      const urlCreator = window.URL || window.webkitURL;
      return urlCreator.createObjectURL(blob);
    },
    checkLocalStorage() {
      // ตรวจสอบว่า local storage มีข้อมูล email หรือไม่
      if (localStorage.getItem("email")) {
        // ดึงค่า email จาก local storage
        this.userEmail = localStorage.getItem("email");

        // ค้นหา element ที่มี class "dropdown-toggle" และทำการเปลี่ยนข้อความใน element นั้น
        var dropdownToggle = document.querySelector(".dropdown-toggle");
        if (dropdownToggle) {
          dropdownToggle.innerHTML = this.userEmail + ' <span class="caret"></span>';
        }
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
    openRoomModal(room) {
      this.selectedRoom = room;

      // if(this.selectedRoom.status == 'ห้องไม่ว่าง'){
      //     this.statusbtn = true ;
      // }

      // console.log(this.selectedRoom.status)
      $("#roomModal").modal("show");
    },
    Roomstatus(room) {
      Swal.fire({
        title: "ยืนยันการคืนห้อง ?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "ยืนยัน",
        cancelButtonText: "ยกเลิก",
      }).then((result) => {
        if (result.isConfirmed) {
          // กรณีผู้ใช้กด "ใช่" ให้ทำการจองห้อง
          //   const selectedRoomId = room.ID_Room;

          axios
            .get(`http://localhost:3000/returnroom/${room.ID_Room}`)
            .then((response) => {
              Swal.fire({
                title: "สำเร็จ",
                text: "",
                icon: "success",
                confirmButtonText: "ตกลง",
              });

               location.reload();
            })
            .catch((error) => {
              console.error("Error fetching room details:", error);
            });

          //   axios
          //     .get("http://localhost:3000/returnroom/", { ID_Room: room.ID_Room })
          //     .then(async (response) => {
          //       Swal.fire({
          //         title: "สำเร็จ",
          //         text: "",
          //         icon: "success",
          //         confirmButtonText: "ตกลง",
          //       });
          //     })
          //     .catch((error) => {
          //       Swal.fire({
          //         icon: "error",
          //         title: "เกิดข้อผิดพลาด",
          //         text: "ไม่สามารถทำการคืนในขณะนี้ได้",
          //       });
          //     });
        }
      });
    },
    reserveRoom(room) {
      const selectedRoomId = room.ID_Room;
      const roomStatus = room.status; // สมมุติว่าคุณมีค่า status ใน object room

      // เช็คสถานะของห้อง
      if (roomStatus === "ห้องไม่ว่าง") {
        // แสดง SweetAlert2 ว่าห้องไม่ว่าง
        Swal.fire({
          title: "ห้องพักไม่ว่าง",
          text: "กรุณาเลือกห้องอื่น",
          icon: "warning",
          confirmButtonText: "ตกลง",
        });
      } else {
        // แสดง SweetAlert2 เพื่อยืนยันการจอง
        Swal.fire({
          title: "ยืนยันการจองห้อง ?",
          icon: "question",
          showCancelButton: true,
          confirmButtonText: "ยืนยัน",
          cancelButtonText: "ยกเลิก",
        }).then((result) => {
          if (result.isConfirmed) {
            // กรณีผู้ใช้กด "ใช่" ให้ทำการจองห้อง
            console.log("Selected Room ID:", selectedRoomId);

            // ทำการ redirect ไปที่หน้า reservemember และส่ง roomId ผ่าน params
            this.$router.push({
              name: "reservemember",
              params: { roomId: selectedRoomId },
            });
          }
        });
      }
    },
  },
};
</script>

<style></style>
