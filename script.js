const imagens = [
  "https://drive.google.com/uc?id=ID_IMAGEM_1",
  "https://drive.google.com/uc?id=ID_IMAGEM_2"
];

const galeria = document.getElementById("galeria");

imagens.forEach((url) => {
  const img = document.createElement("img");
  img.src = url;
  img.onload = () => img.classList.add("loaded");
  galeria.appendChild(img);
});
