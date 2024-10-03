let confirm = document.querySelector(".trial");

function confirmation(event) {
  event.preventDefault();
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let unvalid = document.querySelector(".unvalid");
  let emailInput = document.querySelector(".email").value;

  if (emailPattern.test(emailInput)) {
    let header = document.querySelector("h1");
    header.innerHTML = "Thanks for subscribing!";
    unvalid.style = "display:none";
  } else {
    unvalid.style = "display: block";
  }
}

confirm.addEventListener("click", confirmation);
