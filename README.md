# f24-yalieplan

Backend: Django\
Database: SQLite\
Frontend: React

### context/

The `context` folder contains React Context files, which are used for managing global state across the application.

- `surveyContext.js`: Manages the state of the survey, including current question, responses, and navigation functions.

### data/

The `data` folder stores static data used throughout the application.

- `surveyQuestions.js`: Contains the array of survey questions.

### hooks/

Custom React hooks are stored in the `hooks` folder. These hooks encapsulate reusable stateful logic.

- `useSurveyData.js`: A custom hook that provides an interface to the survey context and additional utility functions.

### pages/

The `pages` folder contains React components that represent entire pages in the application.

- `QuizPage.jsx`: Renders the survey questions and handles navigation.
- `PlanPage.jsx`: Displays the personalized plan based on survey responses.

### services/

The `services` folder typically contains modules for interacting with external services or APIs.