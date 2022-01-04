export class Emitter{    constructor(){        this.listeners = {};    }    emit(event, ...args){        if (!Array.isArray(this.listeners[event])){            return false;        }        this.listeners[event].forEach(listener => {            listener(...args)        })        return true;    }    subscribe(event, fn){        this.listeners[event] = this.listeners[event] || [];        this.listeners[event].push(fn);        return () => {            this.listeners[event] =                this.listeners[event].filter(listener => listener !== fn);        }    }}// const emitter = new Emitter();//// const unsub = emitter//     .subscribe('andriy', data=> console.log('subscribe: ', data));//// setTimeout(()=>{//     emitter.emit('andriy', 'after 2 sec.')// }, 2000)//// setTimeout(()=>{//     unsub();// }, 3000)//// setTimeout(()=>{//     emitter.emit('andriy', 'after 4 sec.')// }, 4000)//// emitter.emit('andriy', [5, 'y']);