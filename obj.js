#!/usr/bin/env node
"use strict";
/*
 * name     : obj.js
 * job      : pffy idioms utility class
 * task     : static methods for pinyin processing
 * git      : https://github.com/pffy/idioms-js
 * author   : The Pffy Authors https://pffy.dev
 * license  : https://opensource.org/licenses/MIT
 */

class PffyIdioms {

  // returns a string with nothing but alphanum chars 
  static pmash(str) {
    return str.toLowerCase().replace(/[^a-z0-9]/g,'');
  }
  
  // returns a string with only alpha chars
  static pbash(str) {
    return str.toLowerCase().replace(/[^a-z]/g,'');
  }
  
  // returns a string of pinyin initials
  static psmash(str) {
    return str.toLowerCase().match(/(\b(\w{1}))/g,'').join('');    
  }
  
  // returns a string of pinyin initials, ordered by alpha
  static pcrash(str) {
    return str.toLowerCase().match(/(\b(\w{1}))/g,'').sort().join('');    
  }
  
  // returns a string after removing extra spaces between words
  static vacuum(str) {
    return str.toLowerCase().replace(/[^\S\n]{2,}/g, ' ');
  }
}

module.exports = PffyIdioms;
