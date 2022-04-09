define(['dart_sdk', 'web/logging_functions', 'packages/pappes_web_utility/pappes_web_utility'], (function load__web__remove_javascript_timers(dart_sdk, web__logging_functions, packages__pappes_web_utility__pappes_web_utility) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const logging_functions = web__logging_functions.web__logging_functions;
  const pappes_web_utility_base = packages__pappes_web_utility__pappes_web_utility.src__pappes_web_utility_base;
  var remove_javascript_timers = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  remove_javascript_timers.main = function main() {
    logging_functions.turnOnLogging();
    pappes_web_utility_base.MyJS.removeAllTimers();
  };
  dart.trackLibraries("web/remove_javascript_timers", {
    "org-dartlang-app:///web/remove_javascript_timers.dart": remove_javascript_timers
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["remove_javascript_timers.dart"],"names":[],"mappings":";;;;;;;;;;;;;AAKiB,IAAf;AAEsB,IAAjB;EACP","file":"remove_javascript_timers.unsound.ddc.js"}');
  // Exports:
  return {
    web__remove_javascript_timers: remove_javascript_timers
  };
}));

//# sourceMappingURL=remove_javascript_timers.unsound.ddc.js.map
