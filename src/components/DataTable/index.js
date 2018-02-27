import React from 'react';

const style1 = {
    width: '100%',
}
const style2 = {
    width: '3.75rem',
}
const style3 = {
    width: '2rem',
}
const style4 = {
    width: '3.25rem',
}
const style5 = {
    width: '8.75rem',
}



export default class DataTable extends React.Component {
    render() {
        return (
            <div className="slds-table_edit_container slds-is-relative">
                <table className="slds-table slds-table_bordered slds-table_resizable-cols slds-table_fixed-layout slds-no-cell-focus slds-table_edit slds-table_striped slds-table_col-bordered" role="grid" style={style1}>
                    <thead>
                        <tr className="slds-line-height_reset">
                            <th scope="col" style={style2}>
                                <div className="slds-th__action">
                                    <span className="slds-assistive-text">Errors</span>
                                </div>
                            </th>
                            <th scope="col" style={style3}>
                                <div className="slds-th__action slds-th__action_form">
                                    <span className="slds-checkbox">
                                        <input type="checkbox" name="options" id="checkbox-205" tabIndex="-1" value="on" />
                                        <label className="slds-checkbox__label" htmlFor="checkbox-205">
                                            <span className="slds-checkbox_faux"></span>
                                            <span className="slds-form-element__label slds-assistive-text">Select All</span>
                                        </label>
                                    </span>
                                </div>
                            </th>
                            <HeaderCell name="Name" />
                            <HeaderCell name="Account Name" />
                            <HeaderCell name="Close Date" />
                            <HeaderCell name="Stage" />
                            <HeaderCell name="Confidence" />
                            <HeaderCell name="Amount" />
                            <HeaderCell name="Contact" />
                            <th scope="col" style={style4}>
                                <div className="slds-th__action">
                                    <span className="slds-assistive-text">Actions</span>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="slds-hint-parent">
                            <td className="slds-cell-error slds-cell-edit" role="gridcell">
                                <button id="error-01" className="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabIndex="-1" title="Item 1 has errors">
                                    <svg className="slds-button__icon" aria-hidden="true">
                                        <use xlinkHref="/icons/utility-sprite/svg/symbols.svg#warning" />
                                    </svg>
                                    <span className="slds-assistive-text">Item 1 has errors</span>
                                </button>
                                <span className="slds-row-number slds-text-body_small slds-text-color_weak"></span>
                            </td>
                            <td className="slds-cell-edit" role="gridcell">
                                <span className="slds-checkbox">
                                    <input type="checkbox" name="options" id="checkbox-01" tabIndex="-1" value="on" />
                                    <label className="slds-checkbox__label" htmlFor="checkbox-01">
                                        <span className="slds-checkbox_faux"></span>
                                        <span className="slds-form-element__label slds-assistive-text">Select item 1</span>
                                    </label>
                                </span>
                            </td>
                            <th className="slds-cell-edit" scope="row" tabIndex="0">
                                <span className="slds-grid slds-grid_align-spread">
                                    <a href="javascript:void(0);" className="slds-truncate" id="link-01" tabIndex="-1" title="Acme - 1,200 Widgets">
                                        Acme - 1,200 Widgets
                                    </a>
                                    <button className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabIndex="-1" title="Edit Name: Item 1">
                                        <svg className="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                                            <use xlinkHref="/icons/utility-sprite/svg/symbols.svg#edit" />
                                        </svg>
                                        <span className="slds-assistive-text">Edit Name: Item 1</span>
                                    </button>
                                </span>
                            </th>
                            <RowCell value="Acme" editLabel="Edit..." />
                            <RowCell value="4/10/15" editLabel="Edit..." />
                            <RowCell value="Value proposition" editLabel="Edit..." />
                            <RowCell value="30%" editLabel="Edit..." />
                            <RowCell value="25.000.000" editLabel="Edit..." />
                            <RowCell value="pcmela@gmail.com" editLabel="Edit..." />
                            <td className="slds-cell-edit" role="gridcell">
                                <button className="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" tabIndex="-1" title="Show More">
                                    <svg className="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
                                        <use xlinkHref="/icons/utility-sprite/svg/symbols.svg#down" />
                                    </svg>
                                    <span className="slds-assistive-text">Show More</span>
                                </button>
                            </td>
                        </tr>
                        <tr className="slds-hint-parent">
                            <td className="slds-cell-error slds-cell-edit" role="gridcell">
                                <button id="error-01" className="slds-button slds-button_icon slds-button_icon-error slds-m-horizontal_xxx-small slds-hidden" aria-hidden="true" tabIndex="-1" title="Item 1 has errors">
                                    <svg className="slds-button__icon" aria-hidden="true">
                                        <use xlinkHref="/icons/utility-sprite/svg/symbols.svg#warning" />
                                    </svg>
                                    <span className="slds-assistive-text">Item 1 has errors</span>
                                </button>
                                <span className="slds-row-number slds-text-body_small slds-text-color_weak"></span>
                            </td>
                            <td className="slds-cell-edit" role="gridcell">
                                <span className="slds-checkbox">
                                    <input type="checkbox" name="options" id="checkbox-01" tabIndex="-1" value="on" />
                                    <label className="slds-checkbox__label" htmlFor="checkbox-01">
                                        <span className="slds-checkbox_faux"></span>
                                        <span className="slds-form-element__label slds-assistive-text">Select item 1</span>
                                    </label>
                                </span>
                            </td>
                            <th className="slds-cell-edit" scope="row" tabIndex="0">
                                <span className="slds-grid slds-grid_align-spread">
                                    <a href="javascript:void(0);" className="slds-truncate" id="link-01" tabIndex="-1" title="Acme - 1,200 Widgets">
                                        Acme - 1,200 Widgets
                                    </a>
                                    <button className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabIndex="-1" title="Edit Name: Item 1">
                                        <svg className="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                                            <use xlinkHref="/icons/utility-sprite/svg/symbols.svg#edit" />
                                        </svg>
                                        <span className="slds-assistive-text">Edit Name: Item 1</span>
                                    </button>
                                </span>
                            </th>
                            <RowCell value="Acme" editLabel="Edit..." />
                            <RowCell value="4/10/15" editLabel="Edit..." />
                            <RowCell value="Value proposition" editLabel="Edit..." />
                            <RowCell value="30%" editLabel="Edit..." />
                            <RowCell value="25.000.000" editLabel="Edit..." />
                            <RowCell value="pcmela@gmail.com" editLabel="Edit..." />
                            <td className="slds-cell-edit" role="gridcell">
                                <button className="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" tabIndex="-1" title="Show More">
                                    <svg className="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
                                        <use xlinkHref="/icons/utility-sprite/svg/symbols.svg#down" />
                                    </svg>
                                    <span className="slds-assistive-text">Show More</span>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

function HeaderCell(props){
    return (
        <th aria-sort="none" className="slds-is-sortable slds-is-resizable slds-text-title_caps" aria-label="Name" scope="col" style={style5}>
            <a className="slds-th__action slds-text-link_reset" href="javascript:void(0);" role="button" tabIndex="-1">
                <span className="slds-assistive-text">Sort by: </span>
                <span className="slds-truncate" title="Name">{props.name}</span>
                <div className="slds-icon_container">
                    <svg className="slds-icon slds-icon_x-small slds-icon-text-default slds-is-sortable__icon" aria-hidden="true">
                        <use  xlinkHref="/icons/utility-sprite/svg/symbols.svg#arrowdown" />
                    </svg>
                </div>
            </a>
            <span className="slds-assistive-text" aria-live="assertive" aria-atomic="true">Sorted none</span>
            <div className="slds-resizable">
                <input type="range" min="20" max="1000" aria-label="Name column width" className="slds-resizable__input slds-assistive-text" id="cell-resize-handle-351" tabIndex="-1" />
                <span className="slds-resizable__handle">
                    <span className="slds-resizable__divider"></span>
                </span>
            </div>
        </th>
    );
}

function RowCell(props){
    return (
        <td className="slds-cell-edit" role="gridcell">
            <span className="slds-grid slds-grid_align-spread">
                <span className="slds-truncate" title="Acme">{props.value}</span>
                <button className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" tabIndex="-1" title="{props.editLabel}">
                    <svg className="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true">
                        <use xlinkHref="/icons/utility-sprite/svg/symbols.svg#edit" />
                    </svg>
                    <span className="slds-assistive-text">{props.editLabel}</span>
                </button>
            </span>
        </td>
    );
}