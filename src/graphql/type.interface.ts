export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any };
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any };
};

export type AccessLog = Node & {
  __typename?: "AccessLog";
  consumerId: Scalars["String"]["output"];
  count: Scalars["Float"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  id: Scalars["ID"]["output"];
  method: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
};

export type ActivityLog = {
  __typename?: "ActivityLog";
  content: Scalars["String"]["output"];
  date: Scalars["String"]["output"];
  email: Scalars["String"]["output"];
  userId: Scalars["String"]["output"];
};

export type AdminUpdateUserInput = {
  businessEmail?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["String"]["input"];
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  isAdmin?: InputMaybe<Scalars["Boolean"]["input"]>;
  organizationDomain?: InputMaybe<Scalars["String"]["input"]>;
  organizationName?: InputMaybe<Scalars["String"]["input"]>;
  organizationUrl?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  position?: InputMaybe<Scalars["String"]["input"]>;
};

/** AuthConnection */
export type AuthConnection = {
  __typename?: "AuthConnection";
  accessToken: Scalars["String"]["output"];
  refreshToken: Scalars["String"]["output"];
  user: User;
};

export type BasePaginationMeta = {
  __typename?: "BasePaginationMeta";
  currentPage: Scalars["Float"]["output"];
  itemCount: Scalars["Float"]["output"];
  itemsPerPage: Scalars["Float"]["output"];
  totalItems: Scalars["Float"]["output"];
  totalPages: Scalars["Float"]["output"];
};

export type CheckEmailInput = {
  email: Scalars["String"]["input"];
  id?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateProjectInput = {
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  name: Scalars["String"]["input"];
  type: ProjectTypeEnum;
};

export type CreateTierInput = {
  day?: InputMaybe<Scalars["Float"]["input"]>;
  desc?: InputMaybe<Array<Scalars["String"]["input"]>>;
  hour?: InputMaybe<Scalars["Float"]["input"]>;
  isActive: Scalars["Boolean"]["input"];
  isCustom: Scalars["Boolean"]["input"];
  minute?: InputMaybe<Scalars["Float"]["input"]>;
  month?: InputMaybe<Scalars["Float"]["input"]>;
  name: Scalars["String"]["input"];
  price: Scalars["Float"]["input"];
  second?: InputMaybe<Scalars["Float"]["input"]>;
  year?: InputMaybe<Scalars["Float"]["input"]>;
};

export type CreateUserInput = {
  businessEmail?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  isActive: Scalars["Boolean"]["input"];
  isAdmin: Scalars["Boolean"]["input"];
  organizationDomain?: InputMaybe<Scalars["String"]["input"]>;
  organizationName?: InputMaybe<Scalars["String"]["input"]>;
  organizationUrl?: InputMaybe<Scalars["String"]["input"]>;
  password: Scalars["String"]["input"];
  phone?: InputMaybe<Scalars["String"]["input"]>;
  position?: InputMaybe<Scalars["String"]["input"]>;
};

export type DashboardMethodCountItem = {
  __typename?: "DashboardMethodCountItem";
  count: Scalars["String"]["output"];
  method: Scalars["String"]["output"];
};

export type DashboardMethodCountResponse = {
  __typename?: "DashboardMethodCountResponse";
  area: Array<DashboardMethodCountTimeLineItem>;
  bar: Array<DashboardMethodCountItem>;
};

export type DashboardMethodCountTimeLineItem = {
  __typename?: "DashboardMethodCountTimeLineItem";
  count: Scalars["String"]["output"];
  datetime: Scalars["String"]["output"];
  method: Scalars["String"]["output"];
};

export type DashboardRequestVolumnItem = {
  __typename?: "DashboardRequestVolumnItem";
  count: Scalars["String"]["output"];
  datetime: Scalars["String"]["output"];
};

export type DashboardRequestVolumnResponse = {
  __typename?: "DashboardRequestVolumnResponse";
  data: Array<DashboardRequestVolumnItem>;
};

export const enum FileType {
  DIR = "DIR",
  FILE = "FILE",
}

export type LoginInput = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MakeResetPasswordRequestInput = {
  email: Scalars["String"]["input"];
  forAdmin?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Media = Node & {
  __typename?: "Media";
  createdAt: Scalars["DateTime"]["output"];
  filePath: Scalars["String"]["output"];
  fileSize?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["ID"]["output"];
  isDeleted: Scalars["Boolean"]["output"];
  mediaType?: Maybe<MediaTypeEnum>;
  mediumUrl: Scalars["String"]["output"];
  mimeType?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  originalUrl: Scalars["String"]["output"];
  owner?: Maybe<User>;
  ownerId?: Maybe<Scalars["String"]["output"]>;
  smallUrl: Scalars["String"]["output"];
  thumbUrl?: Maybe<Scalars["String"]["output"]>;
  type: FileType;
  updatedAt: Scalars["DateTime"]["output"];
};

export type MediaConnection = {
  __typename?: "MediaConnection";
  items?: Maybe<Array<Media>>;
  meta: BasePaginationMeta;
};

export const enum MediaTypeEnum {
  FILE = "FILE",
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
}

export type Mutation = {
  __typename?: "Mutation";
  adminCreateUser: User;
  adminUpdateTierRequestStatus: TierRequest;
  adminUpdateUser: User;
  adminUploadBase64File: Media;
  /** Upload an image with base64 format. The returning includes originalUrl = filePath, smallUrl and mediumUrl for thumbnail */
  adminUploadBase64Image: Media;
  approveTierRequest: Scalars["Boolean"]["output"];
  /** Check email can use, return true if can. */
  checkEmailCanUse: Scalars["Boolean"]["output"];
  createProject: Project;
  createTier: Tier;
  createTierRequest: TierRequest;
  deleteProject: Scalars["Boolean"]["output"];
  deleteTier: Scalars["Boolean"]["output"];
  deleteTierRequest: Scalars["Boolean"]["output"];
  deleteUser: Scalars["Boolean"]["output"];
  /** Login with email */
  login: AuthConnection;
  /** Login to dashboard with admin user */
  loginAdmin: AuthConnection;
  logout: Scalars["Boolean"]["output"];
  /** Make reset password request */
  makeResetPasswordRequest: Scalars["Boolean"]["output"];
  removeMedia: Media;
  /** Reset password */
  resetPassword: Scalars["Boolean"]["output"];
  /** Siggup with email */
  signUp: Scalars["Boolean"]["output"];
  swapTier: Scalars["Boolean"]["output"];
  updateMedia: Media;
  updateProject: Project;
  updateTier: Tier;
  updateUser: User;
  uploadBase64File: Media;
  /** Upload an image with base64 format. The returning includes originalUrl = filePath, smallUrl and mediumUrl for thumbnail */
  uploadBase64Image: Media;
  verifyEmail: AuthConnection;
  /** Verify reset password token */
  verifyResetPasswordToken: Scalars["Boolean"]["output"];
};

export type MutationAdminCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationAdminUpdateTierRequestStatusArgs = {
  id: Scalars["String"]["input"];
  status: TierRequestStatusEnum;
};

export type MutationAdminUpdateUserArgs = {
  input: AdminUpdateUserInput;
};

export type MutationAdminUploadBase64FileArgs = {
  input: UploadBase64MediaInput;
};

export type MutationAdminUploadBase64ImageArgs = {
  input: UploadBase64ImageInput;
};

export type MutationApproveTierRequestArgs = {
  id: Scalars["String"]["input"];
};

export type MutationCheckEmailCanUseArgs = {
  input: CheckEmailInput;
};

export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};

export type MutationCreateTierArgs = {
  input: CreateTierInput;
};

export type MutationCreateTierRequestArgs = {
  projectId: Scalars["String"]["input"];
  tierId: Scalars["String"]["input"];
};

export type MutationDeleteProjectArgs = {
  id: Scalars["String"]["input"];
};

export type MutationDeleteTierArgs = {
  id: Scalars["String"]["input"];
};

export type MutationDeleteTierRequestArgs = {
  id: Scalars["String"]["input"];
};

export type MutationDeleteUserArgs = {
  id: Scalars["String"]["input"];
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type MutationLoginAdminArgs = {
  input: LoginInput;
};

export type MutationMakeResetPasswordRequestArgs = {
  input: MakeResetPasswordRequestInput;
};

export type MutationRemoveMediaArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};

export type MutationSignUpArgs = {
  input: SignUpInput;
};

export type MutationSwapTierArgs = {
  ids: Array<Scalars["String"]["input"]>;
};

export type MutationUpdateMediaArgs = {
  input: UpdateMediaInput;
};

export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput;
};

export type MutationUpdateTierArgs = {
  input: UpdateTierInput;
};

export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type MutationUploadBase64FileArgs = {
  input: UploadBase64MediaInput;
};

export type MutationUploadBase64ImageArgs = {
  input: UploadBase64ImageInput;
};

export type MutationVerifyEmailArgs = {
  token: Scalars["String"]["input"];
};

export type MutationVerifyResetPasswordTokenArgs = {
  input: VerifyResetPasswordTokenInput;
};

/** Node */
export type Node = {
  id: Scalars["ID"]["output"];
};

export type PageInfo = {
  __typename?: "PageInfo";
  endCursor?: Maybe<Scalars["String"]["output"]>;
  hasNextPage: Scalars["Boolean"]["output"];
  hasPrevPage: Scalars["Boolean"]["output"];
  startCursor?: Maybe<Scalars["String"]["output"]>;
};

export type Project = Node & {
  __typename?: "Project";
  apiKey?: Maybe<Scalars["String"]["output"]>;
  apiKeyId?: Maybe<Scalars["String"]["output"]>;
  code: Scalars["String"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  currentTier?: Maybe<Array<TierRequest>>;
  id: Scalars["ID"]["output"];
  isActive: Scalars["Boolean"]["output"];
  name: Scalars["String"]["output"];
  pluginId?: Maybe<Scalars["String"]["output"]>;
  todayRequest: Scalars["Float"]["output"];
  type: ProjectTypeEnum;
  updatedAt: Scalars["DateTime"]["output"];
  user?: Maybe<User>;
  userId: Scalars["String"]["output"];
};

export type ProjectConnection = {
  __typename?: "ProjectConnection";
  items?: Maybe<Array<Project>>;
  meta: BasePaginationMeta;
};

export const enum ProjectTypeEnum {
  ETH2 = "ETH2",
  ETHEREUM = "ETHEREUM",
  FILECOIN = "FILECOIN",
  IPFS = "IPFS",
}

export type Query = {
  __typename?: "Query";
  dashboardMethodCount: DashboardMethodCountResponse;
  dashboardRequestVolumn: DashboardRequestVolumnResponse;
  /** Get current user infomation */
  me: User;
  /** Get admin infomation */
  meAdmin: User;
  /** Require Authenticated */
  medias?: Maybe<MediaConnection>;
  myProjects: Array<Project>;
  project?: Maybe<Project>;
  projects: ProjectConnection;
  tier: Tier;
  tierRequest: TierRequest;
  tierRequests: TierRequestConnection;
  tiers: TierConnection;
  /** User detail - Admin dashboard */
  user?: Maybe<User>;
  /** List User - Admin Dashboard */
  users?: Maybe<UserConnection>;
};

export type QueryDashboardMethodCountArgs = {
  endTime: Scalars["DateTime"]["input"];
  projectId?: InputMaybe<Scalars["String"]["input"]>;
  startTime: Scalars["DateTime"]["input"];
};

export type QueryDashboardRequestVolumnArgs = {
  endTime: Scalars["DateTime"]["input"];
  projectId?: InputMaybe<Scalars["String"]["input"]>;
  startTime: Scalars["DateTime"]["input"];
};

export type QueryMediasArgs = {
  filters?: InputMaybe<Array<Scalars["JSONObject"]["input"]>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  parentId?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryProjectArgs = {
  id: Scalars["String"]["input"];
};

export type QueryProjectsArgs = {
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<ProjectTypeEnum>;
};

export type QueryTierArgs = {
  id: Scalars["String"]["input"];
};

export type QueryTierRequestArgs = {
  id: Scalars["String"]["input"];
};

export type QueryTierRequestsArgs = {
  filters?: InputMaybe<Array<Scalars["JSONObject"]["input"]>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  projectId?: InputMaybe<Scalars["String"]["input"]>;
  s?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<SortInput>;
  status?: InputMaybe<TierRequestStatusEnum>;
  tierId?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryTiersArgs = {
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  isCustom?: InputMaybe<Scalars["Boolean"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  projectId?: InputMaybe<Scalars["String"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryUserArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryUsersArgs = {
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type ResetPasswordInput = {
  password: Scalars["String"]["input"];
  token: Scalars["String"]["input"];
};

export type SignUpInput = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type SortInput = {
  direction?: InputMaybe<Scalars["String"]["input"]>;
  field: Scalars["String"]["input"];
};

export type Tier = Node & {
  __typename?: "Tier";
  code: Scalars["String"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  day?: Maybe<Scalars["Float"]["output"]>;
  desc: Array<Scalars["String"]["output"]>;
  hour?: Maybe<Scalars["Float"]["output"]>;
  id: Scalars["ID"]["output"];
  index: Scalars["Float"]["output"];
  isActive: Scalars["Boolean"]["output"];
  isCustom: Scalars["Boolean"]["output"];
  minute?: Maybe<Scalars["Float"]["output"]>;
  month?: Maybe<Scalars["Float"]["output"]>;
  name: Scalars["String"]["output"];
  price: Scalars["Float"]["output"];
  requestOfTier?: Maybe<Array<TierRequest>>;
  second?: Maybe<Scalars["Float"]["output"]>;
  updatedAt: Scalars["DateTime"]["output"];
  year?: Maybe<Scalars["Float"]["output"]>;
};

export type TierConnection = {
  __typename?: "TierConnection";
  items?: Maybe<Array<Tier>>;
  meta: BasePaginationMeta;
};

export type TierRequest = Node & {
  __typename?: "TierRequest";
  activityLogs: Array<ActivityLog>;
  code: Scalars["String"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  createdBy?: Maybe<User>;
  createdById: Scalars["String"]["output"];
  endDate?: Maybe<Scalars["DateTime"]["output"]>;
  id: Scalars["ID"]["output"];
  project?: Maybe<Project>;
  projectId: Scalars["String"]["output"];
  startDate?: Maybe<Scalars["DateTime"]["output"]>;
  status: TierRequestStatusEnum;
  tier?: Maybe<Tier>;
  tierId: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
};

export type TierRequestConnection = {
  __typename?: "TierRequestConnection";
  items?: Maybe<Array<TierRequest>>;
  meta: BasePaginationMeta;
};

export const enum TierRequestStatusEnum {
  APPROVED = "APPROVED",
  END = "END",
  REJECTED = "REJECTED",
  WAITING = "WAITING",
}

export type UpdateMediaInput = {
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
};

export type UpdateProjectInput = {
  id: Scalars["String"]["input"];
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<ProjectTypeEnum>;
};

export type UpdateTierInput = {
  day?: InputMaybe<Scalars["Float"]["input"]>;
  desc?: InputMaybe<Array<Scalars["String"]["input"]>>;
  hour?: InputMaybe<Scalars["Float"]["input"]>;
  id: Scalars["String"]["input"];
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  minute?: InputMaybe<Scalars["Float"]["input"]>;
  month?: InputMaybe<Scalars["Float"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["Float"]["input"]>;
  second?: InputMaybe<Scalars["Float"]["input"]>;
  year?: InputMaybe<Scalars["Float"]["input"]>;
};

export type UpdateUserInput = {
  businessEmail?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["String"]["input"];
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  organizationDomain?: InputMaybe<Scalars["String"]["input"]>;
  organizationName?: InputMaybe<Scalars["String"]["input"]>;
  organizationUrl?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  position?: InputMaybe<Scalars["String"]["input"]>;
};

export type UploadBase64ImageInput = {
  data: Scalars["String"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type UploadBase64MediaInput = {
  data: Scalars["String"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  type: MediaTypeEnum;
};

export type User = Node & {
  __typename?: "User";
  businessEmail?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  email: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  isActive: Scalars["Boolean"]["output"];
  isAdmin: Scalars["Boolean"]["output"];
  organizationDomain?: Maybe<Scalars["String"]["output"]>;
  organizationName?: Maybe<Scalars["String"]["output"]>;
  organizationUrl?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  position?: Maybe<Scalars["String"]["output"]>;
  updatedAt: Scalars["DateTime"]["output"];
};

export type UserConnection = {
  __typename?: "UserConnection";
  items?: Maybe<Array<User>>;
  meta: BasePaginationMeta;
};

export type VerifyResetPasswordTokenInput = {
  token: Scalars["String"]["input"];
};
