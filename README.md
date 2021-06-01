# Fake ? News
Welcome to the main repo of March 2021 cohort's newsroom challenge. 

We have built a fullstack platform that spans 4 different applications:
1. An admin interface where, journalists can write new articles and editors can moderate and view statistics.
2. A client for the users that comprises a daily dose of conspiracies, a forum for localized, user-curated content, as well as general newssite functionality.
3. A backend engine that stores all of our data, controls model associations, and serves API functionality at various endpoints.
4. A mobile client to serve truth-seekers who are on the go.

### Authors
[Seva Deriushkin](https://github.com/SevaDer14)  
[Luke Perrin](https://github.com/lukeperrin10)    
[Lucas Knudsen](https://github.com/LucasKnudsen)  
[Kim Haaga](https://github.com/1CIM)    
[Arun Singh](https://github.com/arunbhalli)    
[Christer Forsgren](https://github.com/christerforsgren91)  
[Davit Danielyan](https://github.com/DavDan1)  

## Overview:
### Front End Admin Client
**Github link:** [Admin](https://github.com/CraftAcademy/fake_news_client_admin)    
**Deployed at:** [FAKE_?_NEWS-ADMIN](https://fake-news-user.netlify.app/login)  
**Built with:** React, Semantic UI, Recharts  
**Testing framework:** Cypress
### Front End Public Client
**Github link:** [Public](https://github.com/CraftAcademy/fake_news_client_user)  
**Deployed at:** [FAKE_?_NEWS](https://fake-news-admin.netlify.app/)  
**Built with:** React, Semantic UI  
**Testing framework:** Cypress
                 
### Backend API 
**Github link:** [API](https://github.com/CraftAcademy/fake_news_api)  
**Deployed at:** [API_Server](https://fakest-newzz.herokuapp.com/)   
**Built with:** Ruby on Rails  
**Testing framework:** Rspec

### Mobile Client 
**Github link:** [Mobile](https://github.com/CraftAcademy/fake_news_native_app)  
**Built with:** React Native
## The code   
This is the mobile app for our project Fake ? News. This is the first time we worked with React Native and developed a mobile application. Here the user can get a glimps of some spicy conspiracies, subscriber can read full articles and leave comments and also share his/her own conspiracies in Backyard Conspiracies section.
The master repository for the visitors interface, admin interface and API can be found here:

## Getting started
### Dependencies  
* Yarn
* React
* Cypress
* Axios
* React-redux
* Redux
* devise_token_auth
* GeoCoder
* Stripe

### Setup   
To test this application, fork the repo to your own GitHub account and clone it to your local workspace. </br>
*Note:**Note:*All our clients are running on our deployed API, even when they are being used on a local server. 
Install Ionic command line to run the project locally:    
```
$ yarn add global @ionic/cli
```  
Install all the dependencies:  
```
$ yarn install
```
Start the React application and run it on your local host:
```
$ ionic serve
```

### Login credentials
- **Subscriber:** </br> email: subscriber@gmail.com, </br> password: password
- **Journalist:** </br> email: mrfake@fakenews.com, </br> password: password
- **Editor:** </br> email: editor@gmail.com,</br> password: password

## Updates/Improvements   
- 

## License  
[MIT-license](https://en.wikipedia.org/wiki/MIT_License)

### Acknowledgement  
- Material provided by [Craft Academy](https://craftacademy.se)
