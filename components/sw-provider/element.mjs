class SwProvider extends HTMLBodyElement {
    #main;

    constructor() {
        super();
        this.#main = this.querySelector("sw-main");
    }

    connectedCallback() {  
        this.addEventListener("sw", event => this.#reducer(event.detail));
    }

    #reducer({ component, course }) {
        this.#main.render(component, course);
    }
}

customElements.define('sw-provider', SwProvider, { extends: 'body' });