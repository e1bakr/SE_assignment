// requires Jest (npm i --save-dev jest)
findLCA = require("./LCA_js")
Node = require("./classnode")

root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.left = new Node(4);
root1.left.right = new Node(5);
root1.right.left = new Node(6);
root1.right.right = new Node(7);


console.log(findLCA(root1, 4, 7))

root2 = new Node("mammal");
root2.left = new Node("feline");
root2.right = new Node("canine");
root2.left.left = new Node("lion");
root2.left.right = new Node("tiger");
root2.right.left = new Node("hound");
root2.right.right = new Node("wolf");

test("--All nodes are leaves:", () => {
    expect(findLCA(root1, 4, 7)).toEqual(1)
    expect(findLCA(root1, 4, 5)).toEqual(2)

    expect(findLCA(root2, "hound", "lion")).toEqual("mammal")
    expect(findLCA(root2, "hound", "wolf")).toEqual("canine")
})

test("--One of the given nodes is the LCA:", () => {
    expect(findLCA(root1, 3, 6)).toEqual(3)
    expect(findLCA(root1, 2, 4)).toEqual(2)

    expect(findLCA(root2, "feline", "lion")).toEqual("feline")
    expect(findLCA(root2, "hound", "canine")).toEqual("canine")
})

test("--Root is one of the nodes:", () => {
    expect(findLCA(root1, 1, 7)).toEqual(1)
    expect(findLCA(root1, 4, 1)).toEqual(1)

    expect(findLCA(root2, "hound", "mammal")).toEqual("mammal")
    expect(findLCA(root2, "tiger", "mammal")).toEqual("mammal")
})

test("--Node not present:", () => {
    expect(findLCA(root1, 13, 7)).toEqual(-1)
    expect(findLCA(root1, 41, 12)).toEqual(-1)

    expect(findLCA(root2, "hound", "fish")).toEqual(-1)
    expect(findLCA(root2, "eagle", "anteater")).toEqual(-1)
})