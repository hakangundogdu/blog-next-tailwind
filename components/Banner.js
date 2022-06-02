const Banner = () => {
  return (
    <div className="max-w-8xl container mx-auto flex items-center justify-center ">
      <div className="mt-6 flex w-full items-center justify-between rounded-xl border bg-teal-500 p-10 text-left shadow hover:border-slate-300 lg:w-1/2 ">
        <h2 className="text-2xl font-extrabold text-white">
          {' '}
          Ready to dive in? <br />
          <span className="text-slate-800 "> Star your trial today! </span>
        </h2>
        <button className="h-10 rounded-md bg-slate-100 px-6 font-semibold text-teal-500 shadow hover:bg-teal-50 hover:text-teal-800 ">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Banner
