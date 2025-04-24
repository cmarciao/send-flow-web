import { getApps, initializeApp } from 'firebase/app';

import { env } from '@/app/configs/env';

const firebaseConfig = {
    apiKey: env.firebaseApiKey,
    authDomain: env.firebaseAuthDomain,
    projectId: env.firebaseProjectId,
    storageBucket: env.firebaseStorageBucket,
    messagingSenderId: env.firebaseMessagingSenderId,
    appId: env.firebaseAppId
};

export const firebaseApp = () => getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
