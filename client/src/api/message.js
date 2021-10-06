import request from "./request";
export async function getMessage(page=1,limit=10){
    return await request.get('/api/message',{
        params:{
            page,
            limit
        }
    })
}
export async function postMessage(info){
    return await request.post('/api/message',info);
}