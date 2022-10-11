import {DomLoader} from "./dom-loader";

export class Router {
    #urlRoutes;

    constructor(urlRoutes) {
        this.#urlRoutes = urlRoutes;
    }

    init() {
        const routeHandle = e => this.#urlRoute(e);
        window.addEventListener("popstate", routeHandle);
        window.addEventListener("hashchange", routeHandle);
        window.addEventListener("load", routeHandle);
    }

    #urlRoute(event) {
        event.preventDefault();
        window.history.pushState({}, "", event.target.href);
        void this.#urlLocationHandler();
    };


    async #urlLocationHandler() {
        const path = this.getCurrentUrlPath();
        const route = this.#urlRoutes[path];

        const html = await fetch(route.template)
            .then(response => response.text());

        const pageTemplateElement = DomLoader.renderElement(html);
        DomLoader.setElement(pageTemplateElement.body.firstChild);

        if (route.render)
            route.render();
    };
    getCurrentUrlPath() {
        const path = window.location.pathname;

        if (process.env?.PUBLIC_URL && path.indexOf("/" + process.env?.PUBLIC_URL) >= 0)
            return path.replace("/" + process.env.PUBLIC_URL, "");

        return path;
    }


    navigate(path) {
        window.history.pushState({}, "", path);
        void this.#urlLocationHandler();
    }
}