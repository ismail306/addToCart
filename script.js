document
  .getElementById("increase-quantity")
  .addEventListener("click", function () {
    const quantity = parseFloat(document.getElementById("quantity").value) + 1;
    document.getElementById("quantity").value = quantity;
    const price = parseInt(document.getElementById("price").innerText);
    const total = quantity * price;
    document.getElementById("total").innerText = total;
  });
