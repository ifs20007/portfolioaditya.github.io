// mengambil data nama, email, subject, message dari form
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");

const err_name = document.querySelector(".err_name");
const err_email = document.querySelector(".err_email");
const err_subject = document.querySelector(".err_subject");
const err_message = document.querySelector(".err_message");

let check_name = false;
let check_email = false;
let check_subject = false;
let check_message = false;

// memanggil tombol pada form
const tombol = document.querySelector(".tombol");

// email validation
const namePattern = /^[A-Za-z\s\-']+$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function toggleButton() {
  // Enable the button if all fields are valid, disable it otherwise
  if (check_name && check_email && check_subject && check_message) {
    tombol.disabled = false;
  } else {
    tombol.disabled = true;
  }
}

function cekName() {
  if (!namePattern.test(name.value)) {
    err_name.textContent =
      "*nama hanya boleh mengandung huruf, spasi, tanda hubung, dan apostrof";
    name.style.border = "1px solid red";
    check_name = false;
  } else if (name.value.length < 5 || name.value.length >= 30) {
    err_name.textContent = "*nama hanya boleh sepanjang 5-30 karakter";
    name.style.border = "1px solid red";
    check_name = false;
  } else {
    err_name.textContent = "";
    name.style.border = "1px solid grey";
    check_name = true;
  }
  toggleButton();
}

function cekEmail() {
  if (!emailPattern.test(email.value)) {
    err_email.textContent = "*harap gunakan format email yang valid";
    email.style.border = "1px solid red";
    check_email = false;
  } else {
    err_email.textContent = "";
    email.style.border = "1px solid grey";
    check_email = true;
  }
  toggleButton();
}

function cekSubject() {
  if (subject.value.length == 0) {
    err_subject.textContent = "*bagian ini wajib diisi";
    subject.style.border = "1px solid red";
    check_subject = false;
  } else {
    err_subject.textContent = "";
    subject.style.border = "1px solid grey";
    check_subject = true;
  }
  toggleButton();
}

function cekMessage() {
  if (message.value.length == 0) {
    err_message.textContent = "*bagian ini wajib diisi";
    message.style.border = "1px solid red";
    check_message = false;
  } else {
    err_message.textContent = "";
    message.style.border = "1px solid grey";
    check_message = true;
  }
  toggleButton();
}

toggleButton();

name.addEventListener("keyup", function () {
  cekName();
});
email.addEventListener("keyup", function () {
  cekEmail();
});
subject.addEventListener("keyup", function () {
  cekSubject();
});
message.addEventListener("keyup", function () {
  cekMessage();
});

tombol.addEventListener("click", function () {
  alert(
    `Nama : ${name.value}\nEmail : ${email.value}\nSubject : ${subject.value}\nMessage : ${message.value}`
  );
  name.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";
  tombol.disabled = true;
});
