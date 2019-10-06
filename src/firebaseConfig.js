import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCDfFVyt2ftKXw2Wngydjnnb4YaZVwdEb0',
	authDomain: 'project-dbs.firebaseapp.com',
	databaseURL: 'https://project-dbs.firebaseio.com',
	projectId: 'project-dbs',
	storageBucket: '',
	messagingSenderId: '31083627759',
	appId: '1:31083627759:web:60ca62cbe8238dcf6b471a',
	measurementId: 'G-2SKP7XNG10'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export const convertSnapshotToMap = (snapshot) => {
	const snapshotArray = snapshot.docs.map((doc) => {
		return doc.data();
	});

	return snapshotArray.reduce((acc, curr) => {
		acc[curr.type] = curr;
		return acc;
	}, {});
};
