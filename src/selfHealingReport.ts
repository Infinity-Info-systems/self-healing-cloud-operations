import { selfHealingWorkflows } from "./selfHealingRegistry";

export function buildSelfHealingSummary() {
  return {
    totalWorkflows: selfHealingWorkflows.length,
    stageCounts: selfHealingWorkflows.reduce<Record<string, number>>((acc, workflow) => {
      acc[workflow.stage] = (acc[workflow.stage] ?? 0) + 1;
      return acc;
    }, {}),
    owners: Array.from(new Set(selfHealingWorkflows.map((workflow) => workflow.owner))),
    guardrailCount: selfHealingWorkflows.reduce(
      (sum, workflow) => sum + workflow.guardrails.length,
      0
    ),
  };
}
