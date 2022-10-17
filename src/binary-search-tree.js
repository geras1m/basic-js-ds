const {NotImplementedError} = require('../extensions/index.js');

const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
    constructor() {
        this.rootTree = null;
    }

    root() {
        return this.rootTree
    }

    add(data) {
        this.rootTree = addNewNode(this.rootTree, data);

        function addNewNode(node, data) {
            if (!node) return new Node(data)

            if (node === data.data) return node

            data < node.data ? node.left = addNewNode(node.left, data) : node.right = addNewNode(node.right, data)

            return node
        }
    }

    has(data) {
        return hasNode(this.rootTree, data);

        function hasNode(node, data) {
            if (!node) return false;

            if (node.data === data) return true;

            if (data < node.data) {
                return hasNode(node.left, data);
            } else {
                return hasNode(node.right, data);
            }
        }
    }

    find( data ) {
        return hasNode(this.rootTree, data);

        function hasNode(node, data) {
            if (!node) return null;

            if (node.data === data) return node;

            if (data < node.data) {
                return hasNode(node.left, data);
            } else {
                return hasNode(node.right, data);
            }
        }
    }

    remove(/* data */) {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    min() {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    max() {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }
}

module.exports = {
    BinarySearchTree
};