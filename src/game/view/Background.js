import { Node } from "../base/Node";

export class Background extends Node {

    initView() {
        this.mainBg = this.scene.add.sprite(0, 0, "bgBlue");
         // const test = this.add.sprite(0, 0);
        // test.setTexture("bgBlue");
        this.add(this.mainBg);
    }

}