function listParticipants() {
  let count = Number(prompt("Enter the number of participants:"));
  let participants = [];
  for (let i = 0; i < count; i++) {
    let student_name = prompt(`Enter the name of participant ${i + 1}:`);
    participants.push(student_name);
  }
  participants.sort();
  let list = document.querySelector("#participantsList");
  for (let i = 0; i < participants.length; i++) {
    let li = document.createElement("li");
    li.textContent = participants[i];
    list.appendChild(li);
  }
}
listParticipants();
