let dropsearch = document.querySelectorAll(".dropsearch");
for (let i = 0; i < dropsearch.length; i++) {
  dropsearch[i].onclick = function () {
    dropsearch[i].classList.toggle("colorchange");
    document.getElementById(dropsearch[i].getAttribute("data-id")).classList.toggle("show");
  };
}
let a=document.querySelectorAll(".dropdown-content>a");
for (let j = 0; j < a.length; j++) {
 a[j].onclick = function () {
 
   a[j].parentElement.parentElement.parentElement.firstElementChild.placeholder=a[j].innerText;
 }
 
}




document.querySelectorAll(".myInput").forEach(element => {
  element.onkeyup = function () {
    const filter = this.value.toUpperCase();
    const div = this.nextElementSibling.lastElementChild;
    const a = div.getElementsByTagName("a");
    for (let i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }
})


let basket = JSON.parse(localStorage.getItem("basket"));
// let basketarea = document.querySelector(".cartareabox");

if (basket) {
  basket.forEach(element => {
    let disabled = "";
    if (element.count < 2) {
      disabled = "disabled";
    }
    if (document.querySelector(".cartareabox")) {
      document.querySelector(".cartareabox").innerHTML += `
      <div id="${element.id}" class="d-flex singlepr position-relative">
          <div class="cartprimg">
              <img src="${element.image}" alt="">
          </div>
          <div class="cartprinfo ">
              <h5>${element.desc}</h5>
              <span>$${element.price} x ${element.count} </span>
              <span class="text-danger fw-bolder">$${(element.price * element.count).toFixed(2)} </span>
              <div class="countprbox position-absolute">
              <button class="border-0 bg-white minus" type="button" ${disabled}> <i  class="fa-solid  fa-minus" ></i></button>
                 
                  <span>${element.count}</span>
                  <i class="fa-solid fa-plus"></i>
              </div>
              <i class="fa-solid fa-xmark closebtn"></i>
      </div>
      </div>`
    }
 
    totalPriceCaculate()
  });
}


let buttons = document.querySelectorAll(".fa-plus");
let basketCount = document.querySelector("#basketCount");
buttons.forEach(button => {
  button.onclick = function () {
    let productArr = [];
    let productId = this.parentElement.parentElement.parentElement.getAttribute("id");
    if (localStorage.getItem("basket") != null) {
      productArr = JSON.parse(localStorage.getItem("basket"));
    }
    let exsistProduct = productArr.find(pr => pr.id == productId);
    if (exsistProduct) {
      exsistProduct.count++;
      this.previousElementSibling.innerText = exsistProduct.count;
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
    if (exsistProduct.count > 1) this.parentElement.firstElementChild.removeAttribute("disabled")
    localStorage.setItem("basket", JSON.stringify(productArr));
    totalPriceCaculate()
  }
});


let minusbtn = document.querySelectorAll(".minus");
minusbtn.forEach(element => {
  element.onclick = function () {
    productArr = JSON.parse(localStorage.getItem("basket"));
    let productId = this.parentElement.parentElement.parentElement.getAttribute("id");
    let exsistProduct = productArr.find(pr => pr.id == productId);

    if (exsistProduct && exsistProduct.count > 1) {
      exsistProduct.count--;
      this.nextElementSibling.innerText = exsistProduct.count;
      localStorage.setItem("basket", JSON.stringify(productArr));
    }
    if (exsistProduct.count == 1) {
      this.setAttribute("disabled", "")
    }
  
    totalPriceCaculate()

  }
});

let closebtn = document.querySelectorAll(".closebtn");
closebtn.forEach(element => {
  element.onclick = function () {
    productId = this.parentElement.parentElement.getAttribute("id");
    productArr = JSON.parse(localStorage.getItem("basket")).filter(pr => pr.id != productId);
    this.parentElement.parentElement.remove();
    if (productArr.length == 0) {
      localStorage.removeItem("basket");
    }
    else {localStorage.setItem("basket", JSON.stringify(productArr));}
    totalPriceCaculate()


  }
});


function totalPriceCaculate() {
  let basket = JSON.parse(localStorage.getItem("basket"));
  let sum = 0;
 if (basket) {
  basket.forEach(element => {
    sum += (element.count * element.price);
      if (document.querySelector(".totalpricee")) {
        document.querySelector(".totalpricee").innerText = `$${sum.toFixed(2)}`
      }
  });
 }
 else document.querySelector(".totalpricee").innerText = `$${sum.toFixed(2)}`
  

}


let details=document.getElementById("details");
let cart=document.getElementById("cart");

if (details) {
  details.onclick = function () {
    details.style.color="white"
    details.style.backgroundColor="rgb(233, 69, 96)";
    details.previousElementSibling.style.backgroundColor="rgb(233, 69, 96)";
    details.parentElement.nextElementSibling.classList.remove("d-lg-flex");
    details.parentElement.nextElementSibling.classList.add("d-none");
    details.parentElement.nextElementSibling.nextElementSibling.classList.remove("d-none");
  
  }
}
if (cart) {
  cart.onclick = function () {
    details.style.color="rgb(233, 69, 96)";
    details.previousElementSibling.style.backgroundColor="rgb(255, 225, 230)";
    details.style.backgroundColor="rgb(255, 225, 230)";
    details.parentElement.nextElementSibling.classList.remove("d-none");
    details.parentElement.nextElementSibling.classList.add("d-lg-flex");
    details.parentElement.nextElementSibling.nextElementSibling.classList.add("d-none");
  
  
  }
}