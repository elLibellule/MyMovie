import { defaultLanguage } from "@/utils/i18n";
import { useParams } from "next/navigation";

const useCurrentLanguage = () => {
  const params = useParams();

  return params.lang || defaultLanguage;
};

export default useCurrentLanguage;
