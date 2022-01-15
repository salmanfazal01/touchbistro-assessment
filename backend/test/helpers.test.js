import { assert } from "chai";
import { findPrimes, getMedian } from "../helpersFunctions.js";

const arr1 = [2, 3, 5, 7];
const arr2 = [2, 3, 5, 7, 11, 13, 17];

describe("Helper Functions", () => {
  it("Should return prime numbers", () => {
    assert.deepEqual(findPrimes(10), arr1);
    assert.deepEqual(findPrimes(18), arr2);
  });

  it("Should return correct median", () => {
    assert.deepEqual(getMedian(arr1), [3, 5]);
    assert.deepEqual(getMedian(arr2), [7]);
  });
});
