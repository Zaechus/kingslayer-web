// import { start, ask, output } from "kingslayer-wasm";

// let cli = start();

let term_input = document.getElementById("term_input");
let terminal = document.getElementById("terminal");

term_input.focus();

function show_res(command) {
    // cli = ask(cli, command);
    // terminal.append(output(cli) + "\n\n\n");

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
