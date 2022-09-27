import { FlowObject } from "./FlowObject";
import { FlowProject } from "./FlowProject";
import { Action } from "./Action";
import { BehaviourOperations } from "../../ORMCommands/behaviour"

export class FlowBehaviour
{
    public TypeOfTrigger: string;
  public Id: string;
  public ChainOwner: string;
    public TriggerObjectId: string;
    public TargetObjectId: string;
    public Action : any;
    public NextBehaviour: Array<string>;
    public ProjectId: string;

    constructor(Behaviour: any)
    {
        console.log(Behaviour)
        this.TypeOfTrigger = Behaviour.TypeOfTrigger;
        this.Id = Behaviour.Id;
        this.TriggerObjectId = Behaviour.TriggerObjectId;
        this.TargetObjectId = Behaviour.TargetObjectId;
        this.Action = Behaviour.Action;
        this.NextBehaviour = Behaviour.NextBehaviour;
        this.ProjectId = Behaviour.ProjectId
        this.ChainOwner = Behaviour.ChainOwner ?? Behaviour.Id
    }

    /**
     * Update the properties of a behaviour
     * @param newBehaviour the new data
     */
    public UpdateProperties(newBehaviour: FlowBehaviour)
    {
        console.log(newBehaviour)
        this.TypeOfTrigger = newBehaviour.TypeOfTrigger;
        this.Id = newBehaviour.Id;
        this.TriggerObjectId = newBehaviour.TriggerObjectId;
        this.TargetObjectId = newBehaviour.TargetObjectId;
        this.Action = newBehaviour.Action;
        this.NextBehaviour = newBehaviour.NextBehaviour;
        this.ProjectId = newBehaviour.ProjectId
    }

}