function myFunction() {
    var nilai_nik = document.getElementById("id_nik").value;
    var nilai_nama = document.getElementById("id_nama").value;
    var nilai_jns_klm = document.getElementsByName("jns_klm");
    let nilai_gol = document.getElementById("id_select").value;

    let nilai_potongan = 150000;
    let nilai_tunjangan = 200000;

    let gajiPokok_1 = 1000000;
    let gajiPokok_2 = 2000000;
    let gajiPokok_3 = 4000000;
    let gajiPokok_4 = 6000000;
    let gajiPokok_5 = 9000000;
    
    let gajiTotal_1 = gajiPokok_1 + nilai_tunjangan - nilai_potongan;
    let gajiTotal_2 = gajiPokok_2 + nilai_tunjangan - nilai_potongan;
    let gajiTotal_3 = gajiPokok_3 + nilai_tunjangan - nilai_potongan;
    let gajiTotal_4 = gajiPokok_4 + nilai_tunjangan - nilai_potongan;
    let gajiTotal_5 = gajiPokok_5 + nilai_tunjangan - nilai_potongan;
    
    if (nilai_gol == "I. (Office Boy)") {
        for(i = 0; i < nilai_jns_klm.length; i++) {
            if (nilai_jns_klm[i].checked)
            document.getElementById("output").innerHTML = 
            `NIK        : ${nilai_nik}<br> Nama  : ${nilai_nama}<br> Jenis Kelamin : ${nilai_jns_klm[i].value}<br> Golongan  : ${nilai_gol}<br> Gaji Total : Rp.${gajiTotal_1}`;
        }
    } else if (nilai_gol == "II. (Sales)") {
        for(i = 0; i < nilai_jns_klm.length; i++) {
            if (nilai_jns_klm[i].checked)
            document.getElementById("output").innerHTML = 
            `NIK        : ${nilai_nik}<br> Nama  : ${nilai_nama}<br> Jenis Kelamin : ${nilai_jns_klm[i].value}<br> Golongan  : ${nilai_gol}<br> Gaji Total : Rp.${gajiTotal_2}`;
        }
    } else if (nilai_gol == "III. (Administrasi)") {
        for(i = 0; i < nilai_jns_klm.length; i++) {
            if (nilai_jns_klm[i].checked)
            document.getElementById("output").innerHTML = 
            `NIK        : ${nilai_nik}<br> Nama  : ${nilai_nama}<br> Jenis Kelamin : ${nilai_jns_klm[i].value}<br> Golongan  : ${nilai_gol}<br> Gaji Total : Rp.${gajiTotal_3}`;
        }
    } else if (nilai_gol == "IV. (Supervisor)") {
        for(i = 0; i < nilai_jns_klm.length; i++) {
            if (nilai_jns_klm[i].checked)
            document.getElementById("output").innerHTML = 
            `NIK        : ${nilai_nik}<br> Nama  : ${nilai_nama}<br> Jenis Kelamin : ${nilai_jns_klm[i].value}<br> Golongan  : ${nilai_gol}<br> Gaji Total : Rp.${gajiTotal_4}`;
        }
    } else if (nilai_gol == "V. (Pimpinan)") {
        for(i = 0; i < nilai_jns_klm.length; i++) {
            if (nilai_jns_klm[i].checked)
            document.getElementById("output").innerHTML = 
            `NIK        : ${nilai_nik}<br> Nama  : ${nilai_nama}<br> Jenis Kelamin : ${nilai_jns_klm[i].value}<br> Golongan  : ${nilai_gol}<br> Gaji Total : Rp.${gajiTotal_5}`;
        }
    } else {
        for(i = 0; i < nilai_jns_klm.length; i++) {
            if (nilai_jns_klm[i].checked)
            document.getElementById("output").innerHTML = 
            "Isi Pilihan Golongan dengan Benar!";
        }
    }
}