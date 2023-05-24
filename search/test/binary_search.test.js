import binary_search from "@compiled/search/binary_search"

test('should find if a number is in an array', () => {
  const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
 expect(binary_search(arr, 1, arr.length/2)).toBe(true)
 expect(binary_search(arr, 2, arr.length/2)).toBe(true)
 expect(binary_search(arr, 3, arr.length/2)).toBe(true)
 expect(binary_search(arr, 4, arr.length/2)).toBe(true)
 expect(binary_search(arr, 5, arr.lenght/2)).toBe(true)
 expect(binary_search(arr, 5, arr.length/2)).toBe(true)
 expect(binary_search(arr, 16, arr.length/2)).toBe(true)
 // expect(binary_search(arr, 17, arr.length/2)).toBe(false)
 // expect(binary_search(arr, 0, arr.length/2)).toBe(false)
 // expect(binary_search(arr, 100, arr.length/2)).toBe(false)
 // expect(binary_search(arr, -1, arr.length/2)).toBe(false)
})
