export const getTime= () =>{
    const str = new Date().toLocaleTimeString('en-US', 
    { timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute:'2-digit',
        hour12: false
    });
    return {data:str}
}