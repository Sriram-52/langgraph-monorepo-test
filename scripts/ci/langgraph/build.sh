#!/bin/bash
set -e

# Generate database artifacts
pnpm run db:generate

# Build the agents package
pnpm run build --filter=agents
