import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

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
const statusEl = document.createElement("p");
form.parentNode.insertBefore(statusEl, form.nextSibling);
form.addEventListener("submit", async (e) => {
  e.preventDefault();

const userID = document.getElementById("userID").value.trim();
const wordDay = document.getElementById("wordDay").value.trim();
const songDay = document.getElementById("songDay").value.trim();
const dev = document.getElementById("dev").value.trim();
const thoughts = document.getElementById("thoughts").value.trim();
const stressors = document.getElementById("stressors").value.trim();
const contact = document.getElementById("contact").value.trim();
const ships = document.getElementById("ships").value.trim();
const fics = document.getElementById("fics").value.trim();
const captions = document.getElementById("captions").value.trim();
const quotes = document.getElementById("quotes").value.trim();
const mvp = document.getElementById("mvp").value.trim();
const lvp = document.getElementById("lvp").value.trim();
const vip = document.getElementById("vip").value.trim();
const vent = document.getElementById("vent").value.trim();

async function loadMessages() {
  const list = document.getElementById("messagesList");
  list.innerHTML = "";
  const submissionsRef = collection(db, "responses", userID, "submissions");
  const snapshot = await getDocs(submissionsRef);

  snapshot.forEach(doc => {
    const data = doc.data();
    const date = data.submittedAt ? data.submittedAt.toDate() : null;
    const formattedDate = date
      ? date.toLocaleString("en-US", { month:"short", day:"numeric", year:"numeric", hour:"numeric", minute:"2-digit", hour12:true })
      : "No date";

    const li = document.createElement("li");
    li.textContent = `Word: ${data.wordDay}, Song: ${data.songDay}, Thoughts: ${data.thoughts} — Submitted: ${formattedDate}`;
    list.appendChild(li);
  });
}
if (!userId) { 
  statusEl.textContent = "pleeeeease enter a valid ID."; 
  statusEl.className = "error"; 
  return; 
}
try {
      const submissionsRef = collection(db, "responses", userID, "submissions");
      await addDoc(submissionsRef, {
        wordDay,
        songDay,
        dev,
        thoughts,
        stressors,
        contact,
        ships,
        fics,
        captions,
        quotes,
        mvp,
        lvp,
        vip,
        vent,
        submittedAt: serverTimestamp()
      });
  statusEl.textContent = submission saved for ID: ${userId};
  statusEl.className = "success";
  form.reset();
  loadMessages(userID);
} catch (err) {
  console.error("data could not be saved:", err);
  statusEl.textContent = "failed to save, please try again.";
  statusEl.className = "error";
}
loadMessages();
