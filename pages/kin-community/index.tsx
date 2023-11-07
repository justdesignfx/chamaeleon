import DefaultLayout from "@/layouts/default"
import s from "./kin-community.module.scss"

type Props = {}

const KinCommunity = (props: Props) => {
  return (
    <DefaultLayout>
      <div className={s.box}></div>
      <div className={s.box}></div>
      <div className={s.box}></div>
      <div className={s.box}></div>
      <div className={s.box}></div>
    </DefaultLayout>
  )
}

export default KinCommunity
