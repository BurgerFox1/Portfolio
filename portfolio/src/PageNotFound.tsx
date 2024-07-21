import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.icon}>🚫</div>
      <h1 style={styles.text}>404 - Page Not Found</h1>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#1d1d1d',
    color: 'white',
    textAlign: 'center',
  },
  icon: {
    fontSize: '4rem',
  },
  text: {
    fontSize: '2rem',
    marginTop: '1rem',
  },
};

export default NotFound;
