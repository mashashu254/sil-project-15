# f24-yalieplan

Backend: Django\
Database: SQLite\
Frontend: React

## Project Structure
### context/

The `context` folder contains React Context files, which are used for managing global state across the application, think of it as my crude Redux.

- `surveyContext.js`: Manages the state of the survey, including current question, responses, and navigation functions.

### data/

The `data` folder stores static data used throughout the application.
- `surveyQuestions.js`: Contains the array of survey questions.
- `planGenerationData.js`: Contains the format or template how the plan should appear after getting the users' responses.

### hooks/

Custom React hooks are stored in the `hooks` folder. These hooks encapsulate reusable stateful logic.

- `useSurveyData.js`: A custom hook that provides an interface to the survey context and additional utility functions.

### pages/

The `pages` folder contains React components that represent entire pages in the application.

- `QuizPage.jsx`: Renders the survey questions and handles navigation.
- `PlanPage.jsx`: Displays the personalized plan based on survey responses.

### services/

The `services` folder typically contains modules for interacting with external services or APIs; especially handling the user authentication on production.

## Reason For Changes

1. **Simplified Component Structure**: 
   I consolidated the plan generation logic into the `PlanPage.jsx` component - reducing component complexity and improve the maintainability of our code. By keeping related functionality in a single file, it's easier to understand and modify the plan generation process.

2. **Enhanced Modularity**: 
   The [useAIAdvice] hook has been separated into its own file in the `hooks` directory. This separation allows for better reusability of the AI advice logic across different components if needed in the future, while keeping the main component files focused on rendering and user interaction.

3. **Improved State Management**: 
   By utilizing React hooks and context (like `useSurveyContext`), we've improved how state is managed across the application. This approach provides a more scalable and maintainable way to handle application-wide state compared to prop drilling.

4. **Better Separation of Concerns**: 
   The current structure more clearly separates the responsibilities of different parts of the application:
   - Pages (`PlanPage.jsx`) handle overall layout and composition of the UI.
   - Hooks (`useAIAdvice.js`) manage complex logic and state.
   - Context (`surveyContext.js`) provides a way to share data across components without prop drilling.

These changes aim to make the codebase more organized, easier to navigate, and more maintainable as the project grows and evolves in my opinion.