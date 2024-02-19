import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Erro 404 - Página não encontrada</h1>
      <p className="text-accent-foreground">
        Voltar para a{' '}
        <Link
          href="/"
          className="text-sky-600 hover:underline dark:text-sky-400"
        >
          página principal
        </Link>
      </p>
    </div>
  )
}
