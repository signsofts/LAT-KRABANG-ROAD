<template>
	<title>Pratya Biz Home Road</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="icon" type="image/png" href="images/icons/favicon.ico" />
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
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css">



	<div class="limiter">
		<div class="container-login100" style="background-image: url('images/register/BG1.jpg');">
			<div class="wrap-login100">
				<form class="login100-form validate-form" @submit.prevent="submitForm" novalidate>
					<span class="login100-form-logo">
						<i class="zmdi zmdi-landscape"></i>
					</span>

					<span class="login100-form-title p-b-34 p-t-27">
						Register
					</span>

					<div class="wrap-input100 validate-input" data-validate="Enter Email">
						<input v-model="formData.Name_CUS" class="input100" type="text" name="Name_CUS" placeholder="ชื่อ">
						<span class="focus-input100" data-placeholder="&#xf207;"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Enter password">
						<input v-model="formData.Surname_CUS" class="input100" type="text" name="Surname_CUS"
							placeholder="นามสกุล">
						<span class="focus-input100" data-placeholder="&#xf207;"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Enter Email">
						<input v-model="formData.Address_CUS" class="input100" type="text" name="Address_CUS"
							placeholder="ที่อยู่">
						<span class="focus-input100 " data-placeholder="&#xf2c1;"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Enter Email">
						<input v-model="formData.Tel_CUS" class="input100" type="text" name="Tel_CUS"
							placeholder="เบอร์โทร">
						<span class="focus-input100" data-placeholder="&#xf2d6;"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Enter Email">
						<input v-model="formData.Email" @change="validateEmail" class="input100" type="text" name="Email"
							placeholder="Email">
						<span class="focus-input100" data-placeholder="&#xf2c3;"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Enter Password">
						<input v-model="formData.password" class="input100" type="password" name="password"
							placeholder="Password">
						<span class="focus-input100" data-placeholder="&#xf191;"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Confirm Password">
						<input v-model="formData.confirmPassword" @change="validatePassword" class="input100"
							type="password" name="confirmPassword" placeholder="Confirm Password">
						<span class="focus-input100" data-placeholder="&#xf191;"></span>
					</div><br>

					<div class="container-login100-form-btn">
						<button class="login100-form-btn" type="submit">สมัครสมาชิก</button>
					</div>

					<div class="text-center p-t-90">
						<a class="txt1">คุณเป็นสมาชิกแล้วใช่หรือไม่?</a> <a class="txt1" href="/login">ล็อคอิน</a>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>



<script setup>
import axios from 'axios';
import { ref } from 'vue';
import Swal from 'sweetalert2'

const validateForm = () => {
	for (const key in formData.value) {
		if (!formData.value[key]) {
			let errorMessage = '';
			if (key === 'Name_CUS') {
				errorMessage = 'กรุณากรอก ชื่อ';
			} else if (key === 'Surname_CUS') {
				errorMessage = 'กรุณากรอก นามสกุล';
			} else if (key === 'Address_CUS') {
				errorMessage = 'กรุณากรอก ที่อยู่';
			} else if (key === 'Tel_CUS') {
				errorMessage = 'กรุณากรอก เบอร์โทร';
			} else if (key === 'Email') {
				errorMessage = 'กรุณากรอก Email';
			} else if (key === 'password') {
				errorMessage = 'กรุณากรอก รหัสผ่าน';
			}

			if (errorMessage) {
				Swal.fire({
					icon: 'error',
					title: 'กรุณากรอกข้อมูลให้ครบถ้วน',
					text: errorMessage,
				});
				return false;
			}
		}
	}
	return true;
};
const validateEmail = () => {
	const emailRegex = /\S+@\S+\.\S+/;
	const isValidEmail = emailRegex.test(formData.value.Email);

	if (!isValidEmail) {
		Swal.fire({
			icon: 'error',
			title: 'รูปแบบอีเมลไม่ถูกต้อง',
			text: 'กรุณากรอกอีเมลที่ถูกต้อง',
		});
		// ล้างค่า Email ในกรณีที่รูปแบบไม่ถูกต้อง
		formData.value.Email = '';
	}
};
const validatePassword = () => {
	const password = formData.value.password;
	const confirmPassword = formData.value.confirmPassword;

	if (password !== confirmPassword) {
		Swal.fire({
			icon: 'error',
			title: 'รหัสผ่านไม่ตรงกัน',
			text: 'กรุณากรอกรหัสผ่านและยืนยันรหัสผ่านให้ตรงกัน',
		});
		// ล้างค่า password และ confirmPassword ในกรณีที่ไม่ตรงกัน
		formData.value.password = '';
		formData.value.confirmPassword = '';
	}
};


const formData = ref({
	Name_CUS: '',
	Surname_CUS: '',
	Address_CUS: '',
	Tel_CUS: '',
	Email: '',
	password: '',
	confirmPassword: '',

});

const submitForm = async () => {
	try {
		if (validateForm()) {
			const response = await axios.post('http://localhost:3000/formregister', formData.value);

			if (response.status === 201) {
				// Email is already in use
				await Swal.fire({
					icon: 'error',
					title: 'ลงทะเบียนไม่สำเร็จ',
					text: 'อีเมลนี้ถูกใช้แล้ว กรุณาใช้อีเมลอื่น',
				});
			} else if (response.status === 200) {
				// Registration successful
				const { Email, password } = formData.value; // ดึงข้อมูล email และ password จาก formData
				await Swal.fire({
					icon: 'success',
					title: 'ลงทะเบียนเรียบร้อย',
					html: `Welcome to Pratya Biz Home<br>Email: ${Email}`,
				});
				console.log(response.data);
				window.location.href = '/login';
			} else {
				// Handle other status codes if needed
				console.log('Unexpected status code:', response.status);
			}
		}
	} catch (error) {
		console.error('เกิดข้อผิดพลาดในการส่งข้อมูล:', error);
	}
};

</script>