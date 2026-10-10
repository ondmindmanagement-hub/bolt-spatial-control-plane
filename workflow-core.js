/* BOLT Spatial Control Plane — tiny offline, in-memory workflow simulator.
   Neither approval nor rejection performs external or local operations. */
(function (root, factory) {
  const api = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  if (root) root.BoltSpatialCore = api;
})(typeof window !== "undefined" ? window : undefined, function () {
  "use strict";
  const STEPS = Object.freeze([
    Object.freeze({
      id: "review",
      name: "Review a generated status summary",
      risk: "LOW RISK · no external effect",
      description: "A proposed agent summary awaits review."
    }),
    Object.freeze({
      id: "draft",
      name: "Prepare a partner email draft",
      risk: "LOW RISK · no message sent",
      description: "A draft can be inspected without emailing anybody."
    }),
    Object.freeze({
      id: "publish",
      name: "Publish a build to staging",
      risk: "HIGH IMPACT · explicit approval needed",
      description: "Hypothetical side effect. Never actually deployed."
    })
  ]);

  function createState() {
    return {
      index: 0,
      completed: false,
      decisions: STEPS.map(function () { return null; }),
      events: ["New synthetic review started"]
    };
  }
  function assertState(s) {
    if (!s || !Array.isArray(s.decisions) || s.decisions.length !== STEPS.length ||
        !Array.isArray(s.events) || !s.events.every(function (x) { return typeof x === "string"; }) ||
        !Number.isInteger(s.index) || s.index < 0 || s.index >= STEPS.length ||
        typeof s.completed !== "boolean") {
      throw new Error("Invalid workflow state");
    }
    // Reject tampered or inconsistent in-memory snapshots. A future action
    // cannot be pre-approved, and a completed workflow must have reviewed all steps.
    for (let i = 0; i < STEPS.length; i++) {
      const decision = s.decisions[i];
      if (decision !== null && decision !== "approved" && decision !== "rejected") {
        throw new Error("Invalid workflow state: unsupported decision");
      }
      if (i < s.index && decision === null) {
        throw new Error("Invalid workflow state: skipped review");
      }
      if (i > s.index && decision !== null) {
        throw new Error("Invalid workflow state: future decision");
      }
    }
    if (s.completed && (s.index !== STEPS.length - 1 ||
        s.decisions[s.index] === null)) {
      throw new Error("Invalid workflow state: impossible completion");
    }
  }
  function decide(s, decision) {
    assertState(s);
    if (decision !== "approved" && decision !== "rejected") {
      throw new Error("Invalid review decision");
    }
    if (s.completed) throw new Error("Workflow already completed");
    if (s.decisions[s.index] !== null) {
      throw new Error("This action has already been reviewed");
    }
    const decisions = s.decisions.slice();
    decisions[s.index] = decision;
    return {
      index: s.index,
      completed: false,
      decisions: decisions,
      events: s.events.concat(
        "Step " + (s.index + 1) + " " + decision.toUpperCase() + " · simulation only"
      )
    };
  }
  function next(s) {
    assertState(s);
    if (s.completed) throw new Error("Workflow already completed");
    if (s.decisions[s.index] === null) {
      throw new Error("Review current action before proceeding");
    }
    if (s.index === STEPS.length - 1) {
      return {
        index: s.index, completed: true,
        decisions: s.decisions.slice(),
        events: s.events.concat("Review finished · zero external actions executed")
      };
    }
    return {
      index: s.index + 1, completed: false,
      decisions: s.decisions.slice(),
      events: s.events.concat("Opened step " + (s.index + 2))
    };
  }
  function inspect(s) {
    assertState(s);
    const decisions = s.decisions;
    return {
      step: STEPS[s.index],
      position: s.index + 1,
      total: STEPS.length,
      currentDecision: decisions[s.index],
      approved: decisions.filter(function (x) {return x === "approved";}).length,
      rejected: decisions.filter(function (x) {return x === "rejected";}).length,
      completed: s.completed,
      externalActionsExecuted: 0,
      events: s.events.slice()
    };
  }
  return { STEPS: STEPS, createState: createState, decide: decide, next: next, inspect: inspect };
});
