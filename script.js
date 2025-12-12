let pupuk_urea = 0;
let pupuk_phonska = 0;

    function set_angka() {
        pupuk_urea = parseInt(document.getElementById("ur").value) || 0;
        pupuk_phonska = parseInt(document.getElementById("phn").value) || 0;

        document.getElementById("p1").textContent = pupuk_urea;
        document.getElementById("p2").textContent = pupuk_phonska;

        document.getElementById("history").textContent = "";
        document.getElementById("selesai").textContent = "";
    }

    function kurangi() {
        let k1 = parseInt(document.getElementById("k1").value) || 0;
        let k2 = parseInt(document.getElementById("k2").value) || 0;

        pupuk_urea -= k1;
        pupuk_phonska -= k2;

        let history = document.getElementById("history");
        history.textContent += `kurang ${k1} dan ${k2} → sisa: ${pupuk_urea}, ${pupuk_phonska}\n`;

        document.getElementById("p1").textContent = pupuk_urea;
        document.getElementById("p2").textContent = pupuk_phonska;

        if (pupuk_urea <= 0 && pupuk_phonska <= 0) {
            document.getElementById("selesai").textContent = "kedua angka sudah habis!";
        }
document.getElementById("k1").value = "";
document.getElementById("k2").value = "";
    }

    document.getElementById("btn").addEventListener("click", kurangi);
    document.getElementById("setBtn").addEventListener("click", set_angka);