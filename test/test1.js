#!/usr/bin/env node
"use strict";
/*
 * name     : test1.js
 * job      : test for the PffyIdioms object
 * git      : https://github.com/pffy/idioms-js
 * author   : The Pffy Authors https://pffy.dev
 * license  : https://opensource.org/licenses/MIT
 */

console.time('t1-speed');
const str1 = 'sheng1 ri4 kuai4 le4'; 
console.log(PffyIdioms.psmash(str1));
console.timeEnd('t1-speed');
