const socket = io();

socket.on("systeminfo", (data) => {
  document.getElementById("stats").innerHTML = JSON.stringify(data, null, 4);
});