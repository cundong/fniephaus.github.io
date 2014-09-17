import sys
import time
from py_w3c.validators.html.validator import HTMLValidator

with open('CNAME', 'r') as f:
    cname = f.readline().splitlines()[0]

vld = HTMLValidator()
vld.validate("http://%s/" % cname)

if len(vld.errors) > 0:
    for error in vld.errors:
        print "#%s: %s" % (error['line'], error['message'])
    sys.exit(1)

print ''
print 'W3C validation passed'
