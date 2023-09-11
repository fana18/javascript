const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const Users = JSON.parse(localStorage.getItem("users")) || [];
  const validUser = Users.find(
    (user) => user.email === email && user.password === password
  );
  if (!validUser) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "usuario incorrecto!",
    });
  }
  alert(`Bienvenido ${validUser.name}`);
  localStorage.setItem("login_success", JSON.stringify(validUser));
  window.location.href = "../html/productos.html";
});
