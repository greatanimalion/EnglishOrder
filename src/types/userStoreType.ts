export type UserType = {
    id: string,
    account: string,
    major: string,
    name: string,
    school: string,
}
type UserStoreType = {
    userInfor:UserType
    setUserInfor: (userInfor:UserType)=>void
}
export default UserStoreType;