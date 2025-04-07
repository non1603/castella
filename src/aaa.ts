//クラスの基本
{
    //プロパティ
    class House {
        _color: string;
        private _rooms: number;
        address: string;

        constructor() {
            this._color = "red";
            this._rooms = 3;
            this.address = "東京都"
        }

        //ゲッター
        get rooms(): number {
            return this._rooms;
        }

        //セッター
        set rooms(count: number) {
            if (count < 0) {
                this._rooms = 0;
            }
            else {
                this._rooms = count;
            }
        }

        //ゲッター
        get color(): string {
            return this._color;
        }

        //セッター
        set color(color: string) {
            this._color = color;
        }

        activateSecurity(isOn: boolean) {
            if (isOn) {
                console.log("セキュリティ作動");
            }
            else {
                console.log("セキュリティ停止");
            }
        }

        openDoor():void {
            console.log("ドアを開けました");
        }
    }

    const redHouse = new House();
    console.log(redHouse.color);
    console.log(redHouse.rooms);
    redHouse.rooms = -3;
    console.log(redHouse.rooms);

    redHouse.activateSecurity(true);
    redHouse.activateSecurity(false);

    redHouse.openDoor();

    class House2 {
        public color: string;
        private rooms: number;
        protected address: string;

        constructor(color: string, room: number, address: string) {
            this.color = color;
            this.rooms = room;
            this.address = address;
        }

        public displayColor(): void {
            console.log(`この家は${this.color}色です`);
        }

        private countRooms(): number {
            return this.rooms
        }

        protected getAddress(): string {
            return this.address;
        }
    }

    const redHouse2 = new House2("白", 3, "千葉県");
    redHouse2.color = "赤";
    redHouse2.displayColor();

}