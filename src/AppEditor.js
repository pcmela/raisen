import React from 'react';
import Sidebar from './components/Sidebar';
import DataTable from './components/DataTable';
import CodeEditor from './components/CodeEditor';
import UtilityBar from './components/UtilityBar';
import styled from 'styled-components';

const mainDivStyle = {
  height: '100vh',
}

const divStyle = {
  display: 'inline-block',
  width: 'calc(100% - 320px)',
}

const InputQuery = styled.textarea`
  width: 100%;
`;

export default class AppEditor extends React.Component { // eslint-disable-line react/prefer-stateless-function

    // Since state and props are static,
    // there's no need to re-render this component
    shouldComponentUpdate() {
      return false;
    }
  
    render() {
      return (
        <div style={mainDivStyle}>
          <Sidebar />
          <div style={divStyle}>
            <CodeEditor />
            <DataTable />
            <UtilityBar />
          </div>
        </div>
      );
    }
  }