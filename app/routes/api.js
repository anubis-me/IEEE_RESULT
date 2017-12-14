var member = require('../models/member'); // Import User Model
var Ans = require('../models/answer'); // Import User Model
var Log = require('../models/logs');


module.exports = function (router) {

    router.post('/checkregis', function (req, res) {
        var regno = req.body.regnum.toString().toUpperCase();

        member.findOne({regnum: regno}).select('regnum mess').exec(function (err, mem) {
            if (!mem) {
                res.json({success: false, messages: "not rec"});
                var log = new Log({regnum: regno, selected: false});
            }
            else {
                res.json({success: true, messages: "rec", regnum: mem.regnum, mess: mem.mess}); // Send success message back to controller/request
                var log = new Log({regnum: regno, selected: true});
            }
            log.save();
        });
    });

    router.post('/memberc', function (req, res) {
        var mem = new member();
        mem.regnum = req.body.regnum;
        if (req.body.regnum === null || req.body.regnum === '') {
            res.json({success: false, message: "NOT DONE"});
        }
        else {
            mem.save(function (err) {
                if (err) {
                    res.json({success: false, message: err});
                }
                else {
                    res.json({success: true, message: "done"});
                }
            });
        }
    });

    router.post('/answ', function (req, res) {
        var ans = new Ans();
        ans.regnum = req.body.regnum;
        ans.answ = req.body.answ;
        if (req.body.regnum === null || req.body.regnum === '' || req.body.answ === null || req.body.answ === '') {
            res.json({success: false});
        }
        else {
            ans.save(function (err) {
                if (err) {
                    res.json({success: false, message: err});
                }
                else {
                    res.json({success: true, message: "done"});
                }
            });
        }
    });

    return router; // Return the router object to the server
};