import '../App.css'
import { motion } from "motion/react"


function HeroSection() {
    return (
        <>
            <motion.div
                className="hero-section"
            >
                {/* <h1><span className="teal">E</span><span className="blue">D</span><span className="pink">M</span>SPOTS OF DENVER</h1> */}
                <h1 className="gradient">EDM SPOTS OF DENVER</h1>
            </motion.div>

        </>
    )
}

export default HeroSection;