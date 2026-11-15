import { useEffect } from "react"

// Blocks that animate in as they enter the viewport, on every page.
const REVEAL_SELECTOR = [
  ".portfolio > :not(.sr-only):not(.intro-content):not(:has(.intro-content))",
  ".portfolio .intro-art",
  ".portfolio .intro-content > :not(.sr-only):not(.prices-list):not(.intro-panels)",
  ".portfolio .intro-panels > *",
  ".portfolio .prices-list > li",
].join(", ")

const STAGGER_MS = 90

export function useSectionReveal(page: string) {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR),
    )
    if (!targets.length) return
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return
    }

    const timers: number[] = []
    const observer = new IntersectionObserver(
      (entries) => {
        const entering = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target as HTMLElement)
          .sort((a, b) =>
            a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING
              ? -1
              : 1,
          )
        entering.forEach((el, index) => {
          observer.unobserve(el)
          const delay = Math.min(index, 5) * STAGGER_MS
          el.style.transitionDelay = `${delay}ms`
          el.classList.add("is-revealed")
          timers.push(
            window.setTimeout(() => {
              el.style.transitionDelay = ""
            }, delay + 1000),
          )
        })
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    )

    targets.forEach((el) => {
      el.classList.add("reveal")
      observer.observe(el)
    })

    return () => {
      observer.disconnect()
      timers.forEach(clearTimeout)
      targets.forEach((el) => {
        el.classList.remove("reveal", "is-revealed")
        el.style.transitionDelay = ""
      })
    }
  }, [page])
}
