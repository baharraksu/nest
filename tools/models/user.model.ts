import { AuditModel } from './audit.model';
import { RoleModel } from './role.model';
import { GroupModel } from './group.model';

export class UserModel{
    id:string;
    name:string;
    surname:string;
    image:string;
    password:string;
    passwordHash:string;
    audit: AuditModel; //Kim tarafından ne zaman oluşturuldu?
    roles:RoleModel[];
    groups:GroupModel[];
}