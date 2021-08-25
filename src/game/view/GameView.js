import { Node } from "../base/Node";
import { Background } from "./Background";
import { UserInfo } from "./UserInfo";

export class GameView extends Node {

    initView() {
        this.background = new Background(this.scene);
        this.add(this.background);
        this.myInfo = new UserInfo(this.scene);
        this.add(this.myInfo);
    }

}