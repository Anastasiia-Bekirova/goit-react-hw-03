import styles from './Contact.module.css'
import { IoMdPerson } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

const Contact = ({data:{id, name, number}, onDelete})=> {
    return (<div className={styles.listItem}>
       <div className={styles.contactInformation}><p><IoMdPerson size="20"/> {name}</p>  
        <p><FaPhone /> {number}</p></div> 
        <button className={styles.button} onClick={()=> onDelete(id)}>
      Delete
    </button>
    </div>
   
  );
}



export default Contact;