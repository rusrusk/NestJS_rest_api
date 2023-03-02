import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

//Controllers always belong to the module, which is why we include the controllers array within the @Module() decorator. 

@Module ({
	imports: [JwtModule.register({})],
	controllers: [AuthController],
	providers: [AuthService],

})
export class AuthModule {}