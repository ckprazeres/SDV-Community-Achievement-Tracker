'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      age: {
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      self_employed: {
        type: Sequelize.STRING
      },
      family_history: {
        type: Sequelize.STRING
      },
      treatment: {
        type: Sequelize.STRING
      },
      work_interfere: {
        type: Sequelize.STRING
      },
      no_employees: {
        type: Sequelize.STRING
      },
      remote_work: {
        type: Sequelize.STRING
      },
      tech_company: {
        type: Sequelize.STRING
      },
      benefits: {
        type: Sequelize.STRING
      },
      care_options: {
        type: Sequelize.STRING
      },
      wellness_program: {
        type: Sequelize.STRING
      },
      seek_help: {
        type: Sequelize.STRING
      },
      anonymity: {
        type: Sequelize.STRING
      },
      leave: {
        type: Sequelize.STRING
      },
      mental_health_consequence: {
        type: Sequelize.STRING
      },
      phys_health_consequence: {
        type: Sequelize.STRING
      },
      coworkers: {
        type: Sequelize.STRING
      },
      supervisor: {
        type: Sequelize.STRING
      },
      mental_health_interview: {
        type: Sequelize.STRING
      },
      phys_health_interview: {
        type: Sequelize.STRING
      },
      mental_vs_physical: {
        type: Sequelize.STRING
      },
      obs_consequence: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Data');
  }
};