package com.chroma.stepDefinitions;

import org.apache.hc.client5.http.cookie.CommonCookieAttributeHandler;

import com.chroma.pages.BulkDeletePage;
import com.chroma.pages.DashboardPage;
import com.chroma.web.CommonUtils;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BulkDeleteStepDef {

    DashboardPage dashboardPage = new DashboardPage();
    BulkDeletePage bulkDeletePage = new BulkDeletePage();

    @Then("student record is succesfully deleted with class {string} and section {string} and admission number {string}")
    public void student_record_is_succesfully_deleted_with_class_and_section_and_admission_number(String className,
            String sectionName, String admissionNumber) {
        dashboardPage.bulkDeleteSubmodule.click();
        CommonUtils.waitForVisibility(bulkDeletePage.classDropDown);
        CommonUtils.selectDropDownValue(className, bulkDeletePage.classDropDown);
        CommonUtils.selectDropDownValue(sectionName, bulkDeletePage.sectionDropDown);
        bulkDeletePage.searchButton.click();
        CommonUtils.sleep(5000);
        bulkDeletePage.studentAdmissionCheckboxDynamicLocator(admissionNumber).click();
        bulkDeletePage.deleteButton.click();
        CommonUtils.acceptAlert();
        CommonUtils.sleep(5000);
    }

}
