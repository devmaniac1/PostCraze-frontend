export default function PopularPost({ popularPost }) {
  return (
    <div className="flex justify-between items-center gap-4 bg-slate-300 py-1 px-2 rounded-md">
      <p className="text-xs md:text-xs lg:text-sm">{popularPost.title}</p>
      <p className="text-xs md:text-xs lg:text-sm">
        {popularPost.comments.length} Comment{popularPost.comments.length===1?"":"s"}
      </p>
    </div>
  );
}
