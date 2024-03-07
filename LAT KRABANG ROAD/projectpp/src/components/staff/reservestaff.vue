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
    <link rel="stylesheet" href="/css/font-awesome.min.css">
    <link rel="stylesheet" href="/css/linearicons.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="/css/flaticon.css">
    <link rel="stylesheet" href="/css/animate.css">
    <link rel="stylesheet" href="/css/owl.carousel.min.css">
    <link rel="stylesheet" href="/css/owl.theme.default.min.css">
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/bootsnav.css">
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="/css/responsive.css">



    <section id="home" class="welcome-hero" style="background-image: url('/images/room/BG1.jpeg');">

        <div class="top-area">
            <div class="header-area">
                <nav class="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy" data-minus-value-desktop="70"
                    data-minus-value-mobile="55" data-speed="1000">

                    <div class="container">

                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
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
                                            <a href="#">My Account</a>
                                        </li>
                                        <li>
                                            <a href="#">My Booking</a>
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
                    บ้านขนาด 3 ชั้นครึ่ง 3 ห้องนอน 3 ห้องน้ำ 2 ห้องนั่งเล่นจะซื้ออยู่หรือจะปล่อยเช่าก็คุ้มหมู่บ้านติดถนนใหญ่
                    ใกล้ห้างโรบินสันส่วนกลาง สระว่ายน้ำ สวน ฟิตเนต
                </p>
            </div>
        </div>

    </section>



    <div class="room">
        <form class="booking-form" v-on:submit.prevent="submitForm">
            <img :src="imageSrc(roomDetails.IMG_Room)" alt="Room Image" class="img-fluid">
            <p>ห้อง : {{ roomDetails.Name_Room }}</p>
            <p>ขนาดห้อง : {{ roomDetails.Style_Room }}</p>
            <p>รายละเอียดห้อง : {{ roomDetails.Detail_Room }}</p>
            <p>ราคา : {{ roomDetails.Price }}</p>
            <div class="form-group">
                <label for="fullName">ชื่อ-นามสกุล:</label>
                <input type="text" v-model="fullName" id="fullName" name="fullName" required>
            </div>

            <div class="form-group">
                <label for="phoneNumber">เบอร์โทร:</label>
                <input type="tel" v-model="phoneNumber" id="phoneNumber" name="phoneNumber" pattern="[0-9]{10}" required>
            </div>

            <div class="form-group">
                <label for="checkInDate">วันเช็คอิน:</label>
                <input type="date" v-model="checkInDate" id="checkInDate" name="checkInDate" required>
            </div>

            <div class="form-group">
                <label for="checkOutDate">วันเช็คเอ้าท์:</label>
                <input type="date" v-model="checkOutDate" id="checkOutDate" name="checkOutDate" required>
            </div>


            <div class="total-price-container">
                <p v-if="checkOutDate" class="total-price">ราคารวม: {{ getTotalPrice() }}</p>
            </div>

            <input type="submit" value="ยืนยันการจอง">
        </form>
    </div>

    <section id="blog" class="blog"></section>

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
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    mounted() {
        this.includeExternalScripts();
        this.checkLocalStorage();

    },
    data() {
        return {
            userEmail: '',
            roomDetails: {},
            numberOfWeeks: 1,
            checkInDate: null,
            checkOutDate: null,

        };
    },
    created() {
        // ดึงค่า roomId จาก params
        const roomId = this.$route.params.roomId;
        console.log('Room ID from params:', roomId);

        // นำ roomId ไปใช้งานตามต้องการ เช่น ดึงข้อมูลห้องจาก API
        this.fetchRoomDetails(roomId);
    },
    methods: {
        submitForm() {
            // ตรวจสอบว่ามีข้อมูลที่จำเป็นต้องกรอกครบถ้วน
            if (!this.fullName || !this.phoneNumber || !this.checkInDate || !this.checkOutDate) {
                Swal.fire({
                    icon: 'error',
                    title: 'กรุณากรอกข้อมูลให้ครบถ้วน',
                    text: 'กรุณากรอกข้อมูลที่มีเครื่องหมาย *',
                });
                return;
            }

            // ตรวจสอบว่า checkInDate และ checkOutDate ถูกต้อง
            if (this.checkOutDate <= this.checkInDate) {
                Swal.fire({
                    icon: 'error',
                    title: 'วันเช็คเอ้าท์ต้องมากกว่าวันเช็คอิน',
                    text: 'กรุณาเลือกวันเช็คเอ้าท์ที่ถูกต้อง',
                });
                return;
            }

            // สร้างข้อมูลที่จะส่งไปยังเซิร์ฟเวอร์
            const reservationData = {
                Name_Room: this.roomDetails.Name_Room,
                Style_Room: this.roomDetails.Style_Room,
                Detail_Room: this.roomDetails.Detail_Room,
                // IMG_Room: this.roomDetails.IMG_Room,
                Name_member: this.fullName,
                Tel_member: this.phoneNumber,
                checkIn: this.checkInDate,
                checkOut: this.checkOutDate,
                Total_price: this.getTotalPrice(),
            };

            // ทำการส่งข้อมูลไปยังเซิร์ฟเวอร์
            axios.post('http://localhost:3000/reserve', reservationData)
                .then(response => {
                    // ทำการแสดงข้อความหลังจากที่สำเร็จ
                    // ในตำแหน่งที่คุณใช้ Swal.fire() เพื่อแสดง SweetAlert2
                    Swal.fire({
                        icon: 'success',
                        title: 'การจองสำเร็จ',
                        text: 'ขอบคุณที่ใช้บริการ',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            // ทำการส่งข้อมูลการจองไปยังหน้า 'payreservemember'
                            this.$router.push({
                                name: 'payreservestaff',
                                query: { reservationData: JSON.stringify(reservationData) }
                            });
                        }
                    });
                })
                .catch(error => {
                    // ทำการแสดงข้อความหลังจากที่เกิดข้อผิดพลาด
                    console.error('Error submitting reservation:', error);
                    Swal.fire({
                        icon: 'error',
                        title: 'เกิดข้อผิดพลาด',
                        text: 'ไม่สามารถทำการจองในขณะนี้ได้',
                    });
                });
        },
        fetchRoomDetails(roomId) {
            axios.get(`http://localhost:3000/rooms/${roomId}`)
                .then(response => {
                    console.log('Room Details:', response.data);  // ตรวจสอบใน console
                    this.roomDetails = response.data;
                })
                .catch(error => {
                    console.error('Error fetching room details:', error);
                });
        },

        includeExternalScripts() {
            // Include jQuery
            const jqueryScript = document.createElement('script');
            jqueryScript.src = '/js/jquery.js';
            document.head.appendChild(jqueryScript);

            // Include Modernizr
            const modernizrScript = document.createElement('script');
            modernizrScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js';
            document.head.appendChild(modernizrScript);

            // Include Bootstrap
            const bootstrapScript = document.createElement('script');
            bootstrapScript.src = '/js/bootstrap.min.js';
            document.head.appendChild(bootstrapScript);

            // Include Bootsnav
            const bootsnavScript = document.createElement('script');
            bootsnavScript.src = '/js/bootsnav.js';
            document.head.appendChild(bootsnavScript);

            // Include Owl Carousel
            const owlCarouselScript = document.createElement('script');
            owlCarouselScript.src = '/js/owl.carousel.min.js';
            document.head.appendChild(owlCarouselScript);

            // Include jQuery Easing
            const jqueryEasingScript = document.createElement('script');
            jqueryEasingScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js';
            document.head.appendChild(jqueryEasingScript);

            // Include Custom Script
            const customScript = document.createElement('script');
            customScript.src = '/js/custom.js';
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
        getTotalPrice() {
            // ถ้า checkOutDate มีค่า ให้คำนวณราคารวม
            if (this.checkOutDate && this.checkInDate) {
                // คำนวณราคารวมโดยเอาราคาเดิมมาคูณกับจำนวนวันที่เลือกเช็คอินและเช็คเอ้าท์
                const pricePerDay = parseFloat(this.roomDetails.Price);
                const daysDifference = this.calculateDaysDifference(this.checkInDate, this.checkOutDate);
                const totalPrice = pricePerDay * daysDifference;
                return totalPrice.toFixed(2); // ปัดเศษทศนิยม
            } else {
                // ถ้า checkOutDate หรือ checkInDate ยังไม่ได้ถูกกำหนด ให้คืนค่าว่าง
                return '';
            }
        },

        calculateDaysDifference(startDate, endDate) {
            const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
            const start = new Date(startDate);
            const end = new Date(endDate);
            const daysDifference = Math.round(Math.abs((start - end) / oneDay));
            return daysDifference;
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
    },
};
</script>
<style scoped>
.room h2,
.room p,
.room label {
    color: #555;
    /* เปลี่ยนสีตัวอักษรเป็นสีเทา */
    margin: 10px;
}

.room {
    text-align: center;
    border: 1px solid #ccc;
    /* ใส่เส้นขอบกรอบ */
    padding: 20px;
    /* ระยะห่างภายในกรอบ */
    max-width: 500px;
    /* กำหนดความกว้างสูงสุดของกรอบ */
    margin: 20px auto;
    /* ทำ
    ให้ div อยู่ตรงกลางของหน้าจอ และมีพื้นที่ว่างด้านบนและด้านล่าง */
}

.room form {
    margin-top: 20px;
    /* ระยะห่างด้านบนของแต่ละฟอร์ม */
}

.room label {
    display: block;
    /* ทำให้ label แสดงเป็นบรรทัดใหม่ */
    margin-bottom: 5px;
    /* ระยะห่างด้านล่างของ label */
}

.room input[type="text"],
.room input[type="tel"],
.room input[type="submit"] {
    width: 100%;
    /* ทำให้ฟิลด์ input เต็มความกว้างของฟอร์ม */
    padding: 10px;
    /* ระยะห่างขอบของฟิลด์ input */
    margin-bottom: 10px;
    /* ระยะห่างด้านล่างของฟิลด์ input */
}

.room input[type="submit"] {
    background-color: #4CAF50;
    /* สีพื้นหลังของปุ่ม */
    color: white;
    /* สีข้อความในปุ่ม */
    cursor: pointer;
    /* เปลี่ยน cursor เมื่อชี้ที่ปุ่ม */
}

.room input[type="submit"]:hover {
    background-color: #45a049;
    /* สีพื้นหลังเมื่อ hover ที่ปุ่ม */
}

.room form input[type="submit"] {
    background-color: #888;
    /* เปลี่ยนสีพื้นหลังของปุ่มเป็นสีเทา */
    color: #fff;
    /* เปลี่ยนสีข้อความในปุ่มเป็นสีขาว */
}

.room form input[type="submit"]:hover {
    background-color: #666;
    /* เปลี่ยนสีพื้นหลังของปุ่มเป็นสีเทาเข้มเมื่อ hover */
}

.room form p {
    margin-top: 10px;
    /* ปรับตามที่คุณต้องการ */
}

.room form [type="submit"] {
    margin-top: 20px;
    /* ปรับตามที่คุณต้องการ */
}

.booking-form {
    display: flex;
    flex-direction: column;
}

.form-group {
    display: flex;
    margin-bottom: 10px;
}

.form-group label {
    min-width: 150px;
    /* กำหนดความกว้างขั้นต่ำของ label */
    margin-right: 10px;
}

.total-price-container {
    margin-top: 10px;
}

.total-price {
    font-size: 18px;
    color: #4CAF50;
    /* สีเขียว */
}
</style>

