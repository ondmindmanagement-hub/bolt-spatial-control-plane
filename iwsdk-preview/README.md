# BOLT Spatial Control Plane — IWSDK preview (not current contest submission)

This is a separate, public build using **Meta Immersive Web SDK 1.0.1**. The original A-Frame demo remains at the repository root and is still the URL previously entered on Devpost.

## What is demonstrated
- 3 wholly fictional decisions: review a summary, review an email draft, and a hypothetical staging release
- Spatial **APPROVE / REJECT / NEXT / RESTART** controls, with in-memory decisions only
- Zero external effects; no account, API key, payment, publish operation, real AI agent, client data or external calls

## What is and is not verified
- TypeScript typecheck passed; Vite production build passed
- 8 independent local unit checks passed
- Official IWER Quest 3 browser emulator was operated in immersive VR session mode, with hand-tracking requested; 13 emulated hand-pinch selections activated the real spatial UIKitML buttons in two complete 3-case flows and one restart; 33 read-only state observations recorded, all with externalActions=0
- **NOT tested on physical Quest hardware.** Do not confuse the IWER emulator with a user wearing a Quest or claim measured hand comfort/real-world usability.
- This built preview is not yet the project URL or video currently linked in the Meta contest entry.

Internal evidence and separate source are saved on the authorized Mac at:
`~/Desktop/Unfire/Competitions/Meta_VR_Start_2026/bolt-spatial-iwsdk-lab/`
