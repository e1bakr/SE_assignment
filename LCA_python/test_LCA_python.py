import unittest
import LCA_python as lca


class Test_LCA(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        cls.root1 = lca.Node(1)
        cls.root1.left = lca.Node(2)
        cls.root1.right = lca.Node(3)
        cls.root1.left.left = lca.Node(4)
        cls.root1.left.right = lca.Node(5)
        cls.root1.right.left = lca.Node(6)
        cls.root1.right.right = lca.Node(7)

        cls.root2 = lca.Node("mammal")
        cls.root2.left = lca.Node("feline")
        cls.root2.right = lca.Node("canine")
        cls.root2.left.left = lca.Node("lion")
        cls.root2.left.right = lca.Node("tiger")
        cls.root2.right.left = lca.Node("hound")
        cls.root2.right.right = lca.Node("wolf")

    def test_self(self):
        print("\n--One of the given nodes is the LCA:")

        self.assertEqual(lca.findLCA(self.root1, 3, 6), 3)
        self.assertEqual(lca.findLCA(self.root1, 2, 4), 2)

        self.assertEqual(lca.findLCA(self.root2, "feline", "lion"), "feline")
        self.assertEqual(lca.findLCA(self.root2, "hound", "canine"), "canine")

    def test_leaves(self):
        print("\n--All nodes are leaves:")

        self.assertEqual(lca.findLCA(self.root1, 4, 7), 1)
        self.assertEqual(lca.findLCA(self.root1, 4, 5), 2)

        self.assertEqual(lca.findLCA(self.root2, "hound", "lion"), "mammal")
        self.assertEqual(lca.findLCA(self.root2, "hound", "wolf"), "canine")

    def test_root(self):
        print("\n--Root is one of the nodes:")

        self.assertEqual(lca.findLCA(self.root1, 1, 7), 1)
        self.assertEqual(lca.findLCA(self.root1, 4, 1), 1)

        self.assertEqual(lca.findLCA(self.root2, "hound", "mammal"), "mammal")
        self.assertEqual(lca.findLCA(self.root2, "tiger", "mammal"), "mammal")

    def test_failure(self):
        print("\n--Node not present:")

        self.assertEqual(lca.findLCA(self.root1, 13, 7), -1)
        self.assertEqual(lca.findLCA(self.root1, 41, 12), -1)

        self.assertEqual(lca.findLCA(self.root2, "hound", "fish"), -1)
        self.assertEqual(lca.findLCA(self.root2, "eagle", "anteater"), -1)


if __name__ == "__main__":
    unittest.main()
