import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { Rocket, Headset, ShieldCheck, Truck, Star } from 'lucide-react';

const features = [
  {
    title: "24/7 Support",
    description: "Always available assistance whenever you need it.",
    icon: Headset,
  },
  {
    title: "Fast Delivery",
    description: "Quick and efficient service guaranteed.",
    icon: Rocket,
  },
  {
    title: "Secure Services",
    description: "Your data and security are our top priorities.",
    icon: ShieldCheck,
  },
  {
    title: "Worldwide Reach",
    description: "Services available globally, no matter where you are.",
    icon: Truck,
  },
  {
    title: "Top Quality",
    description: "Providing the best quality in every service.",
    icon: Star,
  },
];

const CARD_WIDTH = 300;
const CARD_GAP = 24;
const ANIMATION_DURATION = 30;

export default function Features() {
  const controls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      await controls.start({
        x: [0, -((CARD_WIDTH + CARD_GAP) * features.length)],
        transition: {
          duration: ANIMATION_DURATION,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0
        }
      });
    };

    animate();
  }, [controls]);

  return (
    <>
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-16 text-blue-200 reveal"
          >
            Features
          </motion.h2>
        </div>
      </section>

      <div className="relative overflow-hidden">
        <div 
          className="absolute left-0 top-0 w-[300px] h-full z-10 hidden md:block"
          style={{
            background: 'linear-gradient(to right, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)'
          }}
        />
        
        <div 
          className="absolute right-0 top-0 w-[300px] h-full z-10 hidden md:block"
          style={{
            background: 'linear-gradient(to left, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)'
          }}
        />
        
        <div className="relative w-full overflow-hidden">
          <div className="flex justify-center">
            <motion.div 
              className="flex gap-6"
              animate={controls}
              style={{ x: 0 }}
            >
              {[...features, ...features, ...features].map((feature, index) => (
                <motion.div
                  key={index}
                  className="w-[300px] h-[300px] flex-shrink-0 bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-blue-500/30 transition-colors duration-300 group"
                >
                  <div>
                    <div className="mb-4">
                      <feature.icon className="w-10 h-10 text-blue-500 transition-transform duration-300 transform group-hover:scale-110" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "4rem" }}
                    transition={{ 
                      delay: 0.3,
                      duration: 0.8,
                      ease: [0.23, 1, 0.32, 1]
                    }}
                    className="h-1 bg-blue-500/50 rounded-full"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
