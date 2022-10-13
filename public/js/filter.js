// (function filter__toogle(){
//     const titleFilter = [...document.querySelectorAll('.filter__title')];
//     console.log(titleFilter)

//     titleFilter.forEach(filter =>{
//         filter.addEventListener('click', ()=>{
//             let height = 0;
//             let answer = filter.nextElementSibling;
//             let addPadding = filter.parentElement;
        

//             addPadding.classList.toggle('filter__container--add');
//             filter.children[0].classList.toggle('filter__arrow--rotate');

//             if(answer.clientHeight === 0){
//                 height = answer.scrollHeight;
//             }

//             answer.style.height = `${height}px`;
//         });
//     });
// })();














// FUNCION :

(function (){
    const titleFilter = [...document.querySelectorAll('.filter__arrow--show')];
    console.log(titleFilter)

    titleFilter.forEach(filter =>{
        filter.addEventListener('click', ()=>{
            let height = 0;
            let answer = filter.parentElement.nextElementSibling;
            let addPadding = filter.parentElement.parentElement;
        

            addPadding.classList.toggle('filter__container--add');
            filter.classList.toggle('filter__arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });
})();




(function (){
    const category = [...document.querySelectorAll('.category_filter')];
    const length = category.length;
    const cards = [...document.querySelectorAll('.cards')];
    var cont = 0;

    console.log(category)
    console.log(length)
    console.log(cards)

    category.forEach(chk =>{
        if(chk.checked == false)
        {
            cont = cont + 1;
        }

    })

    if(cont == length)
    {
        cards.forEach(card =>{
            card.style.display = "grid";
        })
    }
})();

// (function (){
//     const filter = [...document.querySelectorAll('.filter_container')];
//     const category = [...document.querySelectorAll('.category_filter')];
//     console.log(filter)
//     console.log(category)

//     titleFilter.forEach(filter =>{
//         filter.addEventListener('click', ()=>{
//             let height = 0;
//             let answer = filter.parentElement.nextElementSibling;
//             let addPadding = filter.parentElement.parentElement;
        

//             addPadding.classList.toggle('filter__container--add');
//             filter.classList.toggle('filter__arrow--rotate');

//             if(answer.clientHeight === 0){
//                 height = answer.scrollHeight;
//             }

//             answer.style.height = `${height}px`;
//         });
//     });
// })();








// (function (){
//     const titleFilter = [...document.querySelectorAll('.filter__arrow--show')];
//     console.log(titleFilter)
//     // var vp = window.innerWidth;

//     titleFilter.forEach(filter =>{
//         filter.addEventListener('click', ()=>{
//             let height = 0;
//             const height_1 = filter.parentElement.nextElementSibling.clientHeight;
//             let answer = filter.parentElement.nextElementSibling;
//             let addPadding = filter.parentElement.parentElement;
            

//             if(height_1 != 0)
//             {
//                 const height_elements = height_1;
//                 console.log(height_elements);
//             }
//             console.log(height);
//             addPadding.classList.toggle('filter__container--add');
//             filter.classList.toggle('filter__arrow--rotate');

//             if(answer.clientHeight === 0){
//                 height = answer.scrollHeight;
//             }

//             answer.style.height = `${height}px`;
            
//         });
//     });
// })();



// (function (){
//     const titleFilter = [...document.querySelectorAll('.filter__arrow--show')];
//     console.log(titleFilter)
//     // var vp = window.innerWidth;

//     titleFilter.forEach(filter =>{
//         filter.addEventListener('click', ()=>{
//             let height = 0;
//             const height_1 = filter.parentElement.nextElementSibling.clientHeight;
//             let answer = filter.parentElement.nextElementSibling;
//             let addPadding = filter.parentElement.parentElement;
            

//             if(height_1 != 0)
//             {
//                 const height_elements = height_1;
//                 console.log(height_elements);
//             }
//             console.log(height);
//             addPadding.classList.toggle('filter__container--add');
//             filter.classList.toggle('filter__arrow--rotate');

//             if(answer.clientHeight === 0){
//                 height = answer.scrollHeight;
//             }

//             answer.style.height = `${height}px`;
            
//         });
//     });
// })();

















// (function (){
//     const titleFilter = [...document.querySelectorAll('.filter__arrow--show')];
//     console.log(titleFilter)
//     // var vp = window.innerWidth;

//     titleFilter.forEach(filter =>{
//         filter.addEventListener('click', ()=>{
//             let height = 0;
//             let answer = filter.parentElement.nextElementSibling;
//             let addPadding = filter.parentElement.parentElement;
        

//             addPadding.classList.toggle('filter__container--add');
//             filter.classList.toggle('filter__arrow--rotate');

//             if(answer.clientHeight === 0){
//                 height = answer.scrollHeight;
//             }

//             answer.style.height = `${height}px`;
//         });
//     });
// })();


