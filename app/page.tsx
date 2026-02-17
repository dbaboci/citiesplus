'use client';

const page = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: 0,
        padding: 0,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '4rem', margin: '0 0 1rem 0', fontWeight: 'bold' }}>
        Coming Soon
      </h1>
      <p style={{ fontSize: '1.5rem', margin: '0 0 2rem 0', opacity: 0.9 }}>
        Something amazing is on the way
      </p>
      <div style={{ marginTop: '2rem' }}>
        <input
          type="email"
          placeholder="Enter your email"
          style={{
            padding: '12px 20px',
            fontSize: '1rem',
            borderRadius: '4px',
            border: 'none',
            marginRight: '10px',
            minWidth: '300px',
          }}
        />
        <button
          style={{
            padding: '12px 30px',
            fontSize: '1rem',
            borderRadius: '4px',
            border: 'none',
            background: 'white',
            color: '#667eea',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          Notify Me
        </button>
      </div>
    </div>
  );
};

export default page;
