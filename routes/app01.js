
var express = require('express');
var router = express.Router();

/* サンプルAPI (route)
 * /api01 にGETメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.get('/', function(req, res, next) {
  var param = {"key1":"value1" , "key2":"value2"};
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.send(param);
});

/* サンプルAPI (hello)
 * /api01/hello にGETメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.get('/hello', function(req, res, next) {
  var param = {"result":"Hello World!"};
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.send(param);
});

/* サンプルAPI (文字列取り込み)
 * /app01/moji/(任意の文字列) にGETメソッドのリクエストを投げると、
 * JSON形式で(任意の文字列)を返す。
 */
//router.get('/moji/:place', function (req, res, next) {
//  var param = {"result":"Hello "+ req.params.place + " !"};
//  res.header('Content-Type', 'application/json; charset=utf-8');
//  res.send(param);
//});

/* サンプルAPI (クエリストリング)
 * /app01/moji/hoge?que1=fuga にGETメソッドのリクエストを投げると、
 * JSON形式で {"result": "Hello hoge !", "que1": "fuga"} を返す。
 */
router.get('/moji/:place', function (req, res, next) {
  var param = {"result":"Hello "+ req.params.place + " !","que1":req.query.que1};
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.send(param);
});

/* サンプルAPI (POST)
 * /app01 にPOSTメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.post('/', function(req, res, next) {
  var param = {"result":"POSTメソッドのリクエストを受け付けました","body":req.body.card};
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});

module.exports = router;

