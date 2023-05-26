import binary_search from "@compiled/search/binary_search"

test('should find if a number is in an array', () => {
  const arr = [-1321, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,12131]
 expect(binary_search(arr, 1)).toBe(true)
 expect(binary_search(arr, 2)).toBe(true)
 expect(binary_search(arr, 3)).toBe(true)
 expect(binary_search(arr, 4)).toBe(true)
 expect(binary_search(arr, 5)).toBe(true)
 expect(binary_search(arr, 5)).toBe(true)
 expect(binary_search(arr, 16)).toBe(true)
 expect(binary_search(arr, 17)).toBe(false)
 expect(binary_search(arr, 0)).toBe(false)
 expect(binary_search(arr, 100)).toBe(false)
 expect(binary_search(arr, -100)).toBe(false)
 expect(binary_search(arr, 1230)).toBe(false)
 expect(binary_search(arr, 12390)).toBe(false)
 expect(binary_search(arr, -12)).toBe(false)
 expect(binary_search(arr, -1321)).toBe(true)
 expect(binary_search(arr, 999)).toBe(false)
 expect(binary_search(arr, 12131)).toBe(true)
})
