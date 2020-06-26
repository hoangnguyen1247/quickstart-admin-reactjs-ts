
export interface IStaff {
    id: string,
}

export class Serive {
    
    id: string;

    constructor(entityDto?: IStaff) {
        this.id = entityDto ? entityDto.id : "";
    }
}

export function ServiceList(entityDtoList: Serive[] = []) {
    const _entityListDto: Serive[] = [];

    entityDtoList.forEach((item) => {
        _entityListDto.push(new Serive(item));
    });

    return _entityListDto;
}
