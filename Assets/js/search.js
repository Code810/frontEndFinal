$(document).ready(function () {

    $(".uldrop").on("click", function () {
        $(".chevronlg").toggleClass("rotate");
        $(".uldropnonemenu").toggleClass("d-block");
    })

    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(res => {

            let opticssearch = document.querySelector(".opticssearch");

            let pagination = document.querySelector(".pagination");
            let count = 2;
            for (let i = 8; i < res.products.length; i += 9) {
                pagination.innerHTML += `<button class="paginationbtn">${count}</button>`
                count++;
            }

            function getPr(n) {
                let sum=0;
                for (let i = (n - 1) * 9; i < n * 9; i++) {
                   sum++;
                    opticssearch.innerHTML += `<div class="cardbox col-lg-4 position-relative m-1">
                <div class="hovericons">
                    <i class="fa-solid fa-eye d-block"></i>
                    <i class="fa-regular fa-heart d-block "></i>
                </div>
                <div class="discountPercentage">${res.products[i].discountPercentage}% off</div>
                <div class="cardimg"> <img src="${res.products[i].images[0]}" alt=""></div>
                <h3>${res.products[i].title}</h3>
                <div class="stars my-2">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <div class="pricebox d-flex gap-3">
                    <h3 >$${(res.products[i].price - (res.products[i].price * res.products[i].discountPercentage) / 100).toFixed(2)}</h3>
                    <h3>$${res.products[i].price}</h3>
                </div>
                <div class="addbasketbox text-center position-absolute ">
                 <div class="countbasket">
                    <i class="fa-solid fa-minus mb-2"></i>
                    <h6>3</h6>
                 </div>
                    <i class="fa-solid fa-plus"></i>
                </div>
                </div> `
                }

                $(".infopagecount").html(`<p>Showing ${(n - 1) * 9}-${((n - 1) * 9)+sum} of ${res.products.length} Products</p>`);

            }
            getPr(1);
            let paginationbtn = document.querySelectorAll(".paginationbtn");
            for (const element of paginationbtn) {
                element.onclick = () => {
                    opticssearch.innerHTML="";
                    getPr(element.textContent);
                }
              
            }
         



        })


let oddproduct=document.querySelector(".oddproduct");
let evenproduct=document.querySelector(".evenproduct");
oddproduct.onclick = () => {
    for (const item of $(".cardbox")) {
        item.classList.add("widthimport")
    }
}
evenproduct.onclick = () => {
    for (const item of $(".cardbox")) {
        item.classList.remove("widthimport")
    }
}


})


