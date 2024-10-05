import CustomCursor from './cursor';

export default function Home() {
  return (
    <>
      {/* Custom Cursor */} 
      <CustomCursor/>

      {/* Navigation Box */}
      <nav className="fixed top-5 right-5 text-white p-4 rounded-lg shadow-lg">
        <ul className="flex flex-col space-y-2">
          <li>
            <a href="#home">
              <p className="hover:underline hover:animate-link">Home</p>
            </a>
          </li>
          <li>
            <a href="#about">
              <p className="hover:underline hover:animate-link">About</p>
            </a>
          </li>
          <li>
            <a href="#projects">
              <p className="hover:underline hover:animate-link">Services</p>
            </a>
          </li>
          <li>
            <a href="#other">
              <p className="hover:underline hover:animate-link">Contact</p>
            </a>
          </li>
        </ul>
      </nav>

      {/* Content Sections */}
      <div>
        {/* Section 1 */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold animate-expand">Tomorrow.</h1>
          <p className="mt-4 text-lg">The Official AI and Data Science Club of PSHS-MC</p>
        </section>

        {/* Section 2 */}
        <section id="about" className="min-h-screen flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold">About Tomorrow</h2>
          <p className="mt-4 text-lg">We aim to spark the interests of scholars in data science, statistics, and artificial intelligence</p>
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
          <p>
            Visit our{' '}
            <button className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition" href="https://www.facebook.com/profile.php?id=61563288622007">
              Facebook page
            </button>
          </p>
        </section>
      </div>
    </>
  );
}