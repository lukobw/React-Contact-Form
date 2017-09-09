var ContactForm = React.createClass ({
    propTypes: {
        contact: React.PropTypes.object.isRequired,
    },
    render: function() {
        return (
            React.createElement('form', {className: 'contactForm'},
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'Name',
                    value: this.props.contact.firstName,
                    onChange: this.props.onNameChange,
                }),
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'Surname',
                    value: this.props.contact.lastName,
                    onChange: this.props.onNameChange,
                }),
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'Email',
                    value: this.props.contact.email,
                    onChange: this.props.onNameChange,
                }),
                React.createElement('button', {
                     type: 'submit',
                     onContactAdd: this.props.onContactAdd,
                },
                    "Add contact"
                )
            )
        );
    },
});