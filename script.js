/* =========================================
   MENU MOBILE
========================================= */

const menuBtn = document.getElementById("menuBtn");

const menu = document.getElementById("menu");


menuBtn.addEventListener("click", () => {

    menu.classList.toggle("active");

});



/* =========================================
   FECHAR MENU AO CLICAR
========================================= */

const menuLinks = document.querySelectorAll(".menu a");


menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});



/* =========================================
   ANIMAÇÃO AO ROLAR A PÁGINA
========================================= */

const elements = document.querySelectorAll(".reveal");


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {
        threshold: 0.15
    }

);


elements.forEach(element => {

    observer.observe(element);

});
