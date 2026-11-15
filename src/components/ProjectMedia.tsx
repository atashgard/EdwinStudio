import { useLayoutEffect, useRef, useState, type ReactNode, type CSSProperties } from "react"

// Coordinates stay local to composite brand illustrations, not page layout.
export function BrandArtwork({
  width,
  height,
  children,
}: {
  width: number
  height: number
  children: ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  useLayoutEffect(() => {
    const observer = new ResizeObserver(([entry]) =>
      setScale(entry.contentRect.width / width),
    )
    observer.observe(ref.current!)
    return () => observer.disconnect()
  }, [width])
  return (
    <div
      ref={ref}
      className="taban-artwork"
      style={{ aspectRatio: `${width}/${height}` }}
    >
      <div style={{ width, height, zoom: scale }}>{children}</div>
    </div>
  )
}

export function Photo({
  file,
  alt,
  className = "",
  ratio,
  style,
}: {
  file: string
  alt: string
  className?: string
  ratio: string
  style?: CSSProperties
}) {
  return (
    <img
      className={`taban-photo ${className}`}
      src={`/assets/${file}`}
      alt={alt}
      style={{ aspectRatio: ratio, ...style }}
      loading="lazy"
      decoding="async"
    />
  )
}
