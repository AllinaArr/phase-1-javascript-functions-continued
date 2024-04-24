// code your solution here
function saturdayFun(defaultValue = "roller-skate") {
  return "This Saturday, I want to " + defaultValue + "!";
}

function mondayWork(value = "go to the office") {
  return `This Monday, I will ${value}.`;
}

function wrapAdjective(valueDefault = "*") {
  return function (adjective = "special") {
    return `You are ${valueDefault}${adjective}${valueDefault}!`;
  };
}
