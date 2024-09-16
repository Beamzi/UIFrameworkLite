
class footerComponent extends HTMLElement {
    constructor() {

		const changeInfo = {
			title1: `placeholder`,
			item1: `list1 item goes here`,
			item2: `list2 item goes here`,
			item3: `list3 item goes here`
		};

      let companyName = '';
      const date = new Date();
      let year = date.getFullYear();
        super()
       // const shadow = this.attachShadow({mode: 'open'});
       // shadow.innerHTML = `
        this.innerHTML = `
		
	<style>	
		.footer__copyright-section {
			padding: 20px 0px 25px 0px;
			display: flex;
			max-width: 80%;
			align-self: center;
			p {
				text-align: center;
				color: white;
				a {
					color: rgb(216, 87, 255);
				}
			}
		}

		@media (max-width: 500px) {
			.footer__list-section {
				display: flex;
				flex-direction: column;
				align-items: center;
			}
			.footer__list-container {
				min-width: 80%;
			}
		}

		@media (min-width: 500px) {
			.footer__list-container {
				min-width: 25%;
			}
		}

		.footer {
			font-family: monospace;
			display: flex;
			flex-direction: column;
			justify-content: center;
			background-color: rgb(34, 34, 34);
			min-height: 200px;
			a {
				font-family: monospace;
				text-decoration: none;
				color: inherit;
			}
		}

		.footer__list-section {

			padding: 20px 20px 0px 20px;
			display: flex;
			justify-content: center;

			.footer_list-title {
				color: white;
				padding: 0px 10px 0px 10px;
				font-size: 18px;
			}
			.footer__list {
				display: flex;
				flex-direction: column;
			} 
			.footer__item {
				width: 80%;
				display: flex;
				align-items: center;
				border-bottom: 1px rgba(236, 236, 236, 0.096) solid;
				padding: 3px;
				font-size: 0.7em;
				color: white;
				a {
					font-weight: 200;
					color: rgba(173, 173, 173, 0.795);
					font-size: 1.5em;
					padding: 5px 5px 5px 5px;
					&:hover {
						color: rgb(216, 87, 255);
					}
				}
			}
		}
			
	</style>
    <footer class="footer">
        <section class="footer__list-section">
            <div class="footer__list-container">
                <h3 class="footer_list-title">${changeInfo.title1}</h3>
                <ul class="footer__list">
                    <li class="fa-solid fa-angle-right footer__item"><a href="#">${changeInfo.item1}</a></li>
                    <li class="fa-solid fa-angle-right footer__item"><a href="#">${changeInfo.item2}</a></li>
                    <li class="fa-solid fa-angle-right footer__item"><a href="#">${changeInfo.item3}</a></li>
                </ul>
            </div>
            <div class="footer__list-container">
                <h3 class="footer_list-title">Lorem, ipsum dolor.</h3>
                <ul class="footer__list">
                    <li class="fa-solid fa-angle-right footer__item"><a href="#">Lorem, ipsum dolor.</a></li>
                    <li class="fa-solid fa-angle-right footer__item"><a href="#">Lorem, ipsum dolor.</a></li>
                    <li class="fa-solid fa-angle-right footer__item"><a href="#">Lorem, ipsum dolor.</a></li>

                </ul>
            </div>
            <div class="footer__list-container">
                <h3 class="footer_list-title">Lorem, ipsum dolor.</h3>
                <ul class="footer__list">
                    <li class="fa-solid fa-angle-right footer__item"><a href="#">Lorem, ipsum dolor.</a></li>
                    <li class="fa-solid fa-angle-right footer__item"><a href="#">Lorem, ipsum dolor.</a></li>
                    <li class="fa-solid fa-angle-right footer__item"><a href="#">Lorem, ipsum dolor.</a></li>
                </ul>
            </div>
        </section>
        <section class="footer__copyright-section">
                <p class="footer__copyright"> 
                    © ${year} ${companyName}. All rights reserved. Website design by <a href="https://brisbanewebsitedesign.au/" target="_blank" rel="noopener noreferrer"><b>Daymedia</b> at Brisbane Website Design</a>.
                </p>
        </section>
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