/**
 * @use 对比两组数据，判断同位花色谁最大
 * @param {string, string} leonPokerStr, judyPokerStr
 * @return {number} 0: 一样大； 1: leon大； 2: judy大
 */
const getCompareColor = function (leonPokerStr, judyPokerStr) {
    let i = 0,
        arrs = [];
    while (i < 2) {
        const patt = /[S,H,C,D]/g;
        let pokerColorStr = arguments[i].match(patt);
        const matchSHCD = {
            "S": 4,
            "H": 3,
            "C": 2,
            "D": 1
        }
        console.log(i === 0 ? 'leon' : 'judy', '花色', pokerColorStr);
        let PokerColorNum = pokerColorStr.map((value, key) => {
            return matchSHCD[value]
        })
        arrs.push(PokerColorNum)
        i++;
    }
    let leonColorNum = +arrs[0].join('');
    let judyColorNum = +arrs[1].join('');
    if (leonColorNum === judyColorNum) {
        return 0;
    } else {
        return leonColorNum > judyColorNum ? 1 : 2
    }
}