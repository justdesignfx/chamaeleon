import s from "./not-found.module.scss"

import cn from "clsx"

import { Button } from "@/components/button"

import { routes } from "@/constants"
import { DefaultLayout } from "@/layouts/default"

const NotFound = () => {
  return (
    <DefaultLayout
      seo={{ title: "Page Not Found", description: "We couldn't find the page you were looking for." }}
      footer={false}
    >
      <div className={cn(s.notFound, "flex-center-y")}>
        <h1>PAGE NOT FOUND</h1>
        <Button path={`/${routes.home.path}`} text="MAIN PAGE" size="md" ariaLabel={routes.home.ariaLabel} />
      </div>
    </DefaultLayout>
  )
}

export default NotFound
