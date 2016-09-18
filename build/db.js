'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addCountry = exports.getCountries = exports.getCountry = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _bluebird = require('bluebird');

var getCountry = exports.getCountry = function () {
  var _ref = (0, _bluebird.coroutine)(_regenerator2.default.mark(function _callee(_ref2) {
    var name = _ref2.name;
    var country;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return db('country').where('name', 'like', name);

          case 2:
            country = _context.sent;
            return _context.abrupt('return', country[0]);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getCountry(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getCountries = exports.getCountries = function () {
  var _ref3 = (0, _bluebird.coroutine)(_regenerator2.default.mark(function _callee2(_ref4) {
    var limit = _ref4.limit;
    var countries;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return db('country').limit(limit);

          case 2:
            countries = _context2.sent;
            return _context2.abrupt('return', countries);

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getCountries(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

var getCountryById = function () {
  var _ref5 = (0, _bluebird.coroutine)(_regenerator2.default.mark(function _callee3(id) {
    var country;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return db('country').where('id', id);

          case 2:
            country = _context3.sent;
            return _context3.abrupt('return', country[0]);

          case 4:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getCountryById(_x3) {
    return _ref5.apply(this, arguments);
  };
}();

var addCountry = exports.addCountry = function () {
  var _ref6 = (0, _bluebird.coroutine)(_regenerator2.default.mark(function _callee4(_ref7) {
    var name = _ref7.name;
    var code = _ref7.code;
    var id;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return db('country').insert({ name: name, code: code }).returning('id');

          case 2:
            id = _context4.sent;
            return _context4.abrupt('return', getCountryById(id[0]));

          case 4:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function addCountry(_x4) {
    return _ref6.apply(this, arguments);
  };
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: 'data.sqlite3'
  }
});