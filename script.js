
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
    <p class="price"> product price </p>
  `; // pass the product title, category and price here
    container.appendChild(div);
  }

}


function handleSearch() {
  // write the searching logic
}

function handleSort() {
// write the sorting logic
}

renderProducts(products);

