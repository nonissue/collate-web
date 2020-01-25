import React, { useState } from 'react';
import styles from './Select.module.css';
import SelectIcon from '../assets/select_minor.svg';

/**
 * @params options (array) Array of objects of form { label, value }
 * @params label (string) Select label string
 * @params labelinline (bool) Display label inline
 */

const Select = ({ options = [], label, labelinline = true }) => {
  const [selected, setSelected] = useState(options[0]);
  const handleChange = e => {
    console.log(e);
    let newSelection = options.find(option => e.currentTarget.value === option.value);
    if (newSelection === undefined) {
      newSelection = options[0].label;
    }
    setSelected(newSelection);
  };

  return (
    <div className={styles.wrapper}>
      <select onChange={handleChange} onBlur={handleChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className={styles.content}>
        <span className={styles.label}>{label}</span>
        <span className={styles.selected}>{selected.label}</span>
        <span className={styles.icon}>
          <SelectIcon viewBox="0 0 20 20" />
        </span>
      </div>
      <div className={styles.backdrop}></div>
    </div>
  );
};

export default Select;
