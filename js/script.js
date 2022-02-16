function tampilkan_enkripsi() {
    var plainTeks = document.getElementById("input-plainteks").value.split(" ").join("").toUpperCase();
        var key = document.getElementById("key").value;
        var panjangplainteks = plainTeks.length;
    
        var index = 0;
        var data = [];
        var rowdata = [];
        var result = [];
    
        var setpanjangperulangan = 0;
        var modulopanjangperulangan = panjangplainteks % key;
        if (modulopanjangperulangan == 0) {
            setpanjangperulangan = panjangplainteks;
        } else {
            setpanjangperulangan = panjangplainteks + ( key - modulopanjangperulangan );
        }
        console.log(setpanjangperulangan);
    
    
        // enkripsi
        for (let i = 0; i < setpanjangperulangan; i++) {
            rowdata.push(plainTeks[i]);
            if (rowdata.length == key || i == (setpanjangperulangan - 1)) {
                data.push(rowdata);
                rowdata = [];
            }
        }
    
        console.log(data);
        console.log(data.length);
    
        // menampilkan data enkripsi
        for(let i = 0; i < key; i++){
            for(let j = 0; j < data.length; j++){
                    result[index] = data[j][i];
                    index++;
                console.log(key);
            }
        }
    
        console.log(result);
        var hasilakhir = result;
        document.getElementById("result-enc").innerText = hasilakhir.join("");
}

function tampilkan_deskripsi() {
    var chipertext = document.getElementById("input-ciphertext").value.split(" ").join("").toUpperCase();
    var keycipher = document.getElementById("keycipher").value;
    var panjangchipertext = chipertext.length;

    var index = 0;
    var data = [];
    var rowdata = [];
    var result = [];

    var setpanjangperulangan = 0;
    var modulopanjangperulangan = panjangchipertext % keycipher;
    if (modulopanjangperulangan == 0) {
        setpanjangperulangan = panjangchipertext;
    } else {
        setpanjangperulangan = panjangchipertext + ( keycipher - modulopanjangperulangan );
    }
    console.log(setpanjangperulangan);

    var setpanjangperulangandeskripsi = setpanjangperulangan / keycipher;

    //deskripsi
    for (let i = 0; i < setpanjangperulangan; i++) {
        if(rowdata.length != setpanjangperulangan){
            rowdata.push(chipertext[i]);
            if (rowdata.length == setpanjangperulangandeskripsi || i == (setpanjangperulangandeskripsi - 1)) {
                data.push(rowdata);
                rowdata = [];
            }
        }
    }
    console.log(data);
    console.log(data.length);


    //menampilkan data deskripsi
    for(let i = 0; i < setpanjangperulangandeskripsi; i++){
        for(let j = 0; j < data.length; j++){
                result[index] = data[j][i];
                index++;
            console.log(key);
        }
    }
    console.log(result);
    document.getElementById("result-desc").innerText = result.join(" ");
}