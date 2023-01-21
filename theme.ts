import { buildLegacyTheme } from "sanity";

//: SANITY CONFIGURATION THEME

const props = {
  "--my-white": "#F1F1F1",
  "--my-black": "#211F35",
  "--bendevblog-brand": "#D87C6B",
  "--bendevblog-bleu": "#303359",
  "--bendevblog-light-bleu": "#C5D2FC",
  "--bendevblog-purple": "#3E3870",
  "--success-color": "#A3FDD2",
  "--warning-color": "#D87C6B",
  "--danger-color": "#632C40",
  "--bendevblog-purple-light": "#8079F0",
  "--bendevblog-orange": "#F9874F",
};

export const myBlogTheme = buildLegacyTheme({

  //: BASE THEME COLORS
  "--black": props["--my-black"],
  "--white": props["--my-white"],

  "--gray": "#C5D2FC", // lb: C5D2FC || lp: 8079F0
  "--gray-base": "#f2f2f2",

  "--component-bg": props["--my-black"],
  "--component-text-color": props["--my-white"],


  // BRANDS COLORS
  "--brand-primary": props["--bendevblog-orange"],


  // DEFAULT BUTTON
  "--default-button-color": "#C5D2FC",
  "--default-button-primary-color": props["--bendevblog-orange"],
  "--default-button-success-color": props["--success-color"],
  "--default-button-warning-color": props["--warning-color"], 
  "--default-button-danger-color": props["--danger-color"], 


  // STATE
  "--state-info-color": props["--bendevblog-orange"],
  "--state-success-color": props["--success-color"],
  "--state-warning-color": props["--warning-color"], 
  "--state-danger-color": props["--danger-color"], 

  
  // NAVBAR
  "--main-navigation-color": props["--my-black"],
  "--main-navigation-color--inverted": props["--my-white"],
  
  "--focus-color": props["--bendevblog-light-bleu"],
});