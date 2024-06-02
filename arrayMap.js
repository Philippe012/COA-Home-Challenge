function hasContiguousSubarrayWithSum(arr, target) {
    let sum = 0;
    const prefixSum = new Set();

    for (const num of arr) {
        sum += num;

        if (sum === target || prefixSum.has(sum - target)) {
            return true;
        }

        prefixSum.add(sum);
    }

    return false;
}

const userArray = prompt("Enter the array (comma-separated):");
const arr = userArray.split(',').map(Number);

const target = parseInt(prompt("Enter the target sum:"));

const result = hasContiguousSubarrayWithSum(arr, target);
console.log(Result: ${result});
