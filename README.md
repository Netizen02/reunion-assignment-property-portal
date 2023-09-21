# Problem Statement

You are building a comprehensive property portal where tenants can find properties as per their requirements and property owners can add/delete/update properties available with them for renting.

## Tech Stack
- Front End: React
- Back End: Node.js/Express, MongoDB
- Deployment: Firebase, and MongoDB Atlas
- API Testing: HoppscotchIO, and Postman

## Front End: 
### Property Search / Listing Page:
- This is the home page listing all available properties.
- Options to filter properties
    - Location - Drop down - showing city list
    - Available from date - calendar drop down
    - Price range - slider
    - Property type - dropdown
- This is a public page, i.e. non-authenticated users can also access it.
- No pagination to be implemented. All properties fetched from API should be shown in a single page.
- Page is responsive.

### User Login Sidebar:
- This is a sidebar which opens after pressing the login button on the navbar.
- Login via Google Account using Firebase.
- Login functionality:
    - User login allows registered users to log in with their email and password. A JWT token is generated upon successful login.

### User Resgistration Sidebar:
- This is a sidebar which opens after pressing the registration button on the navbar.
- Register via Google Account using Firebase.
- Registration functionality:
    - User registration allows users to register with their name, email, and password. A JWT token is generated upon successful login.

### User Profile Page:
- This is the profile page listing details of the user.
- Options for the profile page
    - Add details of user
- This is a private page, i.e. only authenticated users can access it.
- Page is responsive

## Back End
### API Development:
1. **Fetch all available properties**
    1. Route: api/list-properties
    2. Method: Choose an appropriate method applicable
    3. Use this API to show the properties on the Property Search / Listing Page
    4. This is public endpoint, i.e. unauthenticated user can also access this
2. **Add a property**
    1. Route: api/property
    2. Method: Choose an appropriate method applicable
    3. No front end to be developed for this
    4. This is a private endpoint, i.e. only authenticated users can access this page
    5. This endpoint will be used by property owners to add properties, which will then be visible to tenants using the fetch API endpoint
3. **Update a property**
    1. Route: api/property/:id
    2. Method: Choose an appropriate method applicable
    3. No front end to be developed for this
    4. This is a private endpoint, i.e. only authenticated users can access this page
    5. This endpoint will be used by property owners to update their existing properties that they have listed on the portal. Updates done by property owners with this endpoint will be visible to tenants using the fetch API endpoint
    6. Users (property owners) can update only the properties they have listed and not the properties owned by others
4. **Delete a property**
    1. Route: api/property/:id
    2. Method: Choose an appropriate method applicable
    3. This endpoint will be used by the property owners to delete any property that they have listed on the portal.
    4. Other requirements are similar to point 3 above
5. **List my properties**
    1. Route: api/property
    2. Method: Choose an appropriate method applicable
    3. This endpoint will be used by property owners to get the list of all the properties they have listed on the portal
    4. Other requirements are similar to point 3 above
6. **Signup endpoint**
    1. Route: api/signup
    2. Method: Choose an appropriate method applicable
    3. Used by users (property owners) to register to the portal
    4. User registration via valid email IDs only
    5. No confirmation email or OTP to be sent for email confirmation. Only requirement is to have email ID in valid format
7. **Login endpoint**
    1. Route: api/login
    2. Method: Choose an appropriate method applicable
    3. Used by registered users to login and authenticate themselves
    4. Authentication via JWT tokens 
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
