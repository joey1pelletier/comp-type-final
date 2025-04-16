import '../App.css'
import { useState } from "react"
import { motion, AnimatePresence} from "motion/react"


function BasicsOfMotion() {
    
    return (
        <>
        <div
            style ={{
                display: "grid",
                placeContent: "center",
                height: "100vh",
                gap: "0.8rem"
            }}
        >
            <motion.div
                initial={{
                    scale: 0
                }}
                animate={{
                    rotate: 360,
                    scale: 1
                        
                }}
                style={{
                    width: 150,
                    height: 150,
                    background: "black",
                }}
            >
    
            </motion.div>
            <motion.div
                whileHover={{
                    scale: 1.1
                }}
                whileTap={{
                    scale: 0.95
                }}
                style={{
                    width: 150,
                    height: 150,
                    background: 'purple'
                }}
            
            >
            </motion.div>

            <motion.div
                style={{
                    fontFamily: 'Open Sans',
                    fontSize: "3em",
                }}
                initial={{
                    opacity: 1,
                }}
                whileInView={{
                    paddingLeft: 100,
                    fontWeight: 600,
                    
                }}
                viewport={{
                    amount: "all",
                    once: true,
                }}
                whileHover={{
                    fontWeight: 800,
                    fontSize: "10em"
            
                }}
                onViewportEnter={() => console.log("enter")}
                onViewportLeave={() => console.log("exit")}
            
            >

            <p>text!</p>

            </motion.div>
           


            
            
            


        </div>
             <div
                style={{
                    height: 1000
                }}    
            >

            </div>
            
        </>
        
        
    )
}

export default BasicsOfMotion;