import system from 'systeminformation';
import { getSocket } from '../../Utils/Socket.mjs';

export default function(app) {
    const io = getSocket();
    
    setInterval(async function() {
      try {
        
        const ram = await system.mem();
        
        io.emit("systeminfo", {
          data: {
            ram: {
              used: ram.used,
              total: ram.total
            }
          }
        })
      } catch (e) {}
   }, 1000);
}