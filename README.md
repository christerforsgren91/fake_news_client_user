# Fake ? News
Welcome to the main repo of March 2021 cohort's newsroom challenge. 

We have built a fullstack news platform for conspiracy theories that spans 4 different applications:
1. An admin interface where journalists can write new articles and editors can moderate and view statistics.
2. A client for the users that comprises your daily dose of conspiracies, a forum for localized, user-curated content, as well as general newssite functionality.
3. A backend engine that stores all of our data, controls model associations, and serves API functionality at various endpoints.
4. A mobile client to serve truth-seekers who are on the go with undisturbed access to our news.

## The code   
Fake ? News is a news-themed application that distributes truth to those willing to receive. A main page features the latest articles, displayed in 4 different section designs, with every article directing you to a single article page that showcases its full content. Under the logo sits a category menu where you can filter based on your interests. 

Through the navbar, you are able to navigate to your local Backyard, which is a forum-like place for user-created content from your country. If you subscribe, you will be able to express your own opinions in this place, as well as writing comments on normal articles. You are also able to view premium content. The subscription service is a secure feature backed by Stripe.  
The application also features languages, which will both change the UI language as well as display articles written in this language, made with I18Next. 

### Authors
[Seva Deriushkin](https://github.com/SevaDer14)  
[Luke Perrin](https://github.com/lukeperrin10)    
[Lucas Knudsen](https://github.com/LucasKnudsen)  
[Kim Haaga](https://github.com/1CIM)    
[Arun Singh](https://github.com/arunbhalli)    
[Christer Forsgren](https://github.com/christerforsgren91)  
[Davit Danielyan](https://github.com/DavDan1)  

## Overview:
### Frontend Admin Client
**Github link:** [Admin](https://github.com/CraftAcademy/fake_news_client_admin)    
**Deployed on Netlify at:** [FAKE_?_NEWS-ADMIN](https://fake-news-user.netlify.app/login)  
**Built with:** React, Semantic UI, Recharts  
**Contineous integration with:** Semaphore
**Testing framework:** Cypress

### Frontend Public Client
**Github link:** [Public](https://github.com/CraftAcademy/fake_news_client_user)  
**Deployed on Netlify at:** [FAKE_?_NEWS](https://fake-news-admin.netlify.app/)  
**Built with:** React, Semantic UI  
**Contineous integration with:** Semaphore  
**Testing framework:** Cypress
                 
### Backend API 
**Github link:** [API](https://github.com/CraftAcademy/fake_news_api)  
**Deployed on Heroku at:** [API_Server](https://fakest-newzz.herokuapp.com/)   
**Built with:** Ruby on Rails  
**Contineous integration with:** Semaphore  
**Testing framework:** Rspec

### Mobile Client 
**Github link:** [Mobile](https://github.com/CraftAcademy/fake_news_native_app)  
**Built with:** React Native  
**Testing framework:** Cypress  

## Dependencies & packages used
### Frontend:
* Yarn
* React
* React Native & Expo
* Cypress
* Axios
* Semantic UI
* React-redux
* Redux
* Recharts
* React-responsive
* Stripe
* I18Next

### Backend
* Stripe
* Devise_token_auth
* Active model serializer
* GeoCoder
* Webmock
* Faker
* RestClient
* Aws-sdk-s3

### Login credentials
- **Subscriber:** </br> email: subscriber@gmail.com, </br> password: password
- **Journalist:** </br> email: mrfake@fakenews.com, </br> password: password
- **Editor:** </br> email: editor@gmail.com,</br> password: password

## Updates/Improvements   
- Backyard forum chat with websockets
- A profile page
- Search functionality

## License  
[MIT-license](https://en.wikipedia.org/wiki/MIT_License)

### Acknowledgement  
- Material provided by [Craft Academy](https://craftacademy.se)
