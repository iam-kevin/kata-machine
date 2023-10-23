export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;
    let ix;
    do {
        ix = Math.floor(lo + (hi - lo) / 2);
        const curr = haystack[ix];

        if (curr === needle) {
            return true;
        } else if (needle > curr) {
            lo = ix + 1;
        } else {
            hi = ix;
        }
    } while (lo < hi);

    return false;
}
