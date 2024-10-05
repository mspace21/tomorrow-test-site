import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Navigation Box */}
      <nav className="fixed top-5 right-5 text-white p-4 rounded-lg shadow-lg">
        <ul className="flex flex-col space-y-2">
          <li> 
            <Link href="#home">
              <p className="hover:underline hover:transition-transform hover:translate-x-5">Home</p>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <p className="hover:underline hover:transition-transform hover:translate-x-5">About</p>
            </Link>
          </li>
          <li>
            <Link href="#projects">
              <p className="hover:underline hover:transition-transform hover:translate-x-5">Services</p>
            </Link>
          </li>
          <li>
            <Link href="#other">
              <p className="hover:underline hover:transition-transform hover:translate-x-5">Contact</p>
            </Link>
          </li>
        </ul>
      </nav>

      {/*Content Sections*/}
      <div>
        {/* Section 1 */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold">Tomorrow.</h1>
          <p className="mt-4 text-lg">The Official AI and Data Science Club of PSHS-MC</p>
        </section>

        {/* Section 2 */}
        <section id="about" className="min-h-screen flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold">About Us</h2>
          <p className="mt-4 text-lg">Learn more about what we do!</p>
        </section>

        {/* Section 3 */}
        <section id="projects" className="min-h-screen flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold">Planned Projects</h2>
          <p className="mt-4 text-lg">We are planning projects!</p>
          <button>Learn more</button>
        </section>

        {/* Section 4 */}
        <section id="other" className="min-h-screen flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold">Contact us!</h2>
          <p className="mt-4 text-lg">
            Visit our <Link href="https://www.facebook.com/profile.php?id=61563288622007">Facebook page</Link>
          </p>
          <p>
            Visit our{' '}
            <Link href="https://www.facebook.com/profile.php?id=61563288622007">
              Facebook page
            </Link>
          </p>
          <button className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition">
            Get in Touch
          </button>
        </section>
      </div>
    </>
  );
}
