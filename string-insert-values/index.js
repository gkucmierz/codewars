// https://www.codewars.com/kata/529b54d9aba78c924d00088e/javascript

const format = function (str, obj) {
  const truthy = (val, def) => typeof val === 'undefined' ? def : val;
  return str.replace(/\{\w+\}/g, a => truthy(obj[a.slice(1, a.length-1)], a));
};
