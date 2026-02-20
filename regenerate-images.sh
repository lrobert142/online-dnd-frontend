#!/bin/bash

# Get into the correct directory
cd assets/img

# Remove the old data directories
rm -rf npc/200x300 || echo "npc/200x300 directory already deleted"
rm -rf pc/400x600 || echo "pc/400x600 directory already deleted"
rm -rf general/100x100 || echo "general/100x100 directory already deleted"
rm -rf general/200x300 || echo "general/200x300 directory already deleted"
rm -rf location/100x100 || echo "location/100x100 directory already deleted"
rm -rf location/200x200 || echo "location/200x200 directory already deleted"

# Set up new ones
mkdir npc/200x300
mkdir pc/400x600
mkdir general/100x100
mkdir general/200x300
mkdir location/100x100
mkdir location/200x200

# Create images in the right sizes (do not modify the original files)
magick mogrify -path npc/200x300 -resize 200x300 npc/*
magick mogrify -path pc/400x600 -resize 400x600 pc/*
magick mogrify -path general/100x100 -resize 200x300 general/*
magick mogrify -path general/200x300 -resize 200x300 general/*
magick mogrify -path location/100x100 -resize 100x100 location/*
magick mogrify -path location/200x200 -resize 200x200 location/*

# Done!
echo "Regenerated all images!"
