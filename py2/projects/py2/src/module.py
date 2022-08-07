#!/usr/bin/env python3 
 
from pineapple.modules import Module, Request
import logging
import pineapple.helpers.opkg_helpers as opkg

# CONSTANTS
_DEPENDENCIES = ['sqlite3', 'sqlite3-cli']
# CONSTANTS

module = Module('py2', logging.DEBUG) 
 
@module.handles_action('hello_world') 
def hello_world(request: Request): 
#    return { opkg.check_if_installed('sqlite3') }
    return 'testing'

if __name__ == '__main__': 
    module.start()