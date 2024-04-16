$(document).ready(function () {

    let descbtn = document.querySelector(".descbtn");
    let reviewbtn = document.querySelector(".reviewbtn");
    let specification = document.querySelector(".specification");
    let review = document.querySelector(".review");

    descbtn.onclick = () => {
        specification.classList.add("d-block");
        specification.classList.remove("d-none");
        review.classList.add("d-none");
        review.classList.remove("d-block");
        descbtn.classList.add("colorbtn");
        reviewbtn.classList.remove("colorbtn");

    }
    reviewbtn.onclick = () => {
        specification.classList.add("d-none");
        specification.classList.remove("d-block");
        review.classList.add("d-block");
        review.classList.remove("d-none");
        descbtn.classList.remove("colorbtn");
        reviewbtn.classList.add("colorbtn");
    }

    let stars = document.querySelectorAll(".starsarea i");


    stars.forEach(element => {
        element.onclick = () => {
            for (let i = 0; i < stars.length; i++) {
                stars[i].classList.remove("fa-solid");
                stars[i].classList.add("fa-regular");
            }
            for (let i = 0; i < element.id; i++) {
               stars[i].classList.add("fa-solid");
               stars[i].classList.remove("fa-regular");

            }
        }
    });
let textarea=document.querySelector(".textarearating");
let textareabtn=document.querySelector(".textareabtn");
textarea.onkeyup = function(){
   if (textarea.value) {
    textareabtn.classList.add("btn-danger");
    textareabtn.classList.remove("btn-secondary");
   }
   else{
    textareabtn.classList.remove("btn-danger");
    textareabtn.classList.add("btn-secondary");
   }
    

};
    
   

})