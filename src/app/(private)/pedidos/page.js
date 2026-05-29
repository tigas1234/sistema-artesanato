import { Card, CardContent } from "@/components/ui/card";

export default function Pedidos() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Pedidos
      </h1>

      <Card>
        <CardContent className="p-6">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Cliente</th>
                <th className="text-left py-2">Produto</th>
                <th className="text-left py-2">Status</th>
                <th className="text-left py-2">Valor</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="py-3">Tiago</td>
                <td>Camiseta</td>
                <td>Produção</td>
                <td>R$ 70</td>
              </tr>

              <tr className="border-b">
                <td className="py-3">Cassiele</td>
                <td>Tapete</td>
                <td>Entregue</td>
                <td>R$ 45</td>
              </tr>

              <tr>
                <td className="py-3">João</td>
                <td>Conserto</td>
                <td>Pendente</td>
                <td>R$ 50</td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}