//@ts-check
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean}
 */
// 코드에 코멘트를 더하는 것이로
// 타입이 코멘트를 읽은 후 타입을 지정해줌.
// 자바스크립트에서 타입스크립트를 사용하게 된다. JSDoc코멘트를 활용해서.
export function init(config) {
  return true;
}

/**
 * Exits the program
 * @param {number} code
 * @returns {number}
 */

export function exit(code) {
  return code + 1;
}
