const { expect } = require("chai");
const { rgbToHexColor } = require('./6.rgbToHex');

// console.log(rgbToHexColor(15, 15, 15));

describe('RGB to Hex Color Test', () => {
    it('works with 15, 15, 15 convert to #0F0F0F ', () => {
        expect(rgbToHexColor(15, 15, 15)).to.equal('#0F0F0F', 'numbers are > 255 or < 0');
    });

    it('works with white color', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF', 'numbers are > 255 or < 0');
    });

    it('works with black color', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000', 'numbers are > 255 or < 0');
    });

    it('works with UniSoft blue color #234465', () => {
        expect(rgbToHexColor(35, 68, 101)).to.equal('#234465');
    });

    it('works with valid type of parameters', () => {
        expect(rgbToHexColor(15, 15, '15')).to.be.undefined;
        expect(rgbToHexColor(15, '15', 15)).to.be.undefined;
        expect(rgbToHexColor('15', 15, 15)).to.be.undefined;

    });

    it('works within the expected upper bound range', () => {
        expect(rgbToHexColor(300, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 300, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 300)).to.be.undefined;

    });

    it('works within the expected lower bound range', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;

    });

    it('works with integers only', () => {
        expect(rgbToHexColor(1.1, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 1.1, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 1.1)).to.be.undefined;

    });

    it('works only with all 3 params', () => {
        expect(rgbToHexColor(15, 15)).to.be.undefined;
        expect(rgbToHexColor(15)).to.be.undefined;
        expect(rgbToHexColor()).to.be.undefined;
    });
});
