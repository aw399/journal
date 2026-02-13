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
form.addEventListener("submit", async (e) => {
  e.preventDefault();

const userID = document.getElementById("userID").value.trim;
const wordDay = document.getElementById("wordDay").value.trim;
const songDay = document.getElementById("songDay").value.trim;
const dev = document.getElementById("dev").value.trim;
const thoughts = document.getElementById("thoughts").value.trim;
const stressors = document.getElementById("stressors").value.trim;
const contact = document.getElementById("contact").value.trim;
const ships = document.getElementById("ships").value.trim;
const fics = document.getElementById("fics").value.trim;
const captions = document.getElementById("captions").value.trim;
const quotes = document.getElementById("quotes").value.trim;
const mvp = document.getElementById("mvp").value.trim;
const lvp = document.getElementById("lvp").value.trim;
const vip = document.getElementById("vip").value.trim;
const vent = document.getElementById("vent").value.trim;
  
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
if (!userId) { 
  statusEl.textContent = "pleeeeease enter a valid ID."; 
  statusEl.className = "error"; 
  return; }
try {
  const submissionsRef = collection(db, "responses", userId, "submissions");
  await addDoc(submissionsRef, { q1, q2, q3, submittedAt: serverTimestamp() });
  statusEl.textContent = submission saved for ID: ${userId};
  statusEl.className = "success";
  form.reset();
}
catch (err) {
  console.error("data could not be saved:", err);
  statusEl.textContent = "failed to save, please try again.";
  statusEl.className = "error";
}
loadMessages();
