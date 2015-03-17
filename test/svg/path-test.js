var chai = require('chai');
var expect = chai.expect;
var path = require('../../lib/svg/path');

describe('lib/svg/path', function () {
    var attr = {};
    before(function () {
        attr = {
            data: [ 211, 254, 255, 18, 210, 31, 13, 320, 328, 312, 494, 128, 83, 230, 114, 173, 90, 328, 22, 174, 88, 305, 390, 181, 481, 497, 300, 395, 88, 509 ],
            height: 100,
            width: 300
        };
    });
    it('scale calculation & structure', function () {
        var scale = path.getScale(attr);
        var result =  { min: 13,
                        max: 509,
                        maxSet: [],
                        len: 30,
                        paddingY: 5,
                        tickSize: 10.344828,
                        heightRatio: 0.17681728880157171,
                        height: 100,
                        width: 300,
                        color: [],
                        _refs: {},
                        rows: 1,
                        ySecs: 0
                    };
        expect(scale).to.deep.equal(result);
    });

    it('openPath calculation should return the proper attribute D', function () {
        var expectD = "M 0 57.69155206286837 L 10.344828 50.088408644400786 L 20.689656 49.911591355599214 L 31.034484 91.8172888015717 L 41.379312 57.86836935166994 L 51.72414 89.51866404715128 L 62.068968 92.70137524557957 L 72.41379599999999 38.41846758349705 L 82.758624 37.00392927308448 L 93.103452 39.83300589390962 L 103.44828 7.652259332023576 L 113.79310799999999 72.36738703339881 L 124.137936 80.32416502946955 L 134.482764 54.33202357563851 L 144.82759199999998 74.84282907662083 L 155.17242 64.4106090373281 L 165.517248 79.08644400785855 L 175.862076 37.00392927308448 L 186.206904 91.11001964636542 L 196.551732 64.23379174852653 L 206.89656 79.44007858546169 L 217.241388 41.07072691552063 L 227.58621599999998 26.041257367387033 L 237.93104399999999 62.99607072691552 L 248.275872 9.950884086444006 L 258.6207 7.121807465618858 L 268.965528 41.95481335952849 L 279.310356 25.15717092337917 L 289.65518399999996 79.44007858546169 L 300.00001199999997 5";
        var scale = path.getScale(attr);
        expect(expectD).to.equal(path.getOpenPath(scale, attr.data));
    });

    it('closedPath calculation should return the proper attribute D with the path closed', function () {
        var expectD = "M 0 57.69155206286837 L 10.344828 50.088408644400786 L 20.689656 49.911591355599214 L 31.034484 91.8172888015717 L 41.379312 57.86836935166994 L 51.72414 89.51866404715128 L 62.068968 92.70137524557957 L 72.41379599999999 38.41846758349705 L 82.758624 37.00392927308448 L 93.103452 39.83300589390962 L 103.44828 7.652259332023576 L 113.79310799999999 72.36738703339881 L 124.137936 80.32416502946955 L 134.482764 54.33202357563851 L 144.82759199999998 74.84282907662083 L 155.17242 64.4106090373281 L 165.517248 79.08644400785855 L 175.862076 37.00392927308448 L 186.206904 91.11001964636542 L 196.551732 64.23379174852653 L 206.89656 79.44007858546169 L 217.241388 41.07072691552063 L 227.58621599999998 26.041257367387033 L 237.93104399999999 62.99607072691552 L 248.275872 9.950884086444006 L 258.6207 7.121807465618858 L 268.965528 41.95481335952849 L 279.310356 25.15717092337917 L 289.65518399999996 79.44007858546169 L 300.00001199999997 5V 95 H 0 L 0 57.69155206286837";
        var scale = path.getScale(attr);
        expect(expectD).to.equal(path.getClosedPath(scale, attr.data));
    });
});