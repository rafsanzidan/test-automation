package com.chroma.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.chroma.web.WebDriverUtils;

public class StudentAdmissionPage {

    /** STUDENT ADMISSION TEXT */
    @FindBy(xpath = "//h4[normalize-space()='Student Admission']")
    public WebElement studentAdmissionText;

    /** STUDENT ADMISSION NUMBER TEXTBOX */
    @FindBy(xpath = "//input[@name='admission_no']")
    public WebElement studentAdmissionNumberTextBox;

    /** CLASS DROPDOWN */
    @FindBy(xpath = "//select[@name='class_id']")
    public WebElement classDropDown;

    /** SECTION DROPDOWN */
    @FindBy(xpath = "//select[@name='section_id']")
    public WebElement sectionDropDown;

    /** FIRST NAME */
    @FindBy(xpath = "//input[@id='firstname']")
    public WebElement firstNameTextBox;

    /** LAST NAME */
    @FindBy(xpath = "//input[@id='lastname']")
    public WebElement lastNameTextBox;

    /** GENDER */
    @FindBy(xpath = "//select[@name='gender']")
    public WebElement genderDropDown;

    /** DOB */
    @FindBy(xpath = "//input[@id='dob']")
    public WebElement selectDOB;

    /** EMAIL ADDRESS */
    @FindBy(xpath = "//input[@id='email']")
    public WebElement emailTextBox;

    /** MOBILE NUMBER */
    @FindBy(xpath = "//input[@id='custom_fields[students][1]']")
    public WebElement mobileNumberTextBox;

    /** FATHER NAME */
    @FindBy(xpath = "//input[@id='father_name']")
    public WebElement fatherNameTextBox;
    public String fatherName;
    public String guardianRelationship = "Father";

    /** FATHER NUMBER */
    @FindBy(xpath = "//input[@id='father_phone']")
    public WebElement fatherNumberTextBox;
    public String fatherNumber;

    /** FATHER OCCUPATION */
    @FindBy(xpath = "//input[@id='father_occupation']")
    public WebElement fatherOccupationTextBox;
    public String fatherOccupation;

    /** MOTHER NAME */
    @FindBy(xpath = "//input[@id='mother_name']")
    public WebElement motherNameTextBox;

    /** MOTHER NUMBER */
    @FindBy(xpath = "//input[@id='mother_phone']")
    public WebElement motherNumberTextBox;

    /** MOTHER OCCUPATION */
    @FindBy(xpath = "//input[@id='mother_occupation']")
    public WebElement motherOccupationTextBox;

    /** RADIO BUTTON */
    @FindBy(xpath = "//input[@value='father']")
    public WebElement fatherRadioButton;

    /**  */
    @FindBy(xpath = "//input[@value='father']")
    public String guardianName;

    /**   */
    @FindBy(xpath = "//input[@id='guardian_relation']")
    public String guardianRelation;

    /**   */
    @FindBy(xpath = "//input[@id='guardian_phone']")
    public String guardianPhone;

    /**   */
    @FindBy(xpath = "//input[@id='guardian_occupation']")
    public String guardianOccupation;

    @FindBy(xpath = "//button[@type='submit'][normalize-space()='Save']")
    public WebElement saveButton;



    /********/
    /** CONSTRUCTOR */
    public StudentAdmissionPage() {
        PageFactory.initElements(WebDriverUtils.driver, this);
    }

}
