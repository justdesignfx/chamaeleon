import s from "./searchbox.module.scss"

import cn from "clsx"

type Props = {
  keyword: string
  setKeyword: (keyword: string) => void
}

const Searchbox = ({ keyword, setKeyword }: Props) => {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setKeyword(e.target.value)
  }

  return (
    <div className={s.searchbox}>
      <label className={s.label} htmlFor="search">
        SEARCH
      </label>
      <div className={s.field}>
        <div className={cn(s.inputC)}>
          <input
            className={s.input}
            type="text"
            id="search"
            name="search"
            onChange={handleChange}
            value={keyword ?? ""}
          />
        </div>
      </div>
    </div>
  )
}

export { Searchbox }
