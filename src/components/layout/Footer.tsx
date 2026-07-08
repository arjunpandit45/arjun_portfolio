import { ArrowUp } from 'lucide-react';

const socialLinks = [
    { icon: 'fa-brands fa-github', href: 'https://github.com/arjunpandit45', color: 'hover:text-white' },
    { icon: 'fa-brands fa-linkedin', href: 'https://www.linkedin.com/in/arjun-pandit-3a8270383/', color: 'hover:text-blue-500' },
    { icon: 'fa-solid fa-envelope', href: 'mailto:arjunpanditmjpru@gmail.com', color: 'hover:text-red-400' },
    // { icon: 'fa-brands fa-x-twitter', href: 'https://x.com/man_who_builds', color: 'hover:text-gray-300' }
]


const Footer = () => {
    
    const scrollToTop = () => {
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        })
    }

    return (
        <footer className="w-full bg-black text-white font-mono border-t border-white/5 py-10">
            <div className="max-w-[1100px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">

                {/* center on mobile and left on desktop */}
                <div className="flex flex-col items-center md:items-start gap-2 order-2 md:order-1">
                    
                    <div className="text-xl font-bold text-white cursor-default hover:drop-shadow-[0_0_8px_rgba(34,240,94,0.5)] transition-all">
                        <span className="mr-1">&gt;_</span>arjun.dev
                    </div>
                    
                    <p className="text-[12px] text-gray-400 uppercase tracking-[0.2em]">
                        © 2026 ARJUN PANDIT
                    </p>
                </div>

                <div className="flex items-center gap-8 order-1 md:order-2">
                    
                    {socialLinks.map((social, idx) => (
                        <a
                            key={idx}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-gray-600 ${social.color} transition-all duration-300 hover:scale-125 active:scale-100`}
                        >
                            <i className={`${social.icon} text-xl`}></i>
                        </a>
                    ))}
                </div>

                {/*  Scroll to Top */}
                <div className="order-3">
                    
                    <button
                        onClick={scrollToTop}
                        className="group flex flex-col md:flex-row items-center gap-2 text-[12px] text-gray-500 hover:text-gray-400 transition-all uppercase tracking-widest"
                    >
                        <span className="hidden md:inline">Back to top</span>
                        <div className="p-2 border border-white/10 rounded-full group-hover:border-gray-500/50 group-hover:-translate-y-1 transition-all bg-white/5">
                            <ArrowUp size={16} />
                        </div>
                    </button>
                </div>

            </div>
        </footer>
    )
}

export default Footer