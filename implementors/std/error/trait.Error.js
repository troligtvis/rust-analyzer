(function() {var implementors = {};
implementors["ra_db"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"ra_db/struct.Canceled.html\" title=\"struct ra_db::Canceled\">Canceled</a>","synthetic":false,"types":["ra_db::cancellation::Canceled"]}];
implementors["ra_ide"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"ra_ide/struct.SsrError.html\" title=\"struct ra_ide::SsrError\">SsrError</a>","synthetic":false,"types":["ra_ide::ssr::SsrError"]}];
implementors["ra_project_model"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"ra_project_model/struct.CargoTomlNotFoundError.html\" title=\"struct ra_project_model::CargoTomlNotFoundError\">CargoTomlNotFoundError</a>","synthetic":false,"types":["ra_project_model::CargoTomlNotFoundError"]}];
implementors["rust_analyzer"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"rust_analyzer/struct.LspError.html\" title=\"struct rust_analyzer::LspError\">LspError</a>","synthetic":false,"types":["rust_analyzer::main_loop::LspError"]}];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()