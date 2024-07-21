function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  let fano = document.getElementById("txtano");
  let res = document.getElementById("res");

  if (fano.value.length == 0 || fano.value > ano) {
    alert("error");
  } else {
    let fsex = document.getElementsByName("radsex");
    let idade = ano - Number(fano.value);
    let genero = "";
    let img = document.createElement("img");
    let fantasma = document.getElementById("fantasma");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 3) {
        // BEBE
        img.setAttribute("src", "bebeHomem.jpg");
      } else if (idade < 10) {
        //CRIANÇA
        img.setAttribute("src", "criancaHomem.jpg");
      } else if (idade < 18) {
        //ADOLESCENTE
        img.setAttribute("src", "adolescenteHomem.jpg");
      } else if (idade < 30) {
        //JOVEM
        img.setAttribute("src", "jovemHomem.jpg");
      } else if (idade < 50) {
        //ADULTO
        img.setAttribute("src", "adultoHomem.jpg");
      } else if (idade < 65) {
        //ADULTO2
        img.setAttribute("src", "adulto2Homem.jpg");
      } else if (idade < 99) {
        //IDOSO
        img.setAttribute("src", "idosoHomem.jpg");
      } else {
        //FANTASMA
        img.setAttribute("src", "fantasma.jpg");
        fantasma.innerHTML = " buuuuh ";
      }
    } else {
      genero = "Mulher";
      if (idade >= 0 && idade < 3) {
        // BEBE
        img.setAttribute("src", "bebeMulher.jpg");
      } else if (idade < 10) {
        //CRIANÇA
        img.setAttribute("src", "criancaMulher.jpg");
      } else if (idade < 18) {
        //ADOLESCENTE
        img.setAttribute("src", "adolescenteMulher.jpg");
      } else if (idade < 30) {
        //JOVEM
        img.setAttribute("src", "jovemMulher.jpg");
      } else if (idade < 50) {
        //ADULTO
        img.setAttribute("src", "adultoMulher.jpg");
      } else if (idade < 65) {
        //ADULTO2
        img.setAttribute("src", "adulto2Mulher.jpg");
      } else if (idade < 99) {
        img.setAttribute("src", "idosoMulher.jpg");
        //IDOSO
      } else {
        //FANTASMA
        img.setAttribute("src", "fantasma.jpg");
        fantasma.innerHTML = "  buuuuh ";
      }
    }
    fantasma.style.textAlign = "center";
    res.style.textAlign = "center";
    img.style.marginTop = "10px";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade!`;
    res.appendChild(img);
  }
}

document.getElementById("txtano").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    verificar();
  }
});
