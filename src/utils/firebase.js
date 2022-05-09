import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  deleteDoc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAaZ9WM6eTQKfqf_WSRCDB_75SIQESf6Cg",
  authDomain: "todolistproject-a12dc.firebaseapp.com",
  projectId: "todolistproject-a12dc",
  storageBucket: "todolistproject-a12dc.appspot.com",
  messagingSenderId: "865046000731",
  appId: "1:865046000731:web:a03d7f10d6145a4440fb7e",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//新增
async function addDb(id, note) {
  const noteRef = collection(db, "to-do");
  const docRef = doc(noteRef, id);
  const dateTime = serverTimestamp();
  try {
    await setDoc(docRef, {
      id: id,
      note: note,
      timestamp: dateTime,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
//獲取
async function getDb(setData) {
  const q = query(collection(db, "to-do"), orderBy("timestamp", "asc")); //搜尋
  const querySnapshot = await getDocs(q);
  setData(querySnapshot.docs.map((res) => res.data()));
}
//刪除
async function delDb(id) {
  await deleteDoc(doc(db, "to-do", id));
}
export { db as default, getDb, addDb, delDb };
