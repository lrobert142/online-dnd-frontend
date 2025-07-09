_The adventure begins, what joys will we encounter?_

## Getting Started

1. Regenerate images via `./regenerate-images.sh `
    1. You can skip this if you have not changed any images since the last time they were regenerated
2. Run the dev server via `pnpm dev`
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
    1. You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

Note: This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to
automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Building locally for production

Useful to checking how things render before they are deployed.

1. Regenerate images via `./regenerate-images.sh `
    1. You can skip this if you have not changed any images since the last time they were regenerated
2. Generate and output the static files via `NEXT_PUBLIC_BASE_PATH="/online-dnd-frontend/out" pnpm run build`
    1. This makes sure URL and image paths are correctly referenced
3. Open [http://localhost:63342/online-dnd-frontend/out/](http://localhost:63342/online-dnd-frontend/out/) with your
   browser.

Note: Make sure to double-check links and images as BASE_PATH can act very strange if not defined and used correctly.

- For this same reason, do **NOT** use `background-image` as it will not work properly when deployed. Use `<Image/>` and
  CSS magic instead.

## Regenerating images in correct sizes

Simply run `./regenerate-images.sh`

- Note: This will **entirely delete** all generated directories - so do not include important items in generated
  directories - but will leave the original images as-is.

### Using the correct size image

Use the `resizedImageUrl(...)` helper function instead of the raw URL. This helper method will modify the default URL to
the correct size. This way you are not loading a 10,000x10,000px image for a 50x50px icon.

## Future plans

- Add a world map that has clickable areas to enable players to 'zoom in' to that area or see character details (open in
  new tab on character list? prefill search?)
    - Will need to design a world map
    - Then see where I put Phandalin and the area
    - Then place all the NPCs in Phandalin and similar areas. Start simple and work from there.
- Mobile views! Make the website responsive so it works on any screen size (within reason)
  - This will require me to test on more devices than just my Macbook; Windows and Android especially!

### Possible long-term improvements

- Make a card (detailed) view and a way to toggle between portrait and card views?
- Update the description parsing in `npc.ts` to allow styling and references to other records. That way clicking on a
  link will bring up the other character details.
- Should I make place for random equipment and items? Like the Whisper Crystal/Whisper Coin?
- What about a tab for random creatures (like the fey creatures Sync makes up)?
