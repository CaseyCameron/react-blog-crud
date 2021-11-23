import React from 'react';
import img from './loading.gif';
import './spinner.css';

export default function Spinner() {
  return (
    <img src={img} className="spinner" alt="loading spinner" />
  );
}
