import { start, ask, update } from "kingslayer-wasm";

let cli = start();

let term_input = document.getElementById("term_input");
let terminal = document.getElementById("terminal");

term_input.focus();

function show_res(command) {
    terminal.append(ask(cli, command) + "\n\n\n");
    cli = update(cli, command);

    terminal.scrollTop = terminal.scrollHeight - terminal.clientHeight;

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
