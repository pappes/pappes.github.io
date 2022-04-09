define(['dart_sdk', 'web/logging_functions', 'packages/pappes_web_utility/pappes_web_utility'], (function load__web__retarget_url_self(dart_sdk, web__logging_functions, packages__pappes_web_utility__pappes_web_utility) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const logging_functions = web__logging_functions.web__logging_functions;
  const pappes_web_utility_base = packages__pappes_web_utility__pappes_web_utility.src__pappes_web_utility_base;
  var retarget_url_self = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  retarget_url_self.main = function main() {
    logging_functions.turnOnLogging();
    pappes_web_utility_base.MyHtml.retargetAllHrefs(html.document, "_self");
  };
  dart.trackLibraries("web/retarget_url_self", {
    "org-dartlang-app:///web/retarget_url_self.dart": retarget_url_self
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["retarget_url_self.dart"],"names":[],"mappings":";;;;;;;;;;;;;;AAMiB,IAAf;AAE0C,IAAnC,gDAAiB,eAAU;EACpC","file":"retarget_url_self.unsound.ddc.js"}');
  // Exports:
  return {
    web__retarget_url_self: retarget_url_self
  };
}));

//# sourceMappingURL=retarget_url_self.unsound.ddc.js.map
