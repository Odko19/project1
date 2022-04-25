const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  const navbar = document.querySelector("#navbar");
  navbar.innerHTML = this.responseText;
};
xhr.open("GET", "navbar.html", true);
xhr.send();

const xhr1 = new XMLHttpRequest();
xhr1.onreadystatechange = function () {
  const footer = document.querySelector("#footer");
  footer.innerHTML = this.responseText;
};
xhr1.open("GET", "fooder.html", true);
xhr1.send();
