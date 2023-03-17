# Automated Testing for telnyx.com using Cypress and JavaScript

This project is an automated testing suite for the website [Redmine](https://telnyx.com/), written in Cypress using JavaScript. The tests cover various features of the website such as login functionality, registration, contact us form, and more.

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
- Run ```npm run headless``` to start the test runner in headless mode and run all tests in the Chrome browser without opening the GUI.

### Test Cases

The following test cases are included in this project:
1. ID#001 Verify that the Telnyx logo has right location and redirects to the homepage.
2. ID#002 Verify that the user receives an error message when logging in with an invalid email and password combination.
3. ID#003 Test the sign up functionality with valid credentials.
4. ID#004 Test the sign up functionality with invalid credentials.
5. ID#005 Test the header dropdown menu and display of menu item buttons.
6. ID#006 Test the functionality of social media buttons
7. ID#007 Test the solutions button click and pagination next button click functionality
8. ID#008 Test the dropdown reason choose functionality
9. ID#009 Test the tab list buttons switch between panels correctly
10. ID#010 Test the FAQ buttons expand and show the corresponding information correctly 


### Notes

- The test cases can be found in the `testsCases` directory.
- The page object models can be found in the `POM` directory.
