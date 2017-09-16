var getTarget = function (target) {
    var element = typeof target === 'string'
        ? document.querySelector(target)
        : target;
    if (!(element instanceof HTMLCanvasElement))
        throw 'target is not a <canvas />';
    return element;
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */



var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

var getNumber = function (range) {
    var number = Array.isArray(range)
        ? Math.random() * (range[1] - range[0]) + range[0]
        : range;
    return number;
};
var getColor = function (_a) {
    var R = _a.R, G = _a.G, B = _a.B, A = _a.A;
    var color = {
        R: ~~(getNumber(R)),
        G: ~~(getNumber(G)),
        B: ~~(getNumber(B)),
        A: getNumber(A)
    };
    return color;
};

var createBubble = function (state) {
    var bubble = {
        size: getNumber(state.size),
        color: getColor(state.color),
        position: {
            x: getNumber([0, state.width]),
            y: getNumber([0, state.height])
        }
    };
    return bubble;
};
var createBubbles = function (state) {
    var length = ~~(getNumber(state.quantity));
    var bubbles = [];
    for (var index = 0; index < length; index++)
        bubbles.push(createBubble(state));
    return bubbles;
};
var drawBubble = function (context, bubble) {
    var _a = bubble.color, R = _a.R, G = _a.G, B = _a.B, A = _a.A;
    var color = "rgba(" + R + ", " + G + ", " + B + ", " + A + ")";
    context.beginPath();
    context.arc(bubble.position.x, bubble.position.y, bubble.size / 2, 0, 2 * Math.PI);
    context.strokeStyle = color;
    context.fillStyle = color;
    context.fill();
    context.closePath();
};

var createState = function (options) { return (__assign({ isSkiping: false, ticks: 0, interval: 1, bubbles: [], width: 0, height: 0, size: [50, 100], quantity: 1, color: { R: [0, 255], G: [0, 255], B: [0, 255], A: .5 } }, options)); };
var actions = {
    countTickets: function (state) {
        state.isSkiping = state.ticks <= state.interval;
        state.ticks = state.isSkiping
            ? state.ticks + 1
            : 0;
    },
    changeBubbles: function (state, context) {
        var bubbles = state.isSkiping
            ? state.bubbles
            : state.bubbles.concat(createBubbles(state));
        context.clearRect(0, 0, state.width, state.height);
        state.bubbles = bubbles.map(function (bubble) {
            bubble.color.A = bubble.color.A - .015;
            drawBubble(context, bubble);
            return bubble;
        })
            .filter(function (bubble) { return bubble.color.A >= 0; });
    },
    changeSize: function (state, _a) {
        var width = _a.width, height = _a.height;
        state.width = width;
        state.height = height;
    }
};

var run = window.requestAnimationFrame;
var animate = function (context, state) { return run(function () {
    actions.changeBubbles(state, context);
    actions.countTickets(state);
    return animate(context, state);
}); };
var resize = function (element, state) {
    var _a = element.parentElement, width = _a.clientWidth, height = _a.clientHeight;
    element.width = width;
    element.height = height;
    actions.changeSize(state, { width: width, height: height });
};

var index = function (target, options) {
    var element = getTarget(target);
    var context = element.getContext('2d');
    var state = createState(options);
    resize(element, state);
    animate(context, state);
    window.addEventListener('resize', function () { return resize(element, state); });
};

export default index;
