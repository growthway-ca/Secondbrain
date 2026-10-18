// Builds the single-file app from src/. Usage: node build.mjs [--artifact out.html]
// index.html is a complete document you can open directly; --artifact writes the body-only variant for claude.ai.
import {readFileSync,writeFileSync} from "node:fs";
const src=f=>readFileSync(new URL("./src/"+f,import.meta.url),"utf8");
const page=src("shell.html").replace("/*STYLES*/",()=>src("styles.css")).replace("/*SCRIPTS*/",()=>src("core.js")+"\n"+src("ui.js"));
const head='<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n';
const doc=head+page.replace("<style>","<style>\n:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}\n").replace('<div class="app">','</head>\n<body>\n<div class="app">')+"</body>\n</html>\n";
writeFileSync(new URL("./index.html",import.meta.url),doc);
const i=process.argv.indexOf("--artifact");if(i>0)writeFileSync(process.argv[i+1],page);
console.log("built index.html",(doc.length/1024).toFixed(1)+"KB");
