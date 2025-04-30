import '../App.css'
import { motion } from "motion/react"

function LariLounge() {
    return (
        <>
        <div className="lari-lounge">
            <motion-div
                className="lari-lounge-header"
            >
                <h2>larimer lounge</h2>
                
            </motion-div>

            <motion.div
                className="lari-lounge-text"
            >
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id varius enim, eu tincidunt dolor. Vestibulum quis nunc efficitur, fringilla nulla et, scelerisque ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis interdum finibus nunc, vitae mollis elit tempus a. Vestibulum ante ipsum primis in faucibus orci.</p>
            </motion.div>
        </div>
        </>
    )
}

export default LariLounge;