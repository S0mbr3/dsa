let a: number[] = [];
const tests = [10, 100, 1000, 10000, 100_000, 1_000_000, 10_000_000];
const overhead =  1000000;

function time(fun: () => void): number {
    const now = performance.now(); 
    fun();
    return performance.now() - now;
}

function push(number: number) {
    for (let i = 0; i < number;++i) {
	a.push(Math.random());
    }
}

function pop(number: number) {
    for (let i = 0; i< number; ++i) {
	a.pop();
    }
}

function shift(number: number) {
    for (let i = 0; i< number; ++i) {
	a.shift();
    }
}


function unshift(number: number) {
    for (let i = 0; i< number; ++i) {
	a.unshift(Math.random());
    }
}

function get(idx: number) {
    return a[idx];
}


function test_array(fun: () => void, test: string): void{
    console.log(test);
    //a.length = 0;
    tests.forEach(t => {
	a.push(t);

	console.log(t, time(() => fun()));
    });
    a = [] as number[];
}

console.log("GET");
tests.forEach(t => {
    a.push(t); 

    console.log( t, time(() => get(t-1)));
});

test_array(()=> push(overhead), "PUSH");
test_array(()=> pop(overhead), "POP");
test_array(()=> shift(overhead), "shift");
test_array(()=> unshift(overhead), "unshift");
