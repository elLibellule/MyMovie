import styles from "./page.module.scss";
import Popular from "@/components/Popular/Popular";
import Genres from "@/components/Genres/Genres";

export const revalidate = 86400;

export default function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return (
    <div className={styles.main}>
      <Popular lang={lang} />
      <Genres lang={lang} />
    </div>
  );
}
