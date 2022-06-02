export default function Post({ id, userId, title, body }) {
  return (
    <div className="max-w-8xl container  mx-auto flex flex-col items-center ">
      <div className="mt-6  w-full rounded-xl border p-6 text-left hover:border-slate-300  lg:w-1/2  ">
        <h3 className="text-xl font-bold">{title} &rarr;</h3>
        <p className="mt-4 ">{body} </p>
        <p className="mt-4  text-teal-500">User {userId} </p>
      </div>
    </div>
  )
}

export async function getStaticProps({ params = {} }) {
  const product = products.find(({ id }) => `${id}` === `${params.productId}`)
  return {
    props: {
      product,
    },
  }
}

export async function getStaticPaths() {
  const paths = products.map((product) => {
    const { id } = product
    return {
      params: {
        productId: id,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}
