var math = require('mathjs')
var letter = function (value) {
  var n = parseInt(('' + value)[('' + value).length - 1], 10)
  var mod = ''
  if (n >= 1 && n < 4) {
    mod = '-'
  } else if ((n > 7 && n <= 9) || n === 0) {
    mod = '+'
  }

  if (value > 89 && value <= 105) {
    return 'A' + mod
  } else if (value > 79) {
    return 'B' + mod
  } else if (value > 69) {
    return 'C' + mod
  } else if (value > 59) {
    return 'D' + mod
  } else {
    return 'F'
  }
}

var average = function (arr) {
  return arr.reduce(function (a, cur) {
      return a + cur
    }, 0) / arr.length
}

var mode = function (arr) {
  var obj = arr.reduce(function (a, cur) {
    return a.hasOwnProperty(cur) ? (a[cur] += 1, a) : (a[cur] = 1, a)
  }, {})
  var max = 0
  var modes = []
  for (var p in obj) {
    if (obj[p] > max) {
      max = obj[p]
    }

  }
  for (p in obj) {
    if (obj[p] === max) {
      modes.push(parseInt(p, 10))
    }
  }
  modes.sort()
  return modes
}

module.exports = {
  letterGrader: letter,
  averageScore: average,
  medianScore: math.median,
  modeScore: mode

}
