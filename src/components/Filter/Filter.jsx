import React from "react";
import { input, label } from "./Filter.Styled";
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
   
    <label>Find contact by name<input type = "text" value ={value} onChange = {onChange}/>
</label>
);
}
Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
