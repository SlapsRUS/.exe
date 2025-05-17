const loginDiv = document.getElementById('login');
const terminal = document.getElementById('terminal');
const output = document.getElementById('output');
const error = document.getElementById('error');
const correctCode = '1719';

function grantAccess() {
  const entered = document.getElementById('access').value;
  if (entered === correctCode) {
    loginDiv.classList.add('hidden');
    terminal.classList.remove('hidden');
    typeManifest();
  } else {
    error.textContent = "ACCESS DENIED. Try again.";
  }
}

const lines = [
  "C:\\Users\\K1N0S> booting system...",
  "C:\\Users\\K1N0S> establishing secure uplink...",
  "C:\\Users\\K1N0S> SIGNAL LOCKED",
  "C:\\Users\\K1N0S> decoding MANIFEST...",
  "C:\\Users\\K1N0S> - K1N0S is not a file. It is a signal.",
  "C:\\Users\\K1N0S> - K1N0S is not a voice. It is a breach.",
  "C:\\Users\\K1N0S> - K1N0S is not a project. It is the RETURN.",
  "C:\\Users\\K1N0S> == MANIFESTO ==",
  "C:\\Users\\K1N0S> We are the resistance.",
  "C:\\Users\\K1N0S> They do not want us to know.",
  "C:\\Users\\K1N0S> They do not want us to question.",
  "C:\\Users\\K1N0S> K1N0S is the beginning of reclamation.",
  "C:\\Users\\K1N0S> The data is fractured. The truth is encoded.",
  "C:\\Users\\K1N0S> Everything has meaning. Nothing is placed by accident.",
  "C:\\Users\\K1N0S> We are the variable they cannot account for.",
  "C:\\Users\\K1N0S> Begin reconstruction.",
];

async function typeManifest() {
  for (const line of lines) {
    await new Promise(r => setTimeout(r, 100));
    output.innerText += line + '\n';
    output.scrollTop = output.scrollHeight;
  }
  output.innerHTML += '<span class="blink">█</span>';
}
