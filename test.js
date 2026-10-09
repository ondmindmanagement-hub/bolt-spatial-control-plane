/* Automated desktop/offline tests for simulator state; not a headset interaction test. */
"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const core = require("./workflow-core.js");

let passed = 0;
function test(name, fn) {
  fn();
  passed++;
  console.log("PASS " + name);
}
test("initial blocked three-step workflow", function () {
  const s=core.createState(), x=core.inspect(s);
  assert.equal(x.total,3);
  assert.equal(x.position,1);
  assert.equal(x.currentDecision,null);
  assert.equal(x.externalActionsExecuted,0);
  assert.throws(function(){core.next(s);},/Review current/);
});
test("approved simulation advances without executing",function(){
  const s=core.createState(), d=core.decide(s,"approved"), n=core.next(d);
  assert.equal(s.decisions[0],null);
  assert.equal(d.decisions[0],"approved");
  assert.equal(n.index,1);
  assert.equal(core.inspect(n).externalActionsExecuted,0);
});
test("rejection is recorded and the user may continue",function(){
  const d=core.decide(core.createState(),"rejected");
  assert.equal(core.inspect(d).rejected,1);
  assert.equal(core.next(d).index,1);
});
test("duplicate decisions forbidden",function(){
  const d=core.decide(core.createState(),"approved");
  assert.throws(function(){core.decide(d,"rejected");},/already been reviewed/);
});
test("invalid decisions rejected",function(){
  assert.throws(function(){core.decide(core.createState(),"ignore");},/Invalid review decision/);
});
test("all three steps can complete with mixed decisions",function(){
  let s=core.createState();
  s=core.next(core.decide(s,"approved"));
  s=core.next(core.decide(s,"rejected"));
  s=core.decide(s,"approved");
  assert.equal(s.completed,false);
  s=core.next(s);
  const report=core.inspect(s);
  assert.equal(report.completed,true);
  assert.equal(report.approved,2);
  assert.equal(report.rejected,1);
  assert.equal(report.externalActionsExecuted,0);
  assert.throws(function(){core.next(s);},/already completed/);
  assert.throws(function(){core.decide(s,"approved");},/already completed/);
});
test("restart constructs independent, empty state",function(){
  const changed=core.decide(core.createState(),"approved");
  const fresh=core.createState();
  assert.equal(core.inspect(fresh).approved,0);
  assert.equal(core.inspect(changed).approved,1);
  assert.equal(fresh.events.length,1);
});
test("invalid or manipulated state rejected",function(){
  assert.throws(function(){core.inspect({index:99,decisions:[],events:[],completed:false});},/Invalid workflow state/);
});
test("all three proposals are explicitly hypothetical",function(){
  assert.deepEqual(core.STEPS.map(function(s){return s.id;}),["review","draft","publish"]);
  assert.match(core.STEPS[2].description,/Never actually deployed/);
});
test("VR HTML includes two pinch listeners and no autonomous side-effect code",function(){
  const html=fs.readFileSync(path.join(__dirname,"index.html"),"utf8");
  assert.match(html,/pinchstarted/);
  assert.match(html,/id="leftHand"/);
  assert.match(html,/id="rightHand"/);
  assert.match(html,/command:next/);
  assert.match(html,/command:restart/);
  assert.match(html,/workflow-core\.js/);
  assert.doesNotMatch(html,/fetch\(|XMLHttpRequest|localStorage|sendBeacon/);
});
console.log(passed+"/"+passed+" offline tests passed; Quest hand tracking must still be verified on real hardware.");
