var levSort = (arr, search, getStr) => {
    var result = arr.map(function (a) {
        return a;
    });
    result.sort(function (a, b) {
        return levDist(getStr(a), search) - levDist(getStr(b), search);
    });
    return result;
}
module.exports = levSort;
levSort;