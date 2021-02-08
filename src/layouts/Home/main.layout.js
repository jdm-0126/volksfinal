import React from 'react';

// import { Navbar } from '../common/components';
// import styled from 'styled-components';

// const RootContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100%;
// `;

const MainLayout = ({ children, absoluteHeader = true }) => {
  return (
    <div>
      {children}
    </div>

  );
};

export default MainLayout;
