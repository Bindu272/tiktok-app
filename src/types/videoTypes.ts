export interface VideoContainerProps{
    url:string;
    autoplay:boolean;
    username:string;
    song:string;
    description:string;
    shares:number
    likes:number
    comments:number
    saves:number
profilePic:any
    setVideoRef:(ref:HTMLVideoElement|null)=>void
}

export interface LeftFooterProps{
    username:string;
    description:string;
    song:string;
}

export interface RightFooterProps{
    shares:number
    likes:number
    comments:number
    saves:number
profilePic:any
}