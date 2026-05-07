# tershar-relay-web-app

Browser client for `tershar`.

This app connects to terminal sharing sessions using a session code and renders the live terminal inside the browser.

---

## Features

- Browser-based terminal access
- Real-time terminal rendering
- Session code joining
- Terminal input forwarding
- Resize synchronization

---

## Tech Stack

- React / Vite
- xterm.js
- WebSocket (`ws`)

---

## Installation

```bash
npm install
````

---

## Run Locally

```bash
npm run dev
```

---

## How It Works

1. User enters session code
2. Web app connects to relay service
3. Terminal output streams live
4. User input is sent back to host terminal

---

## Architecture

```text
Browser Terminal
      ↓
xterm.js
      ↓
WebSocket Relay
      ↓
CLI Host Terminal
```

---

## Example Flow

Join session:

```text
Enter Code: 482193
```

Connected terminal appears instantly.

---

## Current Status

✅ Working

* Terminal rendering
* Live input/output sync
* Session joining
* WebSocket communication

🚧 Planned

* WebRTC browser transport
* Better UI/UX
* Mobile responsiveness
* Multiple viewers
* Read-only mode

---

## Related Repositories

* Relay Service:
  [https://github.com/K12-K/tershar-relay-service](https://github.com/K12-K/tershar-relay-service)

* CLI Tool:
  [https://github.com/K12-K/tershar-relay-cli-tool](https://github.com/K12-K/tershar-relay-cli-tool)

---

## Future Vision

The long-term goal is a zero-config terminal sharing experience:

```bash
tershar
```

Share code → open browser → connected instantly.

No SSH setup.
No port forwarding.
Eventually peer-to-peer.

---

## License

MIT

---
