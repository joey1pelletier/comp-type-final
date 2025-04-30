import '../App.css'
import { motion } from "motion/react"
function RedRocks() {
    return (
        <>
        <div className="red-rocks">
        <motion.div
                className="red-rocks-heading"
            >
                <h2>RED ROCKS</h2>
        </motion.div>
        <motion.div
            className="red-rocks-text"
        >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id varius enim, eu tincidunt dolor. Vestibulum quis nunc efficitur, fringilla nulla et, scelerisque ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis interdum finibus nunc, vitae mollis elit tempus a. Vestibulum ante ipsum primis in faucibus orci.</p>
        </motion.div>

        </div>
        </>
    )
}

export default RedRocks;