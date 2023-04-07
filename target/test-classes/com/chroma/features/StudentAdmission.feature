Feature: This feature file contains Student Admission Test Scenarios

  Scenario: Student Admission
    Given a CTSMS user is on the home page "https://mexil.it/chroma_tech_academy/test/site/login"
    When the user logs in with valid credentials, username "general@teacher.com" and password "123456"
    And navigates to Student Information module
    And navigates to Student Admission submodule
    And enters Student Admission number "12121232122"
    And selects class "SDET" and section "Java 11 for Cool People"
    And enters first name "Tah*MID*" and last name "Zaduuhhhh"
    And selects "Male" under gender dropdown
    And selects DOB "01/11/1999"
    And enters email address "pikapika@gmail.com"
    And enters mobile number "718111000"
    And enters father's name "Pa"
    And enters father's number "222222222"
    And enters father's occupation "Lawyer"
    And enters mother's name "Ma"
    And enters mother's number "333333333"
    And enters mother's occupation "Architect"
    And if father radio button is selected for guardian
    Then clicks Save button
    Then student record is succesfully deleted with class "SDET" and section "Java 11 for Cool People" and admission number "1220399393"

  @StudentAdmission
  Scenario Outline: Student Admission
    Given a CTSMS user is on the home page "<URL>"
    When the user logs in with valid credentials, username "<USERNAME>" and password "<PASSWORD>"
    And navigates to Student Information module
    And navigates to Student Admission submodule
    And enters Student Admission number "<STUDENT ADMISSION NUMBER>"
    And selects class "<CLASS>" and section "<SECTION>"
    And enters first name "<FIRST NAME>" and last name "<LAST NAME>"
    And selects "<GENDER>" under gender dropdown
    And selects DOB "<DOB>"
    And enters email address "<EMAIL ADDRESS>"
    And enters mobile number "<MOBILE NUMBER>"
    And enters father's name "<FATHER NAME>"
    And enters father's number "<FATHER PHONE NUMBER>"
    And enters father's occupation "<FATHER OCCUPATION>"
    And enters mother's name "<MOTHER NUMBER>"
    And enters mother's number "<MOTHER PHONE NUMBER>"
    And enters mother's occupation "<MOTHER OCCUPATION>"
    And if father radio button is selected for guardian
    Then clicks Save button
    Then student record is succesfully deleted with class "<CLASS>" and section "<SECTION>" and admission number "<STUDENT ADMISSION NUMBER>"

    Examples: 
      | URL                                | USERNAME            |  | PASSWORD |  | STUDENT ADMISSION NUMBER |  | CLASS          |  | SECTION                 |  | FIRST NAME |  | LAST NAME |  | GENDER |  | DOB        |  | EMAIL ADDRESS   |  | MOBILE NUMBER |  | FATHER NAME |  | FATHER PHONE NUMBER |  | FATHER OCCUPATION | MOTHER NAME | MOTHER PHONE NUMBER | MOTHER OCCUPATION |
      | https://chroma.mexil.it/site/login | general@teacher.com |  |   123456 |  |                    12901 |  | Cyber Security |  | Networking Fundamentals |  | Rafsan     |  | Chowdhury |  | Male   |  | 01/13/1999 |  | test1@gmail.com |  |     718727277 |  | Pops        |  |           221112222 |  | Lawyer            | MA          |           133333333 | Architect         |
