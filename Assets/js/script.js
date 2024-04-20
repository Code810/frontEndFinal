




document.addEventListener("DOMContentLoaded", function () {
    chevron = $(".navbartopright i");
    chevron.on("click", function () {
        $(`#${$(this).attr("data-id")}`).toggle();
    });
    $(".ctgbtn").on("click", function () {
        $(".chevronlg").toggleClass("rotate");
    })

    $('.your-class').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 300,
        adaptiveHeight: true
    });


    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(res => {
            document.querySelector(".flashproducts2").innerHTML = ""

            for (let i = 0; i < 9; i++) {

                if (document.querySelector(".flashproducts")) {
                    document.querySelector(".flashproducts").innerHTML += `<div class="cardbox  col-4 col-lg-3 position-relative">
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
         <div id="${res.products[i].id}a" class="addbasketbox text-center position-absolute" >
          <div class="countbasket d-none">
             <i class="fa-solid fa-minus mb-2"></i>
             <h6></h6>
          </div>
             <i class="fa-solid fa-plus"></i>
         </div>
     </div> `
                }

                if (document.querySelector(".topproducts")) {
                    document.querySelector(".topproducts").innerHTML += `  <div class="productcards col-sm-12 col-lg-4">
     <p>${res.products[i].category}</p>
     <div class="topimages d-flex col-lg-12">
     <div class="topimagesw"> <img src="${res.products[i].images[0]}" alt=""></div>
     <div class="topimagesw"> <img src="${res.products[i].images[1]}" alt=""></div>
     <div class="topimagesw"> <img src="${res.products[i].images[2]}" alt=""></div>
     </div>
     <p>3k orders this week</p>
 </div>`
                }

                if (document.querySelector(".bigdiscountslide")) {
                    document.querySelector(".bigdiscountslide").innerHTML += `  <div class="bigdisccard col-lg-2 bg-white mx-2 p-3">
    <div class="bigdiscimg"><img src="${res.products[i].images[0]}" alt=""></div>
    <div class="my-2">
        <h3 class="my-2 overflow-hidden text-nowrap">${res.products[i].title}</h3>
        <div class="pricebox d-flex gap-3 mt-3 ">
                <h3 >$${(res.products[i].price - (res.products[i].price * res.products[i].discountPercentage) / 100).toFixed(2)}</h3>
                <h3>$${res.products[i].price}</h3>
            </div>
    </div>
   </div>`
                }


                if (i < 6 && document.querySelector(".carproducts")) {
                    document.querySelector(".carproducts").innerHTML += `<div class="cardbox col-lg-4 col-6 position-relative ">
<div class="hovericons">
    <i class="fa-solid fa-eye d-block"></i>
    <i class="fa-regular fa-heart d-block "></i>
</div>
<div class="discountPercentage">${res.products[i].discountPercentage}% off</div>
<div class="cardimg"> <img src="./Assets/img/${res.products[i].title}.webp" alt=""></div>
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
<div id="${res.products[i].id}s" class="addbasketbox text-center position-absolute" >
 <div class="countbasket d-none">
    <i class="fa-solid fa-minus mb-2"></i>
    <h6></h6>
 </div>
    <i class="fa-solid fa-plus"></i>
</div>
</div> `
                }
                if (document.querySelector(".mobilphones")) {
                    document.querySelector(".mobilphones").innerHTML += `<div class="cardbox col-lg-4 col-6 position-relative m-1">
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
    <div id="${res.products[i].id}d" class="addbasketbox text-center position-absolute" >
     <div class="countbasket d-none">
        <i class="fa-solid fa-minus mb-2"></i>
        <h6></h6>
     </div>
        <i class="fa-solid fa-plus"></i>
    </div>
    </div> `
                }

                if (document.querySelector(".optics")) {
                    document.querySelector(".optics").innerHTML += `<div class="cardbox col-lg-4 position-relative m-1">
    <div class="hovericons">
        <i class="fa-solid fa-eye d-block"></i>
        <i class="fa-regular fa-heart d-block "></i>
    </div>
    <div class="discountPercentage">${res.products[i].discountPercentage}% off</div>
    <div class="cardimg"> <img src="./Assets/img/${res.products[i].price}.webp" alt=""></div>
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
    <div id="${res.products[i].id}f" class="addbasketbox text-center position-absolute" >
     <div class="countbasket d-none">
        <i class="fa-solid fa-minus mb-2"></i>
        <h6></h6>
     </div>
        <i class="fa-solid fa-plus"></i>
    </div>
    </div> `
                }

                if (i < 8) {
                    document.querySelector(".flashproducts2").innerHTML += `<div class="cardbox  col-lg-3 col-6 position-relative ">
         <div class="hovericons">
             <i class="fa-solid fa-eye d-block"></i>
             <i class="fa-regular fa-heart d-block "></i>
         </div>
         <div class="discountPercentage">${res.products[i].discountPercentage}% off</div>
         <div class="cardimg"> <img src="./Assets/img/${res.products[i].discountPercentage}.webp" alt=""></div>
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
         <div id="${res.products[i].id}g" class="addbasketbox text-center position-absolute" >
          <div class="countbasket d-none">
             <i class="fa-solid fa-minus mb-2"></i>
             <h6></h6>
          </div>
             <i class="fa-solid fa-plus"></i>
         </div>
     </div> `
                }
            }

            $('.bigdiscountslide').slick({
                infinite: false,
                speed: 300,
                slidesToShow: 6,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
            $('.flashproducts').slick({
                infinite: false,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
            $('.topproducts').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false,
                speed: 300,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });

            let buttons = document.querySelectorAll(".cardbox .fa-plus");
            buttons.forEach(button => {
                button.onclick = function (e) {

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
            let minusbtn = document.querySelectorAll(".cardbox .fa-minus");
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

            let carticon = document.getElementsByClassName("fa-bag-shopping");
            carticon[0].onclick = function () {
               
            }

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


        });


    $(".menubtn span:first-child").on("click", function () {
        $(".brandsmenu1").attr("style", "display: block !important");
        $(".brandsmenu2").attr("style", "display: none !important");
        $(".menubtn span:last-child").attr("style", "color: #7d879c !important");
        $(".menubtn span:first-child").attr("style", "color: black !important");
    })
    $(".menubtn span:last-child").on("click", function () {
        $(".brandsmenu1").attr("style", "display: none !important");
        $(".brandsmenu2").attr("style", "display: block !important");
        $(".menubtn span:last-child").attr("style", "color: black !important");
        $(".menubtn span:first-child").attr("style", "color: #7d879c !important");
    })

    
    let backgroudcart=document.querySelector(".backgroudcart");
   let cartbag=document.querySelector(".cartbag");
cartbag.addEventListener("click", function() {
    let basket = JSON.parse(localStorage.getItem("basket"));
    let fixedbox=document.querySelectorAll(".minicard");
   if (document.querySelector(".buttonsincart")!=null) {
    document.querySelector(".buttonsincart").remove();
   }

fixedbox.forEach(element => {
   element.remove();
});
    if (basket) {
        document.querySelector(".showinfo").lastElementChild.innerText=`${basket.length} item`
    document.querySelector(".emptycart").classList.add("d-none");
       
      basket.forEach(element => {
        let disabled = "";
        if (element.count < 2) {
          disabled = "disabled";
        }
        if (document.querySelector(".cartfixedbox")) {
          document.querySelector(".cartfixedbox").innerHTML += `<div  id="${element.id}" class="minicard p-3 d-flex border-bottom ">
          <div class="minicarticons col-lg-1 me-2">
          <i class="fa-solid fa-plus mb-2"></i>
              <h6>${element.count}</h6>
              <button class="border-0 bg-white minus" type="button" ${disabled}> <i  class="fa-solid fa-minus " ></i></button>
          </div>
          <div class="minicartimg col-lg-3">
              <img src="${element.image}" alt="">
          </div>
          <div class="minicartinfo col-lg-8 position-relative p-2">
              <h4>${element.desc}</h4>
              <p>$${element.price} x ${element.count}</p>
              <span>$${(element.price*element.count).toFixed(2)} </span>
              <i class="fa-solid fa-xmark position-absolute "></i>
          </div>
      </div>`
        }
     
      });
if (document.querySelector(".buttonsincart")==null) {
    document.querySelector(".cartfixedbox").innerHTML +=`  <div class="buttonsincart col-lg-11 m-auto ">
    <button color="primary " class=" checkout">Checkout Now </button>
   <a href="./cart.html"> <button color="primary" class="textapplybtn">View Cart</button> </a>
   </div>`
}
   


      let plusbtns = document.querySelectorAll(".minicard .fa-plus");
      plusbtns.forEach(button => {
    button.onclick = function (e) {

        e.stopPropagation();

        let productArr = [];
        let productId = this.parentElement.parentElement.getAttribute("id");
        if (localStorage.getItem("basket") != null) {
            productArr = JSON.parse(localStorage.getItem("basket"));
        }
        let exsistProduct = productArr.find(pr => pr.id == productId);

        if (exsistProduct) {
            exsistProduct.count++;
            this.nextElementSibling.innerText = exsistProduct.count;
            this.parentElement.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText=`${exsistProduct.price} x ${exsistProduct.count}`;
            this.parentElement.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.innerText=`${(exsistProduct.price*exsistProduct.count).toFixed(2)}.`;

        }
        if (exsistProduct.count > 1) this.parentElement.firstElementChild.removeAttribute("disabled");
        localStorage.setItem("basket", JSON.stringify(productArr));
    }
});
let minusbtn = document.querySelectorAll(".minicard .fa-minus");
minusbtn.forEach(element => {
  element.onclick = function (e) {
    e.stopPropagation();

    productArr = JSON.parse(localStorage.getItem("basket"));
    let productId = this.parentElement.parentElement.parentElement.getAttribute("id");
    let exsistProduct = productArr.find(pr => pr.id == productId);
    if (exsistProduct && exsistProduct.count > 1) {
      exsistProduct.count--;
      this.parentElement.previousElementSibling.innerText = exsistProduct.count;
      this.parentElement.parentElement.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText=`${exsistProduct.price} x ${exsistProduct.count}`;
      this.parentElement.parentElement.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.innerText=`${(exsistProduct.price*exsistProduct.count).toFixed(2)}.`;
      localStorage.setItem("basket", JSON.stringify(productArr));
    }
    if (exsistProduct.count == 1) {
      this.setAttribute("disabled", "")
    }
  
  }
});

let closebtn = document.querySelectorAll(".minicard .fa-xmark");
closebtn.forEach(element => {
  element.onclick = function (e) {
    e.stopPropagation();

    productId = this.parentElement.parentElement.getAttribute("id");
    productArr = JSON.parse(localStorage.getItem("basket")).filter(pr => pr.id != productId);
    this.parentElement.parentElement.remove();
    if (productArr.length == 0) {
      localStorage.removeItem("basket");
      document.querySelector(".buttonsincart").remove();
      console.log(document.querySelector(".emptycart"));
      document.querySelector(".emptycart").classList.remove("d-none");

    }
    else {
        localStorage.setItem("basket", JSON.stringify(productArr));
        document.querySelector(".emptycart").classList.add("d-none");
    
    }
    document.querySelector(".showinfo").lastElementChild.innerText=`${productArr.length} item`
  }
});

    }
    else{
        document.querySelector(".showinfo").lastElementChild.innerText=`0 item`
        document.querySelector(".emptycart").classList.remove("d-none");

    }
    backgroudcart.classList.remove("d-none");
})
backgroudcart.addEventListener("click", function() {
    backgroudcart.classList.add("d-none");
})





    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $(".navbarmedium").addClass("fixedbar");
        }
        else {
            $(".navbarmedium").removeClass("fixedbar")
        }
    })
});

fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(res => {
        const data = res.products;


        const searchInput = document.getElementById('searchInput');
        const resultsContainer = document.getElementById('results');

        function displayResults(results) {
            resultsContainer.innerHTML = ''; // Clear previous results
            localStorage.setItem("search", JSON.stringify(results));
            results.forEach(result => {
                const resultElement = document.createElement('a');
                resultElement.classList.add('result');
                resultElement.textContent = result.title;
                resultsContainer.appendChild(resultElement);
            });
        }

        function filterResults(searchText) {
            const filteredResults = data.filter(item => {
                return item.title.toLowerCase().includes(searchText.toLowerCase()) || item.description.toLowerCase().includes(searchText.toLowerCase());
            });

            displayResults(filteredResults);
        }
        if (searchInput) {
            searchInput.addEventListener('input', function (e) {
                const searchText = this.value.trim(); // Trim whitespace from input
                filterResults(searchText);
                document.getElementById("results").classList.remove("d-none")
                if (!this.value) {
                    document.getElementById("results").classList.add("d-none")
                }
            });
            searchInput.addEventListener('keypress', function (event) {
                if (event.key === 'Enter') {
                    window.location.assign("./search.html")
                }
            });
            displayResults(data);
        }


    })

