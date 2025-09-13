
// card-containe
const manageSpinner = (status) => {
  if (status == true) {
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("card-container").classList.add("hidden");
  } else {
    document.getElementById("card-container").classList.remove("hidden");
    document.getElementById("spinner").classList.add("hidden");
  }
};

// load categories
const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => {
      displayCategory(json.categories);
    });
};
// ------------------------

// remove selector
const removeActive = () => {
  const categoryButton = document.querySelectorAll(".category");
  // console.log(categoryButton)
  categoryButton.forEach((btn) => btn.classList.remove("active"));
};

// load details

const loadDetails = async (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  // console.log(url)
  const res = await fetch(url);
  const details = await res.json();
  displayDetails(details.plants);
};

//  display details

const displayDetails = (plant) => {
  console.log(plant);
  const detailsBox = document.getElementById("details-container");
  detailsBox.innerHTML = `
  <div class=" bg-white rounded-xl p-4 shadow flex flex-col gap-2">
    <div  onclick="loadDetails(${plant.id})" class="font-semibold text-2xl">${plant.name} </div>
   <div class="h-60   bg-gray-200 rounded-lg  mb-2 overflow-hidden"><img class='w-full h-full object-cover' src="${plant.image}" alt="${plant.name}">
   </div>

  
  <div class="mt-2 text-black">
    <span class="py-1 rounded  text-xl font-bold"
      >Category: ${plant.category} </span
    >
    <br> <span class="font-bold text-gray-600 wow">Price:৳${plant.price} </span>
  </div>
  <div class="text-xs font-bold  text-gray-400 h-12 overflow-hidden " >Description:
   <span class= "text-[10px]"> ${plant.description}</span>
  </div>
</div>
  `;
  document.getElementById("my_modal_5").showModal();
};

// load cards

const loadCards = (id) => {
  manageSpinner(true);
  const url = `https://openapi.programming-hero.com/api/category/${id} `;

  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      removeActive();
      const categoryBtn = document.getElementById(`categories-btn-${id}`);
      //  console.log(categoryBtn)
      categoryBtn.classList.add("active");
      displayCards(json.plants);
    });
};
//  this is for when all refresh show all items
window.onload = function () {
  const loadCards = () => {
    const url = `https://openapi.programming-hero.com/api/plants`;

    fetch(url)
      .then((res) => res.json())
      .then((json) => displayCards(json.plants));
  };
  manageSpinner(true);
  loadCards();
};

//  display all cards

const displayCards = (plants) => {
  // console.log(plants)
  const plantContainer = document.getElementById("card-container");
  plantContainer.innerHTML = "";
  plants.forEach((plant) => {
    console.log(plant);
    const card = document.createElement("div");
    card.innerHTML = `
     <div class=" bg-white rounded-xl p-4 shadow flex flex-col gap-2">
  <div class="h-60   bg-gray-200 rounded-lg  mb-2 overflow-hidden"><img class='w-full h-full object-cover' src="${plant.image}" alt="${plant.name}"></div>
  <div id="${plant.id}" onclick="loadDetails(${plant.id})" class="font-semibold">${plant.name} </div>
  <div class="text-xs  text-gray-400 h-12 overflow-hidden " >
   ${plant.description}
  </div>
  <div class="flex items-center justify-between mt-2">
    <span class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs"
      >${plant.category} </span
    >
    <span class="font-bold text-gray-600 wow">৳${plant.price} </span>
  </div>
  <button 
    class="mt-3 bg-[#15803D] text-white rounded-full py-2 font-semibold hover:bg-green-700"
  >
    Add to Cart
  </button>
</div>
    
    `;
    plantContainer.append(card);
  });
  manageSpinner(false);
};

//  display all categories
const displayCategory = (categories) => {
  const categoriesContainer = document.getElementById("categories-container");
  categoriesContainer.innerHTML = "";

  categories.forEach((categories) => {
    console.log(categories);
    const allLi = document.createElement("ul");
    allLi.innerHTML = `
      <li>
                  <button id='categories-btn-${categories.id}' onclick=" loadCards(${categories.id})"
                    class="category w-full text-left px-4 py-2 rounded hover:bg-[#D1FADF]"
                  >
                   ${categories.category_name}
                  </button>
                </li>

     `;
    categoriesContainer.append(allLi);
  });
  manageSpinner(false);
};
loadCategory();

const cartBtn = document.getElementById("card-container");
const addtoCart = document.getElementById("add-to-cart-container");

cartBtn.addEventListener("click", (e) => {
  // console.log(e.target)
  // console.log(e.target.innerText)
  if (e.target.innerText === "Add to Cart") {
    // console.log('woriking')
    const name = e.target.parentNode.children[1].innerText;
    const id = e.target.parentNode.id;
    console.log(id);
  }
});





let cart = [];

// Add to Cart 
document
  .getElementById("card-container")
  .addEventListener("click", function (e) {
    if (e.target.innerText === "Add to Cart") {
      const card = e.target.closest("div.bg-white");
      const name = card.querySelector(".font-semibold").innerText;
      const priceText = card.querySelector(
        ".wow"
      ).innerText;
      const price = parseInt(priceText.slice(1));
       alert(`${name} added to your cart `);
      // Only add if not already in cart
      if (!cart.find((item) => item.name === name)) {
        cart.push({ name, price });
        allCart();
      }
    }
  });

// Remove from Cart
document
  .getElementById("addtocart-container")
  .addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
      const li = e.target.closest("li");
      const name = li.querySelector("span").innerText;
      cart = cart.filter((item) => item.name !== name);
      allCart();
    }
  });

function allCart() {
  const cartList = document.querySelector("#addtocart-container ul");
  cartList.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    total += item.price;
    const li = document.createElement("li");
    li.innerHTML = `
   
  <li class="flex items-center bg-green-100 rounded px-2 py-1 gap-2">
  <div class="flex justify-between w-full">
    <span class="text-sm font-medium w-30 ">${item.name}</span>
    <span class="text-sm font-medium text-right">৳${item.price}</span>
  </div>
  <button class="text-gray-400 hover:text-red-500 md:mt-0">&times;</button>
</li>
    `;
    cartList.appendChild(li);
  });

  //  Update the total in the cart section  ---
 
  const totalDiv = document.querySelector(
    "#addtocart-container .font-semibold.flex.justify-between"
  );
  if (totalDiv) {
    const totalSpan = totalDiv.querySelector("span:last-child");
    if (totalSpan) {
      totalSpan.innerText = `৳${total}`;
    }
  }
  
}


