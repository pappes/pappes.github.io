import 'dart:html';
import 'package:pappes_web_utility/pappes_web_utility.dart';
import 'package:logging/logging.dart' as logging;

void main() {

  querySelector('#output').text = 'Dart is running1.';

  logging.hierarchicalLoggingEnabled = true;
  log.level = logging.Level.WARNING;
  log.level = logging.Level.FINEST;
  log.onRecord.listen((logging.LogRecord rec) {
    print('${rec.level.name}: ${rec.time}: ${rec.message}');
    MyHtml.logMessageIntoHTMLBodyComment('${rec.level.name}: ${rec.time}: ${rec.message}');
  });


  querySelector('#output').text = 'Dart is running1.';

  MyHtml.iterateHTMLDOM(
      document.body, 
      (element) => MyHtml.alterAttribute(
          element, 
          'href', 
          (url) => MyHtml.setUriParameters(url)));


  querySelector('#output').text = 'Dart is running2.';
}