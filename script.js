// LINKS DAS IMAGENS (substitua pelos IDs reais do Google Drive)
const imagens = [
  "https://drive.google.com/uc?id=IMAGEM_ID_1",
  "https://drive.google.com/uc?id=IMAGEM_ID_2",
  "https://drive.google.com/uc?id=IMAGEM_ID_3"
];

// Galeria
const galeria = document.getElementById("galeria");

imagens.forEach((url, index) => {
  const a = document.createElement("a");
  a.href = url;
  a.setAttribute("data-lightbox", "galeria");
  a.setAttribute("data-title", `Foto ${index + 1}`);

  const img = document.createElement("img");
  img.src = url;
  img.alt = `Foto ${index + 1}`;
  img.onload = () => img.classList.add("loaded");

  a.appendChild(img);
  galeria.appendChild(a);
});

// Alternância de tema (claro/escuro)
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Relógio desde 17/08/2024 às 12h
const contador = document.getElementById("contador");
const inicio = new Date("2024-08-17T12:00:00").getTime();

setInterval(() => {
  const agora = new Date().getTime();
  const diff = agora - inicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diff % (1000 * 60)) / 1000);

  contador.innerHTML = `Já estamos juntos há ${dias}d ${horas}h ${minutos}m ${segundos}s ❤️`;
}, 1000);
