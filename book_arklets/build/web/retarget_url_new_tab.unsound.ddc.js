define(['dart_sdk', 'web/logging_functions', 'packages/pappes_web_utility/pappes_web_utility'], (function load__web__retarget_url_new_tab(dart_sdk, web__logging_functions, packages__pappes_web_utility__pappes_web_utility) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const logging_functions = web__logging_functions.web__logging_functions;
  const pappes_web_utility_base = packages__pappes_web_utility__pappes_web_utility.src__pappes_web_utility_base;
  var retarget_url_new_tab = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  retarget_url_new_tab.main = function main() {
    logging_functions.turnOnLogging();
    pappes_web_utility_base.MyHtml.retargetAllHrefs(html.document, "_blank");
  };
  dart.trackLibraries("web/retarget_url_new_tab", {
    "org-dartlang-app:///web/retarget_url_new_tab.dart": retarget_url_new_tab
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["retarget_url_new_tab.dart"],"names":[],"mappings":";;;;;;;;;;;;;;AAMiB,IAAf;AAE2C,IAApC,gDAAiB,eAAU;EACpC","file":"retarget_url_new_tab.unsound.ddc.js"}');
  // Exports:
  return {
    web__retarget_url_new_tab: retarget_url_new_tab
  };
}));

//# sourceMappingURL=retarget_url_new_tab.unsound.ddc.js.map
