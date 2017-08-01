import numeral from 'numeral';
import ChartCard from './ChartCard';
import MiniArea from './MiniArea';
import Trend from './Trend';

numeral.yuan = val => `&yen;${numeral(val).format('0,0')}`;

export default {
  numeral,
  MiniArea,
  ChartCard,
  Trend,
};
