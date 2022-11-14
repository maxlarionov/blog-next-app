import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
	apiKey: `${process.env.NEXT_PUBLIC_API_KEY}`,
	authDomain: `${process.env.NEXT_PUBLIC_API_AUTH_DOMAIN}`,
	projectId: `${process.env.NEXT_PUBLIC_API_PROJECT_ID}`,
	storageBucket: `${process.env.NEXT_PUBLIC_API_STORAGE_BUCKET}`,
	messagingSenderId: `${process.env.NEXT_PUBLIC_API_APP_MSID}`,
	appId: `${process.env.NEXT_PUBLIC_API_APP_ID}`,
	measurementId: `${process.env.NEXT_PUBLIC_API_APP_MID}`
};

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)