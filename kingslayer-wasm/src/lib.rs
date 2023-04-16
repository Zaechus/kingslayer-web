use wasm_bindgen::prelude::*;

use kingslayer::Cli;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str) -> String;
}

pub fn set_panic_hook() {
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();
}

#[wasm_bindgen]
pub fn start() -> JsValue {
    set_panic_hook();

    let cli = Cli::from_ron_str(
        r#"
        (world: World(
            curr_room: "Central Room",
            rooms: {
            "Closet": Room(
                name: "Closet",
                desc: "This isn't a very large or clean closet.",
                paths: [
                    Pathway(
                        directions: ["small wooden door"],
                        target: "Central Room",
                        desc: "The door leads back into the room.",
                        inspect: "The door is plain and wooden.",
                        opening: Some(Open)
                    ),
                ],
            ),
            "Central Room": Room(
                name: "Central Room",
                desc: "You are in the central room.",
                paths: [
                    Pathway(
                        directions: ["north"],
                        target: "Small Cave",
                        desc: "There is a mouth of a cave to the north.",
                        inspect: "The cave opening glows with a soft flickering light."
                    ),
                    Pathway(
                        directions: ["small wooden door"],
                        target: "Closet",
                        desc: "There is a small wooden door off to the side.",
                        inspect: "The door is plain and wooden.",
                        opening: Some(Closed)
                    ),
                    Pathway(
                        directions: ["south"],
                        target: "Bedroom",
                        desc: "There is a doorway to the south.",
                        inspect: "The doorway is plain and wooden.",
                    ),
                ],
                items: [
                    Thing(Thing(
                        name: "leaf",
                        desc: "A leaf lies on the ground.",
                        inspect: "It's small, brown, and dry."
                    )),
                    Weapon(Weapon(
                        name: "stick",
                        desc: "There is a stick here.",
                        inspect: "It's short but stout.",
                        damage: 4
                    )),
                ]
            ),
            "Small Cave": Room(
                name: "Small Cave",
                desc: "You are in a small cave.",
                paths: [
                    Pathway(
                        directions: ["south"],
                        target: "Central Room",
                        desc: "The cave opening leads south.",
                        inspect: "The cave opening glows with a soft flickering light."
                    ),
                ],
                items: [
                    Armor(Armor(
                        name: "leather armor",
                        desc: "There is a set of leather armor lying in a heap.",
                        inspect: "The armor is worn but light and sturdy.",
                        ac: 11,
                    )),
                    Weapon(Weapon(
                        name: "iron sword",
                        desc: "There is an iron sword on the ground.",
                        inspect: "The iron sword is of crude workmanship, but it should be usable.",
                        damage: 6   
                    )),
                ]
            ),
            "Bedroom": Room(
                name: "Bedroom",
                desc: "You are in a small bedroom.",
                paths: [
                    Pathway(
                        directions: ["north"],
                        target: "Central Room",
                        desc: "There is a doorway to the north.",
                        inspect: "The doorway is plain and wooden."
                    ),
                ],
                items: [
                    Container(Container(
                        name: "large capsule",
                        desc: "There is a large capsule here.",
                        inspect: "The capsule appears to be able to hold things.",
                        opening: Open,
                        contents: [
                            Thing(Thing(
                                name: "red block",
                                desc: "There is a red block.",
                                inspect: "It is a red cube."
                            )),
                        ]
                    )),
                ]
            ),
            }))
        "#,
    );

    serde_wasm_bindgen::to_value(&cli).unwrap()
}


#[wasm_bindgen]
pub fn ask(value: JsValue, prompt: &str) -> JsValue {
    let cli: Cli = serde_wasm_bindgen::from_value(value).unwrap();

    cli.ask(prompt);

    serde_wasm_bindgen::to_value(&cli).unwrap()
}

#[wasm_bindgen]
pub fn output(value: JsValue) -> String {
    let cli: Cli = serde_wasm_bindgen::from_value(value).unwrap();

    cli.last_output()
}
