import { Card, CardContent } from "@/components/ui/card";

export default function Relatorio() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Relatórios
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-6">
            <h2 className="font-semibold mb-2">
              Pedidos Finalizados
            </h2>

            <p className="text-4xl font-bold">
              84
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="font-semibold mb-2">
              Receita Mensal
            </h2>

            <p className="text-4xl font-bold">
              R$ 8.750
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}