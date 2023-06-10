
/*
interface User {
    readonly dbId: number;
    email: string,
    userId: number,
    googleId?: string,
    // startTrial: ()=> string
    startTrial(): string,
    getCoupon(couponName: number): string
}
const paras:User = {dbId:2123,email: 'test@test.com', userId: 1, startTrial: ()=>'trial started', getCoupon:(couponName:123123)=>'50% discount' }; 
    */


// **************************Interface     Types****************************
interface  auth_provider{
    googelId: string,
}
//we can add more types here 
interface auth_provider{
    githubId: string,
}
// one more advantage is inheritance
interface Admin extends auth_provider{
    role: "admin" | "hacker" | "learner"
    adminName: string,
}
// const user:auth_provider = {googelId:'KLJN324KHJ', githubId:'GIN968KHT'};
const admin:Admin = {googelId:'KLJN324KHJ',   adminName:'paras' , githubId:'GIN968KHT', role:'hacker'};