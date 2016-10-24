---
sort: 6
---

Skeletor comes with easy ways to create 3 different types of sprites.

* [Spritesmith](https://github.com/twolfson/gulp.spritesmith) to create a bitmap spritesheet.
* [svg-sprite](https://github.com/jkphl/svg-sprite) to create a vector spritesheet made out of svgs.

### Bitmap

* Drop a png and corresponding retina (image@2x.png naming convention) in `src/sprites/bitmaps`
* Gulp will add your new image to the spritesheet at `Static/assets/spritesheets/bitmap.spritesheet.png`.

Use this mixin in your sass to include sprite

```sass
@include sprite($nameOfImage);
```

### Vector

* Drop an svg in `src/sprites/vector`
* Gulp will add your new image to the spritesheet at `Static/assets/spritesheets/vector.spritesheet.svg`

You can now utilize the svg use tag in your html!

```html
<svg>
	<use xlink:href="/Static/assets/spritesheets/vector.spritesheet.svg#nameOfImage"></use>
</svg>
```

Next: [Sprites](sprites)