import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ filter, searchContact }) => {
  return (
    <label className={styles.label}>
      {' '}
      Find contacts by name
      <input
        className={styles.input}
        onChange={event => searchContact(event.target.value)}
        value={filter}
      />
    </label>
  );
};

export default Filter;
