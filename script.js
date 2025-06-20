const senhaCorreta = "bnlsigmanews123";

function verificarSenha() {
    const senha = document.getElementById("senha").value;
    if (senha === senhaCorreta) {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("admin-panel").style.display = "block";
        carregarNoticiasAdmin();
    } else {
        alert("Senha incorreta.");
    }
}

function publicarNoticia() {
    const titulo = document.getElementById("titulo").value;
    const conteudo = document.getElementById("conteudo").value;
    const imagem = document.getElementById("imagem").value;

    const noticia = {
        titulo,
        conteudo,
        imagem
    };

    let noticias = JSON.parse(localStorage.getItem("noticias")) || [];
    noticias.push(noticia);
    localStorage.setItem("noticias", JSON.stringify(noticias));
    alert("Notícia publicada!");
    carregarNoticiasAdmin();
}

function carregarNoticias() {
    const container = document.getElementById("noticias-container");
    const noticias = JSON.parse(localStorage.getItem("noticias")) || [];

    container.innerHTML = noticias.map((n, i) => `
        <article>
            <h2>${n.titulo}</h2>
            <div>${n.conteudo}</div>
            ${n.imagem ? `<img src="${n.imagem}" alt="Imagem da notícia" style="max-width: 300px;">` : ""}
        </article>
    `).join("");
}

function carregarNoticiasAdmin() {
    const container = document.getElementById("lista-noticias");
    const noticias = JSON.parse(localStorage.getItem("noticias")) || [];

    container.innerHTML = noticias.map((n, i) => `
        <div>
            <h3>${n.titulo}</h3>
            <button onclick="apagarNoticia(${i})">Apagar</button>
        </div>
    `).join("");
}

function apagarNoticia(index) {
    let noticias = JSON.parse(localStorage.getItem("noticias")) || [];
    noticias.splice(index, 1);
    localStorage.setItem("noticias", JSON.stringify(noticias));
    carregarNoticiasAdmin();
}