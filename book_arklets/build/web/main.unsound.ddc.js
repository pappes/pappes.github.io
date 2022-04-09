define(['dart_sdk'], (function load__web__main(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var main = Object.create(dart.library);
  var $text = dartx.text;
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  main.main = function main$() {
    html.querySelector("#output")[$text] = "Dart is running.";
  };
  dart.trackLibraries("web/main", {
    "org-dartlang-app:///web/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;AAMoD,IAAlD,AAAyB,mBAAX,oBAAkB;EAClC","file":"main.unsound.ddc.js"}');
  // Exports:
  return {
    web__main: main
  };
}));

//# sourceMappingURL=main.unsound.ddc.js.map
