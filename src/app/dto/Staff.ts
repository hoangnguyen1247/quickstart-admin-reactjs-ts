
export interface IStaff {
    id: string,
}

export class Staff {
    
    id: string;

    constructor(entityDto?: IStaff) {
        this.id = entityDto ? entityDto.id : "";
    }
}

export function StaffList(entityDtoList: Staff[] = []) {
    const _entityListDto: Staff[] = [];

    entityDtoList.forEach((item) => {
        _entityListDto.push(new Staff(item));
    });

    return _entityListDto;
}
