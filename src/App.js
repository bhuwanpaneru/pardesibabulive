import React, { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from "./Components/Header";
import Home from "./Components/Home";
import  CheckoutPage  from "./Components/CheckoutPage";
import Login from "./Components/Login";
import { useStateValue } from "./ReacContextAPI/StateProvider";
import  {auth}  from "./Firebase/Firebase";
import Submit from "./Components/Submit";
import ReagisterAsFarmer from "./Components/Register/ReagisterAsFarmer";
import RegusterAsUser from "./Components/Register/RegusterAsUser";

function App() {
  const [{basket}, dispatch] = useStateValue();
  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user : authUser
        })
      }
      else {
        dispatch({
          type: 'SET_USER',
          user : null
        })
      }
    })
    return () => {
      // cleanup
      unsubscribe();
    }
  }, [basket])

  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path="/checkout">
         <Header />
         <CheckoutPage />
         </Route>
         <Route path="/login">
           <Login />
         </Route>
         <Route path="/submit">
           <Submit />
         </Route>
         <Route path="/reagisterAsFarmer">
           <ReagisterAsFarmer />
         </Route>
         <Route path="/regusterAsUser">
           <RegusterAsUser />
         </Route>
         <Route path="/">
         <Header /> 
         <Home />
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
