const test = require('tape')
const validate = require('./helpers/validate')

const codeInvalid = `/**
*
* @param {any} bar Bar param
*
* @return {any}
*
**/
function foo (bar) {
 return bar
}`

test('valid-jsdoc.matchDescription - when function has no description', t => {
  const result = validate(codeInvalid)
  t.plan(4)
  t.false(result.valid, 'it should be invalid')
  t.equals(result.length, 1, 'it should return 1 error')
  t.equals(result[0].ruleId, 'valid-jsdoc', 'it should return the correct rule type')
  t.equals(result[0].message, 'JSDoc description does not satisfy the regex pattern.', 'it should return the correct error message')
})
