// VARIABLES ET CONSTANTE

let myVar = "ma variable";
const myVar2 = "ma  variable 2";
console.log(myVar);

myVar = "ma variable changée"


// BOOLEEN

let isTrue = true;
let isFalse = false;

console.log(isFalse);


// CHIFFRES ET OPERATEURS

let chiffre1 = 4;
let chiffre2 = 3;
let chiffre3 = '3';

console.log(typeof chiffre1, typeof chiffre3);

// template string, littéraux de gabarits et concaténation

let test = 'test ' + myVar;
let test2 = `test ${myVar}`;

console.log(test);
console.log(test2);


// CONDITIONS IF /IF ELSE

if (chiffre1 > chiffre2) {
    console.log('condition valide');
}
if (chiffre1 === 4) {
    console.log('condition strictement égale valide');
}
if (chiffre1 !== 8) {
    console.log('condition strictement différente valide');
}
if (chiffre1 <= 3) {
    console.log('condition est valide');
}else{
    console.log('condition différente');
}


// TABLEAU ARRAY

let array = ['item 1', 'item 2', 'item 3', 'item 4'];
console.log(array[0]);
// affiche item 1

array = ['item 1', 'item 2', 'item 3', 'item 4'];
console.log(array.length);
// affiche 4, car il y a 4 données dans le tableau (ARRAY)


// OBJETS

let obj = {
    title: 'mon titre',
    description: 'ma description'
}
console.log(obj.title, obj.description);
// affiche mon titre ma description 


// LES BOUCLES, WHILE, FOR, FOREACH
// for
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
};

//forEach
array.forEach(i => {
    console.log(i);
});

// FONCTIONS

function myFunction() {
    console.log('fonction simple');
}
// pour trigger la fonction, affiche le resultat 'ma fonction'
myFunction();


// -----------------------------------------------
function myFunction2(i) {
    console.log(i);
}
// Affiche 'autre fonction'
myFunction2('autre fonction');

// Affiche 'autre fonction modifiée'
myFunction2('autre fonction modifiée');


// -----------------------------------------------
const myFunction3 = (r) => {
    console.log(r);
}
// Affiche 'fonction flechée'
myFunction3('fonction flechée')

const calcul = (nb1, nb2) => {
    // console.log(nb1 + nb2);
    // ou
    return nb1 + nb2;
}
// Affiche le résultat du calcul 4 + 5 donc 9
// calcul(4, 5);
// ou
console.log(calcul(4, 5));


// INTERAGIR AVEC LE DOM // METHODE, PROPRIETE, EVENEMENT



// Selectors

// document.querySelector;
// document.querySelectorAll;
// document.getElementById;
// document.getElementsByClassName;
// document.getElementsByTagName;


//----- JS du PORTFOLIO ---------------------------------------------------------
// Menu mobile 
function menuMobile() {
    const btn = document.querySelector('.burger');
    const header = document.querySelector('.header');
    const links = document.querySelectorAll('.navbar a');

    btn.addEventListener('click', () => {
        header.classList.toggle('show-nav');
    });
    
    links.forEach(link => {
        link.addEventListener('click', () => {
        header.classList.remove('show-nav');
        });
    })
}
menuMobile();

// Portfolio 

function tabsFilters() {
    const tabs = document.querySelectorAll('.portfolio-filters a');
    const projets = document.querySelectorAll('.portfolio .card');

    const resetActiveLinks = () => {
        tabs.forEach(elem => {
            elem.classList.remove('active');
        })
    }

    const showProjets = (elem) => {
        console.log(elem);
        projets.forEach(projet => {

            let filter = projet.getAttribute('data-category');

            if(elem == 'all') {
                projet.parentNode.classList.remove('hide');
                return
            }
            // ne sera pas pris en compte !
            if (filter !== elem) {
                projet.parentNode.classList.add('hide');
            } else {
                projet.parentNode.classList.remove('hide');
            }
        });
    }

    tabs.forEach(elem => {
        elem.addEventListener('click', (event)=> {
            event.preventDefault();
            let filter = elem.getAttribute('data-filter');
            // console.log(filter);
            showProjets(filter)
            resetActiveLinks();
            elem.classList.add('active');
        })
    })
}

tabsFilters()

function showProjectDetails() {
    const links = document.querySelectorAll('.card__link');
    const modals = document.querySelectorAll('.modal');
    const btns = document.querySelectorAll('.modal__close');

    const hideModals = () => {
        modals.forEach(modal => {
            modal.classList.remove('show');
        });
    } 

    links.forEach(elem => {
        elem.addEventListener('click', (event) =>{
            event.preventDefault();
            document.querySelector(`[id=${elem.dataset.id}]`).classList.add('show');
        });
    });

    btns.forEach(btn => {
        btn.addEventListener('click', (event) =>{
            hideModals();
        });
    });
}

showProjectDetails();

// effets

const observeurIntersectionAnimation= () => {
    const sections = document.querySelectorAll('section');
    const skills = document.querySelectorAll('.skills .bar');

    sections.forEach((section, index) => {
        if (index === 0) return;
        section.style.opacity = "0";
        section.style.transition = "all 1.6s";
    });

    skills.forEach((elem, index) => {
        
        elem.style.width = "0";
        elem.style.transition = "all 1.6s";
    });

    let sectionObserver = new IntersectionObserver(function (entries, observer){
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let elem = entry.target;
                elem.style.opacity = 1;
            }
        });
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    let skillsObserver = new IntersectionObserver(function (entries, observer){
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let elem = entry.target;
                elem.style.width = elem.dataset.width + '%';
            }
        });
    });

    skills.forEach(skill => {
        skillsObserver.observe(skill)
    });
}

observeurIntersectionAnimation();