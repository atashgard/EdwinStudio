import { useEffect, useRef, useState } from "react"
import { flushSync } from "react-dom"
import { useSectionReveal } from "./hooks/useSectionReveal"
import { Canvas } from "./components/Canvas"
import { AboutMobile } from "./components/AboutMobile"
import { team } from "./team"
import { StudioSidebar, type StudioDetail } from "./components/StudioSidebar"
import { Introduction } from "./components/Introduction"
import { TabanPage } from "./components/TabanPage"
import { ZhavarPage } from "./components/ZhavarPage"
import { BiomedPage } from "./components/BiomedPage"
import { PamercPage } from "./components/PamercPage"
import { IranCapitalPage } from "./components/IranCapitalPage"
import { PricesPage } from "./components/PricesPage"
const assetPathPrefix = "/assets"
const imgRectangle1 = `${assetPathPrefix}/344da.webp`
const imgRectangle2 = `${assetPathPrefix}/d2a00.webp`
const imgRectangle3 = `${assetPathPrefix}/64b7a.webp`
const imgGroup2 = `${assetPathPrefix}/40007.svg`
const imgVector1 = `${assetPathPrefix}/e684a.svg`
const imgVector2 = `${assetPathPrefix}/0c25a.svg`
const imgVector3 = `${assetPathPrefix}/25a30.svg`
const imgVector4 = `${assetPathPrefix}/79570.svg`
const imgVector5 = `${assetPathPrefix}/22976.svg`
const imgVector6 = `${assetPathPrefix}/da8cb.svg`
const imgVector7 = `${assetPathPrefix}/95207.svg`
const imgVector8 = `${assetPathPrefix}/02953.svg`
const imgVector9 = `${assetPathPrefix}/360f4.svg`
const imgVector10 = `${assetPathPrefix}/44108.svg`
const imgVector11 = `${assetPathPrefix}/0f17e.svg`
const imgVector12 = `${assetPathPrefix}/2ef3d.svg`
const imgVector13 = `${assetPathPrefix}/85ea1.svg`
const imgVector14 = `${assetPathPrefix}/f4ef6.svg`
const imgVector15 = `${assetPathPrefix}/39112.svg`
const imgRectangle = `${assetPathPrefix}/bb053.svg`
const imgGroup3 = `${assetPathPrefix}/da84c.svg`
const imgGroup4 = `${assetPathPrefix}/3c5bd.svg`
const imgVector17 = `${assetPathPrefix}/ebfb6.svg`
const imgVector21 = `${assetPathPrefix}/65e9d.svg`
const imgGroup5 = `${assetPathPrefix}/969e0.svg`
const imgGroup6 = `${assetPathPrefix}/1f4be.svg`
const imgGroup7 = `${assetPathPrefix}/6b2d4.svg`
const imgGroup8 = `${assetPathPrefix}/cedbc.svg`
const imgVector22 = `${assetPathPrefix}/d019b.svg`
const imgGroup9 = `${assetPathPrefix}/6c54a.svg`
const imgGroup10 = `${assetPathPrefix}/93d33.svg`
const imgGroup11 = `${assetPathPrefix}/31c24.svg`
const imgGroup12 = `${assetPathPrefix}/fa781.svg`
const imgGroup13 = `${assetPathPrefix}/734a2.svg`
const imgGroup14 = `${assetPathPrefix}/1c4cb.svg`
const imgGroup15 = `${assetPathPrefix}/25d0b.svg`
const imgGroup16 = `${assetPathPrefix}/b707a.svg`
const imgGroup17 = `${assetPathPrefix}/caef2.svg`
const imgGroup18 = `${assetPathPrefix}/46b9c.svg`
const imgGroup19 = `${assetPathPrefix}/bf902.svg`
const imgVector23 = `${assetPathPrefix}/f7554.svg`
const imgVector24 = `${assetPathPrefix}/555bb.svg`
const imgLayer1 = `${assetPathPrefix}/fe7af.svg`
const imgVector25 = `${assetPathPrefix}/c3e70.svg`
const imgVector26 = `${assetPathPrefix}/161cf.svg`
const imgVector27 = `${assetPathPrefix}/cd293.svg`
const imgVector28 = `${assetPathPrefix}/e348d.svg`
const imgVector29 = `${assetPathPrefix}/1d3ee.svg`
const imgVector30 = `${assetPathPrefix}/1ba9a.svg`
const imgGroup20 = `${assetPathPrefix}/f6d7d.svg`
const imgVector31 = `${assetPathPrefix}/07e7a.svg`
const imgVector32 = `${assetPathPrefix}/ef71e.svg`
const imgGroup21 = `${assetPathPrefix}/27ecb.svg`

function currentPage() {
  const hash = window.location.hash
  return hash === "#taban"
    ? "taban"
    : hash === "#zhavar"
      ? "zhavar"
      : hash === "#46biomed"
        ? "46biomed"
        : hash === "#parmec"
          ? "parmec"
          : hash === "#iran-capital"
            ? "iran-capital"
            : hash === "#prices"
              ? "prices"
              : hash === "#introduction" || hash === "#about"
                ? "about"
                : "home"
}

export default function App() {
  const [page, setPage] = useState(currentPage)
  useEffect(() => {
    const onHashChange = () => {
      const next = currentPage()
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches
      if (!document.startViewTransition || reduceMotion) {
        setPage(next)
        return
      }
      // Cross-dissolve the outgoing page into the incoming one.
      document.startViewTransition(() => {
        flushSync(() => setPage(next))
        window.scrollTo({ top: 0, behavior: "instant" })
      })
    }
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])
  useEffect(() => {
    document.title =
      page === "taban"
        ? "Taban Airlines — Edwin Design Studio"
        : page === "zhavar"
          ? "Zhavar — Edwin Design Studio"
          : page === "46biomed"
            ? "46 Biomed — Edwin Design Studio"
            : page === "parmec"
              ? "PAMERC — Edwin Design Studio"
              : page === "iran-capital"
                ? "Iran Capital Market Laws and Regulations — Edwin Design Studio"
                : page === "prices"
                  ? "Design Packages — Edwin Design Studio"
                  : page === "about"
                    ? "About us — Edwin Design Studio"
                    : "Edwin Design Studio"
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [page])
  useSectionReveal(page)
  const [detail, setDetail] = useState<StudioDetail | null>(null)
  const dialogRef = useRef<HTMLElement>(null)
  useEffect(() => {
    if (!detail) return
    const previousFocus = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    dialogRef.current?.querySelector<HTMLButtonElement>("button")?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDetail(null)
      if (event.key === "Tab") {
        const buttons =
          dialogRef.current?.querySelectorAll<HTMLButtonElement>("button")
        if (!buttons?.length) return
        const first = buttons[0]
        const last = buttons[buttons.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", onKeyDown)
      previousFocus?.focus()
    }
  }, [detail])
  return (
    <div className="studio-layout">
      <a
        className="skip-link"
        href={
          page === "home"
            ? "#studio-projects"
            : page === "about"
              ? "#introduction"
              : `#${page}`
        }
      >
        Skip to content
      </a>
      <StudioSidebar onDetail={setDetail} page={page} />
      {page === "taban" ? (
        <TabanPage />
      ) : page === "zhavar" ? (
        <ZhavarPage />
      ) : page === "46biomed" ? (
        <BiomedPage />
      ) : page === "parmec" ? (
        <PamercPage />
      ) : page === "iran-capital" ? (
        <IranCapitalPage />
      ) : page === "prices" ? (
        <PricesPage />
      ) : (
        <main className="portfolio" aria-label="About us">
          <Introduction />
          <div id="section-1-445" className="about-desktop">
            <Canvas height={819}>
              <div
                className="absolute"
                style={{ left: -476, top: -1263, width: 1512, height: 6657 }}
              >
                <div
                  className="absolute contents left-[476px] top-[1332px]"
                  data-node-id="1:445"
                >
                  <div
                    className="absolute h-[472px] left-[476px] top-[1332px] w-[1036px]"
                    data-node-id="1:446"
                  >
                    <div
                      className="[word-break:break-word] absolute font-sans font-[300] h-[272.855px] leading-[0] left-[837.36px] not-italic text-[8.527px] text-black top-[159.56px] w-[131.098px]"
                      data-node-id="1:447"
                    >
                      <p className="leading-[normal] mb-0">
                        I have often told my students in my classes to focus on
                        identifying and remembering the most iconic features of
                        an object, and to use those elements to represent it as
                        a whole.
                      </p>
                      <p className="leading-[normal] mb-0">
                        For example, we can easily recall Hitler by his
                        mustache, or Charlie Chaplin by his bowler hat—each
                        serving as a symbolic shorthand for their entire
                        persona.
                      </p>
                      <p className="leading-[normal] mb-0">
                        I applied the same approach when designing the logo for
                        my own studio. Most people who know me tend to remember
                        me by my round glasses and mustache. Therefore, these
                        two elements became the most fitting representation for
                        my personal brand.
                      </p>
                      <p className="leading-[normal]">
                        I went through dozens of sketches based on numerous
                        photographs of myself until I finally arrived at the
                        result I was looking for.
                      </p>
                    </div>
                    <div
                      className="absolute inset-[-0.07%_25.28%_0.01%_6.34%]"
                      data-node-id="1:448"
                      data-name="Rectangle"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          loading="lazy"
                          decoding="async"
                          alt=""
                          className="absolute left-0 max-w-none size-full top-0"
                          src={imgRectangle3}
                        />
                      </div>
                    </div>
                    <div
                      className="absolute inset-[28.12%_51.45%_47.53%_40.09%] mix-blend-color-burn"
                      data-node-id="1:449"
                      data-name="Vector"
                    >
                      <div className="absolute inset-[0_-0.1%]">
                        <img
                          loading="lazy"
                          decoding="async"
                          alt=""
                          className="block max-w-none size-full"
                          src={imgVector25}
                        />
                      </div>
                    </div>
                    <div
                      className="absolute inset-[11.76%_10.74%_75.92%_84.98%]"
                      data-node-id="1:450"
                      data-name="Vector"
                    >
                      <div className="absolute inset-[-0.16%_-0.2%]">
                        <img
                          loading="lazy"
                          decoding="async"
                          alt=""
                          className="block max-w-none size-full"
                          src={imgVector26}
                        />
                      </div>
                    </div>
                    <div
                      className="absolute inset-[11.76%_10.74%_71.88%_48.55%]"
                      data-node-id="1:451"
                      data-name="Vector"
                    >
                      <div className="absolute inset-[-0.11%_0]">
                        <img
                          loading="lazy"
                          decoding="async"
                          alt=""
                          className="block max-w-none size-full"
                          src={imgVector27}
                        />
                      </div>
                    </div>
                    <div
                      className="absolute inset-[11.76%_15.02%_71.88%_40.09%]"
                      data-node-id="1:452"
                      data-name="Vector"
                    >
                      <div className="absolute inset-[-0.12%_0]">
                        <img
                          loading="lazy"
                          decoding="async"
                          alt=""
                          className="block max-w-none size-full"
                          src={imgVector28}
                        />
                      </div>
                    </div>
                    <div
                      className="absolute inset-[24.08%_10.74%_47.53%_48.55%]"
                      data-node-id="1:453"
                      data-name="Vector"
                    >
                      <img
                        loading="lazy"
                        decoding="async"
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgVector29}
                      />
                    </div>
                    <div
                      className="absolute inset-[24.08%_15.02%_47.53%_40.09%]"
                      data-node-id="1:454"
                      data-name="Vector"
                    >
                      <img
                        loading="lazy"
                        decoding="async"
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgVector30}
                      />
                    </div>
                    <div
                      className="absolute inset-[17.91%_13.86%_81.38%_85.5%]"
                      data-node-id="1:455"
                      data-name="Group"
                    >
                      <img
                        loading="lazy"
                        decoding="async"
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgGroup20}
                      />
                    </div>
                    <div
                      className="absolute inset-[17.69%_11.49%_77.5%_86.18%]"
                      data-node-id="1:458"
                      data-name="Vector"
                    >
                      <img
                        loading="lazy"
                        decoding="async"
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgVector31}
                      />
                    </div>
                    <div
                      className="absolute inset-[13.94%_11.26%_82.32%_85.82%]"
                      data-node-id="1:459"
                      data-name="Vector"
                    >
                      <img
                        loading="lazy"
                        decoding="async"
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgVector32}
                      />
                    </div>
                    <div
                      className="absolute inset-[81%_80.94%_9.03%_10.46%]"
                      data-node-id="1:460"
                    >
                      <img
                        loading="lazy"
                        decoding="async"
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgGroup21}
                      />
                    </div>
                  </div>
                  <ul
                    className="absolute contents list-none m-0 p-0"
                    data-node-id="1:478"
                    aria-label="Studio team"
                  >
                    {team.map((member) => (
                      <li
                        key={member.name}
                        className="team-card absolute top-[1834.26px] h-[168px] overflow-hidden"
                        style={{ left: member.left, width: member.width }}
                      >
                        <img
                          loading="lazy"
                          decoding="async"
                          alt={member.name}
                          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                          style={{ objectPosition: member.focus }}
                          src={member.image}
                        />
                        <div className="team-card-caption">
                          <p className="font-sans font-[900] text-[15.505px] leading-[0.9] text-white m-0">
                            {member.name}
                          </p>
                          <p className="font-sans font-[400] text-[8.523px] leading-[1.21] text-white/80 mt-[4px] mb-0">
                            {member.role}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Canvas>
          </div>
          <div id="logo-design" className="about-desktop">
            <Canvas height={620}>
              <div
                className="absolute h-[619px] left-0 top-[0px] w-[1036px]"
                data-node-id="1:72"
              >
                <div
                  className="absolute bg-black h-[620px] left-0 top-[-0.44px] w-[1036px]"
                  data-node-id="1:73"
                />
                <p
                  className="[word-break:break-word] absolute font-sans font-[900] leading-[normal] left-[143.35px] not-italic text-[47.21px] text-white top-[40.18px] whitespace-nowrap"
                  data-node-id="1:74"
                >
                  02
                </p>
                <p
                  className="[word-break:break-word] absolute font-sans font-[400] leading-[normal] left-[222.04px] not-italic text-[47.21px] text-white top-[40.18px] tracking-[-2.3605px] whitespace-nowrap"
                  data-node-id="1:75"
                >
                  Logo Design
                </p>
                <div
                  className="[word-break:break-word] absolute font-sans font-[400] leading-[0] left-[181.14px] not-italic text-[17.712px] text-white top-[110.86px] tracking-[-0.8856px] whitespace-nowrap"
                  data-node-id="1:76"
                >
                  <p className="leading-[93.31999969482422%] mb-0 whitespace-pre">{`02-01           Concept`}</p>
                  <p className="leading-[93.31999969482422%] mb-0 whitespace-pre">{`02-02          Construction`}</p>
                  <p className="leading-[93.31999969482422%] whitespace-pre">{`02-03          Versions`}</p>
                </div>
                <div
                  className="absolute h-[218.101px] left-[257.63px] overflow-clip top-[269.64px] w-[475.53px]"
                  data-node-id="1:77"
                  data-name="Layer_1"
                >
                  <div
                    className="absolute inset-[0_31.89%_12.64%_39.7%]"
                    data-node-id="1:78"
                    data-name="Group"
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup2}
                    />
                  </div>
                  <div
                    className="absolute inset-[31.01%_60.22%_53.59%_15.33%]"
                    data-node-id="1:86"
                    data-name="Vector"
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgVector1}
                    />
                  </div>
                  <div
                    className="absolute inset-[26.58%_55.89%_65.72%_39.63%]"
                    data-node-id="1:87"
                    data-name="Vector"
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgVector2}
                    />
                  </div>
                  <div
                    className="absolute inset-[24.47%_54.7%_73.08%_43.94%]"
                    data-node-id="1:88"
                    data-name="Vector"
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgVector3}
                    />
                  </div>
                  <div
                    className="absolute inset-[30.76%_82.38%_63.07%_15.22%]"
                    data-node-id="1:89"
                    data-name="Vector"
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgVector4}
                    />
                  </div>
                  <div
                    className="absolute inset-[94.72%_97.22%_0_0]"
                    data-node-id="1:90"
                    data-name="Vector"
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgVector5}
                    />
                  </div>
                  <div
                    className="absolute inset-[76.17%_0_18.55%_97.24%]"
                    data-node-id="1:91"
                    data-name="Vector"
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgVector6}
                    />
                  </div>
                  <div
                    className="absolute inset-[79.33%_58.32%_0.3%_0.11%]"
                    data-node-id="1:92"
                    data-name="Vector"
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgVector7}
                    />
                  </div>
                  <div
                    className="absolute inset-[69.62%_53.08%_19.3%_41.51%]"
                    data-node-id="1:93"
                    data-name="Vector"
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgVector8}
                    />
                  </div>
                  <div
                    className="absolute inset-[66.6%_51.85%_30.02%_46.76%]"
                    data-node-id="1:94"
                    data-name="Vector"
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgVector9}
                    />
                  </div>
                  <div
                    className="absolute inset-[23.78%_54.29%_74.44%_44.87%]"
                    data-node-id="1:95"
                    data-name="Vector"
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgVector10}
                    />
                  </div>
                  <div
                    className="absolute inset-[65.66%_51.45%_32.71%_47.8%]"
                    data-node-id="1:96"
                    data-name="Vector"
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgVector11}
                    />
                  </div>
                  <div
                    className="absolute inset-[70.68%_35.49%_27.66%_63.74%]"
                    data-node-id="1:97"
                    data-name="Vector"
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgVector12}
                    />
                  </div>
                  <div
                    className="absolute inset-[68.5%_0.05%_11.78%_67.88%]"
                    data-node-id="1:98"
                    data-name="Vector"
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgVector13}
                    />
                  </div>
                  <div
                    className="absolute inset-[68.79%_31.96%_28.28%_64.07%]"
                    data-node-id="1:99"
                    data-name="Vector"
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgVector14}
                    />
                  </div>
                  <div
                    className="[word-break:break-word] absolute font-sans font-[200] inset-[20.28%_83.04%_64.13%_8.33%] leading-[0] not-italic text-[12.902px] text-white tracking-[-0.6451px] whitespace-nowrap"
                    data-node-id="1:100"
                  >
                    <p className="leading-[93.31999969482422%] mb-0">
                      My Glasses
                    </p>
                    <p className="leading-[93.31999969482422%] relative -left-[14px]">{`& Eyes`}</p>
                  </div>
                </div>
                <p
                  className="[word-break:break-word] absolute font-sans font-[200] inset-[80.66%_73.97%_16.59%_21.2%] leading-[93.31999969482422%] not-italic text-[12.902px] text-white tracking-[-0.6451px] whitespace-nowrap"
                  data-node-id="1:101"
                >
                  My Mustache
                </p>
                <div
                  className="[word-break:break-word] absolute font-sans font-[200] inset-[66.49%_23.58%_28.02%_68.99%] leading-[0] not-italic text-[12.902px] text-white tracking-[-0.6451px] whitespace-nowrap"
                  data-node-id="1:102"
                >
                  <p className="leading-[93.31999969482422%] mb-0 whitespace-pre">{`Protector & Container`}</p>
                  <p className="leading-[93.31999969482422%] whitespace-pre">{`              (Dark Version)`}</p>
                </div>
              </div>
            </Canvas>
          </div>
          <div id="section-1-103" className="about-desktop">
            <Canvas height={1030}>
              <div
                className="absolute h-[783px] left-0 top-[100px] w-[1036px]"
                data-node-id="1:103"
              >
                <div
                  className="absolute contents inset-[64.09%_33.93%_-0.02%_33.22%]"
                  data-node-id="1:104"
                  data-name="Group"
                >
                  <div
                    className="absolute inset-[64.09%_33.93%_14.18%_33.22%]"
                    data-node-id="1:105"
                    data-name="Vector"
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      style={{ zIndex: 1 }}
                      src={imgVector15}
                    />
                  </div>
                  <div
                    className="absolute contents inset-[73.55%_42.91%_-0.02%_42.92%]"
                    data-node-id="1:106"
                    data-name="Group"
                  >
                    <div
                      className="absolute contents inset-[73.55%_42.91%_-0.02%_42.92%]"
                      data-node-id="1:107"
                      data-name="Clip path group"
                    >
                      <div
                        className="absolute contents inset-[52.37%_35.34%_-21.11%_27.46%]"
                        data-node-id="1:110"
                        data-name="Group"
                      >
                        <div
                          className="absolute inset-[52.37%_35.34%_-21.11%_27.46%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[160.233px_165.895px] mask-size-[146.789px_207.254px]"
                          data-node-id="1:111"
                          style={{
                            maskImage: `url("${imgRectangle}")`,
                            zIndex: 1,
                          }}
                          data-name="Rectangle"
                        >
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img
                              loading="lazy"
                              decoding="async"
                              alt=""
                              className="absolute left-0 max-w-none size-full top-0"
                              src={imgRectangle1}
                            />
                          </div>
                          {/* Keep the logo overlays above the raised photograph. */}
                          <div
                            className="absolute"
                            style={{
                              left: "calc(100% * 17.56 / 37.2)",
                              top: "calc(100% * 24.75 / 68.74)",
                              width: "calc(100% * 10.28 / 37.2)",
                              height: "calc(100% * 18.15 / 68.74)",
                            }}
                          >
                            <img
                              loading="lazy"
                              decoding="async"
                              alt=""
                              className="absolute block inset-0 max-w-none size-full"
                              src={imgGroup3}
                            />
                          </div>
                          <div
                            className="absolute"
                            style={{
                              left: "calc(100% * 16.95 / 37.2)",
                              top: "calc(100% * 33.28 / 68.74)",
                              width: "calc(100% * 1.69 / 37.2)",
                              height: "calc(100% * 1.14 / 68.74)",
                            }}
                          >
                            <img
                              loading="lazy"
                              decoding="async"
                              alt=""
                              className="absolute block inset-0 max-w-none size-full"
                              src={imgGroup4}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute inset-[77.12%_44.7%_4.73%_45.02%]"
                      data-node-id="1:112"
                      data-name="Group"
                    >
                      <img
                        loading="lazy"
                        decoding="async"
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgGroup3}
                      />
                    </div>
                    <div
                      className="absolute inset-[85.65%_53.9%_13.21%_44.41%]"
                      data-node-id="1:115"
                      data-name="Group"
                    >
                      <img
                        loading="lazy"
                        decoding="async"
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgGroup4}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="absolute contents inset-[0_6.37%_21.64%_6.37%]"
                  data-node-id="1:118"
                  data-name="Group"
                >
                  <div
                    className="absolute inset-[20.89%_34.14%_46.43%_23.84%]"
                    data-node-id="1:119"
                    data-name="Rectangle"
                  >
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img
                        loading="lazy"
                        decoding="async"
                        alt=""
                        className="absolute left-0 max-w-none size-full top-0"
                        src={imgRectangle2}
                      />
                    </div>
                  </div>
                  <div
                    className="absolute inset-[0_43.69%_21.64%_56.31%]"
                    data-node-id="1:131"
                    data-name="Vector"
                  >
                    <div className="absolute inset-[0_-0.07px]">
                      <img
                        loading="lazy"
                        decoding="async"
                        alt=""
                        className="block max-w-none size-full"
                        style={{
                          borderRight: "1px solid #968c8c",
                          boxSizing: "content-box",
                          boxShadow: "none",
                          opacity: 0.45,
                        }}
                        src={imgVector17}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Canvas>
          </div>
          <div id="section-1-137" className="about-desktop">
            <Canvas height={629}>
              <div
                className="absolute h-[482px] left-0 top-[0px] w-[1036px]"
                data-node-id="1:137"
              >
                <p
                  className="[word-break:break-word] absolute font-sans font-[700] inset-[-0.14%_85.15%_96.2%_6.36%] leading-[1.309] not-italic text-[14.179px] text-black whitespace-nowrap"
                  data-node-id="1:138"
                >
                  Light Theme:
                </p>
                <p
                  className="[word-break:break-word] absolute font-sans font-[700] inset-[54.77%_85.44%_41.28%_6.36%] leading-[1.309] not-italic text-[14.179px] text-black whitespace-nowrap"
                  data-node-id="1:139"
                >
                  Logo Colors:
                </p>
                <p
                  className="[word-break:break-word] absolute font-sans font-[400] inset-[69.24%_86.41%_26.82%_6.36%] leading-[1.309] not-italic text-[12px] text-black whitespace-nowrap"
                  data-node-id="1:140"
                >
                  Digital Black
                </p>
                <div
                  className="[word-break:break-word] absolute font-sans font-[700] inset-[69.24%_57.75%_20.18%_30.76%] leading-[0] not-italic text-[14.179px] text-black whitespace-nowrap"
                  data-node-id="1:141"
                >
                  <p className="leading-[1.17] mb-0 text-[12px] font-[400]">Hex: 000000</p>
                  <p className="leading-[1.17] mb-0 text-[12px] font-[400]">CMYK: 75-68-67-90</p>
                  <p className="leading-[1.17] text-[12px] font-[400]">RGB: 0-0-0</p>
                </div>
                <div
                  className="[word-break:break-word] absolute font-sans font-[700] inset-[69.24%_9.95%_20.18%_79.24%] leading-[0] not-italic text-[14.179px] text-black whitespace-nowrap"
                  data-node-id="1:142"
                >
                  <p className="leading-[1.17] mb-0 text-[12px] font-[400]">Hex: ffffff</p>
                  <p className="leading-[1.17] mb-0 text-[12px] font-[400]">CMYK: 0-0-0-0</p>
                  <p className="leading-[1.17] text-[12px] font-[400]">RGB: 255-255-255</p>
                </div>
                <div
                  className="[word-break:break-word] absolute font-sans font-[700] inset-[89.83%_59.01%_-0.41%_30.76%] leading-[0] not-italic text-[14.179px] text-black whitespace-nowrap"
                  data-node-id="1:143"
                >
                  <p className="leading-[1.17] mb-0 text-[12px] font-[400]">Hex: 231f20</p>
                  <p className="leading-[1.17] mb-0 text-[12px] font-[400]">CMYK: 0-0-0-100</p>
                  <p className="leading-[1.17] text-[12px] font-[400]">RGB: 0-0-0</p>
                </div>
                <div
                  className="[word-break:break-word] absolute font-sans font-[700] inset-[69.24%_36.95%_22.88%_54.94%] leading-[0] not-italic text-[14.179px] text-black whitespace-nowrap"
                  data-node-id="1:144"
                >
                  <p className="leading-[1.309] mb-0 text-[12px] font-[400]">White</p>
                  <p className="leading-[1.309] text-[12px] font-[400]">{`Digital & Print`}</p>
                </div>
                <p
                  className="[word-break:break-word] absolute font-sans font-[400] inset-[89.58%_87.47%_6.47%_6.36%] leading-[1.309] not-italic text-[12px] text-black whitespace-nowrap"
                  data-node-id="1:145"
                >
                  Print Black
                </p>
                <p
                  className="[word-break:break-word] absolute font-sans font-[700] inset-[-0.14%_36.85%_96.2%_54.94%] leading-[1.309] not-italic text-[14.179px] text-black whitespace-nowrap"
                  data-node-id="1:146"
                >
                  Dark Theme:
                </p>
                <div
                  className="absolute inset-[4.27%_6.39%_95.73%_6.56%]"
                  data-node-id="1:147"
                  data-name="Vector"
                >
                  <div className="absolute inset-[-0.1px_0]">
                    <img
                      loading="lazy"
                      decoding="async"
                      alt=""
                      className="block max-w-none size-full"
                      style={{
                        borderBottom: "1px solid #1f1d1d",
                        boxSizing: "content-box",
                        boxShadow: "none",
                        opacity: 1,
                      }}
                      src={imgVector21}
                    />
                  </div>
                </div>
                <div
                  className="absolute inset-[19.37%_63.82%_71.68%_24.99%]"
                  data-node-id="1:148"
                  data-name="Group"
                >
                  <img
                    loading="lazy"
                    decoding="async"
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgGroup5}
                  />
                </div>
                <div
                  className="absolute inset-[28.22%_63.78%_67.91%_28.55%]"
                  data-node-id="1:154"
                  data-name="Group"
                >
                  <img
                    loading="lazy"
                    decoding="async"
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgGroup6}
                  />
                </div>
                <div
                  className="absolute inset-[18.29%_89.35%_69.43%_5.9%]"
                  data-node-id="1:167"
                  data-name="Group"
                >
                  <img
                    loading="lazy"
                    decoding="async"
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgGroup7}
                  />
                </div>
                <div
                  className="absolute inset-[18.29%_76.4%_69.43%_18.85%]"
                  data-node-id="1:173"
                  data-name="Group"
                >
                  <img
                    loading="lazy"
                    decoding="async"
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgGroup8}
                  />
                </div>
                <div
                  className="absolute contents inset-[12.74%_6.39%_63.62%_54.97%]"
                  data-node-id="1:179"
                  data-name="Group"
                >
                  <div
                    className="absolute inset-[12.74%_6.39%_63.62%_54.97%]"
                    data-node-id="1:180"
                    data-name="Vector"
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgVector22}
                    />
                  </div>
                  <div
                    className="absolute contents inset-[19.16%_9.42%_67.47%_78.73%]"
                    data-node-id="1:181"
                    data-name="Group"
                  >
                    <div
                      className="absolute inset-[19.16%_9.46%_71.39%_78.73%]"
                      data-node-id="1:182"
                      data-name="Group"
                    >
                      <img
                        loading="lazy"
                        decoding="async"
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgGroup9}
                      />
                    </div>
                    <div
                      className="absolute inset-[28.49%_9.42%_67.47%_82.58%]"
                      data-node-id="1:188"
                      data-name="Group"
                    >
                      <img
                        loading="lazy"
                        decoding="async"
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgGroup10}
                      />
                    </div>
                  </div>
                  <div
                    className="absolute inset-[16.83%_36.28%_67.15%_58.53%]"
                    data-node-id="1:201"
                    data-name="Group"
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup11}
                    />
                  </div>
                  <div
                    className="absolute inset-[16.83%_22.7%_67.15%_72.11%]"
                    data-node-id="1:209"
                    data-name="Group"
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup12}
                    />
                  </div>
                </div>
                <div
                  className="absolute inset-[59.45%_6.39%_6.44%_6.36%]"
                  data-node-id="1:217"
                >
                  <img
                    loading="lazy"
                    decoding="async"
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgGroup13}
                  />
                </div>
              </div>
            </Canvas>
          </div>
          <AboutMobile />
        </main>
      )}
      {detail && (
        <div className="dialog-backdrop" onClick={() => setDetail(null)}>
          <section
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            aria-describedby="project-dialog-description"
            className="project-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="dialog-close"
              onClick={() => setDetail(null)}
              aria-label="Close"
            >
              ×
            </button>
            {detail.image && (
              <img
                loading="lazy"
                decoding="async"
                src={detail.image}
                alt={detail.title}
              />
            )}
            <span>EDWIN DESIGN STUDIO</span>
            <h2 id="project-dialog-title">{detail.title}</h2>
            <p id="project-dialog-description">{detail.description}</p>
            <button className="dialog-done" onClick={() => setDetail(null)}>
              Back to studio
            </button>
          </section>
        </div>
      )}
    </div>
  )
}
