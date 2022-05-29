import { Item } from "@/components/routes/Index/Item";

export default function Index() {
  return (
    <div className="bg-black py-20 lg:py-[120px] overflow-hidden relative z-10">
      <div className="container xl:max-w-6xl mx-auto px-4">
        <header className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-2xl leading-normal mb-2 font-bold text-white">
            Tecnologies / Frameworks
          </h2>
          <p className="text-white leading-relaxed font-light text-xl mx-auto pb-2">
            My favorite tecnologies!
          </p>
        </header>
      </div>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Item title="Typescript" percentage={80} />
        </div>
      </section>
    </div>
  );
}
