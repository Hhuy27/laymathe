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
