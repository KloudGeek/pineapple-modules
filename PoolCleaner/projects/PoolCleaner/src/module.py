#!/usr/bin/env python3
 
import subprocess
process = subprocess.Popen(['echo', 'More output'],
    stdout=subprocess.PIPE,
    stderr=subprocess.PIPE)
stdout, stderr = process.communicate()
stdout, stderr