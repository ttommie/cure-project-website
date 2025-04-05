const Legal = () => {
  return (
    <div className="flex justify-center items-center h-1/2">
      <div className='w-[1024px] h-52 bg-black/35 rounded-[30px] text-white font-display flex flex-col pt-[25px]'>
        <div className='text-2xl font-medium mb-2.5 ml-7'>Available public legal documents</div>
        <div className='text-sm text-[#AEA79C] ml-7'>
          By using any of our services, you automatically agree to the terms and privacy policies listed below as we as
          any other legal documents that may be posted on this website. We are not required to notify you of changes to
          any documents, so please make sure to check this website frequently. If you have any concerns or request, feel
          free to reach out to us via <a className='text-[#7792FF] cursor-pointer'>our support server</a> and open a
          ticket.
        </div>

        <hr className='w-[1024px] text-[#8A8EAA]/10 mt-6' />

        <div className='flex space-x-20 justify-center items-center h-[60px] text-[#7792FF] cursor-pointer'>
          <a>Terms and Conditions</a>
          <a>Privacy Policy</a>
        </div>
      </div>
    </div>
  )
}

export default Legal
