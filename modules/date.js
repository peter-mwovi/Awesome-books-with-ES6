import { DateTime } from '../node_modules/luxon/src/luxon.js';

const formatDate = () => DateTime.now().toLocaleString(DateTime.DATETIME_MED);

export default formatDate;
