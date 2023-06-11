interface cameraMode{
    camera_front: number;
    camera_back: number;
    camera_filter: string;
}
interface nightMode{
    nightMode(): void;
}

class Instagram implements cameraMode{
    constructor(
        public camera_front: number,
        public camera_back: number,
        public camera_filter: string,
    ){    }
}

class Youtube implements cameraMode, nightMode{
    constructor(
        public camera_front: number,
        public camera_back: number,
        public camera_filter: string,
        public camera_live: string,
        ){    }
         nightMode():void{

        }
}
export {}