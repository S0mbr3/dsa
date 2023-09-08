/*The bubble sort is a simple sorting algorithm, it just check if the next number in the list is superior if it does, swap with the previous one until the last swapped number and start again from the begining until the first element:
  As we can see the time complexity is equivalent of adding each number of a range which can be represented with this formula n(n + 1) / 2 which give a  Big O of n2
  Ex: 1 .. 5 -> 1+2+3+4+5 = 5 * ( 5 + 1) / 2
  adding each number in a range by adding their limit together until we reach the middle
  1 .. 5 -> 1 + 5 = 6
  2 .. 4 -> 2 + 4 = 6
  3 .. 3 - > 3 + 3 = 6
  then 6 * 3 = 15
  We then can generalize n(n + 1) / 2*/

export default function bubble_sort(list: number[]): void {
    for (let i = 0; i < list.length; ++i) {
	for (let j = 0; j < list.length - 1 - i; ++j) {
	    if (list[j] > list[j + 1]) {
		const temp = list[j]
		list[j] = list[j + 1];
		list[j + 1] = temp;
	    }
	}
    }
}
