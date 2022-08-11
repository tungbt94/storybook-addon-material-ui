import React from 'react';
import styled from '@emotion/styled';
import { ObjectInspector } from 'react-inspector';
import { createTheme } from '@mui/material/styles';

const sortObjectKeys = (a, b) => {
  if (a === 'themeName') return -2;
  if (b === 'themeName') return 2;
  if (a === 'palette') return -1;
  if (b === 'palette') return 1;
  return a.charCodeAt(0) - b.charCodeAt(0);
};

const Holder = styled('div')`
  height: 1px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  label: PaletteHolder;
  padding: 8px;
`;

// eslint-disable-next-line react/prop-types
export default ({ theme }) => (
  <Holder>
    <ObjectInspector
      expandLevel={1}
      expandPaths="$.palette"
      sortObjectKeys={sortObjectKeys}
      data={createTheme(theme)}
    />
  </Holder>
);
