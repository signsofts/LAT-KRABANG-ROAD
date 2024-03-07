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
                <h2>Edit room information</h2>
                <p>
                    การแก้ไขข้อมูลห้องพักสำหรับ Admin Guest house of Pratya Biz Home Lat Krabang Road เท่านั้น
                </p>
            </div>
        </div>

    </section>
    <section class="columns">
        <div class="column" v-for="room in rooms" :key="room.ID_Room">
            <div class="contentt">
                <a class="imgg">
                    <div class="image img-zoom">
                        <img :src="imageSrc(room.IMG_Room)" alt="Room Image">
                    </div>
                    <div class="caption">
                        <h3 class="title">{{ room.Name_Room }}</h3>
                        <div class="time">
                            <button class="btn-more" @click="openRoomModal(room)">แก้ไขข้อมูล »</button>
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
                        <h5 class="modal-title" id="roomModalLabel">{{ editedRoom && editedRoom.Name_Room }}</h5>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="saveChanges">
                            <div class="form-group">
                                <label for="editRoomName">ชื่อห้อง</label>
                                <input type="text" class="form-control" id="editRoomName" v-model="editedRoom.Name_Room"
                                    required>
                            </div>
                            <div class="form-group">
                                <label for="editRoomStyle">ขนาด</label>
                                <input type="text" class="form-control" id="editRoomStyle" v-model="editedRoom.Style_Room"
                                    required>
                            </div>
                            <div class="form-group">
                                <label for="editRoomDetail">รายละเอียด</label>
                                <input type="text" class="form-control" id="editRoomDetail" v-model="editedRoom.Detail_Room"
                                    required>
                            </div>
                            <div class="form-group">
                                <label for="editRoomPrice">ราคา</label>
                                <input type="text" class="form-control" id="editRoomPrice" v-model="editedRoom.Price"
                                    required>
                            </div>
                            <div class="form-group">
                                <label for="editRoomStatus">สถานะ</label>
                                <select class="form-control" id="editRoomStatus" v-model="editedRoom.status" required>
                                    <option value="ห้องว่าง">ห้องว่าง</option>
                                    <option value="ห้องไม่ว่าง">ห้องไม่ว่าง</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="editRoomImage">รูปภาพ</label>
                                <input type="file" id="editRoomImage" @change="handleImageChange">
                            </div>
                            <button type="submit" class="btn-more">บันทึกการแก้ไข</button>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">ปิด</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Swal from 'sweetalert2';
import axios from 'axios';
export default {
    mounted() {
        // Include external JavaScript files here
        this.includeExternalScripts();
        this.checkLocalStorage();
        this.fetchRoomData();
    },
    data() {
        return {
            editedRoom: {
                ID_Room: null,
                Name_Room: '',
                Detail_Room: '',
                Price: '',
                Style_Room: '',
                IMG_Room: null,
                status: '',
            },
            userEmail: '',
            rooms: [],

        };
    },


    methods: {
        handleImageChange(event) {
            const file = event.target.files[0];
            // ตรวจสอบว่ามีการเลือกรูปใหม่หรือไม่
            if (file) {
                this.editedRoom.IMG_Room = file;
            }
        },

        async saveChanges() {
            try {
                const formData = new FormData();
                formData.append('Name_Room', this.editedRoom.Name_Room);
                formData.append('Price', this.editedRoom.Price);
                formData.append('Style_Room', this.editedRoom.Style_Room);
                formData.append('Detail_Room', this.editedRoom.Detail_Room);
                formData.append('IMG_Room', this.editedRoom.IMG_Room);
                formData.append('status', this.editedRoom.status);

                const response = await axios.post(`http://localhost:3000/rooms/update/${this.editedRoom.ID_Room}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

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
                    $('#roomModal').modal('hide');

                    // โหลดข้อมูลห้องใหม่
                    this.fetchRoomData();
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
            // กำหนดค่าข้อมูลห้องที่จะแก้ไขให้กับ editedRoom
            this.editedRoom = room;
            // แสดง modal
            $('#roomModal').modal('show');
        },
        async fetchRoomData() {
            try {
                const response = await axios.get('http://localhost:3000/rooms');
                // ดึงข้อมูล customers จาก response.data
                const rooms = response.data;
                console.log(rooms); // แสดงข้อมูลใน console เพื่อตรวจสอบ

                // กำหนดค่าข้อมูล customers ให้กับตัวแปรใน Vue instance
                this.rooms = rooms;
            } catch (error) {
                console.error('Error fetching customer data:', error);
            }
        },
    },
};

</script>
<style scoped>
html,
body {
    height: 100%;
    margin: 0;
    padding: 0;
}

section.columns {
    margin-top: 50px;
    padding-bottom: 50px;
    /* เพิ่ม padding ด้านล่าง */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.column {
    flex: 0 0 calc(25% - 20px);
    margin: 10px;
    box-sizing: border-box;
}

.content {
    border: 1px solid #ddd;
    padding: 15px;
    text-align: center;
    border-radius: 10px;
    transition: transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.content:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.img-zoom {
    overflow: hidden;
}

.img-zoom img {
    transition: transform 0.5s ease;
}

.img-zoom:hover img {
    transform: scale(1.2);
}

.caption {
    margin-top: 15px;
}

.larger-column {
    width: 150px;
    /* ปรับขนาดตามที่คุณต้องการ */
    height: 200px;
    /* ปรับขนาดตามที่คุณต้องการ */
}
</style>
