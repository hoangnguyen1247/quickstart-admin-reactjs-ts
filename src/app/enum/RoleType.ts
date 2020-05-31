export enum RoleType {
    Manager = "manager",
}

export const AllRoleTypes = Object.keys(RoleType).map(key => RoleType[key]);
