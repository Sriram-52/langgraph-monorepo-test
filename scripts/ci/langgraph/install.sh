#!/bin/bash
set -e

# Prune the agents package
npx turbo prune agents --docker

# Install dependencies
cd out/json && pnpm install && cd ../..

# Move node_modules from apps and packages subdirectories to their corresponding locations
# First move root node_modules if it exists
if [ -d "out/json/node_modules" ]; then
    mv out/json/node_modules node_modules
fi

# Move node_modules from apps subdirectories
if [ -d "out/json/apps" ]; then
    find out/json/apps -maxdepth 2 -name 'node_modules' -type d | while read dir; do 
        target=$(echo "$dir" | sed 's|out/json/||')
        mkdir -p $(dirname "$target")
        mv "$dir" "$target"
    done
fi

# Move node_modules from packages subdirectories
if [ -d "out/json/packages" ]; then
    find out/json/packages -maxdepth 2 -name 'node_modules' -type d | while read dir; do 
        target=$(echo "$dir" | sed 's|out/json/||')
        mkdir -p $(dirname "$target")
        mv "$dir" "$target"
    done
fi

# Remove the out directory
rm -rf out
