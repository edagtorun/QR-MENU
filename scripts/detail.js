/*
URL'deki arama parametlerini(search-param) erisme
Js'de tarayici ile alakali verilere erismek istiyorsak window nesnesini kullaniriz.
iceisindeki location degeri URL detaylarini verir.

JS'de url'deki arama parametrelerini yonetmeye yarayan yerlesik bir class vardir.
Bu classin ismi: URLSearchParams
*/


//URL'deki parametleri yonetmemizi saglayacak bir nesne olusturduk
 const params = new URLSearchParams(window.location.search);

 /*
 Yukaridaki class'tan ornek almamiz sayesinde parametrelere erismeye
 ve guncellemeye yarayan methodlari kullanabilecegimiz bir nesne olustu
 bizde bu nesnenin icerisindekilere 'GET' methodu ile parametreler 
 arasindan istedigimizi cagirdik
*/
 const paramId = params.get('id');

 document.addEventListener("DOMContentLoaded", async () => {
    // 1. Api'den verileri al
    const res = await fetch("../db.json");

    const data = await res.json();
    console.log(paramId, data.menu);
    //2. veriler arasindan url'deki id'ye denk gelen veriyi al.
   const product = data.menu.find((item) => item.id == paramId);

   console.log(product);
    //3.sayfa icerigini elimizdeki veriye gore degistir.
    renderPage(product);
 });

 const outlet = document.getElementById('outlet')
 function renderPage(product){
    console.log(product);

    outlet.innerHTML = `
    <div class="d-flex justify-content-between fs-5">
    <a href="">
        <img width="40px" src="images/home.png" >
    </a>
    <p>anasayfa / ${product.category} / ${product.title.toLowerCase()} </p>
</div>    

<h1 class="text-center my-3 shadow">
    ${product.title}
</h1>
<img class="rounded object-fit-cover shadow
" src="${product.img}">

<h3 class="mt-4">
    <span>Ürünün Kategorisi:</span>
    <span class="text-success">${product.category} </span>
</h3>
<h3 class="mt-4">
    <span>Ürünün Fiyatı:</span>
    <span class="text-success">${(product.price * 30).toFixed(2)} ₺</span>
</h3>

<p class="lead">
    ${product.desc}
</p>
    `
 }