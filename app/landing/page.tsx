import Image from 'next/image';
import Link from 'next/link';
import { FaQrcode } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';

const LandingPage = () => {
  return (
    <div className="bg-green-50 min-h-screen">
      <header className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Lifetrack
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="#sobre-nosotros" className="text-gray-700 hover:text-blue-600">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="#actividades" className="text-gray-700 hover:text-blue-600">
                  Actividades
                </Link>
              </li>
              <li>
                <Link href="#planes" className="text-gray-700 hover:text-blue-600">
                  Planes
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-custom py-20">
          <div className="container mx-auto text-center flex flex-col items-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Descubre y potencia un nuevo estilo de vida saludable en Bogotá
            </h1>
            <p className="text-gray-600 mb-6 max-w-2xl">
              Descubre cientos de actividades de bienestar para probar y nuevos productos de hábitos para llevar una vida saludable.
            </p>
            <div className="flex space-x-4 mb-10 items-center">
              <FaQrcode size={32} className="text-gray-700" />
              <span className="text-gray-700">Descárgala en QR</span>
            </div>
            <div className="relative w-64 h-64 mb-10">
              <Image src="/images/phone_mockup.png" layout="fill" objectFit="contain" alt="App mockup" />
            </div>
          </div>
        </section>

        <section className="bg-white py-20" id="actividades">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Busca actividades nuevas todos los días</h2>
            <p className="text-gray-600 mb-6">+1000 planes para hacer solo o en compañía</p>
            <select className="bg-gray-100 border border-gray-300 text-gray-700 py-2 px-4 rounded mb-10" title="Plan Selector">
              <option>¿Qué plan estás buscando hoy?</option>
              <option>Actividades físicas</option>
              <option>Retiros de bienestar</option>
              <option>Charlas motivacionales</option>
              <option>Deportes extremos</option>
            </select>
          </div>
        </section>

        <section className="bd-custom py-20" id="sobre-nosotros">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Sobre nosotros</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="relative w-full h-56">
                <Image src="/images/activity1.jpg" layout="fill" objectFit="cover" alt="Actividad 1" />
              </div>
              <div className="relative w-full h-56">
                <Image src="/images/activity2.jpg" layout="fill" objectFit="cover" alt="Actividad 2" />
              </div>
              <div className="relative w-full h-56">
                <Image src="/images/activity3.jpg" layout="fill" objectFit="cover" alt="Actividad 3" />
              </div>
            </div>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              En Lifetrack, nos esforzamos por hacer más sencillo descubrir actividades saludables y productos de hábitos en tu ciudad. Somos un equipo de apasionados por el bienestar y creemos que todos deberían tener acceso a las mejores herramientas para llevar una vida sana.
            </p>
            <Link href="/about" className="inline-block bg-blue-600 text-white py-2 px-4 rounded shadow hover:bg-blue-700">
              Conocer más <AiOutlineArrowRight className="inline ml-2" />
            </Link>
          </div>
        </section>

        <section className="bg-white py-20" id="planes">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Logra tus metas en un solo lugar</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-gray-100 p-4 rounded shadow text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Plan de hábitos</h3>
                <p className="text-gray-600">Guía personalizada</p>
              </div>
              <div className="bg-gray-100 p-4 rounded shadow text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Guía especializada</h3>
                <p className="text-gray-600">Consejos y sugerencias</p>
              </div>
              <div className="bg-gray-100 p-4 rounded shadow text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Clases motivacionales</h3>
                <p className="text-gray-600">Charlas y actividades</p>
              </div>
            </div>
            <Link href="/plans" className="inline-block bg-blue-600 text-white py-2 px-4 rounded shadow hover:bg-blue-700">
              Conocer los planes <AiOutlineArrowRight className="inline ml-2" />
            </Link>
            <div className="relative w-64 h-64 mt-10">
              <Image src="/images/app_mockup.png" layout="fill" objectFit="contain" alt="App mockup" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
