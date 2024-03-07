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


    <section id="home" class="welcome-hero" style="background-image: url('images/contact/BG1.jpg');">

        <div class="top-area">
            <div class="header-area">
                <nav class="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy" data-minus-value-desktop="70"
                    data-minus-value-mobile="55" data-speed="1000">

                    <div class="container">

                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                <i class="fa fa-bars"></i>
                            </button>
                            <a class="navbar-brand" href="/">Pratya Biz Home Lat Krabang<span></span></a>

                        </div>
                        <div class="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                            <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                                <li><a href="/">หน้าแรก</a></li>
                                <li><a href="/room">ห้องพักเกสเฮ้าต์</a></li>
                                <li><a href="/contact">ติดต่อเรา</a></li>
                                <li><a href="/login">🔒 เข้าสู่ระบบ</a></li>
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
                    “PRADYA” หรือ “บ้านปรัชญา”
                    ซึ่งมีแนวคิดมาจาก ปรัชญาความสุขแบบวิถีบ้านในเมือง ที่บ้านไม่ใช่เพียงแค่สถานที่ให้พักผ่อนกาย
                    แต่ยังสามารถพักพิงใจ
                </p>
            </div>
        </div>

    </section>

    <section id="contact1">
        <div class="container1">
            <h1>ติดต่อเรา</h1>
            <h2>ปรัชญา บิซโฮม ถนนลาดกระบัง</h2>
            <h3>ถนนลาดกระบัง-สุวรรณภูมิ แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพฯ</h3>
            <div class="contact-icons">
                <a href="https://web.facebook.com/fah.banthita.12" target="_blank"><i class="fab fa-facebook-f"></i></a>
                <a href="https://lin.ee/NqBqaCE" target="_blank"><i class="fab fa-line"></i></a>
                <a href="#" id="phoneIcon" @click="openPhoneNumberAlert"><i class="fas fa-phone"></i></a>
            </div><br>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d342.5884613806731!2d100.7233717673859!3d13.721719932061273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d67266693ea5b%3A0x4012d147e0a14970!2sPradya%20BisHome%20Onnut-Suvarnabhumi%20Townhome!5e0!3m2!1sth!2sth!4v1702476679336!5m2!1sth!2sth"
                width="600" height="450" style="border:0;" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                                <a href="/"> Pratya Biz Home</a>
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
                                <li><a href="/">หน้าแรก</a></li>
                                <li><a href="/room">ห้องพักเกสเฮ้าต์</a></li>
                                <li><a href="/contact">ติดต่อเรา</a></li>
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
import Swal from 'sweetalert2';
export default {
    // Your component options go here

    mounted() {
        // Include external JavaScript files here
        this.includeExternalScripts();
    },

    methods: {
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
        openPhoneNumberAlert() {
            // เมื่อคลิกที่ไอคอนโทรศัพท์
            Swal.fire({
                title: 'เบอร์โทรศัพท์',
                text: '+1 (66) 0623573421',  // แก้ไขเบอร์โทรตามที่คุณต้องการ
                icon: 'info',
                confirmButtonText: 'ปิด',
                customClass: {
                    popup: 'custom-swal-popup',  // กำหนด custom class ที่คุณสร้าง
                },
            });
        },
    },
};
</script>
<style>
.container1 {
    background-color: #f8f8f8;
    /* สีเทาอ่อน */
    padding: 20px;
    /* เพิ่ม padding ของ container */
}

/* ปรับ font ขนาดใหญ่ขึ้น */
.container1 h1 {
    font-size: 2.5em;
    color: #333;
    /* สีดำ */
    margin-bottom: 10px;
    /* เพิ่มระยะห่างด้านล่างของ h1 */
}

.container1 h2 {
    font-size: 1.5em;
    color: #555;
    /* สีเทาเข้ม */
}

.container1 h3 {
    font-size: 1.2em;
    color: #777;
    /* สีเทาอ่อน */
}

/* ปรับสี icon */
.contact-icons a i {
    font-size: 4em;
    color: #686868;
    /* สีน้ำเงินของ Google */
    margin: 0 80px;
    /* ลดระยะห่างรอบ icon */
    transition: color 0.3s ease-in-out;
}

/* เพิ่ม hover effect ให้กับ icon */
.contact-icons a:hover i {
    color: #242222;
    /* สีเขียวของ Google */
}

/* ปรับ margin ของ iframe */
iframe {
    margin-top: 20px;
    width: 80%;
    border: 1px solid #ddd;
    border-radius: 8px;
}

/* ปรับ box shadow */
.container1 {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    /* เปลี่ยนให้มีความยาวแนวนอนน้อยลง */
}

.swal2-popup {
    font-size: 16px;
    /* ปรับขนาดตามที่ต้องการ */
}
</style>
