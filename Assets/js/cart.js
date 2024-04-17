


let dropsearch=document.querySelectorAll(".dropsearch");
for (let i = 0; i < dropsearch.length; i++) {
    dropsearch[i].onclick = function(){
        dropsearch[i].classList.toggle("colorchange");
        document.getElementById(dropsearch[i].getAttribute("data-id")).classList.toggle("show");

    };
    
}

  function filterFunction1() {
    const input = document.getElementById("myInput1");
    const filter = input.value.toUpperCase();
    const div = document.getElementById("myDropdown1");
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
  function filterFunction2() {
    const input = document.getElementById("myInput2");
    const filter = input.value.toUpperCase();
    const div = document.getElementById("myDropdown2");
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

  let basket =JSON.parse(localStorage.getItem("basket"));
  let basketarea=document.querySelector(".cartareabox");
if (basket) {
   basket.forEach(element => {
  console.log(element);
    basketarea.innerHTML+=`
    <div id="${element.id}" class="d-flex singlepr position-relative">
        <div class="cartprimg">
            <img src="${element.image}" alt="">
        </div>
        <div class="cartprinfo ">
            <h5>${element.desc}</h5>
            <span>$${element.price} x ${element.count} </span>
            <span class="text-danger fw-bolder">$${element.price*element.count} </span>
            <div class="countprbox position-absolute">
                <i class="fa-solid fa-plus"></i>
                <span>${element.count}</span>
                <i class="fa-solid fa-minus"></i>
            </div>
            <i class="fa-solid fa-xmark closebtn"></i>
    </div>
    </div>`
   });
}




