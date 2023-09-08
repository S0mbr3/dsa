type PNode<T> = {
    value: T;
    next?: PNode<T>
}

export default class PQueue<T extends Function> {
    public length: number;
    private head?: PNode<T>;
    private tail?: PNode<T>;
    private isRunning: boolean;

    constructor() {
	this.length = 0;
	this.head = this.tail = undefined;
	this.isRunning = false;
    }

    enqueue(item: T) {
	const node = {value: item} as PNode<T>;
	this.length++;
	if(!this.tail) {
	    this.tail = this.head = node;
	} else {

	this.tail.next = node;
	this.tail = node;
	}
	this.runQueue();
    }

    async deque() {
	if(!this.head) {
	    return;
	}

	this.length--;
	const head = this.head;
	this.head = this.head.next;
	head.next = undefined;

	if(this.length === 0) {
	    this.tail = undefined;
	    this.head = undefined;
	}

	try {
	    return await head.value();
	} catch (error) {
	    console.error("An error occured while processing the queue:", error)};
    }

    async runQueue() {
	if(this.isRunning) {
	    return;
	}
	this.isRunning=true;
	while(this.length != 0) {
	    await this.deque();
	}
	this.isRunning=false;
    }
}


// let i = 0;
// const list = new PQueue<() => Promise<void>>();
// function createCustomTimeout(seconds: number) {
//     return new Promise<void>((resolve, _) => {
// 		setTimeout(() => {
// 			console.log(++i);
// 		    resolve();
// 		}, seconds * 1000);
// 	});
// }


// let why: () => Promise<void> = async () => { await createCustomTimeout(1) }
// list.enqueue(why);
// list.enqueue(why);
// list.enqueue(why);
// list.enqueue(why);
// list.enqueue(why);
// list.enqueue(why);
// list.enqueue(why);
// list.enqueue(why);
