// main.ts
import "./style.css";

import { UI } from "@peasy-lib/peasy-ui";
import { Engine, DisplayMode, Label, Vector, Font, Color, Keys } from "excalibur";
import { model, template } from "./UI/UI";

await UI.create(document.body, model, template).attached;

const game = new Engine({
  width: 800, // the width of the canvas
  height: 600, // the height of the canvas
  canvasElementId: "cnv", // the DOM canvas element ID, if you are providing your own
  displayMode: DisplayMode.Fixed, // the display mode
  pixelArt: true,
});

await game.start();

let myText = new Label({
  text: "Hello Excalibur",
  offset: new Vector(100, 100),
  font: new Font({
    size: 32,
    family: "Arial",
    color: Color.White,
  }),
});

game.add(myText);

game.onPreUpdate = () => {
  if (game.input.keyboard.isHeld(Keys.Space)) {
    myText.text = "Space pressed";
  } else {
    myText.text = "Hello Excalibur";
  }
};
