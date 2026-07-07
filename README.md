# Self-Healing Cloud Operations

## Overview

This repository contains the operating model for self-healing cloud operations, auto-remediation, and resilient incident response.

It focuses on event correlation, remediation workflows, automation governance, and operational resilience.
It is intended to help teams automate recovery safely, with validation and human oversight where needed.
The goal is not just faster remediation, but a more predictable operating posture across incidents, automation, and learning loops.

## Why It Matters

Cloud operations become stronger when recovery is partially automated and governed.

This repository helps teams define and manage:

- auto-remediation workflows
- incident correlation models
- remediation validation
- automation governance
- operational resilience
- self-healing playbooks
- validation discipline
- recovery learning loops
- safe automation design
- reduced manual recovery effort
- clearer ownership for automated actions
- stronger evidence for post-incident review

## Content Model

This repository works best when the pages are grouped into three layers:

- strategy and operating guidance
- workflows and automation models
- templates, dashboards, and research notes

## How To Use This Repo

1. Read the framework overview and self-healing strategy.
2. Review the governance model before introducing automation.
3. Use the workflow maps and playbooks to operationalize remediation.
4. Apply the templates to review automation safely.
5. Track outcomes in the dashboard and research notes.
6. Keep terminology consistent across workflows, templates, and dashboards.
7. Review which recovery actions are safe to automate and which need approval.

## Core Content

- [Self-Healing Workflow Map](automation-models/self-healing-workflow-map.md)
- [Framework Overview](docs/framework-overview.md)
- [Self-Healing Strategy](docs/self-healing-strategy.md)
- [AI-Assisted Remediation](docs/ai-assisted-remediation.md)
- [Incident Remediation](docs/incident-remediation.md)
- [Operational Resilience](docs/operational-resilience.md)
- [Automation Governance](docs/automation-governance.md)

## Automation Models

- [Event Correlation Model](automation-models/event-correlation-model.md)
- [Incident Classification Model](automation-models/incident-classification-model.md)
- [Remediation Workflow](automation-models/remediation-workflow.md)

## Playbooks and Workflows

- [Auto-Remediation Playbook](playbooks/auto-remediation-playbook.md)
- [Self-Healing Playbook](playbooks/self-healing-playbook.md)
- [Auto-Remediation Workflow](workflows/auto-remediation-workflow.md)
- [Incident Response Workflow](workflows/incident-response-workflow.md)

## Templates

- [Automation Review Template](templates/automation-review-template.md)
- [Operational Health Template](templates/operational-health-template.md)
- [Remediation Validation Template](templates/remediation-validation-template.md)

## References

- [Bibliography](references/bibliography.md)
- [Research Roadmap](evidence/research-roadmap.md)
- [Research Links](publications/research-links.md)

## Operating Principle

Automation should reduce recovery time without hiding risk or making failures harder to understand.
Every automated action should be observable, reversible where practical, and validated against a known outcome.

## Ecosystem Links

- [MCGR-Framework](../MCGR-Framework/README.md)
- [Predictive Reliability Models](../predictive-reliability-models/README.md)
- [AI-Driven Observability Framework](../ai-driven-observability-framework/README.md)
- [SRE Reliability Models](../sre-reliability-models/README.md)

## Executive Takeaway

Use this repo when your operations team needs faster recovery without losing control.
It helps answer:

- What should auto-remediate?
- What must still require human review?
- How do we prove the action was safe and effective?
