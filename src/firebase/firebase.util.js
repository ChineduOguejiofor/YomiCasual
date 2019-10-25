import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCFe1QzpSvDzS1dg3AXNf41SmcoQbiPZiQ',
  authDomain: 'yomicasual-738ec.firebaseapp.com',
  databaseURL: 'https://yomicasual-738ec.firebaseio.com',
  projectId: 'yomicasual-738ec',
  storageBucket: 'yomicasual-738ec.appspot.com',
  messagingSenderId: '801613585598',
  appId: '1:801613585598:web:20de25a25f32f241c7d2ef',
  measurementId: 'G-4BC6DG035D'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
const githubprovider = new firebase.auth.GithubAuthProvider();
githubprovider.setCustomParameters({ prompt: 'Please select your account' });
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signInWithGithub = () => auth.signInWithPopup(githubprovider);

export default firebase;
