import { DateTime } from '../node_modules/luxon/src/luxon.js';

export function formatDate(date) {
  return DateTime.now().toLocaleString(DateTime.DATETIME_MED);
}
