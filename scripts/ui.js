import { buttonData } from "./constants.js";

const buttonsArea = document.getElementById("buttons");

// arayuz degisikligi yapan butun fonksiyonlari burada tanimlayacagiz. 
//ekranda guncelleme yapilacak hersey

//menulist divini cagirma 
const menuList = document.getElementById('menu-list');

export const renderMenuItems = (data) => {
//data dizisindeki herbir obje icin bir tane kart html'i olusturma
//olusturulan kartlari #menuList divinin icine aktarma
const cardsHTML = data.map((item)=>` 
<a
href="/detail.html?id=${item.id}"
id="card"
class="d-flex flex-column flex-md-row text-decoration-none text-dark gap-3"
>
<img class="rounded shadow img-fluid" 
src="${item.img}" />

<div>
  <div class="d-flex justify-content-between">
    <h5>${item.title}</h5>
    <p class="text-success fw-bold">${(item.price * 30).toFixed(2) }₺</p>
  </div>
  <p class="lead">
    ${item.desc}
  </p>
</div>
</a>`).join(' ');
//Join methodu diziyi metine cevirir.
menuList.innerHTML = cardsHTML;
};

//dizideki herbir eleman icin ekrana buton basan fonksiyon

export const renderButtons = (activeText) => { 
buttonsArea.innerHTML = ''; // eski butonlari temizleme. 

  //! butonlarin her biri icin asagidaki adimlari izle;
  buttonData.forEach((btn) => {
    
    //1. button elementi olustur
    const buttonEle = document.createElement('button');
    //2. class belirle
    buttonEle.className = 'btn btn-outline-dark';
    //3. data-id degerini tanimla
    buttonEle.setAttribute('data-id', btn.value);
    //4. icindeki yaziyi belirle
    buttonEle.innerText = btn.text;
    //5.5 egerki butonun yazisi aktif yazisi ile eslesirse siyah yap

    if(btn.text === activeText){
      buttonEle.classList.add("btn-dark", 'text-white');
    }
    //5. butonu html'a gonder
    buttonsArea.appendChild(buttonEle);

  });
};

/*
<button data-id="all" class="btn btn-outline-dark">Hepsi</button> 
*/

