import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type RefObject,
} from "react"
import { measuredZoom } from "../hooks/useLargeScreenZoom"

const MOBILE_QUERY = "(max-width: 760px)"

function useIsMobile() {
  const [mobile, setMobile] = useState(
    () => window.matchMedia(MOBILE_QUERY).matches,
  )
  useEffect(() => {
    const query = window.matchMedia(MOBILE_QUERY)
    const onChange = () => setMobile(query.matches)
    query.addEventListener("change", onChange)
    return () => query.removeEventListener("change", onChange)
  }, [])
  return mobile
}

// Cards approaching the bottom of the visible sidebar compress into a stack and
// unstack on scroll. Desktop scrolls the sidebar itself; mobile scrolls the page.
const STACK_PEEK = 70
const STACK_SOFTNESS = 120
const FIT_PADDING = 24

// Desktop sidebar: when every card fits in view, drop the extra bottom room
// reserved for stacking so the sidebar has nothing to scroll.
function useSidebarFit(containerRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const container = containerRef.current
    const scroller = container?.closest<HTMLElement>(".sidebar-inner")
    if (!container || !scroller) return
    let frame = 0
    const update = () => {
      frame = 0
      const scrolls = getComputedStyle(scroller).overflowY !== "visible"
      const zoom = measuredZoom(container)
      const contentBottom =
        (container.getBoundingClientRect().bottom -
          scroller.getBoundingClientRect().top) /
          zoom +
        scroller.scrollTop
      const fits =
        scrolls && contentBottom + FIT_PADDING <= scroller.clientHeight + 1
      if (scroller.classList.contains("is-fit") !== fits) {
        scroller.classList.toggle("is-fit", fits)
        if (fits) scroller.scrollTop = 0
        window.dispatchEvent(new Event("sidebar-fit"))
      }
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    const observer = new ResizeObserver(schedule)
    observer.observe(scroller)
    observer.observe(container)
    window.addEventListener("resize", schedule)
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener("resize", schedule)
      scroller.classList.remove("is-fit")
    }
  }, [containerRef])
}

function useCardStack(
  containerRef: RefObject<HTMLDivElement | null>,
  enabled: boolean,
) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const cards = Array.from(container.children) as HTMLElement[]
    const reset = () =>
      cards.forEach((card) => {
        card.style.translate = ""
        card.style.scale = ""
        card.style.filter = ""
        card.style.opacity = ""
      })
    if (!enabled) {
      reset()
      return
    }
    const scroller = container.closest<HTMLElement>(".sidebar-inner")
    let frame = 0
    const update = () => {
      frame = 0
      if (scroller?.classList.contains("is-fit")) {
        reset()
        return
      }
      // Work in layout pixels: rects are in rendered pixels when the page is zoomed.
      const zoom = measuredZoom(container)
      const viewport =
        Math.min(
          window.innerHeight,
          scroller?.getBoundingClientRect().bottom ?? Infinity,
        ) / zoom
      for (const card of cards) {
        const shift = parseFloat(card.style.translate.split(" ")[1] || "0")
        const naturalTop = card.getBoundingClientRect().top / zoom - shift
        const limit = viewport - card.offsetHeight - STACK_PEEK - 8
        const depth = naturalTop - limit
        if (depth <= 0) {
          card.style.translate = ""
          card.style.scale = ""
          card.style.filter = ""
          card.style.opacity = ""
          continue
        }
        const offset = STACK_PEEK * (1 - Math.exp(-depth / STACK_SOFTNESS))
        const progress = offset / STACK_PEEK
        card.style.translate = `0 ${limit + offset - naturalTop}px`
        card.style.scale = String(1 - progress * 0.22)
        card.style.filter = `brightness(${1 - progress * 0.45})`
        card.style.opacity = String(
          Math.max(0, 1 - Math.max(0, progress - 0.7) * 3.3),
        )
      }
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", schedule, { passive: true })
    scroller?.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)
    window.addEventListener("sidebar-fit", schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", schedule)
      scroller?.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
      window.removeEventListener("sidebar-fit", schedule)
      reset()
    }
  }, [containerRef, enabled])
}

// Mobile homepage: the hero scrolls up into a slim sticky bar while the logo
// and clock glide into its corners. Progress (0..1) drives the CSS via --p.
const HERO_BAR_HEIGHT = 64

function useHeroCollapse(
  heroRef: RefObject<HTMLDivElement | null>,
  enabled: boolean,
) {
  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    if (!enabled) {
      hero.style.removeProperty("--p")
      hero.classList.remove("is-condensed")
      return
    }
    let frame = 0
    const update = () => {
      frame = 0
      const zoom = measuredZoom(hero)
      const travel = hero.offsetHeight - HERO_BAR_HEIGHT
      const top = hero.getBoundingClientRect().top / zoom
      const p = travel > 0 ? Math.min(1, Math.max(0, -top / travel)) : 0
      hero.style.setProperty("--p", p.toFixed(4))
      hero.classList.toggle("is-condensed", p >= 0.5)
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
      hero.style.removeProperty("--p")
      hero.classList.remove("is-condensed")
    }
  }, [heroRef, enabled])
}

export type StudioDetail = {
  title: string
  description: string
  image?: string
  page?: "taban" | "zhavar" | "46biomed" | "parmec" | "iran-capital"
}

const projects: StudioDetail[] = [
  {
    title: "TABAN airlines",
    description:
      "Redesign visual identity design, including all airline brand assets and those of its subsidiaries.",
    image: "/assets/b9a35.webp",
    page: "taban",
  },
  {
    title: "Zhavar",
    description:
      "Brand development, including market research, field studies, and visual identity design.",
    image: "/assets/753ec.webp",
    page: "zhavar",
  },
  {
    title: "46 Biomed",
    description: "Design visual identity design",
    image: "/assets/bc899.webp",
    page: "46biomed",
  },
  {
    title: "Parmec",
    description: "Design visual identity design",
    image: "/assets/e4553.webp",
    page: "parmec",
  },
  {
    title: "Iran Capital Market Laws and Regulations",
    description: "Design visual identity design",
    image: "/assets/194d0.webp",
    page: "iran-capital",
  },
]

export function StudioSidebar({
  onDetail,
  page,
}: {
  onDetail: (detail: StudioDetail) => void
  page: string
}) {
  const [category, setCategory] = useState("Projects")
  const isMobile = useIsMobile()
  const isHome = page === "home"
  const projectsRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  useSidebarFit(projectsRef)
  useCardStack(projectsRef, isMobile ? isHome : category === "Projects")
  useHeroCollapse(heroRef, isMobile && isHome)

  return (
    <aside
      className={`sidebar${isHome ? " is-home" : ""}`}
      aria-label="Studio navigation"
    >
      <div className="sidebar-inner">
        <div className="sidebar-utilities">
          <a
            href="#prices"
            aria-current={page === "prices" ? "page" : undefined}
          >
            Prices
          </a>
        </div>

        <div ref={heroRef} className="studio-home-hero">
          <a
            className="studio-brand"
            href="#home"
            aria-label="Edwin Design Studio — Home"
          >
            <img
              src="/assets/28fe6.svg"
              width="50.654"
              height="72.719"
              alt=""
            />
            <span className="studio-wordmark">
              <img
                src="/assets/83f3d.svg"
                width="115.291"
                height="42.9"
                alt="Edwin"
              />
              <img
                src="/assets/00cbb.svg"
                width="78.035"
                height="18.336"
                alt="Design Studio"
              />
            </span>
          </a>
        </div>

        <div id="studio-projects" ref={projectsRef} className="studio-projects">
          {category === "Projects" ? (
            <>
              <a
                className="studio-about"
                href="#introduction"
                aria-current={page === "about" ? "page" : undefined}
                style={{ "--i": 0 } as CSSProperties}
              >
                <span className="project-card-title">About us</span>
                <span className="project-card-description">
                  Edwin Design Studio, with over a decade of professional
                  experience, has the privilege of collaborating with leading
                  organizations and well-known
                </span>
              </a>
              {projects.map((project, index) =>
                project.page ? (
                  <a
                    key={project.title}
                    className="studio-project"
                    href={`#${project.page}`}
                    aria-current={page === project.page ? "page" : undefined}
                    style={{ "--i": index + 1 } as CSSProperties}
                  >
                    <span className="project-thumbnail">
                      <img
                        src={project.image}
                        width="92.225"
                        height="92.225"
                        alt=""
                      />
                    </span>
                    <span className="project-card-copy">
                      <span className="project-card-title">
                        {project.title}
                      </span>
                      <span className="project-card-description">
                        {project.description}
                      </span>
                    </span>
                  </a>
                ) : (
                  <button
                    key={project.title}
                    className="studio-project"
                    onClick={() => onDetail(project)}
                  >
                    <span className="project-thumbnail">
                      <img
                        src={project.image}
                        width="92.225"
                        height="92.225"
                        alt=""
                      />
                    </span>
                    <span className="project-card-copy">
                      <span className="project-card-title">
                        {project.title}
                      </span>
                      <span className="project-card-description">
                        {project.description}
                      </span>
                    </span>
                  </button>
                ),
              )}
            </>
          ) : (
            <div className="studio-empty" role="status">
              <span className="eyebrow">EDWIN JOURNAL</span>
              <h2>{category}</h2>
              <p>No {category.toLowerCase()} have been published here yet.</p>
              <button onClick={() => setCategory("Projects")}>
                Explore our projects <span aria-hidden="true">↗</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}
