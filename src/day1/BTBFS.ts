export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q = [head];

    while (q.length > 0) {
        const node = q.shift();

        if (node) {
            if (node.value === needle) {
                return true;
            }

            // add to queue
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
    }

    return false;
}
