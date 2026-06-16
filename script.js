const PASSWORD = "sc";

// ================= DATA =================
const employees = [
    { name: "BUI DINH TOI", qr: "qr/01.jpg" },
    { name: "LE DUC HUY", qr: "qr/02.jpg" },
    { name: "DO CONG TUYEN", qr: "qr/03.jpg" },
    { name: "NGUYEN THI LOAN", qr: "qr/04.jpg" },

    { name: "AU THI KIM LUYEN", qr: "qr/30.jpg" },
    { name: "BAN THU NHAN", qr: "qr/31.jpg" },
    { name: "BUI THI SON CA", qr: "qr/32.jpg" },
    { name: "BUI THI XUAN HIEU", qr: "qr/33.jpg" },
    { name: "DAM VAN VUONG", qr: "qr/34.jpg" },
    { name: "DANG THI HANG", qr: "qr/35.jpg" },
    { name: "DAO KIM NGAN", qr: "qr/36.jpg" },
    { name: "DINH THI THU HIEN", qr: "qr/37.jpg" },
    { name: "DO DIEU HUONG", qr: "qr/38.jpg" },
    { name: "DO DUC HIEP", qr: "qr/39.jpg" },
    { name: "DO HOANG CAM LY", qr: "qr/40.jpg" },
    { name: "DO HOANG HAI", qr: "qr/41.jpg" },
    { name: "DO THI MAI TRANG", qr: "qr/42.jpg" },
    { name: "DO TUAN ANH", qr: "qr/43.jpg" },
    { name: "DOAN THI KIM UYEN", qr: "qr/44.jpg" },
    { name: "DUONG NHU QUAN", qr: "qr/45.jpg" },
    { name: "DUONG TON BAO KHUONG", qr: "qr/46.jpg" },
    { name: "HA THI THUONG", qr: "qr/47.jpg" },
    { name: "HO NGOC TRUNG", qr: "qr/48.jpg" },
    { name: "HOANG DINH TAI", qr: "qr/49.jpg" },
    { name: "HOANG THI CHUOC", qr: "qr/50.jpg" },
    { name: "HOANG THI LOAN", qr: "qr/51.jpg" },
    { name: "HOANG THI MINH TRAM", qr: "qr/52.jpg" },
    { name: "HOANG THI THOA", qr: "qr/53.jpg" },
    { name: "HOANG THI VAN", qr: "qr/54.jpg" },
    { name: "HOANG THI VAN ANH", qr: "qr/55.jpg" },
    { name: "HOANG VAN HUY", qr: "qr/56.jpg" },
    { name: "HUYNH TAI NGUYEN", qr: "qr/57.jpg" },
    { name: "LA DUY KHOA", qr: "qr/58.jpg" },
    { name: "LE NGOC THIEN PHUC", qr: "qr/59.jpg" },
    { name: "LE NGUYEN QUYNH DUONG", qr: "qr/60.jpg" },
    { name: "LE THI HAI YEN", qr: "qr/61.jpg" },
    { name: "LE THI THUY DUNG", qr: "qr/62.jpg" },
    { name: "LE THI THUY TRINH", qr: "qr/63.jpg" },
    { name: "LUONG THI LY", qr: "qr/64.jpg" },
    { name: "LY THI KHANH LY", qr: "qr/65.jpg" },
    { name: "LY VAN LONG", qr: "qr/66.jpg" },
    { name: "NGO THI VUI", qr: "qr/67.jpg" },
    { name: "NGO VAN THANH CONG", qr: "qr/68.jpg" },
    { name: "NGUYEN DINH THANG", qr: "qr/69.jpg" },
    { name: "NGUYEN DUC DUY", qr: "qr/70.jpg" },
    { name: "NGUYEN HUY DUONG", qr: "qr/71.jpg" },
    { name: "NGUYEN LE NGOC DIEU", qr: "qr/72.jpg" },
    { name: "NGUYEN PHUOC TRI", qr: "qr/73.jpg" },
    { name: "NGUYEN PHUONG LINH", qr: "qr/74.jpg" },
    { name: "NGUYEN QUYNH NHU", qr: "qr/75.jpg" },
    { name: "NGUYEN THANH BINH", qr: "qr/76.jpg" },
    { name: "NGUYEN THI BE", qr: "qr/77.jpg" },
    { name: "NGUYEN THI BICH HANH", qr: "qr/78.jpg" },
    { name: "NGUYEN THI BICH NGOC", qr: "qr/79.jpg" },
    { name: "NGUYEN THI HAI", qr: "qr/80.jpg" },
    { name: "NGUYEN THI HANG", qr: "qr/81.jpg" },
    { name: "NGUYEN THI HIEN", qr: "qr/82.jpg" },
    { name: "NGUYEN THI HOA", qr: "qr/83.jpg" },
    { name: "NGUYEN THI KIM DIEU", qr: "qr/84.jpg" },
    { name: "NGUYEN THI MAY", qr: "qr/85.jpg" },
    { name: "NGUYEN THI NAM", qr: "qr/86.jpg" },
    { name: "NGUYEN THI NGOC DUYEN", qr: "qr/87.jpg" },
    { name: "NGUYEN THI QUYEN", qr: "qr/88.jpg" },
    { name: "NGUYEN THI QUYEN", qr: "qr/89.jpg" },
    { name: "NGUYEN THI THANH THAO", qr: "qr/90.jpg" },
    { name: "NGUYEN THI THU THUY", qr: "qr/91.jpg" },
    { name: "NGUYEN THI THU TRANG", qr: "qr/92.jpg" },
    { name: "NGUYEN THI TUYET MAI", qr: "qr/93.jpg" },
    { name: "NGUYEN THI VY", qr: "qr/94.jpg" },
    { name: "NGUYEN TRAN ANH DUC", qr: "qr/95.jpg" },
    { name: "NGUYEN TRAN CAM TIEN", qr: "qr/96.jpg" },
    { name: "NGUYEN VAN THANH", qr: "qr/97.jpg" },
    { name: "NONG BICH PHUONG", qr: "qr/98.jpg" },
    { name: "PHAM BICH HA", qr: "qr/99.jpg" },
    { name: "PHAM DUY HUNG", qr: "qr/100.jpg" },
    { name: "PHAM THI HANG", qr: "qr/101.jpg" },
    { name: "PHAM THI PHUONG LOAN", qr: "qr/102.jpg" },
    { name: "PHAM THI HUYEN", qr: "qr/103.jpg" },
    { name: "PHAM VAN HIEU", qr: "qr/104.jpg" },
    { name: "PHAM VAN TRUONG", qr: "qr/105.jpg" },
    { name: "PHAM XUAN THANH", qr: "qr/106.jpg" },
    { name: "PHAN NGUYEN BAO NGOC", qr: "qr/107.jpg" },
    { name: "PHAN THI THU HOAI", qr: "qr/108.jpg" },
    { name: "PHUNG GIA BAO", qr: "qr/109.jpg" },
    { name: "PHUNG NHU TUYET", qr: "qr/110.jpg" },
    { name: "PHUNG THI HONG PHUOC", qr: "qr/111.jpg" },
    { name: "PHUNG THI TAM", qr: "qr/112.jpg" },
    { name: "THACH LE UYEN PHUONG", qr: "qr/113.jpg" },
    { name: "TRAN DINH HOANG", qr: "qr/114.jpg" },
    { name: "TRAN KHANH LINH", qr: "qr/115.jpg" },
    { name: "TRAN THANH LONG", qr: "qr/116.jpg" },
    { name: "TRAN THI HONG NGOC", qr: "qr/117.jpg" },
    { name: "TRAN THI THU HANG", qr: "qr/118.jpg" },
    { name: "TRAN THI THU THUONG", qr: "qr/119.jpg" },
    { name: "TRAN THI UYEN PHUONG", qr: "qr/120.jpg" },
    { name: "TRAN VAN HOA", qr: "qr/121.jpg" },
    { name: "VO THI HUONG GIANG", qr: "qr/122.jpg" },
    { name: "VU LE DUC ANH", qr: "qr/123.jpg" },
    { name: "VU PHUONG THAO", qr: "qr/124.jpg" },
    { name: "VU THI YEN NHU", qr: "qr/125.jpg" }
];
// ================= STATE =================
let zoomLevel = 1;
let startDistance = 0;

// ================= LOGIN =================
function login() {
    const input = document.getElementById("password");
    if (!input) return;

    const pass = input.value.trim();

    console.log("INPUT:", pass);
    console.log("PASSWORD:", PASSWORD);

    if (pass === PASSWORD) {
        document.getElementById("loginBox").classList.add("hidden");
        document.getElementById("mainBox").classList.remove("hidden");

        resetUI();
        toast("Đăng nhập thành công!", "🎉");
    } else {
        toast("Sai mật khẩu!", "❌");
    }
}

// ================= RESET =================
function resetUI() {
    document.getElementById("searchInput").value = "";
    document.getElementById("employeeList").innerHTML = "";

    document.getElementById("qrWrapper").classList.add("hidden");
    document.getElementById("searchInput").style.display = "block";
    document.getElementById("employeeList").style.display = "block";
}

// ================= SEARCH =================
function searchEmployee() {
    const key = document.getElementById("searchInput").value.trim().toLowerCase();
    const box = document.getElementById("employeeList");

    if (!key) {
        box.innerHTML = "";
        return;
    }

    const result = employees.filter(e =>
        e.name && e.name.toLowerCase().includes(key)
    );

    if (result.length === 0) {
        box.innerHTML = `<p class="text-red-500 font-bold text-center">Không tìm thấy</p>`;
        return;
    }

    box.innerHTML = result.map((e, index) => `
        <div class="item bg-green-500 text-white p-3 rounded-xl cursor-pointer hover:bg-green-700 transition"
             data-name="${e.name}"
             data-qr="${e.qr}">
            ${e.name}
        </div>
    `).join("");

    // click event (KHÔNG dùng onclick string)
    box.onclick = (ev) => {
        const item = ev.target.closest(".item");
        if (!item) return;

        showQR(item.dataset.name, item.dataset.qr);
    };
}

// ================= SHOW QR =================
function showQR(name, qr) {
    document.getElementById("employeeNamePopup").innerText = name;

    const img = document.getElementById("qrImage");
    img.src = qr;

    zoomLevel = 1;
    img.style.transform = "scale(1)";

    document.getElementById("qrWrapper").classList.remove("hidden");
    document.getElementById("searchInput").style.display = "none";
    document.getElementById("employeeList").style.display = "none";

    toast("Hiển thị QR: " + name, "📌");
}

// ================= BACK =================
function backToSearch() {
    document.getElementById("qrWrapper").classList.add("hidden");

    document.getElementById("searchInput").style.display = "block";
    document.getElementById("employeeList").style.display = "block";

    document.getElementById("employeeList").innerHTML = "";

    resetZoom();
}

// ================= ZOOM =================
function zoomIn() {
    zoomLevel = Math.min(zoomLevel + 0.2, 3);
    updateZoom();
}

function zoomOut() {
    zoomLevel = Math.max(zoomLevel - 0.2, 1);
    updateZoom();
}

function resetZoom() {
    zoomLevel = 1;
    updateZoom();
}

function updateZoom() {
    const img = document.getElementById("qrImage");
    if (img) img.style.transform = `scale(${zoomLevel})`;
}

// ================= PINCH ZOOM =================
document.addEventListener("DOMContentLoaded", () => {
    const qrImage = document.getElementById("qrImage");
    if (!qrImage) return;

    qrImage.addEventListener("touchstart", (e) => {
        if (e.touches.length === 2) {
            startDistance = getDistance(e.touches[0], e.touches[1]);
        }
    }, { passive: true });

    qrImage.addEventListener("touchmove", (e) => {
        if (e.touches.length === 2) {
            e.preventDefault();

            const currentDistance = getDistance(e.touches[0], e.touches[1]);
            if (!startDistance) return;

            let scaleChange = currentDistance / startDistance;

            zoomLevel += (scaleChange - 1) * 0.5;
            zoomLevel = Math.max(1, Math.min(zoomLevel, 3));

            updateZoom();
            startDistance = currentDistance;
        }
    }, { passive: false });
});

// ================= DISTANCE =================
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

    if (!box || !text || !ico) return;

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
    if (!p) return;

    p.type = (p.type === "password") ? "text" : "password";
}

// ================= IMAGE ERROR =================
function handleImageError(img) {
    let attempt = img.dataset.attempt || 0;
    attempt++;
    img.dataset.attempt = attempt;

    if (attempt == 1) {
        img.src = "anh37.png";
    } else {
        img.style.display = "none";

        const svg = document.getElementById("svgFallback");
        if (svg) svg.classList.remove("hidden");
    }
}
