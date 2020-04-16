const leonObj = require('./leon.json');
const judyObj = require('./judy.json');
const { getScoreArr, findTwoCardsIndex, getFinalScore, getCompareScore } = require('./firstStep')
const { getCompareNums } = require('./secondStep')
const { getCompareColor } = require('./thirdStep')



// start
let result = {},
    roundCount = Object.keys(leonObj).length;
for (let i = 0; i < roundCount; i++) {
    console.log(`--------------第${i + 1}局--------------`)
    let leonPokerStr = (leonObj[i]);    //string eg: SJHQCKD5H8
    let judyPokerStr = (judyObj[i]);
    let leonScoreArr = getScoreArr(leonPokerStr);   //array eg: [10,10,10,5,8]
    let JudyScoreArr = getScoreArr(judyPokerStr);
    let leonFinalScore = getFinalScore(findTwoCardsIndex(leonScoreArr), leonScoreArr)   //number eg: 3
    let judyFinalScore = getFinalScore(findTwoCardsIndex(JudyScoreArr), JudyScoreArr)
    let compareScore = getCompareScore(leonFinalScore, judyFinalScore);
    if (compareScore === 0) {
        let compareNums = getCompareNums(leonScoreArr, JudyScoreArr);
        if (compareNums === 0) {
            let compareColor = getCompareColor(leonPokerStr, judyPokerStr);
            if (compareColor === 0) {
                console.log('最终赢家:', '平局')
            } else {
                result[i] = compareColor === 1 ? 'leon' : 'judy'
                console.log('最终赢家:', result[i])
            }
        } else {
            result[i] = compareNums === 1 ? 'leon' : 'judy'
            console.log('最终赢家:', result[i])
        }
    } else {
        result[i] = compareScore === 1 ? 'leon' : 'judy'
        console.log('最终赢家:', result[i])
    }
}


console.log('\n------游戏记录------\n', result)




// 解题逻辑：
//1: if (得分一致) {
//2:     if (顺序一致) {
//3:         if (花色一致) {
//               平局
//           } else {
//               return
//           }
//       } else {
//           return
//       }
//   } else {
//       return
//   }
