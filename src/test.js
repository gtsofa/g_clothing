// querying the database from the firebase firesote
import firebase from 'firebase/app';
import 'firebase/firestore';
import { identifier } from '@babel/types';

const firesote = firebase.firestore();

firestore.collection('users')
// will give that identifier for the collection users 
firestore.collection('users').doc('pass id of that user')
// get the user with an id of 'passed id' collection 
firestore.collection('users').doc('passed id').collection('cartItems')
// get me cartItems of that passed id user 
firestore.collection('users').doc('passed id ').collection('cartItems').doc('passed id')
// get particular cart item with id passed 

// The general query can also be as follows using doc + collection methods
firestore.doc('/users/passed id/cartItems/passed id')
firestore.collection('users/passed id/cartItems')
