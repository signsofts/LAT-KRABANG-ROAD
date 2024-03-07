// import { defineStore } from 'pinia'
// import axios from 'axios'

// /* code เหมือนเดิม */

// // เพิ่มบรรทัดนี้เข้ามา

// Omise.setPublicKey(import.meta.env.VITE_OMISE_PUBLIC_KEY)

// // เพื่อ function createSource
// const createSource = (amount) => {
//   return new Promise((resolve, reject) => {
//     // ทำการส่ง source ที่ต้องการจ่ายไป omise เพื่อนำ source token กลับมา
//     Omise.createSource('rabbit_linepay', {
//       amount: (amount * 100),
//       currency: 'THB'
//     }, (statusCode, response) => {
//       if (statusCode !== 200) {
//         return reject(response)
//       }
//       resolve(response)
//     })
//   })
// }


// export const useUserCartStore = defineStore('user-cart', {
//   state: () => ({
//     items: [],
//     checkout: {}
//   }),
//   getters: {
//     summaryPrice (state) {
//       return state.items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
//     },
//     quantity (state) {
//       return state.items.reduce((acc, item) => acc + item.quantity, 0)
//     },
//     user (state) {
//       const accountStore = useAccountStore()
//       return accountStore.user
//     },
//     cartRef (state) {
//       return ref(realtimeDB, `carts/${this.user.uid}`)
//     }
//   },
//   actions: {
//     async checkout (checkoutData) {
//       try {
//         let checkout = {
//           ...checkoutData,
//           products: this.items.map(product => ({
//             productId: product.productId,
//             quantity: product.quantity
//           }))
//         }

//         // เพิ่มการเรียกขอ source token จาก function createSource
//         const omiseResponse = await createSource(this.summaryPrice)
//         const sourceId = omiseResponse.id

//         const response = await axios.post('/api/placeorder', {
//           source: sourceId, // เปลี่ยนมาส่ง source จริงเข้าไปแทน
//           checkout
//         }, {
//           headers: {
//             'Authorization': this.user.accessToken
//           }
//         })
//         return response.data
//       } catch (error) {
//         console.log('error', error.code)
//         throw new Error('out of stock')
//       }
//     },
//   }
// })