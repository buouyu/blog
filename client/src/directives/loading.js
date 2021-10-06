import styles from './loading.module.less';
import imgUrl from '@/assets/loading.svg';
function getLoadingImageDom(el){
    return el.querySelector('img[data-role=loading]');
}

function createLoadingImageDom(){
    const img = document.createElement('img');
    img.src=imgUrl;
    img.dataset.role='loading';
    img.className=styles.loading;
    return img;
}
export default function(el,binding){
    const curLoading = getLoadingImageDom(el);
    if(binding.value){
        if(!curLoading){
           const img = createLoadingImageDom();
           el.appendChild(img);
        }
    }else{
        if(curLoading){
            curLoading.remove();
        }
    }
}