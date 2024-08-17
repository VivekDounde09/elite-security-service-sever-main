import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  ParseEnumPipe,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from "@nestjs/common";
import { ApiBearerAuth, ApiParam, ApiTags } from "@nestjs/swagger";
import { UserStatus } from "@prisma/client";
import {
  AuthenticatedRequest,
  BaseController,
  JwtAuthGuard,
  RolesGuard,
  UserType,
  Roles,
  // AccessGuard,
} from "@Common";
import { UsersService } from "./users.service";
import {
  ChangePasswordRequestDto,
  ContactRequestDto,
  GetUsersRequestDto,
  UpdateProfileDetailsRequestDto,
  UpdateProfileImageRequestDto,
  UpdateUserProfileRequestDto,
} from "./dto";

@ApiTags("User")
@Controller("users")
export class UsersController extends BaseController {
  constructor(private readonly usersService: UsersService) {
    super();
  }

  // @ApiBearerAuth()
  // @Roles(UserType.Admin)
  // @UseGuards(JwtAuthGuard, AccessGuard, RolesGuard)
  // @Get()
  // async getUsers(@Query() query: GetUsersRequestDto) {
  //   return await this.usersService.getAll({
  //     search: query.search,
  //     skip: query.skip,
  //     take: query.take,
  //   });
  // }

  // @ApiBearerAuth()
  // @UseGuards(JwtAuthGuard)
  // @Get("me")
  // async getProfile(@Req() req: AuthenticatedRequest) {
  //   const ctx = this.getContext(req);
  //   return await this.usersService.getProfile(ctx.user.id);
  // }

  // @ApiBearerAuth()
  // @UseGuards(JwtAuthGuard)
  // @Patch("me")
  // async updateProfileDetails(
  //   @Req() req: AuthenticatedRequest,
  //   @Body() data: UpdateProfileDetailsRequestDto
  // ) {
  //   if (data.mobile && (!data.dialCode || !data.country)) {
  //     throw new BadRequestException();
  //   }
  //   const ctx = this.getContext(req);
  //   await this.usersService.updateProfileDetails({
  //     userId: ctx.user.id,
  //     username: data.username,
  //     firstname: data.firstname,
  //     lastname: data.lastname,
  //     email: data.email,
  //     dialCode: data.dialCode,
  //     mobile: data.mobile,
  //     country: data.country,
  //   });
  //   return { status: "success" };
  // }

  // @ApiBearerAuth()
  // @Roles(UserType.Admin)
  // @UseGuards(JwtAuthGuard, AccessGuard, RolesGuard)
  // @Get(":userId")
  // async getUserProfile(@Param("userId", ParseIntPipe) userId: number) {
  //   return await this.usersService.getProfile(userId);
  // }

  // @ApiBearerAuth()
  // @Roles(UserType.Admin)
  // @UseGuards(JwtAuthGuard, AccessGuard, RolesGuard)
  // @Patch(":userId")
  // async updateUserProfileDetails(
  //   @Param("userId", ParseIntPipe) userId: number,
  //   @Body() data: UpdateUserProfileRequestDto
  // ) {
  //   return await this.usersService.updateProfileDetailsByAdministrator({
  //     userId,
  //     username: data.username,
  //     firstname: data.firstname,
  //     lastname: data.lastname,
  //     email: data.email,
  //     dialCode: data.dialCode,
  //     mobile: data.mobile,
  //     country: data.country,
  //     password: data.password,
  //   });
  // }

  // @ApiBearerAuth()
  // @UseGuards(JwtAuthGuard)
  // @Post("me/profile-image")
  // updateProfileImage(
  //   @Req() req: AuthenticatedRequest,
  //   @Body() data: UpdateProfileImageRequestDto
  // ) {
  //   const ctx = this.getContext(req);
  //   return this.usersService.updateProfileImage(ctx.user.id, data.profileImage);
  // }

  @Post("me/contact")
  async contactAdmin(@Body() data: ContactRequestDto) {
    await this.usersService.contactAdmin({
      email: data.email,
      contactNumber: data.mobile,
      message: data.message,
    });
    return { status: "success" };
  }

  // @ApiBearerAuth()
  // @UseGuards(JwtAuthGuard)
  // @Post("me/change-password")
  // async changePassword(
  //   @Req() req: AuthenticatedRequest,
  //   @Body() data: ChangePasswordRequestDto
  // ) {
  //   const ctx = this.getContext(req);
  //   await this.usersService.changePassword(
  //     ctx.user.id,
  //     data.oldPassword,
  //     data.newPassword
  //   );
  //   return { status: "success" };
  // }

  // @ApiParam({ name: "status", enum: UserStatus })
  // @ApiBearerAuth()
  // @Roles(UserType.Admin)
  // @UseGuards(JwtAuthGuard, AccessGuard, RolesGuard)
  // @Post(":userId/:status")
  // async setUserStatus(
  //   @Param("userId", ParseIntPipe) userId: number,
  //   @Param("status", new ParseEnumPipe(UserStatus)) status: UserStatus
  // ) {
  //   await this.usersService.setStatus(userId, status);
  //   return { status: "success" };
  // }
}
