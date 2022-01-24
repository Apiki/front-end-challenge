import React from 'react';
import { getFormatedDate } from '../utils';

const Date = ({text, date}) => {
const formatedDate = getFormatedDate(date)
  return <p>{text} {formatedDate}</p>;
};

export default Date;
