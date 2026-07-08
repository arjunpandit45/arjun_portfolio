import { Mail, FileText, MapPin } from 'lucide-react';
import arjun_photo1 from "../assets/arjun_photo.jpg";
import arjun_photo2 from "../assets/arjun_photo2.jpeg";
import arjun_photo3 from "../assets/arjun_photo3.jpeg"; 

const Hero = () => {
    return (
        <>
        
            <section id='hero' className="relative min-h-[85vh] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-10 xl:px-14 2xl:px-40 py-6 lg:py-0 bg-black text-white font-mono overflow-hidden lg:gap-8">
                
                {/* Left Side */}
                <div className='w-full lg:w-1/2 flex flex-col justify-center'>
                    
                    <div className="flex items-center justify-start gap-2 mb-4">
                        <span className="relative flex h-3 w-2 items-center justify-center">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>

                        <span className="text-xs text-green-500 uppercase tracking-widest">
                            ALL_SYSTEMS_OPERATIONAL
                        </span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-400 text-[12px] md:text-xs mb-4 lg:ml-6">
                        <MapPin size={14} />
                        <span>STATIONED_AT: Bareilly, India | UTC+5:30</span>
                    </div>

                    <div className="mb-6 md:mb-8 font-mono">
                        <h1 className="text-4xl md:text-6xl font-bold text-green-500 mb-3">
                            Arjun Pandit
                        </h1>

                        <p className="text-xl md:text-xl text-white">
                            {/* Full Stack AI Engineer & Embedded Systems Enthusiast */}
                            Full Stack Developer 
                        </p>
                    </div>

                    <p className="max-w-xl text-gray-400 leading-relaxed md:mb-7 mb-5 text-sm md:text-base">
                        Just a laptop, Wi-Fi, and an unhealthy urge to ship stuff. 
                        Turning coffee into code, and chaos into commits.
                    </p>

                    {/* Action Buttons- contact and resume */}
                    <div className="flex flex-wrap gap-4">
                        <a 
                            href="#contact" 
                            className='flex items-center gap-2 text-green-400 bg-transparent border border-green-500/50 hover:bg-green-500/20 px-6 py-2 hover:shadow-[0_0_6px_rgba(74,222,128,0.5)] border-green-400 duration-300 rounded transition-all'
                        >
                            <Mail size={18} /> Contact
                        </a>

                        <a 
                            href='/arjun_upd_resume.pdf'
                            target='_blank'
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-400 bg-transparent border border-blue-500/50 hover:bg-blue-500/20 hover:shadow-[0_0_6px_rgba(59,130,246,0.5)] border-blue-400 duration-300 px-6 py-2 rounded transition-all"
                        >
                            <FileText size={18} /> Resume
                        </a>
                    </div>
                </div>


                {/* Right Side- Photos */}
                <div className="w-full lg:w-1/2 flex items-center justify-center relative h-[350px] md:h-[450px] lg:h-[500px] mt-10 lg:mt-0">

                    <div className="hidden md:block w-44 h-56 bg-gray-800 border-2 border-white -rotate-12 -translate-y-8 translate-x-2 overflow-hidden rounded
                        transition-all duration-300 lg:hover:rotate-0 lg:hover:scale-105 lg:hover:-translate-y-12 hover:border-orange-400 hover:drop-shadow-[0_0_4px_rgba(239,68,68,0.7)] cursor-pointer"
                    >
                        <img src={arjun_photo3} alt="Piyush's Photo" className="object-cover w-full h-full" />
                    </div>

                    <div className="w-48 h-64 bg-gray-800 border-2 border-white overflow-hidden rounded z-10
                        duration-300 hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] cursor-pointer"
                    >
                        <img src={arjun_photo1} alt="Piyush's Photo" className="object-cover w-full h-full" />
                    </div>

                    <div className="hidden md:block w-44 h-56 bg-gray-800 border-2 border-white rotate-12 -translate-y-8 -translate-x-2 overflow-hidden rounded
                        transition-all duration-300 lg:hover:rotate-0 lg:hover:scale-105 lg:hover:-translate-y-12 hover:border-blue-400 hover:drop-shadow-[0_0_4px_rgba(96,165,250,0.6)] cursor-pointer"
                    >
                        <img src={arjun_photo2} alt="Piyush's Photo" className="object-cover w-full h-full" />
                    </div>
                </div>

            </section>
        </>
    );
};

export default Hero;