export default function bubble_sort(arr: number[]): void {
    let index = arr.length - 1;
    while (index !== 0) {
        for (let i = 0; i < index; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
            }
        }
        index -= 1;
    }
}
