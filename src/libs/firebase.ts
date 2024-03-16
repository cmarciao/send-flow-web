import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import { env } from '@/constants/env';

const firebaseConfig = {
	apiKey: env.firebaseApiKey,
	authDomain: env.firebaseAuthDomain,
	projectId: env.firebaseProjectId,
	storageBucket: env.firebaseStorageBucket,
	messagingSenderId: env.firebaseMessagingSenderId,
	appId: env.firebaseAppId
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
