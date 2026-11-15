import { BrandArtwork, Photo } from "./ProjectMedia"
const assetPathPrefix = "/assets"
const imgZhavar011 = `${assetPathPrefix}/478df.webp`
const imgAiImage = `${assetPathPrefix}/c6500.webp`
const imgRectangle3 = `${assetPathPrefix}/96f4f.webp`
const imgRectangle5 = `${assetPathPrefix}/f9240.webp`
const imgRectangle6 = `${assetPathPrefix}/ab59d.webp`
const imgRectangle8 = `${assetPathPrefix}/d5dce.webp`
const imgRectangle18 = `${assetPathPrefix}/751a5.webp`
const imgRectangle20 = `${assetPathPrefix}/37251.webp`
const imgRectangle22 = `${assetPathPrefix}/61559.webp`
const imgLayer1 = `${assetPathPrefix}/9edc7.svg`
const imgLayer2 = `${assetPathPrefix}/163d2.svg`
const imgGroup3 = `${assetPathPrefix}/5fdb6.svg`
const imgGroup4 = `${assetPathPrefix}/ba212.svg`
const imgGroup5 = `${assetPathPrefix}/91182.svg`
const imgGroup6 = `${assetPathPrefix}/9b18c.svg`
const imgGroup7 = `${assetPathPrefix}/df30a.svg`
const imgGroup8 = `${assetPathPrefix}/aeffc.svg`
const imgGroup9 = `${assetPathPrefix}/f09dc.svg`
const imgGroup10 = `${assetPathPrefix}/8ff9f.svg`
const imgLayer3 = `${assetPathPrefix}/48cb0.svg`
const imgLayer4 = `${assetPathPrefix}/c7306.svg`
const imgLayer5 = `${assetPathPrefix}/5da3f.svg`
const imgLayer6 = `${assetPathPrefix}/0fe77.svg`
const imgLayer7 = `${assetPathPrefix}/7cc65.svg`
const imgLayer8 = `${assetPathPrefix}/dafd9.svg`
const imgLayer9 = `${assetPathPrefix}/52e43.svg`
const imgIsolationMode = `${assetPathPrefix}/90840.svg`
const imgGroup36 = `${assetPathPrefix}/23824.svg`
const imgVector = `${assetPathPrefix}/75063.svg`
const imgGroup11 = `${assetPathPrefix}/eafd2.svg`
const imgVector1 = `${assetPathPrefix}/36787.svg`
const imgVector2 = `${assetPathPrefix}/53e26.svg`
const imgVector3 = `${assetPathPrefix}/7820d.svg`
const imgVector4 = `${assetPathPrefix}/ecd01.svg`
const imgVector5 = `${assetPathPrefix}/35167.svg`
const imgVector6 = `${assetPathPrefix}/0ce03.svg`
const imgVector7 = `${assetPathPrefix}/14f2e.svg`
const imgGroup12 = `${assetPathPrefix}/77c0b.svg`
const imgVector8 = `${assetPathPrefix}/633a9.svg`
const imgVector9 = `${assetPathPrefix}/ebaee.svg`
const imgVector10 = `${assetPathPrefix}/f1877.svg`
const imgVector11 = `${assetPathPrefix}/a88db.svg`
const imgGroup13 = `${assetPathPrefix}/135ce.svg`
const imgGroup14 = `${assetPathPrefix}/03529.svg`
const imgGroup15 = `${assetPathPrefix}/27479.svg`
const imgGroup16 = `${assetPathPrefix}/6b995.svg`
const imgGroup17 = `${assetPathPrefix}/8698d.svg`
const imgGroup18 = `${assetPathPrefix}/e1a32.svg`
const imgVector12 = `${assetPathPrefix}/a1366.svg`
const imgGroup19 = `${assetPathPrefix}/e43ce.svg`
const imgGroup20 = `${assetPathPrefix}/7384c.svg`
const imgGroup21 = `${assetPathPrefix}/1c883.svg`
const imgGroup22 = `${assetPathPrefix}/d2140.svg`
const imgGroup23 = `${assetPathPrefix}/271b5.svg`
const imgGroup24 = `${assetPathPrefix}/d156a.svg`
const imgGroup25 = `${assetPathPrefix}/009ce.svg`
const imgVector13 = `${assetPathPrefix}/7d95a.svg`
const imgVector14 = `${assetPathPrefix}/607da.svg`
const imgVector15 = `${assetPathPrefix}/59699.svg`
const imgVector16 = `${assetPathPrefix}/87649.svg`
const imgVector17 = `${assetPathPrefix}/62806.svg`
const imgVector18 = `${assetPathPrefix}/06224.svg`
const imgVector19 = `${assetPathPrefix}/8a0fe.svg`
const imgRectangle4 = `${assetPathPrefix}/572a1.svg`
const imgVector20 = `${assetPathPrefix}/33c43.svg`
const imgGroup26 = `${assetPathPrefix}/6feef.svg`
const imgGroup27 = `${assetPathPrefix}/89a72.svg`
const imgGroup28 = `${assetPathPrefix}/a5753.svg`
const imgGroup29 = `${assetPathPrefix}/d3704.svg`
const imgGroup30 = `${assetPathPrefix}/11c06.svg`
const imgGroup31 = `${assetPathPrefix}/4d0f2.svg`
const imgGroup32 = `${assetPathPrefix}/a6614.svg`
const imgVector21 = `${assetPathPrefix}/2e981.svg`
const imgVector22 = `${assetPathPrefix}/a2af2.svg`
const imgVector23 = `${assetPathPrefix}/b357a.svg`
const imgVector24 = `${assetPathPrefix}/84c95.svg`
const imgVector25 = `${assetPathPrefix}/eaa11.svg`
const imgVector26 = `${assetPathPrefix}/03a80.svg`
const imgVector27 = `${assetPathPrefix}/bc78a.svg`
const imgRectangle7 = `${assetPathPrefix}/cec3e.svg`
const imgGroup33 = `${assetPathPrefix}/f49a2.svg`
const imgGroup34 = `${assetPathPrefix}/349e7.svg`
const imgGroup35 = `${assetPathPrefix}/f8412.svg`
const imgGroup37 = `${assetPathPrefix}/b67d9.svg`
const imgVector28 = `${assetPathPrefix}/f870f.svg`
const imgRectangle19 = `${assetPathPrefix}/42553.svg`
const imgVector29 = `${assetPathPrefix}/c30cd.svg`
export function ZhavarPage() {
  return (
    <main
      className="portfolio taban-page"
      id="zhavar"
      aria-label="Zhavar brand identity"
    >
      <h1 className="sr-only">
        Zhavar — Brand identity and accessible digital experience
      </h1>
      <div className="intro-content taban-content">
        <img
          fetchPriority="high"
          decoding="async"
          className="taban-photo taban-hero"
          style={{ height: "713px" }}
          src={imgZhavar011}
          alt="Zhavar — olive-green brand identity and Persian wordmark"
        />
        <section className="intro-panels" aria-label="Project overview">
          <article className="intro-panel">
            <h2>The challenge</h2>
            <p className="studio-body-copy">
              Many elderly users experienced difficulties using the Zhavar
              application. Reduced vision, limited color perception, and
              unfamiliar Generation Z terminology made important buttons,
              messages, and interactions difficult to recognize and understand.
              The challenge was to create an accessible, intuitive experience
              without weakening the brand’s identity.
            </p>
          </article>
          <article className="intro-panel">
            <h2>The Solution</h2>
            <p className="studio-body-copy">
              Extensive field research identified the real needs of elderly
              users. The application was redesigned with improved contrast,
              clearer hierarchy, and more visible interface elements. A
              plain-language vocabulary guide was also created and shared with
              Zhavar support to ensure consistent, understandable communication
              across every touchpoint.
            </p>
          </article>
        </section>
        <Photo
          file="edfed.webp"
          alt="Zhavar black-and-white illustrated brand pattern"
          ratio="1022/236"
          className="zhavar-pattern-strip"
        />
        <section
          className="intro-panels"
          aria-label="Zhavar symbol and wordmark"
        >
          <div
            className="zhavar-logo-card"
            style={{ backgroundColor: "#e7e7e7" }}
          >
            <img
              loading="lazy"
              decoding="async"
              src={imgLayer1}
              alt="Zhavar geometric symbol"
            />
          </div>
          <div
            className="zhavar-logo-card"
            style={{ backgroundColor: "#7c8b55" }}
          >
            <img loading="lazy" decoding="async" src={imgLayer2} alt="ژاور" />
          </div>
        </section>
        <section
          className="taban-applications"
          aria-label="Logo inspiration and construction"
        >
          <BrandArtwork width={1021} height={659}>
            <div
              className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1"
              data-node-id="13:623"
            >
              <div
                className="bg-[#e7e7e7] col-1 h-[659px] ml-0 mt-0 relative rounded-[8px] row-1 w-[1021px]"
                data-node-id="13:624"
              />
              <div
                className="col-1 h-[659px] ml-0 mt-0 overflow-clip relative row-1 w-[1021px]"
                data-node-id="13:625"
                data-name="Frame"
              >
                <div
                  className="absolute contents inset-[-5.01%_-36.5%_-23.07%_-35.16%]"
                  data-node-id="13:626"
                  data-name="Group"
                >
                  <div
                    className="absolute contents inset-[-5.01%_-36.5%_-23.07%_-35.16%]"
                    data-node-id="13:627"
                    data-name="Layer 1"
                  >
                    <div
                      className="absolute contents inset-[-5.01%_-36.5%_-23.07%_-35.16%]"
                      data-node-id="13:628"
                      data-name="Group"
                    >
                      <div
                        className="absolute contents inset-[-5.01%_-36.5%_-23.07%_-35.16%] mix-blend-multiply"
                        data-node-id="13:629"
                        data-name="AI_Image.psd"
                      >
                        <div
                          className="absolute inset-[-5.01%_-36.5%_-23.07%_-35.16%] mix-blend-multiply opacity-25"
                          data-node-id="13:630"
                          data-name="AI_Image"
                        >
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img
                              loading="lazy"
                              decoding="async"
                              alt=""
                              className="absolute left-0 max-w-none size-full top-0"
                              src={imgAiImage}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="absolute contents inset-[36.25%_38.95%_30.42%_39.02%]"
                        data-node-id="13:631"
                        data-name="Group"
                      >
                        <div
                          className="absolute inset-[59.44%_38.95%_30.42%_45.63%]"
                          data-node-id="13:632"
                          data-name="Group"
                        >
                          <div className="absolute inset-[-1.93%_-0.11%_-1.51%_-0.52%]">
                            <img
                              loading="lazy"
                              decoding="async"
                              alt=""
                              className="block max-w-none size-full"
                              src={imgGroup3}
                            />
                          </div>
                        </div>
                        <div
                          className="absolute inset-[59.44%_45.56%_30.42%_39.02%]"
                          data-node-id="13:636"
                          data-name="Group"
                        >
                          <div className="absolute inset-[-1.93%_-0.52%_-1.51%_-0.11%]">
                            <img
                              loading="lazy"
                              decoding="async"
                              alt=""
                              className="block max-w-none size-full"
                              src={imgGroup4}
                            />
                          </div>
                        </div>
                        <div
                          className="absolute inset-[50.99%_38.95%_30.42%_44.18%]"
                          data-node-id="13:640"
                          data-name="Group"
                        >
                          <div className="absolute inset-[-1.03%_-0.19%_-0.49%_-0.67%]">
                            <img
                              loading="lazy"
                              decoding="async"
                              alt=""
                              className="block max-w-none size-full"
                              src={imgGroup5}
                            />
                          </div>
                        </div>
                        <div
                          className="absolute inset-[43.44%_38.95%_30.42%_42.04%]"
                          data-node-id="13:644"
                          data-name="Group"
                        >
                          <div className="absolute inset-[-0.75%_0_-0.24%_-0.64%]">
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
                          className="absolute inset-[36.25%_38.95%_30.42%_39.49%]"
                          data-node-id="13:648"
                          data-name="Group"
                        >
                          <div className="absolute inset-[-0.59%_0_-0.11%_-0.58%]">
                            <img
                              loading="lazy"
                              decoding="async"
                              alt=""
                              className="block max-w-none size-full"
                              src={imgGroup7}
                            />
                          </div>
                        </div>
                        <div
                          className="absolute inset-[50.99%_44.1%_30.42%_39.02%]"
                          data-node-id="13:652"
                          data-name="Group"
                        >
                          <div className="absolute inset-[-1.03%_-0.67%_-0.49%_-0.19%]">
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
                          className="absolute inset-[43.44%_41.96%_30.42%_39.02%]"
                          data-node-id="13:656"
                          data-name="Group"
                        >
                          <div className="absolute inset-[-0.75%_-0.63%_-0.24%_0]">
                            <img
                              loading="lazy"
                              decoding="async"
                              alt=""
                              className="block max-w-none size-full"
                              src={imgGroup9}
                            />
                          </div>
                        </div>
                        <div
                          className="absolute inset-[36.25%_39.41%_30.42%_39.02%]"
                          data-node-id="13:660"
                          data-name="Group"
                        >
                          <div className="absolute inset-[-0.59%_-0.58%_-0.11%_0]">
                            <img
                              loading="lazy"
                              decoding="async"
                              alt=""
                              className="block max-w-none size-full"
                              src={imgGroup10}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BrandArtwork>
          <div className="taban-logo-construction">
            {[
              {
                image: imgLayer3,
                alt: "Architectural construction of the Zhavar symbol",
              },
              { image: imgLayer4, alt: "Zhavar geometric symbol outline" },
              { image: imgLayer5, alt: "Zhavar symbol construction grid" },
            ].map(({ image, alt }) => (
              <div
                className="zhavar-logo-card zhavar-construction-card"
                key={image}
              >
                <img loading="lazy" decoding="async" src={image} alt={alt} />
              </div>
            ))}
          </div>
        </section>
        <section className="intro-panels" aria-label="Logo color variations">
          <div
            className="zhavar-logo-card"
            style={{ backgroundColor: "#44271e" }}
          >
            <div className="zhavar-lockup">
              <img loading="lazy" decoding="async" src={imgLayer9} alt="ژاور" />
              <img
                loading="lazy"
                decoding="async"
                src={imgLayer8}
                alt="Zhavar symbol on brown"
              />
            </div>
          </div>
          <div
            className="zhavar-logo-card"
            style={{ backgroundColor: "#2c301a" }}
          >
            <div className="zhavar-lockup">
              <img loading="lazy" decoding="async" src={imgLayer7} alt="ژاور" />
              <img
                loading="lazy"
                decoding="async"
                src={imgLayer6}
                alt="Zhavar symbol on dark olive"
              />
            </div>
          </div>
        </section>
        <section
          className="intro-panels taban-photo-row"
          aria-label="Brand color research"
        >
          <Photo
            file="ecd11.webp"
            alt="Color contrast and accessibility research"
            ratio="502/255"
          />
          <Photo
            file="72851.webp"
            alt="Brand color comparisons across digital applications"
            ratio="503/259"
          />
        </section>
        <section aria-label="Zhavar pattern system">
          <BrandArtwork width={1021} height={465}>
            <div
              className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
              data-node-id="13:752"
            >
              <div
                className="bg-[#7c8b55] col-1 h-[465px] ml-0 mt-0 relative rounded-[8px] row-1 w-[1021px]"
                data-node-id="13:753"
              />
              <div
                className="col-1 h-[465px] ml-0 mt-0 relative row-1 w-[1021px]"
                data-node-id="13:754"
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
              <div
                className="bg-[#e7e7e7] col-1 h-[122px] ml-0 mt-[308px] relative rounded-br-[59px] rounded-tr-[59px] row-1 w-[308px]"
                data-node-id="13:1276"
              />
              <div
                className="col-1 h-[53.183px] ml-[93px] mt-[342px] relative row-1 w-[148.46px]"
                data-node-id="13:1277"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgGroup36}
                />
              </div>
            </div>
          </BrandArtwork>
        </section>
        <section aria-label="Brand color palette">
          <BrandArtwork width={1017} height={538}>
            <div
              className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
              data-node-id="13:1286"
            >
              <div
                className="bg-[#e7e7e7] col-1 h-[538px] ml-0 mt-0 relative rounded-[8px] row-1 w-[1017px]"
                data-node-id="13:1287"
              />
              <div
                className="col-1 h-[362.665px] ml-[194px] mt-[88px] overflow-clip relative row-1 w-[630px]"
                data-node-id="13:1288"
                data-name="Layer_1"
              >
                <div
                  className="absolute inset-[0_88.02%_85.71%_0]"
                  data-node-id="13:1289"
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
                  className="absolute inset-[14.29%_91.78%_71.43%_0]"
                  data-node-id="13:1290"
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
                  className="absolute inset-[28.57%_91.78%_57.14%_0]"
                  data-node-id="13:1293"
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
                  className="absolute inset-[42.86%_91.78%_42.86%_0]"
                  data-node-id="13:1294"
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
                  className="absolute inset-[57.14%_88.02%_28.57%_0]"
                  data-node-id="13:1295"
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
                  className="absolute inset-[57.14%_28.3%_28.57%_59.72%]"
                  data-node-id="13:1296"
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
                  className="absolute inset-[71.43%_91.78%_14.28%_0]"
                  data-node-id="13:1297"
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
                  className="absolute inset-[85.71%_91.78%_0_0]"
                  data-node-id="13:1298"
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
                  className="absolute inset-[0_28.3%_85.71%_59.72%]"
                  data-node-id="13:1299"
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
                  className="absolute inset-[14.29%_32.06%_71.43%_59.72%]"
                  data-node-id="13:1300"
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
                <div
                  className="absolute inset-[28.57%_32.06%_57.14%_59.72%]"
                  data-node-id="13:1303"
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
                  className="absolute inset-[42.86%_32.06%_42.86%_59.72%]"
                  data-node-id="13:1304"
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
                  className="absolute inset-[71.43%_32.06%_14.28%_59.72%]"
                  data-node-id="13:1305"
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
                  className="absolute inset-[85.71%_32.06%_0_59.72%]"
                  data-node-id="13:1306"
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
                  className="[word-break:break-word] absolute contents font-sans font-normal inset-[89.42%_75.73%_4.29%_15.38%] leading-[normal] text-[12px] text-black whitespace-nowrap"
                  data-node-id="13:1307"
                  data-name="Group"
                >
                  <p
                    className="absolute inset-[89.42%_77.64%_7.27%_15.38%]"
                    data-node-id="13:1308"
                  >
                    #2C301A
                  </p>
                  <p
                    className="absolute inset-[92.4%_75.73%_4.29%_15.38%]"
                    data-node-id="13:1309"
                  >
                    Black Olive
                  </p>
                </div>
                <div
                  className="[word-break:break-word] absolute contents font-sans font-normal inset-[89.42%_18.23%_4.29%_74.94%] leading-[normal] text-[12px] text-black whitespace-nowrap"
                  data-node-id="13:1310"
                  data-name="Group"
                >
                  <p
                    className="absolute inset-[89.42%_18.23%_7.27%_74.94%]"
                    data-node-id="13:1311"
                  >
                    #44271E
                  </p>
                  <p
                    className="absolute inset-[92.4%_20.3%_4.29%_74.94%]"
                    data-node-id="13:1312"
                  >
                    Bistre
                  </p>
                </div>
                <div
                  className="[word-break:break-word] absolute contents font-sans font-normal inset-[74.99%_18.23%_18.44%_74.94%] leading-[normal] text-[12px] text-black whitespace-nowrap"
                  data-node-id="13:1313"
                  data-name="Group"
                >
                  <p
                    className="absolute inset-[74.99%_18.23%_21.7%_74.94%]"
                    data-node-id="13:1314"
                  >
                    #724939
                  </p>
                  <p
                    className="absolute inset-[78.25%_21.41%_18.44%_74.94%]"
                    data-node-id="13:1315"
                  >
                    Bole
                  </p>
                </div>
                <div
                  className="[word-break:break-word] absolute contents font-sans font-normal inset-[60.83%_16.01%_32.85%_74.94%] leading-[normal] text-[12px] text-black whitespace-nowrap"
                  data-node-id="13:1316"
                  data-name="Group"
                >
                  <p
                    className="absolute inset-[60.83%_17.92%_35.86%_74.94%]"
                    data-node-id="13:1317"
                  >
                    #9C6F59
                  </p>
                  <p
                    className="absolute inset-[63.84%_16.01%_32.85%_74.94%]"
                    data-node-id="13:1318"
                  >
                    Chamoisee
                  </p>
                </div>
                <div
                  className="[word-break:break-word] absolute contents font-sans font-normal inset-[46.61%_15.38%_47.2%_74.94%] leading-[normal] text-[12px] text-black whitespace-nowrap"
                  data-node-id="13:1319"
                  data-name="Group"
                >
                  <p
                    className="absolute inset-[46.61%_17.6%_50.08%_74.94%]"
                    data-node-id="13:1320"
                  >
                    #BA9485
                  </p>
                  <p
                    className="absolute inset-[49.49%_15.38%_47.2%_74.94%]"
                    data-node-id="13:1321"
                  >
                    Rosy Brown
                  </p>
                </div>
                <div
                  className="[word-break:break-word] absolute contents font-sans font-normal inset-[32.26%_13.15%_60.95%_74.94%] leading-[normal] text-[12px] text-black whitespace-nowrap"
                  data-node-id="13:1322"
                  data-name="Group"
                >
                  <p
                    className="absolute inset-[32.26%_17.12%_64.43%_74.94%]"
                    data-node-id="13:1323"
                  >
                    #CCB4AC
                  </p>
                  <p
                    className="absolute inset-[35.74%_13.15%_60.95%_74.94%]"
                    data-node-id="13:1324"
                  >
                    Pale Dogwood
                  </p>
                </div>
                <div
                  className="[word-break:break-word] absolute contents font-sans font-normal inset-[74.99%_70.81%_18.44%_15.38%] leading-[normal] text-[12px] text-black whitespace-nowrap"
                  data-node-id="13:1325"
                  data-name="Group"
                >
                  <p
                    className="absolute inset-[74.99%_77%_21.7%_15.38%]"
                    data-node-id="13:1326"
                  >
                    #4B542D
                  </p>
                  <p
                    className="absolute inset-[78.25%_70.81%_18.44%_15.38%]"
                    data-node-id="13:1327"
                  >
                    Dark Moss Green
                  </p>
                </div>
                <div
                  className="[word-break:break-word] absolute contents font-sans font-normal inset-[60.83%_75.1%_32.85%_15.38%] leading-[normal] text-[12px] text-black whitespace-nowrap"
                  data-node-id="13:1328"
                  data-name="Group"
                >
                  <p
                    className="absolute inset-[60.83%_77.32%_35.86%_15.38%]"
                    data-node-id="13:1329"
                  >
                    #7C8B55
                  </p>
                  <p
                    className="absolute inset-[63.84%_75.1%_32.85%_15.38%]"
                    data-node-id="13:1330"
                  >
                    Moss Green
                  </p>
                </div>
                <p
                  className="[word-break:break-word] absolute font-sans font-normal inset-[58.94%_92.61%_37.75%_1.04%] leading-[normal] text-[#e7e7e7] text-[12px] whitespace-nowrap"
                  data-node-id="13:1331"
                >
                  Primary
                </p>
                <p
                  className="[word-break:break-word] absolute font-sans font-normal inset-[1.65%_92.88%_95.04%_1.4%] leading-[normal] text-[#e7e7e7] text-[12px] whitespace-nowrap"
                  data-node-id="13:1332"
                >
                  Accent
                </p>
                <p
                  className="[word-break:break-word] absolute font-sans font-normal inset-[58.94%_30.44%_37.75%_60.99%] leading-[normal] text-[#e7e7e7] text-[12px] whitespace-nowrap"
                  data-node-id="13:1333"
                >
                  Secondary
                </p>
                <p
                  className="[word-break:break-word] absolute font-sans font-normal inset-[1.58%_30.52%_95.11%_60.91%] leading-[normal] text-[12px] text-black whitespace-nowrap"
                  data-node-id="13:1334"
                >
                  Secondary
                </p>
                <div
                  className="[word-break:break-word] absolute contents font-sans font-normal inset-[46.61%_70.5%_47.2%_15.38%] leading-[normal] text-[12px] text-black whitespace-nowrap"
                  data-node-id="13:1335"
                  data-name="Group"
                >
                  <p
                    className="absolute inset-[46.61%_77.16%_50.08%_15.38%]"
                    data-node-id="13:1336"
                  >
                    #9BA57A
                  </p>
                  <p
                    className="absolute inset-[49.49%_70.5%_47.2%_15.38%]"
                    data-node-id="13:1337"
                  >
                    Light Moss Green
                  </p>
                </div>
                <div
                  className="[word-break:break-word] absolute contents font-sans font-normal inset-[32.03%_77.16%_61.18%_15.38%] leading-[normal] text-[12px] text-black whitespace-nowrap"
                  data-node-id="13:1338"
                  data-name="Group"
                >
                  <p
                    className="absolute inset-[32.03%_77.16%_64.67%_15.38%]"
                    data-node-id="13:1339"
                  >
                    #B3B7A3
                  </p>
                  <p
                    className="absolute inset-[35.51%_77.48%_61.18%_15.38%]"
                    data-node-id="13:1340"
                  >
                    Ash Gray
                  </p>
                </div>
                <div
                  className="[word-break:break-word] absolute contents font-sans font-normal inset-[17.9%_77%_75.63%_15.38%] leading-[normal] text-[12px] text-black whitespace-nowrap"
                  data-node-id="13:1341"
                  data-name="Group"
                >
                  <p
                    className="absolute inset-[17.9%_77.48%_78.79%_15.38%]"
                    data-node-id="13:1342"
                  >
                    #E7E7E7
                  </p>
                  <p
                    className="absolute inset-[21.06%_77%_75.63%_15.38%]"
                    data-node-id="13:1343"
                  >
                    Platinum
                  </p>
                </div>
                <div
                  className="[word-break:break-word] absolute contents font-sans font-normal inset-[17.9%_17.44%_75.63%_74.94%] leading-[normal] text-[12px] text-black whitespace-nowrap"
                  data-node-id="13:1344"
                  data-name="Group"
                >
                  <p
                    className="absolute inset-[17.9%_17.92%_78.79%_74.94%]"
                    data-node-id="13:1345"
                  >
                    #E7E7E7
                  </p>
                  <p
                    className="absolute inset-[21.06%_17.44%_75.63%_74.94%]"
                    data-node-id="13:1346"
                  >
                    Platinum
                  </p>
                </div>
                <div
                  className="[word-break:break-word] absolute contents font-sans font-normal inset-[3.58%_17.6%_89.88%_74.94%] leading-[normal] text-[12px] text-black whitespace-nowrap"
                  data-node-id="13:1347"
                  data-name="Group"
                >
                  <p
                    className="absolute inset-[3.58%_17.6%_93.11%_74.94%]"
                    data-node-id="13:1348"
                  >
                    #E9AC69
                  </p>
                  <p
                    className="absolute inset-[6.81%_20.61%_89.88%_74.94%]"
                    data-node-id="13:1349"
                  >
                    Fawn
                  </p>
                </div>
                <div
                  className="[word-break:break-word] absolute contents font-sans font-normal inset-[3.58%_74.94%_89.88%_15.38%] leading-[normal] text-[12px] text-black whitespace-nowrap"
                  data-node-id="13:1350"
                  data-name="Group"
                >
                  <p
                    className="absolute inset-[3.58%_77.16%_93.11%_15.38%]"
                    data-node-id="13:1351"
                  >
                    #CB4433
                  </p>
                  <p
                    className="absolute inset-[6.81%_74.94%_89.88%_15.38%]"
                    data-node-id="13:1352"
                  >
                    Persian Red
                  </p>
                </div>
                <p
                  className="[word-break:break-word] absolute font-sans font-normal inset-[5.19%_58.52%_91.5%_38.46%] leading-[normal] text-[12px] text-black whitespace-nowrap"
                  data-node-id="13:1353"
                >
                  10%
                </p>
                <p
                  className="[word-break:break-word] absolute font-sans font-normal inset-[19.48%_58.37%_77.21%_38.29%] leading-[normal] text-[12px] text-black whitespace-nowrap"
                  data-node-id="13:1354"
                >
                  30%
                </p>
                <p
                  className="[word-break:break-word] absolute font-sans font-normal inset-[62.34%_58.24%_34.35%_38.27%] leading-[normal] text-[12px] text-black whitespace-nowrap"
                  data-node-id="13:1355"
                >
                  60%
                </p>
                <div
                  className="absolute inset-[28.57%_65.89%_0_33.07%]"
                  data-node-id="13:1356"
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
                <div
                  className="absolute inset-[0_65.89%_85.71%_33.07%]"
                  data-node-id="13:1360"
                  data-name="Group"
                >
                  <img
                    loading="lazy"
                    decoding="async"
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgGroup14}
                  />
                </div>
                <div
                  className="absolute inset-[14.29%_65.89%_71.43%_33.07%]"
                  data-node-id="13:1364"
                  data-name="Group"
                >
                  <img
                    loading="lazy"
                    decoding="async"
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgGroup15}
                  />
                </div>
                <p
                  className="[word-break:break-word] absolute font-sans font-normal inset-[5.19%_0.16%_91.5%_96.83%] leading-[normal] text-[12px] text-black whitespace-nowrap"
                  data-node-id="13:1368"
                >
                  10%
                </p>
                <p
                  className="[word-break:break-word] absolute font-sans font-normal inset-[19.48%_0.01%_77.21%_96.66%] leading-[normal] text-[12px] text-black whitespace-nowrap"
                  data-node-id="13:1369"
                >
                  30%
                </p>
                <p
                  className="[word-break:break-word] absolute font-sans font-normal inset-[62.34%_-0.13%_34.35%_96.64%] leading-[normal] text-[12px] text-black whitespace-nowrap"
                  data-node-id="13:1370"
                >
                  60%
                </p>
                <div
                  className="absolute inset-[28.57%_7.52%_0_91.44%]"
                  data-node-id="13:1371"
                  data-name="Group"
                >
                  <img
                    loading="lazy"
                    decoding="async"
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgGroup16}
                  />
                </div>
                <div
                  className="absolute inset-[0_7.52%_85.71%_91.44%]"
                  data-node-id="13:1375"
                  data-name="Group"
                >
                  <img
                    loading="lazy"
                    decoding="async"
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgGroup17}
                  />
                </div>
                <div
                  className="absolute inset-[14.29%_7.52%_71.43%_91.44%]"
                  data-node-id="13:1379"
                  data-name="Group"
                >
                  <img
                    loading="lazy"
                    decoding="async"
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgGroup18}
                  />
                </div>
              </div>
            </div>
          </BrandArtwork>
        </section>
        <Photo
          file="061ff.webp"
          alt="Zhavar environmental branding on glass doors"
          ratio="1022/375"
        />
        <section
          className="intro-panels taban-photo-row"
          aria-label="Website and mobile experience"
        >
          <Photo
            file="89227.webp"
            alt="Zhavar website displayed on a desktop screen"
            ratio="500/579"
          />
          <Photo
            file="435a1.webp"
            alt="Zhavar application in use on a smartphone"
            ratio="501/579"
          />
        </section>
        <section
          className="taban-aircraft-details"
          aria-label="Zhavar mobile application screens"
        >
          <BrandArtwork width={306} height={425}>
            <div
              className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1"
              data-node-id="13:1432"
            >
              <div
                className="bg-[#9ba580] col-1 h-[425px] ml-0 mt-0 relative rounded-[8px] row-1 w-[306px]"
                data-node-id="13:1433"
              />
              <div
                className="col-1 h-[340.828px] ml-[70.31px] mt-[43px] overflow-clip relative row-1 w-[165.384px]"
                data-node-id="13:1434"
                data-name="Frame"
              >
                <div
                  className="absolute contents inset-0"
                  data-node-id="13:1435"
                  data-name="Group"
                >
                  <div
                    className="absolute contents inset-0"
                    data-node-id="13:1436"
                    data-name="Layer 1"
                  >
                    <div
                      className="absolute contents inset-0"
                      data-node-id="13:1437"
                      data-name="Group"
                    >
                      <div
                        className="absolute inset-[0_0.47%_0_0.81%]"
                        data-node-id="13:1438"
                        data-name="Vector"
                      >
                        <img
                          loading="lazy"
                          decoding="async"
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgVector20}
                        />
                      </div>
                      <div
                        className="absolute inset-[0.01%_0.77%_92.22%_4.54%] mix-blend-screen"
                        data-node-id="13:1439"
                        data-name="Group"
                      >
                        <img
                          loading="lazy"
                          decoding="async"
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgGroup26}
                        />
                      </div>
                      <div
                        className="absolute inset-[0.63%_1.76%_0.62%_2.1%]"
                        data-node-id="13:1441"
                        data-name="Group"
                      >
                        <img
                          loading="lazy"
                          decoding="async"
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgGroup27}
                        />
                      </div>
                      <div
                        className="absolute inset-[92.22%_0.77%_0.01%_4.54%] mix-blend-screen"
                        data-node-id="13:1444"
                        data-name="Group"
                      >
                        <img
                          loading="lazy"
                          decoding="async"
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgGroup28}
                        />
                      </div>
                      <div
                        className="absolute inset-[20.92%_0_68.38%_99.53%]"
                        data-node-id="13:1446"
                        data-name="Group"
                      >
                        <img
                          loading="lazy"
                          decoding="async"
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgGroup29}
                        />
                      </div>
                      <div
                        className="absolute inset-[20.92%_99.19%_71.89%_0]"
                        data-node-id="13:1449"
                        data-name="Group"
                      >
                        <img
                          loading="lazy"
                          decoding="async"
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgGroup30}
                        />
                      </div>
                      <div
                        className="absolute inset-[29.93%_99.19%_62.87%_0]"
                        data-node-id="13:1453"
                        data-name="Group"
                      >
                        <img
                          loading="lazy"
                          decoding="async"
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgGroup31}
                        />
                      </div>
                      <div
                        className="absolute inset-[12.41%_99.19%_83.69%_0]"
                        data-node-id="13:1457"
                        data-name="Group"
                      >
                        <img
                          loading="lazy"
                          decoding="async"
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgGroup32}
                        />
                      </div>
                      <div
                        className="absolute inset-[99.82%_44.07%_0.01%_44.41%]"
                        data-node-id="13:1461"
                        data-name="Vector"
                      >
                        <img
                          loading="lazy"
                          decoding="async"
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgVector21}
                        />
                      </div>
                      <div
                        className="absolute inset-[2.03%_37.49%_94.46%_37.49%]"
                        data-node-id="13:1462"
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
                        className="absolute contents inset-[3.02%_40.53%_95.45%_56.3%]"
                        data-node-id="13:1463"
                        data-name="Group"
                      >
                        <div
                          className="absolute inset-[3.02%_40.53%_95.45%_56.3%]"
                          data-node-id="13:1464"
                          data-name="Vector"
                        >
                          <img
                            loading="lazy"
                            decoding="async"
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgVector23}
                          />
                        </div>
                        <div
                          className="absolute inset-[3.05%_40.57%_95.47%_56.39%]"
                          data-node-id="13:1465"
                          data-name="Rectangle"
                        >
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img
                              loading="lazy"
                              decoding="async"
                              alt=""
                              className="absolute left-0 max-w-none size-full top-0"
                              src={imgRectangle6}
                            />
                          </div>
                        </div>
                        <div
                          className="absolute inset-[3.35%_41.21%_95.77%_56.98%]"
                          data-node-id="13:1466"
                          data-name="Vector"
                        >
                          <img
                            loading="lazy"
                            decoding="async"
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgVector24}
                          />
                        </div>
                        <div
                          className="absolute contents inset-[3.41%_41.32%_95.83%_57.1%]"
                          data-node-id="13:1467"
                          data-name="Camera"
                        >
                          <div
                            className="absolute inset-[3.41%_41.32%_95.83%_57.1%]"
                            data-node-id="13:1468"
                            data-name="Vector"
                          >
                            <img
                              loading="lazy"
                              decoding="async"
                              alt=""
                              className="absolute block inset-0 max-w-none size-full"
                              src={imgVector25}
                            />
                          </div>
                          <div
                            className="absolute inset-[3.41%_41.32%_95.83%_57.1%] mix-blend-multiply"
                            data-node-id="13:1469"
                            data-name="Vector"
                          >
                            <img
                              loading="lazy"
                              decoding="async"
                              alt=""
                              className="absolute block inset-0 max-w-none size-full"
                              src={imgVector26}
                            />
                          </div>
                        </div>
                        <div
                          className="absolute inset-[3.85%_41.4%_95.88%_58.04%] mix-blend-screen"
                          data-node-id="13:1470"
                          data-name="Vector"
                        >
                          <img
                            loading="lazy"
                            decoding="async"
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgVector27}
                          />
                        </div>
                      </div>
                      <div
                        className="absolute contents inset-[1.02%_1.88%_0.9%_2.22%]"
                        data-node-id="13:1471"
                        data-name="Clip path group"
                      >
                        <div
                          className="absolute contents inset-[0.35%_2.06%_-0.34%_2.72%]"
                          data-node-id="13:1474"
                          data-name="Group"
                        >
                          <div
                            className="absolute inset-[0.35%_2.06%_-0.34%_2.72%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.822px_2.277px] mask-size-[158.599px_334.293px]"
                            data-node-id="13:1475"
                            style={{ maskImage: `url("${imgRectangle7}")` }}
                            data-name="Rectangle"
                          >
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                              <img
                                loading="lazy"
                                decoding="async"
                                alt=""
                                className="absolute left-0 max-w-none size-full top-0"
                                src={imgRectangle8}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BrandArtwork>
          <div
            className="zhavar-screens-center"
            style={{ aspectRatio: "306/425", display: "flex", flexDirection: "column", justifyContent: "center", background: "#e7e7e7", borderRadius: 8, overflow: "hidden" }}
          >
            <BrandArtwork width={371} height={425}>
              <div
                className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1"
                data-node-id="13:1476"
              >
                <div
                  className="bg-[#e7e7e7] col-1 h-[425px] ml-0 mt-0 relative rounded-[8px] row-1 w-[371px]"
                  data-node-id="13:1477"
                />
                <div
                  className="col-1 h-[340.68px] ml-[103px] mt-[43px] overflow-clip relative row-1 w-[165.312px]"
                  data-node-id="13:1478"
                  data-name="Frame"
                >
                  <div
                    className="absolute contents inset-0"
                    data-node-id="13:1479"
                    data-name="Group"
                  >
                    <div
                      className="absolute contents inset-0"
                      data-node-id="13:1480"
                      data-name="Layer 1"
                    >
                      <div
                        className="absolute contents inset-0"
                        data-node-id="13:1481"
                        data-name="Group"
                      >
                        <div
                          className="absolute inset-[0_0.47%_0_0.81%]"
                          data-node-id="13:1482"
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
                          className="absolute inset-[0.01%_0.77%_92.22%_4.54%] mix-blend-screen"
                          data-node-id="13:1483"
                          data-name="Group"
                        >
                          <img
                            loading="lazy"
                            decoding="async"
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgGroup19}
                          />
                        </div>
                        <div
                          className="absolute inset-[0.63%_1.76%_0.62%_2.1%]"
                          data-node-id="13:1485"
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
                          className="absolute inset-[92.22%_0.77%_0.01%_4.54%] mix-blend-screen"
                          data-node-id="13:1488"
                          data-name="Group"
                        >
                          <img
                            loading="lazy"
                            decoding="async"
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgGroup21}
                          />
                        </div>
                        <div
                          className="absolute inset-[20.92%_0_68.38%_99.53%]"
                          data-node-id="13:1490"
                          data-name="Group"
                        >
                          <img
                            loading="lazy"
                            decoding="async"
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgGroup33}
                          />
                        </div>
                        <div
                          className="absolute inset-[20.92%_99.19%_71.89%_0]"
                          data-node-id="13:1493"
                          data-name="Group"
                        >
                          <img
                            loading="lazy"
                            decoding="async"
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgGroup34}
                          />
                        </div>
                        <div
                          className="absolute inset-[29.93%_99.19%_62.87%_0]"
                          data-node-id="13:1497"
                          data-name="Group"
                        >
                          <img
                            loading="lazy"
                            decoding="async"
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgGroup35}
                          />
                        </div>
                        <div
                          className="absolute inset-[12.41%_99.19%_83.69%_0]"
                          data-node-id="13:1501"
                          data-name="Group"
                        >
                          <img
                            loading="lazy"
                            decoding="async"
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgGroup37}
                          />
                        </div>
                        <div
                          className="absolute inset-[99.82%_44.07%_0.01%_44.41%]"
                          data-node-id="13:1505"
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
                          className="absolute inset-[2.03%_37.49%_94.46%_37.49%]"
                          data-node-id="13:1506"
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
                          className="absolute contents inset-[3.02%_40.53%_95.45%_56.3%]"
                          data-node-id="13:1507"
                          data-name="Group"
                        >
                          <div
                            className="absolute inset-[3.02%_40.53%_95.45%_56.31%]"
                            data-node-id="13:1508"
                            data-name="Vector"
                          >
                            <img
                              loading="lazy"
                              decoding="async"
                              alt=""
                              className="absolute block inset-0 max-w-none size-full"
                              src={imgVector15}
                            />
                          </div>
                          <div
                            className="absolute inset-[3.05%_40.62%_95.47%_56.34%]"
                            data-node-id="13:1509"
                            data-name="Rectangle"
                          >
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                              <img
                                loading="lazy"
                                decoding="async"
                                alt=""
                                className="absolute left-0 max-w-none size-full top-0"
                                src={imgRectangle18}
                              />
                            </div>
                          </div>
                          <div
                            className="absolute inset-[3.35%_41.21%_95.77%_56.98%]"
                            data-node-id="13:1510"
                            data-name="Vector"
                          >
                            <img
                              loading="lazy"
                              decoding="async"
                              alt=""
                              className="absolute block inset-0 max-w-none size-full"
                              src={imgVector28}
                            />
                          </div>
                          <div
                            className="absolute contents inset-[3.41%_41.32%_95.83%_57.1%]"
                            data-node-id="13:1511"
                            data-name="Camera"
                          >
                            <div
                              className="absolute inset-[3.41%_41.32%_95.83%_57.1%]"
                              data-node-id="13:1512"
                              data-name="Vector"
                            >
                              <img
                                loading="lazy"
                                decoding="async"
                                alt=""
                                className="absolute block inset-0 max-w-none size-full"
                                src={imgVector17}
                              />
                            </div>
                            <div
                              className="absolute inset-[3.41%_41.32%_95.83%_57.1%] mix-blend-multiply"
                              data-node-id="13:1513"
                              data-name="Vector"
                            >
                              <img
                                loading="lazy"
                                decoding="async"
                                alt=""
                                className="absolute block inset-0 max-w-none size-full"
                                src={imgVector18}
                              />
                            </div>
                          </div>
                          <div
                            className="absolute inset-[3.85%_41.4%_95.87%_58.04%] mix-blend-screen"
                            data-node-id="13:1514"
                            data-name="Vector"
                          >
                            <img
                              loading="lazy"
                              decoding="async"
                              alt=""
                              className="absolute block inset-0 max-w-none size-full"
                              src={imgVector19}
                            />
                          </div>
                        </div>
                        <div
                          className="absolute contents inset-[1.16%_1.88%_1.16%_2.22%]"
                          data-node-id="13:1515"
                          data-name="Clip path group"
                        >
                          <div
                            className="absolute contents inset-[0.35%_2.06%_-0.34%_2.72%]"
                            data-node-id="13:1518"
                            data-name="Group"
                          >
                            <div
                              className="absolute inset-[0.35%_2.06%_-0.34%_2.72%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.822px_2.762px] mask-size-[158.53px_332.773px]"
                              data-node-id="13:1519"
                              style={{ maskImage: `url("${imgRectangle19}")` }}
                              data-name="Rectangle"
                            >
                              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <img
                                  loading="lazy"
                                  decoding="async"
                                  alt=""
                                  className="absolute left-0 max-w-none size-full top-0"
                                  src={imgRectangle20}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </BrandArtwork>
          </div>
          <BrandArtwork width={306} height={425}>
            <div
              className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1"
              data-node-id="13:1388"
            >
              <div
                className="bg-[#ba9485] col-1 h-[425px] ml-0 mt-0 relative rounded-[8px] row-1 w-[306px]"
                data-node-id="13:1389"
              />
              <div
                className="col-1 h-[340.68px] ml-[70px] mt-[43px] overflow-clip relative row-1 w-[165.312px]"
                data-node-id="13:1390"
                data-name="Frame"
              >
                <div
                  className="absolute contents inset-0"
                  data-node-id="13:1391"
                  data-name="Group"
                >
                  <div
                    className="absolute contents inset-0"
                    data-node-id="13:1392"
                    data-name="Layer 1"
                  >
                    <div
                      className="absolute contents inset-0"
                      data-node-id="13:1393"
                      data-name="Group"
                    >
                      <div
                        className="absolute inset-[0_0.47%_0_0.81%]"
                        data-node-id="13:1394"
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
                        className="absolute inset-[0.01%_0.77%_92.22%_4.54%] mix-blend-screen"
                        data-node-id="13:1395"
                        data-name="Group"
                      >
                        <img
                          loading="lazy"
                          decoding="async"
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgGroup19}
                        />
                      </div>
                      <div
                        className="absolute inset-[0.63%_1.76%_0.62%_2.1%]"
                        data-node-id="13:1397"
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
                        className="absolute inset-[92.22%_0.77%_0.01%_4.54%] mix-blend-screen"
                        data-node-id="13:1400"
                        data-name="Group"
                      >
                        <img
                          loading="lazy"
                          decoding="async"
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgGroup21}
                        />
                      </div>
                      <div
                        className="absolute inset-[20.92%_0_68.38%_99.53%]"
                        data-node-id="13:1402"
                        data-name="Group"
                      >
                        <img
                          loading="lazy"
                          decoding="async"
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgGroup22}
                        />
                      </div>
                      <div
                        className="absolute inset-[20.92%_99.19%_71.89%_0]"
                        data-node-id="13:1405"
                        data-name="Group"
                      >
                        <img
                          loading="lazy"
                          decoding="async"
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgGroup23}
                        />
                      </div>
                      <div
                        className="absolute inset-[29.93%_99.19%_62.87%_0]"
                        data-node-id="13:1409"
                        data-name="Group"
                      >
                        <img
                          loading="lazy"
                          decoding="async"
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgGroup24}
                        />
                      </div>
                      <div
                        className="absolute inset-[12.41%_99.19%_83.69%_0]"
                        data-node-id="13:1413"
                        data-name="Group"
                      >
                        <img
                          loading="lazy"
                          decoding="async"
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgGroup25}
                        />
                      </div>
                      <div
                        className="absolute inset-[99.82%_44.07%_0.01%_44.41%]"
                        data-node-id="13:1417"
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
                        className="absolute inset-[2.03%_37.49%_94.46%_37.49%]"
                        data-node-id="13:1418"
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
                        className="absolute contents inset-[3.02%_40.53%_95.45%_56.3%]"
                        data-node-id="13:1419"
                        data-name="Group"
                      >
                        <div
                          className="absolute inset-[3.02%_40.53%_95.45%_56.31%]"
                          data-node-id="13:1420"
                          data-name="Vector"
                        >
                          <img
                            loading="lazy"
                            decoding="async"
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgVector15}
                          />
                        </div>
                        <div
                          className="absolute inset-[3.05%_40.6%_95.47%_56.36%]"
                          data-node-id="13:1421"
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
                          className="absolute inset-[3.35%_41.21%_95.77%_56.98%]"
                          data-node-id="13:1422"
                          data-name="Vector"
                        >
                          <img
                            loading="lazy"
                            decoding="async"
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgVector16}
                          />
                        </div>
                        <div
                          className="absolute contents inset-[3.41%_41.32%_95.83%_57.1%]"
                          data-node-id="13:1423"
                          data-name="Camera"
                        >
                          <div
                            className="absolute inset-[3.41%_41.32%_95.83%_57.1%]"
                            data-node-id="13:1424"
                            data-name="Vector"
                          >
                            <img
                              loading="lazy"
                              decoding="async"
                              alt=""
                              className="absolute block inset-0 max-w-none size-full"
                              src={imgVector17}
                            />
                          </div>
                          <div
                            className="absolute inset-[3.41%_41.32%_95.83%_57.1%] mix-blend-multiply"
                            data-node-id="13:1425"
                            data-name="Vector"
                          >
                            <img
                              loading="lazy"
                              decoding="async"
                              alt=""
                              className="absolute block inset-0 max-w-none size-full"
                              src={imgVector18}
                            />
                          </div>
                        </div>
                        <div
                          className="absolute inset-[3.85%_41.4%_95.87%_58.04%] mix-blend-screen"
                          data-node-id="13:1426"
                          data-name="Vector"
                        >
                          <img
                            loading="lazy"
                            decoding="async"
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgVector19}
                          />
                        </div>
                      </div>
                      <div
                        className="absolute contents inset-[1.16%_2.05%]"
                        data-node-id="13:1427"
                        data-name="Clip path group"
                      >
                        <div
                          className="absolute contents inset-[0.35%_2.06%_-0.34%_2.72%]"
                          data-node-id="13:1430"
                          data-name="Group"
                        >
                          <div
                            className="absolute inset-[0.35%_2.06%_-0.34%_2.72%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.102px_2.762px] mask-size-[158.53px_332.773px]"
                            data-node-id="13:1431"
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BrandArtwork>
        </section>
        <Photo
          file="94663.webp"
          alt="Zhavar green advertising posters in a metro station"
          ratio="1022/518"
        />
        <section
          className="intro-panels"
          aria-label="Digital and printed brand applications"
        >
          <BrandArtwork width={497} height={425}>
            <div
              className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1"
              data-node-id="13:1522"
            >
              <div
                className="bg-[#e7e7e7] col-1 h-[425px] ml-0 mt-0 relative rounded-[8px] row-1 w-[497px]"
                data-node-id="13:1523"
              />
              <div
                className="col-1 h-[425px] ml-0 mt-0 overflow-clip relative rounded-[8px] row-1 w-[497px]"
                data-node-id="13:1524"
                data-name="Isolation_Mode"
              >
                <div
                  className="absolute inset-[-20.23%_-34.61%_-20.33%_-25.76%]"
                  data-node-id="13:1525"
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
                  className="absolute inset-[12.2%_29.15%_11.73%_27.62%]"
                  data-node-id="13:1526"
                  data-name="Rectangle"
                >
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img
                      loading="lazy"
                      decoding="async"
                      alt=""
                      className="absolute left-0 max-w-none size-full top-0"
                      src={imgRectangle22}
                    />
                  </div>
                </div>
              </div>
            </div>
          </BrandArtwork>
          <Photo
            file="916cd.webp"
            alt="Zhavar printed brand materials and packaging"
            ratio="501/425"
            style={{ height: "100%" }}
          />
        </section>
      </div>
    </main>
  )
}
