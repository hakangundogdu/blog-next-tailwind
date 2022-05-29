const Banner = () => {
  return (
    <div className="max-w-8xl container mx-auto flex items-center justify-center ">
      <div className="mt-6 flex w-full items-center justify-between rounded-xl border p-8 text-left hover:border-slate-300 hover:shadow-md lg:w-1/2 ">
        <h2 className="text-2xl font-extrabold text-teal-500">
          {' '}
          Ready to dive in? <br />
          <span className="text-slate-800 "> Star your trial today!</span>
        </h2>
        <button className="h-10 rounded-md border border-cyan-300 bg-slate-100 bg-gradient-to-r from-teal-500 to-cyan-500 px-6 font-semibold text-white">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Banner
