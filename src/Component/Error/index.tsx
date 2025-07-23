export default function Index() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-white p-4 text-center">
        <div className="w-full max-w-md rounded-lg  p-8 ">
          <h1 className="mb-4 text-7xl font-bold text-blue-700">404</h1>
          <h2 className="mb-6 text-3xl font-semibold text-gray-800">
            Oops! Page Not Found
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            We can't seem to find the page you're looking for. It might have
            been moved or deleted.
          </p>
          <a
            href="/"
            className="inline-block rounded-md bg-[rgb(29,110,194)] px-6 py-3 text-lg font-medium 
                  text-white transition-colors duration-300 ease-in-out hover:bg-[rgb(24,90,160)]"
          >
            Go to Homepage
          </a>
        </div>
      </div>
    </>
  );
}
