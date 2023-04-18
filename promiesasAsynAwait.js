function primerPromesa() {
  return new Promise((resolve, reject) =>
    setTimeout(resolve, 100, "error en la primera promesa")
  );
}

function segundaPromesa() {
  return new Promise((resolve, reject) =>
    setTimeout(resolve, 500, "Segundo hola mundo")
  );
}

primerPromesa()
  .then(segundaPromesa)
  .then(function (r) {
    console.log(r);
  });

function finalizado() {
  console.log("Todo finalizado");
}

// Promise.all([p1, p2]).then(function (resultados) {
//   console.log(resultados);
//   finalizado()
// }).catch(err => console.log(err))

async function showGitHub() {
  try {
    let response = await fetch(
      "https://api.github.com/users/Ellisvelandia/repos"
    );
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

showGitHub();
