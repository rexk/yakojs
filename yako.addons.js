/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["yako"]["addons"] = __webpack_require__(3);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    label: __webpack_require__(4)
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var label = module.exports = {
	    // Applies the label prior to the graph is generate
	    preRender: function (immutableScale) {
	        var self = this;
	        var opts = self.attributes.opts;
	        var chart = opts.chart;
	        var xAxis = chart.xAxis || opts.xAxis;
	        var yAxis = chart.yAxis || opts.yAxis;
	        var paths = [];
	        // simple hnadOff
	        if (yAxis) {
	            paths.push(self.describeYAxis(immutableScale, yAxis));
	        }
	        // xAxis depends on scale.tickSize
	        if (xAxis) {
	          paths.push(self.describeXAxis(immutableScale, xAxis));
	        }
	        return {
	            prepend: paths
	        };
	    },
	    // Applies the external props to scale
	    // TODO:: Allow proper padding adjustment for single / multi axis
	    _getExternalProps: function (scale, yAxis, xAxis) {
	      var self = this;
	      if (yAxis) {
	        scale.paddingLeft = scale.paddingRight = 30;
	      }

	      if (xAxis) {
	        scale.paddingTop = scale.paddingBottom = 20;
	      }
	      if (!scale.pHeight && yAxis) {
	        scale.pHeight = scale.height - scale.paddingTop - scale.paddingBottom;
	      }
	      if (!scale.pWidth && xAxis) {
	        scale.pWidth = scale.width - scale.paddingLeft - scale.paddingRight;
	      }
	      if(scale.type == 'bar') {
	        scale.tickSize = scale.pWidth / scale.len;
	      }

	      if (scale.type == 'bubble-scattered') {
	        var len = (xAxis.labels ? xAxis.labels.length : 2);
	        scale.tickSize = scale.pWidth / len;
	        scale.prefLen = len;
	        if (!xAxis.labels) {
	            console.warn('Attempting to use labels with `bubble graph` type:scattered, without defining custom labels');
	        }
	      }
	    },
	    // TODO:: Support custom targets
	    // Describes the lable for y axis
	    describeYAxis: function (scale, opts) {
	        var self = this;
	        var axis = [];
	        var labels = [];
	        var y = rows = scale.rows;
	        var max = scale.max;
	        var ySegments = scale.ySecs;
	        opts = opts || {};
	        if (scale.type == 'bubble-scattered') {
	            max = [max[1]];
	        }
	        if ((!opts.hasOwnProperty('multi')) || (!opts.multi)) {
	            y = rows = 1;
	            if (!((max instanceof Array) || (max instanceof Object))) {
	                max = [max];
	            }
	            ySegments = [ySegments];
	        }
	        var partialHeight = scale.pHeight;
	        var paddingY = scale.paddingY || scale.paddingTop;
	        var paddingX = scale.paddingX || scale.paddingLeft - 5;

	        // Goes through the number of yaxis need
	        while (y--) {
	            var g = self.make('g');
	            var splits = fSplits = ySegments[y];
	            var heightFactor = partialHeight / splits;
	            var xCord = ((y + 1) % 2 === 0 ? scale.width - y * paddingX : (y+1) * paddingX);
	            labels = [];
	            splits += 1;
	            while(splits--) {
	                labels.push(self.make('text',{
	                    y: paddingY + (heightFactor * splits),
	                    x: xCord,
	                    'font-size': opts.fontSize || 12,
	                    'text-anchor': (y + 1) % 2 === 0 ? 'start' : 'end',
	                    fill: opts.color || '#333',
	                }, null, max[y] / fSplits * (fSplits - splits)));
	            }
	            // building the border
	            xCord = ( (y + 1) % 2 === 0) ? xCord - 5 : xCord + 5;
	            labels.push(self.make('path',{
	              'd' : 'M' + xCord + ' 0L' + xCord + ' ' + (partialHeight + paddingY),
	              'stroke-width': '1',
	              'stroke': opts.multi ? scale.color[y] : '#c0c0c0',
	              'fill': 'none',
	              'opacity': '1',
	              'stroke-linecap': 'round'
	            }));
	            axis.push(self.append(g, labels));
	        }
	        return axis;
	    },
	    // TODO:: support custom format
	    // Describes the label for x axis
	    // For simplicity lets only consider dateTime format atm
	    describeXAxis: function (scale, opts) {
	        var self = this;
	        var g = self.make('g');
	        var labels = [];
	        var partialHeight = scale.pHeight;
	        var tickSize = scale.tickSize;
	        var paddingX = scale.paddingX || scale.paddingLeft;
	        var paddingY = scale.paddingY ? scale.paddingY * 2 - 8 : (scale.paddingTop + scale.paddingBottom) - 8;
	        var yAxis = partialHeight + paddingY;
	        var form = opts.format == 'dateTime' ? true : false;
	     
	        if (form) {
	            //to get the UTC time stamp multiplexer
	            var tick = opts.interval;
	            var utc = self._utcMultiplier(opts.interval);
	            var tickInterval =  (/\d+/.test(tick) ? tick.match(/\d+/)[0] : 1);
	            var format = opts.dateTimeLabelFormat;
	            var base = opts.minUTC;
	        }

	        var offset = 1;
	        if (scale.type == 'bar' || !form) {
	            offset = 0;
	        }

	        for (var i = offset; i < (scale.prefLen || scale.len) - offset; i++) {
	            labels.push(self.make('text',{
	                y: yAxis,
	                x: (tickSize * i) + paddingX + (scale.type == 'bar' ? tickSize / 4 : 0 ),
	                'font-size': opts.fontSize || 12,
	                'text-anchor': opts.textAnchor || 'start',
	                fill: opts.color || '#333',
	            }, null, (form ? self._formatTimeStamp(format, base + (utc * i)) : opts.labels[i] || 0)));
	        }

	        labels.push(self.make('path',{
	          'd' : 'M' + (scale.paddingLeft) + ' ' + (yAxis - 12) + ' L' + (scale.width - scale.paddingRight) + ' ' + (yAxis - 12),
	          'stroke-width': '1',
	          'stroke': '#c0c0c0',
	          'fill': 'none',
	          'opacity': '1',
	          'stroke-linecap': 'round'
	        }));

	        return [self.append(g, labels)];
	    },
	    // Determines the utc multiplier
	    _utcMultiplier: function(tick) {
	        var mili = 1e3,
	            s = 60,
	            m = 60,
	            h = 24,
	            D = 30,
	            M = 12,
	            Y = 1,
	            multiplier = 0;
	        if (/s$/.test(tick))
	            multiplier = mili;
	        else if (/m$/.test(tick))
	            multiplier = s * mili;
	        else if (/h$/.test(tick))
	            multiplier = s * m * mili;
	        else if (/D$/.test(tick))
	            multiplier = s * m * h * mili;
	        else if (/M$/.test(tick))
	            multiplier = s * m * h * D * mili;
	        else if (/Y$/.test(tick))
	            multiplier = s * m * h * D * M * mili;

	        return multiplier;
	    },
	    // Formats the time stamp
	    // TODO:: Create a template to speed up the computation
	    _formatTimeStamp: function (str, time) {
	        var dateObj = new Date(time),
	            flag = false;

	        if (/YYYY/.test(str))
	            str = str.replace('YYYY',dateObj.getFullYear());
	        else if (/YY/.test(str))
	            str = str.replace('YY',(dateObj.getFullYear()).toString().replace(/^\d{1,2}/,''));

	        if (/hh/.test(str) && /ap/.test(str)) {
	          if ((dateObj.getHours())  > 11)
	            str = str.replace(/hh/, (dateObj.getHours() - 12 === 0 ? 12 : dateObj.getHours() - 12))
	                    .replace(/ap/, 'pm');
	          else
	            str = str.replace(/hh/, (dateObj.getHours() === 0 ? 12 :  dateObj.getHours()))
	                    .replace(/ap/,'am');
	        } else
	          str = str.replace(/hh/, (dateObj.getHours() === 0 ? 12 :  dateObj.getHours()));

	        str = str.replace(/MM/,dateObj.getMonth()+1)
	            .replace(/DD/, dateObj.getDate());

	        if (/mm/.test(str) && /ss/.test(str)) {
	            str = str.replace(/mm/,(dateObj.getMinutes().toString().length == 1 ? '0'+dateObj.getMinutes(): dateObj.getMinutes()))
	            .replace(/ss/,(dateObj.getSeconds().toString().length == 1 ? '0'+dateObj.getSeconds(): dateObj.getSeconds()));
	        } else {
	            str = str.replace(/mm/,dateObj.getMinutes())
	            .replace(/ss/,dateObj.getSeconds());
	        }
	        return str;
	    }
	};


/***/ }
/******/ ])