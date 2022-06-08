import { io, serverhost } from '../configs/configSocket.io';

export const sendRequestControl = (payload) => {
  const socket = io(serverhost);
  // check to send a request to control an equipment
  if(payload !== undefined) {
    socket.emit('sendRequestControl', payload);
  }

  // listening equipment control event on server side
  socket.on('sendResponseControl', res => {
    console.log(res);
    // socket.disconnect();
  })
}
