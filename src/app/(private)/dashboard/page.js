import { Card, CardContent } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Dashboard Artesanato
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">
              Pedidos
            </p>

            <h2 className="text-3xl font-bold">
              24
            </h2>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">
              Clientes
            </p>

            <h2 className="text-3xl font-bold">
              18
            </h2>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">
              Produtos
            </p>

            <h2 className="text-3xl font-bold">
              42
            </h2>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">
              Faturamento
            </p>

            <h2 className="text-3xl font-bold">
              R$ 4.500
            </h2>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">
            Últimos Pedidos
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between border-b pb-2">
              <span>Camiseta</span>
              <span>R$ 70</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span>Tapete</span>
              <span>R$ 45</span>
            </div>

            <div className="flex justify-between">
              <span>Conserto</span>
              <span>R$ 50</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}