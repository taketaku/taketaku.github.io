import { MyFavorites } from "@/components/routes/Index/MyFavorites";
import { Sns } from "@/components/routes/Index/Sns";
import { Section } from "@/components/shared/Section";

export default function Index() {
  return (
    <div className="py-20 lg:py-[120px] overflow-hidden relative z-10">
      <Section title="Name">
        <div className="text-center">Takuya Takeda</div>
      </Section>
      <Sns />
      <MyFavorites />
    </div>
  );
}
