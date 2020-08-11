const ENDPOINT = "comments";

document.querySelector("#form").addEventListener("submit", function (e) {
  e.preventDefault(); //stop form from submitting
  const name = document.querySelector("#form-name");
  const email = document.querySelector("#form-email");
  const description = document.querySelector("#form-description");

  const data = {
    name: name.value,
    email: email.value,
    description: description.value,
  };

  fetch(API_URL + ENDPOINT, {
    method: "post",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Dados enviados com sucesso!");
    })
    .catch((err) => {
      alert("Ocorreu um problema ao tentar enviar os dados :(");
    });
});
