import React from 'react';

function UtilityBar(props){
  return (
    <footer className="slds-utility-bar_container" aria-label="Utility Bar">
      <h2 className="slds-assistive-text">Utility Bar</h2>
      <ul className="slds-utility-bar">
        <li className="slds-utility-bar__item">
          <button className="slds-button slds-utility-bar__action" aria-pressed="false">
            
            <span className="slds-utility-bar__text">Call</span>
          </button>
        </li>
      </ul>
      <div className="slds-utility-panel slds-grid slds-grid_vertical" role="dialog" aria-labelledby="panel-heading-01">
        <div className="slds-utility-panel__header slds-grid slds-shrink-none">
          <div className="slds-media slds-media_center">
            <div className="slds-media__figure slds-m-right_x-small">
              <span className="slds-icon_container">
              </span>
            </div>
            <div className="slds-media__body">
              <h2 id="panel-heading-01">Call</h2>
            </div>
          </div>
        </div>
        <div className="slds-utility-panel__body">
          <div className="slds-align_absolute-center">Utility Panel Body</div>
        </div>
      </div>
    </footer>
  );
}

export default UtilityBar;