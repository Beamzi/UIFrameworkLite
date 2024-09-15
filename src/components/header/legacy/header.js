export const headerGen = (() => {

    //const link = document.createElement('link');
    //link.rel = 'preload'
    //link.href = './header.css';
    //link.as ='style';
    //document.head.appendChild(link);
    const stylesheet = document.createElement('link')
    // Webpack-relative path (for production with Webpack)
    // import './header.css';
    stylesheet.rel = 'stylesheet';
    stylesheet.href = './node_modules/uiframeworklite/src/components/header/header.css';
    document.head.appendChild(stylesheet)
    
    const body = document.querySelector('body')
    const header = document.createElement('header')
    header.classList.add('componentHeader');
    body.appendChild(header)
    const logo = document.createElement('div')
    logo.classList.add('logo')
    const img = document.createElement('img')
    logo.appendChild(img)
    img.classList.add('logoImg')
    img.src = 'assets/Screenshot 2024-09-10 151334ss.png';
    img.alt = 'logo';
    const nav = document.createElement('nav')

    for (let i = 0; i < 4; i++) {
        const menuItems = ['home', 'about', 'services', 'contact']
        let anchor = document.createElement('a')
        anchor.textContent = menuItems[i];
        anchor.classList.add(menuItems[i])
        if (i !== 0) {
            anchor.href = `../${menuItems[i]}.html`;
        }
        else {
            anchor.href = '../index.html'
        };
        nav.append(anchor)
    };
    nav.classList.add('navBar')
    const socials = document.createElement('div')
    socials.classList.add('socials')
    header.append(logo, nav, socials)

    const FAClasses = ['fa-brands fa-instagram', 'fa-brands fa-facebook', 'fa-brands fa-twitter'];
    const ariaLabels = ['instagram', 'facebook', 'twitter'];
    for (let i = 0; i < FAClasses.length; i++) {
        let anchor = document.createElement('a');
        anchor.setAttribute('aria-label', `${ariaLabels[i]}`)
        anchor.setAttribute('target', '_blank');
        anchor.setAttribute('rel', 'noopener noreferrer')
        socials.append(anchor)
        let icon = document.createElement('i');
        anchor.append(icon)
        icon.className = FAClasses[i];
    };

})();