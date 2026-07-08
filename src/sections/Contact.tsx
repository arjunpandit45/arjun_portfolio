import React, { useState } from 'react';
import { Mail, Briefcase } from 'lucide-react';


const Contact = () => {

    const [isSubmitting, setIsSubmitting] = useState(false)

    const [formData, setFormData] = useState({
        access_key: import.meta.env.VITE_WEB3_ACCESS_KEY,
        name: '',
        email: '',
        projectType: '',
        message: '',
        agreedToPrivacy: false,
    })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        
        if (type === 'checkbox') {
            const checkboxTarget = e.target as HTMLInputElement;
            setFormData(prev => ({ ...prev, [name]: checkboxTarget.checked }))
        } else {
            setFormData(prev => ({ ...prev, [name]: value }))
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        if(! formData.agreedToPrivacy){
            alert("Please agree to the privacy policy.")
            return;
        }

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formData),
            })

            const result = await response.json()
            if(result.success){
                alert("Message sent successfully. I'll get back to you soon.")

                // reset form
                setFormData({
                    ...formData,

                    name: '',
                    email: '',
                    projectType: '',
                    message: '',
                    agreedToPrivacy: false,
                })
            }

            setIsSubmitting(false)
        } 
        catch (error) {
            console.log("Error in form-submission", error)
            alert("Network error. Please check you connection.")
        }
    }


    return (


        <section id="contact" className="py-10 md:py-24 px-6 md:px-20 lg:px-40 bg-black text-white font-mono overflow-hidden">

            <div className="flex items-center gap-4 mb-16">
                
                <h2 className="text-3xl font-bold text-green-500">
                    <span className="text-gray-500 font-light">04.</span> Write-Me
                </h2>
                <div className="h-[1px] bg-green-500/20 flex-1"></div>
            </div>

            <div className="max-w-5xl mx-auto w-full">

                {/* Wireframe Centered Content */}
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        Do You Want To Talk About A Project?
                    </h3>
        
                    <div hidden className="p-4 bg-zinc-900 border border-white/10 rounded-lg italic text-sm text-green-500/80">
                        "Turning your vision into verifiable code, one commit at a time."
                    </div>
                </div>

                {/* The Form */}
                <form onSubmit={handleSubmit} className="max-w-3xl mx-auto w-full border border-white/10 rounded-2xl bg-zinc-900/40 p-5 md:p-8 relative overflow-hidden transition-all duration-300">

                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-500/10 blur-3xl rounded-full z-0"></div>

                    <div className="relative z-10 space-y-6">
                        <h4 className="text-lg font-bold text-white pb-2 border-b border-white/10">Write-me</h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            {/* name */}
                            <div className="space-y-2">
                                
                                <label htmlFor="name" className="text-xs md:text-sm text-gray-400">Full-name <span className="text-blue-500">*</span></label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-zinc-900/80 border border-white/20 px-4 md:px-5 py-1 md:py-2 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                
                                <label htmlFor="email" className="text-xs md:text-sm text-gray-400">Email <span className="text-blue-500">*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-zinc-900/80 border border-white/20 px-4 md:px-5 py-1 md:py-2 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-all"
                                    placeholder="john.doe@example.com"
                                />
                            </div>
                        </div>

                        {/* topic dropdown */}
                        <div className="space-y-2 relative">
                            
                            <label htmlFor="projectType" className="text-xs md:text-sm text-gray-400">Choose your topic <span className="text-blue-500">*</span></label>
                            <div className="relative">
                                <Briefcase size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" />
                                <select
                                    id="projectType"
                                    name="projectType"
                                    required
                                    value={formData.projectType}
                                    onChange={handleChange}
                                    className="w-full bg-zinc-900/80 border border-white/20 pl-14 pr-5 py-1 md:py-2 rounded-lg text-white appearance-none focus:outline-none focus:border-blue-500 transition-all cursor-pointer"
                                >
                                    <option value="" disabled hidden className=''></option>
                                    <option value="For Hiring">For Hiring Me</option>
                                    <option value="frontend">Frontend Development</option>
                                    <option value="backend">Backend Development</option>
                                    <option value="fullStack">Full Stack AI Engineering</option>
                                    <option value="embedded">Embedded Systems Software</option>
                                    <option value="collaboration">General Collaboration</option>
                                    <option value="other">Other</option>
                                </select>
                                <div className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">▼</div>
                            </div>
                        </div>

                        {/* message textarea */}
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-xs md:text-sm text-gray-400">Your message <span className="text-blue-500">*</span></label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                rows={6}
                                className="w-full bg-zinc-900/80 border border-white/20 px-4 md:px-5 py-1 md:py-2 rounded-lg text-white resize-none focus:outline-none focus:border-blue-500 transition-all"
                                placeholder="Describe your project or discussion point..."
                            />
                        </div>

                        {/* Privacy Policy */}
                        <div className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                id="agreedToPrivacy"
                                name="agreedToPrivacy"
                                required
                                checked={formData.agreedToPrivacy}
                                onChange={handleChange}
                                className="w-5 h-5 bg-zinc-900 border border-white/20 rounded-md accent-blue-500 cursor-pointer focus:shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                            />
                            <label htmlFor="agreedToPrivacy" className="text-xs md:text-sm text-gray-400 cursor-pointer leading-tight">
                                I agree with the terms of the <strong className="text-gray-200">Privacy Policy</strong> <span className="text-blue-500">*</span>
                            </label>
                        </div>

                        {/* Submit Button (Green Glow) */}
                        <div className="flex justify-start">
                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className="flex items-center gap-2 text-green-400 bg-transparent border border-green-500/40 
                           hover:bg-green-500/20 px-6 md:px-7 py-1 md:py-2 rounded transition-all duration-300
                           hover:shadow-[0_0_12px_rgba(74,202,128,0.5)] border-green-300 active:scale-95"
                            >
                                <Mail size={20} /> {isSubmitting? "Sending" : "Send Message"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;

