$(document).ready(function(){
    $('.owl-carousel').owlCarousel();
  });

$(".owl-carousel").owlCarousel ( {
    loop: true,
    autoplay: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1,
        },
    },
});


// contact data

const contactForm = document.querySelector('.contact-form');
const fullName = document.querySelector(".full-name");
const emailAddress = document.querySelector(".email-address");
const subject = document.querySelector(".subject");
const message = document.querySelector(".message");
const submit = document.querySelector(".submit-form");
const modal = document.querySelector(".modal-wrap");
const close = document.querySelector(".modal-close");

submit.addEventListener('click', (e) => {
    e.preventDefault();
    db.collection('contact-form').doc().set({
        fullName: fullName.value,
        email: emailAddress.value,
        subject: subject.value,
        message: message.value,
    }).then(() => {
        contactForm.reset();
        modal.classList.toggle('display-none');
    })
});

close.addEventListener('click', ()=> {
    modal.classList.toggle('display-none');
})