export default function NotFound() {
  const notFoundStyle = {
    display: "flex",
    minHeight: "80vh",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={notFoundStyle}>
      <h2> Not Found 🚫 </h2>
    </div>
  );
}
