import React from 'react';
import styled from 'styled-components';
import Tree from 'components/Tree';

const SidebarWrapper = styled.div`
  width: 320px;
  background-color: rgb(250, 250, 251);
  border-right: 1px solid rgb(221, 219, 218);
  border-right-color: rgb(221, 219, 218);
  float: left;
  height: 100vh;
`;


function Sidebar(props) {
  return (
    <SidebarWrapper className="demo-only">
      <nav className="slds-nav-vertical" aria-label="Sub page">
        <div className="slds-nav-vertical__section">
          <h2 id="entity-header" className="slds-nav-vertical__title slds-text-title_caps">Reports</h2>
          <Tree />
        </div>
      </nav>
    </SidebarWrapper>
  );
}



export default Sidebar;