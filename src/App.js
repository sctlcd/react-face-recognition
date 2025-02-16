import { useEffect } from 'react';
import './App.css';
import Navigation from './componentes/Navigation/Navigation.jsx';
import Logo from './componentes/Logo/Logo.jsx';
import ImageLinkForm from './componentes/ImageLinkForm/ImageLinkForm.jsx';
import Rank from './componentes/Rank/Rank.jsx';
import ParticlesBg from 'particles-bg';
import MouseParticles from 'react-mouse-particles';
import PowerModeInput from "power-mode-input";

function App() {

  // let config = {
  //   num: [4, 7],
  //   rps: 0.1,
  //   radius: [5, 40],
  //   life: [1.5, 3],
  //   v: [2, 3],
  //   tha: [-40, 40],
  //   // body: "./img/icon.png", // Whether to render pictures
  //   // rotate: [0, 20],
  //   alpha: [0.6, 0],
  //   scale: [1, 0.1],
  //   position: "center", // all or center or {x:1,y:1,width:100,height:100}
  //   color: ["random", "#ff0000"],
  //   cross: "dead", // cross or bround
  //   random: 15,  // or null,
  //   g: 5,    // gravity
  //   // f: [2, -1], // force
  //   onParticleUpdate: (ctx, particle) => {
  //       ctx.beginPath();
  //       ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
  //       ctx.fillStyle = particle.color;
  //       ctx.fill();
  //       ctx.closePath();
  //   }
  // };

  

  useEffect(() => {
    initPowerModeInput();
  }, []);

  // setTimeout(() => {
  //   initPowerModeInput();
  // }, 180);

  // doc: https://github.com/lindelof/power-mode-input
  function initPowerModeInput() {
    PowerModeInput.make(".input", {
      // height: 5,
      // tha: [0, 360],
      // g: 0.5,
      // num: 5,
      // radius: 6,
      // circle: true,
      // alpha: [0.75, 0.1],
      color: "#FFD700"
    });
  }

  return (
    <div className="App">
      {/* doc: https://github.com/lindelof/react-mouse-particles */}
      <MouseParticles g={1} num={6} color={"#FFD700"} cull="col,image-wrapper,form,logo"/>
      {/* doc: https://github.com/lindelof/particles-bg */}
      {/* <ParticlesBg type="cobweb" bg={true} /> */}
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm/>
    </div>
  );
}

export default App;
