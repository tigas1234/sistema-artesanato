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
              Camiseta
            </h2>

            <p className="text-muted-foreground">
              R$ 70
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="font-bold text-xl">
             Tapete
            </h2>

            <p className="text-muted-foreground">
              R$ 45
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="font-bold text-xl">
              Conserto
            </h2>

            <p className="text-muted-foreground">
              R$ 50
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}