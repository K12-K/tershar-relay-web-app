import { Terminal } from "https://cdn.jsdelivr.net/npm/xterm@5.3.0/+esm";

const term = new Terminal({
  cursorBlink: true
});
term.open(document.getElementById("terminal"));
term.write("Welcome!\r\n");
term.focus();

const ws = new WebSocket("ws://localhost:8080");

window.join = function () {
  const code = document.getElementById("code").value;

  ws.send(JSON.stringify({
    type: "join",
    code
  }));
}

ws.onmessage = (msg) => {
  const data = JSON.parse(msg.data);

  if (data.type === "output") {
    term.write(data.data);
  }
};

term.onData((data) => {
  // term.write(data); // 👈 echo locally so you SEE typing

  // ws.send(JSON.stringify({
  //   type: "relay",
  //   payload: { type: "input", data }
  // }));
  ws.send(JSON.stringify({
    type: "relay",
    payload: { type: "input", data: data }
  }));
});