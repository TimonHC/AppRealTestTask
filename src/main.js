import * as PIXI from 'pixi.js';
import lightingAsset from "./assets/Background/lighting.png";
import wallAsset from "./assets/Background/wall.png";
import bankrobberAsset from "./assets/Background/bankrobber.png";
import hat101Asset from "./assets/Face elements/char1_01.png";
import eye102Asset from "./assets/Face elements/char1_02.png";
import mouth103Asset from "./assets/Face elements/char1_03.png";
import neck104Asset from "./assets/Face elements/char1_04.png";
import hat201Asset from "./assets/Face elements/char2_01.png";
import eye202Asset from "./assets/Face elements/char2_02.png";
import mouth203Asset from "./assets/Face elements/char2_03.png";
import neck204Asset from "./assets/Face elements/char2_04.png";
import hat301Asset from "./assets/Face elements/char3_01.png";
import eye302Asset from "./assets/Face elements/char3_02.png";
import mouth303Asset from "./assets/Face elements/char3_03.png";
import neck304Asset from "./assets/Face elements/char3_04.png";
import hat401Asset from "./assets/Face elements/char4_01.png";
import eye402Asset from "./assets/Face elements/char4_02.png";
import mouth403Asset from "./assets/Face elements/char4_03.png";
import neck404Asset from "./assets/Face elements/char4_04.png";
import hat501Asset from "./assets/Face elements/char5_01.png";
import eye502Asset from "./assets/Face elements/char5_02.png";
import mouth503Asset from "./assets/Face elements/char5_03.png";
import neck504Asset from "./assets/Face elements/char5_04.png";
import hat601Asset from "./assets/Face elements/char6_01.png";
import eye602Asset from "./assets/Face elements/char6_02.png";
import mouth603Asset from "./assets/Face elements/char6_03.png";
import neck604Asset from "./assets/Face elements/char6_04.png";
import hat701Asset from "./assets/Face elements/char7_01.png";
import eye702Asset from "./assets/Face elements/char7_02.png";
import mouth703Asset from "./assets/Face elements/char7_03.png";
import neck704Asset from "./assets/Face elements/char7_04.png";
import finalIconAsset from "./assets/Final Screen/icon.png";
import finalButtonAsset from "./assets/Final Screen/PhoneCaseDIY_ui_playnow.png";
import tutorialLineAsset from "./assets/Tutorial/button_bg_line.png";
import tutorialPointerAsset from "./assets/Tutorial/DiamondPainitng_finger.png";

let swipesCount = 0, state, count, faceElements, background, finalIcon, finalButton, swipedContainer;

const app = new PIXI.Application({
    width: 330,
    height: 720,
});
const blurFilter1 = new PIXI.filters.BlurFilter();
document.body.appendChild(app.view);

app.loader
    .add([lightingAsset, wallAsset, bankrobberAsset])
    .add([hat101Asset, hat201Asset, hat301Asset, hat401Asset, hat501Asset, hat601Asset, hat701Asset])
    .add([eye102Asset, eye202Asset, eye302Asset, eye402Asset, eye502Asset, eye602Asset, eye702Asset])
    .add([mouth103Asset, mouth203Asset, mouth303Asset, mouth403Asset, mouth503Asset, mouth603Asset, mouth703Asset])
    .add([neck104Asset, neck204Asset, neck304Asset, neck404Asset, neck504Asset, neck604Asset, neck704Asset])
    .add([finalIconAsset, finalButtonAsset])
    .load(setup);

function setup() {
    let swipes, wall, lighting, bankrobber, face101, face102, face103, face104, face201, face202, face203, face204,
        face301, face302, face303, face304, face401, face402, face403, face404, face501, face502, face503, face504,
        face601, face602, face603, face604, face701, face702, face703, face704, faceAssetSprites, faceContainers,
        wtphotoW, wtphotoB, buttonLine, finger;

    background = new PIXI.Container();

    lighting = new PIXI.Sprite(app.loader.resources[lightingAsset].texture);
    lighting.width = app.view.width;
    lighting.height = app.view.height;
    lighting.y -= lighting.height / 5;
    background.addChild(lighting);

    bankrobber = new PIXI.Sprite(app.loader.resources[bankrobberAsset].texture);
    bankrobber.width = app.view.width / 3;
    bankrobber.height = bankrobber.width;
    bankrobber.x = app.view.width / 3;
    background.addChild(bankrobber);

    wall = new PIXI.Sprite(app.loader.resources[wallAsset].texture);
    wall.height = app.view.height;
    wall.width = app.view.width;
    wall.scale.set(0.38, 0.5);
    wall.y = app.view.height / 2 - wall.height / 3;
    wall.x = app.view.width / 2 - wall.width /2;
    background.addChild(wall);

    app.stage.addChild(background);

    { face101 = new PIXI.Sprite(app.loader.resources[hat101Asset].texture)
    face201 = new PIXI.Sprite(app.loader.resources[hat201Asset].texture)
    face301 = new PIXI.Sprite(app.loader.resources[hat301Asset].texture)
    face401 = new PIXI.Sprite(app.loader.resources[hat401Asset].texture)
    face501 = new PIXI.Sprite(app.loader.resources[hat501Asset].texture)
    face601 = new PIXI.Sprite(app.loader.resources[hat601Asset].texture)
    face701 = new PIXI.Sprite(app.loader.resources[hat701Asset].texture);


    face102 = new PIXI.Sprite(app.loader.resources[eye102Asset].texture)
    face202 = new PIXI.Sprite(app.loader.resources[eye202Asset].texture)
    face302 = new PIXI.Sprite(app.loader.resources[eye302Asset].texture)
    face402 = new PIXI.Sprite(app.loader.resources[eye402Asset].texture)
    face502 = new PIXI.Sprite(app.loader.resources[eye502Asset].texture)
    face602 = new PIXI.Sprite(app.loader.resources[eye602Asset].texture)
    face702 = new PIXI.Sprite(app.loader.resources[eye702Asset].texture)


    face103 = new PIXI.Sprite(app.loader.resources[mouth103Asset].texture)
    face203 = new PIXI.Sprite(app.loader.resources[mouth203Asset].texture)
    face303 = new PIXI.Sprite(app.loader.resources[mouth303Asset].texture)
    face403 = new PIXI.Sprite(app.loader.resources[mouth403Asset].texture)
    face503 = new PIXI.Sprite(app.loader.resources[mouth503Asset].texture)
    face603 = new PIXI.Sprite(app.loader.resources[mouth603Asset].texture)
    face703 = new PIXI.Sprite(app.loader.resources[mouth703Asset].texture)


    face104 = new PIXI.Sprite(app.loader.resources[neck104Asset].texture)
    face204 = new PIXI.Sprite(app.loader.resources[neck204Asset].texture)
    face304 = new PIXI.Sprite(app.loader.resources[neck304Asset].texture)
    face404 = new PIXI.Sprite(app.loader.resources[neck404Asset].texture)
    face504 = new PIXI.Sprite(app.loader.resources[neck504Asset].texture)
    face604 = new PIXI.Sprite(app.loader.resources[neck604Asset].texture)
    face704 = new PIXI.Sprite(app.loader.resources[neck704Asset].texture)
} //init face elements

    class interactiveContainer extends PIXI.Container {
        constructor(sprites) {
            super();
            this.width = 7*app.view.width;
            this.height = app.view.height / 7;
            this.x -= 3*app.view.width;

            for (let i = 0; i < sprites.length; i++) {
                sprites[i].width = app.view.width;
                sprites[i].height = app.view.height / 7;
                sprites[i].x = i*app.view.width;
                this.addChild(sprites[i]);
            }
            this.interactive = true;
            this.buttonMode = true;
            this
                .on('pointerdown', onDragStart)
                .on('pointerup', onDragEnd)
                .on('pointerupoutside', onDragEnd)
                .on('pointermove', onDragMove)
        }

    }

    let hat = new interactiveContainer([face101, face201, face301, face401, face501, face601, face701]);
    let eyes = new interactiveContainer([face102, face202, face302, face402, face502, face602, face702]);
    let mouth = new interactiveContainer([face103, face203, face303, face403, face503, face603, face703]);
    let neck = new interactiveContainer([face104, face204, face304, face404, face504, face604, face704]);

    faceElements = new PIXI.Container();
    hat.y += 2*app.view.height / 7;
    eyes.y += 3*app.view.height / 7;
    mouth.y += 4*app.view.height / 7;
    neck.y += 5*app.view.height / 7;
    faceElements.addChild(hat, eyes, mouth, neck)
    app.stage.addChild(faceElements);

    finalButton = new PIXI.Sprite(app.loader.resources[finalButtonAsset].texture)
    finalButton.buttonMode = true;
    finalButton.interactive = true;
    finalButton.on('pointerdown', onClick);
    finalButton.width = app.view.width / 2;
    finalButton.height = app.view.height / 9;
    finalButton.x = ((app.view.width / 2) - (finalButton.width / 2));
    finalButton.y = ((app.view.height / 2));
    app.stage.addChild(finalButton);

    finalIcon = new PIXI.Sprite(app.loader.resources[finalIconAsset].texture)
    finalIcon.width = app.view.width / 4;
    finalIcon.height = app.view.width / 4;
    finalIcon.x = ((app.view.width / 2) - (finalIcon.width / 2));
    finalIcon.y = ((app.view.height / 7));
    app.stage.addChild(finalIcon);

    state = play;
    animate();
}


function onDragStart(event) {
    this.dragData = event.data;
    this.dragging = 1;
    this.dragPointerStart = event.data.getLocalPosition(this.parent);
    this.dragObjStart = new PIXI.Point();
    this.dragObjStart.copyFrom(this.position);
    this.dragGlobalStart = new PIXI.Point();
    this.dragGlobalStart.copyFrom(event.data.global);
}

function onDragEnd() {
    if (!this.dragging) return;

    this.dragging = 0;
    this.dragData = null;
    // set the interaction data to null
}

function onDragMove() {
        if (!this.dragging) return;
        const data = this.dragData; // it can be different pointer!
        if (this.dragging === 1) {
            // click or drag?
            if (Math.abs(data.global.x - this.dragGlobalStart.x)
                + Math.abs(data.global.y - this.dragGlobalStart.y) >= 3) {
                // DRAG
                this.dragging = 2;
            }
        }
        if (this.dragging === 2) {
            swipesCount++;

            const dragPointerEnd = data.getLocalPosition(this.parent);
            // DRAG
            this.position.set(
                this.dragObjStart.x,
                this.dragObjStart.y,
            );

            if (this.dragPointerStart.x > dragPointerEnd.x) {
                this.dragging = 0;

                swipedContainer = this;
                swipedContainer.direction = 'left';

                state = swipe;
            }

            if (this.dragPointerStart.x < dragPointerEnd.x) {
                this.dragging = 0;

                swipedContainer = this;
                swipedContainer.direction = 'right';

                state = swipe;
            }

        }
}

function swipe() {

    swipedContainer.interactive = false;
    swipedContainer.direction === 'left' ? swipedContainer.x -= 11 : swipedContainer.x += 11;


    if (Math.floor(swipedContainer.x) % app.view.width === 0) {
        swipedContainer.dragging = 0;
        swipedContainer.dragData = null;
        swipedContainer.interactive = true;
        swipedContainer = null;

        swipesCount === 3 ? state = finalScreen : state = play;
    }

}


function onClick() {
    window.open("https://www.google.com");
}

function tutorial() {

}

function play() {
    faceElements.visible = true;
    finalButton.visible = false;
    finalIcon.visible = false;
}

function finalScreen() {
        background.filters = [blurFilter1];
        faceElements.visible = false;
        finalIcon.visible = true;
        finalButton.visible = true;

        count = 0.25;
        const blurAmount = Math.cos(count);
        blurFilter1.blur = 20 * (blurAmount);
}


function animate() {
    app.renderer.render(app.stage);
    state();
    requestAnimationFrame( animate );
}
