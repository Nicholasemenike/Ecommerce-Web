import BottomNav from "@/Component/bars/BottomNav";

export const metadata={
  title: 'Home'
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <footer className="top-full">
      <section className="bottom-full">
        <BottomNav/>
      </section>
      </footer>
    </main>
  )
}
