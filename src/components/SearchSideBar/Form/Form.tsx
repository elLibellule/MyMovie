"use client";

import styles from "./Form.module.scss";
import { useRouter, usePathname } from "next/navigation";

const Form = ({ lang, i18n }: { lang: string; i18n: any }) => {
  const router = useRouter();
  const pathname = usePathname();
  function handleSubmit(e: any) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const searchParams = new URLSearchParams();
    searchParams.append("sort_by", form.get("sort") as string);
    searchParams.append("release_date.gte", form.get("fromDate") as string);
    searchParams.append("release_date.lte", form.get("toDate") as string);
    console.log("submit triggered");
    router.push(`${pathname}?${searchParams.toString()}`);
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h2>{i18n.asideBar.filter.title}</h2>
      <div className={styles.date}>
        <h3>{i18n.asideBar.filter.form.date}</h3>
        <div>
          <input type="date" name="fromDate" />
        </div>
        <div>
          <input
            type="date"
            name="toDate"
            defaultValue={new Date().toISOString().substring(0, 10)}
          />
        </div>
      </div>

      <div>
        <h3>{i18n.asideBar.filter.form.order}</h3>
        <select name="sort">
          <option value="popularity.desc">
            {i18n.asideBar.filter.form.orderByOption.popularity}
          </option>
          <option value="vote_average.desc">
            {i18n.asideBar.filter.form.orderByOption.note}
          </option>
          <option value="vote_count.desc">
            {i18n.asideBar.filter.form.orderByOption.nbrOfNote}
          </option>
        </select>
      </div>

      <div>
        <button type="submit">{i18n.asideBar.filter.form.button}</button>
      </div>
    </form>
  );
};

export default Form;
