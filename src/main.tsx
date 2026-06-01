import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MainPage } from './front-components/main-page';

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');

createRoot(root).render(
  <StrictMode>
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <MainPage />
    </div>
  </StrictMode>,
);
