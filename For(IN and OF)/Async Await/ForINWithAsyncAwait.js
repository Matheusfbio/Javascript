const tasks = {
  prepararCafe: 1000,
  limparMesa: 3000,
  estudarJavaScript: 2000,
};

async function taskTimeRunner() {
  for (const key in tasks) {
    console.log(`Iniciando ${key}...`);
    await new Promise((resolve) => setTimeout(resolve, tasks[key]));
    console.log(`Concluindo ${key}`);
  }
}

taskTimeRunner();
