function searchProduct() {

const code = document.getElementById("search").value.trim();

const result = document.getElementById("result");

if (code === "") {
    result.innerHTML = "<div class='card'><h2>Please Enter Item Code</h2></div>";
    return;
}

const product = products[code];

if (!product) {
    result.innerHTML = "<div class='card'><h2>Product Not Found</h2></div>";
    return;
}

result.innerHTML = `
<div class="card">

<h2>${product.name}</h2>

<div class="row"><b>Item Code :</b> ${product.code}</div>

<div class="row"><b>Stock :</b> <span class="available">${product.stock} PCS</span></div>

<div class="row"><b>Price :</b> ${product.price}</div>

<div class="row"><b>Warehouse :</b> ${product.warehouse}</div>

<div class="row"><b>Status :</b> ${product.status}</div>

</div>
`;
result.innerHTML += `
<br>
<a href="product.html?id=${product.code}">
<button style="padding:10px 20px;background:#d4af37;border:none;border-radius:6px;cursor:pointer;">
View Product
</button>
</a>
`;
}

document.getElementById("search").addEventListener("keypress", function(e){

if(e.key==="Enter"){
searchProduct();
}

});