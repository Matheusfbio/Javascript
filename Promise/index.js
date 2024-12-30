function MockPromise() {
  const spinnerFrames = ["-", "\\", "|", "/"];
  let i = 0;

  // Inicia o spinner
  const spinner = setInterval(() => {
    process.stdout.write(
      `\r${spinnerFrames[i++ % spinnerFrames.length]} Carregando...`
    );
  }, 100); // Atualiza o spinner a cada 100ms

  let promise = new Promise((resolve, reject) => {
    let result = true;
    let time = 4000;

    setTimeout(() => {
      if (result) {
        clearInterval(spinner); // Para o spinner
        resolve("\nAAAEEEE");
      } else {
        clearInterval(spinner); // Para o spinner
        reject("\nLascou");
      }
    }, time);
  });

  promise.then((retrn) => {
    console.log("\nDale");
  });
  promise.catch((retrn) => {
    console.log("\nIHHHHH");
  });
}

MockPromise();

module.exports = { MockPromise };
