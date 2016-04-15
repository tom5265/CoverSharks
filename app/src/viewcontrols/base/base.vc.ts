import {register, ui} from 'platypus';

export default class BaseViewControl extends ui.ViewControl {

    context: any = {
        
    };
    
    loaded() {
        let scroller = document.getElementsByClassName('page-content')[0];
        console.log(scroller);
        scroller.scrollTop = 0;
    }
}
