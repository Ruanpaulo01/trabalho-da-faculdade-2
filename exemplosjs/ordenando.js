const swap = (array, position1, position2) => {
    [array[position1], array[position2]] = [array[position2], array[position1]];
};

const shuffle = (array, numOfSwaps) => {
    for (let i = 0; i < numOfSwaps; i++) {
        const randomIndex1 = Math.floor(Math.random() * array.length);
        const randomIndex2 = Math.floor(Math.random() * array.length);
        swap(array, randomIndex1, randomIndex2);
    }
};

const bubble_sort = (array) => {
    const len = array.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1);
                swapped = true;
            }
        }
    } while (swapped);
};

const selection_sort = (array) => {
    const len = array.length;
    for (let i = 0; i < len - 1; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (min !== i) {
            swap(array, i, min);
        }
    }
};

const quick_sort = (array, left = 0, right = array.length - 1) => {
    if (left < right) {
        const pivotIndex = partition(array, left, right);
        quick_sort(array, left, pivotIndex - 1);
        quick_sort(array, pivotIndex + 1, right);
    }
};

const partition = (array, left, right) => {
    const pivot = array[right];
    let i = left - 1;
    for (let j = left; j < right; j++) {
        if (array[j] < pivot) {
            i++;
            swap(array, i, j);
        }
    }
    swap(array, i + 1, right);
    return i + 1;
};
