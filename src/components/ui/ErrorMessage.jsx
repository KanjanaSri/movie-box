export default function ErrorMessage({ message }) {
  return (
    <p className="h-[90vh] flex justify-center text-xs md:text-xl mt-40">
      <p>🚫 {message} 🚫</p>
    </p>
  );
}
