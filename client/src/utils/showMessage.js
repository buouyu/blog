import styles from './showMessage.module.less';
import Icon from '@/components/Icon';
import getComponentRootDom from './getComponentRootDom.js';
export default function(options={}){
    const content = options.content||"弹出一个提示";
    const type = options.type||"info";
    const duration = options.duration||2000;
    const container = options.container||document.body;
    const div = document.createElement('div');
    const iconDom = getComponentRootDom(Icon,{type,});
    div.innerHTML= `<div class="${styles.icon}">${iconDom.outerHTML}</div><span class="${styles.content}">${content}</span>`;
    container.appendChild(div);
    const messageTypeClass = `message-${type}`;
    div.className = `${styles.message} ${styles[messageTypeClass]}`;
    if(getComputedStyle(container).position=="static"){
        container.style.position = 'relative';
    }
    div.clientHeight;
    div.style.opacity=1;
    div.style.transform=`translate(-50%,-50%)`;
    setTimeout(()=>{
        div.style.opacity=0;
        div.style.transform=`translate(-50%,-50%) translateY(-50px)`; 
        div.addEventListener('transitionend',()=>{
            div.remove();
            options.callback && options.callback();
        },{once:true})
    },duration)

}