import {ExcelComponent} from '../../core/ExcelComponent';import {createTable} from './table.template';import {resizeHandler} from './table.resize';import {shouldResize} from './table.functions';export class Table extends ExcelComponent{    static className = 'excel__table';    constructor ($root) {        super ($root, {            name: 'Table',            listeners: ['mousedown']        });    }    toHTML () {        return createTable(20);    }    // my implementation of resizing    /*onMousedown(event){        if (event.target.dataset.resize){            const $resizer = $(event.target);            const $parent = $resizer.closest('[data-type="resizable"]');            const coords = $parent.getCoords();            const rows = document.querySelectorAll('.row');            let index;            const arr = [];            rows.forEach((row) => {                const columns = row.querySelectorAll('.column');                const cells = row.querySelectorAll('.cell');                arr.push(cells)                columns.forEach((column, i) => {                    const els = event.target                        .closest('[data-type="resizable"]');                    if (column === els)index = i;                })            })            document.onmousemove = e => {                if ($parent.$el.classList.contains('row')){                    const delta = e.clientY - coords.bottom;                    const value = coords.height + delta;                    $parent.$el.style.height = value + 'px';                    $parent.$el.style.borderBottom = `2px solid #0e6ae8`;                } else {                    const delta = e.clientX - coords.right;                    const value = coords.width + delta;                    $parent.$el.style.width = value + 'px';                    style(index, arr)                        .forEach(cell => {                            if (cell){                                cell.style.width = value + 'px';                                cell.style.borderRight = `2px solid #0e6ae8`;                            }                        })                }            }            document.onmouseup = () => {                document.onmousemove = null;                $parent.$el.style.borderBottom = `1px solid #e2e3e3`;                arr.forEach(array=> {                    array                        .forEach(ar=> {                            ar.style.borderRight = `1px solid #e2e3e3`;                        })                })                document.onmouseup = null;            }        }    }*/    onMousedown(event) {        if (shouldResize(event)) {            resizeHandler (event, this.$root);        }        // this logic moved to table.resizer        /*if (event.target.dataset.resize){            const $resizer = $(event.target);            const $parent = $resizer.closest('[data-type="resizable"]');            const coords = $parent.getCoords();            const type = $resizer.data.resize;            const height = this.$root.$el.offsetHeight;            const width = this.$root.$el.offsetWidth;            let value;            $resizer.css({                opacity: 1,            });            document.onmousemove = e => {                if (type === 'col'){                    const delta = e.clientX - coords.right;                    value = coords.width + delta;                    $resizer.css({                        right: -delta + 'px',                        bottom: -height + 'px',                        width: '2px',                    });                } else {                    const delta = e.clientY - coords.bottom;                    value = coords.height + delta;                    $resizer.css({                        bottom: -delta + 'px',                        right: -width + 'px',                        height: '2px',                    });                }            }            document.onmouseup = () => {                document.onmousemove = null;                document.onmouseup = null;                if (type === 'col'){                    $parent.css({width: value + 'px'});                    this.$root                        .findAll(`[data-col="${$parent.data.col}"]`)                        .forEach(el => {                        el.style.width = value + 'px';                    })                    $resizer.css({                        opacity: 0,                        bottom: 0,                        right: '-2px',                        width: '4px'                    })                } else {                    $parent.css({height: value + 'px'});                    $resizer.css({                        opacity: 0,                        right: 0,                        bottom: '-2px',                        height: '4px'                    })                }            }        }    }*/    }}//function to help resize (my implementation)/*function style(index, arr){    return arr.map(el => {        return el[index]    })}*/