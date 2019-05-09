![TruckTracker logo](/public/TruckTrackerLogo.png "TruckTracker Image")
=================================================================

Welcome to TruckTracker! :truck: The popular Food Truck locator application. Users will be able to view nearby foodtrucks with a simple click of a button. 

Food Trucks can also create an account and submit a business application. Once the application is approved by an administrator, the Food Truck can log-in to their account and update their current location with a press of a button. In doing so, users will be able to view the truck's real-time location on a google map. 

## Decoupled Application

This is a decoupled application. We have an SQL server that only serves to create, update, and render JSON Data deployed on Heroku found [here](https://api-food-truck.herokuapp.com/). 

Our react app is hosted on an entirely different server found [here](https://deployedwtt.herokuapp.com). We built a decoupled application to make it easier for us in the future to rebuild our front end using react native or another method.


## 🔑 How to Use the App:

The application is intuitive and requires little to no prior knowledge before being ready to use.

Follow the steps below if you are a Food Truck Business:

1. Sign Up using your name, email address and password. 

2. Sign In, trucker data is stored in firebase database using high order context a secure sign-up/sign-in strategy.
   
3. Navigate to the application dashboard and submit a business application. 
   
4. Once the application has been approved by an administrator, navigate to your dashboard and click on the _Enable Geolocation_ button to update the Food Truck's location. 
   
Follow the stups below if you are an Individual looking for Food Trucks near you.

1. On the landing page, click on the _Yes! Take me There_ button to be directed to the user dashboard page where Food Trucks near you are listed on a google map. 

2. Note that in order to view the Food Trucks you do not need to make an account. 

## 📁 Deployed Site

This app has been deployed to Heroku, and the link can be found [here](https://deployedwtt.herokuapp.com/ "live link").

## 🔧 Technologies Used  

+ **HTML5** and **CSS3** for page content and styling.

+ **React** for templating and generating HTML content, served up through our routes from our server.

+ **Bootstrap** as a CSS framework for applying styles and using components.

+ **Google Fonts** for unique font application.

+ **Font Awesome** for Icons.

+ **JavaScript** for the app's logic.
  
+ **Node.JS** for the app's server environment.

+ **NPM** for installation of the packages required by the app:
  + **axios**
  + **react-chart.js-2**
  + **express**
  + **firebase** 
  + **google-map-react**
  + **hover.css**
  + **mysql2**
  + **react-router-dom**
  + **react-scrips**
  + **recompose**
  + **sequelize**

  
+ **MySQL** for database creation and storing persistent data.
+ **Firebase** for database creation and storing real-time data.
  
+ **Heroku** for live deployment and hosting.
  
+ **Chart.js** used to visualy display the number of registered Food Trucks in our Sql database by cusine type.
  
+ The app follows the **MVC (Model, View, Controller)** architecture paradigm:
  
![mvc pic](/public/mvc1.PNG "MVC architecture") ![mvc pic](/public/mvc2.png "MVC architecture")


## 🌟 Acknowledgements

We would like to thank our instructor Jerome and our awesome TA's Sajeel, Jacob, and Jimmy for their guidance and support. 
    
## 🔗 Authors 

+ Melanie Marsollier—https://github.com/Mel-Marsollier
+ Jennifer Powell—https://github.com/jerpowel321
+ Noah Glasser—https://github.com/NBGlasser
+ Cyrus Ghadiri—https://github.com/ctghadiri


