function makePermutations(str) {
  // TODO: 여기에 코드를 작성합니다.
  let result = "";
  let com;
  let last;
  if (str.length === 0) {
    return result;
  }

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      com = str[i] + str[j];
      result += `${com},`;
      if (i === (str.length - 1) && j === (str.length - 1)) {
        result = result.slice(0, result.length - 1);
      }
    }
  }
  return result;
}

console.log(makePermutations("cat"));
