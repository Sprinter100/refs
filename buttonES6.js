goog.module('cl.gButton.Button');

goog.require('cl.iControl.Control');
/**
 * Прсвоение переменной результата goog.require не работает в дев режиме (без компиляции),
 * поэтому модуль нужно запрашивать по-старому
 */
goog.require('cl.gButton.View');

const View = goog.require('cl.gButton.View');

/**
 * Event enum
 * @enum {string}
 */
const Event = {
    CLICK: View.Event.CLICK,
    TOUCH_START: View.Event.TOUCH_START,
    TOUCH_END: View.Event.TOUCH_END
};

/**
 * Button class
 * creates a div button that dispathes CLICK, TOUCH_START and TOUCH_END events
 * and has "enable" and "disable" public methods
 */
class Button extends cl.iControl.Control {
    /**
     * @param {Object} view
     * @param {Object=} opt_params
     * @param {Object=} opt_domHelper
     */
    constructor(view, opt_params, opt_domHelper) {
        super(view, opt_params, opt_domHelper);

        this.setAllowTextSelection(false);
    }

    /**
     * @override
     */
    enterDocument() {
        super.enterDocument();

        this.viewListen(View.Event.CLICK, this.onClick);

        this.autoDispatch(View.Event.TOUCH_START);
        this.autoDispatch(View.Event.TOUCH_END);
    };

    /**
     * button enable
     */
    enable() {
        this.getView().enable();
    };

    /**
     * button disable
     */
    disable() {
        this.getView().disable();
    };

    /**
     * Button on click actions
     * @param {goog.events.Event} event
     * @protected
     */
    onClick(event) {
        this.dispatchEvent(Event.CLICK);
    };
}

/** @constructor */
exports = Button;

/** @enum {string} */
exports.Event = Event;
