import Logo from '../assets/logo.png';

export default function Header() {
    return (
        <div className="h-16 bg-blue-950 text-white font-bold flex justify-between items-center pl-4 pr-4">
            <div className="flex items-center gap-2">
                <img
                    src={Logo}
                    alt="Logo"
                    className="h-8 rounded-[25px]"
                />
                <h1>PokéMory</h1>
            </div>
            <button className="absolute left-1/2 -translate-x-1/2 bg-blue-200 text-black p-1 rounded-[5px] border border-black hover:scale-110 active:scale-95 transition-all ease-out">
                New Game
            </button>
            <div className="flex justify-center gap-8">
                <span>Score : 0</span>
                <span>Record : 0</span>
            </div>
        </div>
    );
}
