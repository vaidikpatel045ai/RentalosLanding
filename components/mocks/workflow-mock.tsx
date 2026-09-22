import { InterfaceFrame } from "./interface-frame";
import { WorkflowChain } from "./workflow-chain";

export function WorkflowMock({
  title,
  stages,
  altOutcomes,
}: {
  title: string;
  stages: string[];
  altOutcomes?: string[];
}) {
  return (
    <InterfaceFrame title={title}>
      <WorkflowChain stages={stages} altOutcomes={altOutcomes} />
    </InterfaceFrame>
  );
}
