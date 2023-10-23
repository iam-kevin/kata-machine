export default function two_crystal_balls(breaks: boolean[]): number {
    let safeix = 0;
    let fsqix = Math.floor(Math.sqrt(breaks.length)); // sqrt(100) = 10

    do {
        if (breaks[fsqix] === false) {
            safeix = fsqix; // 10
            fsqix = fsqix + Math.floor(Math.sqrt(breaks.length - fsqix)); // sqrt(100 - 10) + 10
        } else {
            for (let i = safeix; i < fsqix + 1; ++i) {
                if (breaks[i] === true) {
                    return i;
                }
            }

            return -1;
        }
    } while (true);
}

// export default function two_crystal_balls_(breaks: boolean[]): number {
//     let safeix = 0;
//     let fsqix = Math.floor(Math.sqrt(breaks.length)); // sqrt(100) = 10

//     do {
//         if (breaks[fsqix] === false) {
//             safeix = fsqix; // 10
//             fsqix += fsqix; // sqrt(100) + 10
//         } else {
//             for (let i = safeix; i < fsqix + 1; ++i) {
//                 if (breaks[i] === true) {
//                     return i;
//                 }
//             }

//             return -1;
//         }
//     } while (true);
// }
