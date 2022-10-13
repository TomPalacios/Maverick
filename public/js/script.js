// Menu

(function Menu(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });
})();


(function routes(){
    const route_inicio = document.getElementById('inicio');
    const route_nav_inicio = document.getElementById('nav_logo');
    const route_nosotros = document.getElementById('nosotros');
    const route_catalogo = document.getElementById('catalogo');

    route_inicio.addEventListener('click', ()=>{
        window.open("./index.html", "_self");
    })

    route_nav_inicio.addEventListener('click', ()=>{
        window.open("./index.html", "_self");
    })

    route_nosotros.addEventListener('click', ()=>{      //addEventListener : permite agregar detectores de eventos en cualquier objeto HTML DOM
        window.open("./nosotros.html", "_self");
    })

    route_catalogo.addEventListener('click', ()=>{
        window.open("./catalogo.html", "_self");
    })
})();


(function route_nosotros(){
    const route_card1_bt = document.getElementById('card1_bt');
    const route_card2_bt = document.getElementById('card2_bt');
    const route_card3_bt = document.getElementById('card3_bt');

    
    route_card1_bt.addEventListener('click', ()=>{     
        window.open("./nosotros.html#card1_section", "_self");
    })

    route_card2_bt.addEventListener('click', ()=>{     
        window.open("./nosotros.html#card2_section", "_self");
    })

    route_card3_bt.addEventListener('click', ()=>{
        window.open("./nosotros.html#card3_section", "_self");
    })
})();




//Funciona pero lanza error en la consola 


function filter(group) {
    var n = document.querySelectorAll('.cards').length;
    
    for(i=0; i<n;i++) {
        if (group.checked == true)
        {
            document.getElementsByName(group.value)[i].style.display = "grid";
        }
        else
        {
            document.getElementsByName(group.value)[i].style.display = "none";
        }
    }
};


(function (){
    const category = [...document.querySelectorAll('.category_filter')];
    const length = category.length;
    const cards = [...document.getElementsByName('card')];

    console.log(category)
    console.log(length)

    category.forEach(chk =>{
        if(chk.checked == false)
        {
            let cont = cont + 1;
        }

    })

    if(cont == length)
    {
        cards.forEach(card =>{
            card.style.display = "grid";
        })
    }
})

// function filter_all(){
//     var category = document.querySelectorAll('.category_filter');
//     var cont = 0;
    
//     for(i=0; i<n;i++) {
//         if(category.checked == false)
//         {
//             cont=cont+1;
//         }
//     }

//     chkbox.forEach((card)=> {
//         if(cont == chkbox.length)
//         {
//             cards.style.display = "grid"
//         }
        
//         else
//         {

//         }
//     });
// };

// setTimeout(filter_all);

// var cont = 0;
// const chkbox = document.querySelectorAll('.category_filter');
// const cards = document.querySelectorAll('.card');

// for(i = 0; i < chkbox.length; i++)
// {
//     chkbox[i].addEventListener('click', (e) =>{
        
//         e.preventDefault();

//         // const filter = e.target.dataset.filter;
//         // console.log(filter);

//         chkbox.forEach((card)=> {
//             if(cont == chkbox.length)
//             {
//                 cards.style.display = "grid"
//             }

//             else
//             {
//                 if(chkbox.checked == true)
//                 {
//                     document.getElementsByName(chkbox.value)[i].style.display = "grid";
//                 }
//                 else(chkbox.checked == false)
//                 {
//                     document.getElementsByName(chkbox.value)[i].style.display = "none";
//                 }
//             }
//         });
//     })
// }



