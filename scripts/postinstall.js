const { execSync } = require('child_process');
const path = require('path');

const esbuildBinPath = path.join(__dirname, '../node_modules/esbuild/esbuild.exe');

execSync(`esbuild --version`, { stdio: 'inherit' });
process.env.ESBUILD_BINARY_PATH = esbuildBinPath;
