export default function ErrorMessage({ message }) {
  const errMsgStyle = {
    width: "100vw",
    textAlign: "center",
    fontSize: "1.3rem",
    marginTop: "2rem",
  };
  return (
    <p style={errMsgStyle}>
      <span>🚫 </span> {message} <span> 🚫</span>
    </p>
  );
}
