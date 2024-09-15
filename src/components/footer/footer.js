
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
        </footer>}
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




/* class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    const [htmlResponse, cssResponse] = await Promise.all([
      fetch('/path/to/footer.html'),
      fetch('/path/to/footer.css')
    ]);

    const [htmlContent, cssContent] = await Promise.all([
      htmlResponse.text(),
      cssResponse.text()
    ]);

    this.shadowRoot.innerHTML = `
      <style>${cssContent}</style>
      ${htmlContent}
    `;
  }
}

customElements.define('footer-component', FooterComponent);

class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const template = document.getElementById('footer-template');
    if (template) {
      const templateContent = template.content;
      this.shadowRoot.appendChild(templateContent.cloneNode(true));
    }
  }
}

customElements.define('footer-component', FooterComponent);

*/