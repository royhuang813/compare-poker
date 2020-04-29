/**
 * @use 通过id获取元素
 * @param {string} id
 * @return {Object} 元素
 */
function getEleById(id) {
    return document.getElementById(id);
}

/**
 * @use 通过class获取元素集
 * @param {string} classes
 * @return {Object} 元素
 */
function getEleByClass(classes) {
    return document.getElementsByClassName(classes);
}

// /**
//  * @use 返回获取到的file内容
//  * @param {string} classes
//  * @return {Object} 元素
//  */
// function getEleByClass(classes) {
//     return document.getElementsByClassName(classes);
// }