type SNode<T> = {
    value: T;
    next?: SNode<T>;
}

export default class Stack<T> {
    public length: number;
    private head?: SNode<T>;

    constructor() {
	this.length = 0;
	this.head = undefined;
    }

    push(item: T): void {
	this.length++;
	this.head = {value: item, next: this.head} as SNode<T>;
    }

    pop(): T | undefined {
	if(!this.head){
	    return undefined;
	}
	this.length--;
	const value = this.head.value;
	this.head = this.head.next

	if(this.length === 0){
	    this.head = undefined;
	}
	return value;
	
    }

    peek(): T | undefined {
	return this.head?.value;
    }
    

    
}
