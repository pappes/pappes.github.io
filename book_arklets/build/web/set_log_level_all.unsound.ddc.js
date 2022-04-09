define(['dart_sdk', 'web/logging_functions', 'packages/logging/logging'], (function load__web__set_log_level_all(dart_sdk, web__logging_functions, packages__logging__logging) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const logging_functions = web__logging_functions.web__logging_functions;
  const level = packages__logging__logging.src__level;
  var set_log_level_all = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  set_log_level_all.main = function main() {
    logging_functions.setLogLevel(level.Level.ALL);
  };
  dart.trackLibraries("web/set_log_level_all", {
    "org-dartlang-app:///web/set_log_level_all.dart": set_log_level_all
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["set_log_level_all.dart"],"names":[],"mappings":";;;;;;;;;;;;;AAQwB,IAAtB,8BAAkB;EACpB","file":"set_log_level_all.unsound.ddc.js"}');
  // Exports:
  return {
    web__set_log_level_all: set_log_level_all
  };
}));

//# sourceMappingURL=set_log_level_all.unsound.ddc.js.map
