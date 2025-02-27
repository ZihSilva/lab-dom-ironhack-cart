// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')
  const result = product.querySelector('.subtotal span')
  const p1 = parseFloat(price.innerHTML)
  const qty = quantity.valueAsNumber
  let subtotal = p1 * qty
  result.innerHTML = subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product')

  let totalPro = 0
  allProducts.forEach(function (singleProduct) {
    const totalEle = updateSubtotal(singleProduct);
    totalPro += totalEle
  });

  // ITERATION 3
  const total= document.querySelector('#total-value span')
  total.innerHTML = totalPro
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
