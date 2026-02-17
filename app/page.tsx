"use client";

const page = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: 0,
        padding: 0,
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        color: "white",
        textAlign: "center",
      }}
    >
      <h1
        style={{ fontSize: "4rem", margin: "0 0 1rem 0", fontWeight: "bold" }}
      >
        Coming Soon
      </h1>
      <p style={{ fontSize: "1.5rem", margin: "0 0 2rem 0", opacity: 0.9 }}>
        Something amazing is on the way
      </p>
    </div>
  );
};

export default page;
