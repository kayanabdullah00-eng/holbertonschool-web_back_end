/**
 * Updates quantities of items in a map from 1 to 100.
 * Throws an error 'Cannot process' if the argument is not a Map.
 * @param {Map} map - The map of grocery items and quantities.
 * @returns {Map} - The updated map.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of map.entries()) {
    if (value === 1) {
      map.set(key, 100);
    }
  }

  return map;
}
