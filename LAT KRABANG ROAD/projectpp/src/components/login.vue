<template>
  <link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
  <link href='https://fonts.googleapis.com/css?family=Kanit&subset=thai,latin' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" type="text/css" href="fonts/iconic/css/material-design-iconic-font.min.css">
  <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
  <link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
  <link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css">
  <link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
  <link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css">
  <link rel="stylesheet" type="text/css" href="css/util.css">
  <link rel="stylesheet" type="text/css" href="css/main.css">

  <div class="limiter">
    <div class="container-login100" style="background-image: url('images/login/BG1.jpg');">
      <div class="wrap-login100">
        <form class="login100-form validate-form" @submit.prevent="submitForm">
          <span class="login100-form-logo">
            <i class="zmdi zmdi-landscape"></i>
          </span>

          <span class="login100-form-title p-b-34 p-t-27">
            Log in
          </span>

          <div class="wrap-input100 validate-input" data-validate="Enter Email">
            <input v-model="formData.Email" class="input100" type="text" name="Email" placeholder="Email">
            <span class="focus-input100" data-placeholder="&#xf207;"></span>
          </div>

          <div class="wrap-input100 validate-input" data-validate="Enter password">
            <input v-model="formData.password" class="input100" type="password" name="password" placeholder="Password">
            <span class="focus-input100" data-placeholder="&#xf191;"></span>
          </div><br>

          <div class="container-login100-form-btn">
            <button class="login100-form-btn">เข้าสู่ระบบ</button>
          </div>

          <div class="text-center p-t-90">
            <a class="txt1">คุณยังไม่มีสมาชิกใช่หรือไม่ ?</a> <a class="txt1" href="/register">สมัครสมาชิก</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import Swal from 'sweetalert2';
import { ref } from 'vue';
import { jwtDecode } from "jwt-decode";

const validateForm = () => {
  for (const key in formData.value) {
    if (!formData.value[key]) {
      Swal.fire({
        icon: 'error',
        title: 'กรุณากรอกข้อมูล',
        text: `กรุณากรอก ${key}`,
      });
      return false;
    }
  }
  return true;
};

const formData = ref({
  Email: '',
  password: '',
});

const submitForm = async () => {
  try {
    if (validateForm()) {
      const response = await axios.post('http://localhost:3000/auth', formData.value);
      if (response.data && response.data.token) {
        // Decode the JWT token
        const decodedToken = jwtDecode(response.data.token);

        // Save email, role, and ID_CUS to LocalStorage
        localStorage.setItem('email', decodedToken.email);
        localStorage.setItem('role', decodedToken.role);
        localStorage.setItem('id_cus', decodedToken.id_cus);
        console.log(decodedToken);

        await Swal.fire({
          icon: 'success',
          title: 'เข้าสู่ระบบสำเร็จ',
        });

        // Check the role and redirect accordingly
        if (decodedToken.role === 'member') {
          window.location.href = '/indexmember';
        } else if (decodedToken.role === 'staff') {
          window.location.href = '/indexstaff';
        } else if (decodedToken.role === 'admin') {
          window.location.href = '/indexadmin';
        } else {
          window.location.href = '/';
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'เข้าสู่ระบบไม่สำเร็จ',
          text: 'กรุณากรอก Email หรือ Password ให้ถูกต้อง',
        });
      }
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    Swal.fire({
      icon: 'error',
      title: 'เข้าสู่ระบบไม่สำเร็จ',
      text: 'กรุณากรอก Email หรือ Password ให้ถูกต้อง',
    });
  }
};


</script>