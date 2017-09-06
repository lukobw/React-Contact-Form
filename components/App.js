var contacts = [
    {
        id: 1,
        firstName: 'Gall',
        lastName: 'Durga',
        email: 'gal.durga@example.com',
    },
    {
        id: 2,
        firstName: 'Antti',
        lastName: 'Magomet',
        email: 'antii.magomet@example.com',
    },
    {
        id: 3,
        firstName: 'Vasil',
        lastName: 'Longinus',
        email: 'vasil.longinus@example.com',
    },
];

var contactForm = {
    firstName: '',
    lastName: '',
    email: ''
};

var App = React.createClass ({
    render: function() {
        return (
            React.createElement('div', {className: 'app'},
                React.createElement(ContactForm, {contact: contactForm}),
                React.createElement(Contacts, {items: contacts}, {})
            )
        );
    }
});
