import system from 'systeminformation';

let commands = {};

const platform = await system.osInfo();

if (platform.platform == 'android' && platform.hostname == 'localhost') {
  commands = {
    open_url: 'termux-open $URL'
  }
} else if (platform.platform == 'linux') {
  commands = {
    
  }
} else if (platform.platform == 'darwin') {
  commands = {
    
  }
} else if (platform.platform == 'win32') {
  commands = {
    
  }
}

export {
  commands
};