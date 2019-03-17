import "./../_scss/style.scss";
import StickyNav from "./components/stickyNav";
import PageAnimation from "./components/pageAnimation";

class CodeandFood {
    constructor() {
        const navigationEl = document.querySelector(".site-header");
        const contentContainerEl = document.querySelector(".js-ajax-wrapper");
        const StickyNavInstance = new StickyNav(navigationEl);
        const PageAnimationInstance = new PageAnimation(contentContainerEl);

        StickyNavInstance.init();
        PageAnimationInstance.init();
    }
}

const app = new CodeandFood();
