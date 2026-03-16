let nama, jml, listPilihan = [], pilihanTerpilih, email;

function prosesStep1() {
    nama = document.getElementById('inputNama').value;
    jml = parseInt(document.getElementById('inputJml').value);

        if (!nama || isNaN(jml) || jml <= 0) {
            alert("Mohon isi Nama dan Jumlah Pilihan dengan benar!");
            return;
            }

        const container = document.getElementById('containerPilihan');
        container.innerHTML = "";
        for (let i = 1; i <= jml; i++) {
            container.innerHTML += `
                <div>Pilihan ${i} : <input type="text" class="teksPilihan" placeholder="Teks Pilihan ${i}"></div>
                `;
            }
            document.getElementById('step2').classList.remove('hidden');
        }

function prosesStep2() {
    const inputs = document.querySelectorAll('.teksPilihan');
    listPilihan = [];
    let valid = true;

    inputs.forEach(input => {
        if (!input.value) valid = false;
            listPilihan.push(input.value);
            });

        if (!valid) {
            alert("Semua teks pilihan harus diisi!");
            return;
            }

    const container = document.getElementById('containerRadio');
        container.innerHTML = "";
        listPilihan.forEach((teks, index) => {
            container.innerHTML += `
                <div>
                    <input type="radio" name="pilihanFinal" value="${teks}" id="r${index}">
                    <label for="r${index}">${teks}</label>
                    </div>
                `;
            });
            document.getElementById('step3').classList.remove('hidden');
        }

function prosesStep3() {
        const terpilih = document.querySelector('input[name="pilihanFinal"]:checked');
        if (!terpilih) {
            alert("Silakan pilih salah satu opsi!");
            return;
            }
            pilihanTerpilih = terpilih.value;
            document.getElementById('step4').classList.remove('hidden');
        }
 
function prosesStep4() {
        email = document.getElementById('inputEmail').value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Format email tidak valid (contoh: nama@domain.com)!");
            return;
            }

        tampilkanHasil();
        }

function tampilkanHasil() {
        const kalimat = `Hallo, nama saya ${nama}, email ${email} saya mempunyai sejumlah ${jml} pilihan yaitu ${listPilihan.join(', ')}, dan saya memilih ${pilihanTerpilih}`;
        document.getElementById('hasilAkhir').innerText = kalimat;
        document.getElementById('step5').classList.remove('hidden');
        }
   