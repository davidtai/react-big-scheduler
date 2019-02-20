'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddMore = (_temp = _class = function (_Component) {
    _inherits(AddMore, _Component);

    function AddMore(props) {
        _classCallCheck(this, AddMore);

        return _possibleConstructorReturn(this, (AddMore.__proto__ || Object.getPrototypeOf(AddMore)).call(this, props));
    }

    _createClass(AddMore, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                number = _props.number,
                left = _props.left,
                width = _props.width,
                top = _props.top,
                clickAction = _props.clickAction,
                headerItem = _props.headerItem,
                schedulerData = _props.schedulerData;
            var config = schedulerData.config;

            var content = '+' + number + 'more';

            return _react2.default.createElement(
                'a',
                { className: 'timeline-event', style: { left: left, width: width, top: top }, onClick: function onClick() {
                        clickAction(headerItem);
                    } },
                _react2.default.createElement(
                    'div',
                    { style: { height: config.eventItemHeight, color: '#999', textAlign: 'center' } },
                    content
                )
            );
        }
    }]);

    return AddMore;
}(_react.Component), _class.propTypes = {
    schedulerData: _propTypes.PropTypes.object.isRequired,
    number: _propTypes.PropTypes.number.isRequired,
    left: _propTypes.PropTypes.number.isRequired,
    width: _propTypes.PropTypes.number.isRequired,
    top: _propTypes.PropTypes.number.isRequired,
    clickAction: _propTypes.PropTypes.func.isRequired,
    headerItem: _propTypes.PropTypes.object.isRequired
}, _temp);
exports.default = AddMore;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _col = require('antd/lib/col');

var _col2 = _interopRequireDefault(_col);

var _row = require('antd/lib/row');

var _row2 = _interopRequireDefault(_row);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

require('antd/lib/grid/style/index.css');

var _EventItem = require('./EventItem');

var _EventItem2 = _interopRequireDefault(_EventItem);

var _DnDSource = require('./DnDSource');

var _DnDSource2 = _interopRequireDefault(_DnDSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddMorePopover = (_temp = _class = function (_Component) {
    _inherits(AddMorePopover, _Component);

    function AddMorePopover(props) {
        _classCallCheck(this, AddMorePopover);

        var _this = _possibleConstructorReturn(this, (AddMorePopover.__proto__ || Object.getPrototypeOf(AddMorePopover)).call(this, props));

        _this.state = {
            dndSource: new _DnDSource2.default(function (props) {
                return props.eventItem;
            }, _EventItem2.default)
        };
        return _this;
    }

    _createClass(AddMorePopover, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                headerItem = _props.headerItem,
                left = _props.left,
                top = _props.top,
                height = _props.height,
                closeAction = _props.closeAction,
                schedulerData = _props.schedulerData;
            var config = schedulerData.config,
                localeMoment = schedulerData.localeMoment;
            var time = headerItem.time,
                start = headerItem.start,
                end = headerItem.end,
                events = headerItem.events;

            var header = localeMoment(time).format(config.addMorePopoverHeaderFormat);
            var durationStart = localeMoment(start);
            var durationEnd = localeMoment(end);
            var eventList = [];
            var i = 0;
            var DnDEventItem = this.state.dndSource.getDragSource();
            events.forEach(function (evt) {
                if (evt !== undefined) {
                    i++;
                    var eventStart = localeMoment(evt.eventItem.start);
                    var eventEnd = localeMoment(evt.eventItem.end);
                    var isStart = eventStart >= durationStart;
                    var isEnd = eventEnd < durationEnd;
                    var eventItemLeft = 10;
                    var eventItemWidth = 138;
                    var eventItemTop = 12 + i * config.eventItemLineHeight;
                    var eventItem = _react2.default.createElement(DnDEventItem, _extends({}, _this2.props, {
                        key: evt.eventItem.id,
                        eventItem: evt.eventItem,
                        leftIndex: 0,
                        isInPopover: true,
                        isStart: isStart,
                        isEnd: isEnd,
                        rightIndex: 1,
                        left: eventItemLeft,
                        width: eventItemWidth,
                        top: eventItemTop
                    }));
                    eventList.push(eventItem);
                }
            });

            return _react2.default.createElement(
                'div',
                { className: 'add-more-popover-overlay', style: { left: left, top: top, height: height, width: '170px' } },
                _react2.default.createElement(
                    _row2.default,
                    { type: 'flex', justify: 'space-between', align: 'middle' },
                    _react2.default.createElement(
                        _col2.default,
                        { span: '22' },
                        _react2.default.createElement(
                            'span',
                            { className: 'base-text' },
                            header
                        )
                    ),
                    _react2.default.createElement(
                        _col2.default,
                        { span: '2' },
                        _react2.default.createElement(
                            'span',
                            { onClick: function onClick() {
                                    closeAction(undefined);
                                } },
                            _react2.default.createElement(_icon2.default, { type: 'cross' })
                        )
                    )
                ),
                eventList
            );
        }
    }]);

    return AddMorePopover;
}(_react.Component), _class.propTypes = {
    schedulerData: _propTypes.PropTypes.object.isRequired,
    headerItem: _propTypes.PropTypes.object.isRequired,
    left: _propTypes.PropTypes.number.isRequired,
    top: _propTypes.PropTypes.number.isRequired,
    height: _propTypes.PropTypes.number.isRequired,
    closeAction: _propTypes.PropTypes.func.isRequired,
    subtitleGetter: _propTypes.PropTypes.func,
    moveEvent: _propTypes.PropTypes.func,
    eventItemClick: _propTypes.PropTypes.func,
    viewEventClick: _propTypes.PropTypes.func,
    viewEventText: _propTypes.PropTypes.string,
    viewEvent2Click: _propTypes.PropTypes.func,
    viewEvent2Text: _propTypes.PropTypes.string,
    eventItemTemplateResolver: _propTypes.PropTypes.func
}, _temp);
exports.default = AddMorePopover;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _popover = require('antd/lib/popover');

var _popover2 = _interopRequireDefault(_popover);

require('antd/lib/popover/style/index.css');

var _EventItemPopover = require('./EventItemPopover');

var _EventItemPopover2 = _interopRequireDefault(_EventItemPopover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AgendaEventItem = (_temp = _class = function (_Component) {
    _inherits(AgendaEventItem, _Component);

    function AgendaEventItem(props) {
        _classCallCheck(this, AgendaEventItem);

        return _possibleConstructorReturn(this, (AgendaEventItem.__proto__ || Object.getPrototypeOf(AgendaEventItem)).call(this, props));
    }

    _createClass(AgendaEventItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                eventItem = _props.eventItem,
                isStart = _props.isStart,
                isEnd = _props.isEnd,
                eventItemClick = _props.eventItemClick,
                schedulerData = _props.schedulerData,
                eventItemTemplateResolver = _props.eventItemTemplateResolver;
            var config = schedulerData.config;

            var roundCls = isStart ? isEnd ? 'round-all' : 'round-head' : isEnd ? 'round-tail' : 'round-none';
            var bgColor = config.defaultEventBgColor;
            if (!!eventItem.bgColor) bgColor = eventItem.bgColor;

            var titleText = schedulerData.behaviors.getEventTextFunc(schedulerData, eventItem);
            var content = _react2.default.createElement(_EventItemPopover2.default, _extends({}, this.props, {
                title: eventItem.title,
                startTime: eventItem.start,
                endTime: eventItem.end,
                statusColor: bgColor
            }));

            var eventItemTemplate = _react2.default.createElement(
                'div',
                { className: roundCls + ' event-item', key: eventItem.id,
                    style: { height: config.eventItemHeight, maxWidth: config.agendaMaxEventWidth, backgroundColor: bgColor } },
                _react2.default.createElement(
                    'span',
                    { style: { marginLeft: '10px', lineHeight: config.eventItemHeight + 'px' } },
                    titleText
                )
            );
            if (eventItemTemplateResolver != undefined) eventItemTemplate = eventItemTemplateResolver(schedulerData, eventItem, bgColor, isStart, isEnd, 'event-item', config.eventItemHeight, config.agendaMaxEventWidth);

            return config.eventItemPopoverEnabled ? _react2.default.createElement(
                _popover2.default,
                { placement: 'bottomLeft', content: content, trigger: 'hover' },
                _react2.default.createElement(
                    'a',
                    { className: 'day-event', onClick: function onClick() {
                            if (!!eventItemClick) eventItemClick(schedulerData, eventItem);
                        } },
                    eventItemTemplate
                )
            ) : _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(
                    'a',
                    { className: 'day-event', onClick: function onClick() {
                            if (!!eventItemClick) eventItemClick(schedulerData, eventItem);
                        } },
                    eventItemTemplate
                )
            );
        }
    }]);

    return AgendaEventItem;
}(_react.Component), _class.propTypes = {
    schedulerData: _propTypes.PropTypes.object.isRequired,
    eventItem: _propTypes.PropTypes.object.isRequired,
    isStart: _propTypes.PropTypes.bool.isRequired,
    isEnd: _propTypes.PropTypes.bool.isRequired,
    subtitleGetter: _propTypes.PropTypes.func,
    eventItemClick: _propTypes.PropTypes.func,
    viewEventClick: _propTypes.PropTypes.func,
    viewEventText: _propTypes.PropTypes.string,
    viewEvent2Click: _propTypes.PropTypes.func,
    viewEvent2Text: _propTypes.PropTypes.string,
    eventItemTemplateResolver: _propTypes.PropTypes.func
}, _temp);
exports.default = AgendaEventItem;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _AgendaEventItem = require('./AgendaEventItem');

var _AgendaEventItem2 = _interopRequireDefault(_AgendaEventItem);

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AgendaResourceEvents = (_temp = _class = function (_Component) {
    _inherits(AgendaResourceEvents, _Component);

    function AgendaResourceEvents(props) {
        _classCallCheck(this, AgendaResourceEvents);

        return _possibleConstructorReturn(this, (AgendaResourceEvents.__proto__ || Object.getPrototypeOf(AgendaResourceEvents)).call(this, props));
    }

    _createClass(AgendaResourceEvents, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                schedulerData = _props.schedulerData,
                resourceEvents = _props.resourceEvents,
                slotClickedFunc = _props.slotClickedFunc,
                slotItemTemplateResolver = _props.slotItemTemplateResolver;
            var startDate = schedulerData.startDate,
                endDate = schedulerData.endDate,
                config = schedulerData.config,
                localeMoment = schedulerData.localeMoment;

            var agendaResourceTableWidth = schedulerData.getResourceTableWidth();
            var width = agendaResourceTableWidth - 2;

            var events = [];
            resourceEvents.headerItems.forEach(function (item) {
                var start = localeMoment(startDate).format(_index.DATE_FORMAT),
                    end = localeMoment(endDate).add(1, 'days').format(_index.DATE_FORMAT),
                    headerStart = localeMoment(item.start).format(_index.DATE_FORMAT),
                    headerEnd = localeMoment(item.end).format(_index.DATE_FORMAT);

                if (start === headerStart && end === headerEnd) {
                    item.events.forEach(function (evt) {
                        var durationStart = localeMoment(startDate);
                        var durationEnd = localeMoment(endDate).add(1, 'days');
                        var eventStart = localeMoment(evt.eventItem.start);
                        var eventEnd = localeMoment(evt.eventItem.end);
                        var isStart = eventStart >= durationStart;
                        var isEnd = eventEnd < durationEnd;
                        var eventItem = _react2.default.createElement(_AgendaEventItem2.default, _extends({}, _this2.props, {
                            key: evt.eventItem.id,
                            eventItem: evt.eventItem,
                            isStart: isStart,
                            isEnd: isEnd
                        }));
                        events.push(eventItem);
                    });
                }
            });

            var a = slotClickedFunc != undefined ? _react2.default.createElement(
                'a',
                { onClick: function onClick() {
                        slotClickedFunc(schedulerData, resourceEvents);
                    } },
                resourceEvents.slotName
            ) : _react2.default.createElement(
                'span',
                null,
                resourceEvents.slotName
            );
            var slotItem = _react2.default.createElement(
                'div',
                { style: { width: width }, title: resourceEvents.slotName, className: 'overflow-text header2-text' },
                a
            );
            if (!!slotItemTemplateResolver) {
                var temp = slotItemTemplateResolver(schedulerData, resourceEvents, slotClickedFunc, width, "overflow-text header2-text");
                if (!!temp) slotItem = temp;
            }

            return _react2.default.createElement(
                'tr',
                { style: { minHeight: config.eventItemLineHeight + 2 } },
                _react2.default.createElement(
                    'td',
                    { 'data-resource-id': resourceEvents.slotId },
                    slotItem
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'day-event-container' },
                        events
                    )
                )
            );
        }
    }]);

    return AgendaResourceEvents;
}(_react.Component), _class.propTypes = {
    schedulerData: _propTypes.PropTypes.object.isRequired,
    resourceEvents: _propTypes.PropTypes.object.isRequired,
    subtitleGetter: _propTypes.PropTypes.func,
    eventItemClick: _propTypes.PropTypes.func,
    viewEventClick: _propTypes.PropTypes.func,
    viewEventText: _propTypes.PropTypes.string,
    viewEvent2Click: _propTypes.PropTypes.func,
    viewEvent2Text: _propTypes.PropTypes.string,
    slotClickedFunc: _propTypes.PropTypes.func,
    slotItemTemplateResolver: _propTypes.PropTypes.func
}, _temp);
exports.default = AgendaResourceEvents;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _AgendaResourceEvents = require('./AgendaResourceEvents');

var _AgendaResourceEvents2 = _interopRequireDefault(_AgendaResourceEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AgendaView = (_temp = _class = function (_Component) {
    _inherits(AgendaView, _Component);

    function AgendaView(props) {
        _classCallCheck(this, AgendaView);

        return _possibleConstructorReturn(this, (AgendaView.__proto__ || Object.getPrototypeOf(AgendaView)).call(this, props));
    }

    _createClass(AgendaView, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var schedulerData = this.props.schedulerData;
            var config = schedulerData.config;
            var renderData = schedulerData.renderData;

            var agendaResourceTableWidth = schedulerData.getResourceTableWidth(),
                tableHeaderHeight = schedulerData.getTableHeaderHeight();
            var resourceEventsList = renderData.map(function (item) {
                return _react2.default.createElement(_AgendaResourceEvents2.default, _extends({}, _this2.props, {
                    resourceEvents: item,
                    key: item.slotId }));
            });
            var resourceName = schedulerData.isEventPerspective ? config.taskName : config.resourceName;
            var agendaViewHeader = config.agendaViewHeader;

            return _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'table',
                        { className: 'scheduler-table' },
                        _react2.default.createElement(
                            'thead',
                            null,
                            _react2.default.createElement(
                                'tr',
                                { style: { height: tableHeaderHeight } },
                                _react2.default.createElement(
                                    'th',
                                    { style: { width: agendaResourceTableWidth }, className: 'header3-text' },
                                    resourceName
                                ),
                                _react2.default.createElement(
                                    'th',
                                    { className: 'header3-text' },
                                    agendaViewHeader
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'tbody',
                            null,
                            resourceEventsList
                        )
                    )
                )
            );
        }
    }]);

    return AgendaView;
}(_react.Component), _class.propTypes = {
    schedulerData: _propTypes.PropTypes.object.isRequired,
    subtitleGetter: _propTypes.PropTypes.func,
    eventItemClick: _propTypes.PropTypes.func,
    viewEventClick: _propTypes.PropTypes.func,
    viewEventText: _propTypes.PropTypes.string,
    viewEvent2Click: _propTypes.PropTypes.func,
    viewEvent2Text: _propTypes.PropTypes.string,
    slotClickedFunc: _propTypes.PropTypes.func
}, _temp);
exports.default = AgendaView;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BodyView = (_temp = _class = function (_Component) {
    _inherits(BodyView, _Component);

    function BodyView(props) {
        _classCallCheck(this, BodyView);

        return _possibleConstructorReturn(this, (BodyView.__proto__ || Object.getPrototypeOf(BodyView)).call(this, props));
    }

    _createClass(BodyView, [{
        key: 'render',
        value: function render() {
            var schedulerData = this.props.schedulerData;
            var renderData = schedulerData.renderData,
                headers = schedulerData.headers,
                config = schedulerData.config,
                behaviors = schedulerData.behaviors;

            var cellWidth = schedulerData.getContentCellWidth();

            var tableRows = renderData.map(function (item) {
                var rowCells = headers.map(function (header, index) {
                    var key = item.slotId + '_' + header.time;
                    var style = index === headers.length - 1 ? {} : { width: cellWidth };
                    if (!!header.nonWorkingTime) style = _extends({}, style, { backgroundColor: config.nonWorkingTimeBodyBgColor });
                    if (!!behaviors.getNonAgendaViewBodyCellBgColorFunc) {
                        var cellBgColor = behaviors.getNonAgendaViewBodyCellBgColorFunc(schedulerData, item.slotId, header);
                        if (!!cellBgColor) style = _extends({}, style, { backgroundColor: cellBgColor });
                    }
                    return _react2.default.createElement(
                        'td',
                        { key: key, style: style },
                        _react2.default.createElement('div', null)
                    );
                });

                return _react2.default.createElement(
                    'tr',
                    { key: item.slotId, style: { height: item.rowHeight } },
                    rowCells
                );
            });

            return _react2.default.createElement(
                'tbody',
                null,
                tableRows
            );
        }
    }]);

    return BodyView;
}(_react.Component), _class.propTypes = {
    schedulerData: _propTypes.PropTypes.object.isRequired
}, _temp);
exports.default = BodyView;
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var CellUnits = {
    Day: 0,
    Hour: 1
};

exports.default = CellUnits;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var DemoData = {
    resources: [{
        id: 'r1',
        name: 'Resource1'
    }, {
        id: 'r2',
        name: 'Resource2'
    }, {
        id: 'r3',
        name: 'Resource3'
    }, {
        id: 'r4',
        name: 'Resource4'
    }, {
        id: 'r5',
        name: 'Resource5'
    }, {
        id: 'r6',
        name: 'Resource6'
    }, {
        id: 'r7',
        name: 'Resource7Resource7Resource7Resource7Resource7'
    }],
    events: [{
        id: 1,
        start: '2017-12-18 09:30:00',
        end: '2017-12-19 23:30:00',
        resourceId: 'r1',
        title: 'I am finished',
        bgColor: '#D9D9D9',
        showPopover: false
    }, {
        id: 2,
        start: '2017-12-18 12:30:00',
        end: '2017-12-26 23:30:00',
        resourceId: 'r2',
        title: 'I am not resizable',
        resizable: false
    }, {
        id: 3,
        start: '2017-12-19 12:30:00',
        end: '2017-12-20 23:30:00',
        resourceId: 'r3',
        title: 'I am not movable',
        movable: false
    }, {
        id: 4,
        start: '2017-12-19 14:30:00',
        end: '2017-12-20 23:30:00',
        resourceId: 'r4',
        title: 'I am not start-resizable',
        startResizable: false
    }, {
        id: 5,
        start: '2017-12-19 15:30:00',
        end: '2017-12-20 23:30:00',
        resourceId: 'r5',
        title: 'I am not end-resizable',
        endResizable: false
    }, {
        id: 6,
        start: '2017-12-19 15:35:00',
        end: '2017-12-19 23:30:00',
        resourceId: 'r6',
        title: 'I am normal'
    }, {
        id: 7,
        start: '2017-12-19 15:40:00',
        end: '2017-12-20 23:30:00',
        resourceId: 'r7',
        title: 'I am exceptional',
        bgColor: '#FA9E95'
    }, {
        id: 8,
        start: '2017-12-19 15:50:00',
        end: '2017-12-19 23:30:00',
        resourceId: 'r1',
        title: 'I am locked',
        movable: false,
        resizable: false,
        bgColor: 'red'
    }, {
        id: 9,
        start: '2017-12-19 16:30:00',
        end: '2017-12-27 23:30:00',
        resourceId: 'r1',
        title: 'R1 has many tasks 1'
    }, {
        id: 10,
        start: '2017-12-19 17:30:00',
        end: '2017-12-19 23:30:00',
        resourceId: 'r1',
        title: 'R1 has recurring tasks every week on Tuesday, Friday',
        rrule: 'FREQ=WEEKLY;DTSTART=20171219T013000Z;BYDAY=TU,FR',
        bgColor: '#f759ab'
    }, {
        id: 11,
        start: '2017-12-19 18:30:00',
        end: '2017-12-20 23:30:00',
        resourceId: 'r1',
        title: 'R1 has many tasks 3'
    }, {
        id: 12,
        start: '2017-12-20 18:30:00',
        end: '2017-12-20 23:30:00',
        resourceId: 'r1',
        title: 'R1 has many tasks 4'
    }, {
        id: 13,
        start: '2017-12-21 18:30:00',
        end: '2017-12-24 23:30:00',
        resourceId: 'r1',
        title: 'R1 has many tasks 5'
    }, {
        id: 14,
        start: '2017-12-23 18:30:00',
        end: '2017-12-27 23:30:00',
        resourceId: 'r1',
        title: 'R1 has many tasks 6'
    }],
    eventsForTaskView: [{
        id: 1,
        start: '2017-12-18 09:30:00',
        end: '2017-12-18 23:30:00',
        resourceId: 'r1',
        title: 'I am finished',
        bgColor: '#D9D9D9',
        groupId: 1,
        groupName: 'Task1'
    }, {
        id: 2,
        start: '2017-12-18 12:30:00',
        end: '2017-12-26 23:30:00',
        resourceId: 'r2',
        title: 'I am not resizable',
        resizable: false,
        groupId: 2,
        groupName: 'Task2'
    }, {
        id: 3,
        start: '2017-12-19 12:30:00',
        end: '2017-12-20 23:30:00',
        resourceId: 'r3',
        title: 'I am not movable',
        movable: false,
        groupId: 3,
        groupName: 'Task3'
    }, {
        id: 7,
        start: '2017-12-19 15:40:00',
        end: '2017-12-20 23:30:00',
        resourceId: 'r7',
        title: 'I am exceptional',
        bgColor: '#FA9E95',
        groupId: 4,
        groupName: 'Task4'
    }, {
        id: 4,
        start: '2017-12-20 14:30:00',
        end: '2017-12-21 23:30:00',
        resourceId: 'r4',
        title: 'I am not start-resizable',
        startResizable: false,
        groupId: 1,
        groupName: 'Task1'
    }, {
        id: 5,
        start: '2017-12-21 15:30:00',
        end: '2017-12-22 23:30:00',
        resourceId: 'r5',
        title: 'I am not end-resizable',
        endResizable: false,
        groupId: 3,
        groupName: 'Task3'
    }, {
        id: 9,
        start: '2017-12-21 16:30:00',
        end: '2017-12-21 23:30:00',
        resourceId: 'r1',
        title: 'R1 has many tasks',
        groupId: 4,
        groupName: 'Task4'
    }, {
        id: 6,
        start: '2017-12-22 15:35:00',
        end: '2017-12-23 23:30:00',
        resourceId: 'r6',
        title: 'I am normal',
        groupId: 1,
        groupName: 'Task1'
    }, {
        id: 8,
        start: '2017-12-25 15:50:00',
        end: '2017-12-26 23:30:00',
        resourceId: 'r1',
        title: 'I am locked',
        movable: false,
        resizable: false,
        bgColor: 'red',
        groupId: 1,
        groupName: 'Task1'
    }, {
        id: 10,
        start: '2017-12-26 18:30:00',
        end: '2017-12-26 23:30:00',
        resourceId: 'r2',
        title: 'R2 has many tasks',
        groupId: 4,
        groupName: 'Task4'
    }, {
        id: 11,
        start: '2017-12-27 18:30:00',
        end: '2017-12-27 23:30:00',
        resourceId: 'r14',
        title: 'R4 has many tasks',
        groupId: 4,
        groupName: 'Task4'
    }, {
        id: 12,
        start: '2017-12-28 18:30:00',
        end: '2017-12-28 23:30:00',
        resourceId: 'r6',
        title: 'R6 has many tasks',
        groupId: 3,
        groupName: 'Task3'
    }],
    eventsForCustomEventStyle: [{
        id: 1,
        start: '2017-12-18 09:30:00',
        end: '2017-12-19 23:30:00',
        resourceId: 'r1',
        title: 'I am finished',
        bgColor: '#D9D9D9',
        type: 1
    }, {
        id: 2,
        start: '2017-12-18 12:30:00',
        end: '2017-12-26 23:30:00',
        resourceId: 'r2',
        title: 'I am not resizable',
        resizable: false,
        type: 2
    }, {
        id: 3,
        start: '2017-12-19 12:30:00',
        end: '2017-12-20 23:30:00',
        resourceId: 'r3',
        title: 'I am not movable',
        movable: false,
        type: 3
    }, {
        id: 4,
        start: '2017-12-19 14:30:00',
        end: '2017-12-20 23:30:00',
        resourceId: 'r4',
        title: 'I am not start-resizable',
        startResizable: false,
        type: 1
    }, {
        id: 5,
        start: '2017-12-19 15:30:00',
        end: '2017-12-20 23:30:00',
        resourceId: 'r5',
        title: 'I am not end-resizable',
        endResizable: false,
        type: 2
    }, {
        id: 6,
        start: '2017-12-19 15:35:00',
        end: '2017-12-19 23:30:00',
        resourceId: 'r6',
        title: 'I am normal',
        type: 3
    }, {
        id: 7,
        start: '2017-12-19 15:40:00',
        end: '2017-12-20 23:30:00',
        resourceId: 'r7',
        title: 'I am exceptional',
        bgColor: '#FA9E95',
        type: 1
    }, {
        id: 8,
        start: '2017-12-19 15:50:00',
        end: '2017-12-19 23:30:00',
        resourceId: 'r1',
        title: 'I am locked',
        movable: false,
        resizable: false,
        bgColor: 'red',
        type: 2
    }, {
        id: 9,
        start: '2017-12-19 16:30:00',
        end: '2017-12-27 23:30:00',
        resourceId: 'r1',
        title: 'R1 has many tasks 1',
        type: 3
    }, {
        id: 10,
        start: '2017-12-20 18:30:00',
        end: '2017-12-20 23:30:00',
        resourceId: 'r1',
        title: 'R1 has many tasks 2',
        type: 1
    }, {
        id: 11,
        start: '2017-12-21 18:30:00',
        end: '2017-12-22 23:30:00',
        resourceId: 'r1',
        title: 'R1 has many tasks 3',
        type: 2
    }, {
        id: 12,
        start: '2017-12-23 18:30:00',
        end: '2017-12-27 23:30:00',
        resourceId: 'r1',
        title: 'R1 has many tasks 4',
        type: 3
    }]
};

exports.default = DemoData;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _reactDnd = require('react-dnd');

var _Util = require('./Util');

var _DnDTypes = require('./DnDTypes');

var _index = require('./index');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DnDContext = function DnDContext(sources, DecoratedComponent) {
    var _this = this;

    _classCallCheck(this, DnDContext);

    this.getDropSpec = function () {
        return {
            drop: function drop(props, monitor, component) {
                var schedulerData = props.schedulerData,
                    resourceEvents = props.resourceEvents;
                var cellUnit = schedulerData.cellUnit,
                    localeMoment = schedulerData.localeMoment;

                var type = monitor.getItemType();
                var pos = (0, _Util.getPos)(component.eventContainer);
                var cellWidth = schedulerData.getContentCellWidth();
                var initialStartTime = null,
                    initialEndTime = null;
                if (type === _DnDTypes.DnDTypes.EVENT) {
                    var initialPoint = monitor.getInitialClientOffset();
                    var initialLeftIndex = Math.floor((initialPoint.x - pos.x) / cellWidth);
                    initialStartTime = resourceEvents.headerItems[initialLeftIndex].start;
                    initialEndTime = resourceEvents.headerItems[initialLeftIndex].end;
                    if (cellUnit !== _index.CellUnits.Hour) initialEndTime = localeMoment(resourceEvents.headerItems[initialLeftIndex].start).hour(23).minute(59).second(59).format(_index.DATETIME_FORMAT);
                }
                var point = monitor.getClientOffset();
                var leftIndex = Math.floor((point.x - pos.x) / cellWidth);
                var startTime = resourceEvents.headerItems[leftIndex].start;
                var endTime = resourceEvents.headerItems[leftIndex].end;
                if (cellUnit !== _index.CellUnits.Hour) endTime = localeMoment(resourceEvents.headerItems[leftIndex].start).hour(23).minute(59).second(59).format(_index.DATETIME_FORMAT);

                return {
                    slotId: resourceEvents.slotId,
                    slotName: resourceEvents.slotName,
                    start: startTime,
                    end: endTime,
                    initialStart: initialStartTime,
                    initialEnd: initialEndTime
                };
            },

            canDrop: function canDrop(props, monitor) {
                var schedulerData = props.schedulerData;

                var item = monitor.getItem();
                if (schedulerData._isResizing()) return false;
                var config = schedulerData.config;

                return config.movable && (item.movable == undefined || item.movable !== false);
            }
        };
    };

    this.getDropCollect = function (connect, monitor) {
        return {
            connectDropTarget: connect.dropTarget(),
            isOver: monitor.isOver()
        };
    };

    this.getDropTarget = function () {
        return (0, _reactDnd.DropTarget)([].concat(_toConsumableArray(_this.sourceMap.keys())), _this.getDropSpec(), _this.getDropCollect)(_this.DecoratedComponent);
    };

    this.getDndSource = function () {
        var dndType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _DnDTypes.DnDTypes.EVENT;

        return _this.sourceMap.get(dndType);
    };

    this.sourceMap = new Map();
    sources.forEach(function (item) {
        _this.sourceMap.set(item.dndType, item);
    });
    this.DecoratedComponent = DecoratedComponent;
};

exports.default = DnDContext;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _reactDnd = require('react-dnd');

var _index = require('./index');

var _DnDTypes = require('./DnDTypes');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DnDSource = function DnDSource(resolveDragObjFunc, DecoratedComponent) {
    var _this = this;

    var dndType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _DnDTypes.DnDTypes.EVENT;

    _classCallCheck(this, DnDSource);

    this.getDragSpec = function () {
        return {
            beginDrag: function beginDrag(props, monitor, component) {
                return _this.resolveDragObjFunc(props);
            },
            endDrag: function endDrag(props, monitor, component) {
                if (!monitor.didDrop()) return;

                var moveEvent = props.moveEvent,
                    newEvent = props.newEvent,
                    schedulerData = props.schedulerData;
                var events = schedulerData.events,
                    config = schedulerData.config,
                    viewType = schedulerData.viewType,
                    localeMoment = schedulerData.localeMoment;

                var item = monitor.getItem();
                var type = monitor.getItemType();
                var dropResult = monitor.getDropResult();
                var slotId = dropResult.slotId,
                    slotName = dropResult.slotName;
                var newStart = dropResult.start,
                    newEnd = dropResult.end;
                var initialStart = dropResult.initialStart,
                    initialEnd = dropResult.initialEnd;
                var action = 'New';

                var isEvent = type === _DnDTypes.DnDTypes.EVENT;
                if (isEvent) {
                    var event = item;
                    if (config.relativeMove) {
                        newStart = localeMoment(event.start).add(localeMoment(newStart).diff(localeMoment(initialStart)), 'ms').format(_index.DATETIME_FORMAT);
                    } else {
                        if (viewType !== _index.ViewTypes.Day) {
                            var tmpMoment = localeMoment(newStart);
                            newStart = localeMoment(event.start).year(tmpMoment.year()).month(tmpMoment.month()).date(tmpMoment.date()).format(_index.DATETIME_FORMAT);
                        }
                    }
                    newEnd = localeMoment(newStart).add(localeMoment(event.end).diff(localeMoment(event.start)), 'ms').format(_index.DATETIME_FORMAT);

                    //if crossResourceMove disabled, slot returns old value
                    if (config.crossResourceMove === false) {
                        slotId = schedulerData._getEventSlotId(item);
                        slotName = undefined;
                        var slot = schedulerData.getSlotById(slotId);
                        if (!!slot) slotName = slot.name;
                    }

                    action = 'Move';
                }

                var hasConflict = false;
                if (config.checkConflict) {
                    var start = localeMoment(newStart),
                        end = localeMoment(newEnd);

                    events.forEach(function (e) {
                        if (schedulerData._getEventSlotId(e) === slotId && (!isEvent || e.id !== item.id)) {
                            var eStart = localeMoment(e.start),
                                eEnd = localeMoment(e.end);
                            if (start >= eStart && start < eEnd || end > eStart && end <= eEnd || eStart >= start && eStart < end || eEnd > start && eEnd <= end) hasConflict = true;
                        }
                    });
                }

                if (hasConflict) {
                    var conflictOccurred = props.conflictOccurred;

                    if (conflictOccurred != undefined) {
                        conflictOccurred(schedulerData, action, item, type, slotId, slotName, newStart, newEnd);
                    } else {
                        console.log('Conflict occurred, set conflictOccurred func in Scheduler to handle it');
                    }
                } else {
                    if (isEvent) {
                        if (moveEvent !== undefined) {
                            moveEvent(schedulerData, item, slotId, slotName, newStart, newEnd);
                        }
                    } else {
                        if (newEvent !== undefined) newEvent(schedulerData, slotId, slotName, newStart, newEnd, type, item);
                    }
                }
            },

            canDrag: function canDrag(props) {
                var schedulerData = props.schedulerData;

                var item = _this.resolveDragObjFunc(props);
                if (schedulerData._isResizing()) return false;
                var config = schedulerData.config;

                return config.movable && (item.movable == undefined || item.movable !== false);
            }
        };
    };

    this.getDragCollect = function (connect, monitor) {
        return {
            connectDragSource: connect.dragSource(),
            isDragging: monitor.isDragging(),
            connectDragPreview: connect.dragPreview()
        };
    };

    this.getDragSource = function () {
        return _this.dragSource;
    };

    this.resolveDragObjFunc = resolveDragObjFunc;
    this.DecoratedComponent = DecoratedComponent;
    this.dndType = dndType;
    this.dragSource = (0, _reactDnd.DragSource)(this.dndType, this.getDragSpec(), this.getDragCollect)(this.DecoratedComponent);
};

exports.default = DnDSource;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var DnDTypes = exports.DnDTypes = {
    EVENT: 'event'
};
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _popover = require('antd/lib/popover');

var _popover2 = _interopRequireDefault(_popover);

require('antd/lib/popover/style/index.css');

var _EventItemPopover = require('./EventItemPopover');

var _EventItemPopover2 = _interopRequireDefault(_EventItemPopover);

var _index = require('./index');

var _DnDTypes = require('./DnDTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventItem = (_temp = _class = function (_Component) {
    _inherits(EventItem, _Component);

    function EventItem(props) {
        _classCallCheck(this, EventItem);

        var _this = _possibleConstructorReturn(this, (EventItem.__proto__ || Object.getPrototypeOf(EventItem)).call(this, props));

        _initialiseProps.call(_this);

        var left = props.left,
            top = props.top,
            width = props.width;

        _this.state = {
            left: left,
            top: top,
            width: width
        };
        _this.startResizer = null;
        _this.endResizer = null;
        return _this;
    }

    _createClass(EventItem, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(np) {
            var left = np.left,
                top = np.top,
                width = np.width;

            this.setState({
                left: left,
                top: top,
                width: width
            });

            this.subscribeResizeEvent(np);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.subscribeResizeEvent(this.props);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                eventItem = _props.eventItem,
                isStart = _props.isStart,
                isEnd = _props.isEnd,
                isInPopover = _props.isInPopover,
                eventItemClick = _props.eventItemClick,
                schedulerData = _props.schedulerData,
                isDragging = _props.isDragging,
                connectDragSource = _props.connectDragSource,
                connectDragPreview = _props.connectDragPreview,
                eventItemTemplateResolver = _props.eventItemTemplateResolver;
            var config = schedulerData.config,
                localeMoment = schedulerData.localeMoment;
            var _state = this.state,
                left = _state.left,
                width = _state.width,
                top = _state.top;

            var roundCls = isStart ? isEnd ? 'round-all' : 'round-head' : isEnd ? 'round-tail' : 'round-none';
            var bgColor = config.defaultEventBgColor;
            if (!!eventItem.bgColor) bgColor = eventItem.bgColor;

            var titleText = schedulerData.behaviors.getEventTextFunc(schedulerData, eventItem);
            var content = _react2.default.createElement(_EventItemPopover2.default, _extends({}, this.props, {
                eventItem: eventItem,
                title: eventItem.title,
                startTime: eventItem.start,
                endTime: eventItem.end,
                statusColor: bgColor }));

            var start = localeMoment(eventItem.start);
            var eventTitle = isInPopover ? start.format('HH:mm') + ' ' + titleText : titleText;
            var startResizeDiv = _react2.default.createElement('div', null);
            if (this.startResizable(this.props)) startResizeDiv = _react2.default.createElement('div', { className: 'event-resizer event-start-resizer', ref: function ref(_ref) {
                    return _this2.startResizer = _ref;
                } });
            var endResizeDiv = _react2.default.createElement('div', null);
            if (this.endResizable(this.props)) endResizeDiv = _react2.default.createElement('div', { className: 'event-resizer event-end-resizer', ref: function ref(_ref2) {
                    return _this2.endResizer = _ref2;
                } });

            var eventItemTemplate = _react2.default.createElement(
                'div',
                { className: roundCls + ' event-item', key: eventItem.id,
                    style: { height: config.eventItemHeight, backgroundColor: bgColor } },
                _react2.default.createElement(
                    'span',
                    { style: { marginLeft: '10px', lineHeight: config.eventItemHeight + 'px' } },
                    eventTitle
                )
            );
            if (eventItemTemplateResolver != undefined) eventItemTemplate = eventItemTemplateResolver(schedulerData, eventItem, bgColor, isStart, isEnd, 'event-item', config.eventItemHeight, undefined);

            var a = _react2.default.createElement(
                'a',
                { className: 'timeline-event', style: { left: left, width: width, top: top }, onClick: function onClick() {
                        if (!!eventItemClick) eventItemClick(schedulerData, eventItem);
                    } },
                eventItemTemplate,
                startResizeDiv,
                endResizeDiv
            );

            return isDragging ? null : schedulerData._isResizing() || config.eventItemPopoverEnabled == false || eventItem.showPopover == false ? _react2.default.createElement(
                'div',
                null,
                connectDragPreview(connectDragSource(a))
            ) : _react2.default.createElement(
                _popover2.default,
                { placement: 'bottomLeft', content: content, trigger: 'hover' },
                connectDragPreview(connectDragSource(a))
            );
        }
    }]);

    return EventItem;
}(_react.Component), _class.propTypes = {
    schedulerData: _propTypes.PropTypes.object.isRequired,
    eventItem: _propTypes.PropTypes.object.isRequired,
    isStart: _propTypes.PropTypes.bool.isRequired,
    isEnd: _propTypes.PropTypes.bool.isRequired,
    left: _propTypes.PropTypes.number.isRequired,
    width: _propTypes.PropTypes.number.isRequired,
    top: _propTypes.PropTypes.number.isRequired,
    isInPopover: _propTypes.PropTypes.bool.isRequired,
    leftIndex: _propTypes.PropTypes.number.isRequired,
    rightIndex: _propTypes.PropTypes.number.isRequired,
    isDragging: _propTypes.PropTypes.bool.isRequired,
    connectDragSource: _propTypes.PropTypes.func.isRequired,
    connectDragPreview: _propTypes.PropTypes.func.isRequired,
    updateEventStart: _propTypes.PropTypes.func,
    updateEventEnd: _propTypes.PropTypes.func,
    moveEvent: _propTypes.PropTypes.func,
    subtitleGetter: _propTypes.PropTypes.func,
    eventItemClick: _propTypes.PropTypes.func,
    viewEventClick: _propTypes.PropTypes.func,
    viewEventText: _propTypes.PropTypes.string,
    viewEvent2Click: _propTypes.PropTypes.func,
    viewEvent2Text: _propTypes.PropTypes.string,
    conflictOccurred: _propTypes.PropTypes.func,
    eventItemTemplateResolver: _propTypes.PropTypes.func
}, _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.initStartDrag = function (ev) {
        ev.stopPropagation();
        if (ev.buttons !== undefined && ev.buttons !== 1) return;

        var schedulerData = _this3.props.schedulerData;

        schedulerData._startResizing();
        _this3.setState({
            startX: ev.clientX
        });

        document.documentElement.addEventListener('mousemove', _this3.doStartDrag, false);
        document.documentElement.addEventListener('mouseup', _this3.stopStartDrag, false);
        document.onselectstart = function () {
            return false;
        };
        document.ondragstart = function () {
            return false;
        };
    };

    this.doStartDrag = function (ev) {
        ev.stopPropagation();

        var _props2 = _this3.props,
            left = _props2.left,
            width = _props2.width,
            leftIndex = _props2.leftIndex,
            rightIndex = _props2.rightIndex,
            schedulerData = _props2.schedulerData;

        var cellWidth = schedulerData.getContentCellWidth();
        var offset = leftIndex > 0 ? 5 : 6;
        var minWidth = cellWidth - offset;
        var maxWidth = rightIndex * cellWidth - offset;
        var startX = _this3.state.startX;

        var newLeft = left + ev.clientX - startX;
        var newWidth = width + startX - ev.clientX;
        if (newWidth < minWidth) {
            newWidth = minWidth;
            newLeft = (rightIndex - 1) * cellWidth + (rightIndex - 1 > 0 ? 2 : 3);
        } else if (newWidth > maxWidth) {
            newWidth = maxWidth;
            newLeft = 3;
        }

        _this3.setState({ left: newLeft, width: newWidth });
    };

    this.stopStartDrag = function (ev) {
        ev.stopPropagation();
        document.documentElement.removeEventListener('mousemove', _this3.doStartDrag, false);
        document.documentElement.removeEventListener('mouseup', _this3.stopStartDrag, false);
        document.onselectstart = null;
        document.ondragstart = null;

        var _props3 = _this3.props,
            width = _props3.width,
            leftIndex = _props3.leftIndex,
            rightIndex = _props3.rightIndex,
            schedulerData = _props3.schedulerData,
            eventItem = _props3.eventItem,
            updateEventStart = _props3.updateEventStart;

        schedulerData._stopResizing();
        var cellUnit = schedulerData.cellUnit,
            events = schedulerData.events,
            config = schedulerData.config,
            localeMoment = schedulerData.localeMoment;

        var cellWidth = schedulerData.getContentCellWidth();
        var offset = leftIndex > 0 ? 5 : 6;
        var minWidth = cellWidth - offset;
        var maxWidth = rightIndex * cellWidth - offset;
        var startX = _this3.state.startX;

        var newWidth = width + startX - ev.clientX;
        var deltaX = ev.clientX - startX;
        var sign = deltaX < 0 ? -1 : deltaX === 0 ? 0 : 1;
        var count = (sign > 0 ? Math.floor(Math.abs(deltaX) / cellWidth) : Math.ceil(Math.abs(deltaX) / cellWidth)) * sign;
        if (newWidth < minWidth) count = rightIndex - leftIndex - 1;else if (newWidth > maxWidth) count = -leftIndex;
        var newStart = localeMoment(eventItem.start).add(cellUnit === _index.CellUnits.Hour ? count * config.minuteStep : count, cellUnit === _index.CellUnits.Hour ? 'minutes' : 'days').format(_index.DATETIME_FORMAT);
        if (count !== 0 && cellUnit !== _index.CellUnits.Hour && config.displayWeekend === false) {
            if (count > 0) {
                var tempCount = 0,
                    i = 0;
                while (true) {
                    i++;
                    var tempStart = localeMoment(eventItem.start).add(i, 'days');
                    var dayOfWeek = tempStart.weekday();
                    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
                        tempCount++;
                        if (tempCount === count) {
                            newStart = tempStart.format(_index.DATETIME_FORMAT);
                            break;
                        }
                    }
                }
            } else {
                var _tempCount = 0,
                    _i = 0;
                while (true) {
                    _i--;
                    var _tempStart = localeMoment(eventItem.start).add(_i, 'days');
                    var _dayOfWeek = _tempStart.weekday();
                    if (_dayOfWeek !== 0 && _dayOfWeek !== 6) {
                        _tempCount--;
                        if (_tempCount === count) {
                            newStart = _tempStart.format(_index.DATETIME_FORMAT);
                            break;
                        }
                    }
                }
            }
        }

        var hasConflict = false;
        var slotId = schedulerData._getEventSlotId(eventItem);
        var slotName = undefined;
        var slot = schedulerData.getSlotById(slotId);
        if (!!slot) slotName = slot.name;
        if (config.checkConflict) {
            var start = localeMoment(newStart),
                end = localeMoment(eventItem.end);

            events.forEach(function (e) {
                if (schedulerData._getEventSlotId(e) === slotId && e.id !== eventItem.id) {
                    var eStart = localeMoment(e.start),
                        eEnd = localeMoment(e.end);
                    if (start >= eStart && start < eEnd || end > eStart && end <= eEnd || eStart >= start && eStart < end || eEnd > start && eEnd <= end) hasConflict = true;
                }
            });
        }

        if (hasConflict) {
            var _props4 = _this3.props,
                conflictOccurred = _props4.conflictOccurred,
                left = _props4.left,
                top = _props4.top,
                _width = _props4.width;

            _this3.setState({
                left: left,
                top: top,
                width: _width
            });

            if (conflictOccurred != undefined) {
                conflictOccurred(schedulerData, 'StartResize', eventItem, _DnDTypes.DnDTypes.EVENT, slotId, slotName, newStart, eventItem.end);
            } else {
                console.log('Conflict occurred, set conflictOccurred func in Scheduler to handle it');
            }
            _this3.subscribeResizeEvent(_this3.props);
        } else {
            if (updateEventStart != undefined) updateEventStart(schedulerData, eventItem, newStart);
        }
    };

    this.initEndDrag = function (ev) {
        ev.stopPropagation();
        if (ev.buttons !== undefined && ev.buttons !== 1) return;

        var schedulerData = _this3.props.schedulerData;

        schedulerData._startResizing();
        _this3.setState({
            endX: ev.clientX
        });

        document.documentElement.addEventListener('mousemove', _this3.doEndDrag, false);
        document.documentElement.addEventListener('mouseup', _this3.stopEndDrag, false);
        document.onselectstart = function () {
            return false;
        };
        document.ondragstart = function () {
            return false;
        };
    };

    this.doEndDrag = function (ev) {
        ev.stopPropagation();
        var _props5 = _this3.props,
            width = _props5.width,
            leftIndex = _props5.leftIndex,
            schedulerData = _props5.schedulerData;
        var headers = schedulerData.headers;

        var cellWidth = schedulerData.getContentCellWidth();
        var offset = leftIndex > 0 ? 5 : 6;
        var minWidth = cellWidth - offset;
        var maxWidth = (headers.length - leftIndex) * cellWidth - offset;
        var endX = _this3.state.endX;


        var newWidth = width + ev.clientX - endX;
        if (newWidth < minWidth) newWidth = minWidth;else if (newWidth > maxWidth) newWidth = maxWidth;

        _this3.setState({ width: newWidth });
    };

    this.stopEndDrag = function (ev) {
        ev.stopPropagation();
        document.documentElement.removeEventListener('mousemove', _this3.doEndDrag, false);
        document.documentElement.removeEventListener('mouseup', _this3.stopEndDrag, false);
        document.onselectstart = null;
        document.ondragstart = null;

        var _props6 = _this3.props,
            width = _props6.width,
            leftIndex = _props6.leftIndex,
            rightIndex = _props6.rightIndex,
            schedulerData = _props6.schedulerData,
            eventItem = _props6.eventItem,
            updateEventEnd = _props6.updateEventEnd;

        schedulerData._stopResizing();
        var headers = schedulerData.headers,
            cellUnit = schedulerData.cellUnit,
            events = schedulerData.events,
            config = schedulerData.config,
            localeMoment = schedulerData.localeMoment;

        var cellWidth = schedulerData.getContentCellWidth();
        var offset = leftIndex > 0 ? 5 : 6;
        var minWidth = cellWidth - offset;
        var maxWidth = (headers.length - leftIndex) * cellWidth - offset;
        var endX = _this3.state.endX;


        var newWidth = width + ev.clientX - endX;
        var deltaX = newWidth - width;
        var sign = deltaX < 0 ? -1 : deltaX === 0 ? 0 : 1;
        var count = (sign < 0 ? Math.floor(Math.abs(deltaX) / cellWidth) : Math.ceil(Math.abs(deltaX) / cellWidth)) * sign;
        if (newWidth < minWidth) count = leftIndex - rightIndex + 1;else if (newWidth > maxWidth) count = headers.length - rightIndex;
        var newEnd = localeMoment(eventItem.end).add(cellUnit === _index.CellUnits.Hour ? count * config.minuteStep : count, cellUnit === _index.CellUnits.Hour ? 'minutes' : 'days').format(_index.DATETIME_FORMAT);
        if (count !== 0 && cellUnit !== _index.CellUnits.Hour && config.displayWeekend === false) {
            if (count > 0) {
                var tempCount = 0,
                    i = 0;
                while (true) {
                    i++;
                    var tempEnd = localeMoment(eventItem.end).add(i, 'days');
                    var dayOfWeek = tempEnd.weekday();
                    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
                        tempCount++;
                        if (tempCount === count) {
                            newEnd = tempEnd.format(_index.DATETIME_FORMAT);
                            break;
                        }
                    }
                }
            } else {
                var _tempCount2 = 0,
                    _i2 = 0;
                while (true) {
                    _i2--;
                    var _tempEnd = localeMoment(eventItem.end).add(_i2, 'days');
                    var _dayOfWeek2 = _tempEnd.weekday();
                    if (_dayOfWeek2 !== 0 && _dayOfWeek2 !== 6) {
                        _tempCount2--;
                        if (_tempCount2 === count) {
                            newEnd = _tempEnd.format(_index.DATETIME_FORMAT);
                            break;
                        }
                    }
                }
            }
        }

        var hasConflict = false;
        var slotId = schedulerData._getEventSlotId(eventItem);
        var slotName = undefined;
        var slot = schedulerData.getSlotById(slotId);
        if (!!slot) slotName = slot.name;
        if (config.checkConflict) {
            var start = localeMoment(eventItem.start),
                end = localeMoment(newEnd);

            events.forEach(function (e) {
                if (schedulerData._getEventSlotId(e) === slotId && e.id !== eventItem.id) {
                    var eStart = localeMoment(e.start),
                        eEnd = localeMoment(e.end);
                    if (start >= eStart && start < eEnd || end > eStart && end <= eEnd || eStart >= start && eStart < end || eEnd > start && eEnd <= end) hasConflict = true;
                }
            });
        }

        if (hasConflict) {
            var _props7 = _this3.props,
                conflictOccurred = _props7.conflictOccurred,
                left = _props7.left,
                top = _props7.top,
                _width2 = _props7.width;

            _this3.setState({
                left: left,
                top: top,
                width: _width2
            });

            if (conflictOccurred != undefined) {
                conflictOccurred(schedulerData, 'EndResize', eventItem, _DnDTypes.DnDTypes.EVENT, slotId, slotName, eventItem.start, newEnd);
            } else {
                console.log('Conflict occurred, set conflictOccurred func in Scheduler to handle it');
            }
            _this3.subscribeResizeEvent(_this3.props);
        } else {
            if (updateEventEnd != undefined) updateEventEnd(schedulerData, eventItem, newEnd);
        }
    };

    this.startResizable = function (props) {
        var eventItem = props.eventItem,
            isInPopover = props.isInPopover,
            schedulerData = props.schedulerData;
        var config = schedulerData.config;

        return config.startResizable === true && isInPopover === false && (eventItem.resizable == undefined || eventItem.resizable !== false) && (eventItem.startResizable == undefined || eventItem.startResizable !== false);
    };

    this.endResizable = function (props) {
        var eventItem = props.eventItem,
            isInPopover = props.isInPopover,
            schedulerData = props.schedulerData;
        var config = schedulerData.config;

        return config.endResizable === true && isInPopover === false && (eventItem.resizable == undefined || eventItem.resizable !== false) && (eventItem.endResizable == undefined || eventItem.endResizable !== false);
    };

    this.subscribeResizeEvent = function (props) {
        if (_this3.startResizer != undefined) {
            _this3.startResizer.removeEventListener('mousedown', _this3.initStartDrag, false);
            if (_this3.startResizable(props)) _this3.startResizer.addEventListener('mousedown', _this3.initStartDrag, false);
        }
        if (_this3.endResizer != undefined) {
            _this3.endResizer.removeEventListener('mousedown', _this3.initEndDrag, false);
            if (_this3.endResizable(props)) _this3.endResizer.addEventListener('mousedown', _this3.initEndDrag, false);
        }
    };
}, _temp);
exports.default = EventItem;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _col2 = require('antd/lib/col');

var _col3 = _interopRequireDefault(_col2);

var _row = require('antd/lib/row');

var _row2 = _interopRequireDefault(_row);

require('antd/lib/grid/style/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventItemPopover = (_temp = _class = function (_Component) {
    _inherits(EventItemPopover, _Component);

    function EventItemPopover(props) {
        _classCallCheck(this, EventItemPopover);

        return _possibleConstructorReturn(this, (EventItemPopover.__proto__ || Object.getPrototypeOf(EventItemPopover)).call(this, props));
    }

    _createClass(EventItemPopover, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                schedulerData = _props.schedulerData,
                eventItem = _props.eventItem,
                title = _props.title,
                startTime = _props.startTime,
                endTime = _props.endTime,
                statusColor = _props.statusColor,
                subtitleGetter = _props.subtitleGetter,
                viewEventClick = _props.viewEventClick,
                viewEventText = _props.viewEventText,
                viewEvent2Click = _props.viewEvent2Click,
                viewEvent2Text = _props.viewEvent2Text,
                eventItemPopoverTemplateResolver = _props.eventItemPopoverTemplateResolver;
            var localeMoment = schedulerData.localeMoment,
                config = schedulerData.config;

            var start = localeMoment(startTime),
                end = localeMoment(endTime);

            if (eventItemPopoverTemplateResolver != undefined) {
                return eventItemPopoverTemplateResolver(schedulerData, eventItem, title, start, end, statusColor);
            } else {
                var subtitleRow = _react2.default.createElement('div', null);
                if (subtitleGetter !== undefined) {
                    var subtitle = subtitleGetter(schedulerData, eventItem);
                    if (subtitle != undefined) {
                        subtitleRow = _react2.default.createElement(
                            _row2.default,
                            { type: 'flex', align: 'middle' },
                            _react2.default.createElement(
                                _col3.default,
                                { span: 2 },
                                _react2.default.createElement('div', null)
                            ),
                            _react2.default.createElement(
                                _col3.default,
                                { span: 22, className: 'overflow-text' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'header2-text', title: subtitle },
                                    subtitle
                                )
                            )
                        );
                    }
                }

                var opsRow = _react2.default.createElement('div', null);
                if (viewEventText !== undefined && viewEventClick !== undefined && (eventItem.clickable1 == undefined || eventItem.clickable1)) {
                    var col = _react2.default.createElement(
                        _col3.default,
                        { span: 22 },
                        _react2.default.createElement(
                            'span',
                            { className: 'header2-text', style: { color: '#108EE9', cursor: 'pointer' }, onClick: function onClick() {
                                    viewEventClick(schedulerData, eventItem);
                                } },
                            viewEventText
                        )
                    );
                    if (viewEvent2Text !== undefined && viewEvent2Click !== undefined && (eventItem.clickable2 == undefined || eventItem.clickable2)) {
                        col = _react2.default.createElement(
                            _col3.default,
                            { span: 22 },
                            _react2.default.createElement(
                                'span',
                                { className: 'header2-text', style: { color: '#108EE9', cursor: 'pointer' }, onClick: function onClick() {
                                        viewEventClick(schedulerData, eventItem);
                                    } },
                                viewEventText
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'header2-text', style: { color: '#108EE9', cursor: 'pointer', marginLeft: '16px' }, onClick: function onClick() {
                                        viewEvent2Click(schedulerData, eventItem);
                                    } },
                                viewEvent2Text
                            )
                        );
                    };
                    opsRow = _react2.default.createElement(
                        _row2.default,
                        { type: 'flex', align: 'middle' },
                        _react2.default.createElement(
                            _col3.default,
                            { span: 2 },
                            _react2.default.createElement('div', null)
                        ),
                        col
                    );
                } else if (viewEvent2Text !== undefined && viewEvent2Click !== undefined && (eventItem.clickable2 == undefined || eventItem.clickable2)) {
                    var _col = _react2.default.createElement(
                        _col3.default,
                        { span: 22 },
                        _react2.default.createElement(
                            'span',
                            { className: 'header2-text', style: { color: '#108EE9', cursor: 'pointer' }, onClick: function onClick() {
                                    viewEvent2Click(schedulerData, eventItem);
                                } },
                            viewEvent2Text
                        )
                    );
                    opsRow = _react2.default.createElement(
                        _row2.default,
                        { type: 'flex', align: 'middle' },
                        _react2.default.createElement(
                            _col3.default,
                            { span: 2 },
                            _react2.default.createElement('div', null)
                        ),
                        _col
                    );
                }

                var dateFormat = config.eventItemPopoverDateFormat;
                return _react2.default.createElement(
                    'div',
                    { style: { width: '300px' } },
                    _react2.default.createElement(
                        _row2.default,
                        { type: 'flex', align: 'middle' },
                        _react2.default.createElement(
                            _col3.default,
                            { span: 2 },
                            _react2.default.createElement('div', { className: 'status-dot', style: { backgroundColor: statusColor } })
                        ),
                        _react2.default.createElement(
                            _col3.default,
                            { span: 22, className: 'overflow-text' },
                            _react2.default.createElement(
                                'span',
                                { className: 'header2-text', title: title },
                                title
                            )
                        )
                    ),
                    subtitleRow,
                    _react2.default.createElement(
                        _row2.default,
                        { type: 'flex', align: 'middle' },
                        _react2.default.createElement(
                            _col3.default,
                            { span: 2 },
                            _react2.default.createElement('div', null)
                        ),
                        _react2.default.createElement(
                            _col3.default,
                            { span: 22 },
                            _react2.default.createElement(
                                'span',
                                { className: 'header1-text' },
                                start.format('HH:mm')
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'help-text', style: { marginLeft: '8px' } },
                                start.format(dateFormat)
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'header2-text', style: { marginLeft: '8px' } },
                                '-'
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'header1-text', style: { marginLeft: '8px' } },
                                end.format('HH:mm')
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'help-text', style: { marginLeft: '8px' } },
                                end.format(dateFormat)
                            )
                        )
                    ),
                    opsRow
                );
            }
        }
    }]);

    return EventItemPopover;
}(_react.Component), _class.propTypes = {
    schedulerData: _propTypes.PropTypes.object.isRequired,
    eventItem: _propTypes.PropTypes.object.isRequired,
    title: _propTypes.PropTypes.string.isRequired,
    startTime: _propTypes.PropTypes.string.isRequired,
    endTime: _propTypes.PropTypes.string.isRequired,
    statusColor: _propTypes.PropTypes.string.isRequired,
    subtitleGetter: _propTypes.PropTypes.func,
    viewEventClick: _propTypes.PropTypes.func,
    viewEventText: _propTypes.PropTypes.string,
    viewEvent2Click: _propTypes.PropTypes.func,
    viewEvent2Text: _propTypes.PropTypes.string,
    eventItemPopoverTemplateResolver: _propTypes.PropTypes.func
}, _temp);
exports.default = EventItemPopover;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderView = (_temp = _class = function (_Component) {
    _inherits(HeaderView, _Component);

    function HeaderView(props) {
        _classCallCheck(this, HeaderView);

        return _possibleConstructorReturn(this, (HeaderView.__proto__ || Object.getPrototypeOf(HeaderView)).call(this, props));
    }

    _createClass(HeaderView, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                schedulerData = _props.schedulerData,
                nonAgendaCellHeaderTemplateResolver = _props.nonAgendaCellHeaderTemplateResolver;
            var headers = schedulerData.headers,
                cellUnit = schedulerData.cellUnit,
                config = schedulerData.config,
                localeMoment = schedulerData.localeMoment;

            var headerHeight = schedulerData.getTableHeaderHeight();
            var cellWidth = schedulerData.getContentCellWidth();
            var minuteStepsInHour = schedulerData.getMinuteStepsInHour();

            var headerList = [];
            var style = {};
            if (cellUnit === _index.CellUnits.Hour) {
                headers.forEach(function (item, index) {
                    if (index % minuteStepsInHour === 0) {
                        var datetime = localeMoment(item.time);
                        var isCurrentTime = datetime.isSame(new Date(), 'hour');

                        style = !!item.nonWorkingTime ? { width: cellWidth * minuteStepsInHour, color: config.nonWorkingTimeHeadColor, backgroundColor: config.nonWorkingTimeHeadBgColor } : { width: cellWidth * minuteStepsInHour };

                        if (index === headers.length - minuteStepsInHour) style = !!item.nonWorkingTime ? { color: config.nonWorkingTimeHeadColor, backgroundColor: config.nonWorkingTimeHeadBgColor } : {};

                        var pFormattedList = config.nonAgendaDayCellHeaderFormat.split('|').map(function (item) {
                            return datetime.format(item);
                        });
                        var element = void 0;

                        if (typeof nonAgendaCellHeaderTemplateResolver === 'function') {
                            element = nonAgendaCellHeaderTemplateResolver(schedulerData, item, pFormattedList, style);
                        } else {
                            var pList = pFormattedList.map(function (item, index) {
                                return _react2.default.createElement(
                                    'div',
                                    { key: index },
                                    item
                                );
                            });

                            element = _react2.default.createElement(
                                'th',
                                { key: item.time, className: 'header3-text', style: style },
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    pList
                                )
                            );
                        }

                        headerList.push(element);
                    }
                });
            } else {
                headerList = headers.map(function (item, index) {
                    var datetime = localeMoment(item.time);
                    style = !!item.nonWorkingTime ? { width: cellWidth, color: config.nonWorkingTimeHeadColor, backgroundColor: config.nonWorkingTimeHeadBgColor } : { width: cellWidth };
                    if (index === headers.length - 1) style = !!item.nonWorkingTime ? { color: config.nonWorkingTimeHeadColor, backgroundColor: config.nonWorkingTimeHeadBgColor } : {};

                    var pFormattedList = config.nonAgendaOtherCellHeaderFormat.split('|').map(function (item) {
                        return datetime.format(item);
                    });

                    if (typeof nonAgendaCellHeaderTemplateResolver === 'function') {
                        return nonAgendaCellHeaderTemplateResolver(schedulerData, item, pFormattedList, style);
                    }

                    var pList = pFormattedList.map(function (item, index) {
                        return _react2.default.createElement(
                            'div',
                            { key: index },
                            item
                        );
                    });

                    return _react2.default.createElement(
                        'th',
                        { key: item.time, className: 'header3-text', style: style },
                        _react2.default.createElement(
                            'div',
                            null,
                            pList
                        )
                    );
                });
            }

            return _react2.default.createElement(
                'thead',
                null,
                _react2.default.createElement(
                    'tr',
                    { style: { height: headerHeight } },
                    headerList
                )
            );
        }
    }]);

    return HeaderView;
}(_react.Component), _class.propTypes = {
    schedulerData: _propTypes.PropTypes.object.isRequired,
    nonAgendaCellHeaderTemplateResolver: _propTypes.PropTypes.func
}, _temp);
exports.default = HeaderView;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _AddMore = require('./AddMore');

var _AddMore2 = _interopRequireDefault(_AddMore);

var _Summary = require('./Summary');

var _Summary2 = _interopRequireDefault(_Summary);

var _SelectedArea = require('./SelectedArea');

var _SelectedArea2 = _interopRequireDefault(_SelectedArea);

var _index = require('./index');

var _Util = require('./Util');

var _DnDTypes = require('./DnDTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResourceEvents = (_temp = _class = function (_Component) {
    _inherits(ResourceEvents, _Component);

    function ResourceEvents(props) {
        _classCallCheck(this, ResourceEvents);

        var _this = _possibleConstructorReturn(this, (ResourceEvents.__proto__ || Object.getPrototypeOf(ResourceEvents)).call(this, props));

        _this.initDrag = function (ev) {
            ev.stopPropagation();
            if (ev.buttons !== undefined && ev.buttons !== 1) return;
            if ((ev.srcElement || ev.target) !== _this.eventContainer) return;

            var schedulerData = _this.props.schedulerData;

            var cellWidth = schedulerData.getContentCellWidth();
            var pos = (0, _Util.getPos)(_this.eventContainer);
            var startX = ev.clientX - pos.x;
            var leftIndex = Math.floor(startX / cellWidth);
            var left = leftIndex * cellWidth;
            var rightIndex = Math.ceil(startX / cellWidth);
            var width = (rightIndex - leftIndex) * cellWidth;

            _this.setState({
                startX: startX,
                left: left,
                leftIndex: leftIndex,
                width: width,
                rightIndex: rightIndex,
                isSelecting: true
            });

            document.documentElement.addEventListener('mousemove', _this.doDrag, false);
            document.documentElement.addEventListener('mouseup', _this.stopDrag, false);
            document.onselectstart = function () {
                return false;
            };
            document.ondragstart = function () {
                return false;
            };
        };

        _this.doDrag = function (ev) {
            ev.stopPropagation();

            var startX = _this.state.startX;
            var schedulerData = _this.props.schedulerData;
            var headers = schedulerData.headers;

            var cellWidth = schedulerData.getContentCellWidth();
            var pos = (0, _Util.getPos)(_this.eventContainer);
            var currentX = ev.clientX - pos.x;
            var leftIndex = Math.floor(Math.min(startX, currentX) / cellWidth);
            leftIndex = leftIndex < 0 ? 0 : leftIndex;
            var left = leftIndex * cellWidth;
            var rightIndex = Math.ceil(Math.max(startX, currentX) / cellWidth);
            rightIndex = rightIndex > headers.length ? headers.length : rightIndex;
            var width = (rightIndex - leftIndex) * cellWidth;

            _this.setState({
                leftIndex: leftIndex,
                left: left,
                rightIndex: rightIndex,
                width: width,
                isSelecting: true
            });
        };

        _this.stopDrag = function (ev) {
            ev.stopPropagation();
            var _this$props = _this.props,
                schedulerData = _this$props.schedulerData,
                newEvent = _this$props.newEvent,
                resourceEvents = _this$props.resourceEvents;
            var headers = schedulerData.headers,
                events = schedulerData.events,
                config = schedulerData.config,
                cellUnit = schedulerData.cellUnit,
                localeMoment = schedulerData.localeMoment;
            var _this$state = _this.state,
                leftIndex = _this$state.leftIndex,
                rightIndex = _this$state.rightIndex;

            document.documentElement.removeEventListener('mousemove', _this.doDrag, false);
            document.documentElement.removeEventListener('mouseup', _this.stopDrag, false);
            document.onselectstart = null;
            document.ondragstart = null;

            var startTime = headers[leftIndex].time;
            var endTime = resourceEvents.headerItems[rightIndex - 1].end;
            if (cellUnit !== _index.CellUnits.Hour) endTime = localeMoment(resourceEvents.headerItems[rightIndex - 1].start).hour(23).minute(59).second(59).format(_index.DATETIME_FORMAT);
            var slotId = resourceEvents.slotId;
            var slotName = resourceEvents.slotName;

            _this.setState({
                startX: 0,
                leftIndex: 0,
                left: 0,
                rightIndex: 0,
                width: 0,
                isSelecting: false
            });

            var hasConflict = false;
            if (config.checkConflict) {
                var start = localeMoment(startTime),
                    end = localeMoment(endTime);

                events.forEach(function (e) {
                    if (schedulerData._getEventSlotId(e) === slotId) {
                        var eStart = localeMoment(e.start),
                            eEnd = localeMoment(e.end);
                        if (start >= eStart && start < eEnd || end > eStart && end <= eEnd || eStart >= start && eStart < end || eEnd > start && eEnd <= end) hasConflict = true;
                    }
                });
            }

            if (hasConflict) {
                var conflictOccurred = _this.props.conflictOccurred;

                if (conflictOccurred != undefined) {
                    conflictOccurred(schedulerData, 'New', {
                        id: undefined,
                        start: startTime,
                        end: endTime,
                        slotId: slotId,
                        slotName: slotName,
                        title: undefined
                    }, _DnDTypes.DnDTypes.EVENT, slotId, slotName, startTime, endTime);
                } else {
                    console.log('Conflict occurred, set conflictOccurred func in Scheduler to handle it');
                }
            } else {
                if (newEvent != undefined) newEvent(schedulerData, slotId, slotName, startTime, endTime);
            }
        };

        _this.onAddMoreClick = function (headerItem) {
            var _this$props2 = _this.props,
                onSetAddMoreState = _this$props2.onSetAddMoreState,
                resourceEvents = _this$props2.resourceEvents,
                schedulerData = _this$props2.schedulerData;

            if (!!onSetAddMoreState) {
                var config = schedulerData.config;

                var cellWidth = schedulerData.getContentCellWidth();
                var index = resourceEvents.headerItems.indexOf(headerItem);
                if (index !== -1) {
                    var left = index * (cellWidth - 1);
                    var pos = (0, _Util.getPos)(_this.eventContainer);
                    left = left + pos.x;
                    var top = pos.y;
                    var height = (headerItem.count + 1) * config.eventItemLineHeight + 20;

                    onSetAddMoreState({
                        headerItem: headerItem,
                        left: left,
                        top: top,
                        height: height
                    });
                }
            }
        };

        _this.eventContainerRef = function (element) {
            _this.eventContainer = element;
        };

        _this.state = {
            isSelecting: false,
            left: 0,
            width: 0
        };
        return _this;
    }

    _createClass(ResourceEvents, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var schedulerData = this.props.schedulerData;
            var config = schedulerData.config;

            if (config.creatable === true) {
                this.eventContainer.addEventListener('mousedown', this.initDrag, false);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(np) {
            this.eventContainer.removeEventListener('mousedown', this.initDrag, false);
            if (np.schedulerData.config.creatable) this.eventContainer.addEventListener('mousedown', this.initDrag, false);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                resourceEvents = _props.resourceEvents,
                schedulerData = _props.schedulerData,
                connectDropTarget = _props.connectDropTarget,
                dndSource = _props.dndSource;
            var cellUnit = schedulerData.cellUnit,
                startDate = schedulerData.startDate,
                endDate = schedulerData.endDate,
                config = schedulerData.config,
                localeMoment = schedulerData.localeMoment;
            var _state = this.state,
                isSelecting = _state.isSelecting,
                left = _state.left,
                width = _state.width;

            var cellWidth = schedulerData.getContentCellWidth();
            var cellMaxEvents = schedulerData.getCellMaxEvents();
            var rowWidth = schedulerData.getContentTableWidth();
            var DnDEventItem = dndSource.getDragSource();

            var selectedArea = isSelecting ? _react2.default.createElement(_SelectedArea2.default, _extends({}, this.props, { left: left, width: width })) : _react2.default.createElement('div', null);

            var eventList = [];
            resourceEvents.headerItems.forEach(function (headerItem, index) {

                if (headerItem.count > 0 || headerItem.summary != undefined) {

                    var isTop = config.summaryPos === _index.SummaryPos.TopRight || config.summaryPos === _index.SummaryPos.Top || config.summaryPos === _index.SummaryPos.TopLeft;
                    var marginTop = resourceEvents.hasSummary && isTop ? 1 + config.eventItemLineHeight : 1;
                    var renderEventsMaxIndex = headerItem.addMore === 0 ? cellMaxEvents : headerItem.addMoreIndex;

                    headerItem.events.forEach(function (evt, idx) {
                        if (idx < renderEventsMaxIndex && evt !== undefined && evt.render) {
                            var durationStart = localeMoment(startDate);
                            var durationEnd = localeMoment(endDate).add(1, 'days');
                            if (cellUnit === _index.CellUnits.Hour) {
                                durationStart = localeMoment(startDate).add(config.dayStartFrom, 'hours');
                                durationEnd = localeMoment(endDate).add(config.dayStopTo + 1, 'hours');
                            }
                            var eventStart = localeMoment(evt.eventItem.start);
                            var eventEnd = localeMoment(evt.eventItem.end);
                            var isStart = eventStart >= durationStart;
                            var isEnd = eventEnd <= durationEnd;
                            var _left = index * cellWidth + (index > 0 ? 2 : 3);
                            var _width = evt.span * cellWidth - (index > 0 ? 5 : 6) > 0 ? evt.span * cellWidth - (index > 0 ? 5 : 6) : 0;
                            var top = marginTop + idx * config.eventItemLineHeight;
                            var eventItem = _react2.default.createElement(DnDEventItem, _extends({}, _this2.props, {
                                key: evt.eventItem.id,
                                eventItem: evt.eventItem,
                                isStart: isStart,
                                isEnd: isEnd,
                                isInPopover: false,
                                left: _left,
                                width: _width,
                                top: top,
                                leftIndex: index,
                                rightIndex: index + evt.span
                            }));
                            eventList.push(eventItem);
                        }
                    });

                    if (headerItem.addMore > 0) {
                        var _left2 = index * cellWidth + (index > 0 ? 2 : 3);
                        var _width2 = cellWidth - (index > 0 ? 5 : 6);
                        var top = marginTop + headerItem.addMoreIndex * config.eventItemLineHeight;
                        var addMoreItem = _react2.default.createElement(_AddMore2.default, _extends({}, _this2.props, {
                            key: headerItem.time,
                            headerItem: headerItem,
                            number: headerItem.addMore,
                            left: _left2,
                            width: _width2,
                            top: top,
                            clickAction: _this2.onAddMoreClick
                        }));
                        eventList.push(addMoreItem);
                    }

                    if (headerItem.summary != undefined) {
                        var _top = isTop ? 1 : resourceEvents.rowHeight - config.eventItemLineHeight + 1;
                        var _left3 = index * cellWidth + (index > 0 ? 2 : 3);
                        var _width3 = cellWidth - (index > 0 ? 5 : 6);
                        var key = resourceEvents.slotId + '_' + headerItem.time;
                        var summary = _react2.default.createElement(_Summary2.default, { key: key, schedulerData: schedulerData, summary: headerItem.summary, left: _left3, width: _width3, top: _top });
                        eventList.push(summary);
                    }
                }
            });

            return _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    { style: { width: rowWidth } },
                    connectDropTarget(_react2.default.createElement(
                        'div',
                        { ref: this.eventContainerRef, className: 'event-container', style: { height: resourceEvents.rowHeight } },
                        selectedArea,
                        eventList
                    ))
                )
            );
        }
    }]);

    return ResourceEvents;
}(_react.Component), _class.propTypes = {
    resourceEvents: _propTypes.PropTypes.object.isRequired,
    schedulerData: _propTypes.PropTypes.object.isRequired,
    dndSource: _propTypes.PropTypes.object.isRequired,
    onSetAddMoreState: _propTypes.PropTypes.func,
    updateEventStart: _propTypes.PropTypes.func,
    updateEventEnd: _propTypes.PropTypes.func,
    moveEvent: _propTypes.PropTypes.func,
    conflictOccurred: _propTypes.PropTypes.func,
    subtitleGetter: _propTypes.PropTypes.func,
    eventItemClick: _propTypes.PropTypes.func,
    viewEventClick: _propTypes.PropTypes.func,
    viewEventText: _propTypes.PropTypes.string,
    viewEvent2Click: _propTypes.PropTypes.func,
    viewEvent2Text: _propTypes.PropTypes.string,
    newEvent: _propTypes.PropTypes.func,
    eventItemTemplateResolver: _propTypes.PropTypes.func
}, _temp);
exports.default = ResourceEvents;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResourceView = (_temp = _class = function (_Component) {
    _inherits(ResourceView, _Component);

    function ResourceView(props) {
        _classCallCheck(this, ResourceView);

        return _possibleConstructorReturn(this, (ResourceView.__proto__ || Object.getPrototypeOf(ResourceView)).call(this, props));
    }

    _createClass(ResourceView, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                schedulerData = _props.schedulerData,
                contentScrollbarHeight = _props.contentScrollbarHeight,
                slotClickedFunc = _props.slotClickedFunc,
                slotItemTemplateResolver = _props.slotItemTemplateResolver;
            var renderData = schedulerData.renderData;


            var width = schedulerData.getResourceTableWidth() - 2;
            var paddingBottom = contentScrollbarHeight;
            var resourceList = renderData.map(function (item) {
                var a = slotClickedFunc != undefined ? _react2.default.createElement(
                    'a',
                    { onClick: function onClick() {
                            slotClickedFunc(schedulerData, item);
                        } },
                    _react2.default.createElement('span', { className: 'expander-space' }),
                    item.slotName
                ) : _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement('span', { className: 'expander-space' }),
                    _react2.default.createElement(
                        'span',
                        null,
                        item.slotName
                    )
                );
                var slotItem = _react2.default.createElement(
                    'div',
                    { title: item.slotName, className: 'overflow-text header2-text', style: { textAlign: "left" } },
                    a
                );
                if (!!slotItemTemplateResolver) {
                    var temp = slotItemTemplateResolver(schedulerData, item, slotClickedFunc, width, "overflow-text header2-text");
                    if (!!temp) slotItem = temp;
                }

                return _react2.default.createElement(
                    'tr',
                    { key: item.slotId },
                    _react2.default.createElement(
                        'td',
                        { 'data-resource-id': item.slotId, style: { height: item.rowHeight } },
                        slotItem
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { style: { paddingBottom: paddingBottom } },
                _react2.default.createElement(
                    'table',
                    { className: 'resource-table' },
                    _react2.default.createElement(
                        'tbody',
                        null,
                        resourceList
                    )
                )
            );
        }
    }]);

    return ResourceView;
}(_react.Component), _class.propTypes = {
    schedulerData: _propTypes.PropTypes.object.isRequired,
    contentScrollbarHeight: _propTypes.PropTypes.number.isRequired,
    slotClickedFunc: _propTypes.PropTypes.func,
    slotItemTemplateResolver: _propTypes.PropTypes.func
}, _temp);
exports.default = ResourceView;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _rrule = require('rrule');

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _behaviors = require('./behaviors');

var _behaviors2 = _interopRequireDefault(_behaviors);

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SchedulerData = function () {
    function SchedulerData() {
        var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format(_index.DATE_FORMAT);
        var viewType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _index.ViewTypes.Week;
        var showAgenda = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isEventPerspective = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var newConfig = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
        var newBehaviors = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;
        var localeMoment = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : undefined;

        _classCallCheck(this, SchedulerData);

        this.resources = [];
        this.events = [];
        this.eventGroups = [];
        this.eventGroupsAutoGenerated = true;
        this.viewType = viewType;
        this.cellUnit = viewType === _index.ViewTypes.Day ? _index.CellUnits.Hour : _index.CellUnits.Day;
        this.showAgenda = showAgenda;
        this.isEventPerspective = isEventPerspective;
        this.resizing = false;
        this.scrollToSpecialMoment = false;
        this.documentWidth = 0;

        this.localeMoment = _moment2.default;
        if (!!localeMoment) this.localeMoment = localeMoment;
        this.config = newConfig == undefined ? _config2.default : _extends({}, _config2.default, newConfig);
        this._validateMinuteStep(this.config.minuteStep);
        this.behaviors = newBehaviors == undefined ? _behaviors2.default : _extends({}, _behaviors2.default, newBehaviors);
        this._resolveDate(0, date);
        this._createHeaders();
        this._createRenderData();
    }

    _createClass(SchedulerData, [{
        key: 'setLocaleMoment',
        value: function setLocaleMoment(localeMoment) {
            if (!!localeMoment) {
                this.localeMoment = localeMoment;
                this._createHeaders();
                this._createRenderData();
            }
        }
    }, {
        key: 'setResources',
        value: function setResources(resources) {
            this._validateResource(resources);
            this.resources = Array.from(new Set(resources));
            this._createRenderData();
            this.setScrollToSpecialMoment(true);
        }
    }, {
        key: 'setEventGroupsAutoGenerated',
        value: function setEventGroupsAutoGenerated(autoGenerated) {
            this.eventGroupsAutoGenerated = autoGenerated;
        }

        //optional

    }, {
        key: 'setEventGroups',
        value: function setEventGroups(eventGroups) {
            this._validateEventGroups(eventGroups);
            this.eventGroups = Array.from(new Set(eventGroups));
            this.eventGroupsAutoGenerated = false;
            this._createRenderData();
            this.setScrollToSpecialMoment(true);
        }
    }, {
        key: 'setMinuteStep',
        value: function setMinuteStep(minuteStep) {
            if (this.config.minuteStep !== minuteStep) {
                this._validateMinuteStep(minuteStep);
                this.config.minuteStep = minuteStep;
                this._createHeaders();
                this._createRenderData();
            }
        }
    }, {
        key: 'setBesidesWidth',
        value: function setBesidesWidth(besidesWidth) {
            if (besidesWidth >= 0) {
                this.config.besidesWidth = besidesWidth;
            }
        }
    }, {
        key: 'getMinuteStepsInHour',
        value: function getMinuteStepsInHour() {
            return 60 / this.config.minuteStep;
        }
    }, {
        key: 'addResource',
        value: function addResource(resource) {
            var existedResources = this.resources.filter(function (x) {
                return x.id === resource.id;
            });
            if (existedResources.length === 0) {
                this.resources.push(resource);
                this._createRenderData();
            }
        }
    }, {
        key: 'addEventGroup',
        value: function addEventGroup(eventGroup) {
            var existedEventGroups = this.eventGroups.filter(function (x) {
                return x.id === eventGroup.id;
            });
            if (existedEventGroups.length === 0) {
                this.eventGroups.push(eventGroup);
                this._createRenderData();
            }
        }
    }, {
        key: 'removeEventGroupById',
        value: function removeEventGroupById(eventGroupId) {
            var index = -1;
            this.eventGroups.forEach(function (item, idx) {
                if (item.id === eventGroupId) index = idx;
            });
            if (index !== -1) this.eventGroups.splice(index, 1);
        }
    }, {
        key: 'containsEventGroupId',
        value: function containsEventGroupId(eventGroupId) {
            var index = -1;
            this.eventGroups.forEach(function (item, idx) {
                if (item.id === eventGroupId) index = idx;
            });
            return index !== -1;
        }
    }, {
        key: 'setEvents',
        value: function setEvents(events) {
            this._validateEvents(events);
            this.events = Array.from(events);
            if (this.eventGroupsAutoGenerated) this._generateEventGroups();
            if (this.config.recurringEventsEnabled) this._handleRecurringEvents();

            this._createRenderData();
        }
    }, {
        key: 'setScrollToSpecialMoment',
        value: function setScrollToSpecialMoment(scrollToSpecialMoment) {
            if (this.config.scrollToSpecialMomentEnabled) this.scrollToSpecialMoment = scrollToSpecialMoment;
        }
    }, {
        key: 'prev',
        value: function prev() {
            this._resolveDate(-1);
            this.events = [];
            this._createHeaders();
            this._createRenderData();
        }
    }, {
        key: 'next',
        value: function next() {
            this._resolveDate(1);
            this.events = [];
            this._createHeaders();
            this._createRenderData();
        }
    }, {
        key: 'setDate',
        value: function setDate() {
            var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format(_index.DATE_FORMAT);

            this._resolveDate(0, date);
            this.events = [];
            this._createHeaders();
            this._createRenderData();
        }
    }, {
        key: 'setViewType',
        value: function setViewType() {
            var viewType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _index.ViewTypes.Week;
            var showAgenda = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var isEventPerspective = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            this.showAgenda = showAgenda;
            this.isEventPerspective = isEventPerspective;
            this.cellUnit = _index.CellUnits.Day;

            if (this.viewType !== viewType) {
                var date = this.startDate;

                if (viewType === _index.ViewTypes.Custom || viewType === _index.ViewTypes.Custom1 || viewType === _index.ViewTypes.Custom2) {
                    this.viewType = viewType;
                    this._resolveDate(0, date);
                } else {
                    if (this.viewType < viewType) {
                        if (viewType === _index.ViewTypes.Week) {
                            this.startDate = this.localeMoment(date).startOf('week').format(_index.DATE_FORMAT);
                            this.endDate = this.localeMoment(this.startDate).endOf('week').format(_index.DATE_FORMAT);
                        } else if (viewType === _index.ViewTypes.Month) {
                            this.startDate = this.localeMoment(date).startOf('month').format(_index.DATE_FORMAT);
                            this.endDate = this.localeMoment(this.startDate).endOf('month').format(_index.DATE_FORMAT);
                        } else if (viewType === _index.ViewTypes.Quarter) {
                            this.startDate = this.localeMoment(date).startOf('quarter').format(_index.DATE_FORMAT);
                            this.endDate = this.localeMoment(this.startDate).endOf('quarter').format(_index.DATE_FORMAT);
                        } else if (viewType === _index.ViewTypes.Year) {
                            this.startDate = this.localeMoment(date).startOf('year').format(_index.DATE_FORMAT);
                            this.endDate = this.localeMoment(this.startDate).endOf('year').format(_index.DATE_FORMAT);
                        }
                    } else {
                        var start = this.localeMoment(this.startDate);
                        var end = this.localeMoment(this.endDate).add(1, 'days');

                        if (this.selectDate !== undefined) {
                            var selectDate = this.localeMoment(this.selectDate);
                            if (selectDate >= start && selectDate < end) {
                                date = this.selectDate;
                            }
                        }

                        var now = this.localeMoment();
                        if (now >= start && now < end) {
                            date = now.format(_index.DATE_FORMAT);
                        }

                        if (viewType === _index.ViewTypes.Day) {
                            this.startDate = date;
                            this.endDate = this.startDate;
                            this.cellUnit = _index.CellUnits.Hour;
                        } else if (viewType === _index.ViewTypes.Week) {
                            this.startDate = this.localeMoment(date).startOf('week').format(_index.DATE_FORMAT);
                            this.endDate = this.localeMoment(this.startDate).endOf('week').format(_index.DATE_FORMAT);
                        } else if (viewType === _index.ViewTypes.Month) {
                            this.startDate = this.localeMoment(date).startOf('month').format(_index.DATE_FORMAT);
                            this.endDate = this.localeMoment(this.startDate).endOf('month').format(_index.DATE_FORMAT);
                        } else if (viewType === _index.ViewTypes.Quarter) {
                            this.startDate = this.localeMoment(date).startOf('quarter').format(_index.DATE_FORMAT);
                            this.endDate = this.localeMoment(this.startDate).endOf('quarter').format(_index.DATE_FORMAT);
                        }
                    }

                    this.viewType = viewType;
                }

                this.events = [];
                this._createHeaders();
                this._createRenderData();
                this.setScrollToSpecialMoment(true);
            }
        }
    }, {
        key: 'setSchedulerMaxHeight',
        value: function setSchedulerMaxHeight(newSchedulerMaxHeight) {
            this.config.schedulerMaxHeight = newSchedulerMaxHeight;
        }
    }, {
        key: 'isSchedulerResponsive',
        value: function isSchedulerResponsive() {
            return !!this.config.schedulerWidth.endsWith && this.config.schedulerWidth.endsWith("%");
        }
    }, {
        key: 'isResourceViewResponsive',
        value: function isResourceViewResponsive() {
            var resourceTableWidth = this.getResourceTableConfigWidth();
            return !!resourceTableWidth.endsWith && resourceTableWidth.endsWith("%");
        }
    }, {
        key: 'isContentViewResponsive',
        value: function isContentViewResponsive() {
            var contentCellWidth = this.getContentCellConfigWidth();
            return !!contentCellWidth.endsWith && contentCellWidth.endsWith("%");
        }
    }, {
        key: 'getSchedulerWidth',
        value: function getSchedulerWidth() {
            var baseWidth = this.documentWidth - this.config.besidesWidth > 0 ? this.documentWidth - this.config.besidesWidth : 0;
            return this.isSchedulerResponsive() ? parseInt(baseWidth * Number(this.config.schedulerWidth.slice(0, -1)) / 100) : this.config.schedulerWidth;
        }
    }, {
        key: 'getResourceTableWidth',
        value: function getResourceTableWidth() {
            var resourceTableConfigWidth = this.getResourceTableConfigWidth();
            var schedulerWidth = this.getSchedulerWidth();
            var resourceTableWidth = this.isResourceViewResponsive() ? parseInt(schedulerWidth * Number(resourceTableConfigWidth.slice(0, -1)) / 100) : resourceTableConfigWidth;
            if (this.isSchedulerResponsive() && this.getContentTableWidth() + resourceTableWidth < schedulerWidth) resourceTableWidth = schedulerWidth - this.getContentTableWidth();
            return resourceTableWidth;
        }
    }, {
        key: 'getContentCellWidth',
        value: function getContentCellWidth() {
            var contentCellConfigWidth = this.getContentCellConfigWidth();
            var schedulerWidth = this.getSchedulerWidth();
            return this.isContentViewResponsive() ? parseInt(schedulerWidth * Number(contentCellConfigWidth.slice(0, -1)) / 100) : contentCellConfigWidth;
        }
    }, {
        key: 'getContentTableWidth',
        value: function getContentTableWidth() {
            return this.headers.length * this.getContentCellWidth();
        }
    }, {
        key: 'getScrollToSpecialMoment',
        value: function getScrollToSpecialMoment() {
            if (this.config.scrollToSpecialMomentEnabled) return this.scrollToSpecialMoment;
            return false;
        }
    }, {
        key: 'getSlots',
        value: function getSlots() {
            return this.isEventPerspective ? this.eventGroups : this.resources;
        }
    }, {
        key: 'getSlotById',
        value: function getSlotById(slotId) {
            var slots = this.getSlots();
            var slot = undefined;
            slots.forEach(function (item) {
                if (item.id === slotId) slot = item;
            });
            return slot;
        }
    }, {
        key: 'getResourceById',
        value: function getResourceById(resourceId) {
            var resource = undefined;
            this.resources.forEach(function (item) {
                if (item.id === resourceId) resource = item;
            });
            return resource;
        }
    }, {
        key: 'getTableHeaderHeight',
        value: function getTableHeaderHeight() {
            return this.config.tableHeaderHeight;
        }
    }, {
        key: 'getSchedulerContentDesiredHeight',
        value: function getSchedulerContentDesiredHeight() {
            var height = 0;
            this.renderData.forEach(function (item) {
                height += item.rowHeight;
            });
            return height;
        }
    }, {
        key: 'getCellMaxEvents',
        value: function getCellMaxEvents() {
            return this.viewType === _index.ViewTypes.Week ? this.config.weekMaxEvents : this.viewType === _index.ViewTypes.Day ? this.config.dayMaxEvents : this.viewType === _index.ViewTypes.Month ? this.config.monthMaxEvents : this.viewType === _index.ViewTypes.Year ? this.config.yearMaxEvents : this.viewType === _index.ViewTypes.Quarter ? this.config.quarterMaxEvents : this.config.customMaxEvents;
        }
    }, {
        key: 'getDateLabel',
        value: function getDateLabel() {
            var start = this.localeMoment(this.startDate);
            var end = this.localeMoment(this.endDate);
            var dateLabel = start.format('LL');

            if (start != end) dateLabel = start.format('LL') + '-' + end.format('LL');

            if (!!this.behaviors.getDateLabelFunc) dateLabel = this.behaviors.getDateLabelFunc(this, this.viewType, this.startDate, this.endDate);

            return dateLabel;
        }
    }, {
        key: 'addEvent',
        value: function addEvent(newEvent) {
            this._attachEvent(newEvent);
            if (this.eventGroupsAutoGenerated) this._generateEventGroups();
            this._createRenderData();
        }
    }, {
        key: 'updateEventStart',
        value: function updateEventStart(event, newStart) {
            this._detachEvent(event);
            event.start = newStart;
            this._attachEvent(event);
            this._createRenderData();
        }
    }, {
        key: 'updateEventEnd',
        value: function updateEventEnd(event, newEnd) {
            event.end = newEnd;
            this._createRenderData();
        }
    }, {
        key: 'moveEvent',
        value: function moveEvent(event, newSlotId, newSlotName, newStart, newEnd) {
            this._detachEvent(event);
            if (this.isEventPerspective) {
                event.groupId = newSlotId;
                event.groupName = newSlotName;
            } else event.resourceId = newSlotId;
            event.end = newEnd;
            event.start = newStart;
            this._attachEvent(event);
            this._createRenderData();
        }
    }, {
        key: 'isEventInTimeWindow',
        value: function isEventInTimeWindow(eventStart, eventEnd, windowStart, windowEnd) {
            return eventStart < windowEnd && eventEnd > windowStart;
        }
    }, {
        key: 'removeEvent',
        value: function removeEvent(event) {
            var index = this.events.indexOf(event);
            if (index !== -1) {
                this.events.splice(index, 1);
                this._createRenderData();
            }
        }
    }, {
        key: 'removeEventById',
        value: function removeEventById(eventId) {
            var index = -1;
            this.events.forEach(function (item, idx) {
                if (item.id === eventId) index = idx;
            });
            if (index !== -1) {
                this.events.splice(index, 1);
                this._createRenderData();
            }
        }
    }, {
        key: 'getResourceTableConfigWidth',
        value: function getResourceTableConfigWidth() {
            if (this.showAgenda) return this.config.agendaResourceTableWidth;

            return this.viewType === _index.ViewTypes.Week ? this.config.weekResourceTableWidth : this.viewType === _index.ViewTypes.Day ? this.config.dayResourceTableWidth : this.viewType === _index.ViewTypes.Month ? this.config.monthResourceTableWidth : this.viewType === _index.ViewTypes.Year ? this.config.yearResourceTableWidth : this.viewType === _index.ViewTypes.Quarter ? this.config.quarterResourceTableWidth : this.config.customResourceTableWidth;
        }
    }, {
        key: 'getContentCellConfigWidth',
        value: function getContentCellConfigWidth() {
            return this.viewType === _index.ViewTypes.Week ? this.config.weekCellWidth : this.viewType === _index.ViewTypes.Day ? this.config.dayCellWidth : this.viewType === _index.ViewTypes.Month ? this.config.monthCellWidth : this.viewType === _index.ViewTypes.Year ? this.config.yearCellWidth : this.viewType === _index.ViewTypes.Quarter ? this.config.quarterCellWidth : this.config.customCellWidth;
        }
    }, {
        key: '_setDocumentWidth',
        value: function _setDocumentWidth(documentWidth) {
            if (documentWidth >= 0) {
                this.documentWidth = documentWidth;
            }
        }
    }, {
        key: '_detachEvent',
        value: function _detachEvent(event) {
            var index = this.events.indexOf(event);
            if (index !== -1) this.events.splice(index, 1);
        }
    }, {
        key: '_attachEvent',
        value: function _attachEvent(event) {
            var _this = this;

            var pos = 0;
            var eventStart = this.localeMoment(event.start);
            this.events.forEach(function (item, index) {
                var start = _this.localeMoment(item.start);
                if (eventStart >= start) pos = index + 1;
            });
            this.events.splice(pos, 0, event);
        }
    }, {
        key: '_handleRecurringEvents',
        value: function _handleRecurringEvents() {
            var _this2 = this;

            var recurringEvents = this.events.filter(function (x) {
                return !!x.rrule;
            });
            recurringEvents.forEach(function (item) {
                _this2._detachEvent(item);
            });

            recurringEvents.forEach(function (item) {
                var windowStart = _this2.localeMoment(_this2.startDate),
                    windowEnd = _this2.localeMoment(_this2.endDate).add(1, 'days'),
                    oldStart = _this2.localeMoment(item.start),
                    oldEnd = _this2.localeMoment(item.end),
                    rule = (0, _rrule.rrulestr)(item.rrule),
                    oldDtstart = undefined;
                if (!!rule.origOptions.dtstart) {
                    oldDtstart = _this2.localeMoment(rule.origOptions.dtstart);
                }
                rule.origOptions.dtstart = oldStart.toDate();
                if (!rule.origOptions.until || windowEnd < _this2.localeMoment(rule.origOptions.until)) {
                    rule.origOptions.until = windowEnd.toDate();
                }

                //reload
                rule = (0, _rrule.rrulestr)(rule.toString());
                if (item.exdates || item.exrule) {
                    var rruleSet = new _rrule.RRuleSet();
                    rruleSet.rrule(rule);
                    if (item.exrule) {
                        rruleSet.exrule((0, _rrule.rrulestr)(item.exrule));
                    }
                    if (item.exdates) {
                        item.exdates.forEach(function (exdate) {
                            rruleSet.exdate(_this2.localeMoment(exdate).toDate());
                        });
                    }
                    rule = rruleSet;
                }

                var all = rule.all();
                var newEvents = all.map(function (time, index) {
                    return _extends({}, item, {
                        recurringEventId: item.id,
                        recurringEventStart: item.start,
                        recurringEventEnd: item.end,
                        id: item.id + '-' + index,
                        start: _this2.localeMoment(time).format(_index.DATETIME_FORMAT),
                        end: _this2.localeMoment(time).add(oldEnd.diff(oldStart), 'ms').format(_index.DATETIME_FORMAT)
                    });
                });
                newEvents.forEach(function (newEvent) {
                    var eventStart = _this2.localeMoment(newEvent.start),
                        eventEnd = _this2.localeMoment(newEvent.end);
                    if (_this2.isEventInTimeWindow(eventStart, eventEnd, windowStart, windowEnd) && (!oldDtstart || eventStart >= oldDtstart)) {
                        _this2._attachEvent(newEvent);
                    }
                });
            });
        }
    }, {
        key: '_resolveDate',
        value: function _resolveDate(num) {
            var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

            if (date != undefined) this.selectDate = this.localeMoment(date).format(_index.DATE_FORMAT);

            if (this.viewType === _index.ViewTypes.Week) {
                this.startDate = date != undefined ? this.localeMoment(date).startOf('week').format(_index.DATE_FORMAT) : this.localeMoment(this.startDate).add(num, 'weeks').format(_index.DATE_FORMAT);
                this.endDate = this.localeMoment(this.startDate).endOf('week').format(_index.DATE_FORMAT);
            } else if (this.viewType === _index.ViewTypes.Day) {
                this.startDate = date != undefined ? this.selectDate : this.localeMoment(this.startDate).add(num, 'days').format(_index.DATE_FORMAT);
                this.endDate = this.startDate;
            } else if (this.viewType === _index.ViewTypes.Month) {
                this.startDate = date != undefined ? this.localeMoment(date).startOf('month').format(_index.DATE_FORMAT) : this.localeMoment(this.startDate).add(num, 'months').format(_index.DATE_FORMAT);
                this.endDate = this.localeMoment(this.startDate).endOf('month').format(_index.DATE_FORMAT);
            } else if (this.viewType === _index.ViewTypes.Quarter) {
                this.startDate = date != undefined ? this.localeMoment(date).startOf('quarter').format(_index.DATE_FORMAT) : this.localeMoment(this.startDate).add(num, 'quarters').format(_index.DATE_FORMAT);
                this.endDate = this.localeMoment(this.startDate).endOf('quarter').format(_index.DATE_FORMAT);
            } else if (this.viewType === _index.ViewTypes.Year) {
                this.startDate = date != undefined ? this.localeMoment(date).startOf('year').format(_index.DATE_FORMAT) : this.localeMoment(this.startDate).add(num, 'years').format(_index.DATE_FORMAT);
                this.endDate = this.localeMoment(this.startDate).endOf('year').format(_index.DATE_FORMAT);
            } else if (this.viewType === _index.ViewTypes.Custom || this.viewType === _index.ViewTypes.Custom1 || this.viewType === _index.ViewTypes.Custom2) {
                if (this.behaviors.getCustomDateFunc != undefined) {
                    var customDate = this.behaviors.getCustomDateFunc(this, num, date);
                    this.startDate = customDate.startDate;
                    this.endDate = customDate.endDate;
                    if (!!customDate.cellUnit) this.cellUnit = customDate.cellUnit;
                } else {
                    throw new Error('This is custom view type, set behaviors.getCustomDateFunc func to resolve the time window(startDate and endDate) yourself');
                }
            }
        }
    }, {
        key: '_createHeaders',
        value: function _createHeaders() {
            var headers = [],
                start = this.localeMoment(this.startDate),
                end = this.localeMoment(this.endDate),
                header = start;

            if (this.showAgenda) {
                headers.push({ time: header.format(_index.DATETIME_FORMAT), nonWorkingTime: false });
            } else {
                if (this.cellUnit === _index.CellUnits.Hour) {
                    start = start.add(this.config.dayStartFrom, 'hours');
                    end = end.add(this.config.dayStopTo, 'hours');
                    header = start;

                    while (header >= start && header <= end) {
                        var minuteSteps = this.getMinuteStepsInHour();
                        for (var i = 0; i < minuteSteps; i++) {
                            var hour = header.hour();
                            if (hour >= this.config.dayStartFrom && hour <= this.config.dayStopTo) {
                                var time = header.format(_index.DATETIME_FORMAT);
                                var nonWorkingTime = this.behaviors.isNonWorkingTimeFunc(this, time);
                                headers.push({ time: time, nonWorkingTime: nonWorkingTime });
                            }

                            header = header.add(this.config.minuteStep, 'minutes');
                        }
                    }
                } else {
                    while (header >= start && header <= end) {
                        var _time = header.format(_index.DATETIME_FORMAT);
                        var dayOfWeek = header.weekday();
                        if (this.config.displayWeekend || dayOfWeek !== 0 && dayOfWeek !== 6) {
                            var _nonWorkingTime = this.behaviors.isNonWorkingTimeFunc(this, _time);
                            headers.push({ time: _time, nonWorkingTime: _nonWorkingTime });
                        }

                        header = header.add(1, 'days');
                    }
                }
            }

            this.headers = headers;
        }
    }, {
        key: '_createInitHeaderEvents',
        value: function _createInitHeaderEvents(header) {
            var start = this.localeMoment(header.time),
                startValue = start.format(_index.DATETIME_FORMAT);
            var endValue = this.showAgenda ? this.viewType === _index.ViewTypes.Week ? start.add(1, 'weeks').format(_index.DATETIME_FORMAT) : this.viewType === _index.ViewTypes.Day ? start.add(1, 'days').format(_index.DATETIME_FORMAT) : this.viewType === _index.ViewTypes.Month ? start.add(1, 'months').format(_index.DATETIME_FORMAT) : this.viewType === _index.ViewTypes.Year ? start.add(1, 'years').format(_index.DATETIME_FORMAT) : this.viewType === _index.ViewTypes.Quarter ? start.add(1, 'quarters').format(_index.DATETIME_FORMAT) : this.localeMoment(this.endDate).add(1, 'days').format(_index.DATETIME_FORMAT) : this.cellUnit === _index.CellUnits.Hour ? start.add(this.config.minuteStep, 'minutes').format(_index.DATETIME_FORMAT) : start.add(1, 'days').format(_index.DATETIME_FORMAT);
            return {
                time: header.time,
                nonWorkingTime: header.nonWorkingTime,
                start: startValue,
                end: endValue,
                count: 0,
                addMore: 0,
                addMoreIndex: 0,
                events: [,,,]
            };
        }
    }, {
        key: '_createHeaderEvent',
        value: function _createHeaderEvent(render, span, eventItem) {
            return {
                render: render,
                span: span,
                eventItem: eventItem
            };
        }
    }, {
        key: '_getEventSlotId',
        value: function _getEventSlotId(event) {
            return this.isEventPerspective ? this._getEventGroupId(event) : event.resourceId;
        }
    }, {
        key: '_getEventGroupId',
        value: function _getEventGroupId(event) {
            return !!event.groupId ? event.groupId.toString() : event.id.toString();
        }
    }, {
        key: '_getEventGroupName',
        value: function _getEventGroupName(event) {
            return !!event.groupName ? event.groupName : event.title;
        }
    }, {
        key: '_generateEventGroups',
        value: function _generateEventGroups() {
            var _this3 = this;

            var eventGroups = [];
            var set = new Set();
            this.events.forEach(function (item) {
                var groupId = _this3._getEventGroupId(item);
                var groupName = _this3._getEventGroupName(item);

                if (!set.has(groupId)) {
                    eventGroups.push({
                        id: groupId,
                        name: groupName,
                        state: item
                    });
                    set.add(groupId);
                }
            });
            this.eventGroups = eventGroups;
        }
    }, {
        key: '_createInitRenderData',
        value: function _createInitRenderData(isEventPerspective, eventGroups, resources, headers) {
            var _this4 = this;

            return isEventPerspective ? eventGroups.map(function (eventGroup) {
                var headerEvents = headers.map(function (header) {
                    return _this4._createInitHeaderEvents(header);
                });

                return {
                    slotId: eventGroup.id,
                    slotName: eventGroup.name,
                    rowHeight: 0,
                    headerItems: headerEvents
                };
            }) : resources.map(function (resource) {
                var headerEvents = headers.map(function (header) {
                    return _this4._createInitHeaderEvents(header);
                });

                return {
                    slotId: resource.id,
                    slotName: resource.name,
                    rowHeight: 0,
                    headerItems: headerEvents
                };
            });
        }
    }, {
        key: '_getSpan',
        value: function _getSpan(startTime, endTime, headers) {
            if (this.showAgenda) return 1;

            var start = this.localeMoment(startTime),
                end = this.localeMoment(endTime),
                span = 0;

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = headers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var header = _step.value;

                    var spanStart = this.localeMoment(header.time),
                        spanEnd = this.cellUnit === _index.CellUnits.Hour ? this.localeMoment(header.time).add(this.config.minuteStep, 'minutes') : this.localeMoment(header.time).add(1, 'days');

                    if (spanStart < end && spanEnd > start) {
                        span++;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return span;
        }
    }, {
        key: '_validateResource',
        value: function _validateResource(resources) {
            if (Object.prototype.toString.call(resources) !== "[object Array]") {
                throw new Error('Resources should be Array object');
            }

            resources.forEach(function (item, index) {
                if (item == undefined) {
                    console.error('Resource undefined: ' + index);
                    throw new Error('Resource undefined: ' + index);
                }
                if (item.id == undefined || item.name == undefined) {
                    console.error('Resource property missed', index, item);
                    throw new Error('Resource property undefined: ' + index);
                }
            });
        }
    }, {
        key: '_validateEventGroups',
        value: function _validateEventGroups(eventGroups) {
            if (Object.prototype.toString.call(eventGroups) !== "[object Array]") {
                throw new Error('Event groups should be Array object');
            }

            eventGroups.forEach(function (item, index) {
                if (item == undefined) {
                    console.error('Event group undefined: ' + index);
                    throw new Error('Event group undefined: ' + index);
                }
                if (item.id == undefined || item.name == undefined) {
                    console.error('Event group property missed', index, item);
                    throw new Error('Event group property undefined: ' + index);
                }
            });
        }
    }, {
        key: '_validateEvents',
        value: function _validateEvents(events) {
            if (Object.prototype.toString.call(events) !== "[object Array]") {
                throw new Error('Events should be Array object');
            }

            events.forEach(function (e, index) {
                if (e == undefined) {
                    console.error('Event undefined: ' + index);
                    throw new Error('Event undefined: ' + index);
                }
                if (e.id == undefined || e.resourceId == undefined || e.title == undefined || e.start == undefined || e.end == undefined) {
                    console.error('Event property missed', index, e);
                    throw new Error('Event property undefined: ' + index);
                }
            });
        }
    }, {
        key: '_validateMinuteStep',
        value: function _validateMinuteStep(minuteStep) {
            if (60 % minuteStep !== 0) {
                console.error('Minute step is not set properly - 60 minutes must be divisible without remainder by this number');
                throw new Error('Minute step is not set properly - 60 minutes must be divisible without remainder by this number');
            }
        }
    }, {
        key: '_compare',
        value: function _compare(event1, event2) {
            var start1 = this.localeMoment(event1.start),
                start2 = this.localeMoment(event2.start);
            if (start1 !== start2) return start1 < start2 ? -1 : 1;

            var end1 = this.localeMoment(event1.end),
                end2 = this.localeMoment(event2.end);
            if (end1 !== end2) return end1 < end2 ? -1 : 1;

            return event1.id < event2.id ? -1 : 1;
        }
    }, {
        key: '_createRenderData',
        value: function _createRenderData() {
            var _this5 = this;

            var initRenderData = this._createInitRenderData(this.isEventPerspective, this.eventGroups, this.resources, this.headers);
            //this.events.sort(this._compare);

            this.events.forEach(function (item) {
                var resourceEventsList = initRenderData.filter(function (x) {
                    return x.slotId === _this5._getEventSlotId(item);
                });
                if (resourceEventsList.length > 0) {
                    var resourceEvents = resourceEventsList[0];
                    var span = _this5._getSpan(item.start, item.end, _this5.headers);
                    var eventStart = _this5.localeMoment(item.start),
                        eventEnd = _this5.localeMoment(item.end);
                    var pos = -1;

                    resourceEvents.headerItems.forEach(function (header, index) {
                        var headerStart = _this5.localeMoment(header.start),
                            headerEnd = _this5.localeMoment(header.end);
                        if (headerEnd > eventStart && headerStart < eventEnd) {
                            header.count = header.count + 1;

                            if (pos === -1) {
                                var tmp = 0;
                                while (header.events[tmp] !== undefined) {
                                    tmp++;
                                }pos = tmp;
                            }
                            var render = headerStart <= eventStart || index === 0;
                            if (render === false) {
                                var previousHeader = resourceEvents.headerItems[index - 1];
                                var previousHeaderStart = _this5.localeMoment(previousHeader.start),
                                    previousHeaderEnd = _this5.localeMoment(previousHeader.end);
                                if (previousHeaderEnd <= eventStart || previousHeaderStart >= eventEnd) render = true;
                            }
                            header.events[pos] = _this5._createHeaderEvent(render, span, item);
                        }
                    });
                }
            });

            initRenderData.forEach(function (resourceEvents) {
                var maxRowsCount = 0;
                var hasSummary = false;
                resourceEvents.headerItems.forEach(function (headerItem) {
                    maxRowsCount = headerItem.count > maxRowsCount ? headerItem.count : maxRowsCount;

                    var renderItemsCount = 0,
                        addMoreIndex = 0,
                        index = 0;
                    while (index < _this5.getCellMaxEvents() - 1) {
                        if (headerItem.events[index] !== undefined) {
                            renderItemsCount++;
                            addMoreIndex = index + 1;
                        }

                        index++;
                    }

                    if (headerItem.events[index] !== undefined) {
                        if (renderItemsCount + 1 < headerItem.count) {
                            headerItem.addMore = headerItem.count - renderItemsCount;
                            headerItem.addMoreIndex = addMoreIndex;
                        }
                    } else {
                        if (renderItemsCount < headerItem.count) {
                            headerItem.addMore = headerItem.count - renderItemsCount;
                            headerItem.addMoreIndex = addMoreIndex;
                        }
                    }

                    if (_this5.behaviors.getSummaryFunc !== undefined) {
                        var events = [];
                        headerItem.events.forEach(function (e) {
                            if (!!e && !!e.eventItem) events.push(e.eventItem);
                        });

                        headerItem.summary = _this5.behaviors.getSummaryFunc(_this5, events, resourceEvents.slotId, resourceEvents.slotName, headerItem.start, headerItem.end);
                        if (!!headerItem.summary && headerItem.summary.text != undefined) hasSummary = true;
                    }
                });

                resourceEvents.hasSummary = hasSummary;
                var rowsCount = maxRowsCount > _this5.getCellMaxEvents() ? _this5.getCellMaxEvents() : maxRowsCount;
                resourceEvents.rowHeight = rowsCount === 0 ? _this5.config.eventItemLineHeight + 2 : rowsCount * _this5.config.eventItemLineHeight + (_this5.config.creatable && _this5.config.checkConflict === false ? 20 : 2);
                if (hasSummary) resourceEvents.rowHeight = resourceEvents.rowHeight + _this5.config.eventItemLineHeight;
                if (_this5.config.nonAgendaSlotMinHeight !== 0 && resourceEvents.rowHeight < _this5.config.nonAgendaSlotMinHeight) resourceEvents.rowHeight = _this5.config.nonAgendaSlotMinHeight;
            });

            this.renderData = initRenderData;
        }
    }, {
        key: '_startResizing',
        value: function _startResizing() {
            this.resizing = true;
        }
    }, {
        key: '_stopResizing',
        value: function _stopResizing() {
            this.resizing = false;
        }
    }, {
        key: '_isResizing',
        value: function _isResizing() {
            return this.resizing;
        }
    }]);

    return SchedulerData;
}();

exports.default = SchedulerData;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectedArea = (_temp = _class = function (_Component) {
    _inherits(SelectedArea, _Component);

    function SelectedArea(props) {
        _classCallCheck(this, SelectedArea);

        return _possibleConstructorReturn(this, (SelectedArea.__proto__ || Object.getPrototypeOf(SelectedArea)).call(this, props));
    }

    _createClass(SelectedArea, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                left = _props.left,
                width = _props.width,
                schedulerData = _props.schedulerData;
            var config = schedulerData.config;


            return _react2.default.createElement('div', { className: 'selected-area', style: { left: left, width: width, top: 0, bottom: 0, backgroundColor: config.selectedAreaColor } });
        }
    }]);

    return SelectedArea;
}(_react.Component), _class.propTypes = {
    schedulerData: _propTypes.PropTypes.object.isRequired,
    left: _propTypes.PropTypes.number.isRequired,
    width: _propTypes.PropTypes.number.isRequired
}, _temp);
exports.default = SelectedArea;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Summary = (_temp = _class = function (_Component) {
    _inherits(Summary, _Component);

    function Summary(props) {
        _classCallCheck(this, Summary);

        return _possibleConstructorReturn(this, (Summary.__proto__ || Object.getPrototypeOf(Summary)).call(this, props));
    }

    _createClass(Summary, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                summary = _props.summary,
                left = _props.left,
                width = _props.width,
                top = _props.top,
                schedulerData = _props.schedulerData;
            var config = schedulerData.config;

            var color = config.summaryColor;
            if (summary.color != undefined) color = summary.color;
            var textAlign = 'center';
            if (config.summaryPos === _index.SummaryPos.TopRight || config.summaryPos === _index.SummaryPos.BottomRight) textAlign = 'right';else if (config.summaryPos === _index.SummaryPos.TopLeft || config.summaryPos === _index.SummaryPos.BottomLeft) textAlign = 'left';
            var style = { height: config.eventItemHeight, color: color, textAlign: textAlign, marginLeft: '6px', marginRight: '6px' };
            if (summary.fontSize != undefined) style = _extends({}, style, { fontSize: summary.fontSize });

            return _react2.default.createElement(
                'a',
                { className: 'timeline-event header2-text', style: { left: left, width: width, top: top, cursor: 'default' } },
                _react2.default.createElement(
                    'div',
                    { style: style },
                    summary.text
                )
            );
        }
    }]);

    return Summary;
}(_react.Component), _class.propTypes = {
    schedulerData: _propTypes.PropTypes.object.isRequired,
    summary: _propTypes.PropTypes.object.isRequired,
    left: _propTypes.PropTypes.number.isRequired,
    width: _propTypes.PropTypes.number.isRequired,
    top: _propTypes.PropTypes.number.isRequired
}, _temp);
exports.default = Summary;
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var SummaryPos = {
    Top: 0,
    TopRight: 1,
    TopLeft: 2,
    Bottom: 3,
    BottomRight: 4,
    BottomLeft: 5
};

exports.default = SummaryPos;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function getPos(element) {
    var x = 0,
        y = 0;
    do {
        x += element.offsetLeft - element.scrollLeft;
        y += element.offsetTop - element.scrollTop;
    } while (element = element.offsetParent);
    return { 'x': x, 'y': y };
}

exports.getPos = getPos;
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var ViewTypes = {
    Day: 0,
    Week: 1,
    Month: 2,
    Quarter: 3,
    Year: 4,
    Custom: 5,
    Custom1: 6,
    Custom2: 7
};

exports.default = ViewTypes;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isNonWorkingTime = exports.getScrollSpecialMoment = exports.getEventText = exports.getDateLabel = exports.getNonAgendaViewBodyCellBgColor = exports.getCustomDate = exports.getSummary = undefined;

var _index = require('./index');

//getSummary func example
var getSummary = exports.getSummary = function getSummary(schedulerData, headerEvents, slotId, slotName, headerStart, headerEnd) {
    return { text: 'Summary', color: 'red', fontSize: '1.2rem' };
};

//getCustomDate example
var getCustomDate = exports.getCustomDate = function getCustomDate(schedulerData, num) {
    var date = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
    var viewType = schedulerData.viewType;

    var selectDate = schedulerData.startDate;
    if (date != undefined) selectDate = date;

    var startDate = num === 0 ? selectDate : schedulerData.localeMoment(selectDate).add(2 * num, 'days').format(_index.DATE_FORMAT),
        endDate = schedulerData.localeMoment(startDate).add(1, 'days').format(_index.DATE_FORMAT),
        cellUnit = _index.CellUnits.Hour;
    if (viewType === _index.ViewTypes.Custom1) {
        var monday = schedulerData.localeMoment(selectDate).startOf('week').format(_index.DATE_FORMAT);
        startDate = num === 0 ? monday : schedulerData.localeMoment(monday).add(2 * num, 'weeks').format(_index.DATE_FORMAT);
        endDate = schedulerData.localeMoment(startDate).add(1, 'weeks').endOf('week').format(_index.DATE_FORMAT);
        cellUnit = _index.CellUnits.Day;
    } else if (viewType === _index.ViewTypes.Custom2) {
        var firstDayOfMonth = schedulerData.localeMoment(selectDate).startOf('month').format(_index.DATE_FORMAT);
        startDate = num === 0 ? firstDayOfMonth : schedulerData.localeMoment(firstDayOfMonth).add(2 * num, 'months').format(_index.DATE_FORMAT);
        endDate = schedulerData.localeMoment(startDate).add(1, 'months').endOf('month').format(_index.DATE_FORMAT);
        cellUnit = _index.CellUnits.Day;
    }

    return {
        startDate: startDate,
        endDate: endDate,
        cellUnit: cellUnit
    };
};

//getNonAgendaViewBodyCellBgColor example
var getNonAgendaViewBodyCellBgColor = exports.getNonAgendaViewBodyCellBgColor = function getNonAgendaViewBodyCellBgColor(schedulerData, slotId, header) {
    if (!header.nonWorkingTime) {
        return '#87e8de';
    }

    return undefined;
};

//getDateLabel func example
var getDateLabel = exports.getDateLabel = function getDateLabel(schedulerData, viewType, startDate, endDate) {
    var start = schedulerData.localeMoment(startDate);
    var end = schedulerData.localeMoment(endDate);
    var dateLabel = start.format('MMM D, YYYY');

    if (viewType === _index.ViewTypes.Week || start != end && (viewType === _index.ViewTypes.Custom || viewType === _index.ViewTypes.Custom1 || viewType === _index.ViewTypes.Custom2)) {
        dateLabel = start.format('MMM D') + '-' + end.format('D, YYYY');
        if (start.month() !== end.month()) dateLabel = start.format('MMM D') + '-' + end.format('MMM D, YYYY');
        if (start.year() !== end.year()) dateLabel = start.format('MMM D, YYYY') + '-' + end.format('MMM D, YYYY');
    } else if (viewType === _index.ViewTypes.Month) {
        dateLabel = start.format('MMMM YYYY');
    } else if (viewType === _index.ViewTypes.Quarter) {
        dateLabel = start.format('MMM D') + '-' + end.format('MMM D, YYYY');
    } else if (viewType === _index.ViewTypes.Year) {
        dateLabel = start.format('YYYY');
    }

    return dateLabel;
};

var getEventText = exports.getEventText = function getEventText(schedulerData, event) {
    if (!schedulerData.isEventPerspective) return event.title;

    var eventText = event.title;
    schedulerData.resources.forEach(function (item) {
        if (item.id === event.resourceId) {
            eventText = item.name;
        }
    });

    return eventText;
};

var getScrollSpecialMoment = exports.getScrollSpecialMoment = function getScrollSpecialMoment(schedulerData, startMoment, endMoment) {
    // return endMoment;
    var localeMoment = schedulerData.localeMoment;

    return localeMoment();
};

var isNonWorkingTime = exports.isNonWorkingTime = function isNonWorkingTime(schedulerData, time) {
    var localeMoment = schedulerData.localeMoment;

    if (schedulerData.cellUnit === _index.CellUnits.Hour) {
        var hour = localeMoment(time).hour();
        if (hour < 9 || hour > 18) return true;
    } else {
        var dayOfWeek = localeMoment(time).weekday();
        if (dayOfWeek === 0 || dayOfWeek === 6) return true;
    }

    return false;
};

exports.default = {
    //getSummaryFunc: getSummary,
    getSummaryFunc: undefined,
    //getCustomDateFunc: getCustomDate,
    getCustomDateFunc: undefined,
    // getNonAgendaViewBodyCellBgColorFunc: getNonAgendaViewBodyCellBgColor,
    getNonAgendaViewBodyCellBgColorFunc: undefined,
    getScrollSpecialMomentFunc: getScrollSpecialMoment,
    getDateLabelFunc: getDateLabel,
    getEventTextFunc: getEventText,
    isNonWorkingTimeFunc: isNonWorkingTime
};
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ViewTypes = require('./ViewTypes');

var _ViewTypes2 = _interopRequireDefault(_ViewTypes);

var _SummaryPos = require('./SummaryPos');

var _SummaryPos2 = _interopRequireDefault(_SummaryPos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    schedulerWidth: '100%',
    besidesWidth: 20,
    schedulerMaxHeight: 0,
    tableHeaderHeight: 40,

    agendaResourceTableWidth: 160,
    agendaMaxEventWidth: 100,

    dayResourceTableWidth: 160,
    weekResourceTableWidth: '16%',
    monthResourceTableWidth: 160,
    quarterResourceTableWidth: 160,
    yearResourceTableWidth: 160,
    customResourceTableWidth: 160,

    dayCellWidth: 30,
    weekCellWidth: '12%',
    monthCellWidth: 80,
    quarterCellWidth: 80,
    yearCellWidth: 80,
    customCellWidth: 80,

    dayMaxEvents: 99,
    weekMaxEvents: 99,
    monthMaxEvents: 99,
    quarterMaxEvents: 99,
    yearMaxEvents: 99,
    customMaxEvents: 99,

    eventItemHeight: 22,
    eventItemLineHeight: 24,
    nonAgendaSlotMinHeight: 0,
    dayStartFrom: 0,
    dayStopTo: 23,
    defaultEventBgColor: '#80C5F6',
    selectedAreaColor: '#7EC2F3',
    nonWorkingTimeHeadColor: '#999999',
    nonWorkingTimeHeadBgColor: '#fff0f6',
    nonWorkingTimeBodyBgColor: '#fff0f6',
    summaryColor: '#666',
    summaryPos: _SummaryPos2.default.TopRight,

    startResizable: true,
    endResizable: true,
    movable: true,
    creatable: true,
    crossResourceMove: true,
    checkConflict: false,
    scrollToSpecialMomentEnabled: true,
    eventItemPopoverEnabled: true,
    calendarPopoverEnabled: true,
    recurringEventsEnabled: true,
    headerEnabled: true,
    displayWeekend: true,
    relativeMove: true,

    resourceName: 'Resource Name',
    taskName: 'Task Name',
    agendaViewHeader: 'Agenda',
    addMorePopoverHeaderFormat: 'MMM D, YYYY dddd',
    eventItemPopoverDateFormat: 'MMM D',
    nonAgendaDayCellHeaderFormat: 'ha',
    nonAgendaOtherCellHeaderFormat: 'ddd M/D',

    minuteStep: 30,

    views: [{ viewName: 'Day', viewType: _ViewTypes2.default.Day, showAgenda: false, isEventPerspective: false }, { viewName: 'Week', viewType: _ViewTypes2.default.Week, showAgenda: false, isEventPerspective: false }, { viewName: 'Month', viewType: _ViewTypes2.default.Month, showAgenda: false, isEventPerspective: false }, { viewName: 'Quarter', viewType: _ViewTypes2.default.Quarter, showAgenda: false, isEventPerspective: false }, { viewName: 'Year', viewType: _ViewTypes2.default.Year, showAgenda: false, isEventPerspective: false }]
};
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DemoData = exports.AddMorePopover = exports.DnDContext = exports.DnDSource = exports.SummaryPos = exports.CellUnits = exports.ViewTypes = exports.SchedulerData = exports.DATETIME_FORMAT = exports.DATE_FORMAT = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _initialiseProps;
// Col, Row and Icon do not have their own less files for styling. They use 
// rules declared in antd's global css. If these styles are imported directly
// from within antd, they'll include, for instance, reset rules. These will
// affect everything on the page and in essence would leak antd's global styles
// into all projects using this library. Instead of doing that, we are using
// a hack which allows us to wrap all antd styles to target specific root. In
// this case the root id will be "RBS-Scheduler-root". This way the reset styles
// won't be applied to elements declared outside of <Scheduler /> component.
//
// You can get more context for the issue by reading:
// https://github.com/ant-design/ant-design/issues/4331
// The solution is based on:
// https://github.com/ant-design/ant-design/issues/4331#issuecomment-391066131
// 
// For development
// This fix is implemented with webpack's NormalModuleReplacementPlugin in
// webpack/webpack-dev.config.js.
//
// For library builds
// This fix is implemented by the build script in scripts/build.js
//
// The next components have their own specific stylesheets which we import
// separately here to avoid importing from files which have required the global
// antd styles.


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _col = require('antd/lib/col');

var _col2 = _interopRequireDefault(_col);

var _row = require('antd/lib/row');

var _row2 = _interopRequireDefault(_row);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

require('antd/lib/select/style/index.css');

require('antd/lib/grid/style/index.css');

var _radio = require('antd/lib/radio');

var _radio2 = _interopRequireDefault(_radio);

require('antd/lib/radio/style/index.css');

var _popover = require('antd/lib/popover');

var _popover2 = _interopRequireDefault(_popover);

require('antd/lib/popover/style/index.css');

var _calendar = require('antd/lib/calendar');

var _calendar2 = _interopRequireDefault(_calendar);

require('antd/lib/calendar/style/index.css');

var _EventItem = require('./EventItem');

var _EventItem2 = _interopRequireDefault(_EventItem);

var _DnDSource = require('./DnDSource');

var _DnDSource2 = _interopRequireDefault(_DnDSource);

var _DnDContext = require('./DnDContext');

var _DnDContext2 = _interopRequireDefault(_DnDContext);

var _ResourceView = require('./ResourceView');

var _ResourceView2 = _interopRequireDefault(_ResourceView);

var _HeaderView = require('./HeaderView');

var _HeaderView2 = _interopRequireDefault(_HeaderView);

var _BodyView = require('./BodyView');

var _BodyView2 = _interopRequireDefault(_BodyView);

var _ResourceEvents = require('./ResourceEvents');

var _ResourceEvents2 = _interopRequireDefault(_ResourceEvents);

var _AgendaView = require('./AgendaView');

var _AgendaView2 = _interopRequireDefault(_AgendaView);

var _AddMorePopover = require('./AddMorePopover');

var _AddMorePopover2 = _interopRequireDefault(_AddMorePopover);

var _ViewTypes = require('./ViewTypes');

var _ViewTypes2 = _interopRequireDefault(_ViewTypes);

var _CellUnits = require('./CellUnits');

var _CellUnits2 = _interopRequireDefault(_CellUnits);

var _SummaryPos = require('./SummaryPos');

var _SummaryPos2 = _interopRequireDefault(_SummaryPos);

var _SchedulerData = require('./SchedulerData');

var _SchedulerData2 = _interopRequireDefault(_SchedulerData);

var _DemoData = require('./DemoData');

var _DemoData2 = _interopRequireDefault(_DemoData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioButton = _radio2.default.Button;
var RadioGroup = _radio2.default.Group;

var Scheduler = (_temp = _class = function (_Component) {
    _inherits(Scheduler, _Component);

    function Scheduler(props) {
        _classCallCheck(this, Scheduler);

        var _this = _possibleConstructorReturn(this, (Scheduler.__proto__ || Object.getPrototypeOf(Scheduler)).call(this, props));

        _initialiseProps.call(_this);

        var schedulerData = props.schedulerData,
            dndSources = props.dndSources;

        var sources = [];
        sources.push(new _DnDSource2.default(function (props) {
            return props.eventItem;
        }, _EventItem2.default));
        if (dndSources != undefined && dndSources.length > 0) {
            sources = [].concat(_toConsumableArray(sources), _toConsumableArray(dndSources));
        }
        var dndContext = new _DnDContext2.default(sources, _ResourceEvents2.default);

        _this.currentArea = -1;
        schedulerData._setDocumentWidth(document.documentElement.clientWidth);
        _this.state = {
            visible: false,
            dndContext: dndContext,
            contentHeight: schedulerData.getSchedulerContentDesiredHeight(),
            contentScrollbarHeight: 17,
            contentScrollbarWidth: 17,
            resourceScrollbarHeight: 17,
            resourceScrollbarWidth: 17,
            scrollLeft: 0,
            scrollTop: 0,
            documentWidth: document.documentElement.clientWidth,
            documentHeight: document.documentElement.clientHeight
        };

        if (schedulerData.isSchedulerResponsive()) window.onresize = _this.onWindowResize;
        return _this;
    }

    _createClass(Scheduler, [{
        key: 'componentDidMount',
        value: function componentDidMount(props, state) {
            this.resolveScrollbarSize();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(props, state) {
            this.resolveScrollbarSize();

            var schedulerData = this.props.schedulerData;
            var localeMoment = schedulerData.localeMoment,
                behaviors = schedulerData.behaviors;

            if (schedulerData.getScrollToSpecialMoment() && !!behaviors.getScrollSpecialMomentFunc) {
                if (!!this.schedulerContent && this.schedulerContent.scrollWidth > this.schedulerContent.clientWidth) {
                    var start = localeMoment(schedulerData.startDate).startOf('day'),
                        end = localeMoment(schedulerData.endDate).endOf('day'),
                        specialMoment = behaviors.getScrollSpecialMomentFunc(schedulerData, start, end);
                    if (specialMoment >= start && specialMoment <= end) {
                        var index = 0;
                        schedulerData.headers.forEach(function (item) {
                            var header = localeMoment(item.time);
                            if (specialMoment >= header) index++;
                        });
                        this.schedulerContent.scrollLeft = (index - 1) * schedulerData.getContentCellWidth();

                        schedulerData.setScrollToSpecialMoment(false);
                    }
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                schedulerData = _props.schedulerData,
                leftCustomHeader = _props.leftCustomHeader,
                rightCustomHeader = _props.rightCustomHeader;
            var renderData = schedulerData.renderData,
                viewType = schedulerData.viewType,
                showAgenda = schedulerData.showAgenda,
                isEventPerspective = schedulerData.isEventPerspective,
                config = schedulerData.config;

            var width = schedulerData.getSchedulerWidth();
            var calendarPopoverEnabled = config.calendarPopoverEnabled;

            var dateLabel = schedulerData.getDateLabel();
            var defaultValue = '' + viewType + (showAgenda ? 1 : 0) + (isEventPerspective ? 1 : 0);
            var radioButtonList = config.views.map(function (item) {
                return _react2.default.createElement(
                    RadioButton,
                    { key: '' + item.viewType + (item.showAgenda ? 1 : 0) + (item.isEventPerspective ? 1 : 0),
                        value: '' + item.viewType + (item.showAgenda ? 1 : 0) + (item.isEventPerspective ? 1 : 0) },
                    _react2.default.createElement(
                        'span',
                        {
                            style: { margin: "0px 8px" } },
                        item.viewName
                    )
                );
            });

            var tbodyContent = _react2.default.createElement('tr', null);
            if (showAgenda) {
                tbodyContent = _react2.default.createElement(_AgendaView2.default, this.props);
            } else {
                var resourceTableWidth = schedulerData.getResourceTableWidth();
                var schedulerContainerWidth = width - resourceTableWidth + 1;
                var schedulerWidth = schedulerData.getContentTableWidth() - 1;
                var DndResourceEvents = this.state.dndContext.getDropTarget();
                var eventDndSource = this.state.dndContext.getDndSource();

                var resourceEventsList = renderData.map(function (item) {
                    return _react2.default.createElement(DndResourceEvents, _extends({}, _this2.props, {
                        key: item.slotId,
                        resourceEvents: item,
                        dndSource: eventDndSource
                    }));
                });

                var contentScrollbarHeight = this.state.contentScrollbarHeight,
                    contentScrollbarWidth = this.state.contentScrollbarWidth,
                    resourceScrollbarHeight = this.state.resourceScrollbarHeight,
                    resourceScrollbarWidth = this.state.resourceScrollbarWidth,
                    contentHeight = this.state.contentHeight;
                var resourcePaddingBottom = resourceScrollbarHeight === 0 ? contentScrollbarHeight : 0;
                var contentPaddingBottom = contentScrollbarHeight === 0 ? resourceScrollbarHeight : 0;
                var schedulerContentStyle = { overflow: 'auto', margin: "0px", position: "relative", paddingBottom: contentPaddingBottom };
                var resourceContentStyle = { overflowX: "auto", overflowY: "auto", width: resourceTableWidth + resourceScrollbarWidth - 2, margin: '0px -' + contentScrollbarWidth + 'px 0px 0px' };
                if (config.schedulerMaxHeight > 0) {
                    schedulerContentStyle = _extends({}, schedulerContentStyle, {
                        maxHeight: config.schedulerMaxHeight - config.tableHeaderHeight
                    });
                    resourceContentStyle = _extends({}, resourceContentStyle, {
                        maxHeight: config.schedulerMaxHeight - config.tableHeaderHeight
                    });
                }

                var resourceName = schedulerData.isEventPerspective ? config.taskName : config.resourceName;
                tbodyContent = _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                        'td',
                        { style: { width: resourceTableWidth, verticalAlign: 'top' } },
                        _react2.default.createElement(
                            'div',
                            { className: 'resource-view' },
                            _react2.default.createElement(
                                'div',
                                { style: { overflow: "hidden", borderBottom: "1px solid #e9e9e9", height: config.tableHeaderHeight } },
                                _react2.default.createElement(
                                    'div',
                                    { style: { overflowX: "scroll", overflowY: "hidden", margin: '0px 0px -' + contentScrollbarHeight + 'px' } },
                                    _react2.default.createElement(
                                        'table',
                                        { className: 'resource-table' },
                                        _react2.default.createElement(
                                            'thead',
                                            null,
                                            _react2.default.createElement(
                                                'tr',
                                                { style: { height: config.tableHeaderHeight } },
                                                _react2.default.createElement(
                                                    'th',
                                                    { className: 'header3-text' },
                                                    resourceName
                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: resourceContentStyle, ref: this.schedulerResourceRef, onMouseOver: this.onSchedulerResourceMouseOver, onMouseOut: this.onSchedulerResourceMouseOut, onScroll: this.onSchedulerResourceScroll },
                                _react2.default.createElement(_ResourceView2.default, _extends({}, this.props, {
                                    contentScrollbarHeight: resourcePaddingBottom
                                }))
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: 'scheduler-view', style: { width: schedulerContainerWidth, verticalAlign: 'top' } },
                            _react2.default.createElement(
                                'div',
                                { style: { overflow: "hidden", borderBottom: "1px solid #e9e9e9", height: config.tableHeaderHeight } },
                                _react2.default.createElement(
                                    'div',
                                    { style: { overflowX: "scroll", overflowY: "hidden", margin: '0px 0px -' + contentScrollbarHeight + 'px' }, ref: this.schedulerHeadRef, onMouseOver: this.onSchedulerHeadMouseOver, onMouseOut: this.onSchedulerHeadMouseOut, onScroll: this.onSchedulerHeadScroll },
                                    _react2.default.createElement(
                                        'div',
                                        { style: { paddingRight: contentScrollbarWidth + 'px', width: schedulerWidth + contentScrollbarWidth } },
                                        _react2.default.createElement(
                                            'table',
                                            { className: 'scheduler-bg-table' },
                                            _react2.default.createElement(_HeaderView2.default, this.props)
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: schedulerContentStyle, ref: this.schedulerContentRef, onMouseOver: this.onSchedulerContentMouseOver, onMouseOut: this.onSchedulerContentMouseOut, onScroll: this.onSchedulerContentScroll },
                                _react2.default.createElement(
                                    'div',
                                    { style: { width: schedulerWidth, height: contentHeight } },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'scheduler-content' },
                                        _react2.default.createElement(
                                            'table',
                                            { className: 'scheduler-content-table' },
                                            _react2.default.createElement(
                                                'tbody',
                                                null,
                                                resourceEventsList
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'scheduler-bg' },
                                        _react2.default.createElement(
                                            'table',
                                            { className: 'scheduler-bg-table', style: { width: schedulerWidth }, ref: this.schedulerContentBgTableRef },
                                            _react2.default.createElement(_BodyView2.default, this.props)
                                        )
                                    )
                                )
                            )
                        )
                    )
                );
            };

            var popover = _react2.default.createElement(
                'div',
                { className: 'popover-calendar' },
                _react2.default.createElement(_calendar2.default, { fullscreen: false, onSelect: this.onSelect })
            );
            var schedulerHeader = _react2.default.createElement('div', null);
            if (config.headerEnabled) {
                schedulerHeader = _react2.default.createElement(
                    _row2.default,
                    { type: 'flex', align: 'middle', justify: 'space-between', style: { marginBottom: '24px' } },
                    leftCustomHeader,
                    _react2.default.createElement(
                        _col2.default,
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: 'header2-text' },
                            _react2.default.createElement(_icon2.default, { type: 'left', style: { marginRight: "8px" }, className: 'icon-nav',
                                onClick: this.goBack }),
                            calendarPopoverEnabled ? _react2.default.createElement(
                                _popover2.default,
                                { content: popover, placement: 'bottom', trigger: 'click',
                                    visible: this.state.visible,
                                    onVisibleChange: this.handleVisibleChange },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'header2-text-label', style: { cursor: 'pointer' } },
                                    dateLabel
                                )
                            ) : _react2.default.createElement(
                                'span',
                                { className: 'header2-text-label' },
                                dateLabel
                            ),
                            _react2.default.createElement(_icon2.default, { type: 'right', style: { marginLeft: "8px" }, className: 'icon-nav',
                                onClick: this.goNext })
                        )
                    ),
                    _react2.default.createElement(
                        _col2.default,
                        null,
                        _react2.default.createElement(
                            RadioGroup,
                            { defaultValue: defaultValue, size: 'default', onChange: this.onViewChange },
                            radioButtonList
                        )
                    ),
                    rightCustomHeader
                );
            }

            return _react2.default.createElement(
                'table',
                { id: 'RBS-Scheduler-root', className: 'scheduler', style: { width: width + 'px' } },
                _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'td',
                            { colSpan: '2' },
                            schedulerHeader
                        )
                    )
                ),
                _react2.default.createElement(
                    'tbody',
                    null,
                    tbodyContent
                )
            );
        }
    }]);

    return Scheduler;
}(_react.Component), _class.propTypes = {
    schedulerData: _propTypes.PropTypes.object.isRequired,
    prevClick: _propTypes.PropTypes.func.isRequired,
    nextClick: _propTypes.PropTypes.func.isRequired,
    onViewChange: _propTypes.PropTypes.func.isRequired,
    onSelectDate: _propTypes.PropTypes.func.isRequired,
    onSetAddMoreState: _propTypes.PropTypes.func,
    updateEventStart: _propTypes.PropTypes.func,
    updateEventEnd: _propTypes.PropTypes.func,
    moveEvent: _propTypes.PropTypes.func,
    leftCustomHeader: _propTypes.PropTypes.object,
    rightCustomHeader: _propTypes.PropTypes.object,
    newEvent: _propTypes.PropTypes.func,
    subtitleGetter: _propTypes.PropTypes.func,
    eventItemClick: _propTypes.PropTypes.func,
    viewEventClick: _propTypes.PropTypes.func,
    viewEventText: _propTypes.PropTypes.string,
    viewEvent2Click: _propTypes.PropTypes.func,
    viewEvent2Text: _propTypes.PropTypes.string,
    conflictOccurred: _propTypes.PropTypes.func,
    eventItemTemplateResolver: _propTypes.PropTypes.func,
    dndSources: _propTypes.PropTypes.array,
    slotClickedFunc: _propTypes.PropTypes.func,
    slotItemTemplateResolver: _propTypes.PropTypes.func,
    nonAgendaCellHeaderTemplateResolver: _propTypes.PropTypes.func,
    onScrollLeft: _propTypes.PropTypes.func,
    onScrollRight: _propTypes.PropTypes.func,
    onScrollTop: _propTypes.PropTypes.func,
    onScrollBottom: _propTypes.PropTypes.func
}, _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.onWindowResize = function (e) {
        var schedulerData = _this3.props.schedulerData;

        schedulerData._setDocumentWidth(document.documentElement.clientWidth);
        _this3.setState({
            documentWidth: document.documentElement.clientWidth,
            documentHeight: document.documentElement.clientHeight
        });
    };

    this.resolveScrollbarSize = function () {
        var schedulerData = _this3.props.schedulerData;

        var contentScrollbarHeight = 17,
            contentScrollbarWidth = 17,
            resourceScrollbarHeight = 17,
            resourceScrollbarWidth = 17,
            contentHeight = schedulerData.getSchedulerContentDesiredHeight();
        if (!!_this3.schedulerContent) {
            contentScrollbarHeight = _this3.schedulerContent.offsetHeight - _this3.schedulerContent.clientHeight;
            contentScrollbarWidth = _this3.schedulerContent.offsetWidth - _this3.schedulerContent.clientWidth;
        }
        if (!!_this3.schedulerResource) {
            resourceScrollbarHeight = _this3.schedulerResource.offsetHeight - _this3.schedulerResource.clientHeight;
            resourceScrollbarWidth = _this3.schedulerResource.offsetWidth - _this3.schedulerResource.clientWidth;
        }
        if (!!_this3.schedulerContentBgTable && !!_this3.schedulerContentBgTable.offsetHeight) {
            contentHeight = _this3.schedulerContentBgTable.offsetHeight;
        }

        var tmpState = {};
        var needSet = false;
        if (contentScrollbarHeight != _this3.state.contentScrollbarHeight) {
            tmpState = _extends({}, tmpState, { contentScrollbarHeight: contentScrollbarHeight });
            needSet = true;
        }
        if (contentScrollbarWidth != _this3.state.contentScrollbarWidth) {
            tmpState = _extends({}, tmpState, { contentScrollbarWidth: contentScrollbarWidth });
            needSet = true;
        }
        if (contentHeight != _this3.state.contentHeight) {
            tmpState = _extends({}, tmpState, { contentHeight: contentHeight });
            needSet = true;
        }
        if (resourceScrollbarHeight != _this3.state.resourceScrollbarHeight) {
            tmpState = _extends({}, tmpState, { resourceScrollbarHeight: resourceScrollbarHeight });
            needSet = true;
        }
        if (resourceScrollbarWidth != _this3.state.resourceScrollbarWidth) {
            tmpState = _extends({}, tmpState, { resourceScrollbarWidth: resourceScrollbarWidth });
            needSet = true;
        }
        if (needSet) _this3.setState(tmpState);
    };

    this.schedulerHeadRef = function (element) {
        _this3.schedulerHead = element;
    };

    this.onSchedulerHeadMouseOver = function () {
        _this3.currentArea = 2;
    };

    this.onSchedulerHeadMouseOut = function () {
        _this3.currentArea = -1;
    };

    this.onSchedulerHeadScroll = function (proxy, event) {
        if ((_this3.currentArea === 2 || _this3.currentArea === -1) && _this3.schedulerContent.scrollLeft != _this3.schedulerHead.scrollLeft) _this3.schedulerContent.scrollLeft = _this3.schedulerHead.scrollLeft;
    };

    this.schedulerResourceRef = function (element) {
        _this3.schedulerResource = element;
    };

    this.onSchedulerResourceMouseOver = function () {
        _this3.currentArea = 1;
    };

    this.onSchedulerResourceMouseOut = function () {
        _this3.currentArea = -1;
    };

    this.onSchedulerResourceScroll = function (proxy, event) {
        if ((_this3.currentArea === 1 || _this3.currentArea === -1) && _this3.schedulerContent.scrollTop != _this3.schedulerResource.scrollTop) _this3.schedulerContent.scrollTop = _this3.schedulerResource.scrollTop;
    };

    this.schedulerContentRef = function (element) {
        _this3.schedulerContent = element;
    };

    this.schedulerContentBgTableRef = function (element) {
        _this3.schedulerContentBgTable = element;
    };

    this.onSchedulerContentMouseOver = function () {
        _this3.currentArea = 0;
    };

    this.onSchedulerContentMouseOut = function () {
        _this3.currentArea = -1;
    };

    this.onSchedulerContentScroll = function (proxy, event) {
        if (_this3.currentArea === 0 || _this3.currentArea === -1) {
            if (_this3.schedulerHead.scrollLeft != _this3.schedulerContent.scrollLeft) _this3.schedulerHead.scrollLeft = _this3.schedulerContent.scrollLeft;
            if (_this3.schedulerResource.scrollTop != _this3.schedulerContent.scrollTop) _this3.schedulerResource.scrollTop = _this3.schedulerContent.scrollTop;
        }

        var _props2 = _this3.props,
            schedulerData = _props2.schedulerData,
            onScrollLeft = _props2.onScrollLeft,
            onScrollRight = _props2.onScrollRight,
            onScrollTop = _props2.onScrollTop,
            onScrollBottom = _props2.onScrollBottom;
        var _state = _this3.state,
            scrollLeft = _state.scrollLeft,
            scrollTop = _state.scrollTop;

        if (_this3.schedulerContent.scrollLeft !== scrollLeft) {
            if (_this3.schedulerContent.scrollLeft === 0 && onScrollLeft != undefined) {
                onScrollLeft(schedulerData, _this3.schedulerContent, _this3.schedulerContent.scrollWidth - _this3.schedulerContent.clientWidth);
            }
            if (_this3.schedulerContent.scrollLeft === _this3.schedulerContent.scrollWidth - _this3.schedulerContent.clientWidth && onScrollRight != undefined) {
                onScrollRight(schedulerData, _this3.schedulerContent, _this3.schedulerContent.scrollWidth - _this3.schedulerContent.clientWidth);
            }
        } else if (_this3.schedulerContent.scrollTop !== scrollTop) {
            if (_this3.schedulerContent.scrollTop === 0 && onScrollTop != undefined) {
                onScrollTop(schedulerData, _this3.schedulerContent, _this3.schedulerContent.scrollHeight - _this3.schedulerContent.clientHeight);
            }
            if (_this3.schedulerContent.scrollTop === _this3.schedulerContent.scrollHeight - _this3.schedulerContent.clientHeight && onScrollBottom != undefined) {
                onScrollBottom(schedulerData, _this3.schedulerContent, _this3.schedulerContent.scrollHeight - _this3.schedulerContent.clientHeight);
            }
        }
        _this3.setState({
            scrollLeft: _this3.schedulerContent.scrollLeft,
            scrollTop: _this3.schedulerContent.scrollTop
        });
    };

    this.onViewChange = function (e) {
        var _props3 = _this3.props,
            onViewChange = _props3.onViewChange,
            schedulerData = _props3.schedulerData;

        var viewType = parseInt(e.target.value.charAt(0));
        var showAgenda = e.target.value.charAt(1) === '1';
        var isEventPerspective = e.target.value.charAt(2) === '1';
        onViewChange(schedulerData, { viewType: viewType, showAgenda: showAgenda, isEventPerspective: isEventPerspective });
    };

    this.goNext = function () {
        var _props4 = _this3.props,
            nextClick = _props4.nextClick,
            schedulerData = _props4.schedulerData;

        nextClick(schedulerData);
    };

    this.goBack = function () {
        var _props5 = _this3.props,
            prevClick = _props5.prevClick,
            schedulerData = _props5.schedulerData;

        prevClick(schedulerData);
    };

    this.handleVisibleChange = function (visible) {
        _this3.setState({ visible: visible });
    };

    this.onSelect = function (date) {
        _this3.setState({
            visible: false
        });

        var _props6 = _this3.props,
            onSelectDate = _props6.onSelectDate,
            schedulerData = _props6.schedulerData;

        onSelectDate(schedulerData, date);
    };
}, _temp);
var DATE_FORMAT = exports.DATE_FORMAT = 'YYYY-MM-DD';
var DATETIME_FORMAT = exports.DATETIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
exports.SchedulerData = _SchedulerData2.default;
exports.ViewTypes = _ViewTypes2.default;
exports.CellUnits = _CellUnits2.default;
exports.SummaryPos = _SummaryPos2.default;
exports.DnDSource = _DnDSource2.default;
exports.DnDContext = _DnDContext2.default;
exports.AddMorePopover = _AddMorePopover2.default;
exports.DemoData = _DemoData2.default;
exports.default = Scheduler;


// this line has been added by scripts/build.js
require('./css/antd-globals-hiding-hack.css');
