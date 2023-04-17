{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    rust-overlay.url = "github:oxalica/rust-overlay";
  };

  outputs = { nixpkgs, rust-overlay, ... }:
    let system = "x86_64-linux"; in {
      devShell.${system} = let
        pkgs = import nixpkgs {
          inherit system;
          overlays = [ rust-overlay.overlays.default ];
        };
      in ({ pkgs, ... }: pkgs.mkShell {
        buildInputs = with pkgs; [
          cargo
          clang
          (rust-bin.stable.latest.default.override {
            targets = [ "wasm32-unknown-unknown" ];
          })
          wasm-bindgen-cli
        ];

        shellHook = ''
          cargo b -r
          wasm-bindgen --target web \
            --no-typescript \
            --out-dir docs \
            kingslayer-wasm/target/wasm32-unknown-unknown/release/kingslayer_wasm.wasm
          exit
        '';
      }) { inherit pkgs; };
    };
}