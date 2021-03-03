//=========================Let & Const=========================//
// Sự khác nhau giữa var và let:
// var: hỗ trợ cơ chế hoisting, phạm vi hoạt động của biển var trên toàn cục các scope ({})
// let: không hỗ trợ cơ chế hoisting, phạm vi hoạt động của let trên từng scope nếu tên biến bị trùng sẽ lập tức thông báo lỗi

// let iNum = 4;
// if(true){
//     iNum =5;
//     console.log(iNum)
// }
// console.log(iNum)

// var num=2;
// var num=4;
// console.log("Số: ",num)

// let num1= 4;
// let num2 =5;
// console.log("Số thứ 1: ",num1)

// const pi=3.14;
// console.log("Số pi là: ",pi)

// const object = {hoTen: 'duong quoc nam', Tuoi: 19}

// object.hoTen = "nguyen van b"
// object.Tuoi = 21

//  object = {hoTen: 'nguyen van a',Tuoi: 20}

// console.log(object)

//==============================Function Scope==========================
// Function Scope: biến bên trong sẽ không lấy được giá trị ở bên ngoài scope
// Nhưng bên ngoài có thể sử dụng bên trong scope được

// var a=5;

// let functionA = (function(){
//     var a=10;
//     console.log(a);
// })
// functionA();

//==============================Block Scope==========================
// Block Scope: phạm vi hoạt động bên trong Scope không lấy được giá trị ở bên ngoài

// if(true){
//     var x=10;
// }
// console.log(x);

// if(true){
//     let b=10;
// }
// console.log(b);

// let mangButton = document.getElementsByTagName('button')
// for (let index = 0; index < mangButton.length; index++) {
//     mangButton[index].onclick = function (){
//         alert("Button ở vị trí thứ: "+index);
//     }
// }
//==============================Arrow Function==========================
// Arrow Function: cách viết rút gọn từ khóa function thay thế bằng dấu mũi tên. Trong trường hợp hàm chỉ có 1 lệnh thì ta có thể lược bỏ dấu {}, returns
// + Con trỏ this trong lớp đối tượng thì sẽ trỏ về chính đối tượng đó
// + Con trỏ this trong prototype (class) sẽ trỏ về đối tượng được new từ Prototype đó
// + Lưu ý: Những hàm bên trong phương thức của Prototype thì nên khai báo = arrow function thay vì function

// let mangButton = document.getElementsByTagName("button");
// for (let index = 0; index < mangButton.length; index++) {
//     mangButton[index].onclick = () => {
//         alert("Button ở vị trí thứ: "+index)
//     }
// }

// hiện tại ngữ cảnh của con trỏ this là window
// let hocVien = {
//     hoTen: "Dương Quốc Nam",
//     lop: "BootCamp01",
//     layThongTinHocVien: function(){
//         let hienThiThongTin = () =>{
//             console.log("Họ tên học viên: "+this.hoTen)
//             console.log("Lớp: " + this.lop);
//         }
//         hienThiThongTin()
//     }
// }

// hocVien.layThongTinHocVien()

// function hocVien(){
//         (this.hoTen=""),
//         (this.lop=""),
//         (this.layThongTinHocVien= function(){
//            let hienThiThongTin = ()=>{
//                console.log("Họ tên học viên: "+this.hoTen);
//                console.log("Lớp: "+this.lop);
//            }
//            hienThiThongTin()
//         })
// }

// let hocVien1 = new hocVien();
// hocVien1.hoTen = "Dương Quốc Nam";
// hocVien1.lop = "BootCamp01"
// hocVien1.layThongTinHocVien();

// let hocVien2 = new hocVien();
// hocVien2.hoTen = "Dương Quốc Anh Minh";
// hocVien2.lop = "BootCamp02";
// hocVien2.layThongTinHocVien();

//==============================Resparameter==========================
// Trong javascript không có khái niệm hàm chồng khi đặt tên giống nhau thì nó sẽ báo lỗi NaN
// Không giới hạn tham số đầu vào

// function tinhTong(...resParam) {
//     console.log(resParam);
//     let tong=0
//     for(let i=0;i<resParam.length;i++){
//         tong+=resParam[i];
//     }
//     console.log("Tổng là: ",tong);
//     return tong;
// }
// tinhTong(1,2,3)
// tinhTong(1,2,3,4,5,6)

// let mangHocVien = [
//   {
//     maHocVien: 1,
//     tenHocVien: "Dương Quốc Nam",
//     tuoi: 20,
//   },
//   {
//     maHocVien: 2,
//     tenHocVien: "Dương Quốc Việt",
//     tuoi: 47,
//   },
// ];

// let hv = {
//   maHocVien: 3,
//   tenHocVien: "Dương Quốc Anh Minh",
//   tuoi: 10,
// };

// function xuLyMangHocVien(...resParam) {
//   if (resParam.length === 2) {
//  mangBanDau.push(mangCanPush)
//     resParam[1].push(resParam[0]);
//     console.log(resParam[1]);
//   } else if (resParam.length > 2) {
//     switch (resParam[2]) {
//       case "DELETE":
//         {
//           let index = resParam[1].findIndex(
//             (hv) => hv.maHocVien === resParam[0].maHocVien
//           );
//           if (index !== 1) {
//             resParam[1].splice(index, 1);
//           }
//           console.log(resParam[1]);
//         }
//         break;
    
//       case "UPDATE":
//         {
//           let index = resParam[1].findIndex(
//             (hv) => hv.maHocVien === resParam[0].maHocVien
//           );
//           if (index !== -1) {
//             resParam[1][index].tenHocVien = "Dương Quốc Thanh";
//           }
//           console.log(resParam[1]);
//         }
//         break;
//       default:
//         break;
//     }
//   } else {
//     console.log(resParam[0]);
//   }
// }

// xuLyMangHocVien(mangHocVien);
// xuLyMangHocVien(hv, mangHocVien);   
// xuLyMangHocVien(hv, mangHocVien, "UPDATE");
// xuLyMangHocVien(hv, mangHocVien, "DELETE");

//==============================Spread Operator==========================
// Toán tử 3 chấm dùng để thêm phần tử vào mảng hoặc thêm thuộc tính vào Object
// Ngược lại với resParam nó nhận vào mảng và trả ra từng phần tử

// const a = [3,4];

// const b = [1,2,...a];

// console.log("Mảng: ",b);

let a = {
    ten:"Dương Quốc Nam",
    lop:"BootCamp01"
}


let b = {...a,tuoi:20}

console.log("Object: ",b);