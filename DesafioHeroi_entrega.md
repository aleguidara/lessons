const herois = [
    { nome: "Uncle Remus", xp: 50000 },
    { nome: "Suzy Creamcheese", xp: 2500 },
    { nome: "Nanook Nanot", xp: 7000 },
    { nome: "Charleena", xp: 8600 },
  ];
  
  for (const heroi of herois) {
    let rank;
  
    if (heroi.xp < 1000) {
      rank = "Ferro";
    } else if (heroi.xp <= 2000) {
      rank = "Bronze";
    } else if (heroi.xp <= 5000) {
      rank = "Prata";
    } else if (heroi.xp <= 7000) {
      rank = "Ouro";
    } else if (heroi.xp <= 8000) {
      rank = "Platina";
    } else if (heroi.xp <= 9000) {
      rank = "Ascendente";
    } else if (heroi.xp <= 10000) {
      rank = "Imortal";
    } else {
      rank = "Radiante";
    }
  
    console.log(`O Herói de nome ${heroi.nome} está no nível de ${rank}`);
  }