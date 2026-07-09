export type SelfHealingStage =
  | "detect"
  | "decide"
  | "remediate"
  | "validate"
  | "learn";

export type SelfHealingWorkflow = {
  id: string;
  name: string;
  trigger: string;
  stage: SelfHealingStage;
  automation: string;
  validation: string;
  owner: string;
  guardrails: string[];
  telemetry: string[];
};

export const selfHealingWorkflows: SelfHealingWorkflow[] = [
  {
    id: "service-degradation-restart",
    name: "Service Degradation Restart",
    trigger: "Service health degrades and the restart path is safe.",
    stage: "remediate",
    automation: "Restart the impacted service instance.",
    validation: "Health check returns to green and request volume recovers.",
    owner: "Service owner",
    guardrails: [
      "Rollback remains available",
      "Manual override remains visible",
      "Action is logged before execution",
    ],
    telemetry: ["Availability", "Error rate", "Health check pass rate"],
  },
  {
    id: "queue-saturation-rebalance",
    name: "Queue Saturation Rebalance",
    trigger: "Queue depth grows beyond the allowed operating threshold.",
    stage: "remediate",
    automation: "Rebalance workers and scale the queue consumers.",
    validation: "Queue depth normalizes and backlog drains within the target window.",
    owner: "Platform operations lead",
    guardrails: [
      "Scale limits are enforced",
      "Manual approval is available for large changes",
      "Action history is retained",
    ],
    telemetry: ["Queue depth", "Consumer lag", "Processing latency"],
  },
  {
    id: "dependency-fallback-routing",
    name: "Dependency Fallback Routing",
    trigger: "A critical dependency fails but fallback behavior is defined.",
    stage: "decide",
    automation: "Route traffic to the fallback path.",
    validation: "User flow continues and the fallback path is confirmed.",
    owner: "Incident commander",
    guardrails: [
      "Fallback path is pre-approved",
      "Customer impact is monitored",
      "Exit criteria are explicit",
    ],
    telemetry: ["Request success rate", "Fallback usage", "User journey completion"],
  },
  {
    id: "alert-storm-suppression",
    name: "Alert Storm Suppression",
    trigger: "The alert volume exceeds the noise threshold.",
    stage: "detect",
    automation: "Aggregate and suppress duplicate alerts.",
    validation: "The incident view remains readable and primary alerts remain visible.",
    owner: "Observability lead",
    guardrails: [
      "Critical alerts are never suppressed",
      "Suppression windows are short-lived",
      "Suppression decisions are logged",
    ],
    telemetry: ["Alert volume", "Deduplication rate", "Critical alert visibility"],
  },
];

export function getWorkflowStageLabel(stage: SelfHealingStage) {
  switch (stage) {
    case "detect":
      return "Detect";
    case "decide":
      return "Decide";
    case "remediate":
      return "Remediate";
    case "validate":
      return "Validate";
    case "learn":
      return "Learn";
  }
}

export function getSelfHealingStageSummary() {
  return [
    {
      stage: "Detect",
      description: "Identify anomalies and incident signals.",
    },
    {
      stage: "Decide",
      description: "Confirm whether automation is allowed.",
    },
    {
      stage: "Remediate",
      description: "Execute the bounded recovery action.",
    },
    {
      stage: "Validate",
      description: "Confirm the service recovered.",
    },
    {
      stage: "Learn",
      description: "Update the rules and learning loop.",
    },
  ];
}
