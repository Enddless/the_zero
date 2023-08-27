import { db } from './firebase.config'
import { collection, query, where, getDocs, limit} from "firebase/firestore";


const getMenu = async (num) => {
    // получение отдельной коллекции категории тип время
    const timeCol = query(collection(db, 'menu_details'), limit (num));
    const citySnapshot = await getDocs(timeCol);
    return (citySnapshot.docs.map(doc => doc.data()))
}

export { getMenu}