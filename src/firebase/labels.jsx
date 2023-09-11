import { db } from './firebase.config'
import { collection, query, getDocs } from "firebase/firestore";


const getLabels = async () => {
    // получение отдельной коллекции категории тип время
    const timeCol = query(collection(db, 'labels'));
    const citySnapshot = await getDocs(timeCol);
    return (citySnapshot.docs.map(doc => doc.data()))
}

export { getLabels}