

const footerGen = (() => {
    const footerData = {
        companyName: 'Default Company Name',
        lists: [
            {
                heading: 'Default Heading 1',
                items: ['Default Link 1', 'Default Link 2']
            },
            {
                heading: 'Default Heading 2',
                items: ['Default Link 3', 'Default Link 4']
            },
            {
                heading: 'Default Heading 3',
                items: ['Default Link 5', 'Default Link 6']
            }
        ]
    };


    /*
        footerData.lists.forEach(list => {
            const listDiv = document.createElement('div');
            listDiv.classList.add('listContainer');
            const h3 = document.createElement('h3');
            h3.textContent = list.heading;
            listDiv.append(h3);
            listSection.append(listDiv);
            const ul = document.createElement('ul');
            listDiv.append(ul);

            list.items.forEach(item => {
                const li = document.createElement('li');
                li.className = 'fa-solid fa-angle-right';
                const anchor = document.createElement('a');
                anchor.textContent = item;
                li.append(anchor);
                ul.append(li);
            });
        });

    */

    const body = document.querySelector('body');
    const footer = document.createElement('footer')
    footer.classList.add('componentFooter');
    body.append(footer);
    const listSection = document.createElement('section');
    listSection.classList.add('sectionOfLists')
    footer.append(listSection)

    for (let i = 0; i < 3; i++) {
        const listDiv = document.createElement('div');
        listDiv.classList.add('listContainer')
        const h3 = document.createElement('h3');
        h3.textContent = 'lorem Ipsum'
        listDiv.append(h3)
        listSection.append(listDiv)
        const ul = document.createElement('ul');
        listDiv.append(ul)

        for (let j = 0; j < 3; j++) {
            const li = document.createElement('li');
            li.className = 'fa-solid fa-angle-right';
            ul.append(li);
           // const anchorDiv = document.createElement('div');
           //  li.append(anchorDiv);
            const anchor = document.createElement('a')
            anchor.textContent = 'lorem ipsum hahahahhsh';
           //  anchorDiv.classList.add('anchorDiv')
            li.append(anchor)

        };

    };
    
    const date = new Date();
    let year = date.getFullYear();
    const companyName = '';

    const copySection = document.createElement('section')
    copySection.classList.add('copySection')
    footer.append(copySection)
    const copyright = document.createElement('p')
    copyright.innerHTML = `© ${year} ${companyName}. All rights reserved. Website design by <a href="https://brisbanewebsitedesign.au/" target="_blank" rel="noopener noreferrer"><b>Daymedia</b> at Brisbane Website Design</a>.` 
    copySection.append(copyright)

})();

