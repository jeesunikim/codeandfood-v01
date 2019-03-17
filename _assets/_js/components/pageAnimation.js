import TweenLite from "gsap/TweenLite";
import "gsap/EasePack";
import axios from "axios";
import AsyncGist from "./asyncGist";

const ANIMATION_TIME = 0.25,
    GRID_DELAY_TIME = 150;

export default class PageAnimation {
    constructor(el) {
        this.el = el;
        this.navLinks = document.querySelectorAll(".nav-list a");
        this.posts = el.querySelectorAll(".post");
        this.maskEl = document.querySelector(".mask");
        this.maskEl.style.opacity = 0;

        this.isPageUpdated = false;
        this.isMasking = false;

        this.onPopState = this.onPopState.bind(this);
    }

    init() {
        this.animateGrids(this.posts);
        this.attachListeners();
    }

    attachListeners() {
        this.navLinks.forEach(link => {
            link.addEventListener("click", event =>
                this.loadPushState(event, link)
            );
        });

        this.posts.forEach(post => {
            post.addEventListener("click", event =>
                this.loadPushState(event, post)
            );
        });

        window.addEventListener("popstate", this.onPopState);
    }

    loadPushState(event, link) {
        event.preventDefault();

        let pageTitle = link.getAttribute("data-title"),
            pageUrl = link.href || link.getAttribute("data-url");

        if (window.location === pageUrl) {
            return;
        }
        window.document.title = pageTitle;
        window.history.pushState({}, pageTitle, pageUrl);
        this.loadContent(pageUrl);
    }

    async loadContent(url) {
        try {
            const response = await axios.get(url, {
                headers: { "X-Requested-With": "XMLHttpRequest" },
                responseType: "document",
                transformResponse: axios.defaults.transformResponse.concat(
                    (data, headers) => {
                        const content = data.querySelector(".js-ajax-wrapper");

                        return content;
                    }
                )
            });

            window.scrollTo(0, 0);

            this.isPageUpdated = true;
            this.el.innerHTML = response.data.innerHTML;

            let posts = this.el.querySelectorAll(".post"),
                singlePage = this.el.querySelector(".single-page");

            if (posts.length > 0) {
                this.animateGrids(posts);
                this.posts = posts;

                this.posts.forEach(post => {
                    post.addEventListener("click", event =>
                        this.loadPushState(event, post)
                    );
                });
            } else {
                this.onPageTransition(singlePage);
            }
        } catch (error) {
            console.error(error);
        }
    }

    onPageTransition(pageData) {
        const gistEls = document.querySelectorAll("code[data-type='gist']");

        if (!this.isMasking) {
            this.isMasking = true;
            this.maskEl.style.display = "block";
            this.maskEl.style.opacity = 1;

            this.tweenMask(1, () => {
                this.isMasking = false;

                if (pageData) {
                    this.displayPage();
                    if (gistEls) {
                        gistEls.forEach(el => {
                            const projectContainer = el.closest(
                                ".project-image"
                            );
                            if (el.attributes.gist) {
                                const gistURL = el.attributes.gist.value;
                                const AsyncGistInstance = new AsyncGist();
                                AsyncGistInstance.loadContent(
                                    gistURL,
                                    projectContainer
                                );
                            }
                        });
                    }
                }
            });
        }
    }

    displayPage() {
        if (this.isMasking) {
            return;
        }

        this.tweenMask(0, () => {
            this.maskEl.style.display = "none";
        });
    }

    tweenMask(dest, callback) {
        let ease;

        if (dest > 0) {
            ease = Cubic.easeOut;
        } else {
            ease = Cubic.easeIn;
        }

        TweenLite.to(this.maskEl.style, ANIMATION_TIME, {
            opacity: dest,
            ease: ease,
            onComplete: () => {
                callback();
            }
        });
    }

    onPopState() {
        if (this.isPageUpdated) {
            this.loadContent(window.location.href);
        }
    }

    animateGrids(posts) {
        posts.forEach((post, index) => {
            setTimeout(() => {
                post.classList.add("fade-in");
            }, index * GRID_DELAY_TIME);
        });
    }
}
