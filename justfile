serve: wasm
    npx webpack
    cargo run

build: wasm
    npm install
    npx webpack

wasm:
    cargo fmt
    cd kingslayer-wasm; wasm-pack build; cd ..

pages: build
    cp -r dist/* docs/
    cp -r public/* docs/