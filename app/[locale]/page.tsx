import Image from "next/image";
import Blog from "./blog/page";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <>
      <div>{t("title")}</div>
    </>
  );
}
