import React from "react";
import { motion, useAnimation } from "framer-motion";

const Box4 = () => {
    const control = useAnimation()

    return (
        <div className="box-container">
            <button onClick={() => {
                control.start({
                    x: 0,
                    transition: {
                        duration: 2
                    }
                })
            }}>
                move left
            </button>
            <button onClick={() => {
                control.start({
                    borderRadius: "50%",
                    transition: {
                        duration: 1
                    }
                })
            }}>
                circle
            </button>
            <button onClick={() => control.stop()}>
                stop
            </button>
            <button onClick={() => {
                control.start({
                    borderRadius: 0,
                    transition: {
                        duration: 1
                    }
                })
            }}>
                square
            </button>
            <button onClick={() => {
                control.start({
                    x: "70vw",
                    transition: {
                        duration: 2
                    }
                })
            }}>
                move right
            </button>
            <motion.div
                className="box"
                animate={control}
            >
            </motion.div>
        </div>
    )
}

export default Box4