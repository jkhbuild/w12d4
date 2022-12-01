// // frontend/src/App.js

// import React from "react";
// import { Route, Switch } from "react-router-dom";
// import LoginFormPage from "./components/LoginFormModal";
// import SignupFormPage from "./components/SignupFormPage";
// import Navigation from "./components/Navigation";

// function App() {
//   return (
//     <>
//       <Navigation />
//       <Switch>
//         <Route path="/login">
//           <LoginFormPage />
//         </Route>
//         <Route path="/signup">
//           <SignupFormPage />
//         </Route>
//       </Switch>
//     </>
//   );
// }

// export default App;

// frontend/src/App.js

import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;