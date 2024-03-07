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


    <section class="welcome-hero" style="background-image: url('images/index/BG1.jpg');">

        <div class="top-area">
            <div class="header-area">
                <nav class="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy" data-minus-value-desktop="70"
                    data-minus-value-mobile="55" data-speed="1000">

                    <div class="container">

                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                <i class="fa fa-bars"></i>
                            </button>
                            <a class="navbar-brand" href="/indexadmin">Pratya Biz Home Lat Krabang<span></span></a>

                        </div>
                        <div class="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                            <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                                <li><a href="/indexadmin">หน้าแรก</a></li>
                                <li><a href="/updatememberadmin">ผู้ใช้งาน</a></li>
                                <li><a href="/updateroomadmin">ห้องพักเกสเฮ้าต์</a></li>
                                <li><a href="/reserveadmin">ข้อมูลการจองห้องพัก</a></li>
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                                        aria-haspopup="true" aria-expanded="false">email <span class="caret"></span></a>
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
                <h2>Edit customer information</h2>
                <p>
                    การแก้ไขข้อมูลลูกค้าสำหรับ Admin Guest house of Pratya Biz Home Lat Krabang Road เท่านั้น
                </p>
            </div>
        </div>
    </section>
    <div class="search-container">
        <input type="text" placeholder="ค้นหาข้อมูล..." id="searchInput">
        <button type="button" class="btn-search" @click="search">ค้นหา</button>
    </div>
    <div class="customer-container">
        <table>
            <thead>
                <tr>
                    <th>ชื่อ</th>
                    <th>Role</th>
                    <th>เบอร์โทร</th>
                    <th>อีเมล</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="customer in customers" :key="customer.ID_Customer">
                    <td>{{ customer.Name_CUS }} {{ customer.Surname_CUS }}</td>
                    <td>{{ customer.role }}</td>
                    <td>{{ customer.Tel_CUS }}</td>
                    <td>{{ customer.Email }}</td>
                    <td>
                        <button class="btn-moree"  @click="openViewModal(customer)">
                            ดูข้อมูล
                        </button>

                        <button class="btn-moree" style="margin-left: 10px; background-color: red;" @click="deleteCustomer(selectedCustomer)">
                            ลบข้อมูล
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>


    <div class="modal fade" id="viewCustomerModal" tabindex="-1" role="dialog" aria-labelledby="viewCustomerModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <center>
                        <h2 class="modal-title" id="viewCustomerModalLabel">ข้อมูลลูกค้า</h2>
                    </center>
                </div>
                <div class="modal-body">
                    <!-- แสดงข้อมูลลูกค้า -->
                    <div>
                        <p><strong>ชื่อ :</strong> {{ selectedCustomer.Name_CUS }} {{ selectedCustomer.Surname_CUS }}</p>
                        <p><strong>สถานะ :</strong> {{ selectedCustomer.role }}</p>
                        <p><strong>ที่อยู่ :</strong> {{ selectedCustomer.Address_CUS }}</p>
                        <p><strong>เบอร์โทร :</strong> {{ selectedCustomer.Tel_CUS }}</p>
                        <p><strong>อีเมล :</strong> {{ selectedCustomer.Email }}</p>
                        <p><strong>รหัสผ่าน :</strong> {{ selectedCustomer.password }}</p>
                        <!-- เพิ่มข้อมูลอื่น ๆ ตามต้องการ -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
import axios from 'axios';
import Swal from 'sweetalert2';
export default {
    // Your component options go here

    mounted() {
        // Include external JavaScript files here
        this.includeExternalScripts();
        this.checkLocalStorage();
        this.fetchCustomerData();
    },

    data() {
        return {
            userEmail: '',
            customers: [], // เพิ่มบรรทัดนี้
            selectedCustomer: {},
            selectedRole: '',
            roleFilter: [], // เพิ่มบรรทัดนี้

        };
    },

    methods: {
        search() {
            // ดึงข้อความค้นหาจาก input โดยตัดช่องว่างที่อยู่ข้างหน้าและท้ายออก
            const searchText = document.getElementById('searchInput').value.trim();

            // ถ้าช่องค้นหาเป็นค่าว่าง
            if (searchText === '') {
                // แสดง SweetAlert แจ้งให้รอสักครู่ โดยโหลดข้อมูลลูกค้าใหม่
                Swal.fire({
                    title: 'กำลังโหลดข้อมูล',
                    text: 'กรุณารอสักครู่...',
                    icon: 'info',
                    showCancelButton: false,
                    showConfirmButton: false,
                    allowOutsideClick: false,
                    willOpen: () => {
                        Swal.showLoading();
                    }
                });
                this.fetchCustomerData(); // โหลดข้อมูลลูกค้าใหม่
                setTimeout(() => {
                    Swal.close(); // ปิด SweetAlert เมื่อโหลดข้อมูลเสร็จสิ้น
                }, 3000); // โหลดข้อมูลเป็นเวลา 3 วินาที
                return;
            }

            // แสดง SweetAlert แจ้งให้รอสักครู่ โดยไม่แสดงปุ่ม Confirm และปุ่ม Cancel
            Swal.fire({
                title: 'กำลังค้นหาข้อมูล',
                text: 'กรุณารอสักครู่...',
                icon: 'info',
                showCancelButton: false,
                showConfirmButton: false,
                allowOutsideClick: false,
                willOpen: () => {
                    Swal.showLoading();
                }
            });

            setTimeout(() => {
                // สร้าง regular expression จากข้อความค้นหา โดยไม่คำนึงถึงตัวพิมพ์ใหญ่-เล็ก (case insensitive)
                const regex = new RegExp(searchText, 'i');
                // กรองข้อมูลลูกค้าที่ตรงกับเงื่อนไขค้นหา
                const filteredCustomers = this.customers.filter(customer =>
                    regex.test(customer.Name_CUS) || regex.test(customer.Email)
                );
                // กำหนดข้อมูลลูกค้าที่ผ่านการกรองให้กับตัวแปร customers เพื่อแสดงผล
                this.customers = filteredCustomers;
                // ปิด SweetAlert เมื่อการค้นหาเสร็จสิ้น
                Swal.close();
            }, 2000); // โหลดข้อมูลเป็นเวลา 2 วินาที
        },
        async deleteCustomer(customer) {
        try {
            const shouldDelete = await Swal.fire({
                title: 'ยืนยันการลบข้อมูล?',
                text: 'คุณต้องการลบข้อมูลลูกค้านี้หรือไม่?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'ลบข้อมูล !',
                cancelButtonText: 'ยกเลิก'
            });

            if (shouldDelete.isConfirmed) {
                const response = await axios.delete(`http://localhost:3000/customers/${customer.ID_CUS}`);

                if (response.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'ลบข้อมูลลูกค้าสำเร็จ',
                        showConfirmButton: false,
                        timer: 1500,
                    });

                    // ปิด Modal เมื่อลบสำเร็จ
                    $('#viewCustomerModal').modal('hide');

                    // โหลดข้อมูลลูกค้าใหม่หลังจากการลบ
                    this.fetchCustomerData();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'เกิดข้อผิดพลาดในการลบข้อมูลลูกค้า',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            }
        } catch (error) {
            console.error('เกิดข้อผิดพลาดในการลบข้อมูลลูกค้า:', error);
        }
    },
    filterCustomersByRole(customer) {
        // ถ้า roleFilter ไม่มีค่าหรือมีค่าว่าง ให้แสดงทุกลูกค้า
        if (!this.roleFilter || this.roleFilter.length === 0) {
            return true;
        }

        // ถ้า role ของลูกค้าอยู่ใน roleFilter ให้แสดงลูกค้านี้
        return this.roleFilter.includes(customer.role);
    },
    async editCustomer() {
        try {
            // ให้ใช้ Axios เพื่อทำการ POST ข้อมูลไปยัง API endpoint
            const response = await axios.post(`http://localhost:3000/customers/update/${this.selectedCustomer.ID_CUS}`, this.selectedCustomer);

            // ตรวจสอบคำตอบจาก API
            if (response.status === 200) {
                // ใช้ SweetAlert 2 แสดงข้อความเมื่อบันทึกสำเร็จ
                Swal.fire({
                    icon: 'success',
                    title: 'บันทึกการแก้ไขสำเร็จ',
                    showConfirmButton: false,
                    timer: 1500, // ปิด SweetAlert 2 หลังจาก 1.5 วินาที
                });

                // ปิด Modal เมื่อบันทึกสำเร็จ
                $('#editCustomerModal').modal('hide');

                // โหลดข้อมูลลูกค้าใหม่
                this.fetchCustomerData();
            } else {
                // ใช้ SweetAlert 2 แสดงข้อความเมื่อบันทึกไม่สำเร็จ
                Swal.fire({
                    icon: 'error',
                    title: 'เกิดข้อผิดพลาดในการบันทึกการแก้ไข',
                    showConfirmButton: false,
                    timer: 1500, // ปิด SweetAlert 2 หลังจาก 1.5 วินาที
                });
            }
        } catch (error) {
            console.error('เกิดข้อผิดพลาดในการบันทึกการแก้ไข:', error);
        }
    },

    openViewModal(customer) {
        // เซ็ตข้อมูลลูกค้าที่เลือก
        this.selectedCustomer = customer;
        // เปิด Modal
        $('#viewCustomerModal').modal('show');
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
    async fetchCustomerData() {
        try {
            const response = await axios.get('http://localhost:3000/customers');
            // ดึงข้อมูล customers จาก response.data
            const customers = response.data;
            console.log(customers); // แสดงข้อมูลใน console เพื่อตรวจสอบ

            // กำหนดค่าข้อมูล customers ให้กับตัวแปรใน Vue instance
            this.customers = customers;
        } catch (error) {
            console.error('Error fetching customer data:', error);
        }
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

.caption {
    margin-top: 15px;
}
</style>