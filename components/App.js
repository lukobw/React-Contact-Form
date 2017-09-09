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
    getInitialState: function() {
        return {
            contactForm: { 
                firstName: '',
                lastName: '',
                email: ''
            },
        };
    },
    onContactAdd: function () {
        var newContact = this.state.contactForm;
        var newContacts = this.state.contacts.concat(newContact);
        this.setState({contacts: newContacts});
    },
    onNameChange: function(event) {
        this.setState({
            contactForm: {
                firstName: event.target.value
            }
        });
    },
    render: function() {
        return (
            React.createElement('div', {className: 'app'},
                React.createElement(ContactForm, {contact: this.state.contactForm, onNameChange: this.onNameChange}),
                React.createElement(Contacts, {items: this.state.contacts, onContactAdd: this.onContactAdd})
            )
        );
    },
});
