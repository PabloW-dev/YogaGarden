//for A type animations

export function createTimeline() {
    let timeouts = [];

    function add(fn, ms) {
        const id = setTimeout(fn, ms);
        timeouts.push(id);
    }

    function clear() {
        timeouts.forEach(clearTimeout);
        timeouts = [];
    }

    function wait(ms) {
        return new Promise(resolve => {
            add(resolve, ms);
        });
    }

    return { add, clear, wait };
}