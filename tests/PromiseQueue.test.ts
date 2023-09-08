import PQueue from "@src/linkedList/PromiseQueue";


describe('PQueue', () => {
  let queue: PQueue<() => Promise<void>>;
  let output: number[];

  beforeEach(() => {
    queue = new PQueue<() => Promise<void>>();
    output = [];
  });

    function createTask(id: number, delay: number, output: number[]): () => Promise<void> {
  return async () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        output.push(id);
        resolve();
      }, delay);
    });
  };
}

test('processes tasks in order', async () => {
  const output: number[] = [];
  queue.enqueue(createTask(1, 300, output));
  queue.enqueue(createTask(2, 200, output));
  queue.enqueue(createTask(3, 100, output));
  await new Promise<void>((resolve) => setTimeout(() => resolve(), 1000));
  expect(output).toEqual([1, 2, 3]);
});

test('handles errors gracefully', async () => {
  const output: number[] = [];
  const errorFn: () => Promise<void> = async () => { throw new Error('Oops'); };
  queue.enqueue(errorFn);
  queue.enqueue(createTask(1, 100, output));
  const mockError = jest.spyOn(console, 'error').mockImplementation(() => {});
  await new Promise<void>((resolve) => setTimeout(() => resolve(), 400));
  expect(output).toEqual([1]);
  expect(mockError).toHaveBeenCalled();
});
});
