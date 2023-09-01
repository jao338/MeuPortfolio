let imgs = [

    imgA = {
        id: 1,
        desc: "Lorem1"
    },

    imgB = {
        id: 2,
        desc: "Lorem2"
    },

    imgC = {
        id: 3,
        desc: "Lorem3"
    },

    imgD = {
        id: 4,
        desc: "Lorem4"
    },

    imgE = {
        id: 5,
        desc: "Lorem5"
    },

    imgF = {
        id: 6,
        desc: "Lorem6"
    },

    imgG = {
        id: 7,
        desc: "Lorem7"
    },

    imgH = {
        id: 8,
        desc: "Lorem8"
    },

    imgI = {
        id: 9,
        desc: "Lorem9"
    }
]

//Adiciona os efeitos de transição entre os links e as sections
document.querySelectorAll('ul li a').forEach((item) => {

    item.addEventListener('click', function(e){

        //Previne o comportamento padrão do link
        e.preventDefault();

        //Obtém o valor do atributo "href" e remove o caractere "#", resultando apenas no id da section
        const targetId = this.getAttribute('href').substring(1);

        //Obtém o elemento do alvo, no caso a própria section com base no id
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });        

    });
});

//Adiciona os efeitos de transição entre os links e as sections
document.querySelector('.menu-left a').addEventListener('click', function(e){

    e.preventDefault();

    //Obtém o valor do atributo "href" e remove o caractere "#", resultando apenas no id da section
    const targetId = this.getAttribute('href').substring(1);

    //Obtém o elemento do alvo, no caso a própria section com base no id
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({
        behavior: 'smooth'
    });   

});

document.querySelector('footer a:first-child').addEventListener('click', function(e){

    e.preventDefault();

    //Obtém o valor do atributo "href" e remove o caractere "#", resultando apenas no id da section
    const targetId = this.getAttribute('href').substring(1);

    //Obtém o elemento do alvo, no caso a própria section com base no id
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({
        behavior: 'smooth'
    });   

});

// Adiciona um evento aos inputs de contato, alterando a espessura da borda e adicionando uma margem no top dos inputs
document.querySelectorAll('.input-contact').forEach((input) => {

    input.addEventListener('focus', () => {

        input.style.borderBottom = '6px solid var(--white)';
        input.style.transition = "all .5s";
        input.style.marginTop = '16px';
    });

    input.addEventListener('focusout', () => {
       
        input.style.borderBottom = '2px solid var(--white)';
        input.style.transition = "all .5s";
        input.style.marginTop = '0px';
;
    });
});

// Adiciona um evento aos cards de skills que os redimensiona
document.querySelectorAll('.section-skills-card').forEach((item) => {

    item.addEventListener('mouseover', () => {

        item.style.transition = 'all .25s'
        item.style.width = '228px'
    });

    item.addEventListener('mouseout', () => {

        item.style.width = '196px'

    });

});

//Adiciona um evento de click ao menu mobile que o abre
document.querySelector('.menu-mobile').addEventListener('click', () => {

    let menu = document.querySelector('.div-menu-mobile');

    menu.style.left = '0vw';
    menu.style.opacity = 100;

});

// Adiciona um evento de click ao menu mobile que o fecha
document.querySelector('.close-menu-mobile img:last-child').addEventListener('click', () => {

    let menu = document.querySelector('.div-menu-mobile');

    menu.style.left = '100vw';
    menu.style.opacity = 0;
 
});

//Adiciona o evento de click as opções do menu mobile que fecha o menu mobile
document.querySelectorAll('.content-menu-mobile ul li a').forEach((item) => {

    item.addEventListener('click', () =>{

        let menu = document.querySelector('.div-menu-mobile');

        menu.style.left = '100vw';
        menu.style.opacity = 0;

    });
    
});

// Adiciona um evento de click aos botões que abre o modal
document.querySelectorAll('.btn').forEach((item,index) => {

    item.addEventListener('click', () => {

        openModal(index);

    });
});

// Adiciona um evento de click aos botões que fecha o modal
document.querySelector('.close-modal img').addEventListener('click', () => {

    let modal = document.querySelector('.projects-modal');

    modal.style.display = "none";

});

window.onload = function(){

    document.querySelectorAll('.section-project-up').forEach((item, index) => {

        
        item.style.backgroundImage = `url(../img/imgs/projects/${index + 1}.jpg)`;
        item.style.backgroundSize = 'cover';
        item.style.backgroundPosition = 'center';

        //item.setAttribute('data-id', `${index + 1}`);
        
    });

};

// Abre o modal
function openModal(index){

    let modal = document.querySelector('.projects-modal');
    let modalImg = document.querySelector('.project-modal-img');

    modal.style.display = 'flex';

    if(index + 1 == 4 || index + 1 == 5 || index + 1 == 6){
        modal.style.display = 'none';
    }else{
        modalImg.style.backgroundImage = `url(../img/imgs/projects/${index + 1}.jpg)`;
    }
}
