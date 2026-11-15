import { BrandArtwork, Photo } from "./ProjectMedia"
const assetPathPrefix = "/assets"
const img169011 = `${assetPathPrefix}/2ca45.webp`
const imgLayer1 = `${assetPathPrefix}/022d9.svg`
const imgLayer2 = `${assetPathPrefix}/9d5e8.svg`
const imgLayer3 = `${assetPathPrefix}/5f0d0.svg`
const imgLayer4 = `${assetPathPrefix}/024fd.svg`
const imgLayer5 = `${assetPathPrefix}/80b39.svg`
const imgLayer6 = `${assetPathPrefix}/be66e.svg`
const imgVector = `${assetPathPrefix}/f06be.svg`
const imgGroup3 = `${assetPathPrefix}/3132e.svg`
const imgGroup4 = `${assetPathPrefix}/ab93d.svg`
const imgVector1 = `${assetPathPrefix}/dd4a7.svg`
const imgGroup5 = `${assetPathPrefix}/fc967.svg`
const imgGroup6 = `${assetPathPrefix}/37b6c.svg`
const imgVector2 = `${assetPathPrefix}/0678d.svg`
const imgGroup7 = `${assetPathPrefix}/a4ef4.svg`
const imgGroup8 = `${assetPathPrefix}/9498c.svg`
const imgVector3 = `${assetPathPrefix}/97590.svg`
const imgVector4 = `${assetPathPrefix}/665e3.svg`

export function TabanPage() {
  return (
    <main
      className="portfolio taban-page"
      id="taban"
      aria-label="Taban Airlines visual identity"
    >
      <h1 className="sr-only">Taban Airlines — Connecting Horizons</h1>
      <div className="intro-content taban-content">
        <img
          fetchPriority="high"
          decoding="async"
          className="taban-photo taban-hero"
          src={img169011}
          alt="Connecting Horizons — Taban Airlines"
        />
        <section className="intro-panels" aria-label="Project overview">
          <article className="intro-panel">
            <h2>The challenge</h2>
            <p className="studio-body-copy">
              The previous logo was not optimized for aircraft tail
              applications, resulting in poor visual placement and balance at
              one of the brand’s most important touchpoints. The challenge was
              to solve this issue without compromising the brand’s established
              identity and recognition.
            </p>
          </article>
          <article className="intro-panel">
            <h2>The Solution</h2>
            <p className="studio-body-copy">
              The logo was strategically refined to achieve proper placement and
              visual balance on the aircraft tail while preserving its original
              identity. The updated design enhances real-world usability,
              maintains brand recognition, and delivers a stronger, more
              consistent presence across every application.
            </p>
          </article>
        </section>
        <section
          className="taban-logo-system"
          aria-label="Logo construction and color variations"
        >
          <div className="taban-logo-lockup">
            <img
              loading="lazy"
              decoding="async"
              src={imgLayer1}
              alt="Taban Airlines logo"
            />
          </div>
          <div className="taban-logo-construction">
            {[
              { label: "پرنده", image: imgLayer4 },
              { label: "خورشید", image: imgLayer3 },
              { label: "حرف “ت”", image: imgLayer2 },
            ].map(({ label, image }) => (
              <div className="taban-concept" key={label}>
                <span className="studio-persian" lang="fa" dir="rtl">
                  {label}
                </span>
                <img loading="lazy" decoding="async" src={image} alt="" />
              </div>
            ))}
          </div>
          <div className="taban-logo-variants">
            {[
              { color: "#fff", image: imgLayer5 },
              { color: "#241f20", image: imgLayer6 },
              { color: "#19124d", image: imgLayer5 },
              { color: "#ff8400", image: imgLayer6 },
            ].map(({ color, image }) => (
              <div key={color} style={{ backgroundColor: color }}>
                <img
                  loading="lazy"
                  decoding="async"
                  src={image}
                  alt="Taban symbol color variation"
                />
              </div>
            ))}
          </div>
        </section>
        <section aria-label="Taban brand symbol">
          <BrandArtwork width={1021} height={567}>
            <div
              className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
              data-node-id="13:315"
            >
              <div
                className="bg-[#241f20] col-1 h-[567px] ml-0 mt-0 relative rounded-[8px] row-1 w-[1021px]"
                data-node-id="13:316"
              />
              <div
                className="col-1 h-[523.249px] ml-0 mt-[43.75px] overflow-clip relative rounded-[8px] row-1 w-[527px]"
                data-node-id="13:317"
                data-name="Layer_1"
              >
                <div
                  className="absolute inset-[13.38%_33.53%_39%_19.19%]"
                  data-node-id="13:318"
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
                  className="absolute contents inset-[-7.53%_-6.64%_0_-0.12%]"
                  data-node-id="13:319"
                  data-name="Clip path group"
                >
                  <div
                    className="absolute contents inset-[-0.04%_-0.07%_-72.17%_-46.98%]"
                    data-node-id="13:322"
                    data-name="Group"
                  >
                    <div
                      className="absolute inset-[-0.04%_-0.07%_-72.17%_-46.98%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[246.939px_-39.16px] mask-size-[562.634px_562.633px]"
                      data-node-id="13:323"
                      style={{ maskImage: `url("${imgGroup3}")` }}
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
              </div>
              <div
                className="[word-break:break-word] col-1 font-['Archivo'] ml-[585px] mt-[86px] not-italic relative row-1 text-[0px] text-white whitespace-nowrap"
                data-node-id="13:326"
              >
                <p className="font-sans font-black leading-[94.6449966430664%] mb-0 text-[106.435px]">
                  TABAN
                </p>
                <p className="font-sans font-normal leading-[94.6449966430664%] text-[39.913px]">
                  airlines
                </p>
              </div>
            </div>
          </BrandArtwork>
        </section>
        <section className="taban-applications" aria-label="Brand applications">
          <div className="intro-panels taban-photo-row">
            <Photo
              file="8b502.webp"
              alt="Taban crew uniform and purple tie"
              ratio="306/499"
              style={{ height: "647px" }}
            />
            <Photo
              file="fa31c.webp"
              alt="Taban Airlines branding on the aircraft doorway"
              ratio="696/499"
            />
          </div>
          <div className="intro-panels taban-photo-row">
            <Photo
              file="627f2.webp"
              alt="Purple Taban headrest covers in the cabin"
              ratio="696/405"
            />
            <Photo
              file="02a75.webp"
              alt="Taban cabin crew and service trolley"
              ratio="306/402"
            />
          </div>
          <div className="intro-panels taban-photo-row">
            <Photo
              file="47a80.webp"
              alt="Passenger with a Connecting Horizons travel pillow"
              ratio="501/644"
              style={{ height: "676px" }}
            />
            <Photo
              file="512f1.webp"
              alt="Taban branded luggage in an airport"
              ratio="501/644"
            />
          </div>
        </section>
        <section
          className="taban-applications"
          aria-label="Aircraft livery and campaign"
        >
          <Photo
            file="19a52.webp"
            alt="Taban aircraft with the redesigned orange and purple livery"
            ratio="1022/346"
          />
          <div className="taban-aircraft-details">
            <Photo
              file="8ca20.webp"
              alt="Close-up of the redesigned aircraft tail"
              ratio="307/184"
            />
            <div
              className="taban-tail-art"
              aria-label="Mirrored aircraft tail graphics"
            >
              <BrandArtwork width={371} height={184}>
                <div className="relative" style={{ width: 371, height: 184 }}>
                  <div
                    className="absolute h-[85.191px] left-[47px] top-[49.14px] overflow-clip w-[278px]"
                    data-node-id="13:341"
                    data-name="Layer_1"
                  >
                    <div
                      className="absolute contents inset-[0.82%_2.82%_4.75%_2.81%]"
                      data-node-id="13:342"
                      data-name="Group"
                    >
                      <div
                        className="absolute contents inset-[0.82%_55.47%_4.75%_2.81%]"
                        data-node-id="13:343"
                        data-name="Group"
                      >
                        <div
                          className="absolute inset-[0.82%_55.47%_4.75%_2.81%]"
                          data-node-id="13:344"
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
                          className="absolute contents inset-[0.82%_55.47%_4.75%_2.81%]"
                          data-node-id="13:345"
                          data-name="Clip path group"
                        >
                          <div
                            className="absolute contents inset-[34.55%_67.08%_0.6%_0.57%]"
                            data-node-id="13:348"
                            data-name="Group"
                          >
                            <div
                              className="absolute inset-[34.55%_67.08%_0.6%_0.57%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[6.244px_-28.734px] mask-size-[115.978px_80.447px]"
                              data-node-id="13:349"
                              style={{ maskImage: `url("${imgGroup5}")` }}
                              data-name="Group"
                            >
                              <div className="absolute inset-[-5%_-0.57%_-0.93%_-1.76%]">
                                <img
                                  loading="lazy"
                                  decoding="async"
                                  alt=""
                                  className="block max-w-none size-full"
                                  src={imgGroup6}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="absolute contents inset-[0.82%_2.82%_4.75%_55.47%]"
                        data-node-id="13:352"
                        data-name="Group"
                      >
                        <div
                          className="absolute inset-[0.82%_2.82%_4.75%_55.47%]"
                          data-node-id="13:353"
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
                          className="absolute contents inset-[0.82%_2.82%_4.75%_55.47%]"
                          data-node-id="13:354"
                          data-name="Clip path group"
                        >
                          <div
                            className="absolute contents inset-[34.55%_0.56%_0.6%_67.08%]"
                            data-node-id="13:357"
                            data-name="Group"
                          >
                            <div
                              className="absolute inset-[34.55%_0.56%_0.6%_67.08%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-32.285px_-28.734px] mask-size-[115.978px_80.447px]"
                              data-node-id="13:358"
                              style={{ maskImage: `url("${imgGroup7}")` }}
                              data-name="Group"
                            >
                              <div className="absolute inset-[-3.76%_-1.76%_-0.93%_-1.5%]">
                                <img
                                  loading="lazy"
                                  decoding="async"
                                  alt=""
                                  className="block max-w-none size-full"
                                  src={imgGroup8}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute inset-[0.82%_2.81%_4.75%_55.47%]"
                      data-node-id="13:361"
                      data-name="Vector"
                    >
                      <div className="absolute inset-[-0.86%_-3.15%_-0.86%_-0.64%]">
                        <img
                          loading="lazy"
                          decoding="async"
                          alt=""
                          className="block max-w-none size-full"
                          src={imgVector3}
                        />
                      </div>
                    </div>
                    <div
                      className="absolute inset-[0.82%_55.47%_4.75%_2.81%]"
                      data-node-id="13:362"
                      data-name="Vector"
                    >
                      <div className="absolute inset-[-0.86%_-0.64%_-0.86%_-3.15%]">
                        <img
                          loading="lazy"
                          decoding="async"
                          alt=""
                          className="block max-w-none size-full"
                          src={imgVector4}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </BrandArtwork>
            </div>
            <Photo
              file="a1926.webp"
              alt="Close-up of the aircraft nose and main door"
              ratio="306/184"
            />
          </div>
          <div className="intro-panels taban-photo-row">
            <Photo
              file="3179c.webp"
              alt="Taban orange airport campaign"
              ratio="496/567"
            />
            <Photo
              file="627da.webp"
              alt="Taban orange travel campaign"
              ratio="496/567"
              className="taban-mirrored"
            />
          </div>
        </section>
        <Photo
          file="3ae0f.webp"
          alt="Taban Airlines stationery, business cards and Connecting Horizons brand materials"
          ratio="1022/608"
        />
      </div>
    </main>
  )
}
