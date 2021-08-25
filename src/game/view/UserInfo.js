import { Node } from "../base/Node";

export class UserInfo extends Node {

    constructor(scene) {
        super(scene);
        this.setData({ type: "userInfo", userName: "", level: 1, avatarSrc: "" });
        this.on("changeData", this.changeData, this);
        this.initView();
    }

    initView() {
        if (!this.overlay) {
            this.overlay = this.scene.add.graphics();
            this.add(this.overlay);
            this.overlay.fillStyle(0x000000, 1)
            this.overlay.fillRect(0, 0, this.config.width, 250);
            this.overlay.alpha = 0.2;
        }

        if (!this.avatar) {
            this.avatar = this.scene.add.sprite(100, 100, "ava1");
            this.add(this.avatar);
        }

        if (!this.textLevel) {
            this.textLevel = this.scene.add.text(300, 100);
        }
    }

    changeData() {
        const { level, avatarSrc } = this.getData();
        if (avatarSrc) this.updateAvatar(avatarSrc);
        if (level) this.updateLevel();
    }

    updateAvatar(src) {
        this.avatar.texture = this.scene.textures.get(src);
    }

    updateLevel() {

    }


}