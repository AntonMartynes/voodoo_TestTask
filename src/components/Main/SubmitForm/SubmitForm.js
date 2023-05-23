export const SubmitForm = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
};

  return (
    <>
      <h2 className="mb-6 text-center ">Be the first one to know when we launch our beta!</h2>
      <form className="w-auto mb-24 flex justify-center sm:px-28">
        <div className='relative md:w-2/4'>
          <input
            type="email"
            id="email"
            className="w-full p-4 rounded focus:outline-orange-600 placeholder:text-black placeholder:font-semibold max-[380px]:text-sm"
            placeholder="Email"
            autoComplete="off"
          />
        </div>


        <button
          className='bg-amber-700 ml-3 p-4 rounded  text-black hover:bg-amber-600'
          type='submit'
          onClick={e => {
            e.preventDefault();
            goToTop();
          }}
        >
          Sign-Up
        </button>
      </form>
    </>
  )
}