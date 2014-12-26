'use strict';

var assign = require('object-assign');

var outputs = {
    'deckA.cue': 0x33,
    'deckA.play': 0x3b,
    'deckA.sync': 0x40,
    'deckA.pfl': 0x65,

    'deckB.cue': 0x3c,
    'deckB.play': 0x42,
    'deckB.sync': 0x47,
    'deckB.pfl': 0x66
};

var inputs = assign({
    'deckA.load': 0x4b,
    'deckA.pitchUp': 0x43,
    'deckA.pitchDown': 0x44,

    'deckA.volume': 0x08,
    'deckA.pitch': 0x0d,
    'deckA.wheel': 0x19,

    'deckB.load': 0x34,
    'deckB.pitchUp': 0x45,
    'deckB.pitchDown': 0x46,

    'deckB.volume': 0x09,
    'deckB.pitch': 0x0e,
    'deckB.wheel': 0x18,

    'browse': 0x1a,
    'back': 0x59,
    'enter': 0x5a,
    'crossfader': 0x0a,
    'masterGain': 0x17,
    'headphoneGain': 0x0b
}, outputs);

module.exports.inputs = inputs;
module.exports.outputs = outputs;
