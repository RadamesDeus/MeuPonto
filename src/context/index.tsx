import React from 'react';

import { AuthProvider } from './AuthContext';

const Context: React.FC = ({ children }) => {
  return (
    <>
      <AuthProvider>{children}</AuthProvider>
    </>
  );
};

export default Context;
