import {
    arrayUnion,
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    updateDoc,
    where
  } from "firebase/firestore"
  import { db } from "./firebase"
  
  const getlevelsData = async () => {
    const result = []
    const snapShot = await getDocs(collection(db, "levelsData"))
    snapShot.forEach(doc => {
      const name = doc.data().name
      const character = doc.data().character
      result.push({
        name,
        character
      })
    })
  
    return result
  }
  
  const getCharacterLocations = async levelName => {
    let locations = []
    const q = query(collection(db, "levelsData"), where("name", "==", levelName))
    const snapShot = await getDocs(q)
    snapShot.forEach(doc => {
      locations = doc.data().solution
    })
  
    return locations
  }
  
  const getLeaderboard = async levelName => {
    let result = []
    const snapShot = await getDoc(doc(db, "leaderboard", levelName))
    if (snapShot.exists()) result = snapShot.data().scores
    return result || []
  }
  
  const addScore = async (levelName, newScore) => {
    const ref = doc(db, "leaderboard", levelName)
    await updateDoc(ref, {
      scores: arrayUnion(newScore)
    })
  }
  
  const Database = {
    getlevelsData,
    getCharacterLocations,
    getLeaderboard,
    addScore
  }
  
  export default Database
  