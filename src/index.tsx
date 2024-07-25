import React from 'react';
import ReactDOM from 'react-dom/client';
import GridContainer from './Grid/GridContainer';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <GridContainer items={[]} />
    </React.StrictMode>
);
