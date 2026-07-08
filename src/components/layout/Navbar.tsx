import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <nav className="w-full h-14 bg-black text-green-400 flex items-center justify-between px-6 md:px-6 lg:px-10 xl:px-16 2xl:px-40 font-mono sticky top-0 z-50 transition-all duration-300">
            
                <div className="text-lg cursor-pointer hover:drop-shadow-[0_0_10px_rgba(34,240,94,1)] z-50 whitespace-nowrap">
                    <a href="#">&gt;_ arjun.dev</a>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm text-white whitespace-nowrap">
                    <a href="#about" className="cursor-pointer hover:text-green-300 transition-colors">/about</a>
                    <a href="#skills" className="cursor-pointer hover:text-green-300 transition-colors">/skills</a>
                    <a href="#projects" className="cursor-pointer hover:text-green-300 transition-colors">/projects</a>
                    <a href="#contact" className="cursor-pointer hover:text-green-300 transition-colors">/contact</a>
                </div>

                <div className="md:hidden flex items-center z-50">
                    <button onClick={toggleMenu} className="text-green-400 hover:text-green-300 focus:outline-none transition-colors">
                        {isOpen ? <X size={24} /> : <Menu size={22} />}
                    </button>
                </div>

                {isOpen && (
                    <div className="absolute top-14 left-0 w-full bg-[#0a0a0a] border-b border-green-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.9)] md:hidden">
                        <div className="flex flex-col px-6 py-2 text-white/80 text-sm">
                            <a href="#about" onClick={toggleMenu} className="block py-4 border-b border-white/5 hover:text-green-400">/about</a>
                            <a href="#skills" onClick={toggleMenu} className="block py-4 border-b border-white/5 hover:text-green-400">/skills</a>
                            <a href="#projects" onClick={toggleMenu} className="block py-4 border-b border-white/5 hover:text-green-400">/projects</a>
                            <a href="#contact" onClick={toggleMenu} className="block py-4 hover:text-green-400">/contact</a>
                        </div>
                    </div>
                )}
            </nav>

            <div className="h-[1px] w-full bg-green-500/30 relative z-50"></div>
        </>
    )
}

export default Navbar;