var db = require("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = function (app) {
  /* GET Work. */
  app.get('/', function (req, res, next) {
    db.work.findAll({order: 
      ['name', 'ASC'],
  }).then(function (work) {
      // console.log(work)
      res.render('work', { allwork: work })
    })
  });

  /* GET Work js */
  app.get('/work/:search', function (req, res, next) {
    var searchQuery = req.params.search;
    db.work.findAll({
      where: {
        [Op.or]: [
          { skill1: searchQuery },
          { skill2: searchQuery },
          { skill3: searchQuery },
          { skill4: searchQuery },
          { skill5: searchQuery }
        ]
      }
    }).then(function (results) {
      res.render('work', { allwork: results })
    });
  });


  /* GET About */
  app.get('/about-isabel', function (req, res, next) {
    res.render('about')
  });

  /* GET Resume */
  app.get('/resume', function (req, res, next) {
    res.render('resume')
  });

  /* GET SUBMIT WORK */
  app.get('/submit', function (req, res, next) {
    res.render('submit')
  });


}
