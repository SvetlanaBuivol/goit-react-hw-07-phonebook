import { useState } from 'react';
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import {
  FormContainer,
  Label,
  Input,
  Icon,
  Button,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { addContactAsync } from 'redax/contacts/contactsOperetions';
import { getContacts } from 'redax/contacts/contactSelectors';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const formSubmit = event => {
    event.preventDefault();

    const newContact = {
      name,
      number,
    };

    const isExist = contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (isExist) {
      reset();
      Notify.info(`${name} is already in contacts`, {
        position: 'center-top',
        info: {
          background: '#738ddae4',
        },
      });
      return;
    }

    dispatch(addContactAsync(newContact))
      .then(() => {
        Notify.success('Contact added successfully', {
          position: 'center-top',
          clickToClose: true,
          success: {
            background: '#9dbc89df',
          },
        });
      })
      .catch(() => {
        Notify.failure('Somthing was wrong, try again', {
          position: 'center-top',
        });
      });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormContainer onSubmit={formSubmit}>
      <div>
        <Label>
          <Icon>
            <BsFillPersonFill size="22" />
          </Icon>

          <Input
            value={name}
            onChange={handleInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          <Icon>
            <BsFillTelephoneFill size="22" />
          </Icon>

          <Input
            value={number}
            onChange={handleInputChange}
            type="tel"
            name="number"
            pattern="\+?[0-9\s\-\(\)]+"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </div>
    </FormContainer>
  );
}
