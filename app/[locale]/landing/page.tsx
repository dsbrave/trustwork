import { LandingView } from "@/components/landing/LandingView";
import { getImmigrationNews } from "@/lib/immigration-news";

export default async function LandingPage() {
  const news = await getImmigrationNews();
  return <LandingView news={news} />;
}
