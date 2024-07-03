import { AuditModel } from "./audit.model";
import { ActivityModel } from "./activity.model";
import { InventoryTypeModel } from "./inventory-type.model";
import { TicketTypeModel } from "./ticket-type.model";
import { UserModel } from "./user.model";

export class TicketModel{
    id: string;
    name:string;
    description:string;
    type:TicketTypeModel;
    responsible:UserModel;
    audit:AuditModel;
    activities:ActivityModel[];
    inventories:InventoryTypeModel[];
}