import React from 'react';
import { login, logout } from './utils';

export default function AppTest() {
  const isConnected = window.walletConnection.isSignedIn();

  const title = isConnected ? `Connected, ${window.accountId}` : 'Not connected';
  const buttonLabel = isConnected ? 'Disconnect' : 'Connect';

  const handleClick = () => {
    if (isConnected) {
      logout();
    } else {
      login();
    }
  }

  return (
    <main>
      <p style={{ textAlign: 'center' }}>
        {title}
      </p>
      <p style={{ textAlign: 'center', marginTop: '2.5em' }}>
        <button onClick={handleClick}>{buttonLabel}</button>
      </p>
    </main>
  )
}
