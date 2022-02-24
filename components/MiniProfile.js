function MiniProfile() {
  return (
    <div className="mt-14 ml-10 flex items-center justify-between ">
      <img
        className="h-16 w-16 rounded-full border object-contain p-[2px] "
        src="https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg"
        alt=""
      />
      <div className='flex-1 mx-4'>
        <h2 className='font-bold'>bisheshss</h2>
        <h3 className='text-sm text-gray-400'>Welcome to Insta-clone</h3>
      </div>
      <button className='text-blue-400 text-sm font-semibold'>Sign out</button>
    </div>
  )
}

export default MiniProfile
