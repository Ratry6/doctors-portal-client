import {  useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged , signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider, updateProfile} from "firebase/auth";

//initialize firebase app
initializeFirebase();



const UseFirebase = ()=>{
  const [user,setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error,setError] = useState('');

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  //CREATE NEW USER
  const registerUser = (email,password,name, history)=>{
     setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      
       setError('');
       const newUser = {email, displayName : name};
       setUser(newUser);
       //save user to database
       saveUser(email, name, 'POST');
//send name to firebase after creating
updateProfile(auth.currentUser, {
  displayName: name
}).then(() => {
  
}).catch((error) => {
  
});

       history.replace('/');
        
      })
      .catch((error) => {
        setError(error.message);
        
      })
      .finally(()=> setIsLoading(false))
     
  }

  //USER LOGIN
  const logInUser = (email,password, location, history) =>{
      setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const destination = location?.state?.from || '/';
      history.replace(destination);
        setError('');
    })
    .catch((error) => {
    
       setError(error.message);
    })
    .finally(()=> setIsLoading(false))
    

  }


  //OBSERVE USER STATE
  useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
         
          setUser(user);
        } else {
          setUser({})
        }
        
        setIsLoading(false);
      });
      return () => unsubscribe
  },[]);

  //Sign in
  const signIn = (location, history)=>{
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      saveUser(user.email, user.displayName, 'PUT')
      setError('');
      const destination = location?.state?.from || '/';
      history.replace(destination);
      
    }).catch((error) => {
      setError(error.message);
    })
    .finally(()=> setIsLoading(false));
  
  }

  //SIGN OUT
  const logOut = ()=>{
      setIsLoading(true);
      
      signOut(auth).then(()=>{
//sign - out successful
      }).catch((error)=>{
//an error happened
      })
      .finally(()=> setIsLoading(false))
  }

  const saveUser = (email, displayName,method)=>{
  const user ={email, displayName};
  fetch('http://localhost:5000/users', {
    method : method,
    headers:{
      'content-type' : 'application/json'
    },
    body : JSON.stringify(user)
  })
  .then()
  }

   return {
       user,
       registerUser,
       logInUser,
       isLoading,
       error,
       signIn,
       signIn,
       logOut,

   }
  

}

export default UseFirebase;