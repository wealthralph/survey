#!/usr/bin/env node
const zip = require("adm-zip");
const fs = require("fs-extra");

const main =  async () => {
    fs.ensureDirSync("dist");
    const zipfile = new zip();
    zipfile.addLocalFolder("server/")
    zipfile.writeZip("dist/package.zip")
}

main()