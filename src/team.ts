// Studio team shown on the About us page (desktop row and mobile grid).
const imgRectangle12 = "/assets/69ad2.webp"
const imgRectangle14 = "/assets/4433a.webp"
const imgRectangle16 = "/assets/a91f1.webp"
const imgRectangle15 = "/assets/356cc.webp"
const imgZahra = "/assets/zahra-bw.webp"

export type TeamMember = {
  name: string
  role: string
  image: string
  left: number
  width: number
  focus: string
}

export const team: TeamMember[] = [
  {
    name: "Mohamad",
    role: "Type Designer",
    image: imgRectangle14,
    left: 542,
    width: 112,
    focus: "center",
  },
  {
    name: "Vahid",
    role: "AI Creative Lead",
    image: imgRectangle12,
    left: 674,
    width: 112,
    focus: "center",
  },
  {
    name: "Edwin",
    role: "Founder & Art Director",
    image: imgRectangle16,
    left: 806,
    width: 376,
    focus: "center",
  },
  {
    name: "Zahra",
    role: "Senior Brand Designer",
    image: imgZahra,
    left: 1202,
    width: 112,
    focus: "50% 30%",
  },
  {
    name: "Jeja",
    role: "Video Director",
    image: imgRectangle15,
    left: 1334,
    width: 112,
    focus: "center",
  },
]
