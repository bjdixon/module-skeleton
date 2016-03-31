(function () {
  "use strict";

  var root = this,
    previous_moduleName = root.moduleName,
    moduleName;

  moduleName = {};
  moduleName.VERSION = '0.0.0';

  // Add methods to moduleName here
  // eg. moduleName.functionToExport = function () { return true; };

  if (typeof exports !== 'undefined') {
    if (typeof moduleName !== 'undefined' && moduleName.exports) {
      exports = moduleName.exports = moduleName; // jshint ignore:line
    }
    exports.moduleName = moduleName;
  } else {
    root.moduleName = moduleName;
  }

}).call(this);
