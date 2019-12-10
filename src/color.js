export default {
/* eslint-disable no-console */
    bind(el, bindings, vnode) {
        el.style.color = "red";
        console.log(bindings);
        console.log(vnode);
    }
/* eslint-enable no-console */
}