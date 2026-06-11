// // Mật khẩu đăng nhập
// const PASSWORD = "kansaisc";

// // Đăng nhập
// function login(){

//     let pass = document.getElementById("password").value;

//     if(pass === PASSWORD){

//         document.getElementById("loginBox").style.display = "none";
//         document.getElementById("mainBox").style.display = "block";

//     }else{

//         document.getElementById("error").innerText =
//             "Sai mật khẩu!";
//     }
// }

// // Hiển thị QR
// function showCard(){

//     let card = document.getElementById("cardNumber").value;

//     if(card === ""){

//         alert("Vui lòng nhập số thẻ");
//         return;
//     }

//     if(card < 1 || card > 70){

//         alert("Số thẻ phải từ 1 đến 70");
//         return;
//     }

//     document.getElementById("cardTitle").innerText =
//         "THẺ SỐ " + card;

//     document.getElementById("qrImage").src =
//         "qr/" + card + ".jpg";
// }

// // Nhấn Enter để tìm
// document.addEventListener("DOMContentLoaded", function(){

//     document.getElementById("cardNumber")
//     .addEventListener("keypress", function(event){

//         if(event.key === "Enter"){

//             showCard();
//         }

//     });

// });


// ==========================
// CẤU HÌNH
// ==========================

const PASSWORD = "kansaisc";


// ==========================
// ĐĂNG NHẬP
// ==========================

function login() {

    const pass = document.getElementById("password").value;

    if (pass === PASSWORD) {

        document.getElementById("loginBox").style.display = "none";
        document.getElementById("mainBox").style.display = "block";

        // Đổi bố cục sau khi đăng nhập
        document.body.style.alignItems = "flex-start";
        document.body.style.paddingTop = "40px";

        document.getElementById("error").innerText = "";

    } else {

        document.getElementById("error").innerText =
            "Sai mật khẩu!";

    }
}


// ==========================
// HIỂN THỊ QR
// ==========================

function showCard() {

    const card = document.getElementById("cardNumber").value.trim();

    if (card === "") {

        alert("Vui lòng nhập số thẻ");
        return;
    }

    const cardNumber = parseInt(card);

    if (cardNumber < 1 || cardNumber > 70) {

        alert("Số thẻ phải từ 1 đến 70");
        return;
    }

    document.getElementById("cardTitle").innerText =
        "THẺ SỐ " + cardNumber;

    document.getElementById("qrImage").src =
        "qr/" + cardNumber + ".jpg";

    document.getElementById("qrImage").style.display =
        "block";
}


// ==========================
// SỰ KIỆN BÀN PHÍM
// ==========================

document.addEventListener("DOMContentLoaded", function () {

    // Enter ở ô mật khẩu
    document.getElementById("password")
        .addEventListener("keypress", function (event) {

            if (event.key === "Enter") {
                login();
            }

        });

    // Enter ở ô số thẻ
    document.getElementById("cardNumber")
        .addEventListener("keypress", function (event) {

            if (event.key === "Enter") {
                showCard();
            }

        });

});