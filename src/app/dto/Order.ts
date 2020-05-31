
export interface IOrder {
    id: string,
}

export class Order {
    
    id: string;

    constructor(entityDto?: IOrder) {
        this.id = entityDto ? entityDto.id : "";
    }
}

export function OrderList(entityDtoList: Order[] = []) {
    const _entityListDto: Order[] = [];

    entityDtoList.forEach((item) => {
        _entityListDto.push(new Order(item));
    });

    return _entityListDto;
}
