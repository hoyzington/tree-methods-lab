function inOrder(node) {
	if (node.left) {
		inOrder(node.left);
	}
	console.log(node.data);
	if (node.right) {
		inOrder(node.right);
	}
}

function findOrAdd(rootNode, newNode) {
	function add(branchSide) {
		if (rootNode[branchSide]) {
			return findOrAdd(rootNode[branchSide], newNode);
		} else {
			rootNode[branchSide] = newNode;
		}
	}
	if (newNode.data < rootNode.data) {
		return add('left');
	} else if (newNode.data > rootNode.data) {
		return add('right');
	} else {
		return true;
	}
}

function max(node) {
	if (node.right) {
		return max(node.right);
	}
	return node;
}

function min(node) {
	if (node.left) {
		return min(node.left);
	}
	return node;
}
