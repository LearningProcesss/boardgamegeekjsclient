import { IBggClient, IProgressCapability } from ".";
import { BggFamilyDto, BggThingDto, BggForumlistDto, BggForumDto, BggThreadDto, BggUserDto, BggGuildDto, BggPlayDto, BggCollectionDto, BggSearchDto, BggHotDto } from "../../dto";
import { IThingRequest, IFamilyRequest, IForumlistRequest, IForumRequest, IThreadRequest, IUserRequest, IGuildRequest, IPlaysRequest, ICollectionRequest, ISearchRequest, IHotItemsRequest } from '../../request';

export type IBggThingClient = IBggClient<IThingRequest, BggThingDto> & IProgressCapability<IThingRequest, BggThingDto>;
export type IBggFamilyClient = IBggClient<IFamilyRequest, BggFamilyDto> & IProgressCapability<IFamilyRequest, BggFamilyDto>;
export type IBggForumlistClient = IBggClient<IForumlistRequest, BggForumlistDto> & IProgressCapability<IForumlistRequest, BggForumlistDto>;
export type IBggForumClient = IBggClient<IForumRequest, BggForumDto>;
export type IBggThreadClient = IBggClient<IThreadRequest, BggThreadDto>;
export type IBggUserClient = IBggClient<IUserRequest, BggUserDto>;
export type IBggGuildClient = IBggClient<IGuildRequest, BggGuildDto>;
export type IBggPlaysClient = IBggClient<IPlaysRequest, BggPlayDto>;
export type IBggCollectionClient = IBggClient<ICollectionRequest, BggCollectionDto>;
export type IBggSearchClient = IBggClient<ISearchRequest, BggSearchDto>;
export type IBggHotClient = IBggClient<IHotItemsRequest, BggHotDto>;
