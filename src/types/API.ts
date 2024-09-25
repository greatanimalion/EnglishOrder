import { UserType } from "./userStoreType";
interface ResponseType {
    status: number;
    data: any;
    config: any;
    statusText: string;
    headers: any;
    request: any;
}
export type loginResponseType = Omit<ResponseType, "data"> & {
    data:{
        message: string;
        result:UserType;
    }
}