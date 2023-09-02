import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-enter items-center flex-col">
        <nav className="flex justify-between items-center flex-col">
            <img src={logo} alt="sumz-logo" className="w-28 object-contain"/>
        </nav>
    </header>
  )
}

export default Hero