import styles from './ContactList.module.css'
import Contact from '../Contact/Contact'

const ContactList = ({contacts, onDelete}) => {
    return (
        <ul className={styles.list}>
            {contacts.map(contact => (
                <li key={contact.id}>
                    <Contact data={contact} onDelete={ onDelete} />
                </li>
            ))}
      </ul>
    )

}



export default ContactList;