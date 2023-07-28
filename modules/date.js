import { DateTime } from '../node_modules/luxon/src/luxon.js';

const formatDate = () => {
  return DateTime.now().toLocaleString(DateTime.DATETIME_MED);
};

export default formatDate;
