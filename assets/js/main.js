var header = document.querySelector(".head");
var logo = document.querySelector(".navbar-brand img");
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

document.addEventListener("scroll", () => {
  if (window.scrollY !== 0) {
    header.classList.add("nav-show", "position-fixed");
    logo.src = "assets/images/logo2.png";
    logo.style.width = "150px";
  } else if (window.scrollY == 0) {
    header.classList.remove("nav-show", "position-fixed");
    logo.src = "assets/images/logo.png";
    logo.style.width = "100px";
  }
});
if (window.scrollY !== 0) {
  header.classList.add("nav-show", "position-fixed");
}

var swiper = new Swiper(".main-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "dhanrajadityagupta8.adg@gmail.com",
    Password: "F4BA3DBB3F8C291853B2042406185EA7EA07",
    To: "adityadg.09@gmail.com",
    From: "dhanrajadityagupta8.adg@gmail.com",
    Subject: "Enquiry Form",
    Body:
      "Name:" +
      document.getElementById("fullname").value +
      "<br> Email:" +
      document.getElementById("email").value +
      "<br> Current Salary:" +
      document.getElementById("csalary").value +
      "<br> Expected Salary:" +
      document.getElementById("esalary").value +
      "<br> Current Post:" +
      document.getElementById("cpost").value +
      "<br> Mobile no:" +
      document.getElementById("phone").value +
      "<br> Message:" +
      document.getElementById("Message").value,
  }).then((message) => alert("Message Sent Successfully"));
}

function sendmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "dhanrajadityagupta8.adg@gmail.com",
    Password: "F4BA3DBB3F8C291853B2042406185EA7EA07",
    To: "adityadg.09@gmail.com",
    From: "dhanrajadityagupta8.adg@gmail.com",
    Subject: "Enquiry Form",
    Body:
      "Name:" +
      document.getElementById("name").value +
      "<br> Email:" +
      document.getElementById("email-id").value +
      "<br> Date:" +
      document.getElementById("datee").value +
      "<br>Time:" +
      document.getElementById("time").value +
      "<br> Message:" +
      document.getElementById("mess").value,
  }).then((message) => alert("Message Sent Successfully"));
}

var swiper = new Swiper(".partner", {
  slidesPerView: 5,
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  grabCursor: true,
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    400: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 50,
    },
  },
});

$(".counter").counterUp({
  delay: 10,
  time: 2000,
});

new WOW().init();
