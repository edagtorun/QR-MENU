import { renderMenuItems} from "./scripts/ui.js";
import { renderButtons } from "./scripts/ui.js";

const buttonsArea = document.getElementById("buttons");


//* datayi global scope'da tanimlama

let data;

//menu verilerini json dosyasindan ceken fonsiyon

async function fetchMenu (){
   
    //* api'den verileri alma
    const res =  await fetch("./db.json");

    // json verisini js'ye cevirme
    data = await res.json(); 
}

//olay izle (Sayfa yukleme)
window.addEventListener('DOMContentLoaded',async () => {
    //ekrana butonlari bas
    renderButtons('Hepsi');
    
// verileri ceken fonksiyonu calistir.
    fetchMenu()
//yukaridaki fonsiyon basarili olursa ekrana kartlari basan fonksiyonu calistir.
    .then(() => renderMenuItems(data.menu));
}) ;

//butonlara tiklanma olayini izle
buttonsArea.addEventListener('click',(event)=>{

    if(event.target.id == "buttons")return;
//filtrelenecek kategori ismini belirler..

//active olan butonu belirlemek icin butonlari ekrana tekrar basma
renderButtons(event.target.innerText);

    const selectedCategory = event.target.dataset.id;

    if(selectedCategory === "all"){
        //butun menu elemanlarini filtrelemeden ekrana bas.
        renderMenuItems(data.menu);
    }else{
        //urunlerin arasindan kategori ismi bizim sectigimiz kategori ismine  esit olanlari al
const filtred = data.menu.filter (
    (item)=> item.category === selectedCategory 
);

//filtrelenen verileri ekrana basma
renderMenuItems(filtred);
    }

});