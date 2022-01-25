const inputUang = document.querySelectorAll('.input-uang');
const hasil = document.querySelectorAll('.hasil');
const total = document.querySelector('.total');
const arrayRupiah = [100000,75000,50000,20000,10000,5000,2000,1000,1000,500,200,100];
const form = document.querySelector('#form-input');
let selekBaris = null;


for(let i =0; i<arrayRupiah.length; i++){
    inputUang[i].addEventListener('keyup',function(){
hasil[i].value = inputUang[i].value * arrayRupiah[i]
    });
}

for (let i=0; i<hasil.length; i++) {
    hasil[i].addEventListener('keyup', function () {
        let result=0;
        for (let j=0; j<hasil.length; j++) {
            if (hasil[j].value=="") result+=0;
            else {
                result+=parseFloat(hasil[j].value);
            }
        }
        total.value=result;
    });
}

// form.addEventListener('submit',function(e){
//     e.preventDefault();

//     const formulir = bacaData();
//     if(selekBaris === null){
//         insertData(formulir)
//     }else{
//         updateData(formulir)
//     }
//     form.reset();
// });

function tambahdata(){
    const formulir = bacaData()
    if(selekBaris === null){
        insertData(formulir)
        tambahLocal(formulir)
    }else{
        updateData(formulir)
    }
    form.reset();
}

function bacaData(){
const formulir = {}
formulir["seratusRibu"] = inputUang[0].value;
formulir["tujuhLima"] = inputUang[1].value;
formulir["limaPuluh"] = inputUang[2].value;
formulir["duaPuluh"] = inputUang[3].value;
formulir["sepuluhRibu"] = inputUang[4].value;
formulir["limaRibu"] = inputUang[5].value;
formulir["duaRibu"] = inputUang[6].value;
formulir["seribu"] = inputUang[7].value;
formulir["seribuCoin"] = inputUang[8].value;
formulir["limaRatus"] = inputUang[9].value;
formulir["duaRatus"] = inputUang[10].value;
formulir["seratusCoin"] = inputUang[11].value;
console.log(formulir)
return formulir
    
}

function insertData(data){
    const table = document.getElementById('list-data').getElementsByTagName('tbody')[0];
    const tr = document.querySelectorAll('tr');
    const barisBaru = table.insertRow(table.length);
    let cell1 = barisBaru.insertCell(0);
    cell1.innerHTML = "Majelis " + tr.length
    let cell2 = barisBaru.insertCell(1);
    cell2.innerHTML = `<i class="fas fa-edit edit" onclick="edit(this)"></i><i class="fas fa-trash hapus" onclick="hapus(this)"></i>`;
    let cell3 = barisBaru.insertCell(2);
    cell3.innerHTML = data.seratusRibu;
    let cell4 = barisBaru.insertCell(3);
    cell4.innerHTML = data.tujuhLima;
    let cell5 = barisBaru.insertCell(4);
    cell5.innerHTML = data.limaPuluh;
    let cell6 = barisBaru.insertCell(5);
    cell6.innerHTML = data.duaPuluh;
    let cell7 = barisBaru.insertCell(6);
    cell7.innerHTML = data.sepuluhRibu;
    let cell8 = barisBaru.insertCell(7);
    cell8.innerHTML = data.limaRibu;
    let cell9 = barisBaru.insertCell(8);
    cell9.innerHTML = data.duaRibu;
    let cell10 = barisBaru.insertCell(9);
    cell10.innerHTML = data.seribu;
    let cell11 = barisBaru.insertCell(10);
    cell11.innerHTML = data.seribuCoin;
    let cell12 = barisBaru.insertCell(11);
    cell12.innerHTML = data.limaRatus;
    let cell13 = barisBaru.insertCell(12);
    cell13.innerHTML = data.duaRatus;
    let cell14 = barisBaru.insertCell(13);
    cell14.innerHTML = data.seratusCoin;
    form.reset();
}

function edit(td){
    selekBaris = td.parentElement.parentElement
    inputUang[0].value = selekBaris.cells[2].innerHTML
    inputUang[1].value = selekBaris.cells[3].innerHTML
    inputUang[2].value = selekBaris.cells[4].innerHTML
    inputUang[3].value = selekBaris.cells[5].innerHTML
    inputUang[4].value = selekBaris.cells[6].innerHTML
    inputUang[5].value = selekBaris.cells[7].innerHTML
    inputUang[6].value = selekBaris.cells[8].innerHTML
    inputUang[7].value = selekBaris.cells[9].innerHTML
    inputUang[8].value = selekBaris.cells[10].innerHTML
    inputUang[9].value = selekBaris.cells[11].innerHTML
    inputUang[10].value = selekBaris.cells[12].innerHTML
    inputUang[11].value = selekBaris.cells[13].innerHTML
    console.log(row)
}

function hapus(td){
    alert('apakah anda yakin ingin menghapus?')
    selekBaris = td.parentElement.parentElement
    selekBaris.remove();
}
function updateData(formulir){
    selekBaris.cells[2].innerHTML = formulir.seratusRibu;
    selekBaris.cells[3].innerHTML = formulir.tujuhLima;
    selekBaris.cells[4].innerHTML = formulir.limaPuluh;
    selekBaris.cells[5].innerHTML = formulir.duaPuluh;
    selekBaris.cells[6].innerHTML = formulir.sepuluhRibu;
    selekBaris.cells[7].innerHTML = formulir.limaRibu;
    selekBaris.cells[8].innerHTML = formulir.duaRibu;
    selekBaris.cells[9].innerHTML = formulir.seribu;
    selekBaris.cells[10].innerHTML = formulir.seribuCoin;
    selekBaris.cells[11].innerHTML = formulir.limaRatus;
    selekBaris.cells[12].innerHTML = formulir.duaRatus;
    selekBaris.cells[13].innerHTML = formulir.seratusCoin;
}

function resetFormulir(){
    inputUang[0].value =""
    inputUang[1].value =""
    inputUang[2].value =""
    inputUang[3].value =""
    inputUang[4].value =""
    inputUang[5].value =""
    inputUang[6].value =""
    inputUang[7].value =""
    inputUang[8].value =""
    inputUang[9].value =""
    inputUang[10].value =""
    inputUang[11].value =""
    inputUang[12].value =""
}


function getList(){
    let list;
    if(localStorage.getItem("list") === null){
        list=[];
    }else{
        list = JSON.parse(localStorage.getItem("list"));
    }
    return list;
}

function tambahLocal(isiList){
    var list = getList();

    list.push(isiList);
    localStorage.setItem("list",JSON.stringify(list));
}
