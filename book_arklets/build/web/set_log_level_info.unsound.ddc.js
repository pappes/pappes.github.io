define(['dart_sdk', 'web/logging_functions', 'packages/logging/logging'], (function load__web__set_log_level_info(dart_sdk, web__logging_functions, packages__logging__logging) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const logging_functions = web__logging_functions.web__logging_functions;
  const level = packages__logging__logging.src__level;
  var set_log_level_info = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  set_log_level_info.main = function main() {
    logging_functions.setLogLevel(level.Level.INFO);
  };
  dart.trackLibraries("web/set_log_level_info", {
    "org-dartlang-app:///web/set_log_level_info.dart": set_log_level_info
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["set_log_level_info.dart"],"names":[],"mappings":";;;;;;;;;;;;;AAQyB,IAAvB,8BAAkB;EACpB","file":"set_log_level_info.unsound.ddc.js"}');
  // Exports:
  return {
    web__set_log_level_info: set_log_level_info
  };
}));

//# sourceMappingURL=set_log_level_info.unsound.ddc.js.map
