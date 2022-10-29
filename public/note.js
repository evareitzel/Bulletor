// add React Router
  // npx create-react-app demo-app
 
// ♥️

// pkg.lock.json & package.json idea: 
  // "react-router-dom": "^6.4.2", // ^5.3.4

// UI idea(s)
  // https://mui.com/
  // https://mui.com/material-ui/customization/dark-mode/#main-content

    // import * as React from 'react';
    // import useMediaQuery from '@mui/material/useMediaQuery';
    // import { createTheme, ThemeProvider } from '@mui/material/styles';
    // import CssBaseline from '@mui/material/CssBaseline';

    // function App() {
    //   const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    //   const theme = React.useMemo(
    //     () =>
    //       createTheme({
    //         palette: {
    //           mode: prefersDarkMode ? 'dark' : 'light',
    //         },
    //       }),
    //     [prefersDarkMode],
    //   );

    //   return (
    //     0
    //     // <ThemeProvider theme={theme}>
    //     //   <CssBaseline />
    //     //   <Routes />
    //     // </ThemeProvider>
    //   );
    // }


// App.js boiler code
  // import logo from './logo.svg';
  // import './App.css';

  // function App() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }

// export default App;

// from index.js
  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // root.render(
  //   <React.StrictMode>
  //     <App />
  //   </React.StrictMode>
  // );

// from index.js boilerplate code
    // import React from 'react';
    // import ReactDOM from 'react-dom/client';
    // import './index.css';
    // import App from './components/App';
    // import reportWebVitals from './reportWebVitals';
    // import {BrowserRouter} from 'react-router-dom'
    
    // const root = ReactDOM.createRoot(document.getElementById('root'));
    // root.render(
    //   <BrowserRouter>
    //     <App />
    //   </BrowserRouter>
    // );
    
    // // If you want to start measuring performance in your app, pass a function
    // // to log results (for example: reportWebVitals(console.log))
    // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    // reportWebVitals();
  


    //////////////////////////////
    // db.json
    [
      {
        id: 1,
        title: Learning,
        todo: React UI,// action,
        inProgress: FlatIron Bootcamp,
        completed: LearnEnough Rails Tutorial,
        idea: Digital Ocean,
      },
      {
        id: 2,
        title: Grocery List,
        todo: apples,
        todo: bananas,
        completed: milk,
        idea: cake, 
      },
      {
        id: 3,
        title: Reading List,
        todo: Eloquent Ruby,
        todo: Content Design,
        inProgress: Eloquent JavaScript,
        completed: Web Technology - Theory and Practice,
        idea: Book Club!,
      },
      {
        id: 4,
        title: Wellness,
        todo: fitness regime,
        inProgress: practice meditation,
        idea: sleep schedule,
      },
      {
        id: 5,
        title: Chores, 
        todo: tidy kitchen, 
        todo: mow lawn, 
        todo: laundry, 
        todo: sweep,
        todo: sort mail,
      },
      {
        id: 6,
        title: Finances,
        todo: electric - enroll in autoPay,
        todo: pay car tax,
        idea: invest in stock market,
        completed: child care,
      }
    ]

    ////////// boilerplate db.json
    // {
    //   "posts": [
    //     {
    //       "id": 1,
    //       "title": "json-server",
    //       "author": "typicode"
    //     }
    //   ],
    //   "comments": [
    //     {
    //       "id": 1,
    //       "body": "some comment",
    //       "postId": 1
    //     }
    //   ],
    //   "profile": {
    //     "name": "typicode"
    //   }
    // }


    ////////// Revised db.json
  //   {
  //     "lists": [
  //      {
  //        "id": 1,
  //        "title": "Learning",
  //        "todo": "React UI",
  //        "inProgress": "FlatIron Bootcamp",
  //        "completed": "LearnEnough Rails Tutorial",
  //        "idea": "Digital Ocean"
  //      },
  //      {
  //        "id": 2,
  //        "title": "Grocery List",
  //        "todo": "apples, bananas",
  //        "completed": "milk",
  //        "idea": "cake" 
  //      },
  //      {
  //        "id": 3,
  //        "title": "Reading List",
  //        "todo": "Eloquent Ruby, Content Design",
  //        "inProgress": "Eloquent JavaScript",
  //        "completed": "Web Technology - Theory and Practice",
  //        "idea": "Book Club!"
  //      },
  //      {
  //        "id": 4,
  //        "title": "Wellness",
  //        "todo": "fitness regime",
  //        "inProgress": "practice meditation",
  //        "idea": "sleep schedule"
  //      },
  //      {
  //        "id": 5,
  //        "title": "Chores", 
  //        "todo": "tidy kitchen, , laundry, sweep, sort mail" 
  //      },
  //      {
  //        "id": 6,
  //        "title": "Finances",
  //        "todo": "electric - enroll in autoPay, pay car tax",
  //        "idea": "invest in stock market",
  //        "completed": "child care"
  //      }
  //    ]
  //  }

  ///////////////////////////////////////////////////
  {
    "lists": [
     // {
     //   "id": 1,
     //   "title": "Learning",
     //   "item": "React UI",
     //   "item": "FlatIron Bootcamp",
     //   "item": "LearnEnough Rails Tutorial",
     //   "item": "Digital Ocean"
     // },
     // {
     //   "id": 2,
     //   "title": "Grocery List",
     //   "item": "apples, bananas",
     //   "item": "milk",
     //   "item": "cake" 
     // },
     // {
     //   "id": 3,
     //   "title": "Reading List",
     //   "item": "Eloquent Ruby, Content Design",
     //   "item": "Eloquent JavaScript",
     //   "item": "Web Technology - Theory and Practice",
     //   "item": "Book Club!"
     // },
     // {
     //   "id": 4,
     //   "title": "Wellness",
     //   "item": "fitness regime",
     //   "item": "practice meditation",
     //   "item": "sleep schedule"
     // },
     // {
     //   "id": 5,
     //   "title": "Chores", 
     //   "item": "tidy kitchen", 
     //   "item": "laundry", 
     //   "item": "sweep", 
     //   "item": "sort mail" 
     // },
     {
       "id": 6,
       "title": "Finances",
       "items": {
         "item": "electric - enroll in autoPay", 
         "item": "pay car tax",
         "item": "invest in stock market",
         "item": "child care"
       }
     }
   ]
 }
 // "item": "electric - enroll in autoPay", 
 // "item": "pay car tax",
 // "item": "invest in stock market",
 // "item": "child care"
 
 // "electric - enroll in autoPay", 
 // "pay car tax",
 // "invest in stock market",
 // "child care"
 

 ///////////////////////////////////////////////
 [
  {
    id: 1,
    title: Learning,
    todo: React UI,// action,
    inProgress: FlatIron Bootcamp,
    completed: LearnEnough Rails Tutorial,
    idea: Digital Ocean,
  },
  {
    id: 2,
    title: Grocery List,
    todo: apples,
    todo: bananas,
    completed: milk,
    idea: cake, 
  },
  {
    id: 3,
    title: Reading List,
    todo: Eloquent Ruby,
    todo: Content Design,
    inProgress: Eloquent JavaScript,
    completed: Web Technology - Theory and Practice,
    idea: Book Club!,
  },
  {
    id: 4,
    title: Wellness,
    todo: fitness regime,
    inProgress: practice meditation,
    idea: sleep schedule,
  },
  {
    id: 5,
    title: Chores, 
    todo: tidy kitchen, 
    todo: mow lawn, 
    todo: laundry, 
    todo: sweep,
    todo: sort mail,
  },
  {
    id: 6,
    title: Finances,
    todo: electric - enroll in autoPay,
    todo: pay car tax,
    idea: invest in stock market,
    completed: child care,
  }
]

/////////////////////////
// @use "@material/icon-button"

// /* .nav {
//   /* text-decoration: none; */
//   font-weight: 400;
//   font-family: Georgia, Times New Roman, serif;
//   letter-spacing: 2px;
//   padding: 20px;
//   /* position: float; */
//   text-transform: uppercase;
//   /* display: block; */
//   /* color: #fff; */
//   list-style-type: none

// } */

// /* li a {display: block;} */

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
// {
//   "lists": [
//     {
//       "id": 1,
//       "title": "Learning",
//       "items": [
//         {
//           "item": "React UI"
//         },
//         {
//           "item": "FlatIron Bootcamp"
//         },
//         {
//           "item": "LearnEnough Rails Tutorial"
//         },
//         {
//           "item": "Digital Ocean"
//         }
//       ]
//     },
//     {
//       "id": 2,
//       "title": "Grocery List",
//       "items": [
//         {
//           "item": "apples, bananas"
//         },
//         {
//           "item": "milk"
//         },
//         {
//           "item": "cake"
//         }
//       ]
//     },
//     {
//       "id": 3,
//       "title": "Reading List",
//       "items": [
//         {
//           "item": "Eloquent Ruby, Content Design"
//         },
//         {
//           "item": "Eloquent JavaScript"
//         },
//         {
//           "item": "Web Technology - Theory and Practice"
//         },
//         {
//           "item": "Book Club!"
//         }
//       ]
//     },
//     {
//       "id": 4,
//       "title": "Wellness",
//       "items": [
//         {
//           "item": "fitness regime"
//         },
//         {
//           "item": "practice meditation"
//         },
//         {
//           "item": "sleep schedule"
//         }
//       ]
//     },
//     {
//       "id": 5,
//       "title": "Chores",
//       "items": [
//         {
//           "item": "tidy kitchen"
//         },
//         {
//           "item": "laundry"
//         },
//         {
//           "item": "sweep"
//         },
//         {
//           "item": "sort mail"
//         }
//       ]
//     },
//     {
//       "id": 6,
//       "title": "Finances",
//       "items": [
//         {
//           "item": "electric - enroll in autoPay"
//         },
//         {
//           "item": "pay car tax"
//         },
//         {
//           "item": "invest in stock market"
//         },
//         {
//           "item": "child care"
//         }
//       ]
//     },
//     {
//       "title": "Builds",
//       "item1": "Lean Cabin",
//       "item2": "Hacienda",
//       "item3": "Cube",
//       "item4": "",
//       "id": 7
//     }
//   ]
// }

"item1": 
"item2": 
"item3": 
"item4": 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////
// From List.js

  // console.log(items.isTrue())
  // console.log(listObj.items)  

  // const renderItems = items.map(item => <li key={item}>{item}</li>) 

  
  // const renderItems = listObj.map(item => {
    // console.log(item) // FIX
// return <li key={item}>{item}</li> 
// return <p>{item}</p> 

// } )

      // {/* <h3>Bullet List {listObj.id}</h3> */}
      //   {/* {renderItems} */}

// From NavBar
{/* <button>Dark Mode 🌙</button> ☀️ Light Mode */}

// Stretch goal: show list titles, onClick view details (get items, setState)

// import AppBar from '@material-ui/core/AppBar'

// From App.css
    /* make full bg */
    /* background-color: #222; */
    /* font-size: 16px; */

    /* width: auto; */
    /* height: auto; */
    /* min-w?idth: 100%; */
    /* min-height: 100%; */

    // import { ThemeContext } from '@emotion/react'


    /* a:link
a: visited
a: hover
a:active */

// from ListForm (text fields)
    /* border: 2px solid #C0CA33; */


//////////////////////////////////////////////////////////

// Boilerplate README
// # Getting Started with Create React App

// This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

// ## Available Scripts

// In the project directory, you can run:

// ### `npm start`

// Runs the app in the development mode.\
// Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

// The page will reload when you make changes.\
// You may also see any lint errors in the console.

// ### `npm test`

// Launches the test runner in the interactive watch mode.\
// See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

// ### `npm run build`

// Builds the app for production to the `build` folder.\
// It correctly bundles React in production mode and optimizes the build for the best performance.

// The build is minified and the filenames include the hashes.\
// Your app is ready to be deployed!

// See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

// ### `npm run eject`

// **Note: this is a one-way operation. Once you `eject`, you can't go back!**

// If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

// Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

// You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

// ## Learn More

// You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

// To learn React, check out the [React documentation](https://reactjs.org/).

// ### Code Splitting

// This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

// ### Analyzing the Bundle Size

// This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

// ### Making a Progressive Web App

// This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

// ### Advanced Configuration

// This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

// ### Deployment

// This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

// ### `npm run build` fails to minify

// This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


/////////////////////////////
// From README draft

// https://todoist.com/templates - API inspo

// https://developer.todoist.com/rest/v2/?python#get-a-user-39-s-projects

// https://github.com/microsoftarchive/api

//     add to package.json:
//     "server": "json-server --watch db.json -p 3001",
// $ npm run server
//  http://localhost:3001/lists

//   // POST request to the json server
//   // Use a form to make your post request, specifically a controlled form/component.

//   Color Palette
//   #C0CA33;
//   #E6EE9C;
//   #CDDC39;

// REF: Lime from Material Design
// https://m1.material.io/style/color.html#color-color-palette  