const PASSWORD = "sc";

// ================= DATA =================
const employees = [
    { name: "BUI DINH TOI", qr: "qr/1.jpg" },
    { name: "LE DUC HUY", qr: "qr/2.jpg" },
    { name: "DO CONG TUYEN", qr: "qr/3.jpg" },
    { name: "NGUYEN THI TUYET MAI", qr: "qr/4.jpg" },
    { name: "PHAM VAN TRUONG", qr: "qr/5.jpg" },

    { name: "", qr: "qr/6.jpg" },
    { name: "", qr: "qr/7.jpg" },
    { name: "", qr: "qr/8.jpg" },
    { name: "", qr: "qr/9.jpg" },
    { name: "", qr: "qr/10.jpg" },

    { name: "", qr: "qr/11.jpg" },
    { name: "", qr: "qr/12.jpg" },
    { name: "", qr: "qr/13.jpg" },
    { name: "", qr: "qr/14.jpg" },
    { name: "", qr: "qr/15.jpg" },

    { name: "", qr: "qr/16.jpg" },
    { name: "", qr: "qr/17.jpg" },
    { name: "", qr: "qr/18.jpg" },
    { name: "", qr: "qr/19.jpg" },
    { name: "", qr: "qr/20.jpg" },

    { name: "", qr: "qr/21.jpg" },
    { name: "", qr: "qr/22.jpg" },
    { name: "", qr: "qr/23.jpg" },
    { name: "", qr: "qr/24.jpg" },
    { name: "", qr: "qr/25.jpg" },

    { name: "", qr: "qr/26.jpg" },
    { name: "", qr: "qr/27.jpg" },
    { name: "", qr: "qr/28.jpg" },
    { name: "", qr: "qr/29.jpg" },
    { name: "", qr: "qr/30.jpg" },

    { name: "", qr: "qr/31.jpg" },
    { name: "", qr: "qr/32.jpg" },
    { name: "", qr: "qr/33.jpg" },
    { name: "", qr: "qr/34.jpg" },
    { name: "", qr: "qr/35.jpg" },

    { name: "", qr: "qr/36.jpg" },
    { name: "", qr: "qr/37.jpg" },
    { name: "", qr: "qr/38.jpg" },
    { name: "", qr: "qr/39.jpg" },
    { name: "", qr: "qr/40.jpg" },

    { name: "", qr: "qr/41.jpg" },
    { name: "", qr: "qr/42.jpg" },
    { name: "", qr: "qr/43.jpg" },
    { name: "", qr: "qr/44.jpg" },
    { name: "", qr: "qr/45.jpg" },

    { name: "", qr: "qr/46.jpg" },
    { name: "", qr: "qr/47.jpg" },
    { name: "", qr: "qr/48.jpg" },
    { name: "", qr: "qr/49.jpg" },
    { name: "", qr: "qr/50.jpg" },

    { name: "", qr: "qr/51.jpg" },
    { name: "", qr: "qr/52.jpg" },
    { name: "", qr: "qr/53.jpg" },
    { name: "", qr: "qr/54.jpg" },
    { name: "", qr: "qr/55.jpg" },

    { name: "", qr: "qr/56.jpg" },
    { name: "", qr: "qr/57.jpg" },
    { name: "", qr: "qr/58.jpg" },
    { name: "", qr: "qr/59.jpg" },
    { name: "", qr: "qr/60.jpg" },

    { name: "", qr: "qr/61.jpg" },
    { name: "", qr: "qr/62.jpg" },
    { name: "", qr: "qr/63.jpg" },
    { name: "", qr: "qr/64.jpg" },
    { name: "", qr: "qr/65.jpg" },

    { name: "", qr: "qr/66.jpg" },
    { name: "", qr: "qr/67.jpg" },
    { name: "", qr: "qr/68.jpg" },
    { name: "", qr: "qr/69.jpg" },
    { name: "", qr: "qr/70.jpg" },

    { name: "", qr: "qr/71.jpg" },
    { name: "", qr: "qr/72.jpg" },
    { name: "", qr: "qr/73.jpg" },
    { name: "", qr: "qr/74.jpg" },
    { name: "", qr: "qr/75.jpg" },

    { name: "", qr: "qr/76.jpg" },
    { name: "", qr: "qr/77.jpg" },
    { name: "", qr: "qr/78.jpg" },
    { name: "", qr: "qr/79.jpg" },
    { name: "", qr: "qr/80.jpg" },

    { name: "", qr: "qr/81.jpg" },
    { name: "", qr: "qr/82.jpg" },
    { name: "", qr: "qr/83.jpg" },
    { name: "", qr: "qr/84.jpg" },
    { name: "", qr: "qr/85.jpg" },

    { name: "", qr: "qr/86.jpg" },
    { name: "", qr: "qr/87.jpg" },
    { name: "", qr: "qr/88.jpg" },
    { name: "", qr: "qr/89.jpg" },
    { name: "", qr: "qr/90.jpg" },

    { name: "", qr: "qr/91.jpg" },
    { name: "", qr: "qr/92.jpg" },
    { name: "", qr: "qr/93.jpg" },
    { name: "", qr: "qr/94.jpg" },
    { name: "", qr: "qr/95.jpg" },

    { name: "", qr: "qr/96.jpg" },
    { name: "", qr: "qr/97.jpg" },
    { name: "", qr: "qr/98.jpg" },
    { name: "", qr: "qr/99.jpg" },
    { name: "", qr: "qr/100.jpg" },

    { name: "", qr: "qr/101.jpg" },
    { name: "", qr: "qr/102.jpg" },
    { name: "", qr: "qr/103.jpg" },
    { name: "", qr: "qr/104.jpg" },
    { name: "", qr: "qr/105.jpg" },

    { name: "", qr: "qr/106.jpg" },
    { name: "", qr: "qr/107.jpg" },
    { name: "", qr: "qr/108.jpg" },
    { name: "", qr: "qr/109.jpg" },
    { name: "", qr: "qr/110.jpg" }
];
// ================= STATE =================
let zoomLevel = 1;
let startDistance = 0;

// ================= LOGIN =================
function login() {
    const pass = document.getElementById("password").value.trim();

    if (pass === PASSWORD) {

        document.getElementById("loginBox").classList.add("hidden");
        document.getElementById("mainBox").classList.remove("hidden");

        resetUI();

        toast("Đăng nhập thành công!", "🎉");

    } else {
        toast("Sai mật khẩu!", "❌");
    }
}

// ================= RESET UI =================
function resetUI() {
    document.getElementById("searchInput").value = "";
    document.getElementById("employeeList").innerHTML = "";

    document.getElementById("qrWrapper").classList.add("hidden");
}

// ================= SEARCH =================
function searchEmployee() {

    const key = document.getElementById("searchInput").value.trim().toLowerCase();
    const box = document.getElementById("employeeList");

    if (key === "") {
        box.innerHTML = "";
        return;
    }

    const result = employees.filter(e =>
        e.name.toLowerCase().includes(key)
    );

    if (result.length === 0) {
        box.innerHTML = `<p class="text-red-500 font-bold text-center">Không tìm thấy</p>`;
        return;
    }

    box.innerHTML = result.map(e => `
        <div onclick="showQR('${e.name}','${e.qr}')"
             class="p-3 bg-green-500 text-white rounded-xl cursor-pointer hover:bg-green-700 transition">
            ${e.name}
        </div>
    `).join("");
}

// ================= SHOW QR =================
function showQR(name, qr) {

    document.getElementById("employeeNamePopup").innerText = name;

    const img = document.getElementById("qrImage");
    img.src = qr;

    // reset zoom
    zoomLevel = 1;
    img.style.transform = "scale(1)";

    // show popup
    document.getElementById("qrWrapper").classList.remove("hidden");

    // hide search
    document.getElementById("searchInput").style.display = "none";
    document.getElementById("employeeList").style.display = "none";

    toast("Hiển thị QR: " + name, "📌");
}

// ================= BACK =================
function backToSearch() {

    document.getElementById("qrWrapper").classList.add("hidden");

    document.getElementById("searchInput").style.display = "block";
    document.getElementById("employeeList").style.display = "block";

    zoomLevel = 1;
    document.getElementById("qrImage").style.transform = "scale(1)";
}

// ================= ZOOM BUTTON =================
function zoomIn() {
    const img = document.getElementById("qrImage");

    zoomLevel += 0.2;
    if (zoomLevel > 3) zoomLevel = 3;

    img.style.transform = `scale(${zoomLevel})`;
}

function zoomOut() {
    const img = document.getElementById("qrImage");

    zoomLevel -= 0.2;
    if (zoomLevel < 1) zoomLevel = 1;

    img.style.transform = `scale(${zoomLevel})`;
}

function resetZoom() {
    const img = document.getElementById("qrImage");

    zoomLevel = 1;
    img.style.transform = "scale(1)";
}

// ================= PINCH ZOOM (2 NGÓN TAY) =================
const qrImage = document.getElementById("qrImage");

if (qrImage) {

    qrImage.addEventListener("touchstart", function (e) {
        if (e.touches.length === 2) {
            startDistance = getDistance(e.touches[0], e.touches[1]);
        }
    }, { passive: true });

    qrImage.addEventListener("touchmove", function (e) {
        if (e.touches.length === 2) {
            e.preventDefault();

            const currentDistance = getDistance(e.touches[0], e.touches[1]);

            if (startDistance === 0) return;

            let scaleChange = currentDistance / startDistance;

            zoomLevel *= scaleChange;

            if (zoomLevel < 1) zoomLevel = 1;
            if (zoomLevel > 3) zoomLevel = 3;

            qrImage.style.transform = `scale(${zoomLevel})`;

            startDistance = currentDistance;
        }
    }, { passive: false });
}

// ================= DISTANCE FUNCTION =================
function getDistance(t1, t2) {
    const dx = t2.clientX - t1.clientX;
    const dy = t2.clientY - t1.clientY;
    return Math.sqrt(dx * dx + dy * dy);
}

// ================= TOAST =================
function toast(msg, icon = "⭐") {

    const box = document.getElementById("toastBox");
    const text = document.getElementById("toastMessage");
    const ico = document.getElementById("toastIcon");

    text.innerText = msg;
    ico.innerText = icon;

    box.style.opacity = "1";
    box.style.transform = "translateY(0)";

    setTimeout(() => {
        box.style.opacity = "0";
        box.style.transform = "translateY(-100px)";
    }, 2000);
}

// ================= PASSWORD TOGGLE =================
function togglePassword() {
    const p = document.getElementById("password");
    p.type = (p.type === "password") ? "text" : "password";
}

// ================= IMAGE ERROR =================
let attempt = 0;

function handleImageError(img) {

    attempt++;

    if (attempt === 1) {
        img.src = "anh37.png";
    } else {
        img.style.display = "none";
        document.getElementById("svgFallback").classList.remove("hidden");
    }
}
    }
