import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Background = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
      options={{
        background: {
          color: {
            value: "#fff", // Change background color to dark
          },
        },
        fpsLimit: 30, // Reduce fps limit for slower animation
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 2, // Increase repulsion duration for a smoother effect
            },
          },
        },
        particles: {
          color: {
            value: ['#cccccc', '#dddddd', '#eeeeee'], // Use an array of colors for variety
          },
          links: {
            color: "#cccccc", // Match link color to particles color
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2, // Decrease speed for slower movement
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000, // Increase the density area
            },
            value: 150, // Increase the number of particles
          },
          opacity: {
            value: 0.7, // Increase opacity for a more prominent appearance
          },
          shape: {
            type: ["circle", "polygon"], // Add different shapes for visual variety
            polygon: {
              sides: 5, // Configure the number of sides for the polygon shape
            },
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Background;
