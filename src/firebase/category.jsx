import { db } from './firebase.config'
import { collection, query, getDocs, limit} from "firebase/firestore";


const getCategory = async (num) => {
    // получение отдельной коллекции категории тип время
    const timeCol = query(collection(db, 'category'), limit (num));
    const citySnapshot = await getDocs(timeCol);
    return (citySnapshot.docs.map(doc => doc.data()))
}

export { getCategory}