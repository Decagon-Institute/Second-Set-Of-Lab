const removeDuplicates = require("./SortSolution");


test('Expect ["sumit","sumit","amit","anil","anish"] to return ["amit", "anil", "anish","sumit"]', () => {
    expect(removeDuplicates(["sumit","sumit","amit","anil","anish"])).toEqual(["amit", "anil", "anish","sumit"]);
})

test('Expect [1, 2, 1, 4, 6, 4 to return [ 1, 2, 4, 6 ]', () => {
    expect(removeDuplicates([1, 2, 1, 4, 6, 4])).toEqual([ 1, 2, 4, 6 ]);
})

test(`Expect ["ab", "90", 90, "jail", "*"] to return [ '*', 90, 'ab', 'jail' ]`, () => {
    expect(removeDuplicates(["ab", "90", 90, "jail", "*"])).toEqual([ '*', 90, 'ab', 'jail' ]);
})

test(`Expect ["f", "o", "o", "o", "o", "d"] to return [ 'd', 'f', 'o' ]`, () => {
    expect(removeDuplicates(["f", "o", "o", "o", "o", "d"])).toEqual([ 'd', 'f', 'o' ]);
})
