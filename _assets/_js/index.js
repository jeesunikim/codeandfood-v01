import "./../_scss/style.scss";
import StickyNav from "./components/stickyNav";
import PageAnimation from "./components/pageAnimation";
import AsyncGist from "./components/asyncGist";

class CodeandFood {
    constructor() {
        const navigationEl = document.querySelector(".site-header");
        const contentContainerEl = document.querySelector(".js-ajax-wrapper");
        const StickyNavInstance = new StickyNav(navigationEl);
        const PageAnimationInstance = new PageAnimation(contentContainerEl);

        StickyNavInstance.init();
        PageAnimationInstance.init();
        this.loadGists();
    }

    loadGists() {
        const gistEls = document.querySelectorAll("code[data-type='gist']");

        if (gistEls) {
            gistEls.forEach(el => {
                const projectContainer = el.closest(".project-image");
                if (el.attributes.gist) {
                    const gistURL = el.attributes.gist.value;
                    const AsyncGistInstance = new AsyncGist();
                    AsyncGistInstance.loadContent(gistURL, projectContainer);
                }
            });
        }
    }
}

const app = new CodeandFood();
