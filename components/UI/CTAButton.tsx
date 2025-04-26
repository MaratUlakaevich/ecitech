'use client'
const CTAButton = () => {
  return (
    <button
      type="button"
      onClick={() => {
        window.location.href = "/contact";
      }}
      className={`flex m-auto lg:mx-0 lg:mt-10 md:items-left md:m-0 text-white bg-blue-700 
                            hover:bg-blue-800 duration-300 focus:outline-none font-medium rounded-full 
                            text-xl px-10 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700`}
    >
      Book a free consultation
    </button>
  )
}

export default CTAButton