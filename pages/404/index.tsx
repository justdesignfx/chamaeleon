import { NonFooter } from "@/layouts/non-footer"
import s from "./not-found.module.scss"

import cn from "clsx"

import { Button } from "@/components/button"

import { routes } from "@/constants"

const NotFound = () => {
  return (
    <NonFooter seo={{ title: "Page Not Found", description: "We couldn't find the page you were looking for." }}>
      <div className={cn(s.notFound, "flex-center-y")}>
        <h1>PAGE NOT FOUND</h1>
        <Button path={`/${routes.home.path}`} text="MAIN PAGE" size="md" />
      </div>
    </NonFooter>
  )
}

export default NotFound
