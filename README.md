# BOLT Spatial Control Plane

**Meta VR Start Developer Competition 2026 — Productivity / New Experience**

BOLT Spatial Control Plane is a hands-first spatial review room prototype. A person can see proposed synthetic agent actions, review each one, explicitly approve or reject it, and advance through three steps. This is a standalone simulation in WebXR. There is no connected AI agent, no deployment, no email sending, and no external action can be triggered by approval.

## Current official competition experience: Meta IWSDK

- [Watch actual 37-second Quest 3 IWER emulator recording](./iwsdk-preview/watch.html) — 13 pinch selections, no real Quest hardware tested.

- Preview URL: https://ondmindmanagement-hub.github.io/bolt-spatial-control-plane/iwsdk-preview/
- This is a separate **Meta Immersive Web SDK 1.0.1** build, retaining the same 3-case fictional review idea but using native IWSDK spatial UIKitML controls instead of manually wired A-Frame click logic.
- **Verified on a Quest 3 IWER browser emulator:** hand-tracking enabled, both emulated hands delivered **13 pinch selections** through real spatial UI buttons in two 3-case workflows plus restart; 33 independent UI-state observations, all showing **0 external actions**. Includes eight offline checks and production bundle smoke tests.
- Evidence: [IWER gesture test results](./iwsdk-preview/evidence/quest3-emulated-hands-2026-10-10.json).
- **NOT tested on actual Quest hardware** or independently reviewed. The IWSDK preview and its 37-second Unfire YouTube demo are now the URLs in the verified original Devpost entry. The A-Frame app at the root remains a separate historical alternative. No real AI agent or external action.

## Features added on 10 October 2026

- Complete **three-stage workflow**: review a synthetic status summary, review a draft email, and review a hypothetical staging publication.
- Per-stage APPROVE, REJECT, NEXT, RESET. NEXT remains disabled until the current decision.
- Visible in-memory audit history, approved/rejected counts and a completion screen reporting zero external actions.
- Both-hand A-Frame hand-tracking-control entities with explicit pinchstarted selection handlers, designed for seated and controllerless use. **The pinch selection has not been tested on physical Meta hardware.**
- Accessible desktop preview buttons for examination without VR hardware. Desktop tests are not proof of headset hand-gesture usability.

## Original A-Frame prototype technology

- Static HTML and A-Frame 1.7.1 WebXR. No API credentials, user accounts, backend or data collection.
- index.html: 3D review room, VR controls and desktop fallback.
- workflow-core.js: pure three-stage in-memory review state machine, no side effects.
- test.js: 10 Node automated offline/static tests.
- package.json: npm test; no third-party Node packages.
- MIT license applies to this public hackathon demo only, not private macOS BOLT source.

## Run

Current official HTTPS app: https://ondmindmanagement-hub.github.io/bolt-spatial-control-plane/iwsdk-preview/

Original A-Frame alternative: https://ondmindmanagement-hub.github.io/bolt-spatial-control-plane/

Or locally:

    npm test
    python3 -m http.server 8000

Open http://localhost:8000 for desktop preview. For immersive mode use an appropriate HTTPS browser/device. On supported headset, enter VR, point either tracked hand toward a spatial button and pinch. The physical hand behavior remains UNVERIFIED until a headset/emulator run succeeds. Desktop users can click or focus the fallback buttons.

## Verified status as of 10 October 2026

- Meta emailed the successful Start Program welcome on 6 October 2026; Devpost separately confirmed the submission of BOLT Spatial Control Plane on 6 October. This entry is already submitted; do not duplicate.
- Offline Node checks: 10/10 passing.
- Separate headless Chrome desktop-browser smoke test: three-step approve/reject flow, guarding out-of-order controls, completion and restart passed.
- NOT verified: real Quest hand tracking, gesture ray direction, comfort/readability, performance or acceptance by Meta judges.
- The existing Devpost entry now embeds https://www.youtube.com/watch?v=2__3mL0cMa0 (37-second IWER hand-emulator evidence, publicly visible on Unfire). The older https://www.youtube.com/watch?v=8mLCE7odHYM is historical and no longer submitted.

## Competition

- Track: Productivity. Division: New Experience. Special award of interest: Best Agentic Interaction (not assured).
- Deadline: 18 November 2026, noon PST = 21:00 Madrid (CET).
- Rules: https://start-developer-competition-26.devpost.com/rules
- Already submitted: https://devpost.com/software/bolt-spatial-control-plane

The project was created within the contest window. This is AI-assisted code and writing, not a production-certified enterprise product, deployed robotic controller or paid customer solution.

Unfire · https://unfire.technology · hello@unfire.technology
