let search = document.querySelector(".search-box");

document.querySelector("#search-icon").onclick = () => {
  search.classList.toggle("active");
  navbar.classList.remove("active");
};

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-icon").onclick = () => {
  navbar.classList.toggle("active");
  search.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  search.classList.remove("active");
};

let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

function saveContact() {
  // Get the forms values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  // To creat the object to represent the contact
  var contact = {
    name: name,
    email: email,
  };

  // Convert the object into a JSon String
  var contactString = JSON.stringify(contact);

  // To save the string JSON on localStorage
  localStorage.setItem("contact", contactString);

  // Clear the form fields after saving
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";

  alert("Contact saved successfully!");
}