# NY Most Viewed Articles

New york times articles are listed in Car view also have Detailed View using Newyork Article api

## Technologies Used

- Vite
- React
- Typescript
- React Router Dom
- MUI
- Cypress
- Jest


## Packages Used

- "@emotion/react": Used for styling components using emotion css
- "@emotion/styled": Used for styling components using emotion css
- "@mui/icons-material": Icons for material ui
- "@mui/material": UI components for material ui
- "axios": Used for making http requests
- "react": Used for building user interfaces
- "react-dom": Used for rendering react components to the DOM
- "react-router-dom": Used for routing
- "react-helmet-async": Used for managing document head
- "react-router-dom": Used for routing

### Prettier
Prettier is used for formatting code. Prettier is an opinionated code formatter that supports many languages and integrates with most editors. Read more at https://prettier.io/

### Cypress
Cypress is used for end-to-end testing. Cypress is a next-generation front-end testing tool built for the modern web. Read more at https://www.cypress.io/

### Jest
Jest is used for Unit testing. Jest is a Delightful JavaScript Testing Library with a focus on simplicity. Read more at https://jestjs.io/

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js (v19.9.0)
- npm  (9.6.3)

#### Commands
- git clone https://github.com/rohitmpatil-iprogrammer/ny-times
- cd ny-times
- run npm install (install dependencies)
- run npm run dev

##### Run Cypress
- npx cypress open

###### Run Test Cases
- npm run test


### Build

- Run `npm run build` to build the application in production mode.


### Sentry
Sentry is an open-source error tracking application that helps you monitor and fix crashes in real time. It allows you to track errors as they happen in your application and provides valuable information about the root cause and impact of those errors. You can find more information about Sentry at https://sentry.io/

### Upload Source Map to Sentry

If you want to upload source map automatically, use `npx @sentry/wizard@latest -i sourcemaps`. else configuration is done in vite peoject which will take care of uploading the sourcemap

- To enable Sentry, set the `SENTRY_ORG` and `SENTRY_PROJECT` environment variables to your Sentry organization and project name. You can then run `npm run build` to build the application with Sentry enabled.

- Set the `SENTRY_AUTH_TOKEN` environment variable to your Sentry authentication token.

### Test Coverage

- Run `npm run coverage` to generate test coverage reports.
- The test coverage reports can be found in the `coverage` directory.
