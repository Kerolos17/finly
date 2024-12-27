const { spawn } = require('child_process');

function killChildProcess(child) {
  try {
    child.kill();
  } catch (err) {
    if (err.code === 'EPERM') {
      console.error('Permission error when trying to kill the process:', err);
      // Handle the error appropriately, e.g., retry with different permissions or log the error
    } else {
      throw err;
    }
  }
}

// Example usage
const child = spawn('some-command');
// ...existing code...
killChildProcess(child);
// ...existing code...
