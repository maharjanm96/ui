import Header from '@/components/Header'
import Feature from '@/components/Feature'

export default function Home() {
  return (
    <main>
      <Header />
      <div className="container mt-24">
        <Feature
          src="/images/ballerina.jpg"
          alt="Abstract ballerina artwork"
        />
      </div>
    </main>
  )
}