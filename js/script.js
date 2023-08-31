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
        item.style.width = '208px'
        item.style.height = '232px'
    });

    item.addEventListener('mouseout', () => {

        item.style.width = '196px'
        item.style.height = '216px'

    });

});

// Adiciona eventos de mouse aos botões da section projects
document.querySelectorAll('.btn-view').forEach((item) => {
    item.addEventListener('mouseover', () => {

        item.style.transition = "background-color 0.5s";
        item.style.backgroundColor = "var(--blue2)";
        item.style.color = "var(--white)"
        item.style.borderColor = "var(--white)";
        item.style.fontWeight = "700";

    });

    item.addEventListener('mouseleave', () =>{
        item.style.backgroundColor = "var(--white)";
        item.style.color = "var(--blue4)";
        item.style.borderColor = "var(--blue4)";
        item.style.fontWeight = "400";

    })
});

