'use client'

export function LeadForm() {
  function handleLeadSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log({ event: event.target[0].value })
  }

  return (
    <form
      className="xs:flex-row xs:gap-4 mt-6 flex w-full max-w-lg flex-col gap-2"
      onSubmit={handleLeadSubmit}
    >
      <input
        type="email"
        id="email"
        placeholder="Seu melhor e-mail"
        className="w-full rounded-lg border-[1px] border-white bg-transparent px-4 py-3 text-white outline-0 placeholder:text-white"
      />

      <button
        type="submit"
        className="rounded-lg bg-tertiary px-8 py-3 font-bold text-white"
      >
        Cadastrar
      </button>
    </form>
  )
}
