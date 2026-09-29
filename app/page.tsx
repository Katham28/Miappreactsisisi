import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950  px-6 py-12 text-white">
      <div className="mx-auto flex max-w-4xl flex-col items-center">
        
        <div className="mt-10 w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl backdrop-blur-md">
        <Image src="/gatito01.jpg"alt="Gatito"width={100}height={100} className="rounded-lg mx-auto rounded-lg" />

          <div className="p-7">
            <h2 className="text-2xl font-bold"> Katia Marcela Carpio Domínguez </h2>
            <p className="mt-3 text-sm font-semibold   text-purple-300"> Intereses profesionales </p>
            <p className="mt-2 text-gray-300"> Desarrollo de aplicaciones de escritorio y auditoria de sistemas </p>

            <div className="mt-6 flex gap-3">
              <a href="https://mx.linkedin.com/in/katia-marcela-carpio-dom%C3%ADnguez-497a60384?trk=people-guest_people_search-card" className="flex-1 rounded-xl bg-purple-600 px-5 py-3 text-center font-semibold transition hover:bg-purple-500 hover:shadow-lg"> 
                Mi Linkedin</a>
              <a href="https://github.com/Katham28" className="flex-1 rounded-xl bg-purple-600 px-5 py-3 text-center font-semibold transition hover:bg-purple-500 hover:shadow-lg"> 
             Mi github</a>
              
            </div>

          </div>
        </div>


        <div className="mt-10 w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl backdrop-blur-md">
        <Image src="/gatito02.jpg"alt="Gatito"width={100}height={100} className="rounded-lg mx-auto rounded-lg" />

          <div className="p-7">
            <h2 className="text-2xl font-bold"> Isai Candelario Sandoval </h2>
            <p className="mt-3 text-sm font-semibold  text-purple-300"> Intereses profesionales </p>
            <p className="mt-2 text-gray-300"> Desarrollo de aplicaciones, tecnología y nuevos proyectos. </p>

            <div className="mt-6 flex gap-3">
              <a href="https://www.linkedin.com/in/isai-candelario" className="flex-1 rounded-xl bg-purple-600 px-5 py-3 text-center font-semibold transition hover:bg-purple-500 hover:shadow-lg"> 
                Mi Linkedin</a>
              <a href="https://github.com/Isay-cz" className="flex-1 rounded-xl bg-purple-600 px-5 py-3 text-center font-semibold transition hover:bg-purple-500 hover:shadow-lg"> 
               Mi github</a>
              
            </div>

          </div>
        </div>



        <div className="mt-10 w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl backdrop-blur-md">
        <Image src="/gatito03.jpg"alt="Gatito"width={100}height={100} className="rounded-lg mx-auto rounded-lg" />

          <div className="p-7">
            <h2 className="text-2xl font-bold">Alondra Hernandez Martinez</h2>
            <p className="mt-3 text-sm font-semibold   text-purple-300"> Intereses profesionales </p>
            <p className="mt-2 text-gray-300"> Desarrollo de aplicaciones y  programacion. </p>

            <div className="mt-6 flex gap-3">
              <a href="https://www.linkedin.com/in/alondra-hern%C3%A1ndez-mart%C3%ADnez-a64177389?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="flex-1 rounded-xl bg-purple-600 px-5 py-3 text-center font-semibold transition hover:bg-purple-500 hover:shadow-lg"> 
                Mi Linkedin</a>
              <a href="https://github.com/Alondra66" className="flex-1 rounded-xl bg-purple-600 px-5 py-3 text-center font-semibold transition hover:bg-purple-500 hover:shadow-lg"> 
               Mi github</a>
              
            </div>

          </div>
        </div>





      </div>
    </main>
  );
}






