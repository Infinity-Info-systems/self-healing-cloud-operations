# Automation Governance

## Purpose

Automation governance ensures remediation automation is controlled, observable, and accountable.
It keeps recovery automation useful without allowing unsafe or unreviewed actions to spread.

## Governance Practices

- define automation ownership
- review approved actions regularly
- require validation after automation
- track manual overrides
- keep exception handling visible
- define rollback expectations
- limit high-risk automation by default

## Use

Use this page before any remediation workflow moves into production.

## Governance Questions

- who approves automation?
- what actions are allowed?
- what validation is required?
- how are failures reviewed?
- who owns the automation after release?
- how do we know the action still behaves as expected?

## Evidence To Collect

- automation inventory
- approval records
- override logs
- review notes

## Governance Outcome

Governance should make automation safer to use and easier to trust, not harder to operate.
It should also make it obvious when a workflow needs to be revised or turned back into a manual step.
