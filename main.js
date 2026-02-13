import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBS1wRXTUz4Zh6vJWI4uTtAbWLXNxqF5Gc",
  authDomain: "journal-cd183.firebaseapp.com",
  projectId: "journal-cd183",
  storageBucket: "journal-cd183.firebasestorage.app",
  messagingSenderId: "115747754683",
  appId: "1:115747754683:web:1ade8875f1fb314d5ccf9e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById("messageForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  await addDoc(collection(db, "messages"), { name, message });
  form.reset();
  loadMessages();
});

async function loadMessages() {
  const list = document.getElementById("messagesList");
  list.innerHTML = "";
  const querySnapshot = await getDocs(collection(db, "messages"));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const li = document.createElement("li");
    li.textContent = `${data.name}: ${data.message}`;
    list.appendChild(li);
  });
}

loadMessages();
