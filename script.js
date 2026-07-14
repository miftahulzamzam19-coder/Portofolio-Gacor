// =====================
// MENU HAMBURGER
// =====================

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// =====================
// NAVBAR ACTIVE
// =====================

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){

            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            document.querySelector('header nav a[href*=' + id + ']')
            ?.classList.add('active');

        }

    });

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

// =====================
// TYPING EFFECT
// =====================

new Typed(".multiple-text",{

    strings:[
        "Suami Rizky Aprilia Rhamdhani",
        "Full Stack Developer",
        "Web Developer",
        "Frontend Developer",
        "Backend Developer"
    ],

    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true

});

// =====================
// SMOOTH SCROLL
// =====================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});

// =====================
// TOMBOL DOWNLOAD CV
// =====================

const btn = document.querySelector("button");

btn.addEventListener("click",function(){

    alert("Silakan tambahkan file CV Anda.");

});