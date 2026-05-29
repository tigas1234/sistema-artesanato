export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="w-full max-w-md border rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-2">
          Criar Conta
        </h1>

        <p className="text-muted-foreground mb-6">
          Cadastre-se para acessar o sistema.
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nome"
            className="w-full border rounded-md p-3 bg-transparent"
          />

          <input
            type="email"
            placeholder="E-mail"
            className="w-full border rounded-md p-3 bg-transparent"
          />

          <input
            type="password"
            placeholder="Senha"
            className="w-full border rounded-md p-3 bg-transparent"
          />

          <a
            href="/dashboard"
            className="block text-center bg-primary text-primary-foreground rounded-md p-3"
          >
            Criar Conta
          </a>
        </form>
      </div>
    </div>
  );
}