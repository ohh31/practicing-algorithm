let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n"); ///dev/stdin
const [N, ...commands] = input;
let heap = new Array();
let result = new Array();

const insertHeap = (input) => {
  heap.push(input);
  moveUp();
};

const moveUp = () => {
  if (heap.length - 1 < 1) {
    return;
  }
  let currentIndex = heap.length - 1;

  while (currentIndex >= 1) {
    let currentNode = heap[currentIndex];
    let parentIndex = Math.floor(currentIndex / 2);
    let parentNode = heap[parentIndex];

    if (parentNode >= currentNode) {
      break;
    }

    heap[parentIndex] = currentNode;
    heap[currentIndex] = parentNode;
    currentIndex = parentIndex;
  }
};

const deleteHeap = () => {
  if (heap.length < 1) {
    return 0;
  } else {
    const max = heap[0];

    if (heap.length === 1) {
      heap.pop();
      return max;
    }

    heap[0] = heap.pop();
    moveDown();
    return max;
  }
};

const moveDown = () => {
  let currentIndex = 0;
  let leftChildIndex = currentIndex * 2 + 1;
  let rightChildIndex = currentIndex * 2 + 2;
  let maxIndex = 0;

  while (currentIndex < heap.length) {
    if (!heap[rightChildIndex] && !heap[leftChildIndex]) {
      break;
    }
    if (!heap[rightChildIndex]) {
      if (heap[leftChildIndex] > heap[currentIndex]) {
        maxIndex = leftChildIndex;
      } else {
        break;
      }
    }
    if (heap[leftChildIndex] < heap[rightChildIndex]) {
      if (heap[rightChildIndex] > heap[currentIndex]) {
        maxIndex = rightChildIndex;
      } else {
        break;
      }
    } else {
      if (heap[leftChildIndex] > heap[currentIndex]) {
        maxIndex = leftChildIndex;
      } else {
        break;
      }
    }

    let temp = heap[maxIndex];
    heap[maxIndex] = heap[currentIndex];
    heap[currentIndex] = temp;
    currentIndex = maxIndex;
  }
};

for (i = 0; i < N; i++) {
  if (Number(commands[i]) === 0) {
    const hiPriority = deleteHeap();
    result.push(hiPriority);
  } else {
    insertHeap(Number(commands[i]));
  }
}

console.log(result.join("\n"));
