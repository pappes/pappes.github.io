define(['dart_sdk', 'web/logging_functions', 'packages/pappes_web_utility/pappes_web_utility'], (function load__web__remove_html_overlays(dart_sdk, web__logging_functions, packages__pappes_web_utility__pappes_web_utility) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const logging_functions = web__logging_functions.web__logging_functions;
  const pappes_web_utility_base = packages__pappes_web_utility__pappes_web_utility.src__pappes_web_utility_base;
  var remove_html_overlays = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  remove_html_overlays.main = function main() {
    logging_functions.turnOnLogging();
    pappes_web_utility_base.MyHtml.removeAllOverlays(html.document, true);
  };
  dart.trackLibraries("web/remove_html_overlays", {
    "org-dartlang-app:///web/remove_html_overlays.dart": remove_html_overlays
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["remove_html_overlays.dart"],"names":[],"mappings":";;;;;;;;;;;;;;AAMiB,IAAf;AAEwC,IAAjC,iDAAkB,eAAU;EACrC","file":"remove_html_overlays.unsound.ddc.js"}');
  // Exports:
  return {
    web__remove_html_overlays: remove_html_overlays
  };
}));

//# sourceMappingURL=remove_html_overlays.unsound.ddc.js.map
