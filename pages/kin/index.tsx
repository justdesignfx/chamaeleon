import s from "./kin.module.scss"

import cn from "clsx"

import Reveal from "@/components/animations/reveal"
import CardPerson from "@/components/card-person"
import DefaultLayout from "@/layouts/default"
import { Marquee } from "@/components/marquee"
import CustomImage from "@/components/custom-image"
import { all } from "@/api/queries/kin"
import { ICardPerson } from "@/constants"

type Props = {
  members: ICardPerson[]
}

const Community = ({ members }: Props) => {
  return (
    <DefaultLayout>
      <section className={s.intro}>
        <h1>CHAMAELEON&apos;S VISION FOR VALUE-ADD GROWTH.</h1>
        <p>
          We partner with exceptional individuals who share our values, have worked with us, or have done business
          alongside us. They believe in the potential of entrepreneurship to create vast opportunities and positive
          impacts for all. To us, they are not just partners; they are part of our family...
        </p>
        <div className={cn(s.kinCommunityMarquee, s.rotated)}>
          <Marquee duration={30}>
            <>
              <h5>KIN COMMUNITY</h5>
              <h5>KIN COMMUNITY</h5>
            </>
          </Marquee>
        </div>
      </section>

      <section className={s.kin}>
        <h2>...AND WE PROUDLY REFER TO THEM AS OUR...</h2>
        <div className={s.imgC}>
          <CustomImage src="/img/logo-kin-community.png" alt="Chamaeleon C Logo" style={{ objectFit: "contain" }} />
        </div>
        <h2>BELOW, A NON-EXHAUSTIVE LIST OF MEMBERS OF KIN COMMUNITY. MEMBERSHIP IS INVITE-ONLY.</h2>
        <div className={s.kinCommunityMarquee}>
          <Marquee duration={30}>
            <>
              <h5>KIN COMMUNITY</h5>
              <h5>KIN COMMUNITY</h5>
            </>
          </Marquee>
        </div>
      </section>

      <section className={s.members}>
        {members.map((item, i) => {
          return (
            <Reveal key={i}>
              <CardPerson {...item} />
            </Reveal>
          )
        })}
      </section>
    </DefaultLayout>
  )
}

export default Community

export async function getStaticProps() {
  const members = await all()
  return { props: { members } }
}
