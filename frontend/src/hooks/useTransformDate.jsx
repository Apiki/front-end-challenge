import { months } from '../utils/months';

export default function useTransformDate(date) {
  const getMonths = months;
  const getNewDate = new Date(date);

  const data = `${getNewDate.getDate()
  } ${
    getMonths[getNewDate.getMonth()]
  } de ${
    getNewDate.getFullYear()}`;

  return [data];
}
