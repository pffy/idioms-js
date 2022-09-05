#!/usr/bin/env node
"use strict";
/*
 * name     : test1.js
 * job      : test for the PffyIdioms object
 * git      : https://github.com/pffy/idioms-js
 * author   : The Pffy Authors https://pffy.dev
 * license  : https://opensource.org/licenses/MIT
 */

// object for static methods
const PffyIdioms = require('../obj');

console.time('t1-speed');

// sample pinyin string
const happybday = 'sheng1 ri4 kuai4 le4';
console.log('"%s"', happybday);
console.log();

// pbash - indexing pinyin string used in Hanyu Pinyin dictionary or pinyin document search
console.log('PffyIdioms.pbash("%s")', happybday);
console.log(PffyIdioms.pbash(happybday));
console.log();

// psmash - indexing pinyin string used in Input Method Editors (IMEs)
console.log('PffyIdioms.psmash("%s")', happybday);
console.log(PffyIdioms.psmash(happybday));
console.log();

console.timeEnd('t1-speed');
