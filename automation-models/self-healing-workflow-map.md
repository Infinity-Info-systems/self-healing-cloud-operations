# Self-Healing Workflow Map

This map turns self-healing concepts into an operational workflow for remediation and automation.
It gives the team one shared route for recovery logic, so automation decisions are easier to govern and improve.

## Purpose

Use this map to link incident detection, automated response, approval controls, and validation.
Use it to decide where a workflow should remain manual and where automation is justified.

## Workflow Stages

### 1. Detect

- anomaly or incident identification
- event correlation
- severity classification

### 2. Decide

- determine if automation is allowed
- identify remediation path
- confirm approval or guardrail requirements

### 3. Remediate

- execute automated action
- restart, scale, or reconfigure as needed
- capture action metadata
- keep manual override available

### 4. Validate

- confirm service recovery
- check success criteria
- reopen if remediation failed

### 5. Learn

- record outcome
- update automation rules
- identify tuning opportunities

## Example Workflow View

| Trigger | Automation | Validation |
| --- | --- | --- |
| Service degradation | Restart or scale action | Health check passes |
| Queue saturation | Rebalance workers | Queue depth normalizes |
| Failed dependency | Fallback path | User flow restored |
| Alert storm | Suppress and aggregate | Noise reduced |

## Recommended Actions

- keep automation bounded by guardrails
- require validation after every automated action
- track manual override cases
- review workflow outcomes regularly
- keep the map aligned with the governed automation catalog

## Outcome

The map helps teams move faster by making every recovery path explicit, measurable, and easier to review.

## Related Artifacts

- [Self-Healing Strategy](../docs/self-healing-strategy.md)
- [Automation Governance](../docs/automation-governance.md)
- [Incident Response Workflow](../workflows/incident-response-workflow.md)
- [Auto-Remediation Workflow](../workflows/auto-remediation-workflow.md)
