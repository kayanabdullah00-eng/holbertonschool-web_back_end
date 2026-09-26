/**
 * Returns a string of all set values that start with a specific string, 
 * with the prefix removed and values separated by '-'.
 * @param {Set} set - The set of strings.
 * @param {string} startString - The prefix string to filter by.
 * @returns {string} - The cleaned and joined string.
 */
export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  const result = [];
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  }

  return result.join('-');
}
