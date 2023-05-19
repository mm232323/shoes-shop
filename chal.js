let pic1 = document.getElementById("pic1")
let pic2 = document.getElementById("pic2")
let pic3 = document.getElementById("pic3")
let pic4 = document.getElementById("pic4")
let prod1 = document.getElementById("prod1");
let prod2 = document.getElementById("prod2");
let prod3 = document.getElementById("prod3");
let prod4 = document.getElementById("prod4");
let fpic1 = document.getElementById("fpic1");
let fpic2 = document.getElementById("fpic2");
let fpic3 = document.getElementById("fpic3");
let fpic4 = document.getElementById("fpic4");
let divy = document.getElementById("divy")
let cl = document.getElementById("close")
let incr = document.getElementById("increment")
let decr = document.getElementById("decrement")
let order = document.getElementById("order")
let ord = document.getElementById("ord")
let cart = document.getElementById("cartB")
let person = document.getElementById('person')
let sub = document.getElementById("sub")
let lprod1 = document.getElementById("lprod1")
let cartf = document.getElementById("cartf")
let spa2 = document.getElementById("spa2")
let pricef = document.getElementById("pricef")
let lastPrice = document.getElementById("lastPrice")
let check = document.getElementById("check")
function littleO(p) {
  return p.style.cssText = 'opacity:60%;transition-druation:.3s;'
}
function muchO(p) {
  return p.style.cssText = "opacity:100%;transition-druation:.3s;";
}
function hideP(p) {
  return p.style.cssText = 'opacity:0%;filter:blur(7px);transition-duration:.5s;z-index:-1'
}
function showP(p) {
  return p.style.cssText = 'opacity:100%;filter:blur(0);transition-duration:.5s;z-index:4'
}
function showpro(fp) {
  return fp.style.cssText = 'opacity:100%;filter:blur(0);transition-duration:.5s;transform:scale(1) translate(-50%,-50%)'
}
function hidepro(fp) {
  return (fp.style.cssText =
    "opacity:0%;filter:blur(7px);transition-duration:.5s;transform:scale(0) translate(-50%,-50%)");
}
prod1.click
prod1.onclick = () => {
  littleO(prod1);
  muchO(prod2);
  muchO(prod3);
  muchO(prod4);
  showP(pic1);
  hideP(pic2);
  hideP(pic3);
  hideP(pic4);
}
prod2.onclick = () => {
  muchO(prod1);
  littleO(prod2);
  muchO(prod3);
  muchO(prod4);
  showP(pic2);
  hideP(pic1);
  hideP(pic3);
  hideP(pic4);
};
prod3.onclick = () => {
  muchO(prod1);
  muchO(prod2);
  littleO(prod3);
  muchO(prod4);
  showP(pic3);
  hideP(pic1);
  hideP(pic2);
  hideP(pic4);
};
prod4.onclick = () => {
  muchO(prod1);
  muchO(prod2);
  muchO(prod3);
  littleO(prod4);
  showP(pic4);
  hideP(pic1);
  hideP(pic2);
  hideP(pic3);
};
pic1.onclick = () => {
  showpro(fpic1)
  hidepro(fpic2)
  hidepro(fpic3)
  hidepro(fpic4);
  divy.style.cssText = 'opacity:100%;z-index:6;transition-duration:.5s;'
  cl.style.cssText = 'opacity:100%;z-index:6;trasition-duration:.5s;'
}
pic2.onclick = () => {
  hidepro(fpic1);
  showpro(fpic2);
  hidepro(fpic3);
  hidepro(fpic4);
  divy.style.cssText = "opacity:100%;z-index:6;transition-duration:.5s;";
  cl.style.cssText = "opacity:100%;z-index:6;trasition-duration:.5s;";
};
pic3.onclick = () => {
  hidepro(fpic1);
  hidepro(fpic2);
  showpro(fpic3);
  hidepro(fpic4);
  cl.style.cssText = 'opacity:100%;z-index:6;trasition-duration:.5s;'
  divy.style.cssText = "opacity:100%;z-index:6;transition-duration:.5s;";
};
pic4.onclick = () => {
  hidepro(fpic1);
  hidepro(fpic2);
  hidepro(fpic3);
  showpro(fpic4);
  cl.style.cssText = 'opacity:100%;z-index:6;trasition-duration:.5s;'
  divy.style.cssText = "opacity:100%;z-index:6;transition-duration:.5s;";
};
cl.onclick = () => {
  hidepro(fpic1)
  hidepro(fpic2)
  hidepro(fpic3)
  hidepro(fpic4);
  cl.style.cssText = 'opacity:0%;z-index:-4;transition-duration:.5s;'
  divy.style.cssText = 'opacity:0%;z-index:-4;transition-duration:.5s;'
}
incr.onclick = () => {
  order.innerHTML = Number(order.innerHTML) + 1
  if (Number(order.innerHTML) > 0) {
    ord.style.cssText = "opacity:100%;transition-duration:.5s;";
    ord.innerHTML = order.innerHTML
  }
  else {
    ord.style.cssText = 'opacity:0%;transition-duration:.5s'
  }
}
decr.onclick = () => {
  order.innerHTML = Number(order.innerHTML) - 1;
  if (Number(order.innerHTML) > 0) {
    ord.style.cssText = "opacity:100%;transition-duration:.5s;";
    ord.innerHTML = order.innerHTML
  }
  else {
    order.innerHTML = 0
    ord.style.cssText = "opacity:0%;transition-duration:.5s";
    ord.innerHTML = 0
  }
};
person.onclick = () => {
  cart.classList.toggle('Acart-box')
  cart.classList.toggle("Ucart-box")
}
sub.onclick = () => {
  if (Number(order.innerHTML) == 0) {
    lprod1.style.cssText = 'opacity:0%;filter:blur(6px);transition-duration:.5s'
    cartf.style.cssText = 'opacity:0;filter:blur(6px);transition-duration:.5s;'
    spa2.innerHTML = '0'
    spa2.style.cssText = 'opacity:0;filter:blur(6px);transition-duration:.5s;'
    pricef.style.cssText = 'opacity:0;filter:blur(6px);transition-duration:.5s'
    lastPrice.style.cssText = 'opacity:0;fliter:blur(6px);transition-duration:.5s;'
    lastPrice.innerHTML = '0'
    check.style.cssText = "opacity:0;fliter:blur(6px);transition-duration:.5s;";
  }
  else {
    cart.classList.add('Acart-box')
    cart.classList.remove('Ucart-box')
    lprod1.style.cssText = 'opacity:100%;filter:blur(0);transition-duration:.5s;'
    cartf.style.cssText =
      "opacity:100%;filter:blur(0);transition-duration:.5s;";
    spa2.innerHTML = order.innerHTML
    spa2.style.cssText = "opacity:100;filter:blur(0);transition-duration:.5s;";
    pricef.style.cssText = "opacity:100%;filter:blur(0);transition-duration:.5s";
    lastPrice.style.cssText = 'opacity:100%;filter:blur(0);transition-duration:.5s;'
    lastPrice.innerHTML = `$${125 * Number(order.innerHTML)}`
        check.style.cssText =
          "opacity:100%;filter:blur(0);transition-duration:.5s;";
  }
}