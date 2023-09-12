const signupForm = document.querySelector("#signupForm");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  const Users = JSON.parse(localStorage.getItem("users")) || [];
  const isUserRegistered = Users.find((user) => user.email === email);
  if (isUserRegistered) {
    return Swal.fire({
      title: "Registro Exitoso.",
      width: 600,
      padding: "3em",
      color: "#716add",
      timer: 3000,
      background: "#fff url(/images/trees.png)",
      backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `,
    });
  }

  Users.push({ name: name, email: email, password: password });
  localStorage.setItem("users", JSON.stringify(Users));
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "regitrado",
    showConfirmButton: false,
    timer: 2000,
  });

  window.location.href = "login.html";
});
