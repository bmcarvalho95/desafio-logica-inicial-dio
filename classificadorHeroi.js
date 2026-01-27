const readline = require("readline");

// Criando interface para ler dados do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Perguntar o nome do herói
rl.question("Digite o nome do herói: ", function (nomeHeroi) {

    // Perguntar o XP do herói
    rl.question("Digite o XP do herói: ", function (xpHeroi) {

        xpHeroi = parseInt(xpHeroi); // Converter texto em número
        let nivel = "";

        // Estrutura de decisão para definir o nível
        if (xpHeroi < 1000) {
            nivel = "Ferro";
        } else if (xpHeroi <= 2000) {
            nivel = "Bronze";
        } else if (xpHeroi <= 5000) {
            nivel = "Prata";
        } else if (xpHeroi <= 7000) {
            nivel = "Ouro";
        } else if (xpHeroi <= 8000) {
            nivel = "Platina";
        } else if (xpHeroi <= 9000) {
            nivel = "Ascendente";
        } else if (xpHeroi <= 10000) {
            nivel = "Imortal";
        } else {
            nivel = "Radiante";
        }

        // Mostrar resultado final
        console.log(`\nO Herói de nome ${nomeHeroi} está no nível de ${nivel}`);

        rl.close(); // Encerrar leitura
    });
});
