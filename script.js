const products = [
    {
      id: 1,
      name: "Gaming PC",
      price: 1200,
      description: "მძლავრი სათამაშო კომპიუტერი",
      detailedDescription: "",
      imageUrl: "https://www.punchtechnology.co.uk/wp-content/uploads/2024/02/vida2-1.jpg"
    },
    {
      id: 2,
      name: "Gaming Mouse",
      price: 50,
      description: "მაუსი",
      detailedDescription: "",
      imageUrl: "https://www.cnet.com/a/img/resize/412255744a414220046161c9436eeac5f4684618/hub/2021/03/12/b3f1bae0-a41e-474e-af92-0c6be9a4db94/glorious-model-o-wired-gaming-mouse.jpg?auto=webp&fit=crop&height=1200&width=1200"
    },
    {
      id: 3,
      name: "Gaming Keyboard",
      price: 80,
      description: "მექანიკური კლავიატურა",
      detailedDescription: "",
      imageUrl: "https://s.yimg.com/uu/api/res/1.2/bcCexuuk3Pqk6oTaP5_sjQ--~B/Zmk9c3RyaW07aD03MjA7dz0xMjgwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/os/creatr-uploaded-images/2023-09/f1d09370-5c88-11ee-8eda-c69ef00457af"
    }
  ];
  

  function displayProducts() {
    const productList = document.querySelector('.product-list');
    products.forEach(product => {
      const productItem = document.createElement('div');
      productItem.classList.add('product-item');
      
      productItem.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <button onclick="location.href='product-detail.html?id=${product.id}'">ნახეთ დეტალები</button>
      `;
      
      productList.appendChild(productItem);
    });
  }
  

  displayProducts();
  