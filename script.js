
//for opening state in main page-------------------------------------------------nav page
function navigateToState() {
    const select = document.getElementById("stateSelect");
    const url = select.value;
    if (url) {
      parent.frames['mainFrame'].location.href =url;
    }
  }

  //for adding to Cart----------------------------------------------------add to Cart

  function addToCart(name, price) {
    let CartItems = JSON.parse(localStorage.getItem("CartItems")) || [];
    CartItems.push({ name, price });
    localStorage.setItem("CartItems", JSON.stringify(CartItems));
    alert(`${name} added to your Cart!`);
  }
    

