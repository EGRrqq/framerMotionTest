import React, {useState} from "react";
import { motion } from "framer-motion";

const Box1 = () => {
    const [animation, setAnimation] = useState(false)

    return (
        <div className="boxContainer">
            <motion.div
                className="box"
                animate={{
                    x: animation ? "70vw" : 0,
                    opacity: animation ? 1 : 0.3,
                    rotate: animation ? 360 : 0
                }}
                initial={{
                    opacity: 0.1
                }}
                transition={{
                    type: "spring",
                    stiffness: 60,
                    damping: 8
                }}
                onClick={() => setAnimation(!animation)}
            >
            </motion.div>
        </div>
    )
}

export default Box1