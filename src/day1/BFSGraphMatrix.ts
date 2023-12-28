export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const seen = Array(graph.length).fill(false);
    const prev = Array(graph.length).fill(-1);

    const Q = [source];
    do {
        const sor = Q.shift();

        if (sor === undefined) {
            break;
        }

        // if it is node
        if (sor === needle) {
            Q.push(sor);
            break;
        }

        // if we've seen it
        if (seen[sor]) {
            continue;
        }

        // add as seen
        seen[sor] = true;

        // get all visitable nodes
        // NOTE: this is bad, it's like having 2 for loops.... leaving this here
        // const childs = graph[sor]
        //     .map((v, ix) => (v > 0 ? ix : null))
        //     .filter((c) => c !== null && !seen[c]) as number[];

        // // where the children are from
        // for (let ch of childs) {
        //     prev[ch] = sor;
        //     Q.push(ch);
        // }

        const looks = graph[sor];
        for (let cx = 0; cx < looks.length; cx++) {
            if (looks[cx] <= 0) {
                continue;
            }

            if (seen[cx]) {
                continue;
            }

            prev[cx] = sor;
            Q.push(cx);
        }
    } while (Q.length > 0);

    if (Q.length === 0) {
        return null;
    }

    // from last node... traverse back
    const rvPath = [];
    let curr = Q.shift() as number;
    while (curr > -1) {
        rvPath.push(curr);
        curr = prev[curr];
    }

    // console.log({ rvPath });
    rvPath.reverse();
    return rvPath;
}
