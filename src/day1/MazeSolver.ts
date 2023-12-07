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

    // walk(start, visited);
    primeWalk(maze, wall, start, end, visited, points);
    return points;
}

// ----
// functional walk /
// ----

const isWall = (maze: string[], wall: string, point: Point) =>
    maze[point.y].charAt(point.x) === wall;
const isOutOfBounds = (maze: string[], point: Point) =>
    point.x < 0 ||
    point.x >= maze[0].length ||
    point.y < 0 ||
    point.y > maze.length;

type UniqIndex = number;
const uniqIndex = (point: Point): UniqIndex => point.y * 10 + point.x;

type Maze = string[];
type Wall = string;
const primeWalk = function (
    maze: Maze,
    wall: Wall,
    curr: Point,
    end: Point,
    visited: UniqIndex[],
    path: Point[],
) {
    if (
        isOutOfBounds(maze, curr) ||
        isWall(maze, wall, curr) ||
        visited.includes(uniqIndex(curr))
    )
        return false;

    // viisting things
    visited.push(uniqIndex(curr));
    path.push(curr);

    if (isSame(curr, end)) {
        return true;
    }

    for (let i = 0; i < dirs.length; i++) {
        const [dx, dy] = dirs[i];
        if (
            primeWalk(
                maze,
                wall,
                {
                    x: curr.x + dx,
                    y: curr.y + dy,
                },
                end,
                visited,
                path,
            )
        ) {
            return true;
        }
    }

    // if false remove
    path.pop();
    return false;
};

const dirs = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
];
