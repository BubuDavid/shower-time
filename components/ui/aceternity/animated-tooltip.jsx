"use client"
import Image from "next/image"
import React, { useState } from "react"
import { motion, useTransform, useMotionValue, useSpring } from "framer-motion"

export const AnimatedTooltip = ({ children, message, submessage }) => {
  const [hovered, setHovered] = useState(false)
  const springConfig = { stiffness: 100, damping: 5 }
  const x = useMotionValue(10) // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  )
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  )

  return (
    <>
      <div
        className="-mr-4  relative group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 10,
              },
            }}
            exit={{ opacity: 0, y: 20, scale: 0.6 }}
            style={{
              translateX: translateX,
              rotate: rotate,
              whiteSpace: "nowrap",
            }}
            className="absolute flex text-xs -left-[10rem] -top-2 flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
          >
            <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
            <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
            <div className="font-bold text-white relative z-30 text-base">
              {message || "Hello World"}
            </div>
            <div className="text-white text-xs">
              {submessage || "I am a submesage"}
            </div>
          </motion.div>
        )}
        {children}
      </div>
    </>
  )
}
