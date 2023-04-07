package com.chroma.stepDefinitions;

import org.openqa.selenium.devtools.idealized.Javascript;

import com.chroma.pages.DashboardPage;
import com.chroma.pages.StudentAdmissionPage;
import com.chroma.web.CommonUtils;
import com.chroma.web.JavascriptUtils;
import com.chroma.web.WebDriverUtils;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StudentAdmissionStepDef {

    DashboardPage dashboardPage = new DashboardPage();
    StudentAdmissionPage studentAdmissionPage = new StudentAdmissionPage();

    @When("navigates to Student Information module")
    public void navigates_to_Student_Information_module() {
        CommonUtils.waitForVisibility(dashboardPage.studentInformationModule);
        dashboardPage.studentInformationModule.click();
    }

    @When("navigates to Student Admission submodule")
    public void navigates_to_Student_Admission_submodule() {
        CommonUtils.waitForVisibility(dashboardPage.studentAdmissionSubmodule);
        dashboardPage.studentAdmissionSubmodule.click();
        boolean isStudentAdmissionTextDisplayed = studentAdmissionPage.studentAdmissionText.isDisplayed();
        CommonUtils.assertTrue(isStudentAdmissionTextDisplayed);
    }

    @When("enters Student Admission number {string}")
    public void enters_Student_Admission_number(String admissionNumber) {
        studentAdmissionPage.studentAdmissionNumberTextBox.sendKeys(admissionNumber);
    }

    @When("selects class {string} and section {string}")
    public void selects_class_and_section(String className, String sectionName) {
        CommonUtils.selectDropDownValue(className, studentAdmissionPage.classDropDown);
        CommonUtils.selectDropDownValue(sectionName, studentAdmissionPage.sectionDropDown);
    }

    @When("enters first name {string} and last name {string}")
    public void enters_first_name_and_last_name(String firstName, String lastName) {
        studentAdmissionPage.firstNameTextBox.sendKeys(firstName);
        studentAdmissionPage.lastNameTextBox.sendKeys(lastName);
    }

    @When("selects {string} under gender dropdown")
    public void selects_under_gender_dropdown(String gender) {
        CommonUtils.selectDropDownValue(gender, studentAdmissionPage.genderDropDown);
    }

    @When("selects DOB {string}")
    public void selects_DOB(String DOB) {
        JavascriptUtils.selectDateByJS(studentAdmissionPage.selectDOB, DOB);
    }

    @When("enters email address {string}")
    public void enters_email_address(String email) {
        studentAdmissionPage.emailTextBox.sendKeys(email);
    }

    @When("enters mobile number {string}")
    public void enters_mobile_number(String mobileNumber) {
        studentAdmissionPage.mobileNumberTextBox.sendKeys(mobileNumber);
    }

    @When("enters father's name {string}")
    public void enters_father_s_name(String fatherName) {
        studentAdmissionPage.fatherNameTextBox.sendKeys(fatherName);
    }

    @When("enters father's number {string}")
    public void enters_father_s_number(String fatherNumber) {
        studentAdmissionPage.fatherNumberTextBox.sendKeys(fatherNumber);
    }

    @When("enters father's occupation {string}")
    public void enters_father_s_occupation(String fatherOccupation) {
        studentAdmissionPage.fatherOccupationTextBox.sendKeys(fatherOccupation);
    }

    @When("enters mother's name {string}")
    public void enters_mother_s_name(String motherName) {
        studentAdmissionPage.motherNameTextBox.sendKeys(motherName);
    }

    @When("enters mother's number {string}")
    public void enters_mother_s_number(String motherNumber) {
        studentAdmissionPage.motherNumberTextBox.sendKeys(motherNumber);
    }

    @When("enters mother's occupation {string}")
    public void enters_mother_s_occupation(String motherOccupation) {
        studentAdmissionPage.motherOccupationTextBox.sendKeys(motherOccupation);
    }

    @When("if father radio button is selected for guardian")
    public void if_father_radio_button_is_selected_for_guardian() {
        studentAdmissionPage.fatherRadioButton.click();
    }

    @Then("clicks Save button")
    public void clicks_Save_button() {
        studentAdmissionPage.saveButton.click();
        CommonUtils.sleep(4000);

    }

}
