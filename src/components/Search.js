export default function Search({ searchQuery, setSearchQuery }) {
  return (
    <input
      type="text"
      className="bg-slate-300 rounded-full w-full py-1.5 px-2 hidden outline-1outline-slate-400 md:block"
      placeholder="Search Post"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}
