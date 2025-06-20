const senhaCorreta = "bnlsigmanews123";

function verificarSenha() {
  document.getElementById("admin").style.display = "none";
}

function validarSenha() {
  const senha = document.getElementById("senha").value;
  if (senha === senhaCorreta) {
    document.getElementById("login").style.display = "none";
    document.getElementById("admin").style.display = "block";
  } else {
    alert("Senha incorreta!");
  }
}

function formatarTexto(texto) {
  return texto
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/__(.*?)__/g, "<u>$1</u>")
    .replace(/\/\/(.*?)\/\//g, "<em>$1</em>");
}

function publicarNoticia() {
  const titulo = document.getElementById("titulo").value;
  const conteudo = formatarTexto(document.getElementById("conteudo").value);
  const imagem = document.getElementById("imagem").value;
  const noticias = JSON.parse(localStorage.getItem("noticias") || "[]");
  noticias.push({ titulo, conteudo, imagem });
  localStorage.setItem("noticias", JSON.stringify(noticias));
  alert("Notícia publicada!");
  location.reload();
}

function mostrarMaisRecente() {
  const noticias = JSON.parse(localStorage.getItem("noticias") || "[]");
  const container = document.getElementById("noticia-mais-recente");
  if (noticias.length > 0) {
    const n = noticias[noticias.length - 1];
    container.innerHTML = `<h2>${n.titulo}</h2><div>${n.conteudo}</div>${n.imagem ? `<img src="${n.imagem}" style="max-width:100%;">` : ""}`;
  }
}

function listarNoticias() {
  const noticias = JSON.parse(localStorage.getItem("noticias") || "[]");
  const container = document.getElementById("todas-noticias");
  noticias.slice().reverse().forEach(n => {
    const div = document.createElement("div");
    div.className = "noticia";
    div.innerHTML = `<h2>${n.titulo}</h2><div>${n.conteudo}</div>${n.imagem ? `<img src="${n.imagem}" style="max-width:100%;">` : ""}`;
    container.appendChild(div);
  });
}