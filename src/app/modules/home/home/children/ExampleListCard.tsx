import React from "react";
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';

import { arrayMove } from "src/app/utils/ArrayUtils";

type Props = {
    items: any[],
    useDragHandle?: boolean,
};

const defaultProps = {
    useDragHandle: false,
}

const fieldsReducer = (state, action) => {
    return {
        ...state,
        ...action,
    };
}

export function ExampleListCard({
    items,
    useDragHandle,
}: Props) {

    const [ fields, dispatchFields ] = React.useReducer(fieldsReducer, {
        items: items,
    });

    const onSortEnd = ({ oldIndex, newIndex }) => {
        dispatchFields({ items: arrayMove(fields.items, oldIndex, newIndex) });
    }

    const DragHandle = SortableHandle(() => <span>::</span>);

    const SortableItem = SortableElement(({value}) => {
        return (
            <li className="list-group-item">
                {useDragHandle && <DragHandle />}
                {value}
            </li>
        )
    })
 
    const SortableList = SortableContainer(({items}) => {
        return (
            <ul>
                {items.map((item, index) => (
                    <SortableItem key={`item-${item.value}`} index={index} value={item.value} />
                ))}
            </ul>
        );
    });

    if (useDragHandle) {
        return (
            <SortableList 
                items={fields.items} 
                useDragHandle
                onSortEnd={onSortEnd} 
            />
        )
    }

    return (
        <SortableList 
            items={fields.items} 
            onSortEnd={onSortEnd} 
        />
    )
}

ExampleListCard.defaultProps = defaultProps;
