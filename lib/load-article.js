import { doc, getDoc } from "firebase/firestore"
import { db } from "../utils/Firebase"

export const loadArticle = async (id) => {
	const docRef = doc(db, 'articles', id)
	const docSnap = await getDoc(docRef)
	const article = JSON.stringify(docSnap.data())
	return article
}