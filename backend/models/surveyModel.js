const mongoose = require("mongoose");

const surveySchema = mongoose.Schema({
  "favorite-whisky": String,
  "hover-feedback": Number,
  "interest-slider": Number,
  "scotch-brands": Array,
});

module.exports = mongoose.model("SurveyModel", surveySchema, "visitor_survey");
