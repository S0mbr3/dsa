
//const linear_search = require('@compiled/search/LinearSearchList')
import linear_search from "@compiled/search/LinearSearchList"

test('Search in a list linearaly', () => {

  const arr = [1,50,123,1454,1231,23,4,1234112]
  expect(linear_search(arr, 50)).toBe(true)
  expect(linear_search(arr, 1)).toBe(true)
  expect(linear_search(arr, 54)).toBe(false)
  expect(linear_search(arr, 1231)).toBe(true)
  expect(linear_search(arr, 12)).toBe(false)
  expect(linear_search(arr, 1234112)).toBe(true)
})
