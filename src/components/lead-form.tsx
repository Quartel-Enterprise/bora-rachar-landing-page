'use client'

export function LeadForm() {
  function handleLeadSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log({ event: event.target[0].value })
  }

  return (
    <form className="flex gap-4 mt-6 max-w-lg" onSubmit={handleLeadSubmit}>
      <input
        type="email"
        id="email"
        placeholder="Seu melhor e-mail"
        className="outline-0 bg-transparent border-white border-[1px] text-white placeholder:text-white rounded-lg px-4 py-3 w-full"
      />

      <button
        type="submit"
        className="bg-tertiary text-white font-bold rounded-lg px-8 py-3"
      >
        Cadastrar
      </button>
    </form>
  )
}
