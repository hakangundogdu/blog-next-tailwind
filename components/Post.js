const Post = ({ id, userId, title, body }) => {
  return (
    <div className="mt-6  w-full rounded-xl border p-6 text-left hover:border-slate-300  lg:w-1/2  ">
      <h3 className="text-xl font-bold">{title} </h3>
      <p className="mt-4 ">{body} </p>
      <p className="mt-4  text-teal-500">User {userId} </p>
    </div>
  )
}

export default Post
