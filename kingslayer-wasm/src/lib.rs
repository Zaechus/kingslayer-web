use wasm_bindgen::prelude::*;

use kingslayer::Game;

#[wasm_bindgen]
pub fn new_game() -> JsValue {
    serde_wasm_bindgen::to_value(&Game::default()).unwrap()
}

#[wasm_bindgen]
pub fn ask(value: JsValue, prompt: &str) -> JsValue {
    let mut game: Game = serde_wasm_bindgen::from_value(value).unwrap();

    let output = game.ask(prompt);

    serde_wasm_bindgen::to_value(&(game, output)).unwrap()
}
