import { useLayoutEffect, useRef, useState, type ReactNode } from "react"

// Scales a fixed-size design artboard to the available width.
export function Canvas({
  height,
  children,
  className = "",
  width = 1036,
}: {
  height: number
  children: ReactNode
  className?: string
  width?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  useLayoutEffect(() => {
    const el = ref.current!
    const observer = new ResizeObserver(([entry]) =>
      setScale(entry.contentRect.width / width),
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [width])
  return (
    <section
      ref={ref}
      className={"design-section " + className}
      style={{ aspectRatio: width + " / " + height }}
    >
      <div className="design-canvas" style={{ width, height, zoom: scale }}>
        {children}
      </div>
    </section>
  )
}
