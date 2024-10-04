import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

// import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Model />
      <Highlights />
      <Features />
      <HowItWorks />
      <Footer /> 
    </main>
  )
}

export default App;
// export default Sentry.withProfiler(App);


// function App() {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold underline">Hello world!</h1>
//     </div>
//   );
// }

// export default App;
