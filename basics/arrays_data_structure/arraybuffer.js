"use strict";
/*
  * Arrays are fixed size contiguous memory chunks you then cannot grow it
* there is no inertAt, push or pop you can write those though
*
* In this example we are seing how are stored in the memory the data
* with 8 bits valules and 16 bits values in the same contiguous memory space of 6 bytes
* O(1) time complexity manipulation
*
  * */
const buffer = new ArrayBuffer(6); // creating a memory buffer of 6 contiguous bytes in the memory
console.log(buffer);
const a8 = new Uint8Array(buffer); // creating a new array of 8 bits units located at the buffer
a8[0] = 45; // writing 45 at the first 8 bits unit
console.log(buffer);
a8[2] = 45; // writing 45 at the first 8 bits unit
console.log(buffer);
const a16 = new Uint16Array(buffer); // creating a new array of 16 bits units located at the buffer
console.log(buffer); // the memory hasn't changed
a16[2] = 0x4545; // writing in hexadecimal 45 45 in the third 16 bits unit
console.log(buffer); // as we can see it has been wrote at the 5 and 6 bytes because we are now using 16 bits units
