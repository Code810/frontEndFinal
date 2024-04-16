$(document).ready(function () {
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
     let div = document.querySelector(".flashproducts");
     let div2 = document.querySelector(".flashproducts2");
     let topproducts=document.querySelector(".topproducts");
     let bigdiscount=document.querySelector(".bigdiscountslide");
     let carproducts=document.querySelector(".carproducts");
     let mobilphones=document.querySelector(".mobilphones");
     let optics=document.querySelector(".optics");

            for (let i = 0; i < 9; i++) {
                div.innerHTML += `<div class="cardbox  col-4 col-lg-3 position-relative ">
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
             <h3 >$${(res.products[i].price-(res.products[i].price*res.products[i].discountPercentage)/100).toFixed(2)}</h3>
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

     topproducts.innerHTML+=`  <div class="productcards col-sm-12 col-lg-4">
     <p>${res.products[i].category}</p>
     <div class="topimages d-flex col-lg-12">
     <div class="topimagesw"> <img src="${res.products[i].images[0]}" alt=""></div>
     <div class="topimagesw"> <img src="${res.products[i].images[1]}" alt=""></div>
     <div class="topimagesw"> <img src="${res.products[i].images[2]}" alt=""></div>
     </div>
     <p>3k orders this week</p>
 </div>`

 bigdiscount.innerHTML+=`  <div class="bigdisccard col-lg-2 bg-white mx-2 p-3">
 <div class="bigdiscimg"><img src="${res.products[i].images[0]}" alt=""></div>
 <div class="my-2">
     <h3 class="my-2 overflow-hidden text-nowrap">${res.products[i].title}</h3>
     <div class="pricebox d-flex gap-3 mt-3 ">
             <h3 >$${(res.products[i].price-(res.products[i].price*res.products[i].discountPercentage)/100).toFixed(2)}</h3>
             <h3>$${res.products[i].price}</h3>
         </div>
 </div>
</div>`

if (i<6) {
    carproducts.innerHTML += `<div class="cardbox col-lg-4 col-6 position-relative ">
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
    <h3 >$${(res.products[i].price-(res.products[i].price*res.products[i].discountPercentage)/100).toFixed(2)}</h3>
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

mobilphones.innerHTML += `<div class="cardbox col-lg-4 col-6 position-relative m-1">
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
    <h3 >$${(res.products[i].price-(res.products[i].price*res.products[i].discountPercentage)/100).toFixed(2)}</h3>
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

optics.innerHTML += `<div class="cardbox col-lg-4 position-relative m-1">
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
    <h3 >$${(res.products[i].price-(res.products[i].price*res.products[i].discountPercentage)/100).toFixed(2)}</h3>
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


if (i<8) {
    div2.innerHTML += `<div class="cardbox  col-lg-3 col-6 position-relative ">
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
             <h3 >$${(res.products[i].price-(res.products[i].price*res.products[i].discountPercentage)/100).toFixed(2)}</h3>
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

            }
            $('.bigdiscountslide').slick({
                infinite: false,
                speed: 300,
                slidesToShow:6,
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
                slidesToShow:4,
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

  


    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();    
        if (scroll >= 100) {
            $(".navbarmedium").addClass("fixedbar");
        }
        else{
            $(".navbarmedium").removeClass("fixedbar")
        }
    })













});

