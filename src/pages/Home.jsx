import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import Button from "../components/Button.jsx";
import BG from "../assets/backgroundimage.png";
import Insights from "./Insights.jsx";
import { ArrowRight, Sun } from "lucide-react";
import IndiaMapDashboard from "./IndiaMapDashboard.jsx";

function Home() {
  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-white flex flex-col overflow-x-hidden">
      {/* NavBar at the top */}
      <header className="w-full">
        <NavBar />
      </header>

      {/* Main content with background image */}
      <main id="home" className="flex-grow relative mt-[70px]">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${BG})` }}
          >
            <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
          </motion.div>
        </div>

        {/* Content container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center min-h-[80vh]">
          <div className="py-20 md:py-32 lg:py-40">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
                Power Life on <br className="hidden sm:block" /> Your Terms
              </h1>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-medium max-w-2xl mb-8">
                Go solar today to enjoy clean energy while making a lasting
                impact on the planet.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={() => console.log("Get Quote clicked")}
                variant="primary"
                size="large"
                className="bg-green-600 hover:text-white border rounded-full transition-all transform hover:scale-105"
                icon={Sun}
                iconPosition="left"
              >
                Get a Free Quote
              </Button>
            </motion.div>

            {/* Stats section */}
          </div>
        </div>

        {/* Scrolling indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce flex flex-col items-center">
            <p className="text-white/70 text-sm mb-2">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-2 bg-white rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </main>
      <div className="c">
        <Insights />
      </div>
      <div className="c">
        <IndiaMapDashboard />
      </div>
      {/* Footer at the bottom */}
      <footer className="w-full relative z-10">
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
