/**
 * @use 对比两组数据，判断谁的和最大
 * @param {number, number} leonScore, judyScore
 * @return {number} 0: 一样大； 1: leon大； 2: judy大
 */
const getCompareScore = function (leonScore, judyScore) {
    console.log('各自纯面值得分(leon、judy):', leonScore, judyScore)
    if (leonScore === judyScore) {
        return 0;
    } else {
        return leonScore > judyScore ? 1 : 2
    }
}

/**
 * @use 初步算出得分
 * @param {number[], number[]} indexArr, pokerScoreArr
 * @return {number}
 */
const getFinalScore = function (indexArr, pokerScoreArr) {
    if (indexArr.length === 0) {
        return 0;
    } else {
        let one = pokerScoreArr[indexArr[0]],
            two = pokerScoreArr[indexArr[1]],
            sum = one + two;
        if (sum > 10) {
            return sum - 10
        } else {
            return sum
        }
    }
}

/**
 * @use 查找符合要求的2张卡片下标
 * @param {number[]} arr
 * @return {number[]}   //满足要求：返回剩余2张卡片的下标；不满足：返回空数组
 */
const findTwoCardsIndex = function (arr) {
    let l = arr.length,
        result = new Set([0, 1, 2, 3, 4]);
    for (let i = 0; i < l - 2; i++) {
        for (let j = i + 1; j < l - 1; j++) {
            for (let k = j + 1; k < l; k++) {
                if ((arr[i] + arr[j] + arr[k]) % 10 === 0) {
                    result.delete(i)
                    result.delete(j)
                    result.delete(k);
                    return [...result]
                }
            }
        }
    }
    return []
}

/**
 * @use 过滤卡片组合，得到各卡片纯数字分值的数组
 * @param {string} str
 * @return {number[]}
 */
const getScoreArr = function (str) {
    //卡值对应
    let matchAJQK = {
        A: 1,
        J: 10,
        Q: 10,
        K: 10
    }
    const patt = /[S,H,C,D]/g;
    let pokerScoreArr = str.replace(patt, ',').substring(1).split(',');
    pokerScoreArr = pokerScoreArr.map(value => { return matchAJQK[value] ? matchAJQK[value] : +value })
    return pokerScoreArr
}