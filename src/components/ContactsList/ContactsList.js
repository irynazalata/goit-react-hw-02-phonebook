import React from 'react';
import styles from './ContactsList.module.css';

const ContactsList = ({ searchContact, deleteContact }) => {
  return (
    <ul className={styles.list}>
      {searchContact.map(({ id, name, number }) => {
        return (
          <li className={styles.item} key={id}>
            <p className={styles.contact}>
              {' '}
              - {name}: {number}
            </p>
            <button
              type="button"
              className={styles.btn}
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
