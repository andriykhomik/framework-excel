import {DomListener} from './DomListener';

export class ExcelComponent extends DomListener{
    constructor ($root, options = {}) {
        super ($root, options.listeners);
        this.name = options.name || '';
    }

    //Return component template
    toHTML(){
        return '';
    }

    init(){
        this.initDomListeners();
    }

    destroy(){
        this.removeDomListener();
    }

}
