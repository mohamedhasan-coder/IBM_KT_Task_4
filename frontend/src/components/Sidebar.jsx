export default function Sidebar() {
  return (
    <div className="w-60 bg-gray-900 text-white min-h-screen p-4">
      <p className="font-semibold mb-4">Menu</p>
      <ul className="space-y-3">
        <li>📖 Books</li>
        <li>➕ Add Book</li>
        <li>⚙ Settings</li>
      </ul>
    </div>
  );
}
