

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) as such, launching this application on a local development server is straight forward and trivial 😊. Below highlight the available scripts relevant to do so.

## Available Scripts

In the project directory, you can run:


1. ###   `npm install`. This will download and install the npm packages (dependencies) used in this project

Next run, the following command in order to start the development server. 

2. ## `npm run`

3. At this point you should be able to access the development server at pen [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Project Structure


├── README.md - Which is this file.

├── package.json  `npm package manager` file. It's unlikely that you'll need to modify this.

├── public
    ├── favicon.ico # React Icon, You may change if you wish.
    └── index.html # DO NOT MODIFY
    └── Images # This folder contain all the avatar images used in this project
└── src
    ├── Index.js #This is the root of this application. It also holds our redux store.
    ├── App.js #This is the main view of the application. It holds the
    |         Navigation menu, cordinate routing to other components
    | 
    ├── Index.css # This file contains all styling in the application

    └── Actions    # This Folder houses all of our action creators logic
        ├── authedUser.js  # Action for athenticating a user
         ├── question.js # Actions and Actions creator to handle all dispatches
            to the question piece of our store
         ├── users.js # Houses actions and creators for handling operation involving the users piece to our store
         ├── Shared.js # Contain functionality actions shared between the users 
               and question states of our store

    └── components # This Folder contains all reusable React components and Views of the project
         ├── AnsweredQuestion.js  # This is a very simple view describing the right section of the Card for an Answered question detail plane as well the logic to submit answer or response to a that question
         ├── Card.js # This is a HOC for Majority of the views in the project - 
             what ever you ever you see in this application like a card view is actually build using this HOC
         └── LeaderCard.js #This component presents a simple card view component serving as 
                the building block for the actual leaderboard view
         └── Navbar.js # As you already guess it, this is our NavBar
         └── Poll.js # This is a building block component for the Poll list view you see.
                 Every   question is dynamically render inside an instance of this component
         └── PollDetail.js #As you already guessed it, details about a question is deplayed in this component. This component is a parent component - reusing the Card.js components, as well as the UnAnswered and Answered component
         └── UnAnswered.js # The name doesnt sound trivial as what this components does, well it is a simple component just like the Answered.js compoenent. Now you get it, it simply describe the right hand section of the Polldetail.js component for answered questions functionality

    └── Middleware # This Folder  contains our middleware files
         ├── logger.js  # Middleware responsible for giving us a view into what redux is 
              doing behind the scene
         ├── Index.js # Our Middleware root file combining our thunk and logger middle wares

    └── reducers    # This Folder holds all our reducers and their logics
         ├── authedUser.js  # Reducer responsible for sign in or logged in user state
                 of the   application
         ├── question.js # This reducer is responsible for the question piece of state
                of the application
         ├── users.js # This reducer is responsible for the users piece of state
                of the application
         ├── index.js # This is the root of the application reducing functin. 
                It simple return the reducers combined using redux combinereducer function
        
    └── Screen   # This Folder holds all main views in this application
         ├── LeaderBoard.js  # LeaderBoard Component view
         ├── NewQuestion.js # contain the New question UI as the as dispatching method to 
                update the state
         ├── SignIn.js # UI for sign In as well logic for authenticating a user
         ├── SignUp.js # You are able to create a temporal 
            (limitation of our fake database 😊) user using your choice name and selecting one of the presented avatar url
        
    └── Utils   # This Folder contains our fake database, as well as method to 
                access and manupulate the database
         ├── _DATA_.js  # Our database and some functions to access it
         ├── api.js # presents a simple API to access the database
         ├── avatar.js # this contains the URL for the templete avatars use during 
                creating a new user account
         
    
       
## Demo site Hosted on Netlify
You can view the project hosted at https://would-you-rather-byjoel.netlify.app/


