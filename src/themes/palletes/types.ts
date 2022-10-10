import {ColorValue} from 'react-native';

export type Background = {
  default: ColorValue;
  dark: ColorValue;
};

export type Icon = {
  default: ColorValue;
};
export type Text = {
  default: ColorValue;
  danger: ColorValue;
  gray: ColorValue;
  link: ColorValue;
  action: ColorValue;
  light: ColorValue;
};

type Border = {
  default: ColorValue;
};

export type ButtonKeys = {
  default: ColorValue;
};

export type InputKeys = {
  default: ColorValue;
};

type Button = {
  background: ButtonKeys;
  text: ButtonKeys;
  border: ButtonKeys;
};

type Input = {
  background: InputKeys;
  text: InputKeys;
  border: InputKeys;
};

type SwitchValues = [ColorValue, ColorValue];

export type SwitchKeys = {
  default: SwitchValues;
};

type Switch = {
  track: SwitchKeys;
  thumb: SwitchKeys;
};

export type Pallete = {
  background: Background;
  text: Text;
  icon: Icon;
  button: Button;
  border: Border;
  input: Input;
  switch: Switch;
};
