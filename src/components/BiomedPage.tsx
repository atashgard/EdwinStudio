import { BrandArtwork, Photo } from "./ProjectMedia"
const assetPathPrefix = "/assets"
const imgZhavar011 = `${assetPathPrefix}/34e4b.webp`
const imgRectangle = `${assetPathPrefix}/d6e5b.webp`
const imgRectangle1 = `${assetPathPrefix}/da6f3.webp`
const imgRectangle3 = `${assetPathPrefix}/779fd.webp`
const imgRectangle5 = `${assetPathPrefix}/a27a4.webp`
const imgGroup3 = `${assetPathPrefix}/69f83.svg`
const imgVector = `${assetPathPrefix}/9ad84.svg`
const imgRectangle2 = `${assetPathPrefix}/3980e.svg`
const imgGroup4 = `${assetPathPrefix}/eea60.svg`
const imgVector1 = `${assetPathPrefix}/d3c6d.svg`
const imgVector2 = `${assetPathPrefix}/10b1b.svg`
const imgVector3 = `${assetPathPrefix}/97cdc.svg`
const imgVector4 = `${assetPathPrefix}/2b580.svg`
const imgVector5 = `${assetPathPrefix}/d4f2d.svg`
const imgRectangle4 = `${assetPathPrefix}/8cdb8.svg`
const imgGroup5 = `${assetPathPrefix}/24cc6.svg`
const imgVector6 = `${assetPathPrefix}/1e0ad.svg`
const imgVector7 = `${assetPathPrefix}/cc597.svg`
const imgVector8 = `${assetPathPrefix}/e9e5b.svg`
const imgVector9 = `${assetPathPrefix}/58e52.svg`
const imgVector10 = `${assetPathPrefix}/8c807.svg`
const imgGroup6 = `${assetPathPrefix}/47f11.svg`
const imgGroup7 = `${assetPathPrefix}/00d2f.svg`
const imgGroup8 = `${assetPathPrefix}/7bb62.svg`
const imgGroup9 = `${assetPathPrefix}/22cb1.svg`
const imgGroup10 = `${assetPathPrefix}/90e28.svg`
const imgGroup11 = `${assetPathPrefix}/ad385.svg`
const imgIsolationMode = `${assetPathPrefix}/049f8.svg`
const imgGroup12 = `${assetPathPrefix}/c48da.svg`
const imgGroup13 = `${assetPathPrefix}/efc32.svg`
const imgLayer1 = `${assetPathPrefix}/14c68.svg`
const imgLayer2 = `${assetPathPrefix}/f7714.svg`

export function BiomedPage() {
  return (
    <main
      id="46biomed"
      className="portfolio taban-page"
      aria-label="46 Biomed visual identity"
    >
      <h1 className="sr-only">46 Biomed — Power of Heal</h1>
      <div className="intro-content taban-content">
        <img
          fetchPriority="high"
          decoding="async"
          className="taban-photo taban-hero"
          src={imgZhavar011}
          alt="46 Biomed — red-to-blue gradient and custom 46 brand mark"
        />
        <section className="intro-panels" aria-label="Project overview">
          <article className="intro-panel">
            <h2>The challenge</h2>
            <p className="studio-body-copy">
              46Biomed needed a distinctive key element to communicate its
              connection to biotechnology while avoiding the visual clichés
              commonly associated with the field. The challenge was to develop a
              recognizable design language that could express the brand’s
              scientific nature without relying on predictable genetic or
              medical imagery.
            </p>
          </article>
          <article className="intro-panel">
            <h2>The Solution</h2>
            <p className="studio-body-copy">
              The genetic symbol was creatively integrated directly into the
              46Biomed logo, transforming it from a separate graphic element
              into an inseparable part of the brand mark. This approach created
              a distinctive and ownable identity that communicates biotechnology
              while maintaining a contemporary, unconventional, and non-clichéd
              visual character.
            </p>
          </article>
        </section>
        <Photo
          file="d2f3b.webp"
          alt="46 Biomed logo and Power of Heal tagline surrounded by red and blue organic forms"
          ratio="1021/412"
        />
        <section
          className="intro-panels"
          aria-label="Brand symbol and wordmark"
        >
          <div
            className="flex items-center"
            style={{
              background: "linear-gradient(90deg, #ff1d25, #3fa8f4)",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <BrandArtwork width={502} height={360}>
              <div
                className="absolute h-[144.808px] left-[130.39px] top-[107.29px] w-[241.61px]"
                data-node-id="13:1820"
                data-name="Isolation_Mode"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgIsolationMode}
                />
              </div>
            </BrandArtwork>
          </div>
          <div
            className="flex items-center"
            style={{ background: "#fff", borderRadius: 10, overflow: "hidden" }}
          >
            <BrandArtwork width={501} height={360}>
              <div
                className="absolute h-[89.286px] left-[111.25px] overflow-clip top-[135.57px] w-[278.75px]"
                data-node-id="13:1834"
                data-name="Layer_1"
              >
                <div
                  className="absolute inset-[4%_1.28%_42.64%_1.28%]"
                  data-node-id="13:1835"
                  data-name="Group"
                >
                  <div className="absolute inset-[-7.49%_-1.31%]">
                    <img
                      loading="lazy"
                      decoding="async"
                      alt=""
                      className="block max-w-none size-full"
                      src={imgGroup12}
                    />
                  </div>
                </div>
                <div
                  className="absolute inset-[76.14%_22.51%_0_20.78%]"
                  data-node-id="13:1848"
                  data-name="Group"
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
            </BrandArtwork>
          </div>
        </section>
        <section
          className="intro-panels"
          aria-label="Custom alphabet and genetic laboratory identity"
        >
          <div
            className="flex items-center"
            style={{ background: "#fff", borderRadius: 10, overflow: "hidden" }}
          >
            <BrandArtwork width={437} height={492}>
              <div
                className="absolute h-[206.092px] left-[84.23px] top-[143px] w-[280.769px]"
                data-node-id="13:1863"
                data-name="Layer_1"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgLayer1}
                />
              </div>
            </BrandArtwork>
          </div>
          <div
            className="flex items-center"
            style={{
              background: "#414042",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <BrandArtwork width={566} height={492}>
              <div
                className="absolute h-[248.693px] left-[133px] top-[122px] w-[301px]"
                data-node-id="13:1925"
                data-name="Layer_1"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgLayer2}
                />
              </div>
            </BrandArtwork>
          </div>
        </section>
        <section aria-label="Medical packaging, stationery and laboratory applications">
          <div
            style={{
              background: "#e6e7e8",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <BrandArtwork width={1017} height={538}>
              <div
                className="absolute contents left-[0px] top-[0px]"
                data-node-id="13:1724"
              >
                <div
                  className="absolute bg-[#e6e7e8] h-[538px] left-[0px] rounded-[8px] top-[0px] w-[1017px]"
                  data-node-id="13:1725"
                />
                <div
                  className="absolute h-[479px] left-[0px] overflow-clip top-[29px] w-[1017px]"
                  data-node-id="13:1726"
                  data-name="Layer_1"
                >
                  <div
                    className="absolute inset-[37.74%_-4.92%_35.24%_-2.95%]"
                    data-node-id="13:1727"
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
                    className="absolute inset-[-0.02%_8.04%_10.17%_63.75%]"
                    data-node-id="13:1730"
                    data-name="Rectangle"
                  >
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img
                        loading="lazy"
                        decoding="async"
                        alt=""
                        className="absolute left-0 max-w-none size-full top-0"
                        src={imgRectangle}
                      />
                    </div>
                  </div>
                  <div
                    className="absolute flex inset-[2.48%_41.48%_-1.98%_6.43%] items-center justify-center"
                    data-node-id="13:1731"
                    style={{ containerType: "size" }}
                  >
                    <div className="flex-none h-[hypot(-19.3275cqw,73.9476cqh)] rotate-[16.2deg] w-[hypot(80.6725cqw,26.0524cqh)]">
                      <div className="relative size-full" data-name="Rectangle">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img
                            loading="lazy"
                            decoding="async"
                            alt=""
                            className="absolute left-0 max-w-none size-full top-0"
                            src={imgRectangle1}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </BrandArtwork>
          </div>
        </section>
        <section aria-label="46 Biomed mobile brand applications">
          <div
            style={{
              background: "#414042",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <BrandArtwork width={1017} height={538}>
              <div
                className="absolute contents left-[0px] top-[0px]"
                data-node-id="13:1732"
              >
                <div
                  className="absolute bg-[#414042] h-[538px] left-[0px] rounded-[8px] top-[0px] w-[1017px]"
                  data-node-id="13:1733"
                />
                <div
                  className="absolute h-[383px] left-[128px] overflow-clip top-[78px] w-[762px]"
                  data-node-id="13:1734"
                  data-name="Frame"
                >
                  <div
                    className="absolute contents inset-[0_0.05%_-16.47%_0]"
                    data-node-id="13:1735"
                    data-name="Group"
                  >
                    <div
                      className="absolute contents inset-[0_0.05%_-16.47%_0]"
                      data-node-id="13:1736"
                      data-name="Layer 1"
                    >
                      <div
                        className="absolute inset-[0_67.14%_0.1%_6.89%]"
                        data-node-id="13:1737"
                        data-name="Vector"
                      >
                        <img
                          loading="lazy"
                          decoding="async"
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgVector}
                        />
                      </div>
                      <div
                        className="absolute contents inset-[11.84%_68.03%_35.58%_8.57%]"
                        data-node-id="13:1738"
                        data-name="Clip path group"
                      >
                        <div
                          className="absolute contents inset-[11.57%_69.43%_27.99%_8.1%]"
                          data-node-id="13:1741"
                          data-name="Group"
                        >
                          <div
                            className="absolute inset-[11.57%_69.43%_27.99%_8.1%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.565px_1.047px] mask-size-[178.307px_201.352px]"
                            data-node-id="13:1742"
                            style={{ maskImage: `url("${imgRectangle2}")` }}
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
                        </div>
                      </div>
                      <div
                        className="absolute inset-[56.92%_60.06%_24.07%_0]"
                        data-node-id="13:1743"
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
                      <div
                        className="absolute inset-[2.41%_75.39%_94.15%_15.49%]"
                        data-node-id="13:1746"
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
                        className="absolute inset-[96.99%_77.73%_3.01%_16.14%]"
                        data-node-id="13:1747"
                        data-name="Vector"
                      >
                        <div className="absolute inset-[-0.93px_-2%]">
                          <img
                            loading="lazy"
                            decoding="async"
                            alt=""
                            className="block max-w-none size-full"
                            src={imgVector2}
                          />
                        </div>
                      </div>
                      <div
                        className="absolute inset-[0_5.86%_0.1%_68.17%]"
                        data-node-id="13:1748"
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
                        className="absolute inset-[2.41%_14.29%_94.15%_76.59%]"
                        data-node-id="13:1749"
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
                        className="absolute inset-[96.99%_15.78%_3.01%_78.09%]"
                        data-node-id="13:1750"
                        data-name="Vector"
                      >
                        <div className="absolute inset-[-0.93px_-2%]">
                          <img
                            loading="lazy"
                            decoding="async"
                            alt=""
                            className="block max-w-none size-full"
                            src={imgVector5}
                          />
                        </div>
                      </div>
                      <div
                        className="absolute contents inset-[17.24%_7.43%_33.82%_69.74%]"
                        data-node-id="13:1751"
                        data-name="Clip path group"
                      >
                        <div
                          className="absolute contents inset-[17.34%_5.93%_24.97%_68.25%]"
                          data-node-id="13:1754"
                          data-name="Group"
                        >
                          <div
                            className="absolute inset-[17.34%_5.93%_24.97%_68.25%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[11.369px_-0.367px] mask-size-[173.986px_187.43px]"
                            data-node-id="13:1755"
                            style={{ maskImage: `url("${imgRectangle4}")` }}
                            data-name="Rectangle"
                          >
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                              <img
                                loading="lazy"
                                decoding="async"
                                alt=""
                                className="absolute left-0 max-w-none size-full top-0"
                                src={imgRectangle5}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="absolute inset-[57.11%_0.05%_24.29%_60.88%]"
                        data-node-id="13:1756"
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
                        className="absolute inset-[0_36.19%_0.1%_37.85%]"
                        data-node-id="13:1759"
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
                        className="absolute inset-[2.41%_44.61%_94.15%_46.27%]"
                        data-node-id="13:1760"
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
                        className="absolute contents inset-[18.9%_28.71%_-16.47%_31.22%]"
                        data-node-id="13:1761"
                        data-name="Clip path group"
                      >
                        <div
                          className="absolute contents inset-[7.4%_36.19%_0.06%_37.85%]"
                          data-node-id="13:1764"
                          data-name="Group"
                        >
                          <div
                            className="absolute inset-[7.4%_36.19%_0.06%_37.85%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-50.476px_44.07px] mask-size-[305.313px_373.695px] mix-blend-soft-light"
                            data-node-id="13:1765"
                            style={{ maskImage: `url("${imgVector8}")` }}
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
                        </div>
                      </div>
                      <div
                        className="absolute inset-[96.99%_46.1%_3.01%_47.76%]"
                        data-node-id="13:1766"
                        data-name="Vector"
                      >
                        <div className="absolute inset-[-0.93px_-2%]">
                          <img
                            loading="lazy"
                            decoding="async"
                            alt=""
                            className="block max-w-none size-full"
                            src={imgVector10}
                          />
                        </div>
                      </div>
                      <div
                        className="absolute inset-[10.32%_68.37%_89.68%_12.49%]"
                        data-node-id="13:1767"
                        data-name="Group"
                      >
                        <div className="absolute inset-[-1.08px_-0.74%]">
                          <img
                            loading="lazy"
                            decoding="async"
                            alt=""
                            className="block max-w-none size-full"
                            src={imgGroup6}
                          />
                        </div>
                      </div>
                      <div
                        className="absolute inset-[6.88%_88.37%_86.64%_8.37%]"
                        data-node-id="13:1770"
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
                        className="absolute inset-[10.61%_37.54%_89.39%_43.32%]"
                        data-node-id="13:1783"
                        data-name="Group"
                      >
                        <div className="absolute inset-[-1.08px_-0.74%]">
                          <img
                            loading="lazy"
                            decoding="async"
                            alt=""
                            className="block max-w-none size-full"
                            src={imgGroup8}
                          />
                        </div>
                      </div>
                      <div
                        className="absolute inset-[7.17%_57.54%_86.35%_39.2%]"
                        data-node-id="13:1786"
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
                        className="absolute inset-[10.57%_6.81%_89.43%_74.05%]"
                        data-node-id="13:1799"
                        data-name="Group"
                      >
                        <div className="absolute inset-[-1.08px_-0.74%]">
                          <img
                            loading="lazy"
                            decoding="async"
                            alt=""
                            className="block max-w-none size-full"
                            src={imgGroup10}
                          />
                        </div>
                      </div>
                      <div
                        className="absolute inset-[7.13%_26.81%_86.4%_69.93%]"
                        data-node-id="13:1802"
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
                    </div>
                  </div>
                </div>
              </div>
            </BrandArtwork>
          </div>
        </section>
        <section
          className="intro-panels taban-photo-row"
          aria-label="Packaging and printed brand materials"
        >
          <Photo
            file="14fd5.webp"
            alt="46 Biomed red-and-blue packaging and business cards"
            ratio="566/364"
          />
          <Photo
            file="cdf04.webp"
            alt="46 Biomed stationery and red-and-white packaging"
            ratio="436/364"
          />
        </section>
      </div>
    </main>
  )
}
