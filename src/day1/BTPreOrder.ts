function walk(node: BinaryNode<number>, vals: number[]): number[] {
    vals.push(node.value);

    if (node.left) {
        walk(node.left, vals);
    }

    if (node.right) {
        walk(node.right, vals);
    }

    return vals;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
