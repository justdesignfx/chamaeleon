import NonFooter from "@/layouts/non-footer"
import s from "./not-found.module.scss"

import cn from "clsx"

import Button from "@/components/button"
import { routes } from "@/constants"

const NotFound = () => {
  return (
    <NonFooter>
      <div className={cn(s.notFound, "flex-center-y")}>
        <h1>PAGE NOT FOUND</h1>
        <Button path={`/${routes.home.path}`} text="HOMEPAGE" size="md" />
      </div>
    </NonFooter>
  )
}

export default NotFound
