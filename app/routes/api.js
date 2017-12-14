var member = require('../models/member'); // Import User Model
var ans = require('../models/answer'); // Import User Model


module.exports = function (router) {

    router.post('/checkregis', function(req,res) {
        member.findOne({regnum:req.body.regnum}).select('regnum mess').exec(function (err,mem) {
            if(!mem){
                res.json({success: false, messages:"not rec"});
            }
            else{
                res.json({success: true, messages:"rec"}); // Send success message back to controller/request
            }
        });
    });
    router.post('/memberc',function(req,res) {
        var mem = new member();
        mem.regnum=req.body.regnum;
        mem.mess= req.body.mess;
        if(req.body.regnum === null|| req.body.regnum === '' || req.body.mess===null || req.body.mess===''){
            res.json({sucess:false, message:"NOT DONE"});
        }
        else{
            mem.save(function(err){
               if(err.errors!=null){
                   res.json({success:false, message:err});
               }
               else{
                   res.json({success:true, message:"done"});
               }
            });
        }
    });
  router.post('/answ',function(req,res) {
        var ans = new member();
        ans.name=req.body.name;
        ans.answ= req.body.answ;
        if(req.body.name === null|| req.body.name=== '' || req.body.answ===null || req.body.answ===''){
            res.json({sucess:false});
        }
        else{
            ans.save(function(err){
               if(err.errors!=null){
                   res.json({success:false, message:err});
               }
               else{
                   res.json({success:true, message:"done"});
               }
            });
        }
    });

    return router; // Return the router object to the server
};