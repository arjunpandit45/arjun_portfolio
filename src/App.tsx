import { Reveal } from "./components/common/Reveal"
import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Hero from "./sections/Hero"
import Project from "./sections/Project"
import Skill from "./sections/Skills"

const App = () => {
    return (
        <div className="bg-black w-full min-h-screen">

            <Navbar />
            <Hero/>
            
            <Reveal>
                <About />
            </Reveal>

            <Reveal>
                <Skill />
            </Reveal>

            <Reveal>
                <Project />
            </Reveal>

            <Reveal>
                <Contact />
            </Reveal>

            <Footer />

        </div>
    )
}

export default App
