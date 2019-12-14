// 深度对象克隆
export function deepClone (data) {
  let type = typeof data
  let obj
  if (type === 'array') {
    obj = []
  } else if (type === 'object') {
    obj = {}
  } else {
    return obj
  }
  if (type === 'array') {
    for (let i = 0; i < data.length; i++) {
      obj.push(deepClone(obj[i]))
    }
  } else if (type === 'object') {
    for (let k in data) {
      obj.push(deepClone(obj[k]))
    }
  }
  return obj
}
// 深度对象清理
export function deepRomve (obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object') {
        deepRomve(obj[key])
      } else {
        obj[key] = ''
      }
    }
  }
}
