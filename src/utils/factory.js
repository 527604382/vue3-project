export const randomTs = (n) => {
  if (n > 21) return null;
  return parseInt((Math.random() + 1) * Math.pow(10, n - 1));
};

/**
 * @param  array  菜单
 * @return  array
 */
export const menuSort = (arr) => {
  if (arr.length == 0) {
    return [];
  }
  let tempArr = [];
  arr.map((v) => {
    if (v.parentId == 0 || v.parentId == -1) {
      v.children = [];
      tempArr.push(v);
    }
  });
  tempArr.map((v) => {
    arr.map((value) => {
      v.menuId == value.parentId ? v.children.push(value) : null;
    });
  });
  console.log("%c@@@temparr", "color:green", tempArr);
  return tempArr;
};

/**
 * @param array
 * @returns  Number
 */

export const sumNumber = (array) => {
  return array.reduce((curr, pre) => {
    return Number(curr) + Number(pre);
  });
};

export const replaceStr = (str) => {
  let newStr = "";
  for (let i = 0, l = str.length; i < l; i++) {
    if (
      str.charAt(i) == "年" ||
      str.charAt(i) == "月" ||
      str.charAt(i) == "日"
    ) {
      continue;
    } else {
      newStr += str.charAt(i);
    }
  }

  return newStr;
};
