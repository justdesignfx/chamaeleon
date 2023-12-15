import s from "./loading-screen.module.scss"

import cn from "clsx"

type Props = {
  loading: boolean
  setLoading?: (val: boolean) => void
}

const LoadingScreen = (props: Props) => {
  return <div className={cn(s.loadingScreen, "flex-center", { [s.loading]: props.loading })}></div>
}

export { LoadingScreen }
