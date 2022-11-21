import { doc } from "firebase/firestore"
import { db } from "../utils/Firebase"

export const loadArticle = async (id) => {
	const docRef = doc(db, 'articles', id)
	const docSnap = await getDoc(docRef)
	article = JSON.stringify(docSnap.data())
	return article
}