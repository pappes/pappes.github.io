define(['dart_sdk', 'web/logging_functions', 'packages/pappes_web_utility/pappes_web_utility'], (function load__web__remove_javascript(dart_sdk, web__logging_functions, packages__pappes_web_utility__pappes_web_utility) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const logging_functions = web__logging_functions.web__logging_functions;
  const pappes_web_utility_base = packages__pappes_web_utility__pappes_web_utility.src__pappes_web_utility_base;
  var remove_javascript = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  remove_javascript.main = function main() {
    logging_functions.turnOnLogging();
    pappes_web_utility_base.MyHtml.removeAllScripts(html.document);
  };
  dart.trackLibraries("web/remove_javascript", {
    "org-dartlang-app:///web/remove_javascript.dart": remove_javascript
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["remove_javascript.dart"],"names":[],"mappings":";;;;;;;;;;;;;;AAMiB,IAAf;AAEiC,IAA1B,gDAAiB;EAC1B","file":"remove_javascript.unsound.ddc.js"}');
  // Exports:
  return {
    web__remove_javascript: remove_javascript
  };
}));

//# sourceMappingURL=remove_javascript.unsound.ddc.js.map
