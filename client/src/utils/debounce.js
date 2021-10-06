export default function(fn,duration=100){
    let timer = null;
    return (...agr)=>{
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...agr);
        }, duration);
    }
}