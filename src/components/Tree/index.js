import React from 'react';

export default function Tree(props){
    return (
        <div className="slds-tree_container" role="application">
        <ul className="slds-tree" role="tree" aria-labelledby="treeheading">
            <TreeItem value="Value 1" />
            <TreeItem value="Value 2" children={true}/>
            <TreeItem value="Value 3" />
            <TreeItem value="Value 4" />
        </ul>
        </div>
    );
}

function TreeItem(props){
    let childrenElement;
    let expanded = false;
    if(props.children){
        expanded = true;
        childrenElement= (
            <ul role="group">
                <li role="treeitem" aria-level="2" aria-selected="false">
                    <div className="slds-tree__item">
                        <button className="slds-button slds-button_icon slds-m-right_x-small slds-is-disabled" aria-hidden="true" tabIndex="-1" title="Expand Tree Item">
                            <svg className="slds-button__icon slds-button__icon_small" aria-hidden="true">
                                <use xlinkHref="/icons/utility-sprite/svg/symbols.svg#chevronright" />
                            </svg>
                            <span className="slds-assistive-text">Expand Tree Item</span>
                        </button>
                        <span className="slds-size_1-of-1">
                            <span className="slds-tree__item-label slds-truncate" title="Tree Item">Tree Item</span>
                        </span>
                    </div>
                </li>
            </ul>
        );
    }

    return (
        <li role="treeitem" aria-expanded={expanded} aria-level="1" tabIndex="0">
            <div className="slds-tree__item">
                <button className="slds-button slds-button_icon slds-button_icon slds-m-right_x-small" aria-hidden="true" tabIndex="-1" title="Expand Tree Item">
                <svg className="slds-button__icon slds-button__icon_small" aria-hidden="true">
                    <use xlinkHref="/icons/utility-sprite/svg/symbols.svg#chevronright" />
                </svg>
                <span className="slds-assistive-text">{props.value}</span>
                </button>
                <span className="slds-size_1-of-1">
                <span className="slds-tree__item-label slds-truncate" title="{props.value}">{props.value}</span>
                </span>
            </div>
            {childrenElement}
        </li>
    );
}