# Meta VR Start Developer Competition 2026 — Submission Draft

## Project
**BOLT Spatial Control Plane**

## Track
Productivity

## Division
New Experience

## Special Award Target
Best Agentic Interaction

## Build Path
WebXR

## Tagline
A hands-first spatial approval room that keeps consequential AI-agent actions blocked until a human explicitly authorizes them.

## Short Description
BOLT Spatial Control Plane is a new WebXR productivity experience for Meta VR. It turns an agent's proposed workflow into a spatial, hands-first approval room: the user can inspect a consequential action, approve or reject it with hand interaction, and see the resulting decision recorded in an audit trail. The core design separates AI reasoning from execution authority.

## Problem
Agentic systems are increasingly able to plan and execute multi-step workflows. In spatial and productivity environments, giving an agent unrestricted authority can make automation difficult to trust. Users need a clear boundary between what an agent recommends and what it is actually allowed to do.

## Solution
BOLT Spatial Control Plane introduces a governed interaction layer between an AI agent and external actions. The agent proposes a visible plan; low-risk steps can remain bounded, while consequential actions are presented spatially and blocked until the user explicitly approves them. Rejection leaves the action unexecuted and records the decision.

## Hands-first
The immersive prototype is designed around WebXR hand tracking. The core approve/reject interaction does not require a controller.

## Seated-first
The approval surface sits directly in front of the user and is designed to be usable within a small stationary area.

## What is new
This is a new spatial experience created during the 2026 competition window. It is not a repackaged version of the existing BOLT desktop product. It applies the governed-execution concept to a hands-first WebXR interaction model with a newly built spatial interface.

## Prototype
https://ondmindmanagement-hub.github.io/bolt-spatial-control-plane/

## Source
https://github.com/ondmindmanagement-hub/bolt-spatial-control-plane

## Current Demonstrated Flow
1. Present a proposed consequential action.
2. Keep execution in a pending/blocked state.
3. Let the user approve or reject spatially.
4. Record the explicit human decision.
5. Surface the resulting approved or blocked state.

## Safety / Authority Model
`request → proposed plan → risk boundary → human approval → execution → audit`

## Status
Competition prototype under active development. Not a production deployment system.
