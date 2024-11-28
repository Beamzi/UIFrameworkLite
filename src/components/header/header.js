
export class headerComponent extends HTMLElement {
    constructor() {
        super();
        this.menuData = {};
        this.render();
    //    const shadow = this.attachShadow({mode: 'open'});
    //    shadow.innerHTML = `
    // ./assets/Screenshot 2024-09-10 151334ss.png
    };

    updateMenuData(newData) {
        this.menuData = { ...this.menuData, ...newData }
        this.render();
    }
    scroller() {
            window.addEventListener('scroll', (e) => {
                const headerRef = document.querySelector('header');
                if (window.scrollY >= 1) {
                    headerRef.classList.add('header--scroll')
                }
                else if (window.scrollY <= 1) {
                    headerRef.classList.remove('header--scroll')
                    headerRef.classList.add('header--scroll-Back')
                };
            });
    }
    render() {
        this.innerHTML = `
        <style>

    @media (max-width: 600px) {
        .header-wrapper {
            height: 250px;
            min-height: 250px;
        }
        .header--scroll {
            position: fixed;
            z-index: 200;
            width: 100%;
            top: 0;
            box-shadow: 12px 12px 100px 11px rgba(0, 0, 255, .9);
        }
    }

                
    /* order of execution applies here - note header--scroll-Back must be declared before header--scroll */
    @media (min-width: 600px) {
    .header-wrapper {
        min-height: 100px;
    }
    .header--scroll-Back { 
        animation: 0.2s linear forwards resizeScrollBack;
        transform-origin: top;
        z-index: 200;
        > * {
            animation: 0.2s linear forwards resizeScrollBackContent;
            filter: blur(0.5rem);
        }
    }
    @keyframes resizeScrollBack {
        0% {
            transform: scaleY(0.5);
            color: white;
            box-shadow: 12px 12px 100px 11px rgba(0, 0, 255, .8);
        }
        100% {
            transform: scaleY(1);
            filter: blur(0rem);
            color: black;
            box-shadow: 12px 12px 100px 11px rgba(0, 0, 0, 1);
        }
    }
    @keyframes resizeScrollBackContent {
        0% {
            transform: scaleY(1);
        }
        100% {
            transform: scaleY(1);
            filter: blur(0rem);
        }
    }
    .header--scroll {
        position: fixed;
        z-index: 200;
        width: 100%;
        height: 80px;
        top: 0;
        background-color: white;
        scroll-behavior: smooth;
        animation: 0.2s linear forwards resize;
        transform-origin: top;
        > * {
            animation: 0.3s linear forwards resizeContent;
            transform: scaleY(2);
            filter: blur(0.3rem);
            color: white;
        }
    }
    @keyframes resize {
        100% {
            transform: scaleY(0.5);
            box-shadow: 12px 12px 100px 11px rgba(0, 0, 255, .8);
        }
    }
    @keyframes resizeContent {
        100% {
            filter: blur(0rem);
            color: black;
        }
    }
    }
    /* order of execution applies above - note header--scroll-Back must be declared before header--scroll */


        @media (max-width: 600px) {
            .header {
                display: flex;
                flex-direction: column;
            }
            .header__nav {
                display: flex;
                flex-direction: column;
                min-width: 85%;
                > * {
                    min-width: 80%;
                    text-align: center;
                    background-color: black;
                    color: white;
                    margin: 2px;
                    &:hover {
                        background-color: rgb(228, 228, 228);
                        
                    }
                }
            }
        }

        .header {
            display: flex;
            justify-content: space-between;
            padding: 10px;
            min-height: 100px;
            align-items: center;
            background-color: white;

            .header__logo {
                overflow: hidden;
                height: 60px;
                width: 120px;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    width: 100%;
                    height: auto;
                }
            }
            .header__nav {
                display: flex;
                > * {
                    padding: 10px;
                    &:hover {
                        color: blue;
                    }
                }
            }
            .header__icons i {
                padding: 0px 5px 0px 5px;
                &:hover {
                    color: blue;
                }
            }
        }
        </style>
        <header class="header">
            <div class="header__logo">
                <img class="header__img" src="${this.menuData.imgPath}">
            </div>
            <nav class="header__nav">
                <a href="${this.menuData.homeLink}" class="header__anchor">home</a>
                <a href="${this.menuData.aboutLink}" class="header__anchor">about</a>
                <a href="${this.menuData.servicesLink}" class="header__anchor">services</a>
                <a href="${this.menuData.contactLink}" class="header__anchor">contact</a>
            </nav>
            <div class="header__icons">
                <a href="${this.menuData.instaLink}" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="${this.menuData.fbLink}" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="${this.menuData.twitterLink}" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-twitter"></i>
                </a>
            </div>
        </header>
        `;
    };
    
connectedCallback() {
    this.scroller();
}

// Placeholder for when cleanup logic is needed (optional for now)
disconnectedCallback() {
// Clean up any event listeners or other resources if necessary

}



    
};
customElements.define('header-component', headerComponent)
