import { Body, Controller, ParseIntPipe, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

//with controller fully defined , Nest still doens't know that AuthController exists and as a result won't create an instance of this class
@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}
		@Post('signup')
		//we can use newly created DTO inside the auth.controller
		signup(@Body() dto: AuthDto) { 
			return this.authService.signup(dto)
		}

		@Post('signin')
		signin(@Body() dto: AuthDto) {
			return this.authService.signin(dto)
		}
}

