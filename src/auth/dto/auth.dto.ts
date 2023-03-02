import { 
	IsEmail,
	IsNotEmpty,
	IsString, 
} from "class-validator";

//ouyr validation pipe can filter out propertes that should not be received by the method handler.

//dto -> Data Transfer Object is an object that defines how the data will be sent over the network. 
export class AuthDto {
	@IsEmail()
	@IsNotEmpty()
	email: string;

	@IsString()
	@IsNotEmpty()
	password: string;
}