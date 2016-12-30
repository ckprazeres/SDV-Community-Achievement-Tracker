
  var express = require('express');
  var Data = require('../models')["Data"];
  var router = express.Router();

  router.get("/new", function(req,res){
     res.render("new");      
  });

  router.post("/", function(req,res) {


    Data.create({
        age:req.body.age,
        gender: req.body.gender,
        state: req.body.state,
        self_employed: req.body.self_employed,
        family_history: req.body.family_history,
        treatmen: req.body.treatment,
        work_interfere: req.body.work_interfere,
        no_employees: req.body.no_employees,
        remote_work: req.body.remote_work,
        tech_company: req.body.tech_company,
        benefits: req.body.benefits,
        care_options: req.body.care_options,
        wellness_program: req.body.wellness_program,
        seek_help: req.body.seek_help,
        anonymity: req.body.anonymity,
        leave: req.body.leave,
        mental_health_consequence: req.body.mental_health_consequence,
        phys_health_consequence: req.body.phys_health_consequence,
        coworkers: req.body.coworkers,
        supervisor: req.body.supervisor,
        mental_health_interview: req.body.mental_health_interview,
        phys_health_interview: req.body.phys_health_interview,
        mental_vs_physical: req.body.mental_vs_physical,
        obs_consequence: req.body.bs_consequence
    })


    var age = req.body.age;
    var gender = req.body.gender;
    var state = req.body.state;
    var self_employed = req.body.self_employed;
    var family_history = req.body.family_history;
    var treatment = req.body.treatment;
    var work_interfere = req.body.work_interfere;
    var no_employees = req.body.no_employees;
    var remote_work = req.body.remote_work;
    var tech_company = req.body.tech_company;
    var benefits = req.body.benefits;
    var care_options = req.body.care_options;
    var wellness_program = req.body.wellness_program;
    var seek_help = req.body.seek_help;
    var anonymity = req.body.anonymity;
    var leave = req.body.leave;
    var mental_health_consequence = req.body.mental_health_consequence;
    var phys_health_consequence = req.body.phys_health_consequence;
    var coworkers = req.body.coworkers;
    var supervisor = req.body.supervisor;
    var mental_health_interview = req.body.mental_health_interview;
    var phys_health_interview = req.body.phys_health_interview ;
    var mental_vs_physical = req.body.mental_vs_physical ;
    var obs_consequence = req.body.bs_consequence;


    console.log("age: " + age);
    console.log("gender: " + gender);
    console.log("state: " + state);
    console.log("self_employed: " + self_employed);
    console.log("family_history: " + family_history)
    console.log("treatment: " + treatment)
    console.log("work_interfere: " + work_interfere)
    console.log("no_employees: " + no_employees)
    console.log("remote_work: " + remote_work)
    console.log("tech_company: " + tech_company)
    console.log("benefits: " + benefits)
    console.log("care_options: " + care_options)
    console.log("wellness_program: " + wellness_program)
    console.log("seek_help: " + seek_help)
    console.log("anonymity: " + anonymity)
    console.log("leave: " + leave)
    console.log("mental_health_consequence: " + mental_health_consequence)
    console.log("phys_health_consequence: " + phys_health_consequence)
    console.log("coworkers: " + coworkers)
    console.log("mental_health_interview: " + mental_health_interview)
    console.log("phys_health_interview: " + phys_health_interview)
    console.log("mental_vs_physical: " + mental_vs_physical)
    console.log("obs_consequence: " + obs_consequence)
 
  });



    router.get("*", function(req,res){
        res.send("Oops there was an error!")
    });


  module.exports = router;