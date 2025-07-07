export const sortAsc = function (v1: string, v2: string) {
    if (v1 < v2) {
        return -1;
    } else if (v1 > v2) {
        return 1;
    } else {
        return 0;
    }
}

export const sortDesc = function (v1: string, v2: string) {
    if (v1 < v2) {
        return 1;
    } else if (v1 > v2) {
        return -1;
    } else {
        return 0;
    }
}
