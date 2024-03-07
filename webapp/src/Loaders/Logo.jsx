import theLogo from "../Components/Assets/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"
export default function Logo() {
  return (
    <div className="flex flex-col items-center">
        <h3 className="uppercase font-semibold text-gray-400">Powerd by</h3>
        <img src={theLogo} className="w-[270px] " alt="logo" />
    </div>
  )
}
