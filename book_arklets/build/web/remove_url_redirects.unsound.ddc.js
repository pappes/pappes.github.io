define(['dart_sdk', 'web/logging_functions', 'packages/pappes_web_utility/pappes_web_utility'], (function load__web__remove_url_redirects(dart_sdk, web__logging_functions, packages__pappes_web_utility__pappes_web_utility) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const logging_functions = web__logging_functions.web__logging_functions;
  const pappes_web_utility_base = packages__pappes_web_utility__pappes_web_utility.src__pappes_web_utility_base;
  var remove_url_redirects = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var T = {
    StringL: () => (T.StringL = dart.constFn(dart.legacy(core.String)))(),
    ObjectL: () => (T.ObjectL = dart.constFn(dart.legacy(core.Object)))(),
    ObjectLToStringL: () => (T.ObjectLToStringL = dart.constFn(dart.fnType(T.StringL(), [T.ObjectL()])))(),
    ElementL: () => (T.ElementL = dart.constFn(dart.legacy(html.Element)))(),
    ElementLTodynamic: () => (T.ElementLTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ElementL()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  remove_url_redirects.main = function main() {
    logging_functions.turnOnLogging();
    pappes_web_utility_base.MyHtml.iterateHTMLDOM(html.document.body, dart.fn(element => pappes_web_utility_base.MyHtml.alterAttribute(element, "href", dart.fn(url => pappes_web_utility_base.MyHtml.removeUrlRedirect(core.String.as(url)), T.ObjectLToStringL())), T.ElementLTodynamic()));
  };
  dart.trackLibraries("web/remove_url_redirects", {
    "org-dartlang-app:///web/remove_url_redirects.dart": remove_url_redirects
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["remove_url_redirects.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;AAMiB,IAAf;AAOgD,IALzC,8CACH,AAAS,oBACT,QAAC,WAAmB,8CAChB,OAAO,EACP,QACA,QAAC,OAAe,gEAAkB,GAAG;EAC/C","file":"remove_url_redirects.unsound.ddc.js"}');
  // Exports:
  return {
    web__remove_url_redirects: remove_url_redirects
  };
}));

//# sourceMappingURL=remove_url_redirects.unsound.ddc.js.map
