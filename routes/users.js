var express = require('express');
var router = express.Router();
var list = [{
    'id': 1,
    'name': 'Simon',
    'age': 24
}, {
    'id': 2,
    'name': 'Andrew',
    'age': 26
}];

router.get('/', function (req, res, next) {
    res.send(list);
});

router.get('/get', function (req, res, next) {
    if (req.param("id") === undefined) {
        res.send(list);
    } else {
        var parameter = Number(req.param("id").toString());
        for (var i = 0; i < list.length; i++) {
            if (list[i].id === parameter) {
                res.send(list[i]);
            }
        }
    }
});

router.get('/save', function (req, res, next) {
    var json = req.body;
    console.log(json);
    list.push(json);
    res.sendStatus(200);
});

module.exports = router;
