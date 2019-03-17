import jsonp from "jsonp";

export default class AsnycGist {
    loadContent(url, projectContainer) {
        jsonp(url, null, (err, data) => {
            if (err) {
                console.error(err);
            } else {
                const gistPreviewEl = projectContainer.querySelector(
                    ".gist-preview"
                );
                if (data.stylesheet) {
                    const link = document.createElement("link");
                    const head = document.getElementsByTagName("head")[0];
                    link.rel = "stylesheet";
                    link.href = data.stylesheet;
                    head.appendChild(link);
                }
                if (gistPreviewEl) {
                    gistPreviewEl.innerHTML = data.div;
                }
            }
        });
    }
}
