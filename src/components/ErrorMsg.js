export function ErrorMsg({ message }) {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 text-center px-4 py-3 mb-10 rounded relative">
      <span>{message}</span>
    </div>
  );
}
