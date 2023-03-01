totalPrice();
append();

function totalPrice() {
  let total = 0;
  let items = JSON.parse(localStorage.getItem("items"));

  for (let i = 0; i < items.length; i++) {
    total += Number(items[i].price);
  }

  let h2 = document.getElementById("cart_total");
  h2.innerText = total;
}

function append() {
  let data = JSON.parse(localStorage.getItem("items"));
  let container = document.getElementById("cart");
  container.innerHTML = null;
  data.forEach((el, i) => {
    let div = document.createElement("div");
    div.setAttribute("class", "item");

    let img = document.createElement("img");
    img.src = el.image;
    let p1 = document.createElement("p");
    p1.innerText = el.name;
    let p2 = document.createElement("p");
    p2.innerText = el.price;

    let btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.setAttribute("class", "remove");
    btn.onclick = () => {
      data = data.filter((el, index) => {
        return index !== i
      })

      localStorage.setItem("items", JSON.stringify(data));
      append()
      totalPrice()
    };

    div.append(img, p1, p2, btn);

    container.appendChild(div);
  });
}

