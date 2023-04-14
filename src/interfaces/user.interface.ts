interface UserInfoInterface {
    id?: number,
    active?: boolean,
    first_name: string,
    last_name:string,
    phone_number: number
}

interface UserLoginInterface{
    email: string,
    password: string,
}

interface AddressInterface{
    id?: number,
    build_number: string,
    city: string,
    region: string,
    street: string,
    zip_code: string
}
interface PhotoInterface{
    photo_url?: string | null
}

interface UserInterface extends UserInfoInterface,UserLoginInterface, PhotoInterface{
    address: AddressInterface
}

interface UserToken{
    accessToken: string,
    tokenType: string
}

interface TokenData {
    access: string;
    refresh?: string;
}

export type {
    UserLoginInterface,
    UserInterface,
    UserInfoInterface,
    AddressInterface,
    UserToken,
    TokenData,
    PhotoInterface
}




