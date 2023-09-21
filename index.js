'use strict';

/**
 * @param {number} w Weight.
 * @param {number} r Reps.
 * @returns {number}
 */
function brzycki(w, r) {
  return w * 36 / (37 - r);
}

module.exports = brzycki;
