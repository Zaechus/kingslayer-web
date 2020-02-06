use wasm_bindgen::prelude::*;

use kingslayer::Cli;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str) -> String;
    pub fn prompt(s: &str) -> String;
}

pub fn set_panic_hook() {
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();
}

#[wasm_bindgen]
pub fn start(json: &str) {
    set_panic_hook();

    let cli = Cli::from_ron_str(json);

    let mut res = cli.ask("l");
    loop {
        res = cli.ask(&prompt(&res));
        if res.contains("You died.") {
            alert(&res);
            break;
        }
    }
}
