// base:
// 1. seen it

const visited = [];

const isSame = (a: Point, b: Point) => a.x === b.x && a.y === b.y;

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const isWall = (point: Point) => maze[point.y].charAt(point.x) === wall;
    const isOutOfBounds = (point: Point) =>
        point.x < 0 ||
        point.x >= maze[0].length ||
        point.y < 0 ||
        point.y > maze.length;

    const uniqIndex = (point: Point) => point.y * 10 + point.x;
    const points: Point[] = [];
    const visited: number[] = [];

    const walk = function (curr: Point, visited: number[]): boolean {
        if (
            isOutOfBounds(curr) ||
            isWall(curr) ||
            visited.includes(uniqIndex(curr))
        ) {
            return false;
        }

        // visit node
        points.push(curr);
        visited.push(uniqIndex(curr));

        if (isSame(curr, end)) {
            return true;
        }

        // walk some
        let isEnded = walk({ x: curr.x, y: curr.y + 1 }, visited);
        if (!isEnded) {
            isEnded = walk({ x: curr.x, y: curr.y - 1 }, visited);
            if (!isEnded) {
                isEnded = walk({ x: curr.x + 1, y: curr.y }, visited);
                if (!isEnded) {
                    isEnded = walk({ x: curr.x - 1, y: curr.y }, visited);
                }
            }
        }

        return isEnded;
    };

    walk(start, visited);
    return points;
}
