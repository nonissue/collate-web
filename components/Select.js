import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Select.module.css';
import SelectIcon from '../assets/select_minor.svg';

/**
 * Custom select component
 * Copied/implemented from scratch based on: https://polaris.shopify.com/components/forms/select#navigation
 * Notes: labelinline not implemented ATM
 * Err, how do we actually handle the change?
 *
 * @param {Array} options array of objects of form { label, value } NOTE: First object has to match initial state
 * @param {String} label label string
 * @param {Boolean} labelinline show label to the left of value
 *
 * @return {ReactComponent} returns react component
 */

// eslint-disable-next-line no-unused-vars
const Select = ({ options, label, labelinline, onChangeSelect, Icon }) => {
  const [selected, setSelected] = useState(options[0]);
  const handleChange = e => {
    let newSelection = options.find(option => e.currentTarget.value === option.value);
    if (newSelection === undefined) {
      newSelection = options[0].label;
    }
    setSelected(newSelection);
    onChangeSelect(newSelection.value);
  };

  return (
    <div className={styles.wrapper}>
      {/* <label htmlFor="custom-select" className={styles['hidden-label']}>
        {labelName}
      </label> */}
      <select
        aria-label="select"
        id={`Select ${label}`}
        className={styles.input}
        type=""
        onBlur={handleChange}
        onChange={handleChange}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <div className={styles.content}>
        {Icon ? <Icon viewBox="0 0 20 20" className={styles['label-icon']} /> : ''}
        <span className={styles.label}>{label}</span>
        <span className={styles.selected}>{selected.label}</span>
        <span className={styles['select-icon']}>
          <SelectIcon viewBox="0 0 20 20" />
        </span>
      </div>
      <div className={styles.backdrop} />
    </div>
  );
};

Select.defaultProps = {
  labelinline: true,
  onChangeSelect: () => {},
  Icon: undefined,
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  ).isRequired,
  label: PropTypes.string.isRequired,
  labelinline: PropTypes.bool,
  onChangeSelect: PropTypes.func,
  Icon: PropTypes.elementType,
};

export default Select;
