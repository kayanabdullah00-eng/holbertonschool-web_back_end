/**
 * Executes a math function and tracks its result or error in a queue,
 * appending a processing message in all cases.
 * @param {Function} mathFunction - The function to execute.
 * @returns {Array} - The queue containing results/errors and status.
 */
export default function guardrail(mathFunction) {
  const queue = [];

  try {
    queue.push(mathFunction());
  } catch (error) {
    queue.push(error.toString());
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
