import s from "./manifesto-and-values.module.scss"

import { MaskedScale } from "@/components/animations/masked-scale"
import { CustomImage } from "@/components/custom-image"
import { Manifesto } from "@/components/manifesto"
import { OurValues } from "@/components/our-values"
import { SequencedChamaeleon } from "@/components/sequenced-chamaeleon"

import { routes } from "@/constants"
import { ClientOnly } from "@/hocs/isomorphic"
import { DefaultLayout } from "@/layouts/default"

import lunch from "@/public/img/manifesto-lunch.jpg"

const ManifestoAndValues = () => {
  return (
    <DefaultLayout seo={{ ...routes.manifestoAndValues.seo }}>
      <section className={s.intro}>
        <h1>
          <span>
            <strong>Chamaeleon</strong> is a new early-stage venture capital firm that brings together partners that
            have long collaborated as investors, operators and entrepreneurs that will focus on investing in truly
            transformative companies.
          </span>
          <span>
            We have learnt from our experience to see near and far, to be global and local, to be strategic and
            pragmatic, all at the same time.
          </span>
        </h1>
        <div className={s.imgC}>
          <ClientOnly>
            <MaskedScale>
              <CustomImage alt="People at Lunch" src={lunch} style={{ objectFit: "cover" }} priority={true} />
            </MaskedScale>
          </ClientOnly>
        </div>
      </section>

      <div>
        <ClientOnly>
          <Manifesto />
          <SequencedChamaeleon />
          <OurValues />
        </ClientOnly>
      </div>
    </DefaultLayout>
  )
}

export default ManifestoAndValues
