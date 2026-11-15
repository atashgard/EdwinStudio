// The layout is designed at 1920px. On wider screens (e.g. 27"/32" monitors)
// the whole page scales up proportionally instead of leaving empty gutters.
const DESIGN_WIDTH = 1920

function applyZoom() {
  const root = document.documentElement
  // clientWidth excludes the scrollbar, so the zoomed page never overflows.
  const zoom = Math.max(1, root.clientWidth / DESIGN_WIDTH)
  root.style.setProperty("--page-zoom", String(zoom))
}

let installed = false

// Runs once before the first render so wide screens never flash the unscaled layout.
export function installLargeScreenZoom() {
  if (installed || typeof window === "undefined") return
  installed = true
  applyZoom()
  window.addEventListener("resize", applyZoom)
}

// Ratio between rendered and layout pixels for an element, independent of how a
// browser reports zoomed geometry.
export function measuredZoom(element: HTMLElement) {
  const rendered = element.getBoundingClientRect().width
  return element.offsetWidth > 0 && rendered > 0
    ? rendered / element.offsetWidth
    : 1
}
