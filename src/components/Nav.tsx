import cureLogo from "../assets/curelogo.png"
import discordLogo from "../assets/discord.png"

function Nav() {
  return (
    <div className="flex justify-around items-center w-full h-[80px] bg-[#00000036] border-[#8A8EAA]/29 border-b">
      {/* LOGO + NAME */}
      <div className="flex justify-center items-center">
        <img className="select-none cursor-pointer" src={cureLogo} alt='Fallen Angel' width="66px" height="66px"/>
        <h1 className="text-5xl font-light ml-5 text-white font-display select-none cursor-pointer">cure</h1>
      </div>

      {/* PAGES */}
      <div className="text-white flex items-center space-x-14 font-display font-medium text-lg">
        <a href="/">home</a>
        <a href="/commands">commands</a>
        <a href="/legal">legal</a>
        <a href="/status">status</a>
      </div>

      {/* DISCORD BUTTON */}
      <div className="select-none cursor-pointer flex justify-center items-center w-25 h-9 bg-[#4968FF]/34 text-white font-display font-medium text-[16px] rounded-xl space-x-2">
      <img src={discordLogo} width="17px" height="12px" alt="Discord Logo"/>
        <h1>Discord</h1>
      </div>
    </div>
  )
}

export default Nav