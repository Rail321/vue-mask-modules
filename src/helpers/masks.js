const nameMask = function(value) {
  return value.replace(/[^а-яА-Я]/g, '')
    .replace(/^[а-я]/, s => s.toUpperCase())
}

const pinMask = function(value) {
  return value.replace(/[^\d]/g, '')
    .replace(/(\d)(\d)(\d)(\d)(.)/, '$1$2$3$4')
}

const carNumberMask = function(value) {
  return value.replace(/[а-я]/, s => s.toUpperCase())
    .replace(/[^А-Я0-9]/, '')
    .replace(/([А-Я0-9]{6})(.)/, '$1')
    .replace(/(^[^А-Я])/, '')
    .replace(/(^[А-Я])([^0-9])/, '$1')
    .replace(/([0-9])([А-Я])/, '$1')
}

export { nameMask, pinMask, carNumberMask }