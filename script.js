const form = document.getElementById("formEkstrakurikuler");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const nis = document.getElementById("nis").value;
    const kelas = document.getElementById("kelas").value;
    const tanggalLahir = document.getElementById("tanggal_lahir").value;
    const email = document.getElementById("email").value;
    const telepon = document.getElementById("telepon").value;

    const jenisKelamin = document.querySelector(
        'input[name="jenis_kelamin"]:checked'
    ).value;

    const ekstrakurikuler = document.querySelectorAll(
        'input[name="ekstrakurikuler"]:checked'
    );

    const daftarEkskul = [];

    ekstrakurikuler.forEach(function(item) {
        daftarEkskul.push(item.value);
    });

    const ekskul = daftarEkskul.join(", ");

    buatTabel(
        nama,
        nis,
        kelas,
        tanggalLahir,
        jenisKelamin,
        ekskul,
        email,
        telepon
    );
});


function buatTabel(
    nama,
    nis,
    kelas,
    tanggalLahir,
    jenisKelamin,
    ekskul,
    email,
    telepon
) {

    const hasil = document.getElementById("hasil");

    hasil.innerHTML = "";

    const judul = document.createElement("h3");
    judul.textContent = "Data Pendaftaran Ekstrakurikuler";

    const tabel = document.createElement("table");
    tabel.className = "tabel-hasil";

    tabel.innerHTML = `
        <tr>
            <th>Data</th>
            <th>Informasi</th>
        </tr>
        <tr>
            <td>Nama Lengkap</td>
            <td>${nama}</td>
        </tr>
        <tr>
            <td>NIS</td>
            <td>${nis}</td>
        </tr>
        <tr>
            <td>Kelas</td>
            <td>${kelas}</td>
        </tr>
        <tr>
            <td>Tanggal Lahir</td>
            <td>${tanggalLahir}</td>
        </tr>
        <tr>
            <td>Jenis Kelamin</td>
            <td>${jenisKelamin}</td>
        </tr>
        <tr>
            <td>Ekstrakurikuler</td>
            <td>${ekskul}</td>
        </tr>
        <tr>
            <td>Alamat Email</td>
            <td>${email}</td>
        </tr>
        <tr>
            <td>Nomor Telepon</td>
            <td>${telepon}</td>
        </tr>
    `;

    hasil.appendChild(judul);
    hasil.appendChild(tabel);
}
