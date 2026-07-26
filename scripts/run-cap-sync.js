const { spawnSync } = require('child_process');
const path = require('path');

const repoRoot = process.cwd();
const cliPath = path.join(repoRoot, 'node_modules', '@capacitor', 'cli', 'bin', 'capacitor');

const result = spawnSync(process.execPath, [cliPath, 'sync', 'android'], {
  cwd: repoRoot,
  stdio: 'inherit',
  env: process.env,
});

if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}

process.exit(result.status ?? 1);
