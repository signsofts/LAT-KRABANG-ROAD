<template>

    <head>

    </head>

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

    <section id="home" class="welcome-hero" style="background-image: url('images/index/BG1.jpg');">

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
                                        aria-haspopup="true" aria-expanded="false">email <span class="caret"></span></a>
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
                <div class="welcome">
                    <h2 class="welcome-heading">Welcome to Pratya Biz Home</h2>
                </div>
                <p>
                    ทำเลที่เหมาะกับการอยู่อาศัย ด้วยความที่อยู่ใกล้แหล่งงานขนาดใหญ่ รวมถึงเดินทางได้สะดวกสบาย
                    และมีสิ่งอำนวยความสะดวกที่ครบครัน
                </p>
            </div>
        </div>

    </section>

    <section id="service" class="service">
        <div class="container">
            <div class="service-content">
                <div class="row">
                    <div class="col-md-4 col-sm-6">
                        <div class="single-service-item">
                            <div class="single-service-icon">
                                <i class="fa-solid fa-house"></i>
                            </div>
                            <h2><a href="#">พร้อมสิ่งอำนวยความสะดวกครบครัน</a></h2>
                            <p>
                                โครงการ ปรัชญา บิซโฮม อ่อนนุช-สุวรรณภูมิ มีสาธารณูปโภคที่หลากหลาย ทั้งแหล่งช้อปปิ้งมอลล์
                                โรงเรียน โรงพยาบาลShopping Mallเช่น เดอะ พาซิโอ ลาดกระบังสถานศึกษาเช่น โรงเรียนวัดลานบุญ
                                ,โรงเรียนวัดสังฆราชา ,โรงเรียนอนุบาลพร้อมโรงพยาบาลเช่น โรงพยาบาลสิรินธร
                                (สังกัดกรุงเทพมหานคร)
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="single-service-item">
                            <div class="single-service-icon">
                                <i class="fas fa-car"></i>
                            </div>
                            <h2><a href="#">เดินทางสะดวกสบาย</a></h2>
                            <p>
                                เป็นทำเลที่อยู่อาศัยซึ่งพัฒนาขึ้นตามโครงสร้างพื้นฐานที่บุกเบิกมาก่อนอย่าง
                                วงแหวนรอบนอกฝั่งตะวันออก, มอเตอร์เวย์หมายเลข 7 (กรุงเทพ - ชลบุรี)
                                และแลนด์มาร์คสำคัญอย่างสนามบินสุวรรณภูมิ โดยการเดินทางที่สะดวก
                                ทำให้ทำเลนี้กลายเป็นอีกแหล่งที่อยู่อาศัยที่เติบโตอย่างต่อเนื่องของกรุงเทพฯ
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="single-service-item">
                            <div class="single-service-icon">
                                <i class="fa-solid fa-store"></i>
                            </div>
                            <h2><a href="#">ใกล้ห้างสรรพสินค้า</a></h2>
                            <p>
                                มีพร้อมรองรับความต้องการพื้นฐานอยู่ที่ศูนย์การค้าอย่าง เดอะ พาซิโอ้ มอลล์ ลาดกระบัง,
                                โรบินสัน ไลฟ์สไตล์ ลาดกระบัง, และฮับใหญ่ประจำทำเลอย่าง เมกา บางนา
                                โดยอีกแหล่งการค้าที่สำคัญของทำเลนี้ก็คือบรรดาห้างเอาต์เลตชั้นนำ ที่มีทั้ง เซ็นทรัล
                                พรีเมียม
                                เอาต์เลต รวมถึงห้างปลอดภาษี คิงเพาเวอร์
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>



    <section id="new-cars" class="new-cars">
        <div class="container">
            <br><br>
            <div class="section-header">
                <p>Pratya <span>Biz</span> Home</p>
                <h2>Lat Krabang Road</h2>
            </div>
            <div class="new-cars-content">
                <div class="owl-carousel owl-theme" id="new-cars-carousel">
                    <div class="new-cars-item">
                        <div class="single-new-cars-item">
                            <div class="row">
                                <div class="col-md-7 col-sm-12">
                                    <div class="new-cars-img">
                                        <img src='/images/index/IMG1.jpg' width="100%" alt="img" />
                                    </div>
                                </div>
                                <br><br>
                                <div class="col-md-5 col-sm-12">
                                    <div class="new-cars-txt">
                                        <h2><a href="#">Pratya Biz Home </a></h2>
                                        <p>
                                            จุดเด่นของโครงการ ปรัชญา บิซโฮม แอท อ่อนนุช
                                            โครงการตั้งอยู่ทำเลดีการเดินทางสะดวกใกล้ แอร์พอร์ตลิ้งค์สถานีบ้านทับช้าง
                                            และติดถนนใหญ่อ่อนนุช
                                        </p>
                                        <p class="new-cars-para2">
                                            โครงการใกล้แหล่งอำนวยความสะดวก อาทิ เทสโก้ โลตัส ซีคอนสแควร์ และตลาดรถไฟ
                                            ศรีนครินทร์
                                        </p>
                                        <center><button class="welcome-btn new-cars-btn"
                                                onclick="window.location.href='#'">
                                                ดูรายละเอียด
                                            </button></center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="new-cars-item">
                        <div class="single-new-cars-item">
                            <div class="row">
                                <div class="col-md-7 col-sm-12">
                                    <div class="new-cars-img">
                                        <img src='/images/index/IMG2.jpg' alt="img" />
                                    </div>
                                </div>
                                <br><br>
                                <div class="col-md-5 col-sm-12">
                                    <div class="new-cars-txt">
                                        <h2><a href="#">Pratya Biz Home </a></h2>
                                        <p>
                                            ข้อมูลโครงการ : โครงการเริ่มก่อสร้างเดือนธันวาคม ปี2558
                                            โดยแบ่งเป็นอาคารพาณิชย์
                                            5 ชั้น จำนวน 12 ยูนิต และทาวน์โฮม 3 ชั้นครึ่ง จำนวน 180 ยูนิต มีคลับเฮ้าส์
                                            สระว่ายน้ำและสวนสาธารณะส่วนกลางให้บริการ บนพี้นที่ 17-0-50 ไร่
                                        </p>
                                        <p class="new-cars-para2">
                                            ที่ตั้ง : ถนนลาดกระบัง-สุวรรณภูมิ แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพฯ
                                        </p>
                                        <center><button class="welcome-btn new-cars-btn"
                                                onclick="window.location.href='#'">
                                                ดูรายละเอียด
                                            </button></center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section><br><br>



    <div class="promo">
        <h1>โปรโมชั่นสำหรับคุณ! ลดราคาพิเศษที่ Pratya Biz Home Lat Krabang Road</h1>
    </div>

    <div class="item">
        <div class="item">
            <div class="row">
                <div class="col-md-7 col-sm-12">
                    <div class="imgg" style="text-align: center;">
                        <img src='/images/index/IMG3.jpg' alt="img" style="max-width: 100%;">
                    </div>
                </div>
                <div class="col-md-5 col-sm-12">
                    <div class="new-cars-txtt" style="text-align: center;">
                        <h2><a href="#">เฉลิมฉลองเทศกาลปีใหม่ 2567</a></h2>
                        <p>
                            ช่วงเวลาการจอง: 31 ธันวาคม 2566 - 10 ธันวาคม 2567
                            เริ่มต้นการเฉลิมฉลองสู่ปีใหม่ที่กำลังจะมาถึงนี้ ด้วยที่พักเกสต์เฮ้าของเรา
                            พร้อมกิจกรรมพิเศษต่างๆ
                            ให้ได้ร่วนรับรางวัล และนับถอยหลังเข้าสู่ปีที่ 2567 ไปพร้อมกับเรา
                            รับส่วนลดพิเศษ! เมื่อจองก่อนวันที่ 24 ธันวาคม 2566
                        <p>• 1 ห้องพัก/ผู้ใหญ่ 2 ท่าน ราคาพิเศษ 3,800 บาทสุทธิ (จากราคาปกติ 4,500 บาทสุทธิ )</p>
                        <p>• เด็กสูงไม่เกิน 160 ซม. เข้าพักฟรี</p>
                        มาเจอเราได้ที่ ปรัชญาบิซโฮม-ลาดกระบัง💗
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>



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
                            <a> Guest house management system Case Study of Pratya Biz Home Project</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div id="scroll-Top">
            <div class="return-to-top">
                <i class="fa fa-angle-up " id="scroll-top" data-toggle="tooltip" data-placement="top" title=""
                    data-original-title="Back to Top" aria-hidden="true"></i>
            </div>

        </div>

    </footer>

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
    // Your component options go here

    mounted() {
        // Include external JavaScript files here
        this.includeExternalScripts();
        this.checkLocalStorage();
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
            userData: {},
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
        checkLocalStorage() {
            // ตรวจสอบว่า local storage มีข้อมูล email หรือไม่
            if (localStorage.getItem('email')) {
                // ดึงค่า email จาก local storage
                this.userEmail = localStorage.getItem('email');
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
    },
};

document.addEventListener('DOMContentLoaded', function () {
    // ตรวจสอบว่า local storage มีข้อมูล email หรือไม่
    if (localStorage.getItem('email')) {
        // ดึงค่า email จาก local storage
        var userEmail = localStorage.getItem('email');

        // ค้นหา element ที่มี class "dropdown-toggle" และทำการเปลี่ยนข้อความใน element นั้น
        var dropdownToggle = document.querySelector('.dropdown-toggle');
        dropdownToggle.innerHTML = userEmail + ' <span class="caret"></span>';
    }

});
</script>

<style>
.new-cars-txtt {
    margin-top: 180px;
    /* ปรับค่าตามที่คุณต้องการ */
}

.welcome-hero-txt .welcome-heading {
    text-transform: uppercase;
    font-size: 70px;
}

.btn {
    background-color: #858885;
    /* สีพื้นหลัง */
    border: none;
    /* ไม่มีเส้นขอบ */
    color: rgb(255, 255, 255);
    /* สีข้อความ */
    padding: 12px 24px;
    /* ขนาดของปุ่ม */
    text-align: center;
    /* จัดข้อความในตำแหน่งกลาง */
    text-decoration: none;
    /* ไม่มีการขีดเส้นใต้ข้อความ */
    display: inline-block;
    /* ปรับขนาดปุ่มให้พอดีกับข้อความ */
    font-size: 16px;
    /* ขนาดตัวอักษร */
    margin: 4px 2px;
    /* ระยะห่างระหว่างปุ่ม */
    transition-duration: 0.4s;
    /* ความเร็วในการเปลี่ยนสี */
    cursor: pointer;
    /* เมาส์เปลี่ยนเป็นรูปมือเมื่อชี้ที่ปุ่ม */
    border-radius: 8px;
    /* ทำให้มีมุมโค้ง */
}

.btn:hover {
    background-color: #45a049;
    /* เปลี่ยนสีพื้นหลังเมื่อชี้เม้าส์ */
    color: white;
    /* เปลี่ยนสีข้อความเมื่อชี้เม้าส์ */
}
</style>