import { BggFamilyDto, BggThingDto, BggForumlistDto, BggForumDto, BggThreadDto, BggUserDto, BggGuildDto, BggPlayDto, BggCollectionDto } from "../../dto";
import { IThingRequest, IFamilyRequest, IForumlistRequest, IForumRequest, IThreadRequest, IUserRequest, IGuildRequest, IPlaysRequest, ICollectionRequest } from '../../request';
import { IBggClient } from "./IBggClient";

export type IBggThingClient = IBggClient<IThingRequest, BggThingDto>;
export type IBggFamilyClient = IBggClient<IFamilyRequest, BggFamilyDto>;
export type IBggForumlistClient = IBggClient<IForumlistRequest, BggForumlistDto>;
export type IBggForumClient = IBggClient<IForumRequest, BggForumDto>;
export type IBggThreadClient = IBggClient<IThreadRequest, BggThreadDto>;
export type IBggUserClient = IBggClient<IUserRequest, BggUserDto>;
export type IBggGuildClient = IBggClient<IGuildRequest, BggGuildDto>;
export type IBggPlaysClient = IBggClient<IPlaysRequest, BggPlayDto>;
export type IBggCollectionClient = IBggClient<ICollectionRequest, BggCollectionDto>;