import request from './request';
export async function getBanners(){
    const result =  await request.get('/api/banner');
    return result.reverse();
}