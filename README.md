# Bulletor App
  ### Created by Eva Reitzel
  ### Phase 2 Project for Flatiron School

  ## How Bulletor was built
    - Language: React
    - React Router: Version 6
    - Format: Single Page Application (SPA) 

## About Bulletor
  Bulletor is a list-making application based on Bullet Journaling. Users can view their list collection, add new lists, and explore resources and ideas for Bullet Journaling.

## Installation 

Use the package manager [ npm ] to install Bulletor.

```bash
npm install
npm run server
npm start
```

## View JSON Database
  http://localhost:3001/lists

  // added to package.json:
    "server": "json-server --watch db.json -p 3001"

## URL Routes
  1. http://localhost:3000/
  2. http://localhost:3000/add-list
  3. http://localhost:3000/resources


## Component parent-child structure

  └── App
    ├── NavBar
    ├── ListContainer
    ├── ListForm
    |   |   List
    |   |   List
    |   |   List
    |   |   List
    |   |   List
    |   └── List
    └── Resources

## Project Specs
- Build a SPA using create-react-app
- Create 3+ client-side routes with React Router
  - use a nav bar
  - use RESTful routing conventions
- Use a json-server to create a RESTful API
  - Make a GET and POST request to the json server
  - Use a controlled form to make POST request
  - Use json POST return to update state with the setState function 
- use 5+ components
- Add CSS styling


  // POST request to the json server
  // Use a form to make your post request, specifically a controlled form/component.

## Resources
  API Reference

  - https://todoist.com/templates - API inspo

  - https://developer.todoist.com/rest/v2/?python#get-a-user-39-s-projects


  Color Palette
    #C0CA33
    #E6EE9C
    #CDDC39

    Source:
    Lime from Material Design
    https://m1.material.io/style/color.html#color-color-palette  