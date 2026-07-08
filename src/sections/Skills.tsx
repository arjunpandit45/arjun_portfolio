import { Terminal, Database, Cpu, Wrench, Wallpaper } from 'lucide-react';


const THEME_STYLES = {
    purple: {
        wrapper: "border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.1)] md:border-white/10 md:shadow-none md:hover:border-purple-500/50 md:hover:shadow-[0_0_20px_rgba(168,85,247,0.1)]",
        glow: "bg-purple-500/20 md:bg-transparent md:group-hover:bg-purple-500/20",
        icon: "text-purple-400 md:text-white md:group-hover:text-purple-400",
        title: "text-purple-400 md:text-white md:group-hover:text-purple-400",
        badge: "bg-purple-500/10 text-purple-400 border-purple-500/20 md:bg-transparent md:text-gray-300 md:border-white/10 md:group-hover:bg-purple-500/10 md:group-hover:text-purple-400 md:group-hover:border-purple-500/20"
    },
    blue: {
        wrapper: "border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.1)] md:border-white/10 md:shadow-none md:hover:border-blue-500/50 md:hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]",
        glow: "bg-blue-500/20 md:bg-transparent md:group-hover:bg-blue-500/20",
        icon: "text-blue-400 md:text-white md:group-hover:text-blue-400",
        title: "text-blue-400 md:text-white md:group-hover:text-blue-400",
        badge: "bg-blue-500/10 text-blue-400 border-blue-500/20 md:bg-transparent md:text-gray-300 md:border-white/10 md:group-hover:bg-blue-500/10 md:group-hover:text-blue-400 md:group-hover:border-blue-500/20"
    },
    green: {
        wrapper: "border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.1)] md:border-white/10 md:shadow-none md:hover:border-green-500/50 md:hover:shadow-[0_0_20px_rgba(34,197,94,0.1)]",
        glow: "bg-green-500/20 md:bg-transparent md:group-hover:bg-green-500/20",
        icon: "text-green-400 md:text-white md:group-hover:text-green-400",
        title: "text-green-400 md:text-white md:group-hover:text-green-400",
        badge: "bg-green-500/10 text-green-400 border-green-500/20 md:bg-transparent md:text-gray-300 md:border-white/10 md:group-hover:bg-green-500/10 md:group-hover:text-green-400 md:group-hover:border-green-500/20"
    },
    orange: {
        wrapper: "border-orange-500/50 shadow-[0_0_20px_rgba(249,115,22,0.1)] md:border-white/10 md:shadow-none md:hover:border-orange-500/50 md:hover:shadow-[0_0_20px_rgba(249,115,22,0.1)]",
        glow: "bg-orange-500/20 md:bg-transparent md:group-hover:bg-orange-500/20",
        icon: "text-orange-400 md:text-white md:group-hover:text-orange-400",
        title: "text-orange-400 md:text-white md:group-hover:text-orange-400",
        badge: "bg-orange-500/10 text-orange-400 border-orange-500/20 md:bg-transparent md:text-gray-300 md:border-white/10 md:group-hover:bg-orange-500/10 md:group-hover:text-orange-400 md:group-hover:border-orange-500/20"
    }
} as const


const SKILLS_DATA = [
    {
        id: 'programming',
        title: 'Programming Languages',
        Icon: Terminal,
        color: 'purple',
        skills: ['C++ (DSA)', 'JavaScript', 'TypeScript']
    },
    {
        id: 'frontend',
        title: 'Frontend Development',
        Icon: Wallpaper,
        color: 'blue',
        skills: ['HTML5', 'CSS3', 'React.js', 'Javascript(ES6+) | DOM Manipulation', 'React Redux', 'React Toolkit', 'Tailwind CSS', 'React Query',]
    },
    {
        id: 'backend',
        title: 'Backend Development',
        Icon: Database,
        color: 'green',
        // skills: ['Node.js', 'Express.js', 'RESTful APIs', 'NoSQL (MongoDB)', 'SQL (PostgreSQL)', 'ORM (Prisma)', 'Redis', 'JWT Auth', 'OAuth', 'socket.io', 'WebRTC', 'gPRC', 'RestAPI', 'GraphQL', 'Docker', 'Nginx', 'Amazon Web Services (S3, EC2)', 'PM2 Process Manager']
        skills: ['Node.js', 'Express.js', 'RESTful APIs', 'NoSQL (MongoDB)', 'SQL (PostgreSQL)', 'JWT Auth', 'socket.io', 'RestAPI', 'Docker']
    },
    {
        id: 'embedded',
        title: 'Embedded & IoT',
        Icon: Cpu,
        color: 'blue',
        skills: ['Linux', 'Shell Scripting', 'Arduino UNO', '8086 Microprocessor', '8051 Microcontroller', 'ESP32 Microprocessor', 'MATLAB | Simulink']
    },
    {
        id: 'tools',
        title: 'Tools & OS',
        Icon: Wrench,
        color: 'orange',
        skills: ['VS Code', 'Git | GitHub', 'Postman | Bruno', 'Arduino IDE']
    }
] as const


const Skills = () => {
    return (
        <section id="skills" className="py-10 md:py-24 px-6 md:px-20 lg:px-40 bg-black text-white font-mono">
            
            {/* Header */}
            <div className="flex items-center gap-4 mb-8 md:mb-14">
                <h2 className="text-3xl font-bold text-green-500">
                    <span className="text-gray-500 font-light">02.</span> Tech Arena
                </h2>

                <div className="h-[1px] bg-green-500/20 flex-1"></div>
            </div>

            <div className="max-w-6xl mx-auto w-full">
                
                {/* Mapped Grid */}
                <div className="grid grid-cols-1 gap-4 md:gap-6">
                    
                    {SKILLS_DATA.map((category) => {
                        const theme = THEME_STYLES[category.color];
                        
                        return (
                            <div 
                                key={category.id}
                                className={`mb-8 group p-5 md:p-6 bg-zinc-900/30 border rounded-xl transition-all duration-300 relative ${theme.wrapper}`}
                            >
                                
                                <div className={`absolute -top-10 -right-10 w-32 h-32 blur-3xl rounded-full transition-all ${theme.glow}`}></div>
                                
                                <div className="relative z-10">
                                    {/* Card Header */}
                                    <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-4">
                                        
                                        <category.Icon className={theme.icon} size={24} />
                                        <h3 className={`text-[18px] md:text-xl font-bold transition-colors ${theme.title}`}>
                                            {category.title}
                                        </h3>
                                    </div>
                                    
                                    {/* Skills Badges */}
                                    <div className="flex flex-wrap gap-2 md:gap-3">
                                        {category.skills.map((skill, index) => (
                                            <span 
                                                key={index} 
                                                className={`border px-2 md:px-3 py-1 rounded-md text-sm cursor-default transition-colors ${theme.badge}`}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Skills