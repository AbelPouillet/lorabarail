module.exports = function (type) {
  return require('./codec/device/' + type.toLowerCase());
};
