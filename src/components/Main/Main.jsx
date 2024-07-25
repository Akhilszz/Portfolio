import { About } from "../About/About"
import { Contact } from "../contact/contact"
import { Hero } from "../Hero/Hero"
import { Navbar } from "../Navbar/Navbar"
import { Project } from "../Projects/project"
import { Sidebar } from "../Sidebar/sidebar"


export const Main = () => {


    return (
        <div className="main">

            <Navbar />
            <Hero />
            <About />
            <Project />
            <Contact />
            <Sidebar />

        </div>
    )
}