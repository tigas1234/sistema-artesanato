import { TabsFormUrl } from "@/components/ui/tabs-form-url";

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center h-[calc(100vh-5rem)] max-h-screen">
      <div className="pb-8">
        <h1 className="text-5xl font-extrabold mb-1.5 text-center">
          Encurte. Personalize. Domine.
        </h1>
        <h2 className="text-3xl font-semibold mb-10 text-center">
          O encurtador de links mais confiável da internet
        </h2>
        <p className="text-xl text-center mb-16">
          Transformamos URLs longos e confusos em atalhos poderosos para o seu
          sucesso. Milhões de profissionais já descobriram como um link bem
          criado pode aumentar cliques, fortalecer marcas e impulsionar
          resultados.
        </p>
      </div>
      <TabsFormUrl />
    </section>
  );
}
