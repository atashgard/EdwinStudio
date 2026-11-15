import { Canvas } from "./Canvas"
import { team } from "../team"

const assetPathPrefix = "/assets"
const imgRectangle = `${assetPathPrefix}/64b7a.webp`
const imgRectangle2 = `${assetPathPrefix}/344da.webp`
const imgRectangle3 = `${assetPathPrefix}/d2a00.webp`
const imgGroup2 = `${assetPathPrefix}/cd16a.svg`
const imgGroup4 = `${assetPathPrefix}/c097c.svg`
const imgVector = `${assetPathPrefix}/7b134.svg`
const imgVector1 = `${assetPathPrefix}/e60d8.svg`
const imgVector2 = `${assetPathPrefix}/a81f0.svg`
const imgVector3 = `${assetPathPrefix}/0bf9a.svg`
const imgVector4 = `${assetPathPrefix}/57b26.svg`
const imgVector5 = `${assetPathPrefix}/2f443.svg`
const imgLayer1 = `${assetPathPrefix}/db0b1.svg`
const imgVector6 = `${assetPathPrefix}/0909e.svg`
const imgVector7 = `${assetPathPrefix}/9e0e7.svg`
const imgVector8 = `${assetPathPrefix}/a0a81.svg`
const imgVector9 = `${assetPathPrefix}/0ad6b.svg`
const imgRectangle1 = `${assetPathPrefix}/11f52.svg`
const imgGroup3 = `${assetPathPrefix}/f28f0.svg`
const imgGroup5 = `${assetPathPrefix}/84dd0.svg`
const imgGroup6 = `${assetPathPrefix}/1fcd5.svg`
const imgGroup7 = `${assetPathPrefix}/0bf9d.svg`
const imgGroup8 = `${assetPathPrefix}/a5cd5.svg`
const imgGroup9 = `${assetPathPrefix}/3123e.svg`
const imgVector16 = `${assetPathPrefix}/c4def.svg`
const imgGroup10 = `${assetPathPrefix}/f7777.svg`
const imgGroup11 = `${assetPathPrefix}/c50d0.svg`
const imgGroup12 = `${assetPathPrefix}/eaa12.svg`
const imgGroup13 = `${assetPathPrefix}/3cc8f.svg`
const imgVector17 = `${assetPathPrefix}/4ca59.svg`
const imgVector18 = `${assetPathPrefix}/e9935.svg`
const imgVector19 = `${assetPathPrefix}/d61a2.svg`

const mobileOrder = ["Edwin", "Vahid", "Zahra", "Mohamad", "Jeja"]
const mobileTeam = mobileOrder
  .map((name) => team.find((member) => member.name === name))
  .filter((member) => member !== undefined)

// Mobile-only About us layout (≤760px), sized from the 402px mobile design.
export function AboutMobile() {
  return (
    <>
      <div className="about-mobile">
        <Canvas width={402} height={870}>
          <div
            className="absolute h-[870px] left-0 top-0 w-[402px]"
            data-node-id="15:116"
          >
            <div
              className="absolute inset-[0_-28.56%_49.5%_-35.37%]"
              data-node-id="15:117"
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
              className="absolute inset-[2.76%_86.31%_95%_4.48%]"
              data-node-id="15:118"
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
              className="[word-break:break-word] absolute font-sans font-[300] leading-[0] left-[20px] not-italic text-[12px] text-black top-[479px] w-[191px]"
              data-node-id="15:136"
            >
              <p className="leading-[normal] mb-0">
                I have often told my students in my classes to focus on
                identifying and remembering the most iconic features of an
                object, and to use those elements to represent it as a whole.
              </p>
              <p className="leading-[normal] mb-0">
                For example, we can easily recall Hitler by his mustache, or
                Charlie Chaplin by his bowler hat—each serving as a symbolic
                shorthand for their entire persona.
              </p>
              <p className="leading-[normal] mb-0">
                I applied the same approach when designing the logo for my own
                studio. Most people who know me tend to remember me by my round
                glasses and mustache. Therefore, these two elements became the
                most fitting representation for my personal brand.
              </p>
              <p className="leading-[normal]">
                I went through dozens of sketches based on numerous photographs
                of myself until I finally arrived at the result I was looking
                for.
              </p>
            </div>
            <div
              className="absolute inset-[66.44%_8.69%_19.18%_65.42%]"
              data-node-id="15:137"
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
              className="absolute contents inset-[10%_6.72%_17.47%_32.47%]"
              data-node-id="15:143"
              style={{ containerType: "size" }}
            >
              <div
                className="absolute inset-[10%_36.41%_71.14%_32.47%] mix-blend-color-burn"
                data-node-id="15:144"
                data-name="Vector"
              >
                <div className="absolute inset-[0_-0.1%]">
                  <img
                    loading="lazy"
                    decoding="async"
                    alt=""
                    className="block max-w-none size-full"
                    src={imgVector}
                  />
                </div>
              </div>
              <div
                className="absolute inset-[64.37%_6.72%_17.47%_62.94%]"
                data-node-id="15:145"
                data-name="Vector"
              >
                <div className="absolute inset-[0_-0.11%]">
                  <img
                    loading="lazy"
                    decoding="async"
                    alt=""
                    className="block max-w-none size-full"
                    src={imgVector1}
                  />
                </div>
              </div>
              <div
                className="absolute flex inset-[28.85%_6.77%_17.47%_63.55%] items-center justify-center"
                data-node-id="15:146"
                style={{ containerType: "size" }}
              >
                <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
                  <div className="relative size-full" data-name="Vector">
                    <div className="absolute inset-[-0.1%_0]">
                      <img
                        loading="lazy"
                        decoding="async"
                        alt=""
                        className="block max-w-none size-full"
                        src={imgVector2}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="absolute flex inset-[10%_6.72%_35.63%_63.55%] items-center justify-center"
                data-node-id="15:147"
                style={{ containerType: "size" }}
              >
                <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
                  <div className="relative size-full" data-name="Vector">
                    <div className="absolute inset-[-0.1%_0]">
                      <img
                        loading="lazy"
                        decoding="async"
                        alt=""
                        className="block max-w-none size-full"
                        src={imgVector3}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="absolute flex inset-[28.85%_37.06%_17.47%_32.47%] items-center justify-center"
                data-node-id="15:148"
                style={{ containerType: "size" }}
              >
                <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
                  <div className="relative size-full" data-name="Vector">
                    <div className="absolute inset-[-0.1%_0]">
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
              <div
                className="absolute flex inset-[10%_37.06%_35.63%_32.47%] items-center justify-center"
                data-node-id="15:149"
                style={{ containerType: "size" }}
              >
                <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
                  <div className="relative size-full" data-name="Vector">
                    <div className="absolute inset-[-0.1%_0]">
                      <img
                        loading="lazy"
                        decoding="async"
                        alt=""
                        className="block max-w-none size-full"
                        src={imgVector5}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Canvas>
      </div>
      <ul className="about-mobile about-mobile-team" aria-label="Studio team">
        {mobileTeam.map((member) => (
          <li key={member.name} className="team-card">
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
      <div className="about-mobile about-mobile-dark">
        <Canvas width={402} height={963}>
          <div
            className="absolute h-[963px] left-0 top-0 w-[402px]"
            data-node-id="15:150"
          >
            <div
              className="absolute bg-black h-[962px] left-[-20px] top-0 w-[443px]"
              data-node-id="15:151"
            />
            <div
              className="[word-break:break-word] absolute font-sans font-[400] leading-[0] left-[43.67px] not-italic text-[16px] text-white top-[133.26px] tracking-[-0.8px] whitespace-nowrap"
              data-node-id="15:152"
            >
              <p className="leading-[93.31999969482422%] mb-0 whitespace-pre">{`02-01           Concept`}</p>
              <p className="leading-[93.31999969482422%] mb-0 whitespace-pre">{`02-02          Construction`}</p>
              <p className="leading-[93.31999969482422%] whitespace-pre">{`02-03          Versions`}</p>
            </div>
            <div
              className="absolute h-[485px] left-[-169px] top-[289px] w-[672px]"
              data-node-id="15:153"
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
            <div
              className="absolute flex inset-[17.86%_26.57%_79.58%_67.41%] items-center justify-center"
              data-node-id="15:173"
              style={{ containerType: "size" }}
            >
              <div className="flex-none h-[hypot(-53.8812cqw,39.7946cqh)] rotate-[53.05deg] w-[hypot(46.1188cqw,60.2054cqh)]">
                <div className="relative size-full" data-name="Vector">
                  <img
                    loading="lazy"
                    decoding="async"
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgVector6}
                  />
                </div>
              </div>
            </div>
            <div
              className="[word-break:break-word] absolute font-sans font-[200] inset-[18.28%_12.94%_77.57%_75.12%] leading-[0] not-italic text-[15px] text-white tracking-[-0.75px] whitespace-nowrap"
              data-node-id="15:174"
            >
              <p className="leading-[93.31999969482422%] mb-0">My Glasses</p>
              <p className="leading-[93.31999969482422%]">{`& Eyes`}</p>
            </div>
            <div
              className="absolute flex inset-[15.89%_30.13%_68.55%_32.59%] items-center justify-center"
              data-node-id="15:175"
              style={{ containerType: "size" }}
            >
              <div className="flex-none h-[hypot(-22.4049cqw,-22.4049cqh)] rotate-135 w-[hypot(-77.5951cqw,77.5951cqh)]">
                <div className="relative size-full" data-name="Vector">
                  <img
                    loading="lazy"
                    decoding="async"
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgVector7}
                  />
                </div>
              </div>
            </div>
            <div
              className="absolute flex inset-[30.64%_57.17%_66.02%_34.82%] items-center justify-center"
              data-node-id="15:176"
              style={{ containerType: "size" }}
            >
              <div className="flex-none h-[hypot(-43.4417cqw,-43.4417cqh)] rotate-135 w-[hypot(-56.5583cqw,56.5583cqh)]">
                <div className="relative size-full" data-name="Vector">
                  <img
                    loading="lazy"
                    decoding="async"
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgVector8}
                  />
                </div>
              </div>
            </div>
            <div
              className="[word-break:break-word] absolute font-sans font-[200] top-[75.29%] right-[12px] leading-[0] not-italic text-[15px] text-white tracking-[-0.75px] whitespace-nowrap text-right"
              data-node-id="15:177"
            >
              <p className="leading-[93.31999969482422%]">{`Protector & Container (Dark Version)`}</p>
            </div>
            <p
              className="[word-break:break-word] absolute font-sans font-[900] leading-[normal] left-[21px] not-italic text-[30.958px] text-white top-[59px] whitespace-nowrap"
              data-node-id="15:178"
            >
              02
            </p>
            <p
              className="[word-break:break-word] absolute font-sans font-[400] leading-[normal] left-[72.6px] not-italic text-[30.958px] text-white top-[59px] tracking-[-1.5479px] whitespace-nowrap"
              data-node-id="15:179"
            >
              Logo Design
            </p>
          </div>
          <p
            className="[word-break:break-word] absolute font-sans font-[200] left-[80px] top-[786px] whitespace-nowrap leading-[93.31999969482422%] not-italic text-[15px] text-white tracking-[-0.75px]"
            data-node-id="15:180"
          >
            My Mustache
          </p>
        </Canvas>
      </div>
      <div className="about-mobile">
        <Canvas width={402} height={771}>
          <div
            className="absolute h-[674px] left-[-152.54px] top-[64px] w-[707.436px]"
            data-node-id="15:181"
          >
            <div
              className="absolute contents inset-[64.17%_29.61%_-0.11%_28.96%]"
              data-node-id="15:182"
              data-name="Group"
            >
              <div
                className="absolute z-[1] inset-[64.17%_29.61%_14.09%_28.96%]"
                data-node-id="15:183"
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
                className="absolute contents inset-[73.64%_40.93%_-0.11%_41.2%]"
                data-node-id="15:184"
                data-name="Group"
              >
                <div
                  className="absolute contents inset-[73.64%_40.93%_-0.11%_41.2%]"
                  data-node-id="15:185"
                  data-name="Clip path group"
                >
                  <div
                    className="absolute contents inset-[52.45%_31.39%_-21.21%_21.7%]"
                    data-node-id="15:188"
                    data-name="Group"
                  >
                    <div
                      className="absolute z-[2] inset-[52.45%_31.39%_-21.21%_21.7%] mask-alpha mask-no-repeat mask-position-[137.954px_142.83px] mask-size-[126.381px_178.438px]"
                      data-node-id="15:189"
                      style={{ maskImage: `url("${imgRectangle1}")` }}
                      data-name="Rectangle"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          decoding="async"
                          alt=""
                          className="absolute left-0 max-w-none size-full top-0"
                          src={imgRectangle2}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute z-[2] inset-[77.21%_43.19%_4.65%_43.85%]"
                  data-node-id="15:190"
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
                  className="absolute z-[2] inset-[85.74%_54.79%_13.12%_43.07%]"
                  data-node-id="15:193"
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
              </div>
            </div>
            <div
              className="absolute contents inset-[-9.54%_-5.13%_21.56%_-4.89%]"
              data-node-id="15:196"
              data-name="Group"
            >
              <div
                className="absolute inset-[-9.5%_21.61%_25.52%_20.86%]"
                data-node-id="15:197"
                data-name="Rectangle"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    decoding="async"
                    alt=""
                    className="absolute h-[38.92%] left-[5.2%] max-w-none top-[30.51%] w-[92.09%]"
                    src={imgRectangle3}
                  />
                </div>
              </div>
              <div
                className="absolute inset-[18.19%_-5.13%_81.81%_-4.89%]"
                data-node-id="15:198"
                data-name="Vector"
              >
                <div className="absolute inset-x-0 top-0 border-t border-[#87898C]/60" />
              </div>
              <div
                className="absolute inset-[22.16%_-5.13%_77.84%_-4.89%]"
                data-node-id="15:199"
                data-name="Vector"
              >
                <div className="absolute inset-x-0 top-0 border-t border-[#87898C]/60" />
              </div>
              <div
                className="absolute inset-[42.24%_-5.13%_57.76%_-4.89%]"
                data-node-id="15:200"
                data-name="Vector"
              >
                <div className="absolute inset-x-0 top-0 border-t border-[#87898C]/60" />
              </div>
              <div
                className="absolute inset-[40.98%_-5.13%_59.02%_-4.89%]"
                data-node-id="15:201"
                data-name="Vector"
              >
                <div className="absolute inset-x-0 top-0 border-t border-[#87898C]/60" />
              </div>
              <div
                className="absolute inset-[47.51%_-5.13%_52.49%_-4.89%]"
                data-node-id="15:202"
                data-name="Vector"
              >
                <div className="absolute inset-x-0 top-0 border-t border-[#87898C]/60" />
              </div>
              <div
                className="[word-break:break-word] absolute contents font-['Inter:Regular'] font-normal inset-[49.42%_56.28%_47.64%_36.94%] leading-[normal] not-italic text-[8.189px] text-black whitespace-nowrap"
                data-node-id="15:203"
                data-name="Group"
              >
                <p
                  className="absolute inset-[49.42%_56.28%_49.1%_36.94%]"
                  data-node-id="15:204"
                >
                  Dark Theme
                </p>
                <p
                  className="absolute inset-[50.88%_56.56%_47.64%_37.08%]"
                  data-node-id="15:205"
                >
                  37 Anchors
                </p>
              </div>
              <div
                className="[word-break:break-word] absolute contents font-['Inter:Regular'] font-normal inset-[49.42%_29.24%_47.64%_63.83%] leading-[normal] not-italic text-[8.189px] text-black whitespace-nowrap"
                data-node-id="15:206"
                data-name="Group"
              >
                <p
                  className="absolute inset-[49.42%_29.24%_49.1%_63.83%]"
                  data-node-id="15:207"
                >
                  Light Theme
                </p>
                <p
                  className="absolute inset-[50.88%_29.92%_47.64%_64%]"
                  data-node-id="15:208"
                >
                  32Anchors
                </p>
              </div>
              <div
                className="absolute inset-[-9.54%_42.01%_21.56%_57.99%]"
                data-node-id="15:209"
                data-name="Vector"
              >
                <div className="absolute inset-y-0 left-0 border-l border-[#87898C]/60" />
              </div>
              <div
                className="absolute inset-[-9.54%_52.9%_21.56%_47.1%]"
                data-node-id="15:210"
                data-name="Vector"
              >
                <div className="absolute inset-y-0 left-0 border-l border-[#87898C]/60" />
              </div>
              <div
                className="absolute inset-[-9.54%_73.54%_46.48%_26.46%]"
                data-node-id="15:211"
                data-name="Vector"
              >
                <div className="absolute inset-y-0 left-0 border-l border-[#87898C]/60" />
              </div>
              <div
                className="absolute inset-[-9.54%_70.71%_33.72%_29.29%]"
                data-node-id="15:212"
                data-name="Vector"
              >
                <div className="absolute inset-y-0 left-0 border-l border-[#87898C]/60" />
              </div>
              <div
                className="absolute inset-[-9.54%_56.29%_21.56%_43.71%]"
                data-node-id="15:213"
                data-name="Vector"
              >
                <div className="absolute inset-y-0 left-0 border-l border-[#87898C]/60" />
              </div>
              <div
                className="absolute inset-[-9.54%_27.45%_39.36%_72.55%]"
                data-node-id="15:214"
                data-name="Vector"
              >
                <div className="absolute inset-y-0 left-0 border-l border-[#87898C]/60" />
              </div>
            </div>
          </div>
        </Canvas>
      </div>
      <div className="about-mobile about-mobile-last">
        <Canvas width={402} height={624}>
          <div
            className="absolute h-[554px] left-[3px] top-0 w-[399px]"
            data-node-id="15:215"
          >
            <p
              className="[word-break:break-word] absolute font-sans font-[700] inset-[1.99%_75.69%_94.95%_4.26%] leading-[1.309] not-italic text-[13px] text-black whitespace-nowrap"
              data-node-id="15:216"
            >
              Light Theme:
            </p>
            <p
              className="[word-break:break-word] absolute font-sans font-[700] inset-[68.23%_75.44%_28.7%_5.01%] leading-[1.309] not-italic text-[13px] text-black whitespace-nowrap"
              data-node-id="15:217"
            >
              Logo Colors:
            </p>
            <p
              className="[word-break:break-word] absolute font-sans font-[700] inset-[76.53%_81.7%_21.12%_5.01%] leading-[1.309] not-italic text-[10px] text-black whitespace-nowrap"
              data-node-id="15:218"
            >
              Digital Black
            </p>
            <div
              className="[word-break:break-word] absolute font-sans font-[700] inset-[76.53%_4.26%_16.97%_74.69%] leading-[0] not-italic text-[10px] text-black whitespace-nowrap"
              data-node-id="15:219"
            >
              <p className="leading-[1.17] mb-0">Hex: 000000</p>
              <p className="leading-[1.17] mb-0">CMYK: 75-68-67-90</p>
              <p className="leading-[1.17]">RGB: 0-0-0</p>
            </div>
            <div
              className="[word-break:break-word] absolute font-sans font-[700] inset-[100.53%_5.51%_-7.03%_74.69%] leading-[0] not-italic text-[10px] text-black whitespace-nowrap"
              data-node-id="15:220"
            >
              <p className="leading-[1.17] mb-0">Hex: ffffff</p>
              <p className="leading-[1.17] mb-0">CMYK: 0-0-0-0</p>
              <p className="leading-[1.17]">RGB: 255-255-255</p>
            </div>
            <div
              className="[word-break:break-word] absolute font-sans font-[700] inset-[88.59%_6.52%_4.91%_74.69%] leading-[0] not-italic text-[10px] text-black whitespace-nowrap"
              data-node-id="15:221"
            >
              <p className="leading-[1.17] mb-0">Hex: 231f20</p>
              <p className="leading-[1.17] mb-0">CMYK: 0-0-0-100</p>
              <p className="leading-[1.17]">RGB: 0-0-0</p>
            </div>
            <div
              className="[word-break:break-word] absolute font-sans font-[700] inset-[100.53%_79.95%_-5.23%_5.01%] leading-[0] not-italic text-[10px] text-black whitespace-nowrap"
              data-node-id="15:222"
            >
              <p className="leading-[1.309] mb-0">White</p>
              <p className="leading-[1.309]">{`Digital & Print`}</p>
            </div>
            <p
              className="[word-break:break-word] absolute font-sans font-[700] inset-[88.45%_83.46%_9.2%_5.01%] leading-[1.309] not-italic text-[10px] text-black whitespace-nowrap"
              data-node-id="15:223"
            >
              Print Black
            </p>
            <p
              className="[word-break:break-word] absolute font-sans font-[700] inset-[35.66%_76.19%_61.27%_4.26%] leading-[1.309] not-italic text-[13px] text-black whitespace-nowrap"
              data-node-id="15:224"
            >
              Dark Theme:
            </p>
            <div
              className="-translate-x-1/2 absolute bottom-[94.22%] left-1/2 top-[5.78%] w-[365px]"
              data-node-id="15:225"
              data-name="Vector"
            >
              <div className="absolute inset-x-0 top-0 border-t border-[#1F1D1D]/50" />
            </div>
            <div
              className="-translate-x-1/2 absolute bottom-[60.29%] left-1/2 top-[39.71%] w-[365px]"
              data-node-id="15:226"
              data-name="Vector"
            >
              <div className="absolute inset-x-0 top-0 border-t border-[#1F1D1D]/50" />
            </div>
            <div
              className="-translate-x-1/2 absolute bottom-[26.9%] left-1/2 top-[73.1%] w-[365px]"
              data-node-id="15:227"
              data-name="Vector"
            >
              <div className="absolute inset-x-0 top-0 border-t border-[#1F1D1D]/50" />
            </div>
            <div
              className="absolute inset-[11.38%_8.62%_80.07%_59.47%]"
              data-node-id="15:228"
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
              className="absolute inset-[19.84%_8.52%_76.46%_69.62%]"
              data-node-id="15:234"
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
              className="absolute inset-[10.35%_81.43%_77.91%_5.01%]"
              data-node-id="15:247"
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
              className="absolute inset-[10.35%_44.49%_77.91%_41.95%]"
              data-node-id="15:253"
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
              className="absolute contents inset-[42.5%_3.01%_38.64%_5.01%]"
              data-node-id="15:259"
              data-name="Group"
            >
              <div
                className="absolute inset-[42.5%_3.01%_38.64%_5.01%]"
                data-node-id="15:260"
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
                className="absolute contents inset-[47.62%_10.22%_41.71%_61.56%]"
                data-node-id="15:261"
                data-name="Group"
              >
                <div
                  className="absolute inset-[47.62%_10.3%_44.84%_61.56%]"
                  data-node-id="15:262"
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
                <div
                  className="absolute inset-[55.06%_10.22%_41.71%_70.73%]"
                  data-node-id="15:268"
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
              <div
                className="absolute inset-[45.76%_74.16%_41.46%_13.48%]"
                data-node-id="15:281"
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
                className="absolute inset-[45.76%_41.83%_41.46%_45.81%]"
                data-node-id="15:289"
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
            <div
              className="-translate-x-1/2 absolute bottom-[21.4%] left-[calc(50%-4.65px)] top-[76.85%] w-[9.703px]"
              data-node-id="15:297"
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
              className="absolute inset-[89.03%_49.95%_9.22%_47.62%]"
              data-node-id="15:298"
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
            <div
              className="absolute inset-[100.84%_49.95%_-2.6%_47.62%]"
              data-node-id="15:299"
              data-name="Vector"
            >
              <div className="absolute inset-[-5.56%]">
                <img
                  loading="lazy"
                  decoding="async"
                  alt=""
                  className="block max-w-none size-full"
                  src={imgVector19}
                />
              </div>
            </div>
          </div>
        </Canvas>
      </div>
    </>
  )
}
