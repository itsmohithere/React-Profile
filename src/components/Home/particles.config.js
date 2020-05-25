import reactImg from './styles/react.png';
import nodeImg from './styles/nodejs.png';
import vscodeImg from './styles/vscode.png';
import cloudImg from './styles/cloud.png';
import npmImg from './styles/npm.png';


const params = {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      speed: 1,
      out_mode: 'out',
    },
    shape: {
      type: [
        'image',
        'circle',
      ],
      image: [
        {
          src: reactImg,
          height: 50,
          width: 73,
        },
        {
          src: nodeImg,
          height: 20,
          width: 20,
        },
        {
          src: vscodeImg,
          height: 20,
          width: 20,
        },
        {
          src: cloudImg,
          height: 20,
          width: 20,
        },
        {
          src: npmImg,
          height: 20,
          width: 35,
        },
      ],
    },
    color: {
      value: '#CCC',
    },
    size: {
      value: 40,
      random: true,
      anim: {
        enable: true,
        speed: 4,
        size_min: 10,
        sync: false,
      },
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
    },
  },
  retina_detect: false,
};

export default params;
