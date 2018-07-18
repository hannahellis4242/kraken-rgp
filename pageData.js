function pageData(pageTitle) {
    this.data = {
        title: pageTitle,
        nav: [{
                label: 'Home',
                ref: '/'
            },
            {
                label: 'About',
                ref: '/about'
            },
            {
                label: 'Events',
                ref: '/events'
            },
            {
                label: 'Games',
                ref: '/games'
            },
            {
                label: 'Contact',
                ref: '/contact'
            },
        ]
    };
}

exports.pageData = pageData;
