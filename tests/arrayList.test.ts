import ArrayList from "@src/linkedList/arrayList";
//import Queue from "../Queue"

test("queue", function () {
    const list = new ArrayList();

    list.enqueue(5);
    list.enqueue(7);
    list.enqueue(9);

    expect(list.deque()).toEqual(5);
    expect(list.get_length()).toEqual(2);

    // this must be wrong..?
    debugger;

    // i hate using debuggers
    list.enqueue(11);
    debugger;
    expect(list.deque()).toEqual(7);
    expect(list.deque()).toEqual(9);
    expect(list.get(0)).toEqual(11);
    expect(list.deque()).toEqual(11);
    expect(list.deque()).toEqual(undefined);
    expect(list.get_length()).toEqual(0);

    // just wanted to make sure that I could not blow up myself when i remove
    // everything
    list.enqueue(69);
    expect(list.get(0)).toEqual(69);
    expect(list.get_length()).toEqual(1);
    list.enqueue(23);
    list.enqueue(54);
    list.enqueue(98);
    list.enqueue(34);
    expect(list.get_length()).toEqual(5);
    list.enqueue(98);
    list.enqueue(103);
    list.enqueue(432);
    list.enqueue(1);
    list.enqueue(98);
    list.enqueue(213);
    list.enqueue(13);
    list.enqueue(12);
});
