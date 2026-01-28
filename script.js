
const products = [
  { title: "iPhone 14", category: "Mobile", price: 70000 },
  { title: "Samsung Galaxy", category: "Mobile", price: 55000 },
  { title: "MacBook Air", category: "Laptop", price: 95000 },
  { title: "HP Pavilion", category: "Laptop", price: 65000 },
  { title: "Sony Headphones", category: "Accessories", price: 5000 },
  { title: "Bluetooth Speaker", category: "Accessories", price: 3000 }
];

let filteredProducts = [...products];


function renderProducts(data) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML = "<p>No products found</p>";
    return;
  }

  for (const product of data) {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
    <h3>product title</h3>  
    <p>product category</p>
    <p class="price"> product price</p>
  `; // pass the product title, category and price here
    container.appendChild(div);
  }

}

// access the input box to get search value
// assigned filteredProducts as an empty array in order to store new searched product
// check if search value is present / included in product title or not
// if yes then push that product in filteredProducts array

function handleSearch() {
  // write the searching logic
  
}


// access the sortvalue
// will make shallow copy of filteredProducts on which will do sorting
// then sort the product price based on the option selected by user
// and pass this sorted data to renderProducts

function handleSort() {
    // write the sorting logic

}

renderProducts(products);

