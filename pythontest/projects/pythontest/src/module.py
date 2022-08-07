#!/usr/bin/env python3 
 
from pineapple.modules import Module, Request
import logging
import pineapple.helpers.opkg_helpers as opkg

# CONSTANTS
_DEPENDENCIES = ['sqlite3', 'sqlite3-cli']
# CONSTANTS

module = Module('pythontest', logging.DEBUG) 
 
@module.handles_action('hello_world') 
def hello_world(request: Request): 
    opkg.check_if_installed('sqlite3')
    return 'Response!'

if __name__ == '__main__': 
    module.start()