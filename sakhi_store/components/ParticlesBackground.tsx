// // components/ParticlesBackground.tsx
// import React from 'react';
// import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';

// const ParticlesBackground: React.FC = () => {
//   const particlesInit = async (main: any) => {
//     // Initialize the tsParticles instance
//     await loadFull(main);
//   };

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         particles: {
//           number: {
//             value: 80,
//             density: {
//               enable: true,
//               value_area: 800,
//             },
//           },
//           shape: {
//             type: "circle",
//           },
//           size: {
//             value: 5,
//             random: true,
//           },
//           move: {
//             enable: true,
//             speed: 3,
//             direction: "none",
//             random: false,
//             straight: false,
//             out_mode: "bounce",
//           },
//         },
//         interactivity: {
//           events: {
//             onhover: {
//               enable: true,
//               mode: "repulse",
//             },
//           },
//         },
//         retina_detect: true,
//       }}
//     />
//   );
// };

// export default ParticlesBackground;
