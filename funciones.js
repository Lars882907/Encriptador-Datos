const campo_texto =
  document.querySelector("#texto-ecriptado"); /* datos ingresados textarea1 */
const campo_mensaje =
  document.querySelector("#campo-mensaje"); /* datos a mostrar */

const matriz_code = [
  ["a", "xml"],
  ["e", "en"],
  ["i", "sit"],
  ["o", "pa"],
  ["u", "uk"],
];

function btnEncriptar() {
  const texto = Encriptar(campo_texto.value);
  campo_mensaje.value = texto;
}

function Encriptar(fraseEncriptada) {
  for (let i = 0; i < matriz_code.length; i++) {
    if (fraseEncriptada.includes(matriz_code[i][0])) {
      fraseEncriptada = fraseEncriptada.replaceAll(
        matriz_code[i][0],
        matriz_code[i][1]
      );
    }
  }
  return fraseEncriptada;
}

/* desencriptar */

function btnDesencriptar() {
  const texto_des = Desencriptar(campo_texto.value);
  campo_mensaje.value = texto_des;
}

function Desencriptar(fraseDensecriptada) {
  for (let i = 0; i < matriz_code.length; i++) {
    if (fraseDensecriptada.includes(matriz_code[i][1])) {
      fraseDensecriptada = fraseDensecriptada.replaceAll(
        matriz_code[i][1],
        matriz_code[i][0]
      );
    }
  }
  return fraseDensecriptada;
}
