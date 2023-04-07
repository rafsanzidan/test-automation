$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/com/chroma/features/StudentAdmission.feature");
formatter.feature({
  "name": "This feature file contains Student Admission Test Scenarios",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Student Admission",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@StudentAdmission"
    }
  ]
});
formatter.step({
  "name": "a CTSMS user is on the home page \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "the user logs in with valid credentials, username \"\u003cUSERNAME\u003e\" and password \"\u003cPASSWORD\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "navigates to Student Information module",
  "keyword": "And "
});
formatter.step({
  "name": "navigates to Student Admission submodule",
  "keyword": "And "
});
formatter.step({
  "name": "enters Student Admission number \"\u003cSTUDENT ADMISSION NUMBER\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "selects class \"\u003cCLASS\u003e\" and section \"\u003cSECTION\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enters first name \"\u003cFIRST NAME\u003e\" and last name \"\u003cLAST NAME\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "selects \"\u003cGENDER\u003e\" under gender dropdown",
  "keyword": "And "
});
formatter.step({
  "name": "selects DOB \"\u003cDOB\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enters email address \"\u003cEMAIL ADDRESS\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enters mobile number \"\u003cMOBILE NUMBER\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enters father\u0027s name \"\u003cFATHER NAME\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enters father\u0027s number \"\u003cFATHER PHONE NUMBER\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enters father\u0027s occupation \"\u003cFATHER OCCUPATION\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enters mother\u0027s name \"\u003cMOTHER NUMBER\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enters mother\u0027s number \"\u003cMOTHER PHONE NUMBER\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enters mother\u0027s occupation \"\u003cMOTHER OCCUPATION\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "if father radio button is selected for guardian",
  "keyword": "And "
});
formatter.step({
  "name": "clicks Save button",
  "keyword": "Then "
});
formatter.step({
  "name": "student record is succesfully deleted with class \"\u003cCLASS\u003e\" and section \"\u003cSECTION\u003e\" and admission number \"\u003cSTUDENT ADMISSION NUMBER\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "URL",
        "USERNAME",
        "",
        "PASSWORD",
        "",
        "STUDENT ADMISSION NUMBER",
        "",
        "CLASS",
        "",
        "SECTION",
        "",
        "FIRST NAME",
        "",
        "LAST NAME",
        "",
        "GENDER",
        "",
        "DOB",
        "",
        "EMAIL ADDRESS",
        "",
        "MOBILE NUMBER",
        "",
        "FATHER NAME",
        "",
        "FATHER PHONE NUMBER",
        "",
        "FATHER OCCUPATION",
        "MOTHER NAME",
        "MOTHER PHONE NUMBER",
        "MOTHER OCCUPATION"
      ]
    },
    {
      "cells": [
        "https://chroma.mexil.it/site/login",
        "general@teacher.com",
        "",
        "123456",
        "",
        "12901",
        "",
        "Cyber Security",
        "",
        "Networking Fundamentals",
        "",
        "Rafsan",
        "",
        "Chowdhury",
        "",
        "Male",
        "",
        "01/13/1999",
        "",
        "test1@gmail.com",
        "",
        "718727277",
        "",
        "Pops",
        "",
        "221112222",
        "",
        "Lawyer",
        "MA",
        "133333333",
        "Architect"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Student Admission",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@StudentAdmission"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a CTSMS user is on the home page \"https://chroma.mexil.it/site/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.a_CTSMS_user_is_on_the_home_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logs in with valid credentials, username \"general@teacher.com\" and password \"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.the_user_logs_in_with_valid_credentials_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to Student Information module",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.navigates_to_Student_Information_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to Student Admission submodule",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.navigates_to_Student_Admission_submodule()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters Student Admission number \"12901\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_Student_Admission_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selects class \"Cyber Security\" and section \"Networking Fundamentals\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.selects_class_and_section(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters first name \"Rafsan\" and last name \"Chowdhury\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_first_name_and_last_name(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selects \"Male\" under gender dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.selects_under_gender_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selects DOB \"01/13/1999\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.selects_DOB(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters email address \"test1@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_email_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters mobile number \"718727277\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_mobile_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters father\u0027s name \"Pops\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_father_s_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters father\u0027s number \"221112222\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_father_s_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters father\u0027s occupation \"Lawyer\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_father_s_occupation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters mother\u0027s name \"\u003cMOTHER NUMBER\u003e\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_mother_s_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters mother\u0027s number \"133333333\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_mother_s_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters mother\u0027s occupation \"Architect\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.enters_mother_s_occupation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "if father radio button is selected for guardian",
  "keyword": "And "
});
formatter.match({
  "location": "StudentAdmissionStepDef.if_father_radio_button_is_selected_for_guardian()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks Save button",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentAdmissionStepDef.clicks_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "student record is succesfully deleted with class \"Cyber Security\" and section \"Networking Fundamentals\" and admission number \"12901\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BulkDeleteStepDef.student_record_is_succesfully_deleted_with_class_and_section_and_admission_number(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});