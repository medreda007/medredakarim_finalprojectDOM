let nav = document.querySelector('.navigation');
let navBtn = document.querySelector(".nav-btn-toggler")
navBtn.addEventListener('click', () => {
    console.log("yguopioj");
    nav.classList.toggle("show-nav")
})


let signIn = document.querySelector(".sign-in")
let logInForm = document.querySelector(".log-in-form")

let logIn = document.querySelector(".log-in")
let signInForm = document.querySelector(".sign-in-form")

signIn.addEventListener('click', () => {
    logInForm.classList.add("d-none")
    signInForm.classList.remove("d-none")
})

logIn.addEventListener('click', () => {
    signInForm.classList.add("d-none")
    logInForm.classList.remove("d-none")
})



let carousel2Inner = document.querySelector(".carousel2-inner")
let carousel2Imgs = document.querySelectorAll(".carousel2-imgs")

let modalVideo = document.querySelector(".modal-video")
