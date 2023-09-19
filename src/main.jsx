import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ui/ErrorFallback.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace('/')}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// ErrorBoundary for this I need more documentation ;
// Basicaly it catch errors only when react render, for other error we have to use other mechanisms
