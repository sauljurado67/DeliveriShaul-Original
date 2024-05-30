
//------- Animacion menu hamburguesa --------------------------
document.querySelector(".bars__menu").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
}

//-------- Creamos contenido del menu ----------------------

let nombreHamb1 = "Hamburguesa Simple";
let nombreHamb2 = "Hamburguesa Doble";
let nombreHamb3 = "Hamburguesa Triple";
let nombreHamb4 = "Hamburguesa Tapa Arteria";

let precioHamb1 = "$ 2000";
let precioHamb2 = "$ 3000";
let precioHamb3 = "$ 4000";
let precioHamb4 = "$ 5000";

let imgHamb1 = "img/HS.png";
let imgHamb2 = "img/HD.png";
let imgHamb3 = "img/HT.png";
let imgHamb4 = "img/HTA.png";

let nombreMila1 = "Milanesa de Carne Simple";
let nombreMila2 = "Milanesa de Carne Completa";
let nombreMila3 = "Milanesa de Pollo Simple";
let nombreMila4 = "Milanesa de Pollo Completa";

let precioMila1 = "$ 4000";
let precioMila2 = "$ 5000";
let precioMila3 = "$ 4000";
let precioMila4 = "$ 5000";

let imgMila1 = "img/MPC.png";
let imgMila2 = "img/MSC.png";
let imgMila3 = "img/MCV.png";
let imgMila4 = "img/MPS.png";

let nombreLomi1 = "Lomito de Carne Simple";
let nombreLomi2 = "Lomito de Carne Completo";
let nombreLomi3 = "Lomito de Cerdo Simple";
let nombreLomi4 = "Lomito de Cerdo Completo";

let precioLomi1 = "$ 5000";
let precioLomi2 = "$ 6000";
let precioLomi3 = "$ 6000";
let precioLomi4 = "$ 7000";

let imgLomi1 = "img/LSV.png";
let imgLomi2 = "img/LCV.png";
let imgLomi3 = "img/LSC.png";
let imgLomi4 = "img/LCC.png";

let nombrePizza1 = "Pizza Especial";
let nombrePizza2 = "Pizza Calabresa";
let nombrePizza3 = "Pizza Fugazzeta";
let nombrePizza4 = "Pizza Campestre";

let precioPizza1 = " $ 3000";
let precioPizza2 = " $ 4000";
let precioPizza3 = " $ 5000";
let precioPizza4 = " $ 6000";

let imgPizza1 = "img/PS.png";
let imgPizza2 = "img/PC.png";
let imgPizza3 = "img/PF.png";
let imgPizza4 = "img/PCA.png";

let nombreEmpa1 = "Empanadas de Pollo";
let nombreEmpa2 = "Empanadas de Carne";
let nombreEmpa3 = "Empanadas de Jamón y Queso";
let nombreEmpa4 = "Empanadas Arabes";

let precioEmpa1 = "$ 4000";
let precioEmpa2 = "$ 5000";
let precioEmpa3 = "$ 5000";
let precioEmpa4 = "$ 4000";

let imgEmpa1 = "img/EP.png";
let imgEmpa2 = "img/EC.png";
let imgEmpa3 = "img/EJQ.png";
let imgEmpa4 = "img/EA2.png";

let nombrePapa1 = "Porción de Papas fritas";
let nombrePapa2 = "Milapapa";
let nombrePapa3 = "Salchipapa";
let nombrePapa4 = "Albondipapa";

let precioPapa1 = "$ 3000";
let precioPapa2 = "$ 4000";
let precioPapa3 = "$ 4000";
let precioPapa4 = "$ 4000";

let imgPapa1 = "img/f5.png";
let imgPapa2 = "img/MP.png";
let imgPapa3 = "img/SP.png";
let imgPapa4 = "img/AP.png";

let codigo1 = "hamburguesas"
let codigo2 = "milanesas"
let codigo3 = "lomitos"
let codigo4 = "pizzas"
let codigo5 = "empanadas"
let codigo6 = "papas"

const menu = [
    [nombreHamb1, precioHamb1, imgHamb1,codigo1],
    [nombreHamb2, precioHamb2, imgHamb2,codigo1],
    [nombreHamb3, precioHamb3, imgHamb3,codigo1],
    [nombreHamb4, precioHamb4, imgHamb4,codigo1],
    [nombreMila1, precioMila1, imgMila1,codigo2],
    [nombreMila2, precioMila2, imgMila2,codigo2],
    [nombreMila3, precioMila3, imgMila3,codigo2],
    [nombreMila4, precioMila4, imgMila4,codigo2],
    [nombreLomi1, precioLomi1, imgLomi1,codigo3],
    [nombreLomi2, precioLomi2, imgLomi2,codigo3],
    [nombreLomi3, precioLomi3, imgLomi3,codigo3],
    [nombreLomi4, precioLomi4, imgLomi4,codigo3],
    [nombrePizza1, precioPizza1, imgPizza1,codigo4],
    [nombrePizza2, precioPizza2, imgPizza2,codigo4],
    [nombrePizza3, precioPizza3, imgPizza3,codigo4],
    [nombrePizza4, precioPizza4, imgPizza4,codigo4],
    [nombreEmpa1, precioEmpa1, imgEmpa1,codigo5],
    [nombreEmpa2, precioEmpa2, imgEmpa2,codigo5],
    [nombreEmpa3, precioEmpa3, imgEmpa3,codigo5],
    [nombreEmpa4, precioEmpa4, imgEmpa4,codigo5],
    [nombrePapa1, precioPapa1, imgPapa1,codigo6],
    [nombrePapa2, precioPapa2, imgPapa2,codigo6],
    [nombrePapa3, precioPapa3, imgPapa3,codigo6],
    [nombrePapa4, precioPapa4, imgPapa4,codigo6],
];

//------------ creamos los div ------------------------------------

const detalle = document.getElementById("detalle");


for (let i = 0; i < menu.length; i++) {
    const mila = menu[i];
    // crear un elemento div para insertar la card
    const div = document.createElement("div");
    const facefront= document.createElement("div");
    const faceback= document.createElement("div");

    // agrego estilos y atributos
    div.classList.add("card");
    div.classList.add(`${mila[3]}`);
    div.id = `menu${i +1}`;
    
    detalle.appendChild(div)
    // agrego contenido html al div creado
    const card1 =document.querySelector(`#menu${i +1}`);
    facefront.classList.add("face");
    facefront.classList.add("front");
    faceback.classList.add("face");
    faceback.classList.add("back");
    card1.append(facefront, faceback);
    facefront.innerHTML = `<img src="${mila[2]}" />
                        <h3>${mila[0]}</h3>`;
    faceback.innerHTML = `<h2>${mila[0]}</h2>
                            <span>${mila[1]}</span>
                            <a class="link" href="#">Agregar al <i class="fa-sharp fa-solid fa-cart-shopping fa-xl"></i>></a>`;
    // agrego un hijo al contenedor
}

// -------------  codigo de filtrado de nuestro menu --------------------


filterObjects("all");

function filterObjects(c){
    var x, f;
    x = document.getElementsByClassName("card");
    if (c== "all") c = "";
    for (f = 0; f < x.length; f++){
        removeClass(x[f], "show");
        if (x[f].className.indexOf(c) > -1) addClass(x[f], "show");
    }
    
}

function addClass(element, name){
    var f, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (f = 0; f < arr2.length; f++){
        if (arr1.indexOf(arr2[f]) == -1){
            element.className += " " + arr2[f];
        }
    }
}

function removeClass(element, name){
    var f, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (f = 0; f < arr2.length; f++){
        while (arr1.indexOf(arr2[f]) > -1){
            arr1.splice(arr1.indexOf(arr2[f]), 1);
        }
    }
    element.className = arr1.join(" ");
}


//---------------- MENSAJE INICIO DE SESION------------------

