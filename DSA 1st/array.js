/*
  ARRAY DSA QUICK REVISION
  Run: node array.js

  How to revise fast:
  1. Read the "Idea" line first.
  2. Check Time/Space.
  3. Look at the dry run console output.
*/

const print = (title, value) => console.log(title, value);

// ---------------------------------------------------------------------------
// 1. LEFT ROTATE ARRAY BY K PLACES
// ---------------------------------------------------------------------------
// Idea: Save first k elements, shift remaining elements left, put saved items at end.
// Time: O(n), Space: O(k)

function leftRotate(arr, k) {
  const n = arr.length;
  if (n === 0) return arr;

  k = k % n;
  const temp = [];

  for (let i = 0; i < k; i++) {
    temp[i] = arr[i];
  }

  for (let i = k; i < n; i++) {
    arr[i - k] = arr[i];
  }

  for (let i = n - k; i < n; i++) {
    arr[i] = temp[i - (n - k)];
  }

  return arr;
}

print("Left rotate by 3:", leftRotate([1, 2, 3, 4, 5, 6, 7], 3));
// Output: [4, 5, 6, 7, 1, 2, 3]

// ---------------------------------------------------------------------------
// 2. RIGHT ROTATE ARRAY BY K PLACES
// ---------------------------------------------------------------------------
// Idea: Save last k elements, shift remaining elements right, put saved items at start.
// Time: O(n), Space: O(k)

function rightRotate(arr, k) {
  const n = arr.length;
  if (n === 0) return arr;

  k = k % n;
  const temp = [];

  for (let i = n - k; i < n; i++) {
    temp[temp.length] = arr[i];
  }

  for (let i = n - k - 1; i >= 0; i--) {
    arr[i + k] = arr[i];
  }

  for (let i = 0; i < k; i++) {
    arr[i] = temp[i];
  }

  return arr;
}

print("Right rotate by 3:", rightRotate([1, 2, 3, 4, 5, 6, 7], 3));
// Output: [5, 6, 7, 1, 2, 3, 4]

// ---------------------------------------------------------------------------
// 3. OPTIMAL LEFT ROTATE USING REVERSE
// ---------------------------------------------------------------------------
// Idea:
//   left rotate [1,2,3,4,5] by 2
//   reverse first k      -> [2,1,3,4,5]
//   reverse remaining    -> [2,1,5,4,3]
//   reverse whole array  -> [3,4,5,1,2]
// Time: O(n), Space: O(1)

function leftRotateOptimal(arr, k) {
  const n = arr.length;
  if (n === 0) return arr;

  k = k % n;

  reverse(arr, 0, k - 1);
  reverse(arr, k, n - 1);
  reverse(arr, 0, n - 1);

  return arr;
}

// ---------------------------------------------------------------------------
// 4. OPTIMAL RIGHT ROTATE USING REVERSE
// ---------------------------------------------------------------------------
// Idea:
//   right rotate [1,2,3,4,5] by 2
//   reverse first n-k    -> [3,2,1,4,5]
//   reverse last k       -> [3,2,1,5,4]
//   reverse whole array  -> [4,5,1,2,3]
// Time: O(n), Space: O(1)

function rightRotateOptimal(arr, k) {
  const n = arr.length;
  if (n === 0) return arr;

  k = k % n;

  reverse(arr, 0, n - k - 1);
  reverse(arr, n - k, n - 1);
  reverse(arr, 0, n - 1);

  return arr;
}

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

print("Optimal left rotate by 3:", leftRotateOptimal([1, 2, 3, 4, 5, 6, 7], 3));
print("Optimal right rotate by 3:", rightRotateOptimal([1, 2, 3, 4, 5, 6, 7], 3));

// ---------------------------------------------------------------------------
// 5. SLIDING WINDOW: MINIMUM SUM SUBARRAY OF SIZE K
// ---------------------------------------------------------------------------
// Idea: Find first window sum, then slide by removing left value and adding right value.
// Use when: subarray size is fixed.
// Time: O(n), Space: O(1)

function minSubarraySumOfSizeK(arr, k) {
  if (k <= 0 || k > arr.length) return null;

  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let minSum = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    minSum = Math.min(minSum, windowSum);
  }

  return minSum;
}

print("Minimum sum of size 3:", minSubarraySumOfSizeK([1, 2, 3, 4, 5], 3));
// Windows: [1,2,3]=6, [2,3,4]=9, [3,4,5]=12

// ---------------------------------------------------------------------------
// 6. PREFIX SUM ARRAY
// ---------------------------------------------------------------------------
// Idea: prefix[i] stores sum from index 0 to index i.
// Use when: repeated range-sum questions are asked.
// Time: O(n), Space: O(n)

function prefixSum(arr) {
  if (arr.length === 0) return [];

  const prefix = [];
  prefix[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i - 1] + arr[i];
  }

  return prefix;
}

print("Prefix sum:", prefixSum([3, -1, 4, 2]));
// Output: [3, 2, 6, 8]

// ---------------------------------------------------------------------------
// 7. INSERT VALUE AFTER FIRST TARGET
// ---------------------------------------------------------------------------
// Idea: Find target, shift elements after it one step right, insert value.
// Time: O(n), Space: O(1)

function insertAfterTarget(arr, target, value) {
  let targetIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      targetIndex = i;
      break;
    }
  }

  if (targetIndex === -1) return arr;

  for (let i = arr.length - 1; i > targetIndex; i--) {
    arr[i + 1] = arr[i];
  }

  arr[targetIndex + 1] = value;
  return arr;
}

print("Insert 99 after 4:", insertAfterTarget([2, 3, 4, 2, 5, 6], 4, 99));
print("Target not found:", insertAfterTarget([2, 3, 4, 2, 5, 6], 10, 99));

// ---------------------------------------------------------------------------
// 8. MOVE ALL ZEROES TO BEGINNING
// ---------------------------------------------------------------------------
// Idea: Fill non-zero values from the end. Left side automatically becomes zero.
// This keeps the order of non-zero numbers same.
// Time: O(n), Space: O(1)

function moveZerosToBeginning(arr) {
  let insertPosition = arr.length - 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== 0) {
      arr[insertPosition] = arr[i];
      insertPosition--;
    }
  }

  while (insertPosition >= 0) {
    arr[insertPosition] = 0;
    insertPosition--;
  }

  return arr;
}

print("Move zeroes to beginning:", moveZerosToBeginning([1, 3, 4, 5, 0, 0, 3, 0, 2]));
// Output: [0, 0, 0, 1, 3, 4, 5, 3, 2]
