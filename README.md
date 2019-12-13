This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Seer Sign Up Client

Application was built using React, Redux, and React Router

Applicaiton is a simple sign up application consisting of 3 pages: 
1) signup
2) verification
3) confirmation


API can be found [here](https://github.com/bsl333/seer-sign-up-api)

**NOTE:** client depends on backend running, so be sure to install the backend and start the server. 

Uses backend code to store users in MongoDB, and to dynamically check if username or email exists during sign up. One thing to note is that the check occurs at two places. Once when the users clicks off of username or email (onBlur fn triggers), or when the user tries to submit the form. Since I am using a free version of MongoDB and my internet connection is rather slow, I decided to put on onBlur and a final check to submit. In a production setting, the check would take place either both onChange and onSubmit, or just on onSubmit. 

Please contact me at b.lowe333@gmail.com if you have any questions. 

### Getting Started

run `npm i` to intall dependencies

### Running The Application

run `npm start` to run the application. 
