import { useState } from "react";
import initializeFirebase from "../pages/Login/Login/firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { useEffect } from "react";


// initialize firebase app
initializeFirebase();


const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [authError, setAuthError] = useState('');
  const auth = getAuth();

  // google sign in

  const googleProvider = new GoogleAuthProvider();

  // Register in area
  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('');
        const newUser = { email, displayName: name };
        setUser(newUser);
        // send name to firebase after creation 
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
        }).catch((error) => {
        });

        history.replace('/');
      })
      .catch((error) => {
        setAuthError(error.message);
        // ..
      }).finally(() => setIsLoading(false));
  }


  // LogInUser
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/';
        history.replace(destination);
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  }



  /* GoogleSing in with PopUp */
  const signInwithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setAuthError('');
      }).catch((error) => {
        setAuthError(error.message);
      }).finally(() => setIsLoading(false));
  }



  // Observer user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({})
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);



  // LogOut area
  const logout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
      .finally(() => setIsLoading(false));

  }


  return {
    user,
    isLoading,
    authError,
    registerUser,
    loginUser,
    signInwithGoogle,
    logout,
  }

}
export default useFirebase; 