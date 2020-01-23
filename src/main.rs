use actix_files::NamedFile;
use actix_web::{web, App, HttpRequest, HttpServer, Result};
use std::path::PathBuf;

async fn index() -> Result<NamedFile> {
    Ok(NamedFile::open(PathBuf::from("public/index.html"))?)
}

async fn favicon() -> Result<NamedFile> {
    Ok(NamedFile::open(PathBuf::from("public/static/favicon.ico"))?)
}

async fn public(req: HttpRequest) -> Result<NamedFile> {
    let file: PathBuf = req.match_info().query("filename").parse().unwrap();
    if let Ok(res) = NamedFile::open(PathBuf::from("dist/").join(file.clone())) {
        Ok(res)
    } else {
        Ok(NamedFile::open(PathBuf::from("public/").join(file))?)
    }
}

#[actix_rt::main]
async fn main() -> std::io::Result<()> {
    println!("The server has been started!: http://0.0.0.0:7878\n");

    HttpServer::new(|| {
        App::new()
            .route("/", web::get().to(index))
            .route("/favicon.ico", web::get().to(favicon))
            .route("/{filename:.*}", web::get().to(public))
    })
    .bind("0.0.0.0:7878")?
    .run()
    .await
}
