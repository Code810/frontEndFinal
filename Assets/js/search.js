$(document).ready(function () {

    $(".uldrop").on("click", function () {
        $(".chevronlg").toggleClass("rotate");
        $(".uldropnonemenu").toggleClass("d-block");
    })

 
    let opticssearch = document.querySelector(".opticssearch");
    let pagination = document.querySelector(".pagination");
    let count = 2;
 

    function getPr(n) {
    let searchproducts = JSON.parse(localStorage.getItem("search"));
    if (searchproducts) {
        for (let i = 8; i < searchproducts.length; i += 9) {
            pagination.innerHTML += `<button class="paginationbtn">${count}</button>`
            count++;
        }
            let sum = 0;
            for (let i = (n - 1) * 9; i < n * 9&&i<searchproducts.length; i++) {
                sum++;
                opticssearch.innerHTML += `<div class="cardbox col-lg-4 position-relative m-1">
                    <div class="hovericons">
                        <i class="fa-solid fa-eye d-block"></i>
                        <i class="fa-regular fa-heart d-block "></i>
                    </div>
                    <div class="discountPercentage">${searchproducts[i]?.discountPercentage}% off</div>
                    <div class="cardimg"> <img src="${searchproducts[i]?.images[0]}" alt=""></div>
                    <h3>${searchproducts[i]?.title}</h3>
                    <div class="stars my-2">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <div class="pricebox d-flex gap-3">
                        <h3 >$${(searchproducts[i]?.price - (searchproducts[i]?.price * searchproducts[i]?.discountPercentage) / 100).toFixed(2)}</h3>
                        <h3>$${searchproducts[i]?.price}</h3>
                    </div>
                    <div id="${searchproducts[i].id}" class="addbasketbox text-center position-absolute ">
                     <div class="countbasket d-none">
                        <i class="fa-solid fa-minus mb-2"></i>
                        <h6></h6>
                     </div>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    </div> `
        $(".infopagecount").html(`<p>Showing ${(n - 1) * 9}-${((n - 1) * 9) + sum} of ${searchproducts.length} Products</p>`);

            }
            let buttons = document.querySelectorAll(".fa-plus");
            buttons.forEach(button => {
                button.onclick = function (e) {
        console.log(this.parentElement.getAttribute("id"));
                    e.stopPropagation();
        
                    let productArr = [];
                    let productId = this.parentElement.getAttribute("id");
                    this.previousElementSibling.classList.remove("d-none");
                    this.previousElementSibling.classList.add("d-block");
                    if (localStorage.getItem("basket") != null) {
                        productArr = JSON.parse(localStorage.getItem("basket"));
                    }
                    let exsistProduct = productArr.find(pr => pr.id == productId);
        
                    if (exsistProduct) {
                        exsistProduct.count++;
                        this.previousElementSibling.lastElementChild.innerText = exsistProduct.count;
        
                    }
                    else {
                        let product = {
                            id: productId,
                            desc: this.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText,
                            price: this.parentElement.previousElementSibling.firstElementChild.innerText.split("$")[1],
                            count: 1,
                            image: this.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.getAttribute("src")
                        }
                        this.previousElementSibling.lastElementChild.innerText = product.count;
                        productArr.push(product);
                    }
        
                    localStorage.setItem("basket", JSON.stringify(productArr));
                    caculateCountBasket()
                }
            });
            let minusbtn = document.querySelectorAll(".fa-minus");
            minusbtn.forEach(element => {
                element.onclick = function (e) {
                    e.stopPropagation();
                    productArr = JSON.parse(localStorage.getItem("basket"));
                    let productId = this.parentElement.parentElement.getAttribute("id");
                    let exsistProduct = productArr.find(pr => pr.id == productId);
        
                    if (exsistProduct && exsistProduct.count > 1) {
                        exsistProduct.count--;
                        this.nextElementSibling.innerText = exsistProduct.count;
                        localStorage.setItem("basket", JSON.stringify(productArr));
                    }
                    else {
                        productArr = productArr.filter(pr => pr.id != productId)
                        this.parentElement.classList.add("d-none");
                        this.parentElement.classList.remove("d-block");
                        localStorage.setItem("basket", JSON.stringify(productArr));
                        caculateCountBasket();
                    }
        
                }
            });
        
            let cardboxes = document.querySelectorAll(".cardbox");
            cardboxes.forEach(element => {
        
                element.onclick = function () {
                    let product = {
                        id: this.id,
                        desc: this.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText,
                        price: this.lastElementChild.previousElementSibling.firstElementChild.innerText,
                        price2: this.lastElementChild.previousElementSibling.lastElementChild.innerText,
                        image: this.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.getAttribute("src")
                    }
                    localStorage.setItem("product", JSON.stringify(product));
                    window.location.assign("./product.html")
                }
            });
        
            caculateCountBasket();
        
            function caculateCountBasket() {
            let basketCount = document.querySelector("#basketCount");
        
                let basket = JSON.parse(localStorage.getItem("basket"))
                if (basket) {
                    if (basket.length > 0) {
                        basketCount.innerText = basket.length;;
                        basketCount.setAttribute("class", "d-block");
                    }
                    else {
                        localStorage.removeItem("basket");
                        basketCount.removeAttribute("class", "d-block");
                        basketCount.setAttribute("class", "d-none");
                    }
                }
            }
    }
   
    }




    
    getPr(1);
    let paginationbtn = document.querySelectorAll(".paginationbtn");
    for (const element of paginationbtn) {
        element.onclick = () => {
            opticssearch.innerHTML = "";
            getPr(element.textContent);
        }

    }







})


let oddproduct = document.querySelector(".oddproduct");
let evenproduct = document.querySelector(".evenproduct");
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


