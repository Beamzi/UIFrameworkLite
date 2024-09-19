
export class footerComponent extends HTMLElement {
    constructor() {
        super();
        this.listData = {};
        this.init = {}
        this.render();
        this.initialize();
    };

    initialize() {
        for (let i = 1; i <= 3; i++) {
            this.init[`counter${i}`] = 0;
            this.init[`listHTML${i}`] = ``;
            this.init[`list${i}`] = this.listItems(i)
        };
    };

    listItems(num) {
        return [];
    };

    updateListData(newData) {
        this.listData = { ...this.listData, ...newData };
        this.render();
    };
    
    addItems(value, external) {

        if (value > 0 && value < 4) {
            this.init[`counter${value}`]++;
            let newItem;
            let secured;

            if (external === true) {
                secured = `target="u_blank" rel="noopener noreferrer"`;
            }
            else secured = ``;

            newItem = `<li class="fa-solid fa-angle-right footer__item">
            <a href="${this.listData[`link${value}__0${this.init[`counter${value}`]}`]}" 
            ${secured}>
            ${this.listData[`item${value}__0${this.init[`counter${value}`]}`]}
            </a></li>`;

            this.init[`list${value}`].push(newItem);
            this.init[`listHTML${value}`] = this.init[`list${value}`].join('');
            }
        else  {
            value = null
            console.log('expects number >= 1 or <= 3')
        };
        this.render();
    };
    
    render() {
        const date = new Date();
        let year = date.getFullYear();
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
                    width: 25%;
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
                        word-break: break-word;
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
                    <h3 class="footer_list-title">${this.listData.list1__Heading}</h3>
                    <ul class="footer__list">
                        ${this.init.listHTML1}
                    </ul>
                </div>
                <div class="footer__list-container">
                    <h3 class="footer_list-title">${this.listData.list2__Heading}</h3>
                    <ul class="footer__list">
                        ${this.init.listHTML2}
                    </ul>
                </div>
                <div class="footer__list-container">
                    <h3 class="footer_list-title">${this.listData.list3__Heading}</h3>
                    <ul class="footer__list">
                        ${this.init.listHTML3}
                    </ul>
                </div>
            </section>
            <section class="footer__copyright-section">
                <p class="footer__copyright"> 
                    © ${year} <b>${this.listData.company}.</b> All rights reserved. Website design by <a href="https://brisbanewebsitedesign.au/" target="_blank" rel="noopener noreferrer"><b>Daymedia</b> at Brisbane Website Design</a>.
                </p>
            </section>
        </footer>
        `;
    }

    connectedCallback() {
    }
    disconnectedCallback() {
    }
    attributeChangedCallback(name, oldValue, newValue) {
    }
}

customElements.define('footer-component', footerComponent);
