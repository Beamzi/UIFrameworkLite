
const headerComponentModule = (() => {
    class headerComponent extends HTMLElement {
        constructor() {
            super();
        //    const shadow = this.attachShadow({mode: 'open'});
        //    shadow.innerHTML = `
        this.innerHTML = `
            <header class="header">
                <div class="header__logo">
                    <img class="header__img" src="./assets/Screenshot 2024-09-10 151334ss.png"></img>
                </div>
                <nav class="header__nav">
                    <a href="#" class="header__anchor">home</a>
                    <a href="#" class="header__anchor">about</a>
                    <a href="#" class="header__anchor">services</a>
                    <a href="#" class="header__anchor">contact</a>
                </nav>
                <div class="header__icons">
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="facebook.com" target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href="twitter.com" target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                </div>
            </header>
            `;
        };
        connectedCallback() {
            //add event listeners here
        };
        disconnectedCallback() {
            //remove event listeners here
        };
        attributeChangedCallback() {
        };

    };
    customElements.define('header-component', headerComponent)
})();