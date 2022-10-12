import type {Pallete} from './types';

const pallete: Pallete = {
  background: {
    default: '#FCFAFF',
    dark: '#171B16',
  },
  text: {
    default: '#171B16',
    gray: '#171B1680',
    danger: '#D63333',
    action: '#D9BC22',
    link: '#5BA0BF',
    light: '#FCFAFF',
  },

  icon: {
    default: '#171B16',
    danger: '#D63333',
    light: '#FCFAFF',
  },
  button: {
    background: {
      default: '#171B16',
      danger_outline: '#FCFAFF',
      outline: '#FCFAFF',
      action: '#f6d41f',
    },
    text: {
      default: '#fff',
      danger_outline: '#D63333',
      outline: '#171B16',
      action: '#171B16',
    },
    border: {
      default: '#171B16',
      danger_outline: '#D63333',
      outline: '#171B16',
      action: '#f6d41f',
    },
  },
  input: {
    background: {
      default: '#E3E3E3',
    },
    border: {
      default: '#E3E3E3',
    },
    text: {
      default: '#171B16',
    },
  },
  border: {
    default: '#171B16',
  },
  switch: {
    thumb: {
      default: ['#171B16', '#fff'],
    },
    track: {
      default: ['#171B16', '#fff'],
    },
  },
};

export default pallete;
