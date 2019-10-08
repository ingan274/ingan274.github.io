var db = require("../models");

module.exports = function (app) {
    /* POST Work. */
    app.post('/api/work', function (req, res, next) {
        db.work.create({
            worktitle: req.body.worktitle,
            codeurl: req.body.codeurl,
            liveurl: req.body.liveurl,
            skill1: req.body.skill1,
            skill2: req.body.skill2,
            skill3: req.body.skill3,
            skill4: req.body.skill4,
            skill5: req.body.skill5,
            description: req.body.description,
            imgurl: req.body.imgurl
        }).then(function(newWork) {
            console.log("Work Added")
            res.json(newWork)
        })
    })
}