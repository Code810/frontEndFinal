$(document).ready(function () {
    chevron = $(".navbartopright i");
    chevron.on("click", function () {
        $(`#${$(this).attr("data-id")}`).toggle();
    });
    $(".ctgbtn").on("click", function () {
        console.log($(".chevronlg"));
        $(".chevronlg").toggleClass("rotate");
    })


    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(res => {
            let div = document.querySelector(".flashproducts")
console.log(res.products);
            for (let i = 0; i < 8; i++) {
                div.innerHTML += `<div class="cardbox col-lg-3 position-relative ">
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

     let topproducts=document.querySelector(".topproducts")
     topproducts.innerHTML+=`  <div class="productcards">
     <p>${res.products[i].category}</p>
     <div class="topimages d-flex col-lg-12">
     <div class="topimagesw"> <img src="${res.products[i].images[0]}" alt=""></div>
     <div class="topimagesw"> <img src="${res.products[i].images[1]}" alt=""></div>
     <div class="topimagesw"> <img src="${res.products[i].images[2]}" alt=""></div>
     </div>
     <p>3k orders this week</p>
 </div>`
            }

            $('.flashproducts').slick({
                dots: true,
                infinite: false,
                speed: 300,
                slidesToShow:4,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
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
            $('.topproducts').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
              });
        });


    $('.your-class').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 300,
        adaptiveHeight: true
    });

  



















});

