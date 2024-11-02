
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}


function loadProductDetail() {
    const productId = getQueryParam('id');
    const product = products.find(p => p.id == productId); 

    if (product) {
        document.getElementById('product-image').src = product.imageUrl;
        document.getElementById('product-name').innerText = product.name;
        document.getElementById('product-description').innerText = product.description;
        document.getElementById('product-price').innerText = product.price;
        document.getElementById('product-detailed-description').innerText = product.detailedDescription;
    } else {
        
        document.getElementById('product-detail').innerHTML = '<h2>Product not found</h2>';
    }
}


loadProductDetail();
