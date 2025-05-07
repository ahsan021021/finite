"use client"

import { useEffect, useRef } from "react"

export const AnimatedStars = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let stars: { x: number; y: number; size: number; color: string; opacity: number; speed: number }[] = []
    const numStars = 150

    function initializeStars() {
      stars = []
      for (let i = 0; i < numStars; i++) {
        const size = Math.random() * 2 + 1
        const opacity = Math.random() * 0.7 + 0.3

        // Create a gradient of colors from purple to blue
        const colorValue = Math.random()
        let color
        if (colorValue < 0.33) {
          color = "#8b5cf6" // Purple
        } else if (colorValue < 0.66) {
          color = "#6366f1" // Indigo
        } else {
          color = "#3b82f6" // Blue
        }

        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          color,
          opacity,
          speed: Math.random() * 0.05 + 0.01,
        })
      }
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initializeStars()
    }

    resizeCanvas()

    window.addEventListener("resize", resizeCanvas)

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = star.color
        ctx.globalAlpha = star.opacity
        ctx.fill()

        // Add a subtle glow effect
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2)
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 2)
        gradient.addColorStop(0, star.color)
        gradient.addColorStop(1, "transparent")
        ctx.fillStyle = gradient
        ctx.globalAlpha = star.opacity * 0.3
        ctx.fill()

        // Move stars
        star.y += star.speed

        // Reset stars that go off screen
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }
      })
    }

    function animate() {
      drawStars()
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />
}
