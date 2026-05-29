import { Card, CardContent } from "@/components/ui/card";

export default function Clientes() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Clientes
      </h1>

      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="border-b pb-2">
              Tiago - Nova York
            </div>

            <div className="border-b pb-2">
              Cassiele - África
            </div>

            <div>
              João - China
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}