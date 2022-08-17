// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')
  const res = product.querySelector('.subtotal span')
  const p1 = parseFloat(price.innerHTML)
  const qty = quantity.valueAsNumber
  const s = p1 * qty
  res.innerHTML = s
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let totalPro = 0
  const allProducts = document.querySelectorAll('.product')
  allProducts.forEach(function(singleProduct) {
    const totalEle = updateSubtotal(singleProduct);
    totalPro += totalEle
  });
  return updateSubtotal();
  
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
