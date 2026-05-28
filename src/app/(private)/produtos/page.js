import { Card, CardContent } from "@/components/ui/card";

export default function Produtos() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Produtos
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <h2 className="font-bold text-xl">
              Bolsa artesanal
            </h2>

            <p className="text-muted-foreground">
              R$ 120
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="font-bold text-xl">
              Caneca pintada
            </h2>

            <p className="text-muted-foreground">
              R$ 45
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="font-bold text-xl">
              Vaso decorativo
            </h2>

            <p className="text-muted-foreground">
              R$ 80
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}