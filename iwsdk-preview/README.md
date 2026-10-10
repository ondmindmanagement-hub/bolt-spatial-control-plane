# Spatial Review Room — current IWSDK contest submission

This is the public build using **Meta Immersive Web SDK 1.0.1** and is now linked from the original updated Devpost competition entry. The separate original A-Frame demo remains at the repository root as an older alternative.

## What is demonstrated
- 3 wholly fictional decisions: review a summary, review an email draft, and a hypothetical staging release
- Spatial **APPROVE / REJECT / NEXT / RESTART** controls, with in-memory decisions only
- Zero external effects; no account, API key, payment, publish operation, real AI agent, client data or external calls

## What is and is not verified
- TypeScript typecheck passed; Vite production build passed
- 8 independent local unit checks passed
- Official IWER Quest 3 browser emulator was operated in immersive VR session mode, with hand-tracking requested; 13 emulated hand-pinch selections activated the real spatial UIKitML buttons in two complete 3-case flows and one restart; 33 read-only state observations recorded, all with externalActions=0
- **NOT tested on physical Quest hardware.** Do not confuse the IWER emulator with a user wearing a Quest or claim measured hand comfort/real-world usability.
- The original Devpost entry was updated 10 October to point to this app and its publicly visible Unfire YouTube demo.

Internal evidence and separate source are saved on the authorized Mac at:
`~/Desktop/Unfire/Competitions/Meta_VR_Start_2026/bolt-spatial-iwsdk-lab/`


## Authentic Quest 3 IWER emulator video, 10 October 2026
- 37-second, 1280x720 H.264 video made from 137 authentic IWER browser screenshots, not an animated recreation.
- Player: https://ondmindmanagement-hub.github.io/bolt-spatial-control-plane/iwsdk-preview/watch.html
- MP4: https://ondmindmanagement-hub.github.io/bolt-spatial-control-plane/iwsdk-preview/demo-quest3-emulated-2026-10-10.mp4
- 13 recorded synthetic hand-pinch controls, two three-case flows, one restart, zero external actions.
- No physical Quest test, no AI agent or actual external system operation. Public official YouTube video: https://www.youtube.com/watch?v=2__3mL0cMa0 ; updated Devpost: https://devpost.com/software/bolt-spatial-control-plane .
- Recording is silent with English graphical annotations; those graphics disclose emulation.
