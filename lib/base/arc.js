var Base = require('./default');
var arc = require('../svg/arc');
module.exports = Base.extend({
    // Parent generator that manages the svg
    _startCycle: function (){
        var self = this;
        var chart = self.attributes.opts.chart;
        var data = self.attributes.data;
        var svg;

        var append = this.append;
        paths = self._lifeCycleManager(data, chart, function (scale) {
            svg = self.make('svg',{
                width: chart.width,
                height: chart.height,
                viewBox: '0 0 ' + chart.width + ' ' + chart.height,
            });
            return self._describePath(scale.outerRadius, scale.relativeDataSet, scale);
        });

        return append(self.element,
                    append(svg, paths));
    },
    // Extends _defineBaseScaleProperties in lib/base/common.js
    _defineBaseScaleProperties: function (data, chart) {
        var self = this;
        var scale = {
            // Converts nums to relative => total sum equals 1
            relativeDataSet: self._dataSetRelativeToTotal(data),
            // Find the max width & height
            outerRadius: chart.outerRadius || (chart.height < chart.width ? chart.height : chart.width) / 2
        };

        self._extend(scale, chart);
        return scale;
    },
    _polarToCartesian: arc.polarToCartesian,
    _describeArc: arc.describeArc,
    _describePie: arc.describePie,
    /**
     * [_describePath super class]
     * @return {[type]} [empty string]
     */
    _describePath: function () {
        return '';
    }
});