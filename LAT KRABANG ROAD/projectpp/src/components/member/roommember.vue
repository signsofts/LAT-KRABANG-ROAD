<template>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href='https://fonts.googleapis.com/css?family=Kanit&subset=thai,latin' rel='stylesheet' type='text/css'>
    <link
        href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Rufina:400,700" rel="stylesheet">
    <title>Pratya Biz Home Road</title>
    <link rel="shortcut icon" type="image/icon" href="logo/favicon.png" />
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/linearicons.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="css/flaticon.css">
    <link rel="stylesheet" href="css/animate.css">
    <link rel="stylesheet" href="css/owl.carousel.min.css">
    <link rel="stylesheet" href="css/owl.theme.default.min.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/bootsnav.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">


    <section id="home" class="welcome-hero" style="background-image: url('images/room/BG1.jpeg');">

        <div class="top-area">
            <div class="header-area">
                <nav class="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"
                    data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

                    <div class="container">

                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse"
                                data-target="#navbar-menu">
                                <i class="fa fa-bars"></i>
                            </button>
                            <a class="navbar-brand" href="/indexmember">Pratya Biz Home Lat Krabang<span></span></a>

                        </div>
                        <div class="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                            <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                                <li><a href="/indexmember">หน้าแรก</a></li>
                                <li><a href="/roommember">ห้องพักเกสเฮ้าต์</a></li>
                                <li><a href="/contactmember">ติดต่อเรา</a></li>

                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                                        aria-haspopup="true" aria-expanded="false">email<span class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="#" @click="openEditProfileModal">My Account</a>
                                        </li>
                                        <li>
                                            <a href="#" @click="openMyBookingModal">My Booking</a>
                                        </li>
                                        <li role="separator" class="divider"></li>
                                        <li>
                                            <a href="" @click="logout">Logout</a>
                                        </li>
                                    </ul>
                                </li>
                                <li><a>( MEMBER )</a></li>
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
                        <img :src="imageSrc(room.IMG_Room)" alt="Room Image">
                    </div>
                    <div class="caption">
                        <h2 class="title" style="font-size: 24px;">{{ room.Name_Room }}</h2>
                        <div class="time">
                            <button class="btn-more" @click="openRoomModal(room)">ดูรายละเอียด »</button>
                            <button class="btn-more" style="margin-top: 10px;"
                                @click="reserveRoom(room)">จองห้อง</button>
                        </div>
                        <h3 class="title"
                            :style="{ 'margin-top': '30px', 'color': room.status === 'ห้องว่าง' ? 'green' : 'red' }">
                            <strong style="color: black;">สถานะห้อง : </strong>{{ room.status }}
                        </h3>
                    </div>
                </a>
            </div>
        </div>

        <div class="modal fade" id="roomModal" tabindex="-1" role="dialog" aria-labelledby="roomModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="roomModalLabel">{{ selectedRoom && selectedRoom.Name_Room }}</h5>
                    </div>
                    <div class="modal-body">
                        <img :src="imageSrc(selectedRoom && selectedRoom.IMG_Room)" alt="Room Image" class="img-fluid">
                        <p><strong>ราคา :</strong> {{ selectedRoom && selectedRoom.Price }} บาท</p>
                        <p><strong>ห้อง :</strong> {{ selectedRoom && selectedRoom.Name_Room }}</p>
                        <p><strong>ขนาดห้อง :</strong> {{ selectedRoom && selectedRoom.Style_Room }}</p>
                        <p><strong>รายละเอียด :</strong> {{ selectedRoom && selectedRoom.Detail_Room }}</p>
                        <p><strong>เช็คอินได้ตั้งแต่ : 14:00 </strong> </p>
                        <p><strong>เช็คเอ้าท์ได้ตั้งแต่ : 12:00 </strong> </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">ปิด</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--blog start -->
    <section id="blog" class="blog"></section><!--/.blog-->
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
                        </p><!--/p-->
                    </div>
                </div>
            </div><!--/.footer-copyright-->
        </div><!--/.container-->

        <div id="scroll-Top">
            <div class="return-to-top">
                <i class="fa fa-angle-up " id="scroll-top" data-toggle="tooltip" data-placement="top" title=""
                    data-original-title="Back to Top" aria-hidden="true"></i>
            </div>

        </div><!--/.scroll-Top-->

    </footer><!--/.contact-->
    <div class="modal fade" id="editProfileModal" tabindex="-1" role="dialog" aria-labelledby="editProfileModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <center>
                        <h2 class="modal-title" id="editProfileModalLabel">แก้ไขข้อมูลส่วนตัว</h2>
                    </center>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <!-- ฟอร์มแก้ไขข้อมูลส่วนตัว -->
                    <form @submit.prevent="updateProfile">
                        <div class="form-group">
                            <label for="name">ชื่อ</label>
                            <input type="text" class="form-control" id="name" v-model="editedUserData.Name_CUS">
                        </div>
                        <div class="form-group">
                            <label for="surname">นามสกุล</label>
                            <input type="text" class="form-control" id="surname" v-model="editedUserData.Surname_CUS">
                        </div>
                        <div class="form-group">
                            <label for="address">ที่อยู่</label>
                            <input type="text" class="form-control" id="address" v-model="editedUserData.Address_CUS">
                        </div>
                        <div class="form-group">
                            <label for="tel">เบอร์โทรศัพท์</label>
                            <input type="text" class="form-control" id="tel" v-model="editedUserData.Tel_CUS">
                        </div>
                        <div class="form-group">
                            <label for="email">อีเมล</label>
                            <input type="email" class="form-control" id="email" disabled v-model="editedUserData.Email">
                        </div>
                        <center><button type="submit" class="btn">บันทึกการเปลี่ยนแปลง</button></center>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="myBookingModal" tabindex="-1" role="dialog" aria-labelledby="myBookingModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <center>
                        <h2 class="modal-title" id="myBookingModalLabel">ข้อมูลการจอง</h2>
                    </center>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div v-if="bookingData.length > 0">
                        <p v-for="booking in bookingData">
                            ลำดับการจอง : {{ booking.ID_booking }}<br>
                            ชื่อห้องพัก : {{ booking.Name_Room }}<br>
                            ขนาดห้องพัก : {{ booking.Style_Room }}<br>
                            รายละเอียดห้องพัก : {{ booking.Detail_Room }}<br>
                            ชื่อผู้จอง : {{ booking.Name_member }}<br>
                            เบอร์โทรศัพท์ : {{ booking.Tel_member }}<br>
                            วันเช็คอิน : {{ formatDate(booking.checkIn) }}<br>
                            วันเช็คเอ้าท์ : {{ formatDate(booking.checkOut) }}<br>
                        </p>
                    </div>
                    <div v-else>
                        <p>ไม่พบข้อมูลการจอง</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';
import axios from 'axios';
export default {
    mounted() {
        // Include external JavaScript files here
        this.includeExternalScripts();
        this.checkLocalStorage();
        axios.get('http://localhost:3000/rooms')
            .then(response => {
                // เก็บข้อมูลที่ได้ลงในตัวแปร rooms
                this.rooms = response.data;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        axios.get('http://localhost:3000/customers/' + localStorage.getItem('id_cus'))
            .then(response => {
                this.userData = response.data;
                // กำหนดค่าเริ่มต้นให้กับ editedUserData เมื่อโหลดข้อมูลผู้ใช้มาใหม่
                this.editedUserData = { ...this.userData };
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    },
    data() {
        return {
            bookingData: '',
            userEmail: '',
            rooms: [],
            selectedRoom: null,
            isModalVisible: false,
            editedUserData: { // ข้อมูลที่ถูกแก้ไข
                Name_CUS: '',
                Surname_CUS: '',
                Address_CUS: '', // เพิ่ม Address_CUS
                Tel_CUS: '', // เพิ่ม Tel_CUS
                Email: '', // เพิ่ม Email_CUS
            },

        };
    },


    methods: {
        formatDate(dateString) {
            if (!dateString) return ''; // ถ้าไม่มีวันที่ให้คืนค่าว่าง

            const date = new Date(dateString); // สร้าง Date object จากข้อมูลวันที่ในรูปแบบสตริง
            const options = { year: 'numeric', month: 'long', day: 'numeric' }; // ตัวเลือกการแสดงผลวันที่
            return date.toLocaleDateString('en-US', options); // แปลงเป็นรูปแบบวันที่และเวลาที่ต้องการ
        },
        openMyBookingModal() {
            // ใช้ ID_CUS จาก LocalStorage เพื่อเรียกใช้ API endpoint และดึงข้อมูลการจองของสมาชิก
            const id_cus = localStorage.getItem('id_cus');
            axios.get(`http://localhost:3000/reservemember/${id_cus}`)
                .then(response => {
                    // หลังจากได้รับข้อมูลการจองของสมาชิกมาแล้ว
                    // แสดงข้อมูลใน Modal
                    this.bookingData = response.data;
                    $('#myBookingModal').modal('show');
                })
                .catch(error => {
                    console.error('Error fetching booking data:', error);
                });
        },
        openEditProfileModal() {
            // กำหนดค่าข้อมูลที่ถูกแก้ไขให้เป็นค่าปัจจุบัน
            this.editedUserData = { ...this.userData };
            // เปิดโมดัลแก้ไขข้อมูลส่วนตัว
            $('#editProfileModal').modal('show');
        },
        updateProfile() {
            const url = 'http://localhost:3000/customers/' + localStorage.getItem('id_cus');

            // ใช้ SweetAlert2 เพื่อถามยืนยันการแก้ไข
            Swal.fire({
                title: 'ยืนยันการแก้ไข',
                text: 'ลูกค้าแน่ใจหรือไม่ว่าต้องการบันทึกการเปลี่ยนแปลง?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'ตกลง',
                cancelButtonText: 'ยกเลิก'
            }).then((result) => {
                if (result.isConfirmed) {
                    // กรณีผู้ใช้กดตกลง ส่งข้อมูลการแก้ไขไปยังเซิร์ฟเวอร์
                    axios.post(url, this.editedUserData)
                        .then(response => {
                            // แจ้งเตือนด้วย SweetAlert2 เมื่อบันทึกสำเร็จ
                            Swal.fire({
                                icon: 'success',
                                title: 'บันทึกสำเร็จ',
                                text: 'การเปลี่ยนแปลงข้อมูลถูกบันทึกเรียบร้อยแล้ว',
                                showConfirmButton: false,
                                timer: 1500 // 1.5 วินาที
                            });
                            // ปิด modal
                            $('#editProfileModal').modal('hide');
                            // สามารถเพิ่มการปรับปรุงข้อมูลใน Vue instance หรือ reload หน้าเพจได้ตามต้องการ
                            // this.userData = { ...this.userData, ...this.editedUserData };
                            // location.reload();
                        })
                        .catch(error => {
                            console.error('Error updating profile:', error);
                        });
                }
            });
        },
        includeExternalScripts() {
            // Include jQuery
            const jqueryScript = document.createElement('script');
            jqueryScript.src = 'js/jquery.js';
            document.head.appendChild(jqueryScript);

            // Include Modernizr
            const modernizrScript = document.createElement('script');
            modernizrScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js';
            document.head.appendChild(modernizrScript);

            // Include Bootstrap
            const bootstrapScript = document.createElement('script');
            bootstrapScript.src = 'js/bootstrap.min.js';
            document.head.appendChild(bootstrapScript);

            // Include Bootsnav
            const bootsnavScript = document.createElement('script');
            bootsnavScript.src = 'js/bootsnav.js';
            document.head.appendChild(bootsnavScript);

            // Include Owl Carousel
            const owlCarouselScript = document.createElement('script');
            owlCarouselScript.src = 'js/owl.carousel.min.js';
            document.head.appendChild(owlCarouselScript);

            // Include jQuery Easing
            const jqueryEasingScript = document.createElement('script');
            jqueryEasingScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js';
            document.head.appendChild(jqueryEasingScript);

            // Include Custom Script
            const customScript = document.createElement('script');
            customScript.src = 'js/custom.js';
            document.head.appendChild(customScript);
        },


        imageSrc(buffer) {
            if (!buffer || !buffer.data) {
                return ''; // ไม่มีข้อมูลรูปภาพ
            }
            const arrayBufferView = new Uint8Array(buffer.data);
            const blob = new Blob([arrayBufferView], { type: 'image/*' });
            const urlCreator = window.URL || window.webkitURL;
            return urlCreator.createObjectURL(blob);
        },
        checkLocalStorage() {
            // ตรวจสอบว่า local storage มีข้อมูล email หรือไม่
            if (localStorage.getItem('email')) {
                // ดึงค่า email จาก local storage
                this.userEmail = localStorage.getItem('email');

                // ค้นหา element ที่มี class "dropdown-toggle" และทำการเปลี่ยนข้อความใน element นั้น
                var dropdownToggle = document.querySelector('.dropdown-toggle');
                if (dropdownToggle) {
                    dropdownToggle.innerHTML = this.userEmail + ' <span class="caret"></span>';
                }
            }
        },

        logout() {
            // ลบค่า email จาก LocalStorage
            localStorage.removeItem('email');
            localStorage.removeItem('role');
            localStorage.removeItem('id_cus');
            // ลบค่า email ใน Vue instance
            this.userEmail = '';
            this.$router.push('/');
            // สามารถทำการ redirect หรือทำอย่างอื่นต่อไปได้ตามต้องการ
        },
        openRoomModal(room) {
            this.selectedRoom = room;
            $('#roomModal').modal('show');
        },
        reserveRoom(room) {
            const selectedRoomId = room.ID_Room;
            const roomStatus = room.status; // สมมุติว่าคุณมีค่า status ใน object room

            // เช็คสถานะของห้อง
            if (roomStatus === 'ห้องไม่ว่าง') {
                // แสดง SweetAlert2 ว่าห้องไม่ว่าง
                Swal.fire({
                    title: 'ห้องพักไม่ว่าง',
                    text: 'กรุณาเลือกห้องอื่น',
                    icon: 'warning',
                    confirmButtonText: 'ตกลง'
                });
            } else {
                // แสดง SweetAlert2 เพื่อยืนยันการจอง
                Swal.fire({
                    title: 'ยืนยันการจองห้อง ?',
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonText: 'ยืนยัน',
                    cancelButtonText: 'ยกเลิก',
                }).then((result) => {
                    if (result.isConfirmed) {
                        // กรณีผู้ใช้กด "ใช่" ให้ทำการจองห้อง
                        console.log('Selected Room ID:', selectedRoomId);

                        // ทำการ redirect ไปที่หน้า reservemember และส่ง roomId ผ่าน params
                        this.$router.push({
                            name: 'reservemember',
                            params: { roomId: selectedRoomId }
                        });
                    }
                });
            }
        },
    },
};

</script>


<style>
/*-------------------------------------
		1.General css (Reset code)
--------------------------------------*/
* {
    padding: 0;
    margin: 0;
}

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
}

body {
    font-family: 'Kanit', sans-serif;
    font-size: 16px;
    color: #818998;
    text-transform: initial;
    max-width: 1920px;
    margin: 0 auto;
    overflow-x: hidden;
}

a,
a:hover,
a:active,
a:focus {
    display: inline-block;
    text-decoration: none;
    color: #444a57;
    font-size: 20px;
    padding: 0;
    font-weight: 500;
    text-transform: capitalize;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
    font-family: 'Kanit', sans-serif;
    color: #444a57;
    font-size: 20px;
    font-weight: 500;
    text-transform: capitalize;
}

p {
    margin: 0;
    color: #818998;
    font-size: 16px;
    line-height: 1.8;
    text-transform: initial;
}

img {
    border: none;
    max-width: 100%;
    height: auto;
}

ul {
    padding: 0;
    margin: 0 auto;
    list-style: none;
}

ul li {
    list-style: none;
    display: inline-block;

}

select,
input,
textarea,
button,
.form-control {
    box-shadow: none;
    outline: 0 !important;
}

button {
    background: transparent;
    border: 0;
    font-size: 16px;
    text-transform: capitalize;
}

html,
body {
    height: 100%;
}

[placeholder]:focus::-webkit-input-placeholder {
    -webkit-transition: opacity 0.3s 0.3s ease;
    -moz-transition: opacity 0.3s 0.3s ease;
    -ms-transition: opacity 0.3s 0.3s ease;
    -o-transition: opacity 0.3s 0.3s ease;
    transition: opacity 0.3s 0.3s ease;
    opacity: 0;
}

.owl-carousel {
    z-index: 0;
}

/* section-header */
.section-header {
    position: relative;
    text-align: center;
}

.section-header h2 {
    position: relative;
    font-size: 36px;
    font-weight: 500;
    padding-bottom: 35px;
}

.section-header h2:before {
    position: absolute;
    content: "";
    width: 80px;
    height: 2px;
    bottom: 0;
    left: 50%;
    margin-left: -42px;
    background: #4e4ffa;
}

.section-header p {
    color: #444a57;
    text-transform: capitalize;
    margin-bottom: 10px;
}

.section-header h2 span,
.section-header p span {
    text-transform: lowercase;
}

/* section-header */

/*=============Style css=========*/


/*-------------------------------------
        2. Top-area
--------------------------------------*/
nav.navbar.bootsnav {

    background-color: transparent;
    border-bottom: transparent;

}

.wrap-sticky nav.navbar.bootsnav.sticked {
    background-color: #434859;
    ;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
}

/*.navbar-brand*/
.navbar-header a.navbar-brand,
.navbar-header a.navbar-brand:hover,
.navbar-header a.navbar-brand:focus {
    display: inline-block;
    color: #fff;
    font-size: 24px;
    letter-spacing: 3px;
    font-family: 'Kanit', sans-serif;
    font-weight: 700;
    padding: 45px 0px;
    text-transform: uppercase;
}

.navbar-header a.navbar-brand span {
    font-family: 'Kanit', sans-serif;
    display: inline-block;
    color: #4e4ffa;
    text-transform: capitalize;
}

.wrap-sticky nav.navbar.bootsnav.sticked .navbar-header a.navbar-brand,
.wrap-sticky nav.navbar.bootsnav.sticked .navbar-header a.navbar-brand:hover,
.wrap-sticky nav.navbar.bootsnav.sticked .navbar-header a.navbar-brand:focus {
    padding: 30px 0px;
}

/*.navbar-brand*/

/*.nav li*/
nav.navbar.bootsnav ul.nav>li>a {
    color: #f5f7fa;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    -webkit-transition: 0.3s linear;
    -moz-transition: 0.3s linear;
    -ms-transition: 0.3s linear;
    -o-transition: 0.3s linear;
    transition: 0.3s linear;
}

nav.navbar.bootsnav ul.nav>li>a {
    padding: 48px 21px;
}

nav.navbar.bootsnav ul.nav>li>a:hover,
nav.navbar.bootsnav ul.nav>li>a:focus {
    color: #4e4ffa;
}

nav.navbar.bootsnav ul.nav>li.active>a {
    color: #4e4ffa;
}

nav.navbar.bootsnav ul.nav>li.dropdown>a.dropdown-toggle:after {
    content: "";
}

nav.navbar.bootsnav ul.nav>li.dropdown span {
    font-size: 8px;
    margin-left: 15px;
}

.wrap-sticky nav.navbar.bootsnav.sticked ul.nav>li>a {
    padding: 30px 25px;
}

/*.nav li*/

/*.menu-ui-design*/
.menu-ui-design {
    overflow-y: scroll;
    height: 350px;
}

.menu-ui-design::-webkit-scrollbar {
    width: 5px;
}

.menu-ui-design::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 8px #000;
}

.menu-ui-design::-webkit-scrollbar-thumb {
    background-color: #4e4ffa;
}

/*.menu-ui-design*/

/*.navbar-toggle */
nav.navbar.bootsnav .navbar-toggle {
    position: relative;
    background-color: transparent;
    border: 1px solid #4e4ffa;
    padding: 10px;
    top: 0;
}

nav.navbar.bootsnav .navbar-toggle i {
    color: #4e4ffa;
}

/*.navbar-toggle */

/*-------------------------------------
        3.  Welcome-hero
--------------------------------------*/
.welcome-hero {
    position: relative;
    background: url(images/contact/BG1.jpg)no-repeat;
    /* background:url(../images/welcome-hero/welcome-banner.jpg)no-repeat; */
    background-position: center;
    background-size: cover;
    z-index: 1;

}

.welcome-hero:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(42, 45, 84, .60);
}

.header-area {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
}

/*.welcome-hero-txt*/
.welcome-hero-txt {
    text-align: center;
    padding: 290px 0 372px;
}

.welcome-hero-txt h2 {
    font-size: 42px;
    color: #ffffff;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 45px;
    font-family: 'Kanit', sans-serif;
}

.welcome-hero-txt p {
    font-size: 18px;
    text-transform: initial;
    color: #fff;
    font-weight: 500;
    max-width: 735px;
    margin: 0 auto;
    font-family: 'Kanit', sans-serif;
}

.welcome-btn {
    display: inline-block;
    width: 230px;
    height: 60px;
    background: #4e4ffa;
    color: #fff;
    border-radius: 3px;
    margin-top: 55px;
    -webkit-transition: .3s linear;
    -moz-transition: .3s linear;
    -ms-transition: .3s linear;
    -o-transition: .3s linear;
    transition: .3s linear;
}

.welcome-btn:hover {
    background: #0102fa;
}

/*.welcome-hero-txt*/

/*-------------------------------------
        4. Model-Search
--------------------------------------*/
.model-search-content .col-sm-12 {
    padding: 0;
}

.model-search-content {
    padding: 40px 0;
    background: #fff;
    box-shadow: 0 10px 40px 0px rgba(38, 40, 64, .2);
    position: absolute;
    bottom: -150px;
    width: 100%;
    border-radius: 3px;
}

/*.single-model-search*/
.single-model-search {
    margin-bottom: 30px;
}

.single-model-search:last-child {
    margin-bottom: 0;
}

.single-model-search h2 {
    font-size: 16px;
    font-weight: 400;
    text-transform: capitalize;
    margin-bottom: 20px;
}

/*model-select-icon*/
.model-select-icon {
    position: relative;
}

.model-select-icon .form-control {
    outline: 0 !important;
    box-shadow: none;
    border: 1px solid #f8f8f8;
    background: #f8f8f8;
    height: 60px;
}

.model-select-icon select {
    font-size: 16px;
    color: #888f9d;
    text-transform: capitalize;
}

.model-select-icon:after {
    position: absolute;
    content: "\f103";
    right: 0px;
    top: 0;
    font-size: 10px;
    color: #888f9d;
    background: #f8f8f8;
    height: 60px;
    line-height: 60px;
    width: 50px;
    text-align: center;
    font-family: 'Kanit', sans-serif;
    pointer-events: none;
    border: transparent;
}

/*model-select-icon*/
.welcome-btn.model-search-btn {
    width: 160px;
    margin-top: 80px;
    margin-left: 53px;
}

/*-------------------------------------
        12. Contact
--------------------------------------*/
.contact {
    background: #353431;
}

.footer-top {
    padding: 30px 0 7px;
}

/*.footer-logo*/
.footer-logo a,
.footer-logo a:hover,
.footer-logo a:focus {
    display: inline-block;
    color: #fff;
    font-size: 24px;
    letter-spacing: 3px;
    font-family: 'Kanit', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
}

.single-footer-widget p {
    font-size: 14px;
    color: #eeeff6;
    max-width: 300px;
    margin: 40px 0 20px;
}

.footer-contact p {
    margin: 0;
    color: #d1d7e9;
}

/*.footer-logo*/

.single-footer-widget {
    margin-bottom: 40px;
}

.single-footer-widget h2 {
    font-size: 14px;
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 43px;
}

.single-footer-widget ul li {
    display: inherit;
    -webkit-transition: .5s;
    -moz-transition: .5s;
    -ms-transition: .5s;
    -o-transition: .5s;
    transition: .5s;
}

.single-footer-widget ul li:hover {
    -webkit-transform: translateX(10px);
    -moz-transform: translateX(10px);
    -ms-transform: translateX(10px);
    -o-transform: translateX(10px);
    transform: translateX(10px);
}

.single-footer-widget ul li a {
    font-size: 14px;
    color: #cfd0e3;
    font-weight: 300;
    padding-bottom: 13px;
}

.single-footer-widget ul li a span {
    text-transform: lowercase;
}

.footer-newsletter p {
    color: #aeafc2;
    font-size: 14px;
    font-weight: 300;
    margin: 0 0 15px;
}

/*hm-foot-email*/
.hm-foot-email {
    position: relative;
}

.foot-email-box .form-control {
    background: #26294d;
    display: block;
    padding: 15px 20px;
    outline: 0 !important;
    box-shadow: 0 5px 15px rgba(0, 0, 0, .2);
    border: 0;
}

.foot-email-box input[type="text"] {
    font-size: 12px;
    color: #666c81;
    font-weight: 300;
}

.foot-email-subscribe {
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 100%;
    background: transparent;
    color: #666c81;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.foot-email-box .form-control:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, .4);
}

/*hm-foot-email*/
/*.footer-copyright */
.footer-copyright {
    padding: 20px 0 17px;
    border-top: 1px solid #434859;
}

.footer-copyright p,
.footer-copyright p a {
    color: #a8a9bf;
    font-size: 14px;
    font-weight: 400;
    text-transform: capitalize;
}

.footer-social {
    text-align: right;
}

.footer-social a i {
    color: #fff;
    opacity: .40;
    font-size: 14px;
    margin-left: 16px;
    -webkit-transition: .3s;
    -moz-transition: .3s;
    -ms-transition: .3s;
    -o-transition: .3s;
    transition: .3s;
}

.footer-social i:hover {
    opacity: .70;
}

/*===============================
    Scroll Top
===============================*/
#scroll-Top .return-to-top {
    position: fixed;
    right: 30px;
    bottom: 30px;
    display: none;
    width: 40px;
    line-height: 40px;
    height: 40px;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
    color: #fff;
    background: #4e4ffa;
    border: 1px solid #4e4ffa;
    border-radius: 50%;
    -webkit-transition: .5s;
    -moz-transition: .5s;
    -ms-transition: .5s;
    -o-transition: .5s;
    transition: .5s;
    z-index: 2;
}

#scroll-Top .return-to-top:hover {
    background: #fff;
    color: #4e4ffa;
    border: 1px solid #4e4ffa;
}

#scroll-Top .return-to-top i {
    position: relative;
    bottom: 0;

}

#scroll-Top .return-to-top i {
    position: relative;
    animation-name: example;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-duration: 1s;
}

@keyframes example {
    0% {
        bottom: 0px;
    }

    100% {
        bottom: 7px;
    }
}

.single-service-icon i {
    font-size: 60px;
    /* ปรับขนาดตามที่คุณต้องการ */
}

#contact1 {
    text-align: center;
    padding: 60px 0;
}

.contact-icons {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

.contact-icon {
    font-size: 80px;
    margin: 0 120px;
    /* ปรับเปลี่ยนระยะห่างที่นี่ */
    color: #000000;
}

.contact-icon:hover {
    color: #000000;
}

/* ปรับขนาดของติดต่อเรา */
h1 {
    font-size: 40px;
    /* ขนาดตัวอักษรของ h1 */
    margin-bottom: 10px;
    font-family: 'Kanit', sans-serif;
    color: #000000;
}

h2 {
    font-size: 33px;
    /* ขนาดตัวอักษรของ h1 */
    margin-bottom: 10px;
    font-family: 'Kanit', sans-serif;
    color: #767b85;
}

h3 {
    font-size: 28px;
    /* ขนาดตัวอักษรของ h3 */
    font-family: 'Kanit', sans-serif;
    margin-bottom: 10px;
}

.columns {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 100px 0;
}

.column {
    flex: 1;
    border: 1px solid rgb(255, 255, 255);
    margin: 15px;
    padding: 15px;
    box-shadow: 0px 0px 12px -5px #78736f;

    &:first-child {
        margin-left: 50px;
    }

    &:last-child {
        margin-right: 50px;
    }



}

footer {
    padding: 0 15px;
}

@media screen and (max-width: 980px) {
    .columns .column {
        margin-bottom: 5px;
        flex-basis: 40%;

        &:nth-last-child(2) {
            margin-right: 0;
        }

        &:last-child {
            flex-basis: 100%;
            margin: 0;
        }
    }
}

@media screen and (max-width: 680px) {
    .columns .column {
        flex-basis: 100%;
        margin: 0 0 5px 0;
    }
}

.btn-more {
    background: #ffffff;
    border: 2px solid #c3b59b;
    color: #78736f;
    padding: 8px 15px;
    font-size: 16px;
    margin: auto;
    display: block;
}

.title {
    text-align: center;
}

/* เพิ่ม style เพื่อปรับแต่ง Type_Room ให้อยู่ตรงกลางและใหญ่ขึ้น */
#roomModal .modal-title {
    text-align: center;
    font-size: 35px;
    /* ปรับขนาดตามที่ต้องการ */
    font-weight: bold;
    color: rgb(91, 91, 91);
}

#roomModal .modal-body {
    margin: 10px
}

#roomModal .modal-body img {
    margin-bottom: 10px;
    /* ปรับค่าตามที่คุณต้องการ */
}
</style>
