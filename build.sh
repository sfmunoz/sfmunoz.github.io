#!/bin/bash
#
# Date:   Sat Aug 30 05:07:55 PM UTC 2025
# Issue:  https://github.com/sfmunoz/sfmunoz.github.io/issues/23
#

set -e

cd "$(dirname "$0")"

set -x

rm -rf build
pnpm run build

# temporary hack to avoid empty folders with just the hydration data
# doesn't work as expected because of the routes depth
#find build/tips -mindepth 1 -maxdepth 1 -type d | \
#  awk '{ print "cp " $1 ".html " $1 "/index.html" }' | \
#  bash -x
