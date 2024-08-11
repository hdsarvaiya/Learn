class Solution {
    constructor() {
        this.ans = []; // Global variable to store the subsets
    }

    // Helper function for generating subsets
    helper(A, temp, i) {
        if (i === A.length) { // Base case: end of array
            this.ans.push([...temp]); // Add a copy of temp to ans
            return;
        }

        temp.push(A[i]); // Include the current element
        this.helper(A, temp, i + 1); // Recur with the element included

        temp.pop(); // Exclude the current element
        this.helper(A, temp, i + 1); // Recur without the element

        return;
    }

    // Function to generate all subsets
    subsets(A) {
        this.ans = []; // Reset the ans array
        this.helper(A, [], 0);
        this.ans.sort(); // Sort the subsets lexicographically
        return this.ans;
    }
}

// Driver code to test the above implementation
const n = prompt("Enter number of elements:");
let array = [];

for (let i = 0; i < n; i++) {
    let x = prompt(`Enter element ${i + 1}:`);
    array.push(parseInt(x));
}

let ob = new Solution();
let res = ob.subsets(array);

// Print result
console.log("Subsets are:");
res.forEach(subset => {
    console.log(subset.join(" "));
});
