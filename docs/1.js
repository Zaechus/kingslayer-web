(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,function(e,n,o){"use strict";o.r(n);var t=o(2);Object(t.m)(String.raw`{
    "curr_room": "Circle Room",
    "rooms": {
        "Closet": {
            "name": "Closet",
            "desc": "This isn't a very large or clean closet.",
            "paths": {
                "door": {
                    "target": "Circle Room",
                    "desc": "The door leads back into the room.",
                    "inspection": "The door is plain and wooden.",
                    "is_closed": false
                }
            },
            "enemies": {},
            "allies": {},
            "items": {}
        },
        "Small Cave": {
            "name": "Small Cave",
            "desc": "This isn't a very large or clean closet.",
            "paths": {
                "s": {
                    "target": "Circle Room",
                    "desc": "The opening of the cave leads south back into the circle room.",
                    "inspection": "The edges of the opening are cracked and rough."
                }
            },
            "enemies": {},
            "allies": {
                "old man": {
                    "hp": 1,
                    "name": "old man",
                    "desc": "An old man stoically stands at the back of the gave.",
                    "inspection": "\"Take the sword, brave one.\""
                }
            },
            "items": {
                "iron sword": {
                    "name": "iron sword",
                    "desc": "There is an iron sword on the ground.",
                    "inspection": "The iron sword is of crude workmanship, but it should be usable.",
                    "damage": 6
                }
            }
        },
        "Circle Room": {
            "name": "Circle Room",
            "desc": "You stand in a circular room crafted in stone.",
            "paths": {
                "door": {
                    "target": "Closet",
                    "desc": "There is a door on one side.",
                    "inspection": "The door is plain and wooden.",
                    "is_closed": true
                },
                "n": {
                    "target": "Small Cave",
                    "desc": "There is a mouth of a cave to the north.",
                    "inspection": "The cave opening glows with a soft flickering light."
                },
                "s": {
                    "target": "Long Hallway",
                    "desc": "There is a hallway to the south.",
                    "inspection": "The hallway seems narrow and foreboding."
                },
                "e": {
                    "target": "Next Room",
                    "desc": "There is a pathway to the east.",
                    "inspection": "The opening is spacious."
                }
            },
            "enemies": {},
            "allies": {},
            "items": {
                "leather armor": {
                    "name": "leather armor",
                    "desc": "There is a set of leather armor lying in a heap.",
                    "inspection": "The armor is worn but light and sturdy.",
                    "armor_class": 11
                },
                "leaf": {
                    "name": "leaf",
                    "desc": "A leaf lies on the ground.",
                    "inspection": "It's small, brown, and dry."
                }
            }
        },
        "Next Room": {
            "name": "Next Room",
            "desc": "You are in the next room over.",
            "paths": {
                "w": {
                    "target": "Circle Room",
                    "desc": "There is a pathway to the west.",
                    "inspection": "The path expands into a larger room."
                }
            },
            "enemies": {
                "ogre": {
                    "hp": 10,
                    "xp": 15,
                    "damage": 4,
                    "name": "ogre",
                    "desc": "The ogre stands there menacingly with a club.",
                    "inspection": "The ogre is holding a long club made of wood. He is wearing nothing but a loincloth and a leather jerkin.",
                    "is_angry": false,
                    "loot": {
                        "club": {
                            "name": "club",
                            "desc": "There is a club on the ground.",
                            "inspection": "The club is very thick and heavy.",
                            "damage": 4
                        }
                    }
                },
                "goblin": {
                    "hp": 7,
                    "xp": 10,
                    "damage": 2,
                    "name": "goblin",
                    "desc": "The goblin cowers in a corner holding a knife.",
                    "inspection": "The goblin is small, grey-green, and skinny. He is brandishing a knife.",
                    "is_angry": false,
                    "loot": {}
                }
            },
            "allies": {},
            "items": {}
        },
        "Long Hallway": {
            "name": "Long Hallway",
            "desc": "You are in a long, dark hallway.",
            "paths": {
                "n": {
                    "target": "Circle Room",
                    "desc": "There is a room to the north.",
                    "inspection": "The hallway seems narrow and foreboding."
                }
            },
            "enemies": {},
            "allies": {},
            "items": {
                "large capsule": {
                    "name": "large capsule",
                    "desc": "There is a large capsule here.",
                    "inspection": "The capsule appears to be able to hold things.",
                    "is_closed": true,
                    "contents": {
                        "curious object": {
                            "name": "curious object",
                            "desc": "There is a curious object here.",
                            "inspection": "The object's appearance confuses your weak mind."
                        }
                    }
                }
            }
        }
    }
}`)},function(e,n,o){"use strict";o.d(n,"m",(function(){return b})),o.d(n,"f",(function(){return v})),o.d(n,"e",(function(){return k})),o.d(n,"j",(function(){return C})),o.d(n,"b",(function(){return R})),o.d(n,"l",(function(){return x})),o.d(n,"g",(function(){return _})),o.d(n,"d",(function(){return j})),o.d(n,"i",(function(){return A})),o.d(n,"h",(function(){return H})),o.d(n,"a",(function(){return N})),o.d(n,"k",(function(){return O})),o.d(n,"c",(function(){return S}));var t=o(3);const r=new Array(32);function a(e){return r[e]}r.fill(void 0),r.push(void 0,null,!0,!1);let i=r.length;function s(e){const n=a(e);return function(e){e<36||(r[e]=i,i=e)}(e),n}let c=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});c.decode();let l=null;function u(){return null!==l&&l.buffer===t.e.buffer||(l=new Uint8Array(t.e.buffer)),l}function d(e,n){return c.decode(u().subarray(e,e+n))}let h=0,f=new TextEncoder("utf-8");const g="function"==typeof f.encodeInto?function(e,n){return f.encodeInto(e,n)}:function(e,n){const o=f.encode(e);return n.set(o),{read:e.length,written:o.length}};function m(e,n,o){if(void 0===o){const o=f.encode(e),t=n(o.length);return u().subarray(t,t+o.length).set(o),h=o.length,t}let t=e.length,r=n(t);const a=u();let i=0;for(;i<t;i++){const n=e.charCodeAt(i);if(n>127)break;a[r+i]=n}if(i!==t){0!==i&&(e=e.slice(i)),r=o(r,t,t=i+3*e.length);const n=u().subarray(r+i,r+t);i+=g(e,n).written}return h=i,r}let p=null;function w(){return null!==p&&p.buffer===t.e.buffer||(p=new Int32Array(t.e.buffer)),p}function b(e){var n=m(e,t.c,t.d),o=h;t.f(n,o)}function y(e){i===r.length&&r.push(r.length+1);const n=i;return i=r[n],r[n]=e,n}function T(e,n){return u().subarray(e/1,e/1+n)}const v=function(e,n,o){var r=m(prompt(d(n,o)),t.c,t.d),a=h;w()[e/4+1]=a,w()[e/4+0]=r},k=function(){return y(new Error)},C=function(e,n){var o=m(a(n).stack,t.c,t.d),r=h;w()[e/4+1]=r,w()[e/4+0]=o},R=function(e,n){try{console.error(d(e,n))}finally{t.b(e,n)}},x=function(e){s(e)},_=function(e,n,o){a(e).randomFillSync(T(n,o))},j=function(e,n,o){a(e).getRandomValues(T(n,o))},A=function(){try{return y(self.self)}catch(e){!function(e){t.a(y(e))}(e)}},H=function(e,n){return y(o(4)(d(e,n)))},N=function(e){return y(a(e).crypto)},O=function(e){return void 0===a(e)},S=function(e){return y(a(e).getRandomValues)}},function(e,n,o){"use strict";var t=o.w[e.i];e.exports=t;o(2);t.g()},function(e,n){function o(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}o.keys=function(){return[]},o.resolve=o,e.exports=o,o.id=4}]]);