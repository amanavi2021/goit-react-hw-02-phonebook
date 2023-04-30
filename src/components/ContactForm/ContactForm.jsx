import { Component } from "react";
import PropTypes from 'prop-types';
import { ContactsForm, AddBtn, InputInfo, LabelNumber } from "./ContactForm.styled";

export class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };

    handleChange = event => {
        const { name } = event.target;
        this.setState({[name]: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.name, this.state.number);
        this.setState({
            name:'',
            number:''
        });
    }

    render() {
        return (
            <ContactsForm onSubmit={this.handleSubmit}>
                    <label>Name
                    <InputInfo
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.handleChange}
                    />
                    </label>
                    <LabelNumber>Number
                    <InputInfo
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.handleChange}
                    />
                    </LabelNumber>  
                <AddBtn type='submit'>Add contact</AddBtn>
            </ContactsForm>
        )
    }
}

ContactForm.propTypes = {
onSubmit: PropTypes.func
}