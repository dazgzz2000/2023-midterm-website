import about from "../about.png";
export default function About() {
    return <dev>
        <h1>About</h1> 
        <h2 className="text-3xl font-bold text-left text-orange-600"> Hello World!</h2>
        <h4 className="text-3xl font-bold text-left text-orange-400">r11921a37's website</h4>
        <h6 className="text-3xl font-bold text-left text-orange-300">ABOUT ME</h6>
        <img src={about} width={80}></img>
        <p>碩士一年級，就讀電機所資訊安全碩士班。</p>
        </dev>;
}
