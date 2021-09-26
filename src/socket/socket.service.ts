export const socketService = {
    io:'',
    connect:(io:any)=>{
        socketService.io = io;
        // global.io = io;
        io.on('connection',(socket:any)=>{
            console.log("connected to connection", socket.id);
        })

        io.on('disconnect',(socket:any)=>{
            console.log("disconnect connection", socket.id);
        })
    }
}