import { Yuji_Hentaigana_Akari } from "next/font/google";

const yuji_Hentaigana_Akari = Yuji_Hentaigana_Akari({
  weight : '400', 
  display : 'swap',
  subsets : ['latin']
})

export default function Home() {

  return (
    <main>
      <h1>Welcome to the Home page</h1>
      {/* if we comment head code from layout.js then below font family will not work */}
      <h1 style={{ fontFamily : "Agbalumo"}}>Form with link tag (normal tag / Network req happen)</h1>
    <h1 className={yuji_Hentaigana_Akari.className}>Font with Nextjs font feature (No network req will call)</h1>
    </main>
  )
}
