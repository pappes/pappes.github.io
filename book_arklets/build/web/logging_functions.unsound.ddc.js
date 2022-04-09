define(['dart_sdk', 'packages/logging/logging', 'packages/pappes_web_utility/pappes_web_utility'], (function load__web__logging_functions(dart_sdk, packages__logging__logging, packages__pappes_web_utility__pappes_web_utility) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const logger = packages__logging__logging.src__logger;
  const log_record = packages__logging__logging.src__log_record;
  const level = packages__logging__logging.src__level;
  const pappes_web_utility_base = packages__pappes_web_utility__pappes_web_utility.src__pappes_web_utility_base;
  var logging_functions = Object.create(dart.library);
  var $append = dartx.append;
  var $_set = dartx._set;
  var $value = dartx.value;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(false);
  var T = {
    HiddenInputElementL: () => (T.HiddenInputElementL = dart.constFn(dart.legacy(html.HiddenInputElement)))(),
    LogRecordL: () => (T.LogRecordL = dart.constFn(dart.legacy(log_record.LogRecord)))(),
    LogRecordLToNull: () => (T.LogRecordLToNull = dart.constFn(dart.fnType(core.Null, [T.LogRecordL()])))(),
    ListL: () => (T.ListL = dart.constFn(dart.legacy(core.List)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  logging_functions.setLogLevel = function setLogLevel(level) {
    let t0;
    let logLevelElement = T.HiddenInputElementL().as(html.querySelector("#" + "bookmaklet_log_level"));
    if (logLevelElement == null) {
      logLevelElement = (t0 = html.HiddenInputElement.new(), (() => {
        t0.id = "bookmaklet_log_level";
        return t0;
      })());
      html.document.body[$append](logLevelElement);
    }
    let mapData = new _js_helper.LinkedMap.new();
    mapData[$_set]("name", level.name);
    mapData[$_set]("value", level.value);
    logLevelElement[$value] = convert.jsonEncode(mapData);
  };
  logging_functions.turnOnLogging = function turnOnLogging() {
    let logLevelElement = T.HiddenInputElementL().as(html.querySelector("#" + "bookmaklet_log_level"));
    if (logLevelElement != null) {
      logger.hierarchicalLoggingEnabled = true;
      pappes_web_utility_base.log.onRecord.listen(dart.fn(rec => {
        core.print(dart.str(rec.level.name) + ": " + dart.str(rec.time) + ": " + dart.str(rec.message));
        pappes_web_utility_base.MyHtml.logMessageIntoHTMLBodyComment(dart.str(rec.level.name) + ": " + dart.str(rec.time) + ": " + dart.str(rec.message));
      }, T.LogRecordLToNull()));
      let parsedList = T.ListL().as(convert.jsonDecode(logLevelElement[$value]));
      pappes_web_utility_base.log.level = new level.Level.new(core.String.as(parsedList[$_get](0)), core.int.as(parsedList[$_get](1)));
    }
  };
  dart.defineLazy(logging_functions, {
    /*logging_functions.elementId*/get elementId() {
      return "bookmaklet_log_level";
    }
  }, true);
  dart.trackLibraries("web/logging_functions", {
    "org-dartlang-app:///web/logging_functions.dart": logging_functions
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["logging_functions.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;uDAW0B;;AACL,qDAAkB,mBAAc,AAAa;AAChE,QAAI,AAAe,eAAA;AAED,MADhB,uDAAoB;AAChB;;;AACiC,MAArC,AAAS,AAAK,4BAAO,eAAe;;AAGlC,kBAAc;AACU,IAA5B,AAAO,OAAA,QAAC,QAAU,AAAM,KAAD;AACO,IAA9B,AAAO,OAAA,QAAC,SAAW,AAAM,KAAD;AACiB,IAAzC,AAAgB,eAAD,WAAO,mBAAW,OAAO;EAC1C;;AAGqB,qDAAkB,mBAAc,AAAa;AAChE,QAAI,eAAe;AACwB,MAAjC,oCAA6B;AAKnC,MAJF,AAAI,AAAS,4CAAO,QAAmB;AACkB,QAAvD,WAAsD,SAA7C,AAAI,AAAM,GAAP,eAAY,gBAAI,AAAI,GAAD,SAAM,gBAAI,AAAI,GAAD;AAC0C,QAA/E,6DAA8E,SAA7C,AAAI,AAAM,GAAP,eAAY,gBAAI,AAAI,GAAD,SAAM,gBAAI,AAAI,GAAD;;AAIxE,oCAAa,mBAAW,AAAgB,eAAD;AACe,MAA3D,AAAI,oCAAY,mCAAc,AAAU,UAAA,QAAC,iBAAI,AAAU,UAAA,QAAC;;EAE5D;;MA7Ba,2BAAS","file":"logging_functions.unsound.ddc.js"}');
  // Exports:
  return {
    web__logging_functions: logging_functions
  };
}));

//# sourceMappingURL=logging_functions.unsound.ddc.js.map
