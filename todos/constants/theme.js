import { useState } from 'react-native';

//main colors for app
const themeColors = {
    brightBlue: "#51e2f5",
    blueGreen: "#9df9ef",
    dustyWhite: "#edf756",  //background
    pinkSand: "#ffa8B6",
    darkSand: "#a28089",

    white: "#FFFFFF",
    lightGray: "",
    gray: "",
    darkGray: "",
    black: "#000000"
}

const DEFAULT_THEME = {
    dark: false,
    colors: {
        primary: "#51E2F5",  //bright blue
        background: "#EDF756",  //dusty white
        card: "#9DF9EF",  //blue green
        text: "#000000",  //black
        border: "#A28089",  //dark sand
        notification: "#FFA8B6"
    }
}

export const SPACING = {
    base: 15,
    double: 30
}

export const COLORS = {
        primary: "#51E2F5",  //bright blue
        background: "#EDF756",  //dusty white
        card: "#9DF9EF",  //blue green
        text: "#000000",  //black
        border: "#A28089",  //dark sand
        notification: "#FFA8B6"  // pink sand
}

export const noteColors = {
    background: '#F5F5F7',  //off-white
    border: '#C1B6AC',  //beige
    primary: '#809BCE',  //blue-gray
    text: '#19191A',  //dark gray
    card: '#E8E3DF'  //light beige
}

export const sizes = {
    xxsmall: 5,
    xsmall: 10,
    small: 15,
    medium: 20,
    large: 25,
    xlarge: 30,
    xxlarge: 50,

    heading: 75,
    header: 80
}