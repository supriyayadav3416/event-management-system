function addEvent() {
  const name = document.getElementById("eventName").value;
  const date = document.getElementById("eventDate").value;
  const time = document.getElementById("eventTime").value;

  if (!name || !date || !time) {
    alert("Please fill all fields!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = `${name} - ${date} - ${time}`;

  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);
  document.getElementById("eventList").appendChild(li);

  document.getElementById("eventName").value = "";
  document.getElementById("eventDate").value = "";
  document.getElementById("eventTime").value = "";
}
