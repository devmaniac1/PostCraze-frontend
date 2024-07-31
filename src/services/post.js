export async function getPosts() {
  const res = await fetch(`http://localhost:3000/posts/getPosts`);

  if (!res.ok) throw Error("Failed getting posts");

  const { data } = await res.json();
  return data;
}
