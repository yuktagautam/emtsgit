# Entry-management-Software
 This software is for entry managing purpose.In this ever digitalising world there's also a need for removing large and bulky entry log books and this software can definitely help in this.
 
 ## Functionality offered
 * Visitor can check in by entering his information and his host's information.An alert message will confirm his check in.Also the host will receive a SMS and an Email regarding the visitor's details.
 * Visitor can check out by clicking leave button.He will have to enter his phone number while checking out to confirm his checkout and after entring phone number he will receive an otp for confirming his entity and after entering correct otp he will be successfully checked out.Also he will receive an Email stating hs visit details
 * There will be a dashboard button where a person can see all the previous entries and their details.
 
 ## Edge cases handled
 * A visitor cannot check in again before cheking out.
 * A visitor cannot checkout without checking in.
 * Otp verification ensures no mishandling with visitor and host data.
  
 ## Technology stack
 ### Front end
 * HTML/CSS
 * Bootstrap
 
 ### Backend
 * Nodejs
 * Express
 
 ### Databse
 * MongoDB
 * MongoDB Atlas
 
 ### For sending mail 
 * Nexmo api (Only test numbers can receive messages as i am using the free service provided by Nexmo)
 
 ### For sending mail 
 * Nodemailer module
 
 ## Working
 1) A new Visitor checks in.
 
 * Message as received by host when a new visitor checks in
 
 * Email as received by host when a new visitor checks in
 
 2) Same visitor cannot check in without checkout.
 
 3) If a visitor who hasn't checked in tries to check out.
 
 4) On finding a valid visitor doing check out.
 
 * OTP message sent to Visitor 
 
 5) If the user doen't enter correct OTP.
 
 6) After User has successfully checked out he receives mail as shown below
 
 7)Dashboard view
 
 
 [Demo](https://entrymanagementwebsite.herokuapp.com)
 
 ## Future Enhancements
 
 
 
 
 
