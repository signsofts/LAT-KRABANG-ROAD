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
    </section><br>

    <button class="download-button" @click="generatePDF">ดาวน์โหลด PDF</button>
    <div class="reservation-details-container">
        <div v-if="reservationData" class="reservation-details">
            <h2>รายละเอียดการจอง</h2>
            <!-- เพิ่มข้อมูลอื่น ๆ ตามต้องการ -->

            <div class="detail-item" v-if="reservationData.Name_Room">
                <strong>ชื่อห้อง:</strong> {{ reservationData.Name_Room }}
            </div>
            <div class="detail-item" v-if="reservationData.Style_Room">
                <strong>ขนาดห้อง:</strong> {{ reservationData.Style_Room }}
            </div>
            <div class="detail-item" v-if="reservationData.Detail_Room">
                <strong>รายละเอียดห้อง:</strong> {{ reservationData.Detail_Room }}
            </div>
            <div class="detail-item" v-if="reservationData.Name_member">
                <strong>ชื่อ-นามสกุล:</strong> {{ reservationData.Name_member }}
            </div>
            <div class="detail-item" v-if="reservationData.Tel_member">
                <strong>เบอร์โทร:</strong> {{ reservationData.Tel_member }}
            </div>
            <div class="detail-item" v-if="reservationData.checkIn">
                <strong>วันเช็คอิน:</strong> {{ reservationData.checkIn }}
            </div>
            <div class="detail-item" v-if="reservationData.checkOut">
                <strong>วันเช็คเอ้าท์:</strong> {{ reservationData.checkOut }}
            </div>
            <div class="detail-item" v-if="reservationData.Total_price">
                <strong>ราคารวม:</strong> {{ reservationData.Total_price }}
            </div>
        </div>
    </div>




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
</template>


<script>
import axios from 'axios';
import html2pdf from 'html2pdf.js';

export default {
    mounted() {
        this.includeExternalScripts();
        this.checkLocalStorage();
    },

    data() {
        return {
            reservationData: null, // ตั้งค่า reservationData เพื่อป้องกัน undefined ใน template
            userEmail: '',
        };
    },
    created() {
        const reservationDataString = this.$route.query.reservationData;
        if (reservationDataString) {
            this.reservationData = JSON.parse(reservationDataString);
        }
    },

    methods: {
        generatePDF() {
            // คัดลอก element เพื่อปรับแต่งหน้า PDF
            const element = document.querySelector('.reservation-details').cloneNode(true);

            // เพิ่มชื่อ "Pratya Biz Home" บนสุด
            const header = document.createElement('div');
            header.textContent = 'Pratya Biz Home';
            header.style.fontSize = '50px';
            header.style.fontWeight = 'bold';
            header.style.marginBottom = '20px';
            element.insertBefore(header, element.firstChild);

            // เพิ่มสไตล์ CSS สำหรับ PDF
            element.style.width = '100%';
            element.style.maxWidth = '100%';
            element.style.margin = 'auto';
            element.style.padding = '20px';
            element.style.border = '1px solid #ddd';
            element.style.borderRadius = '8px';
            element.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
            element.style.textAlign = 'center';

            // สร้าง PDF ด้วย html2pdf
            html2pdf(element, {
                filename: 'Pratya_Biz_Home.pdf',
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
.reservation-details-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
}

.reservation-details {
    width: 80%;
    max-width: 600px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.detail-item {
    margin: 10px 0;
}

.download-button {
    display: block;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4CAF50;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: auto;
    margin-right: 10px;
    /* ให้ปุ่มอยู่ด้านขวา */
}

.download-button:hover {
    background-color: #45a049;
}
</style>