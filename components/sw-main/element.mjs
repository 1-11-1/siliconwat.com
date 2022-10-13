import template from './template.mjs';

class SwMain extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        //this.shadowRoot.querySelector("slot").assignedElements().find(element => element.tagName === "SW-CURRICULUM").render();
    }

    render(component, course) {
        this.shadowRoot.querySelector("slot").assignedElements().forEach(element => element.style.display = "none");
        this.shadowRoot.querySelector("slot").assignedElements().find(element => element.tagName === "SW-" + component.toUpperCase()).render(course);
    }
}

customElements.define("sw-main", SwMain);