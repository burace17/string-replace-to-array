export = stringReplaceToArray;
/**
 *
 * @typedef {function(string): any} MatchFunction
 */
/**
 *
 * @param {string|string[]} string
 * @param {RegExp|string} regexpOrSubstr
 * @param {string|MatchFunction} newSubStrOrFn
 * @returns {Array}
 */
declare function stringReplaceToArray(string: string | string[], regexpOrSubstr: RegExp | string, newSubStrOrFn: string | MatchFunction): any[];
declare namespace stringReplaceToArray {
    export { MatchFunction };
}
type MatchFunction = (arg0: string) => any;
