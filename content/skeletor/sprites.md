---
sort: 6
---

Skeletor comes with easy ways to create 3 different types of sprites.

* [Spritesmith](https://github.com/Ensighten/grunt-spritesmith) to create a bitmap spritesheet with retina support;
* [svg-sprite](https://github.com/jkphl/svg-sprite) to create a vector spritesheet made out of svgs.
* [gulp-inline-svg](https://gitlab.sgalinski.de/toolchain/gulp-inline-svg) to inline an svg directory in the CSS.

### Bitmap

* Drop a png and corresponding retina (image@2x.png naming convention) in `src/sprites/bitmaps`
* Gulp will add your new image to the spritesheet at `Static/assets/spritesheets/bitmap.spritesheet.png` and retina sheet at `/Static/assets/spritesheets/bitmap.spritesheet@2x.png`.

Use this mixin in your sass to include sprite with retina

```sass
@include retina-sprite($nameOfImage-group); //The `-group` after the name is important.
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

### Inline

* Drop an svg in `src/sprites/inline`
* Gulp will add your new image to the sass partial at `src/scss/partials/base/_svg.scss`

You can now inline your svg into your sass with a mixin

```css
/**
@include inline-svg($nameOfImage, $fillColorString)
**/

@include inline-svg($plus, #CCC)
```