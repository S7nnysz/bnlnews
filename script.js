
function postNews() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value.replace(/\n/g, "<br>");
    const image = document.getElementById("image").value;

    if (!title || !content) return;

    const newsHTML = \`
        <div class="news-item">
            <h3>\${title}</h3>
            <p>\${content}</p>
            \${image ? '<img src="' + image + '" />' : ''}
        </div>
    \`;

    const container = document.getElementById("news-container");
    container.innerHTML = newsHTML + container.innerHTML;

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
    document.getElementById("image").value = "";
}
