import cureLogo from "../assets/curelogo.png"
import discordLogo from "../assets/discord.png"

const Home = () => {
  return (
    <div className="flex justify-center items-center flex-col h-1/2 m-24">
      <img src={cureLogo} width="300px" height="365px"/>
      <h1 className="font-display text-6xl text-white mb-4">cure</h1>
      <h1 className="font-display text-sm font-light text-white">
        Cure is a versatile all-in-one bot designed to protect and enhance communities.
      </h1>

      {/* BUTTONS */}
      <div className="flex text-white font-display text-lg font-medium space-x-6 mt-4">
        <div className="flex justify-center items-center w-[150px] h-[60px] bg-black/35 rounded-lg cursor-pointer select-none">Commands</div>
        <div className="flex justify-center items-center w-[150px] h-[60px] bg-black/35 rounded-lg cursor-pointer select-none">
          <img src={discordLogo} width="17px" height="12px" className="mr-2.5"/>
          Support
        </div>
        <div className="flex justify-center items-center w-[150px] h-[60px] bg-black/35 rounded-lg cursor-pointer select-none">Status</div>
      </div>
    </div>
  )
}

export default Home