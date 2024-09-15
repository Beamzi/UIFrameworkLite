
class footerComponent extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = `
          <footer class="footer">
              <div class="footer__list-container">
                  <ul class="footer__list">
                      <li class="footer__item"><a>Lorem, ipsum dolor.</a></li>
                      <li><a>Lorem, ipsum dolor.</a></li>
                      <li><a>Lorem, ipsum dolor.</a></li>
                  </ul>
              </div>
              <div class="footer__list-container">
                  <ul class="footer__list">
                      <li class="footer__item"><a>Lorem, ipsum dolor.</a></li>
                      <li><a>Lorem, ipsum dolor.</a></li>
                      <li><a>Lorem, ipsum dolor.</a></li>
                  </ul>
              </div>
              <div class="footer__list-container">
                  <ul class="footer__list">
                      <li class="footer__item"><a>Lorem, ipsum dolor.</a></li>
                      <li><a>Lorem, ipsum dolor.</a></li>
                      <li><a>Lorem, ipsum dolor.</a></li>
                  </ul>
              </div>
          </footer>
        `;
    };

	connectedCallback() {
        // Add event listener when the element is added to the DOM
    }
	disconnectedCallback() {
        // Remove event listener when the element is removed from the DOM
    }
	attributeChangedCallback(name, oldValue, newValue) {
    }

}
customElements.define('footer-component', footerComponent )



