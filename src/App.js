import React,{useState,useEffect} from 'react'
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Covid from './Covid';
import {useAuthState} from 'react-firebase-hooks/auth'
import db, { auth } from './firebase';
import Login from './Login';
import AdminRoute from './components/PrivateRoute';
import AdminPanel from './components/AdminPanel';
import Home from './components/Home';
import Author from './components/Author';
function App() {
  const [user] =useAuthState(auth)
  const [userRole, setUserRole] = useState('')
  const [loading, setLoading] = useState()

 
  useEffect(() => {
   auth.onAuthStateChanged(user => {
     if(user){
      // console.log(user.uid)
       var userRef = db.collection('users').doc(user.uid)
      
       userRef.get().then(doc => {
         if(!doc.exists){
             console.log("NO DOCUMENT")
             db.collection('users').doc(user.uid).set({
               role: 'user',
               userName: user.displayName
             }).then(() => {
              setUserRole('user')
              setLoading(false)
             })
         }else{
           setUserRole(doc.data().role)
           setLoading(false)
           
         }
       })
     }else{
       console.log("NO USER")
     }
   })

  },[])


  if(loading){
    return(
      <div>
 <img src="/logo.jpeg" className="h-32 items-center mt-60 mx-auto" alt="" /> 
      </div>
     
    )
  }
  // if(loading){
  //   return(
  //     <h1>Loading....</h1>
      
  //   )
  // }

  if(!user){
    return(
      <Login />
    )
  }
  
  return (
    <div className="App">
     {/* <h1>InterView</h1> */}
     <Router>
       {/* {!user?(
         <Login />
       ):(
<Covid />
       )} */}
       <Switch>
         {/* <Header /> */}
         <Route path="/" exact component={Home} />
         <Route path="/blogs" exact component={Covid} />
         <Route path="/authors" exact component={Author}/>
         <AdminRoute path="/admin" component={AdminPanel} role={userRole}   />
          
       </Switch>
     </Router>

    </div>
  );
}

export default App;
