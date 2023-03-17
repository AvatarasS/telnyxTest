# Automated Testing for telnyx.com using Cypress and JavaScript

This project is an automated testing suite for the website [Telnyx](https://telnyx.com/), written in Cypress using JavaScript. The tests cover various features of the website such as login functionality, registration, contact us form, and more.

### Project Setup

To setup the automated tests in this project, follow these steps:
1. Clone this repository to your local machine.
    - Open the terminal or command prompt on your machine.
    - Navigate to the directory where you want to download the repository.
    - Run the following command: 
    ```git clone https://github.com/AvatarasS/telnyxTest.git```.
    - Once complete, the repository will be downloaded to the directory you specified.
2. Navigate to the project directory:
    ```cd repository-name```
3. Install all packages and dependencies using npm:
    ```npm install```

### Running Tests

- Run ```npm run gui``` to open Cypress GUI.
- Run ```npm run headless chrome``` to start the test runner in headless mode and run all tests in the Chrome browser without opening the GUI.

### Test Cases

The following test cases are included in this project:
1. ID#001 Test the Telnyx logo redirects to the Main page from Solution page
2. ID#002 Test the user receives an error message on LogIn page when logging in with an invalid email and password combination.
3. ID#003 Test the Signup form functionality on Signup page to be filled with credentials and checkbox to be checked.
4. ID#004 Test the user receives an error message on Signup page when registry with empty required fields.
5. ID#005 Test the displaying of buttons in Products dropdown menu in header.
6. ID#006 Test the correct "href" attribute of social media buttons on Main page.
7. ID#007 Test the Solutions button click and the pagination next button click functionality on Solutions page.
8. ID#008 Test the dropdown reason choose functionality to select "Sales-Inquiry" on Contactus page.
9. ID#009 Test the "Sender Types" tab lists buttons on Messaging page switch between tabs correctly.
10. ID#010 Test the FAQ buttons on Messaging page expand and show the corresponding information correctly.


### Notes

- The test cases can be found in the `testsCases` directory.
- The page object models can be found in the `POM` directory.
