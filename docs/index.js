import init, { new_game, ask } from './kingslayer_wasm.js';

async function run() {
    await init();

    let game = new_game();

    let terminal = document.getElementById("terminal");
    let term_input = document.getElementById("term_input");

    term_input.focus();

    function show_res(command) {
        let res = ask(game, command)
        game = res[0];
        terminal.append(res[1] + "\n\n");

        terminal.scrollTop = terminal.scrollHeight;

        term_input.value = "";
    }

    show_res("l");

    term_input.addEventListener(
        "keydown",
        function (event) {
            if (event.keyCode == 13) {
                show_res(term_input.value);
            }
        },
        false
    );

    document.addEventListener(
        "click",
        function () {
            term_input.focus()
        }
    );
}

run();
