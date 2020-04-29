/**
 * @use 对比两组数据，判断同位值谁最大
 * @param {number[], number[]} leonScoreArr, JudyScoreArr
 * @return {number} 0: 一样大； 1: leon大； 2: judy大
 */
const getCompareNums = function (leonScoreArr, judyScoreArr) {
    console.log('各自卡牌面值分数(leon、judy):', leonScoreArr, judyScoreArr)
    // 此方案有bug，只适用于所有数字都是同样位数
    // let leonNum = +leonScoreArr.join('');
    // let judyNum = +judyScoreArr.join('');
    // if (leonNum === judyNum) {
    //     return 0;
    // } else {
    //     return leonNum > judyNum ? 1 : 2
    // }
    let i = 0;
    while (i < 5) {
        if (leonScoreArr[i] > judyScoreArr[i]) {
            return 1;
        } else if (leonScoreArr[i] < judyScoreArr[i]) {
            return 2
        }
        i++;
    }
    return 0
}