import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-svh items-center justify-center px-6 py-12">
      <section className="max-w-2xl" aria-labelledby="page-title">
        <p className="mb-4 text-sm font-bold text-muted-foreground uppercase">
          Cuerre
        </p>
        <h1
          id="page-title"
          className="text-5xl leading-none font-bold tracking-normal text-balance"
        >
          Hello, Cuerre.
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          The Next.js and TypeScript foundation is running. QR-in-logo
          generation will be added in a later feature PR.
        </p>
        <Button className="mt-8" disabled>
          shadcn/ui button ready
        </Button>
      </section>
    </main>
  );
}
