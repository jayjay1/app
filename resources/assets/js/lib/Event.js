class Event {
    /**
     * Constructor
     *
     * @param vue
     */
    constructor(vue = null) {
        this.vue = vue || new Vue();
    }

    /**
     * Fire an event with a payload.
     *
     * @param event
     * @param data
     */
    fire(event, data = null) {
        this.vue.$emit(event, data);
    }

    /**
     * Listen for an event and call the callback.
     *
     * @param event
     * @param callback
     */
    listen(event, callback) {
        this.vue.$on(event, callback);
    }
}

const event = new Event();

module.exports = event;
