/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  Hex: { input: any; output: any; }
  /** Raw JSON value */
  Json: { input: any; output: any; }
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: { input: any; output: any; }
  RGBAHue: { input: any; output: any; }
  RGBATransparency: { input: any; output: any; }
  /** Slate-compatible RichText AST */
  RichTextAST: { input: any; output: any; }
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int']['output'];
};

/** Asset system model */
export type Asset = Entity & Node & {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String']['output'];
  /** The file handle */
  handle: Scalars['String']['output'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']['output']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  imageStaff: Array<Staff>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  logoNavigation: Array<Navigation>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Returns information you need to upload the asset. The type of upload is dependant on what you pass into asset creations as upload type. */
  upload?: Maybe<AssetUpload>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']['output'];
  /** The file width */
  width?: Maybe<Scalars['Float']['output']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetImageStaffArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<StaffOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StaffWhereInput>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetLogoNavigationArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<NavigationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationWhereInput>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  imageHero?: InputMaybe<HeroCreateManyInlineInput>;
  imageImage?: InputMaybe<ImageCreateManyInlineInput>;
  imageStaff?: InputMaybe<StaffCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  logoNavigation?: InputMaybe<NavigationCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  imageStaff_every?: InputMaybe<StaffWhereInput>;
  imageStaff_none?: InputMaybe<StaffWhereInput>;
  imageStaff_some?: InputMaybe<StaffWhereInput>;
  logoNavigation_every?: InputMaybe<NavigationWhereInput>;
  logoNavigation_none?: InputMaybe<NavigationWhereInput>;
  logoNavigation_some?: InputMaybe<NavigationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  upload?: InputMaybe<AssetUploadWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Identifies documents */
export type AssetSingleRelationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetSingleRelationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetSingleRelationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetSingleRelationWhereInput>>;
  upload?: InputMaybe<AssetUploadWhereInput>;
};

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  imageHero?: InputMaybe<HeroUpdateManyInlineInput>;
  imageImage?: InputMaybe<ImageUpdateManyInlineInput>;
  imageStaff?: InputMaybe<StaffUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  logoNavigation?: InputMaybe<NavigationUpdateManyInlineInput>;
  /** Use this to define if its a reupload for the asset */
  reUpload?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** Use this to define if its a reupload for the asset */
  reUpload?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  /** Use this to define if its a reupload for the asset */
  reUpload?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** Use this to define if its a reupload for the asset */
  reUpload?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** Asset Upload */
export type AssetUpload = {
  __typename?: 'AssetUpload';
  /** Asset Upload Error */
  error?: Maybe<AssetUploadError>;
  /** Expiry Timestamp */
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** Asset Request Data for upload */
  requestPostData?: Maybe<AssetUploadRequestPostData>;
  /** Asset Request Data for upload */
  status?: Maybe<AssetUploadStatus>;
};

/** Represents asset upload error */
export type AssetUploadError = {
  __typename?: 'AssetUploadError';
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Asset Upload Request Post Data */
export type AssetUploadRequestPostData = {
  __typename?: 'AssetUploadRequestPostData';
  /** The algorithm to use in the form field. This value should be passed in the `X-Amz-Algorithm` form field. */
  algorithm: Scalars['String']['output'];
  /** The credential to use in the form field. This value should be passed in the `X-Amz-Credential` form field. */
  credential: Scalars['String']['output'];
  /** The date the request was signed, formatted as YYYYMMDDTHHMMSSZ. This value should be passed in the `X-Amz-Date` header. */
  date: Scalars['String']['output'];
  /** The key to use in the form field. This value should be passed in the `Key` form field. */
  key: Scalars['String']['output'];
  /** The policy to use in the form field. This value should be passed in the `Policy` form field. */
  policy: Scalars['String']['output'];
  /** The security token to use in the form field. This field is optional only pass it if its not null. This value should be passed in the `X-Amz-Security-Token` form field if not null. */
  securityToken?: Maybe<Scalars['String']['output']>;
  /** The signature to use in the form field. This value should be passed in the `X-Amz-Signature` form field. */
  signature: Scalars['String']['output'];
  /** The URL to which the file should be uploaded with a POST request. */
  url: Scalars['String']['output'];
};

/** System Asset Upload Status */
export enum AssetUploadStatus {
  AssetCreatePending = 'ASSET_CREATE_PENDING',
  AssetErrorUpload = 'ASSET_ERROR_UPLOAD',
  AssetUpdatePending = 'ASSET_UPDATE_PENDING',
  AssetUploadComplete = 'ASSET_UPLOAD_COMPLETE'
}

/** Identifies documents */
export type AssetUploadWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetUploadWhereInput>>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  expiresAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  expiresAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  expiresAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  expiresAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  expiresAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  expiresAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  expiresAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<AssetUploadStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<AssetUploadStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
};

/** Identifies documents */
export type AssetUploadWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetUploadWhereInput>>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  expiresAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  expiresAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  expiresAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  expiresAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  expiresAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  expiresAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  expiresAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<AssetUploadStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<AssetUploadStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  imageStaff_every?: InputMaybe<StaffWhereInput>;
  imageStaff_none?: InputMaybe<StaffWhereInput>;
  imageStaff_some?: InputMaybe<StaffWhereInput>;
  logoNavigation_every?: InputMaybe<NavigationWhereInput>;
  logoNavigation_none?: InputMaybe<NavigationWhereInput>;
  logoNavigation_some?: InputMaybe<NavigationWhereInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  upload?: InputMaybe<AssetUploadWhereInput>;
  width?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']['output'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String']['output'];
  hex: Scalars['Hex']['output'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']['input']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']['input']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum DocumentFileTypes {
  /** Automatically selects the best format for the image based on the browser's capabilities. */
  AutoImage = 'autoImage',
  Avif = 'avif',
  Bmp = 'bmp',
  Gif = 'gif',
  Heic = 'heic',
  Jpg = 'jpg',
  Png = 'png',
  Svg = 'svg',
  Tiff = 'tiff',
  Webp = 'webp'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * JPG:	autoImage, bmp, gif, jpg, png, webp, tiff
   * PNG:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * SVG:	autoImage, bmp, gif, jpg, png, webp, tiff
   * WEBP:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * GIF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * TIFF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * AVIF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * PDF: 	autoImage, gif, jpg, png, webp, tiff
   *
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<Scalars['Json']['output']>;
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

/** An object with an ID */
export type Entity = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

/** This enumeration holds all typenames that implement the Entity interface. Components and models implement the Entity interface. */
export enum EntityTypeName {
  /** Asset system model */
  Asset = 'Asset',
  Hero = 'Hero',
  HomePage = 'HomePage',
  Image = 'Image',
  NavLink = 'NavLink',
  Navigation = 'Navigation',
  Page = 'Page',
  /** Scheduled Operation system model */
  ScheduledOperation = 'ScheduledOperation',
  /** Scheduled Release system model */
  ScheduledRelease = 'ScheduledRelease',
  Staff = 'Staff',
  StaffList = 'StaffList',
  Text = 'Text',
  /** User system model */
  User = 'User'
}

/** Allows to specify input to query models and components directly */
export type EntityWhereInput = {
  /** The ID of an object */
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Locale>;
  stage: Stage;
  /** The Type name of an object */
  typename: EntityTypeName;
};

export type Hero = Entity & {
  __typename?: 'Hero';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image: Asset;
  ingress?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
};


export type HeroImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};

export type HeroConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: HeroWhereUniqueInput;
};

/** A connection to a list of items. */
export type HeroConnection = {
  __typename?: 'HeroConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<HeroEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type HeroCreateInput = {
  image: AssetCreateOneInlineInput;
  ingress?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type HeroCreateManyInlineInput = {
  /** Create and connect multiple existing Hero documents */
  create?: InputMaybe<Array<HeroCreateInput>>;
};

export type HeroCreateOneInlineInput = {
  /** Create and connect one Hero document */
  create?: InputMaybe<HeroCreateInput>;
};

export type HeroCreateWithPositionInput = {
  /** Document to create */
  data: HeroCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type HeroEdge = {
  __typename?: 'HeroEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Hero;
};

/** Identifies documents */
export type HeroManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeroWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  ingress?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  ingress_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  ingress_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  ingress_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  ingress_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  ingress_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  ingress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  ingress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  ingress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  ingress_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum HeroOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IngressAsc = 'ingress_ASC',
  IngressDesc = 'ingress_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type HeroParent = HomePage | Page;

export type HeroParentConnectInput = {
  HomePage?: InputMaybe<HomePageConnectInput>;
  Page?: InputMaybe<PageConnectInput>;
};

export type HeroParentCreateInput = {
  HomePage?: InputMaybe<HomePageCreateInput>;
  Page?: InputMaybe<PageCreateInput>;
};

export type HeroParentCreateManyInlineInput = {
  /** Connect multiple existing HeroParent documents */
  connect?: InputMaybe<Array<HeroParentWhereUniqueInput>>;
  /** Create and connect multiple existing HeroParent documents */
  create?: InputMaybe<Array<HeroParentCreateInput>>;
};

export type HeroParentCreateOneInlineInput = {
  /** Connect one existing HeroParent document */
  connect?: InputMaybe<HeroParentWhereUniqueInput>;
  /** Create and connect one HeroParent document */
  create?: InputMaybe<HeroParentCreateInput>;
};

export type HeroParentUpdateInput = {
  HomePage?: InputMaybe<HomePageUpdateInput>;
  Page?: InputMaybe<PageUpdateInput>;
};

export type HeroParentUpdateManyInlineInput = {
  /** Connect multiple existing HeroParent documents */
  connect?: InputMaybe<Array<HeroParentConnectInput>>;
  /** Create and connect multiple HeroParent documents */
  create?: InputMaybe<Array<HeroParentCreateInput>>;
  /** Delete multiple HeroParent documents */
  delete?: InputMaybe<Array<HeroParentWhereUniqueInput>>;
  /** Disconnect multiple HeroParent documents */
  disconnect?: InputMaybe<Array<HeroParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing HeroParent documents */
  set?: InputMaybe<Array<HeroParentWhereUniqueInput>>;
  /** Update multiple HeroParent documents */
  update?: InputMaybe<Array<HeroParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple HeroParent documents */
  upsert?: InputMaybe<Array<HeroParentUpsertWithNestedWhereUniqueInput>>;
};

export type HeroParentUpdateManyWithNestedWhereInput = {
  HomePage?: InputMaybe<HomePageUpdateManyWithNestedWhereInput>;
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
};

export type HeroParentUpdateOneInlineInput = {
  /** Connect existing HeroParent document */
  connect?: InputMaybe<HeroParentWhereUniqueInput>;
  /** Create and connect one HeroParent document */
  create?: InputMaybe<HeroParentCreateInput>;
  /** Delete currently connected HeroParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected HeroParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single HeroParent document */
  update?: InputMaybe<HeroParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single HeroParent document */
  upsert?: InputMaybe<HeroParentUpsertWithNestedWhereUniqueInput>;
};

export type HeroParentUpdateWithNestedWhereUniqueInput = {
  HomePage?: InputMaybe<HomePageUpdateWithNestedWhereUniqueInput>;
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type HeroParentUpsertWithNestedWhereUniqueInput = {
  HomePage?: InputMaybe<HomePageUpsertWithNestedWhereUniqueInput>;
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type HeroParentWhereInput = {
  HomePage?: InputMaybe<HomePageWhereInput>;
  Page?: InputMaybe<PageWhereInput>;
};

export type HeroParentWhereUniqueInput = {
  HomePage?: InputMaybe<HomePageWhereUniqueInput>;
  Page?: InputMaybe<PageWhereUniqueInput>;
};

export type HeroUpdateInput = {
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  ingress?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type HeroUpdateManyInlineInput = {
  /** Create and connect multiple Hero component instances */
  create?: InputMaybe<Array<HeroCreateWithPositionInput>>;
  /** Delete multiple Hero documents */
  delete?: InputMaybe<Array<HeroWhereUniqueInput>>;
  /** Update multiple Hero component instances */
  update?: InputMaybe<Array<HeroUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Hero component instances */
  upsert?: InputMaybe<Array<HeroUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type HeroUpdateManyInput = {
  ingress?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type HeroUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: HeroUpdateManyInput;
  /** Document search */
  where: HeroWhereInput;
};

export type HeroUpdateOneInlineInput = {
  /** Create and connect one Hero document */
  create?: InputMaybe<HeroCreateInput>;
  /** Delete currently connected Hero document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Hero document */
  update?: InputMaybe<HeroUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Hero document */
  upsert?: InputMaybe<HeroUpsertWithNestedWhereUniqueInput>;
};

export type HeroUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<HeroUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: HeroWhereUniqueInput;
};

export type HeroUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: HeroUpdateInput;
  /** Unique document search */
  where: HeroWhereUniqueInput;
};

export type HeroUpsertInput = {
  /** Create document if it didn't exist */
  create: HeroCreateInput;
  /** Update document if it exists */
  update: HeroUpdateInput;
};

export type HeroUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<HeroUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: HeroWhereUniqueInput;
};

export type HeroUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: HeroUpsertInput;
  /** Unique document search */
  where: HeroWhereUniqueInput;
};

/** Identifies documents */
export type HeroWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeroWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  ingress?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  ingress_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  ingress_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  ingress_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  ingress_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  ingress_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  ingress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  ingress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  ingress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  ingress_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References Hero record uniquely */
export type HeroWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type HomePage = Entity & Node & {
  __typename?: 'HomePage';
  content: Array<HomePagecontentUnion>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<HomePage>;
  /** List of HomePage versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  pageDescription?: Maybe<Scalars['String']['output']>;
  pageTitle?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type HomePageContentArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HomePageCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type HomePageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type HomePageHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type HomePagePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type HomePageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type HomePageUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type HomePageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: HomePageWhereUniqueInput;
};

/** A connection to a list of items. */
export type HomePageConnection = {
  __typename?: 'HomePageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<HomePageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type HomePageCreateInput = {
  content?: InputMaybe<HomePagecontentUnionCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  pageDescription?: InputMaybe<Scalars['String']['input']>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HomePageCreateManyInlineInput = {
  /** Connect multiple existing HomePage documents */
  connect?: InputMaybe<Array<HomePageWhereUniqueInput>>;
  /** Create and connect multiple existing HomePage documents */
  create?: InputMaybe<Array<HomePageCreateInput>>;
};

export type HomePageCreateOneInlineInput = {
  /** Connect one existing HomePage document */
  connect?: InputMaybe<HomePageWhereUniqueInput>;
  /** Create and connect one HomePage document */
  create?: InputMaybe<HomePageCreateInput>;
};

/** An edge in a connection. */
export type HomePageEdge = {
  __typename?: 'HomePageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: HomePage;
};

/** Identifies documents */
export type HomePageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HomePageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HomePageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HomePageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  content_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  content_some?: InputMaybe<HomePagecontentUnionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<HomePageWhereStageInput>;
  documentInStages_none?: InputMaybe<HomePageWhereStageInput>;
  documentInStages_some?: InputMaybe<HomePageWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  pageDescription?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  pageDescription_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  pageDescription_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pageDescription_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  pageDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  pageDescription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  pageDescription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  pageDescription_starts_with?: InputMaybe<Scalars['String']['input']>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  pageTitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  pageTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pageTitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  pageTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  pageTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  pageTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  pageTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum HomePageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PageDescriptionAsc = 'pageDescription_ASC',
  PageDescriptionDesc = 'pageDescription_DESC',
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type HomePageUpdateInput = {
  content?: InputMaybe<HomePagecontentUnionUpdateManyInlineInput>;
  pageDescription?: InputMaybe<Scalars['String']['input']>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
};

export type HomePageUpdateManyInlineInput = {
  /** Connect multiple existing HomePage documents */
  connect?: InputMaybe<Array<HomePageConnectInput>>;
  /** Create and connect multiple HomePage documents */
  create?: InputMaybe<Array<HomePageCreateInput>>;
  /** Delete multiple HomePage documents */
  delete?: InputMaybe<Array<HomePageWhereUniqueInput>>;
  /** Disconnect multiple HomePage documents */
  disconnect?: InputMaybe<Array<HomePageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing HomePage documents */
  set?: InputMaybe<Array<HomePageWhereUniqueInput>>;
  /** Update multiple HomePage documents */
  update?: InputMaybe<Array<HomePageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple HomePage documents */
  upsert?: InputMaybe<Array<HomePageUpsertWithNestedWhereUniqueInput>>;
};

export type HomePageUpdateManyInput = {
  pageDescription?: InputMaybe<Scalars['String']['input']>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
};

export type HomePageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: HomePageUpdateManyInput;
  /** Document search */
  where: HomePageWhereInput;
};

export type HomePageUpdateOneInlineInput = {
  /** Connect existing HomePage document */
  connect?: InputMaybe<HomePageWhereUniqueInput>;
  /** Create and connect one HomePage document */
  create?: InputMaybe<HomePageCreateInput>;
  /** Delete currently connected HomePage document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected HomePage document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single HomePage document */
  update?: InputMaybe<HomePageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single HomePage document */
  upsert?: InputMaybe<HomePageUpsertWithNestedWhereUniqueInput>;
};

export type HomePageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: HomePageUpdateInput;
  /** Unique document search */
  where: HomePageWhereUniqueInput;
};

export type HomePageUpsertInput = {
  /** Create document if it didn't exist */
  create: HomePageCreateInput;
  /** Update document if it exists */
  update: HomePageUpdateInput;
};

export type HomePageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: HomePageUpsertInput;
  /** Unique document search */
  where: HomePageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type HomePageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type HomePageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HomePageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HomePageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HomePageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  content_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  content_some?: InputMaybe<HomePagecontentUnionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<HomePageWhereStageInput>;
  documentInStages_none?: InputMaybe<HomePageWhereStageInput>;
  documentInStages_some?: InputMaybe<HomePageWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  pageDescription?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  pageDescription_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  pageDescription_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pageDescription_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  pageDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  pageDescription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  pageDescription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  pageDescription_starts_with?: InputMaybe<Scalars['String']['input']>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  pageTitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  pageTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pageTitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  pageTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  pageTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  pageTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  pageTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type HomePageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HomePageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HomePageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HomePageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<HomePageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References HomePage record uniquely */
export type HomePageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type HomePagecontentUnion = Hero | Image | Text;

export type HomePagecontentUnionConnectInput = {
  Hero?: InputMaybe<HeroConnectInput>;
  Image?: InputMaybe<ImageConnectInput>;
  Text?: InputMaybe<TextConnectInput>;
};

export type HomePagecontentUnionCreateInput = {
  Hero?: InputMaybe<HeroCreateInput>;
  Image?: InputMaybe<ImageCreateInput>;
  Text?: InputMaybe<TextCreateInput>;
};

export type HomePagecontentUnionCreateManyInlineInput = {
  /** Create and connect multiple existing HomePagecontentUnion documents */
  create?: InputMaybe<Array<HomePagecontentUnionCreateInput>>;
};

export type HomePagecontentUnionCreateOneInlineInput = {
  /** Create and connect one HomePagecontentUnion document */
  create?: InputMaybe<HomePagecontentUnionCreateInput>;
};

export type HomePagecontentUnionCreateWithPositionInput = {
  Hero?: InputMaybe<HeroCreateWithPositionInput>;
  Image?: InputMaybe<ImageCreateWithPositionInput>;
  Text?: InputMaybe<TextCreateWithPositionInput>;
};

export type HomePagecontentUnionUpdateInput = {
  Hero?: InputMaybe<HeroUpdateInput>;
  Image?: InputMaybe<ImageUpdateInput>;
  Text?: InputMaybe<TextUpdateInput>;
};

export type HomePagecontentUnionUpdateManyInlineInput = {
  /** Create and connect multiple HomePagecontentUnion component instances */
  create?: InputMaybe<Array<HomePagecontentUnionCreateWithPositionInput>>;
  /** Delete multiple HomePagecontentUnion documents */
  delete?: InputMaybe<Array<HomePagecontentUnionWhereUniqueInput>>;
  /** Update multiple HomePagecontentUnion component instances */
  update?: InputMaybe<Array<HomePagecontentUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple HomePagecontentUnion component instances */
  upsert?: InputMaybe<Array<HomePagecontentUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type HomePagecontentUnionUpdateManyWithNestedWhereInput = {
  Hero?: InputMaybe<HeroUpdateManyWithNestedWhereInput>;
  Image?: InputMaybe<ImageUpdateManyWithNestedWhereInput>;
  Text?: InputMaybe<TextUpdateManyWithNestedWhereInput>;
};

export type HomePagecontentUnionUpdateOneInlineInput = {
  /** Create and connect one HomePagecontentUnion document */
  create?: InputMaybe<HomePagecontentUnionCreateInput>;
  /** Delete currently connected HomePagecontentUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single HomePagecontentUnion document */
  update?: InputMaybe<HomePagecontentUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single HomePagecontentUnion document */
  upsert?: InputMaybe<HomePagecontentUnionUpsertWithNestedWhereUniqueInput>;
};

export type HomePagecontentUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Hero?: InputMaybe<HeroUpdateWithNestedWhereUniqueAndPositionInput>;
  Image?: InputMaybe<ImageUpdateWithNestedWhereUniqueAndPositionInput>;
  Text?: InputMaybe<TextUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type HomePagecontentUnionUpdateWithNestedWhereUniqueInput = {
  Hero?: InputMaybe<HeroUpdateWithNestedWhereUniqueInput>;
  Image?: InputMaybe<ImageUpdateWithNestedWhereUniqueInput>;
  Text?: InputMaybe<TextUpdateWithNestedWhereUniqueInput>;
};

export type HomePagecontentUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Hero?: InputMaybe<HeroUpsertWithNestedWhereUniqueAndPositionInput>;
  Image?: InputMaybe<ImageUpsertWithNestedWhereUniqueAndPositionInput>;
  Text?: InputMaybe<TextUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type HomePagecontentUnionUpsertWithNestedWhereUniqueInput = {
  Hero?: InputMaybe<HeroUpsertWithNestedWhereUniqueInput>;
  Image?: InputMaybe<ImageUpsertWithNestedWhereUniqueInput>;
  Text?: InputMaybe<TextUpsertWithNestedWhereUniqueInput>;
};

export type HomePagecontentUnionWhereInput = {
  Hero?: InputMaybe<HeroWhereInput>;
  Image?: InputMaybe<ImageWhereInput>;
  Text?: InputMaybe<TextWhereInput>;
};

export type HomePagecontentUnionWhereUniqueInput = {
  Hero?: InputMaybe<HeroWhereUniqueInput>;
  Image?: InputMaybe<ImageWhereUniqueInput>;
  Text?: InputMaybe<TextWhereUniqueInput>;
};

export type Image = Entity & {
  __typename?: 'Image';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image?: Maybe<Asset>;
  /** System stage field */
  stage: Stage;
};


export type ImageImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};

export type ImageBlurInput = {
  /** The amount of blurring to apply to the image. The value must be an integer from 1 to 20. */
  amount: Scalars['Int']['input'];
};

/** Adds a border to the image. */
export type ImageBorderInput = {
  /** The background color of the border. The value must be a valid hex color code. Or one of the supported color names. */
  background: Scalars['String']['input'];
  /** The color of the border. The value must be a valid hex color code. Or one of the supported color names. */
  color: Scalars['String']['input'];
  /** The width of the border in pixels. The value must be an integer from 1 to 1000. */
  width: Scalars['Int']['input'];
};

export type ImageCompressInput = {
  /** Preserves the metadata of the image. */
  metadata: Scalars['Boolean']['input'];
};

export type ImageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ImageWhereUniqueInput;
};

/** A connection to a list of items. */
export type ImageConnection = {
  __typename?: 'ImageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ImageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ImageCreateInput = {
  image?: InputMaybe<AssetCreateOneInlineInput>;
};

export type ImageCreateManyInlineInput = {
  /** Create and connect multiple existing Image documents */
  create?: InputMaybe<Array<ImageCreateInput>>;
};

export type ImageCreateOneInlineInput = {
  /** Create and connect one Image document */
  create?: InputMaybe<ImageCreateInput>;
};

export type ImageCreateWithPositionInput = {
  /** Document to create */
  data: ImageCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/**
 * Crops the image to the specified dimensions.
 * The starting points for X and Y coordinates are [0,0], aligning with the top-left corner of the image.
 * The width and height parameters determine the size in pixels of the cropping rectangle.
 * The output will include only the portion of the image within the designated crop area.
 */
export type ImageCropInput = {
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height: Scalars['Int']['input'];
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width: Scalars['Int']['input'];
  /** The x coordinate of the image. The value must be an integer from 0 to 10000. */
  x: Scalars['Int']['input'];
  /** The y coordinate of the image. The value must be an integer from 0 to 10000. */
  y: Scalars['Int']['input'];
};

/** An edge in a connection. */
export type ImageEdge = {
  __typename?: 'ImageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Image;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

/** Identifies documents */
export type ImageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ImageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ImageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ImageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
};

export enum ImageOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type ImageParent = HomePage | Page;

export type ImageParentConnectInput = {
  HomePage?: InputMaybe<HomePageConnectInput>;
  Page?: InputMaybe<PageConnectInput>;
};

export type ImageParentCreateInput = {
  HomePage?: InputMaybe<HomePageCreateInput>;
  Page?: InputMaybe<PageCreateInput>;
};

export type ImageParentCreateManyInlineInput = {
  /** Connect multiple existing ImageParent documents */
  connect?: InputMaybe<Array<ImageParentWhereUniqueInput>>;
  /** Create and connect multiple existing ImageParent documents */
  create?: InputMaybe<Array<ImageParentCreateInput>>;
};

export type ImageParentCreateOneInlineInput = {
  /** Connect one existing ImageParent document */
  connect?: InputMaybe<ImageParentWhereUniqueInput>;
  /** Create and connect one ImageParent document */
  create?: InputMaybe<ImageParentCreateInput>;
};

export type ImageParentUpdateInput = {
  HomePage?: InputMaybe<HomePageUpdateInput>;
  Page?: InputMaybe<PageUpdateInput>;
};

export type ImageParentUpdateManyInlineInput = {
  /** Connect multiple existing ImageParent documents */
  connect?: InputMaybe<Array<ImageParentConnectInput>>;
  /** Create and connect multiple ImageParent documents */
  create?: InputMaybe<Array<ImageParentCreateInput>>;
  /** Delete multiple ImageParent documents */
  delete?: InputMaybe<Array<ImageParentWhereUniqueInput>>;
  /** Disconnect multiple ImageParent documents */
  disconnect?: InputMaybe<Array<ImageParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ImageParent documents */
  set?: InputMaybe<Array<ImageParentWhereUniqueInput>>;
  /** Update multiple ImageParent documents */
  update?: InputMaybe<Array<ImageParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ImageParent documents */
  upsert?: InputMaybe<Array<ImageParentUpsertWithNestedWhereUniqueInput>>;
};

export type ImageParentUpdateManyWithNestedWhereInput = {
  HomePage?: InputMaybe<HomePageUpdateManyWithNestedWhereInput>;
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
};

export type ImageParentUpdateOneInlineInput = {
  /** Connect existing ImageParent document */
  connect?: InputMaybe<ImageParentWhereUniqueInput>;
  /** Create and connect one ImageParent document */
  create?: InputMaybe<ImageParentCreateInput>;
  /** Delete currently connected ImageParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ImageParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ImageParent document */
  update?: InputMaybe<ImageParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ImageParent document */
  upsert?: InputMaybe<ImageParentUpsertWithNestedWhereUniqueInput>;
};

export type ImageParentUpdateWithNestedWhereUniqueInput = {
  HomePage?: InputMaybe<HomePageUpdateWithNestedWhereUniqueInput>;
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type ImageParentUpsertWithNestedWhereUniqueInput = {
  HomePage?: InputMaybe<HomePageUpsertWithNestedWhereUniqueInput>;
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type ImageParentWhereInput = {
  HomePage?: InputMaybe<HomePageWhereInput>;
  Page?: InputMaybe<PageWhereInput>;
};

export type ImageParentWhereUniqueInput = {
  HomePage?: InputMaybe<HomePageWhereUniqueInput>;
  Page?: InputMaybe<PageWhereUniqueInput>;
};

export type ImageQualityInput = {
  /** The quality of the image. The value must be an integer from 1 to 100. */
  value: Scalars['Int']['input'];
};

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']['input']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type ImageSharpenInput = {
  /** The amount of sharpening to apply to the image. The value must be an integer from 1 to 20. */
  amount: Scalars['Int']['input'];
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Blurs the image. */
  blur?: InputMaybe<ImageBlurInput>;
  /** Adds a border to the image. */
  border?: InputMaybe<ImageBorderInput>;
  /** Compresses the image. */
  compress?: InputMaybe<ImageCompressInput>;
  /** Crops the image to the specified dimensions. */
  crop?: InputMaybe<ImageCropInput>;
  /**
   * Changes the quality of the image. The value must be an integer from 1 to 100.
   * Only supported for the following formats jpeg, jpg, webp, gif, heif, tiff, avif.
   */
  quality?: InputMaybe<ImageQualityInput>;
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
  /** Sharpens the image. */
  sharpen?: InputMaybe<ImageSharpenInput>;
};

export type ImageUpdateInput = {
  image?: InputMaybe<AssetUpdateOneInlineInput>;
};

export type ImageUpdateManyInlineInput = {
  /** Create and connect multiple Image component instances */
  create?: InputMaybe<Array<ImageCreateWithPositionInput>>;
  /** Delete multiple Image documents */
  delete?: InputMaybe<Array<ImageWhereUniqueInput>>;
  /** Update multiple Image component instances */
  update?: InputMaybe<Array<ImageUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Image component instances */
  upsert?: InputMaybe<Array<ImageUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ImageUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type ImageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ImageUpdateManyInput;
  /** Document search */
  where: ImageWhereInput;
};

export type ImageUpdateOneInlineInput = {
  /** Create and connect one Image document */
  create?: InputMaybe<ImageCreateInput>;
  /** Delete currently connected Image document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Image document */
  update?: InputMaybe<ImageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Image document */
  upsert?: InputMaybe<ImageUpsertWithNestedWhereUniqueInput>;
};

export type ImageUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ImageUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ImageWhereUniqueInput;
};

export type ImageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ImageUpdateInput;
  /** Unique document search */
  where: ImageWhereUniqueInput;
};

export type ImageUpsertInput = {
  /** Create document if it didn't exist */
  create: ImageCreateInput;
  /** Update document if it exists */
  update: ImageUpdateInput;
};

export type ImageUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ImageUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ImageWhereUniqueInput;
};

export type ImageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ImageUpsertInput;
  /** Unique document search */
  where: ImageWhereUniqueInput;
};

/** Identifies documents */
export type ImageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ImageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ImageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ImageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
};

/** References Image record uniquely */
export type ImageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  SvSe = 'sv_se'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create an asset. Use the returned info to finish the creation process by uploading the asset. */
  createAsset?: Maybe<Asset>;
  /** Create one homePage */
  createHomePage?: Maybe<HomePage>;
  /** Create one navigation */
  createNavigation?: Maybe<Navigation>;
  /** Create one page */
  createPage?: Maybe<Page>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one staff */
  createStaff?: Maybe<Staff>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one homePage from _all_ existing stages. Returns deleted document. */
  deleteHomePage?: Maybe<HomePage>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many HomePage documents
   * @deprecated Please use the new paginated many mutation (deleteManyHomePagesConnection)
   */
  deleteManyHomePages: BatchPayload;
  /** Delete many HomePage documents, return deleted documents */
  deleteManyHomePagesConnection: HomePageConnection;
  /**
   * Delete many Navigation documents
   * @deprecated Please use the new paginated many mutation (deleteManyNavigationsConnection)
   */
  deleteManyNavigations: BatchPayload;
  /** Delete many Navigation documents, return deleted documents */
  deleteManyNavigationsConnection: NavigationConnection;
  /**
   * Delete many Page documents
   * @deprecated Please use the new paginated many mutation (deleteManyPagesConnection)
   */
  deleteManyPages: BatchPayload;
  /** Delete many Page documents, return deleted documents */
  deleteManyPagesConnection: PageConnection;
  /**
   * Delete many Staff documents
   * @deprecated Please use the new paginated many mutation (deleteManyStaffsConnection)
   */
  deleteManyStaffs: BatchPayload;
  /** Delete many Staff documents, return deleted documents */
  deleteManyStaffsConnection: StaffConnection;
  /** Delete one navigation from _all_ existing stages. Returns deleted document. */
  deleteNavigation?: Maybe<Navigation>;
  /** Delete one page from _all_ existing stages. Returns deleted document. */
  deletePage?: Maybe<Page>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one staff from _all_ existing stages. Returns deleted document. */
  deleteStaff?: Maybe<Staff>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one homePage */
  publishHomePage?: Maybe<HomePage>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many HomePage documents
   * @deprecated Please use the new paginated many mutation (publishManyHomePagesConnection)
   */
  publishManyHomePages: BatchPayload;
  /** Publish many HomePage documents */
  publishManyHomePagesConnection: HomePageConnection;
  /**
   * Publish many Navigation documents
   * @deprecated Please use the new paginated many mutation (publishManyNavigationsConnection)
   */
  publishManyNavigations: BatchPayload;
  /** Publish many Navigation documents */
  publishManyNavigationsConnection: NavigationConnection;
  /**
   * Publish many Page documents
   * @deprecated Please use the new paginated many mutation (publishManyPagesConnection)
   */
  publishManyPages: BatchPayload;
  /** Publish many Page documents */
  publishManyPagesConnection: PageConnection;
  /**
   * Publish many Staff documents
   * @deprecated Please use the new paginated many mutation (publishManyStaffsConnection)
   */
  publishManyStaffs: BatchPayload;
  /** Publish many Staff documents */
  publishManyStaffsConnection: StaffConnection;
  /** Publish one navigation */
  publishNavigation?: Maybe<Navigation>;
  /** Publish one page */
  publishPage?: Maybe<Page>;
  /** Publish one staff */
  publishStaff?: Maybe<Staff>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one homePage */
  schedulePublishHomePage?: Maybe<HomePage>;
  /** Schedule to publish one navigation */
  schedulePublishNavigation?: Maybe<Navigation>;
  /** Schedule to publish one page */
  schedulePublishPage?: Maybe<Page>;
  /** Schedule to publish one staff */
  schedulePublishStaff?: Maybe<Staff>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one homePage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishHomePage?: Maybe<HomePage>;
  /** Unpublish one navigation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishNavigation?: Maybe<Navigation>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPage?: Maybe<Page>;
  /** Unpublish one staff from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishStaff?: Maybe<Staff>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one homePage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishHomePage?: Maybe<HomePage>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many HomePage documents
   * @deprecated Please use the new paginated many mutation (unpublishManyHomePagesConnection)
   */
  unpublishManyHomePages: BatchPayload;
  /** Find many HomePage documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyHomePagesConnection: HomePageConnection;
  /**
   * Unpublish many Navigation documents
   * @deprecated Please use the new paginated many mutation (unpublishManyNavigationsConnection)
   */
  unpublishManyNavigations: BatchPayload;
  /** Find many Navigation documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyNavigationsConnection: NavigationConnection;
  /**
   * Unpublish many Page documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPagesConnection)
   */
  unpublishManyPages: BatchPayload;
  /** Find many Page documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPagesConnection: PageConnection;
  /**
   * Unpublish many Staff documents
   * @deprecated Please use the new paginated many mutation (unpublishManyStaffsConnection)
   */
  unpublishManyStaffs: BatchPayload;
  /** Find many Staff documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyStaffsConnection: StaffConnection;
  /** Unpublish one navigation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishNavigation?: Maybe<Navigation>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPage?: Maybe<Page>;
  /** Unpublish one staff from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishStaff?: Maybe<Staff>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one homePage */
  updateHomePage?: Maybe<HomePage>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many homePages
   * @deprecated Please use the new paginated many mutation (updateManyHomePagesConnection)
   */
  updateManyHomePages: BatchPayload;
  /** Update many HomePage documents */
  updateManyHomePagesConnection: HomePageConnection;
  /**
   * Update many navigations
   * @deprecated Please use the new paginated many mutation (updateManyNavigationsConnection)
   */
  updateManyNavigations: BatchPayload;
  /** Update many Navigation documents */
  updateManyNavigationsConnection: NavigationConnection;
  /**
   * Update many pages
   * @deprecated Please use the new paginated many mutation (updateManyPagesConnection)
   */
  updateManyPages: BatchPayload;
  /** Update many Page documents */
  updateManyPagesConnection: PageConnection;
  /**
   * Update many staffs
   * @deprecated Please use the new paginated many mutation (updateManyStaffsConnection)
   */
  updateManyStaffs: BatchPayload;
  /** Update many Staff documents */
  updateManyStaffsConnection: StaffConnection;
  /** Update one navigation */
  updateNavigation?: Maybe<Navigation>;
  /** Update one page */
  updatePage?: Maybe<Page>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one staff */
  updateStaff?: Maybe<Staff>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one homePage */
  upsertHomePage?: Maybe<HomePage>;
  /** Upsert one navigation */
  upsertNavigation?: Maybe<Navigation>;
  /** Upsert one page */
  upsertPage?: Maybe<Page>;
  /** Upsert one staff */
  upsertStaff?: Maybe<Staff>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateHomePageArgs = {
  data: HomePageCreateInput;
};


export type MutationCreateNavigationArgs = {
  data: NavigationCreateInput;
};


export type MutationCreatePageArgs = {
  data: PageCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateStaffArgs = {
  data: StaffCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteHomePageArgs = {
  where: HomePageWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyHomePagesArgs = {
  where?: InputMaybe<HomePageManyWhereInput>;
};


export type MutationDeleteManyHomePagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HomePageManyWhereInput>;
};


export type MutationDeleteManyNavigationsArgs = {
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationDeleteManyNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationDeleteManyPagesArgs = {
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationDeleteManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationDeleteManyStaffsArgs = {
  where?: InputMaybe<StaffManyWhereInput>;
};


export type MutationDeleteManyStaffsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StaffManyWhereInput>;
};


export type MutationDeleteNavigationArgs = {
  where: NavigationWhereUniqueInput;
};


export type MutationDeletePageArgs = {
  where: PageWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteStaffArgs = {
  where: StaffWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishHomePageArgs = {
  to?: Array<Stage>;
  where: HomePageWhereUniqueInput;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyHomePagesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<HomePageManyWhereInput>;
};


export type MutationPublishManyHomePagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<HomePageManyWhereInput>;
};


export type MutationPublishManyNavigationsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationPublishManyNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationPublishManyPagesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationPublishManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationPublishManyStaffsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<StaffManyWhereInput>;
};


export type MutationPublishManyStaffsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<StaffManyWhereInput>;
};


export type MutationPublishNavigationArgs = {
  to?: Array<Stage>;
  where: NavigationWhereUniqueInput;
};


export type MutationPublishPageArgs = {
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
};


export type MutationPublishStaffArgs = {
  to?: Array<Stage>;
  where: StaffWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishHomePageArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: HomePageWhereUniqueInput;
};


export type MutationSchedulePublishNavigationArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: NavigationWhereUniqueInput;
};


export type MutationSchedulePublishPageArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
};


export type MutationSchedulePublishStaffArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: StaffWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishHomePageArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: HomePageWhereUniqueInput;
};


export type MutationScheduleUnpublishNavigationArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: NavigationWhereUniqueInput;
};


export type MutationScheduleUnpublishPageArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: PageWhereUniqueInput;
};


export type MutationScheduleUnpublishStaffArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: StaffWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishHomePageArgs = {
  from?: Array<Stage>;
  where: HomePageWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyHomePagesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<HomePageManyWhereInput>;
};


export type MutationUnpublishManyHomePagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<HomePageManyWhereInput>;
};


export type MutationUnpublishManyNavigationsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationUnpublishManyNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationUnpublishManyPagesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUnpublishManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUnpublishManyStaffsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<StaffManyWhereInput>;
};


export type MutationUnpublishManyStaffsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<StaffManyWhereInput>;
};


export type MutationUnpublishNavigationArgs = {
  from?: Array<Stage>;
  where: NavigationWhereUniqueInput;
};


export type MutationUnpublishPageArgs = {
  from?: Array<Stage>;
  where: PageWhereUniqueInput;
};


export type MutationUnpublishStaffArgs = {
  from?: Array<Stage>;
  where: StaffWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateHomePageArgs = {
  data: HomePageUpdateInput;
  where: HomePageWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyHomePagesArgs = {
  data: HomePageUpdateManyInput;
  where?: InputMaybe<HomePageManyWhereInput>;
};


export type MutationUpdateManyHomePagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: HomePageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HomePageManyWhereInput>;
};


export type MutationUpdateManyNavigationsArgs = {
  data: NavigationUpdateManyInput;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationUpdateManyNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: NavigationUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationUpdateManyPagesArgs = {
  data: PageUpdateManyInput;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUpdateManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: PageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUpdateManyStaffsArgs = {
  data: StaffUpdateManyInput;
  where?: InputMaybe<StaffManyWhereInput>;
};


export type MutationUpdateManyStaffsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: StaffUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StaffManyWhereInput>;
};


export type MutationUpdateNavigationArgs = {
  data: NavigationUpdateInput;
  where: NavigationWhereUniqueInput;
};


export type MutationUpdatePageArgs = {
  data: PageUpdateInput;
  where: PageWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateStaffArgs = {
  data: StaffUpdateInput;
  where: StaffWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertHomePageArgs = {
  upsert: HomePageUpsertInput;
  where: HomePageWhereUniqueInput;
};


export type MutationUpsertNavigationArgs = {
  upsert: NavigationUpsertInput;
  where: NavigationWhereUniqueInput;
};


export type MutationUpsertPageArgs = {
  upsert: PageUpsertInput;
  where: PageWhereUniqueInput;
};


export type MutationUpsertStaffArgs = {
  upsert: StaffUpsertInput;
  where: StaffWhereUniqueInput;
};

export type NavLink = Entity & {
  __typename?: 'NavLink';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  page?: Maybe<Page>;
  /** System stage field */
  stage: Stage;
};


export type NavLinkPageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type NavLinkConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: NavLinkWhereUniqueInput;
};

/** A connection to a list of items. */
export type NavLinkConnection = {
  __typename?: 'NavLinkConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<NavLinkEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type NavLinkCreateInput = {
  page?: InputMaybe<PageCreateOneInlineInput>;
};

export type NavLinkCreateManyInlineInput = {
  /** Create and connect multiple existing NavLink documents */
  create?: InputMaybe<Array<NavLinkCreateInput>>;
};

export type NavLinkCreateOneInlineInput = {
  /** Create and connect one NavLink document */
  create?: InputMaybe<NavLinkCreateInput>;
};

export type NavLinkCreateWithPositionInput = {
  /** Document to create */
  data: NavLinkCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type NavLinkEdge = {
  __typename?: 'NavLinkEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: NavLink;
};

/** Identifies documents */
export type NavLinkManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavLinkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavLinkWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavLinkWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  page?: InputMaybe<PageWhereInput>;
};

export enum NavLinkOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type NavLinkParent = Navigation;

export type NavLinkParentConnectInput = {
  Navigation?: InputMaybe<NavigationConnectInput>;
};

export type NavLinkParentCreateInput = {
  Navigation?: InputMaybe<NavigationCreateInput>;
};

export type NavLinkParentCreateManyInlineInput = {
  /** Connect multiple existing NavLinkParent documents */
  connect?: InputMaybe<Array<NavLinkParentWhereUniqueInput>>;
  /** Create and connect multiple existing NavLinkParent documents */
  create?: InputMaybe<Array<NavLinkParentCreateInput>>;
};

export type NavLinkParentCreateOneInlineInput = {
  /** Connect one existing NavLinkParent document */
  connect?: InputMaybe<NavLinkParentWhereUniqueInput>;
  /** Create and connect one NavLinkParent document */
  create?: InputMaybe<NavLinkParentCreateInput>;
};

export type NavLinkParentUpdateInput = {
  Navigation?: InputMaybe<NavigationUpdateInput>;
};

export type NavLinkParentUpdateManyInlineInput = {
  /** Connect multiple existing NavLinkParent documents */
  connect?: InputMaybe<Array<NavLinkParentConnectInput>>;
  /** Create and connect multiple NavLinkParent documents */
  create?: InputMaybe<Array<NavLinkParentCreateInput>>;
  /** Delete multiple NavLinkParent documents */
  delete?: InputMaybe<Array<NavLinkParentWhereUniqueInput>>;
  /** Disconnect multiple NavLinkParent documents */
  disconnect?: InputMaybe<Array<NavLinkParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing NavLinkParent documents */
  set?: InputMaybe<Array<NavLinkParentWhereUniqueInput>>;
  /** Update multiple NavLinkParent documents */
  update?: InputMaybe<Array<NavLinkParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple NavLinkParent documents */
  upsert?: InputMaybe<Array<NavLinkParentUpsertWithNestedWhereUniqueInput>>;
};

export type NavLinkParentUpdateManyWithNestedWhereInput = {
  Navigation?: InputMaybe<NavigationUpdateManyWithNestedWhereInput>;
};

export type NavLinkParentUpdateOneInlineInput = {
  /** Connect existing NavLinkParent document */
  connect?: InputMaybe<NavLinkParentWhereUniqueInput>;
  /** Create and connect one NavLinkParent document */
  create?: InputMaybe<NavLinkParentCreateInput>;
  /** Delete currently connected NavLinkParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected NavLinkParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single NavLinkParent document */
  update?: InputMaybe<NavLinkParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single NavLinkParent document */
  upsert?: InputMaybe<NavLinkParentUpsertWithNestedWhereUniqueInput>;
};

export type NavLinkParentUpdateWithNestedWhereUniqueInput = {
  Navigation?: InputMaybe<NavigationUpdateWithNestedWhereUniqueInput>;
};

export type NavLinkParentUpsertWithNestedWhereUniqueInput = {
  Navigation?: InputMaybe<NavigationUpsertWithNestedWhereUniqueInput>;
};

export type NavLinkParentWhereInput = {
  Navigation?: InputMaybe<NavigationWhereInput>;
};

export type NavLinkParentWhereUniqueInput = {
  Navigation?: InputMaybe<NavigationWhereUniqueInput>;
};

export type NavLinkUpdateInput = {
  page?: InputMaybe<PageUpdateOneInlineInput>;
};

export type NavLinkUpdateManyInlineInput = {
  /** Create and connect multiple NavLink component instances */
  create?: InputMaybe<Array<NavLinkCreateWithPositionInput>>;
  /** Delete multiple NavLink documents */
  delete?: InputMaybe<Array<NavLinkWhereUniqueInput>>;
  /** Update multiple NavLink component instances */
  update?: InputMaybe<Array<NavLinkUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple NavLink component instances */
  upsert?: InputMaybe<Array<NavLinkUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type NavLinkUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type NavLinkUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: NavLinkUpdateManyInput;
  /** Document search */
  where: NavLinkWhereInput;
};

export type NavLinkUpdateOneInlineInput = {
  /** Create and connect one NavLink document */
  create?: InputMaybe<NavLinkCreateInput>;
  /** Delete currently connected NavLink document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single NavLink document */
  update?: InputMaybe<NavLinkUpdateWithNestedWhereUniqueInput>;
  /** Upsert single NavLink document */
  upsert?: InputMaybe<NavLinkUpsertWithNestedWhereUniqueInput>;
};

export type NavLinkUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<NavLinkUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: NavLinkWhereUniqueInput;
};

export type NavLinkUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: NavLinkUpdateInput;
  /** Unique document search */
  where: NavLinkWhereUniqueInput;
};

export type NavLinkUpsertInput = {
  /** Create document if it didn't exist */
  create: NavLinkCreateInput;
  /** Update document if it exists */
  update: NavLinkUpdateInput;
};

export type NavLinkUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<NavLinkUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: NavLinkWhereUniqueInput;
};

export type NavLinkUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: NavLinkUpsertInput;
  /** Unique document search */
  where: NavLinkWhereUniqueInput;
};

/** Identifies documents */
export type NavLinkWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavLinkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavLinkWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavLinkWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  page?: InputMaybe<PageWhereInput>;
};

/** References NavLink record uniquely */
export type NavLinkWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Navigation = Entity & Node & {
  __typename?: 'Navigation';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Navigation>;
  /** List of Navigation versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  logo?: Maybe<Asset>;
  logoText?: Maybe<Scalars['String']['output']>;
  menuItems: Array<NavigationmenuItemsUnion>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type NavigationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type NavigationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type NavigationHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type NavigationLogoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};


export type NavigationMenuItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NavigationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type NavigationScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type NavigationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type NavigationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: NavigationWhereUniqueInput;
};

/** A connection to a list of items. */
export type NavigationConnection = {
  __typename?: 'NavigationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<NavigationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type NavigationCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  logo?: InputMaybe<AssetCreateOneInlineInput>;
  logoText?: InputMaybe<Scalars['String']['input']>;
  menuItems?: InputMaybe<NavigationmenuItemsUnionCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NavigationCreateManyInlineInput = {
  /** Connect multiple existing Navigation documents */
  connect?: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Create and connect multiple existing Navigation documents */
  create?: InputMaybe<Array<NavigationCreateInput>>;
};

export type NavigationCreateOneInlineInput = {
  /** Connect one existing Navigation document */
  connect?: InputMaybe<NavigationWhereUniqueInput>;
  /** Create and connect one Navigation document */
  create?: InputMaybe<NavigationCreateInput>;
};

/** An edge in a connection. */
export type NavigationEdge = {
  __typename?: 'NavigationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Navigation;
};

/** Identifies documents */
export type NavigationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<NavigationWhereStageInput>;
  documentInStages_none?: InputMaybe<NavigationWhereStageInput>;
  documentInStages_some?: InputMaybe<NavigationWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  logo?: InputMaybe<AssetWhereInput>;
  logoText?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  logoText_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  logoText_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  logoText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  logoText_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  logoText_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  logoText_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  logoText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  logoText_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  logoText_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  menuItems_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  menuItems_some?: InputMaybe<NavigationmenuItemsUnionWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum NavigationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LogoTextAsc = 'logoText_ASC',
  LogoTextDesc = 'logoText_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type NavigationUpdateInput = {
  logo?: InputMaybe<AssetUpdateOneInlineInput>;
  logoText?: InputMaybe<Scalars['String']['input']>;
  menuItems?: InputMaybe<NavigationmenuItemsUnionUpdateManyInlineInput>;
};

export type NavigationUpdateManyInlineInput = {
  /** Connect multiple existing Navigation documents */
  connect?: InputMaybe<Array<NavigationConnectInput>>;
  /** Create and connect multiple Navigation documents */
  create?: InputMaybe<Array<NavigationCreateInput>>;
  /** Delete multiple Navigation documents */
  delete?: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Disconnect multiple Navigation documents */
  disconnect?: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Navigation documents */
  set?: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Update multiple Navigation documents */
  update?: InputMaybe<Array<NavigationUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Navigation documents */
  upsert?: InputMaybe<Array<NavigationUpsertWithNestedWhereUniqueInput>>;
};

export type NavigationUpdateManyInput = {
  logoText?: InputMaybe<Scalars['String']['input']>;
};

export type NavigationUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: NavigationUpdateManyInput;
  /** Document search */
  where: NavigationWhereInput;
};

export type NavigationUpdateOneInlineInput = {
  /** Connect existing Navigation document */
  connect?: InputMaybe<NavigationWhereUniqueInput>;
  /** Create and connect one Navigation document */
  create?: InputMaybe<NavigationCreateInput>;
  /** Delete currently connected Navigation document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Navigation document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Navigation document */
  update?: InputMaybe<NavigationUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Navigation document */
  upsert?: InputMaybe<NavigationUpsertWithNestedWhereUniqueInput>;
};

export type NavigationUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: NavigationUpdateInput;
  /** Unique document search */
  where: NavigationWhereUniqueInput;
};

export type NavigationUpsertInput = {
  /** Create document if it didn't exist */
  create: NavigationCreateInput;
  /** Update document if it exists */
  update: NavigationUpdateInput;
};

export type NavigationUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: NavigationUpsertInput;
  /** Unique document search */
  where: NavigationWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type NavigationWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type NavigationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<NavigationWhereStageInput>;
  documentInStages_none?: InputMaybe<NavigationWhereStageInput>;
  documentInStages_some?: InputMaybe<NavigationWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  logo?: InputMaybe<AssetWhereInput>;
  logoText?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  logoText_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  logoText_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  logoText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  logoText_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  logoText_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  logoText_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  logoText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  logoText_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  logoText_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  menuItems_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  menuItems_some?: InputMaybe<NavigationmenuItemsUnionWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type NavigationWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<NavigationWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Navigation record uniquely */
export type NavigationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type NavigationmenuItemsUnion = NavLink;

export type NavigationmenuItemsUnionConnectInput = {
  NavLink?: InputMaybe<NavLinkConnectInput>;
};

export type NavigationmenuItemsUnionCreateInput = {
  NavLink?: InputMaybe<NavLinkCreateInput>;
};

export type NavigationmenuItemsUnionCreateManyInlineInput = {
  /** Create and connect multiple existing NavigationmenuItemsUnion documents */
  create?: InputMaybe<Array<NavigationmenuItemsUnionCreateInput>>;
};

export type NavigationmenuItemsUnionCreateOneInlineInput = {
  /** Create and connect one NavigationmenuItemsUnion document */
  create?: InputMaybe<NavigationmenuItemsUnionCreateInput>;
};

export type NavigationmenuItemsUnionCreateWithPositionInput = {
  NavLink?: InputMaybe<NavLinkCreateWithPositionInput>;
};

export type NavigationmenuItemsUnionUpdateInput = {
  NavLink?: InputMaybe<NavLinkUpdateInput>;
};

export type NavigationmenuItemsUnionUpdateManyInlineInput = {
  /** Create and connect multiple NavigationmenuItemsUnion component instances */
  create?: InputMaybe<Array<NavigationmenuItemsUnionCreateWithPositionInput>>;
  /** Delete multiple NavigationmenuItemsUnion documents */
  delete?: InputMaybe<Array<NavigationmenuItemsUnionWhereUniqueInput>>;
  /** Update multiple NavigationmenuItemsUnion component instances */
  update?: InputMaybe<Array<NavigationmenuItemsUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple NavigationmenuItemsUnion component instances */
  upsert?: InputMaybe<Array<NavigationmenuItemsUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type NavigationmenuItemsUnionUpdateManyWithNestedWhereInput = {
  NavLink?: InputMaybe<NavLinkUpdateManyWithNestedWhereInput>;
};

export type NavigationmenuItemsUnionUpdateOneInlineInput = {
  /** Create and connect one NavigationmenuItemsUnion document */
  create?: InputMaybe<NavigationmenuItemsUnionCreateInput>;
  /** Delete currently connected NavigationmenuItemsUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single NavigationmenuItemsUnion document */
  update?: InputMaybe<NavigationmenuItemsUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single NavigationmenuItemsUnion document */
  upsert?: InputMaybe<NavigationmenuItemsUnionUpsertWithNestedWhereUniqueInput>;
};

export type NavigationmenuItemsUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  NavLink?: InputMaybe<NavLinkUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type NavigationmenuItemsUnionUpdateWithNestedWhereUniqueInput = {
  NavLink?: InputMaybe<NavLinkUpdateWithNestedWhereUniqueInput>;
};

export type NavigationmenuItemsUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  NavLink?: InputMaybe<NavLinkUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type NavigationmenuItemsUnionUpsertWithNestedWhereUniqueInput = {
  NavLink?: InputMaybe<NavLinkUpsertWithNestedWhereUniqueInput>;
};

export type NavigationmenuItemsUnionWhereInput = {
  NavLink?: InputMaybe<NavLinkWhereInput>;
};

export type NavigationmenuItemsUnionWhereUniqueInput = {
  NavLink?: InputMaybe<NavLinkWhereUniqueInput>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

export type Page = Entity & Node & {
  __typename?: 'Page';
  content: Array<PagecontentUnion>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Page>;
  /** List of Page versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  pageDescription?: Maybe<Scalars['String']['output']>;
  pageTitle?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PageContentArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type PageHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type PagePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PageUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PageWhereUniqueInput;
};

/** A connection to a list of items. */
export type PageConnection = {
  __typename?: 'PageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PageCreateInput = {
  cltvzw18k0ee407ur0nu2148r?: InputMaybe<NavLinkCreateManyInlineInput>;
  content?: InputMaybe<PagecontentUnionCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  pageDescription?: InputMaybe<Scalars['String']['input']>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PageCreateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Create and connect multiple existing Page documents */
  create?: InputMaybe<Array<PageCreateInput>>;
};

export type PageCreateOneInlineInput = {
  /** Connect one existing Page document */
  connect?: InputMaybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: InputMaybe<PageCreateInput>;
};

/** An edge in a connection. */
export type PageEdge = {
  __typename?: 'PageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Page;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** Identifies documents */
export type PageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  content_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  content_some?: InputMaybe<PagecontentUnionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PageWhereStageInput>;
  documentInStages_none?: InputMaybe<PageWhereStageInput>;
  documentInStages_some?: InputMaybe<PageWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  pageDescription?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  pageDescription_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  pageDescription_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pageDescription_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  pageDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  pageDescription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  pageDescription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  pageDescription_starts_with?: InputMaybe<Scalars['String']['input']>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  pageTitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  pageTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pageTitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  pageTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  pageTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  pageTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  pageTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PageDescriptionAsc = 'pageDescription_ASC',
  PageDescriptionDesc = 'pageDescription_DESC',
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PageUpdateInput = {
  cltvzw18k0ee407ur0nu2148r?: InputMaybe<NavLinkUpdateManyInlineInput>;
  content?: InputMaybe<PagecontentUnionUpdateManyInlineInput>;
  pageDescription?: InputMaybe<Scalars['String']['input']>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type PageUpdateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: InputMaybe<Array<PageConnectInput>>;
  /** Create and connect multiple Page documents */
  create?: InputMaybe<Array<PageCreateInput>>;
  /** Delete multiple Page documents */
  delete?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Disconnect multiple Page documents */
  disconnect?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Page documents */
  set?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Update multiple Page documents */
  update?: InputMaybe<Array<PageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Page documents */
  upsert?: InputMaybe<Array<PageUpsertWithNestedWhereUniqueInput>>;
};

export type PageUpdateManyInput = {
  pageDescription?: InputMaybe<Scalars['String']['input']>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
};

export type PageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PageUpdateManyInput;
  /** Document search */
  where: PageWhereInput;
};

export type PageUpdateOneInlineInput = {
  /** Connect existing Page document */
  connect?: InputMaybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: InputMaybe<PageCreateInput>;
  /** Delete currently connected Page document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Page document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Page document */
  update?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Page document */
  upsert?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type PageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PageUpdateInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

export type PageUpsertInput = {
  /** Create document if it didn't exist */
  create: PageCreateInput;
  /** Update document if it exists */
  update: PageUpdateInput;
};

export type PageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PageUpsertInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type PageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  content_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  content_some?: InputMaybe<PagecontentUnionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PageWhereStageInput>;
  documentInStages_none?: InputMaybe<PageWhereStageInput>;
  documentInStages_some?: InputMaybe<PageWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  pageDescription?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  pageDescription_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  pageDescription_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pageDescription_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  pageDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  pageDescription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  pageDescription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  pageDescription_starts_with?: InputMaybe<Scalars['String']['input']>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  pageTitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  pageTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pageTitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  pageTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  pageTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  pageTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  pageTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Page record uniquely */
export type PageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type PagecontentUnion = Hero | Image | StaffList | Text;

export type PagecontentUnionConnectInput = {
  Hero?: InputMaybe<HeroConnectInput>;
  Image?: InputMaybe<ImageConnectInput>;
  StaffList?: InputMaybe<StaffListConnectInput>;
  Text?: InputMaybe<TextConnectInput>;
};

export type PagecontentUnionCreateInput = {
  Hero?: InputMaybe<HeroCreateInput>;
  Image?: InputMaybe<ImageCreateInput>;
  StaffList?: InputMaybe<StaffListCreateInput>;
  Text?: InputMaybe<TextCreateInput>;
};

export type PagecontentUnionCreateManyInlineInput = {
  /** Create and connect multiple existing PagecontentUnion documents */
  create?: InputMaybe<Array<PagecontentUnionCreateInput>>;
};

export type PagecontentUnionCreateOneInlineInput = {
  /** Create and connect one PagecontentUnion document */
  create?: InputMaybe<PagecontentUnionCreateInput>;
};

export type PagecontentUnionCreateWithPositionInput = {
  Hero?: InputMaybe<HeroCreateWithPositionInput>;
  Image?: InputMaybe<ImageCreateWithPositionInput>;
  StaffList?: InputMaybe<StaffListCreateWithPositionInput>;
  Text?: InputMaybe<TextCreateWithPositionInput>;
};

export type PagecontentUnionUpdateInput = {
  Hero?: InputMaybe<HeroUpdateInput>;
  Image?: InputMaybe<ImageUpdateInput>;
  StaffList?: InputMaybe<StaffListUpdateInput>;
  Text?: InputMaybe<TextUpdateInput>;
};

export type PagecontentUnionUpdateManyInlineInput = {
  /** Create and connect multiple PagecontentUnion component instances */
  create?: InputMaybe<Array<PagecontentUnionCreateWithPositionInput>>;
  /** Delete multiple PagecontentUnion documents */
  delete?: InputMaybe<Array<PagecontentUnionWhereUniqueInput>>;
  /** Update multiple PagecontentUnion component instances */
  update?: InputMaybe<Array<PagecontentUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple PagecontentUnion component instances */
  upsert?: InputMaybe<Array<PagecontentUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type PagecontentUnionUpdateManyWithNestedWhereInput = {
  Hero?: InputMaybe<HeroUpdateManyWithNestedWhereInput>;
  Image?: InputMaybe<ImageUpdateManyWithNestedWhereInput>;
  StaffList?: InputMaybe<StaffListUpdateManyWithNestedWhereInput>;
  Text?: InputMaybe<TextUpdateManyWithNestedWhereInput>;
};

export type PagecontentUnionUpdateOneInlineInput = {
  /** Create and connect one PagecontentUnion document */
  create?: InputMaybe<PagecontentUnionCreateInput>;
  /** Delete currently connected PagecontentUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PagecontentUnion document */
  update?: InputMaybe<PagecontentUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PagecontentUnion document */
  upsert?: InputMaybe<PagecontentUnionUpsertWithNestedWhereUniqueInput>;
};

export type PagecontentUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Hero?: InputMaybe<HeroUpdateWithNestedWhereUniqueAndPositionInput>;
  Image?: InputMaybe<ImageUpdateWithNestedWhereUniqueAndPositionInput>;
  StaffList?: InputMaybe<StaffListUpdateWithNestedWhereUniqueAndPositionInput>;
  Text?: InputMaybe<TextUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type PagecontentUnionUpdateWithNestedWhereUniqueInput = {
  Hero?: InputMaybe<HeroUpdateWithNestedWhereUniqueInput>;
  Image?: InputMaybe<ImageUpdateWithNestedWhereUniqueInput>;
  StaffList?: InputMaybe<StaffListUpdateWithNestedWhereUniqueInput>;
  Text?: InputMaybe<TextUpdateWithNestedWhereUniqueInput>;
};

export type PagecontentUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Hero?: InputMaybe<HeroUpsertWithNestedWhereUniqueAndPositionInput>;
  Image?: InputMaybe<ImageUpsertWithNestedWhereUniqueAndPositionInput>;
  StaffList?: InputMaybe<StaffListUpsertWithNestedWhereUniqueAndPositionInput>;
  Text?: InputMaybe<TextUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type PagecontentUnionUpsertWithNestedWhereUniqueInput = {
  Hero?: InputMaybe<HeroUpsertWithNestedWhereUniqueInput>;
  Image?: InputMaybe<ImageUpsertWithNestedWhereUniqueInput>;
  StaffList?: InputMaybe<StaffListUpsertWithNestedWhereUniqueInput>;
  Text?: InputMaybe<TextUpsertWithNestedWhereUniqueInput>;
};

export type PagecontentUnionWhereInput = {
  Hero?: InputMaybe<HeroWhereInput>;
  Image?: InputMaybe<ImageWhereInput>;
  StaffList?: InputMaybe<StaffListWhereInput>;
  Text?: InputMaybe<TextWhereInput>;
};

export type PagecontentUnionWhereUniqueInput = {
  Hero?: InputMaybe<HeroWhereUniqueInput>;
  Image?: InputMaybe<ImageWhereUniqueInput>;
  StaffList?: InputMaybe<StaffListWhereUniqueInput>;
  Text?: InputMaybe<TextWhereUniqueInput>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Fetches an object given its ID */
  entities?: Maybe<Array<Entity>>;
  /** Retrieve a single homePage */
  homePage?: Maybe<HomePage>;
  /** Retrieve document version */
  homePageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple homePages */
  homePages: Array<HomePage>;
  /** Retrieve multiple homePages using the Relay connection interface */
  homePagesConnection: HomePageConnection;
  /** Retrieve a single navigation */
  navigation?: Maybe<Navigation>;
  /** Retrieve document version */
  navigationVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple navigations */
  navigations: Array<Navigation>;
  /** Retrieve multiple navigations using the Relay connection interface */
  navigationsConnection: NavigationConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single page */
  page?: Maybe<Page>;
  /** Retrieve document version */
  pageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pages */
  pages: Array<Page>;
  /** Retrieve multiple pages using the Relay connection interface */
  pagesConnection: PageConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single staff */
  staff?: Maybe<Staff>;
  /** Retrieve document version */
  staffVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple staffs */
  staffs: Array<Staff>;
  /** Retrieve multiple staffs using the Relay connection interface */
  staffsConnection: StaffConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryEntitiesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  where: Array<EntityWhereInput>;
};


export type QueryHomePageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: HomePageWhereUniqueInput;
};


export type QueryHomePageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryHomePagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<HomePageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<HomePageWhereInput>;
};


export type QueryHomePagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<HomePageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<HomePageWhereInput>;
};


export type QueryNavigationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: NavigationWhereUniqueInput;
};


export type QueryNavigationVersionArgs = {
  where: VersionWhereInput;
};


export type QueryNavigationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NavigationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<NavigationWhereInput>;
};


export type QueryNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NavigationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<NavigationWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PageWhereUniqueInput;
};


export type QueryPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryStaffArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: StaffWhereUniqueInput;
};


export type QueryStaffVersionArgs = {
  where: VersionWhereInput;
};


export type QueryStaffsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<StaffOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<StaffWhereInput>;
};


export type QueryStaffsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<StaffOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<StaffWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency']['output'];
  b: Scalars['RGBAHue']['output'];
  g: Scalars['RGBAHue']['output'];
  r: Scalars['RGBAHue']['output'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency']['input'];
  b: Scalars['RGBAHue']['input'];
  g: Scalars['RGBAHue']['input'];
  r: Scalars['RGBAHue']['input'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String']['output'];
  /** Returns Markdown representation */
  markdown: Scalars['String']['output'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST']['output'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String']['output'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Entity & Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json']['output'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | HomePage | Navigation | Page | Staff;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Entity & Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean']['output'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean']['output'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Staff = Entity & Node & {
  __typename?: 'Staff';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Staff>;
  /** List of Staff versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image?: Maybe<Asset>;
  label?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type StaffCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type StaffDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type StaffHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type StaffImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};


export type StaffPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type StaffScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type StaffUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type StaffConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: StaffWhereUniqueInput;
};

/** A connection to a list of items. */
export type StaffConnection = {
  __typename?: 'StaffConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<StaffEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type StaffCreateInput = {
  clu8ojrqk1cn407uqaj3o4zt9?: InputMaybe<StaffListCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
  label?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type StaffCreateManyInlineInput = {
  /** Connect multiple existing Staff documents */
  connect?: InputMaybe<Array<StaffWhereUniqueInput>>;
  /** Create and connect multiple existing Staff documents */
  create?: InputMaybe<Array<StaffCreateInput>>;
};

export type StaffCreateOneInlineInput = {
  /** Connect one existing Staff document */
  connect?: InputMaybe<StaffWhereUniqueInput>;
  /** Create and connect one Staff document */
  create?: InputMaybe<StaffCreateInput>;
};

/** An edge in a connection. */
export type StaffEdge = {
  __typename?: 'StaffEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Staff;
};

export type StaffList = Entity & {
  __typename?: 'StaffList';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  staffs: Array<Staff>;
  /** System stage field */
  stage: Stage;
};


export type StaffListStaffsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<StaffOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StaffWhereInput>;
};

export type StaffListConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: StaffListWhereUniqueInput;
};

/** A connection to a list of items. */
export type StaffListConnection = {
  __typename?: 'StaffListConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<StaffListEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type StaffListCreateInput = {
  staffs?: InputMaybe<StaffCreateManyInlineInput>;
};

export type StaffListCreateManyInlineInput = {
  /** Create and connect multiple existing StaffList documents */
  create?: InputMaybe<Array<StaffListCreateInput>>;
};

export type StaffListCreateOneInlineInput = {
  /** Create and connect one StaffList document */
  create?: InputMaybe<StaffListCreateInput>;
};

export type StaffListCreateWithPositionInput = {
  /** Document to create */
  data: StaffListCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type StaffListEdge = {
  __typename?: 'StaffListEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: StaffList;
};

/** Identifies documents */
export type StaffListManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StaffListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StaffListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StaffListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  staffs_every?: InputMaybe<StaffWhereInput>;
  staffs_none?: InputMaybe<StaffWhereInput>;
  staffs_some?: InputMaybe<StaffWhereInput>;
};

export enum StaffListOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type StaffListParent = Page;

export type StaffListParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
};

export type StaffListParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
};

export type StaffListParentCreateManyInlineInput = {
  /** Connect multiple existing StaffListParent documents */
  connect?: InputMaybe<Array<StaffListParentWhereUniqueInput>>;
  /** Create and connect multiple existing StaffListParent documents */
  create?: InputMaybe<Array<StaffListParentCreateInput>>;
};

export type StaffListParentCreateOneInlineInput = {
  /** Connect one existing StaffListParent document */
  connect?: InputMaybe<StaffListParentWhereUniqueInput>;
  /** Create and connect one StaffListParent document */
  create?: InputMaybe<StaffListParentCreateInput>;
};

export type StaffListParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
};

export type StaffListParentUpdateManyInlineInput = {
  /** Connect multiple existing StaffListParent documents */
  connect?: InputMaybe<Array<StaffListParentConnectInput>>;
  /** Create and connect multiple StaffListParent documents */
  create?: InputMaybe<Array<StaffListParentCreateInput>>;
  /** Delete multiple StaffListParent documents */
  delete?: InputMaybe<Array<StaffListParentWhereUniqueInput>>;
  /** Disconnect multiple StaffListParent documents */
  disconnect?: InputMaybe<Array<StaffListParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing StaffListParent documents */
  set?: InputMaybe<Array<StaffListParentWhereUniqueInput>>;
  /** Update multiple StaffListParent documents */
  update?: InputMaybe<Array<StaffListParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple StaffListParent documents */
  upsert?: InputMaybe<Array<StaffListParentUpsertWithNestedWhereUniqueInput>>;
};

export type StaffListParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
};

export type StaffListParentUpdateOneInlineInput = {
  /** Connect existing StaffListParent document */
  connect?: InputMaybe<StaffListParentWhereUniqueInput>;
  /** Create and connect one StaffListParent document */
  create?: InputMaybe<StaffListParentCreateInput>;
  /** Delete currently connected StaffListParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected StaffListParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single StaffListParent document */
  update?: InputMaybe<StaffListParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single StaffListParent document */
  upsert?: InputMaybe<StaffListParentUpsertWithNestedWhereUniqueInput>;
};

export type StaffListParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type StaffListParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type StaffListParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
};

export type StaffListParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
};

export type StaffListUpdateInput = {
  staffs?: InputMaybe<StaffUpdateManyInlineInput>;
};

export type StaffListUpdateManyInlineInput = {
  /** Create and connect multiple StaffList component instances */
  create?: InputMaybe<Array<StaffListCreateWithPositionInput>>;
  /** Delete multiple StaffList documents */
  delete?: InputMaybe<Array<StaffListWhereUniqueInput>>;
  /** Update multiple StaffList component instances */
  update?: InputMaybe<Array<StaffListUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple StaffList component instances */
  upsert?: InputMaybe<Array<StaffListUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type StaffListUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type StaffListUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: StaffListUpdateManyInput;
  /** Document search */
  where: StaffListWhereInput;
};

export type StaffListUpdateOneInlineInput = {
  /** Create and connect one StaffList document */
  create?: InputMaybe<StaffListCreateInput>;
  /** Delete currently connected StaffList document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single StaffList document */
  update?: InputMaybe<StaffListUpdateWithNestedWhereUniqueInput>;
  /** Upsert single StaffList document */
  upsert?: InputMaybe<StaffListUpsertWithNestedWhereUniqueInput>;
};

export type StaffListUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<StaffListUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: StaffListWhereUniqueInput;
};

export type StaffListUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: StaffListUpdateInput;
  /** Unique document search */
  where: StaffListWhereUniqueInput;
};

export type StaffListUpsertInput = {
  /** Create document if it didn't exist */
  create: StaffListCreateInput;
  /** Update document if it exists */
  update: StaffListUpdateInput;
};

export type StaffListUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<StaffListUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: StaffListWhereUniqueInput;
};

export type StaffListUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: StaffListUpsertInput;
  /** Unique document search */
  where: StaffListWhereUniqueInput;
};

/** Identifies documents */
export type StaffListWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StaffListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StaffListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StaffListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  staffs_every?: InputMaybe<StaffWhereInput>;
  staffs_none?: InputMaybe<StaffWhereInput>;
  staffs_some?: InputMaybe<StaffWhereInput>;
};

/** References StaffList record uniquely */
export type StaffListWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Identifies documents */
export type StaffManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StaffWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StaffWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StaffWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<StaffWhereStageInput>;
  documentInStages_none?: InputMaybe<StaffWhereStageInput>;
  documentInStages_some?: InputMaybe<StaffWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  label?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  label_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  label_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  label_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  label_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  label_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  label_starts_with?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum StaffOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type StaffUpdateInput = {
  clu8ojrqk1cn407uqaj3o4zt9?: InputMaybe<StaffListUpdateManyInlineInput>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  label?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type StaffUpdateManyInlineInput = {
  /** Connect multiple existing Staff documents */
  connect?: InputMaybe<Array<StaffConnectInput>>;
  /** Create and connect multiple Staff documents */
  create?: InputMaybe<Array<StaffCreateInput>>;
  /** Delete multiple Staff documents */
  delete?: InputMaybe<Array<StaffWhereUniqueInput>>;
  /** Disconnect multiple Staff documents */
  disconnect?: InputMaybe<Array<StaffWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Staff documents */
  set?: InputMaybe<Array<StaffWhereUniqueInput>>;
  /** Update multiple Staff documents */
  update?: InputMaybe<Array<StaffUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Staff documents */
  upsert?: InputMaybe<Array<StaffUpsertWithNestedWhereUniqueInput>>;
};

export type StaffUpdateManyInput = {
  label?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type StaffUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: StaffUpdateManyInput;
  /** Document search */
  where: StaffWhereInput;
};

export type StaffUpdateOneInlineInput = {
  /** Connect existing Staff document */
  connect?: InputMaybe<StaffWhereUniqueInput>;
  /** Create and connect one Staff document */
  create?: InputMaybe<StaffCreateInput>;
  /** Delete currently connected Staff document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Staff document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Staff document */
  update?: InputMaybe<StaffUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Staff document */
  upsert?: InputMaybe<StaffUpsertWithNestedWhereUniqueInput>;
};

export type StaffUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: StaffUpdateInput;
  /** Unique document search */
  where: StaffWhereUniqueInput;
};

export type StaffUpsertInput = {
  /** Create document if it didn't exist */
  create: StaffCreateInput;
  /** Update document if it exists */
  update: StaffUpdateInput;
};

export type StaffUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: StaffUpsertInput;
  /** Unique document search */
  where: StaffWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type StaffWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type StaffWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StaffWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StaffWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StaffWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<StaffWhereStageInput>;
  documentInStages_none?: InputMaybe<StaffWhereStageInput>;
  documentInStages_some?: InputMaybe<StaffWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  label?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  label_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  label_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  label_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  label_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  label_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  label_starts_with?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type StaffWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StaffWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StaffWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StaffWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<StaffWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Staff record uniquely */
export type StaffWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type Text = Entity & {
  __typename?: 'Text';
  body?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
};

export type TextConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TextWhereUniqueInput;
};

/** A connection to a list of items. */
export type TextConnection = {
  __typename?: 'TextConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TextEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TextCreateInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TextCreateManyInlineInput = {
  /** Create and connect multiple existing Text documents */
  create?: InputMaybe<Array<TextCreateInput>>;
};

export type TextCreateOneInlineInput = {
  /** Create and connect one Text document */
  create?: InputMaybe<TextCreateInput>;
};

export type TextCreateWithPositionInput = {
  /** Document to create */
  data: TextCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type TextEdge = {
  __typename?: 'TextEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Text;
};

/** Identifies documents */
export type TextManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TextWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TextWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TextWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  body_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  body_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  body_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  body_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  body_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  body_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  body_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  body_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum TextOrderByInput {
  BodyAsc = 'body_ASC',
  BodyDesc = 'body_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type TextParent = HomePage | Page;

export type TextParentConnectInput = {
  HomePage?: InputMaybe<HomePageConnectInput>;
  Page?: InputMaybe<PageConnectInput>;
};

export type TextParentCreateInput = {
  HomePage?: InputMaybe<HomePageCreateInput>;
  Page?: InputMaybe<PageCreateInput>;
};

export type TextParentCreateManyInlineInput = {
  /** Connect multiple existing TextParent documents */
  connect?: InputMaybe<Array<TextParentWhereUniqueInput>>;
  /** Create and connect multiple existing TextParent documents */
  create?: InputMaybe<Array<TextParentCreateInput>>;
};

export type TextParentCreateOneInlineInput = {
  /** Connect one existing TextParent document */
  connect?: InputMaybe<TextParentWhereUniqueInput>;
  /** Create and connect one TextParent document */
  create?: InputMaybe<TextParentCreateInput>;
};

export type TextParentUpdateInput = {
  HomePage?: InputMaybe<HomePageUpdateInput>;
  Page?: InputMaybe<PageUpdateInput>;
};

export type TextParentUpdateManyInlineInput = {
  /** Connect multiple existing TextParent documents */
  connect?: InputMaybe<Array<TextParentConnectInput>>;
  /** Create and connect multiple TextParent documents */
  create?: InputMaybe<Array<TextParentCreateInput>>;
  /** Delete multiple TextParent documents */
  delete?: InputMaybe<Array<TextParentWhereUniqueInput>>;
  /** Disconnect multiple TextParent documents */
  disconnect?: InputMaybe<Array<TextParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing TextParent documents */
  set?: InputMaybe<Array<TextParentWhereUniqueInput>>;
  /** Update multiple TextParent documents */
  update?: InputMaybe<Array<TextParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple TextParent documents */
  upsert?: InputMaybe<Array<TextParentUpsertWithNestedWhereUniqueInput>>;
};

export type TextParentUpdateManyWithNestedWhereInput = {
  HomePage?: InputMaybe<HomePageUpdateManyWithNestedWhereInput>;
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
};

export type TextParentUpdateOneInlineInput = {
  /** Connect existing TextParent document */
  connect?: InputMaybe<TextParentWhereUniqueInput>;
  /** Create and connect one TextParent document */
  create?: InputMaybe<TextParentCreateInput>;
  /** Delete currently connected TextParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected TextParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single TextParent document */
  update?: InputMaybe<TextParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TextParent document */
  upsert?: InputMaybe<TextParentUpsertWithNestedWhereUniqueInput>;
};

export type TextParentUpdateWithNestedWhereUniqueInput = {
  HomePage?: InputMaybe<HomePageUpdateWithNestedWhereUniqueInput>;
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type TextParentUpsertWithNestedWhereUniqueInput = {
  HomePage?: InputMaybe<HomePageUpsertWithNestedWhereUniqueInput>;
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type TextParentWhereInput = {
  HomePage?: InputMaybe<HomePageWhereInput>;
  Page?: InputMaybe<PageWhereInput>;
};

export type TextParentWhereUniqueInput = {
  HomePage?: InputMaybe<HomePageWhereUniqueInput>;
  Page?: InputMaybe<PageWhereUniqueInput>;
};

export type TextUpdateInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TextUpdateManyInlineInput = {
  /** Create and connect multiple Text component instances */
  create?: InputMaybe<Array<TextCreateWithPositionInput>>;
  /** Delete multiple Text documents */
  delete?: InputMaybe<Array<TextWhereUniqueInput>>;
  /** Update multiple Text component instances */
  update?: InputMaybe<Array<TextUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Text component instances */
  upsert?: InputMaybe<Array<TextUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type TextUpdateManyInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TextUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TextUpdateManyInput;
  /** Document search */
  where: TextWhereInput;
};

export type TextUpdateOneInlineInput = {
  /** Create and connect one Text document */
  create?: InputMaybe<TextCreateInput>;
  /** Delete currently connected Text document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Text document */
  update?: InputMaybe<TextUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Text document */
  upsert?: InputMaybe<TextUpsertWithNestedWhereUniqueInput>;
};

export type TextUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<TextUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TextWhereUniqueInput;
};

export type TextUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TextUpdateInput;
  /** Unique document search */
  where: TextWhereUniqueInput;
};

export type TextUpsertInput = {
  /** Create document if it didn't exist */
  create: TextCreateInput;
  /** Update document if it exists */
  update: TextUpdateInput;
};

export type TextUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<TextUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TextWhereUniqueInput;
};

export type TextUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TextUpsertInput;
  /** Unique document search */
  where: TextWhereUniqueInput;
};

/** Identifies documents */
export type TextWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TextWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TextWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TextWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  body_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  body_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  body_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  body_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  body_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  body_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  body_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  body_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References Text record uniquely */
export type TextWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Entity & Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean']['output'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String']['output'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  AppToken = 'APP_TOKEN',
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID']['input'];
  revision: Scalars['Int']['input'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type HeroFragment = { __typename?: 'Hero', id: string, ingress?: string | null, title?: string | null, heroImage: { __typename?: 'Asset', url: string } } & { ' $fragmentName'?: 'HeroFragment' };

export type ImageBasicFragment = { __typename?: 'Asset', url: string } & { ' $fragmentName'?: 'ImageBasicFragment' };

export type ImageBlockFragment = { __typename?: 'Image', image?: { __typename?: 'Asset', url: string, height?: number | null, width?: number | null } | null } & { ' $fragmentName'?: 'ImageBlockFragment' };

export type NavLinkFragment = { __typename?: 'NavLink', id: string, page?: { __typename?: 'Page', slug?: string | null, pageTitle?: string | null } | null } & { ' $fragmentName'?: 'NavLinkFragment' };

export type StaffListFragment = { __typename?: 'StaffList', id: string, staffs: Array<(
    { __typename?: 'Staff' }
    & { ' $fragmentRefs'?: { 'StaffFragment': StaffFragment } }
  )> } & { ' $fragmentName'?: 'StaffListFragment' };

export type StaffFragment = { __typename?: 'Staff', name?: string | null, label?: string | null, image?: { __typename?: 'Asset', url: string } | null } & { ' $fragmentName'?: 'StaffFragment' };

export type TextFragment = { __typename?: 'Text', id: string, title?: string | null, body?: string | null } & { ' $fragmentName'?: 'TextFragment' };

export type HomePageFragment = { __typename?: 'HomePage', id: string, pageTitle?: string | null, pageDescription?: string | null, content: Array<(
    { __typename?: 'Hero' }
    & { ' $fragmentRefs'?: { 'HeroFragment': HeroFragment } }
  ) | (
    { __typename?: 'Image' }
    & { ' $fragmentRefs'?: { 'ImageBlockFragment': ImageBlockFragment } }
  ) | (
    { __typename?: 'Text' }
    & { ' $fragmentRefs'?: { 'TextFragment': TextFragment } }
  )> } & { ' $fragmentName'?: 'HomePageFragment' };

export type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQuery = { __typename?: 'Query', homePage?: (
    { __typename?: 'HomePage' }
    & { ' $fragmentRefs'?: { 'HomePageFragment': HomePageFragment } }
  ) | null };

export type NavigationQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type NavigationQueryQuery = { __typename?: 'Query', navigation?: { __typename?: 'Navigation', id: string, logoText?: string | null, logo?: (
      { __typename?: 'Asset' }
      & { ' $fragmentRefs'?: { 'ImageBasicFragment': ImageBasicFragment } }
    ) | null, menuItems: Array<(
      { __typename?: 'NavLink' }
      & { ' $fragmentRefs'?: { 'NavLinkFragment': NavLinkFragment } }
    )> } | null };

export type PageFragment = { __typename?: 'Page', id: string, pageTitle?: string | null, pageDescription?: string | null, slug?: string | null, content: Array<(
    { __typename?: 'Hero' }
    & { ' $fragmentRefs'?: { 'HeroFragment': HeroFragment } }
  ) | (
    { __typename?: 'Image' }
    & { ' $fragmentRefs'?: { 'ImageBlockFragment': ImageBlockFragment } }
  ) | (
    { __typename?: 'StaffList' }
    & { ' $fragmentRefs'?: { 'StaffListFragment': StaffListFragment } }
  ) | (
    { __typename?: 'Text' }
    & { ' $fragmentRefs'?: { 'TextFragment': TextFragment } }
  )> } & { ' $fragmentName'?: 'PageFragment' };

export type PageQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type PageQuery = { __typename?: 'Query', page?: (
    { __typename?: 'Page' }
    & { ' $fragmentRefs'?: { 'PageFragment': PageFragment } }
  ) | null };

export const ImageBasicFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"imageBasic"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]} as unknown as DocumentNode<ImageBasicFragment, unknown>;
export const NavLinkFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"navLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"pageTitle"}}]}}]}}]} as unknown as DocumentNode<NavLinkFragment, unknown>;
export const HeroFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"hero"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Hero"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ingress"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","alias":{"kind":"Name","value":"heroImage"},"name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<HeroFragment, unknown>;
export const ImageBlockFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"imageBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]} as unknown as DocumentNode<ImageBlockFragment, unknown>;
export const TextFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"text"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Text"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}}]}}]} as unknown as DocumentNode<TextFragment, unknown>;
export const HomePageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"homePage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomePage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pageTitle"}},{"kind":"Field","name":{"kind":"Name","value":"pageDescription"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"hero"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"imageBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"text"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"hero"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Hero"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ingress"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","alias":{"kind":"Name","value":"heroImage"},"name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"imageBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"text"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Text"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}}]}}]} as unknown as DocumentNode<HomePageFragment, unknown>;
export const StaffFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"staff"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Staff"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<StaffFragment, unknown>;
export const StaffListFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"staffList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StaffList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"staffs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"staff"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"staff"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Staff"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<StaffListFragment, unknown>;
export const PageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"page"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pageTitle"}},{"kind":"Field","name":{"kind":"Name","value":"pageDescription"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"hero"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"imageBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"staffList"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"staff"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Staff"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"hero"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Hero"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ingress"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","alias":{"kind":"Name","value":"heroImage"},"name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"imageBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"staffList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StaffList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"staffs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"staff"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"text"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Text"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}}]}}]} as unknown as DocumentNode<PageFragment, unknown>;
export const HomePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"homePage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"cltvxcrkvi8xl07ure2zpwy86","block":false}}]}},{"kind":"Argument","name":{"kind":"Name","value":"stage"},"value":{"kind":"EnumValue","value":"DRAFT"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"homePage"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"hero"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Hero"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ingress"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","alias":{"kind":"Name","value":"heroImage"},"name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"imageBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"text"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Text"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"homePage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomePage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pageTitle"}},{"kind":"Field","name":{"kind":"Name","value":"pageDescription"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"hero"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"imageBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"text"}}]}}]}}]} as unknown as DocumentNode<HomePageQuery, HomePageQueryVariables>;
export const NavigationQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NavigationQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"navigation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"cltvzxqzzjzmx07urcg4ircdf","block":false}}]}},{"kind":"Argument","name":{"kind":"Name","value":"stage"},"value":{"kind":"EnumValue","value":"DRAFT"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"imageBasic"}}]}},{"kind":"Field","name":{"kind":"Name","value":"logoText"}},{"kind":"Field","name":{"kind":"Name","value":"menuItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"navLink"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"imageBasic"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"navLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"pageTitle"}}]}}]}}]} as unknown as DocumentNode<NavigationQueryQuery, NavigationQueryQueryVariables>;
export const PageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Page"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"stage"},"value":{"kind":"EnumValue","value":"DRAFT"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"page"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"hero"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Hero"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ingress"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","alias":{"kind":"Name","value":"heroImage"},"name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"imageBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"staff"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Staff"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"staffList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StaffList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"staffs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"staff"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"text"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Text"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"page"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pageTitle"}},{"kind":"Field","name":{"kind":"Name","value":"pageDescription"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"hero"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"imageBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"staffList"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<PageQuery, PageQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  Hex: { input: any; output: any; }
  /** Raw JSON value */
  Json: { input: any; output: any; }
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: { input: any; output: any; }
  RGBAHue: { input: any; output: any; }
  RGBATransparency: { input: any; output: any; }
  /** Slate-compatible RichText AST */
  RichTextAST: { input: any; output: any; }
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int']['output'];
};

/** Asset system model */
export type Asset = Entity & Node & {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String']['output'];
  /** The file handle */
  handle: Scalars['String']['output'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']['output']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  imageStaff: Array<Staff>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  logoNavigation: Array<Navigation>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Returns information you need to upload the asset. The type of upload is dependant on what you pass into asset creations as upload type. */
  upload?: Maybe<AssetUpload>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']['output'];
  /** The file width */
  width?: Maybe<Scalars['Float']['output']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetImageStaffArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<StaffOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StaffWhereInput>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetLogoNavigationArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<NavigationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationWhereInput>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  imageHero?: InputMaybe<HeroCreateManyInlineInput>;
  imageImage?: InputMaybe<ImageCreateManyInlineInput>;
  imageStaff?: InputMaybe<StaffCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  logoNavigation?: InputMaybe<NavigationCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  imageStaff_every?: InputMaybe<StaffWhereInput>;
  imageStaff_none?: InputMaybe<StaffWhereInput>;
  imageStaff_some?: InputMaybe<StaffWhereInput>;
  logoNavigation_every?: InputMaybe<NavigationWhereInput>;
  logoNavigation_none?: InputMaybe<NavigationWhereInput>;
  logoNavigation_some?: InputMaybe<NavigationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  upload?: InputMaybe<AssetUploadWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Identifies documents */
export type AssetSingleRelationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetSingleRelationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetSingleRelationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetSingleRelationWhereInput>>;
  upload?: InputMaybe<AssetUploadWhereInput>;
};

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  imageHero?: InputMaybe<HeroUpdateManyInlineInput>;
  imageImage?: InputMaybe<ImageUpdateManyInlineInput>;
  imageStaff?: InputMaybe<StaffUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  logoNavigation?: InputMaybe<NavigationUpdateManyInlineInput>;
  /** Use this to define if its a reupload for the asset */
  reUpload?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** Use this to define if its a reupload for the asset */
  reUpload?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  /** Use this to define if its a reupload for the asset */
  reUpload?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** Use this to define if its a reupload for the asset */
  reUpload?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** Asset Upload */
export type AssetUpload = {
  __typename?: 'AssetUpload';
  /** Asset Upload Error */
  error?: Maybe<AssetUploadError>;
  /** Expiry Timestamp */
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** Asset Request Data for upload */
  requestPostData?: Maybe<AssetUploadRequestPostData>;
  /** Asset Request Data for upload */
  status?: Maybe<AssetUploadStatus>;
};

/** Represents asset upload error */
export type AssetUploadError = {
  __typename?: 'AssetUploadError';
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Asset Upload Request Post Data */
export type AssetUploadRequestPostData = {
  __typename?: 'AssetUploadRequestPostData';
  /** The algorithm to use in the form field. This value should be passed in the `X-Amz-Algorithm` form field. */
  algorithm: Scalars['String']['output'];
  /** The credential to use in the form field. This value should be passed in the `X-Amz-Credential` form field. */
  credential: Scalars['String']['output'];
  /** The date the request was signed, formatted as YYYYMMDDTHHMMSSZ. This value should be passed in the `X-Amz-Date` header. */
  date: Scalars['String']['output'];
  /** The key to use in the form field. This value should be passed in the `Key` form field. */
  key: Scalars['String']['output'];
  /** The policy to use in the form field. This value should be passed in the `Policy` form field. */
  policy: Scalars['String']['output'];
  /** The security token to use in the form field. This field is optional only pass it if its not null. This value should be passed in the `X-Amz-Security-Token` form field if not null. */
  securityToken?: Maybe<Scalars['String']['output']>;
  /** The signature to use in the form field. This value should be passed in the `X-Amz-Signature` form field. */
  signature: Scalars['String']['output'];
  /** The URL to which the file should be uploaded with a POST request. */
  url: Scalars['String']['output'];
};

/** System Asset Upload Status */
export enum AssetUploadStatus {
  AssetCreatePending = 'ASSET_CREATE_PENDING',
  AssetErrorUpload = 'ASSET_ERROR_UPLOAD',
  AssetUpdatePending = 'ASSET_UPDATE_PENDING',
  AssetUploadComplete = 'ASSET_UPLOAD_COMPLETE'
}

/** Identifies documents */
export type AssetUploadWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetUploadWhereInput>>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  expiresAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  expiresAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  expiresAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  expiresAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  expiresAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  expiresAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  expiresAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<AssetUploadStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<AssetUploadStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
};

/** Identifies documents */
export type AssetUploadWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetUploadWhereInput>>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  expiresAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  expiresAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  expiresAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  expiresAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  expiresAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  expiresAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  expiresAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<AssetUploadStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<AssetUploadStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  imageStaff_every?: InputMaybe<StaffWhereInput>;
  imageStaff_none?: InputMaybe<StaffWhereInput>;
  imageStaff_some?: InputMaybe<StaffWhereInput>;
  logoNavigation_every?: InputMaybe<NavigationWhereInput>;
  logoNavigation_none?: InputMaybe<NavigationWhereInput>;
  logoNavigation_some?: InputMaybe<NavigationWhereInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  upload?: InputMaybe<AssetUploadWhereInput>;
  width?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']['output'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String']['output'];
  hex: Scalars['Hex']['output'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']['input']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']['input']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum DocumentFileTypes {
  /** Automatically selects the best format for the image based on the browser's capabilities. */
  AutoImage = 'autoImage',
  Avif = 'avif',
  Bmp = 'bmp',
  Gif = 'gif',
  Heic = 'heic',
  Jpg = 'jpg',
  Png = 'png',
  Svg = 'svg',
  Tiff = 'tiff',
  Webp = 'webp'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * JPG:	autoImage, bmp, gif, jpg, png, webp, tiff
   * PNG:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * SVG:	autoImage, bmp, gif, jpg, png, webp, tiff
   * WEBP:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * GIF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * TIFF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * AVIF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * PDF: 	autoImage, gif, jpg, png, webp, tiff
   *
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<Scalars['Json']['output']>;
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

/** An object with an ID */
export type Entity = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

/** This enumeration holds all typenames that implement the Entity interface. Components and models implement the Entity interface. */
export enum EntityTypeName {
  /** Asset system model */
  Asset = 'Asset',
  Hero = 'Hero',
  HomePage = 'HomePage',
  Image = 'Image',
  NavLink = 'NavLink',
  Navigation = 'Navigation',
  Page = 'Page',
  /** Scheduled Operation system model */
  ScheduledOperation = 'ScheduledOperation',
  /** Scheduled Release system model */
  ScheduledRelease = 'ScheduledRelease',
  Staff = 'Staff',
  StaffList = 'StaffList',
  Text = 'Text',
  /** User system model */
  User = 'User'
}

/** Allows to specify input to query models and components directly */
export type EntityWhereInput = {
  /** The ID of an object */
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Locale>;
  stage: Stage;
  /** The Type name of an object */
  typename: EntityTypeName;
};

export type Hero = Entity & {
  __typename?: 'Hero';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image: Asset;
  ingress?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
};


export type HeroImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};

export type HeroConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: HeroWhereUniqueInput;
};

/** A connection to a list of items. */
export type HeroConnection = {
  __typename?: 'HeroConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<HeroEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type HeroCreateInput = {
  image: AssetCreateOneInlineInput;
  ingress?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type HeroCreateManyInlineInput = {
  /** Create and connect multiple existing Hero documents */
  create?: InputMaybe<Array<HeroCreateInput>>;
};

export type HeroCreateOneInlineInput = {
  /** Create and connect one Hero document */
  create?: InputMaybe<HeroCreateInput>;
};

export type HeroCreateWithPositionInput = {
  /** Document to create */
  data: HeroCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type HeroEdge = {
  __typename?: 'HeroEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Hero;
};

/** Identifies documents */
export type HeroManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeroWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  ingress?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  ingress_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  ingress_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  ingress_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  ingress_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  ingress_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  ingress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  ingress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  ingress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  ingress_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum HeroOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IngressAsc = 'ingress_ASC',
  IngressDesc = 'ingress_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type HeroParent = HomePage | Page;

export type HeroParentConnectInput = {
  HomePage?: InputMaybe<HomePageConnectInput>;
  Page?: InputMaybe<PageConnectInput>;
};

export type HeroParentCreateInput = {
  HomePage?: InputMaybe<HomePageCreateInput>;
  Page?: InputMaybe<PageCreateInput>;
};

export type HeroParentCreateManyInlineInput = {
  /** Connect multiple existing HeroParent documents */
  connect?: InputMaybe<Array<HeroParentWhereUniqueInput>>;
  /** Create and connect multiple existing HeroParent documents */
  create?: InputMaybe<Array<HeroParentCreateInput>>;
};

export type HeroParentCreateOneInlineInput = {
  /** Connect one existing HeroParent document */
  connect?: InputMaybe<HeroParentWhereUniqueInput>;
  /** Create and connect one HeroParent document */
  create?: InputMaybe<HeroParentCreateInput>;
};

export type HeroParentUpdateInput = {
  HomePage?: InputMaybe<HomePageUpdateInput>;
  Page?: InputMaybe<PageUpdateInput>;
};

export type HeroParentUpdateManyInlineInput = {
  /** Connect multiple existing HeroParent documents */
  connect?: InputMaybe<Array<HeroParentConnectInput>>;
  /** Create and connect multiple HeroParent documents */
  create?: InputMaybe<Array<HeroParentCreateInput>>;
  /** Delete multiple HeroParent documents */
  delete?: InputMaybe<Array<HeroParentWhereUniqueInput>>;
  /** Disconnect multiple HeroParent documents */
  disconnect?: InputMaybe<Array<HeroParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing HeroParent documents */
  set?: InputMaybe<Array<HeroParentWhereUniqueInput>>;
  /** Update multiple HeroParent documents */
  update?: InputMaybe<Array<HeroParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple HeroParent documents */
  upsert?: InputMaybe<Array<HeroParentUpsertWithNestedWhereUniqueInput>>;
};

export type HeroParentUpdateManyWithNestedWhereInput = {
  HomePage?: InputMaybe<HomePageUpdateManyWithNestedWhereInput>;
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
};

export type HeroParentUpdateOneInlineInput = {
  /** Connect existing HeroParent document */
  connect?: InputMaybe<HeroParentWhereUniqueInput>;
  /** Create and connect one HeroParent document */
  create?: InputMaybe<HeroParentCreateInput>;
  /** Delete currently connected HeroParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected HeroParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single HeroParent document */
  update?: InputMaybe<HeroParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single HeroParent document */
  upsert?: InputMaybe<HeroParentUpsertWithNestedWhereUniqueInput>;
};

export type HeroParentUpdateWithNestedWhereUniqueInput = {
  HomePage?: InputMaybe<HomePageUpdateWithNestedWhereUniqueInput>;
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type HeroParentUpsertWithNestedWhereUniqueInput = {
  HomePage?: InputMaybe<HomePageUpsertWithNestedWhereUniqueInput>;
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type HeroParentWhereInput = {
  HomePage?: InputMaybe<HomePageWhereInput>;
  Page?: InputMaybe<PageWhereInput>;
};

export type HeroParentWhereUniqueInput = {
  HomePage?: InputMaybe<HomePageWhereUniqueInput>;
  Page?: InputMaybe<PageWhereUniqueInput>;
};

export type HeroUpdateInput = {
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  ingress?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type HeroUpdateManyInlineInput = {
  /** Create and connect multiple Hero component instances */
  create?: InputMaybe<Array<HeroCreateWithPositionInput>>;
  /** Delete multiple Hero documents */
  delete?: InputMaybe<Array<HeroWhereUniqueInput>>;
  /** Update multiple Hero component instances */
  update?: InputMaybe<Array<HeroUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Hero component instances */
  upsert?: InputMaybe<Array<HeroUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type HeroUpdateManyInput = {
  ingress?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type HeroUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: HeroUpdateManyInput;
  /** Document search */
  where: HeroWhereInput;
};

export type HeroUpdateOneInlineInput = {
  /** Create and connect one Hero document */
  create?: InputMaybe<HeroCreateInput>;
  /** Delete currently connected Hero document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Hero document */
  update?: InputMaybe<HeroUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Hero document */
  upsert?: InputMaybe<HeroUpsertWithNestedWhereUniqueInput>;
};

export type HeroUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<HeroUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: HeroWhereUniqueInput;
};

export type HeroUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: HeroUpdateInput;
  /** Unique document search */
  where: HeroWhereUniqueInput;
};

export type HeroUpsertInput = {
  /** Create document if it didn't exist */
  create: HeroCreateInput;
  /** Update document if it exists */
  update: HeroUpdateInput;
};

export type HeroUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<HeroUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: HeroWhereUniqueInput;
};

export type HeroUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: HeroUpsertInput;
  /** Unique document search */
  where: HeroWhereUniqueInput;
};

/** Identifies documents */
export type HeroWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeroWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  ingress?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  ingress_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  ingress_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  ingress_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  ingress_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  ingress_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  ingress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  ingress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  ingress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  ingress_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References Hero record uniquely */
export type HeroWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type HomePage = Entity & Node & {
  __typename?: 'HomePage';
  content: Array<HomePagecontentUnion>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<HomePage>;
  /** List of HomePage versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  pageDescription?: Maybe<Scalars['String']['output']>;
  pageTitle?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type HomePageContentArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HomePageCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type HomePageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type HomePageHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type HomePagePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type HomePageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type HomePageUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type HomePageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: HomePageWhereUniqueInput;
};

/** A connection to a list of items. */
export type HomePageConnection = {
  __typename?: 'HomePageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<HomePageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type HomePageCreateInput = {
  content?: InputMaybe<HomePagecontentUnionCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  pageDescription?: InputMaybe<Scalars['String']['input']>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HomePageCreateManyInlineInput = {
  /** Connect multiple existing HomePage documents */
  connect?: InputMaybe<Array<HomePageWhereUniqueInput>>;
  /** Create and connect multiple existing HomePage documents */
  create?: InputMaybe<Array<HomePageCreateInput>>;
};

export type HomePageCreateOneInlineInput = {
  /** Connect one existing HomePage document */
  connect?: InputMaybe<HomePageWhereUniqueInput>;
  /** Create and connect one HomePage document */
  create?: InputMaybe<HomePageCreateInput>;
};

/** An edge in a connection. */
export type HomePageEdge = {
  __typename?: 'HomePageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: HomePage;
};

/** Identifies documents */
export type HomePageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HomePageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HomePageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HomePageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  content_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  content_some?: InputMaybe<HomePagecontentUnionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<HomePageWhereStageInput>;
  documentInStages_none?: InputMaybe<HomePageWhereStageInput>;
  documentInStages_some?: InputMaybe<HomePageWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  pageDescription?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  pageDescription_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  pageDescription_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pageDescription_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  pageDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  pageDescription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  pageDescription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  pageDescription_starts_with?: InputMaybe<Scalars['String']['input']>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  pageTitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  pageTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pageTitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  pageTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  pageTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  pageTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  pageTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum HomePageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PageDescriptionAsc = 'pageDescription_ASC',
  PageDescriptionDesc = 'pageDescription_DESC',
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type HomePageUpdateInput = {
  content?: InputMaybe<HomePagecontentUnionUpdateManyInlineInput>;
  pageDescription?: InputMaybe<Scalars['String']['input']>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
};

export type HomePageUpdateManyInlineInput = {
  /** Connect multiple existing HomePage documents */
  connect?: InputMaybe<Array<HomePageConnectInput>>;
  /** Create and connect multiple HomePage documents */
  create?: InputMaybe<Array<HomePageCreateInput>>;
  /** Delete multiple HomePage documents */
  delete?: InputMaybe<Array<HomePageWhereUniqueInput>>;
  /** Disconnect multiple HomePage documents */
  disconnect?: InputMaybe<Array<HomePageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing HomePage documents */
  set?: InputMaybe<Array<HomePageWhereUniqueInput>>;
  /** Update multiple HomePage documents */
  update?: InputMaybe<Array<HomePageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple HomePage documents */
  upsert?: InputMaybe<Array<HomePageUpsertWithNestedWhereUniqueInput>>;
};

export type HomePageUpdateManyInput = {
  pageDescription?: InputMaybe<Scalars['String']['input']>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
};

export type HomePageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: HomePageUpdateManyInput;
  /** Document search */
  where: HomePageWhereInput;
};

export type HomePageUpdateOneInlineInput = {
  /** Connect existing HomePage document */
  connect?: InputMaybe<HomePageWhereUniqueInput>;
  /** Create and connect one HomePage document */
  create?: InputMaybe<HomePageCreateInput>;
  /** Delete currently connected HomePage document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected HomePage document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single HomePage document */
  update?: InputMaybe<HomePageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single HomePage document */
  upsert?: InputMaybe<HomePageUpsertWithNestedWhereUniqueInput>;
};

export type HomePageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: HomePageUpdateInput;
  /** Unique document search */
  where: HomePageWhereUniqueInput;
};

export type HomePageUpsertInput = {
  /** Create document if it didn't exist */
  create: HomePageCreateInput;
  /** Update document if it exists */
  update: HomePageUpdateInput;
};

export type HomePageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: HomePageUpsertInput;
  /** Unique document search */
  where: HomePageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type HomePageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type HomePageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HomePageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HomePageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HomePageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  content_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  content_some?: InputMaybe<HomePagecontentUnionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<HomePageWhereStageInput>;
  documentInStages_none?: InputMaybe<HomePageWhereStageInput>;
  documentInStages_some?: InputMaybe<HomePageWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  pageDescription?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  pageDescription_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  pageDescription_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pageDescription_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  pageDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  pageDescription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  pageDescription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  pageDescription_starts_with?: InputMaybe<Scalars['String']['input']>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  pageTitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  pageTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pageTitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  pageTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  pageTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  pageTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  pageTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type HomePageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HomePageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HomePageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HomePageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<HomePageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References HomePage record uniquely */
export type HomePageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type HomePagecontentUnion = Hero | Image | Text;

export type HomePagecontentUnionConnectInput = {
  Hero?: InputMaybe<HeroConnectInput>;
  Image?: InputMaybe<ImageConnectInput>;
  Text?: InputMaybe<TextConnectInput>;
};

export type HomePagecontentUnionCreateInput = {
  Hero?: InputMaybe<HeroCreateInput>;
  Image?: InputMaybe<ImageCreateInput>;
  Text?: InputMaybe<TextCreateInput>;
};

export type HomePagecontentUnionCreateManyInlineInput = {
  /** Create and connect multiple existing HomePagecontentUnion documents */
  create?: InputMaybe<Array<HomePagecontentUnionCreateInput>>;
};

export type HomePagecontentUnionCreateOneInlineInput = {
  /** Create and connect one HomePagecontentUnion document */
  create?: InputMaybe<HomePagecontentUnionCreateInput>;
};

export type HomePagecontentUnionCreateWithPositionInput = {
  Hero?: InputMaybe<HeroCreateWithPositionInput>;
  Image?: InputMaybe<ImageCreateWithPositionInput>;
  Text?: InputMaybe<TextCreateWithPositionInput>;
};

export type HomePagecontentUnionUpdateInput = {
  Hero?: InputMaybe<HeroUpdateInput>;
  Image?: InputMaybe<ImageUpdateInput>;
  Text?: InputMaybe<TextUpdateInput>;
};

export type HomePagecontentUnionUpdateManyInlineInput = {
  /** Create and connect multiple HomePagecontentUnion component instances */
  create?: InputMaybe<Array<HomePagecontentUnionCreateWithPositionInput>>;
  /** Delete multiple HomePagecontentUnion documents */
  delete?: InputMaybe<Array<HomePagecontentUnionWhereUniqueInput>>;
  /** Update multiple HomePagecontentUnion component instances */
  update?: InputMaybe<Array<HomePagecontentUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple HomePagecontentUnion component instances */
  upsert?: InputMaybe<Array<HomePagecontentUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type HomePagecontentUnionUpdateManyWithNestedWhereInput = {
  Hero?: InputMaybe<HeroUpdateManyWithNestedWhereInput>;
  Image?: InputMaybe<ImageUpdateManyWithNestedWhereInput>;
  Text?: InputMaybe<TextUpdateManyWithNestedWhereInput>;
};

export type HomePagecontentUnionUpdateOneInlineInput = {
  /** Create and connect one HomePagecontentUnion document */
  create?: InputMaybe<HomePagecontentUnionCreateInput>;
  /** Delete currently connected HomePagecontentUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single HomePagecontentUnion document */
  update?: InputMaybe<HomePagecontentUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single HomePagecontentUnion document */
  upsert?: InputMaybe<HomePagecontentUnionUpsertWithNestedWhereUniqueInput>;
};

export type HomePagecontentUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Hero?: InputMaybe<HeroUpdateWithNestedWhereUniqueAndPositionInput>;
  Image?: InputMaybe<ImageUpdateWithNestedWhereUniqueAndPositionInput>;
  Text?: InputMaybe<TextUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type HomePagecontentUnionUpdateWithNestedWhereUniqueInput = {
  Hero?: InputMaybe<HeroUpdateWithNestedWhereUniqueInput>;
  Image?: InputMaybe<ImageUpdateWithNestedWhereUniqueInput>;
  Text?: InputMaybe<TextUpdateWithNestedWhereUniqueInput>;
};

export type HomePagecontentUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Hero?: InputMaybe<HeroUpsertWithNestedWhereUniqueAndPositionInput>;
  Image?: InputMaybe<ImageUpsertWithNestedWhereUniqueAndPositionInput>;
  Text?: InputMaybe<TextUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type HomePagecontentUnionUpsertWithNestedWhereUniqueInput = {
  Hero?: InputMaybe<HeroUpsertWithNestedWhereUniqueInput>;
  Image?: InputMaybe<ImageUpsertWithNestedWhereUniqueInput>;
  Text?: InputMaybe<TextUpsertWithNestedWhereUniqueInput>;
};

export type HomePagecontentUnionWhereInput = {
  Hero?: InputMaybe<HeroWhereInput>;
  Image?: InputMaybe<ImageWhereInput>;
  Text?: InputMaybe<TextWhereInput>;
};

export type HomePagecontentUnionWhereUniqueInput = {
  Hero?: InputMaybe<HeroWhereUniqueInput>;
  Image?: InputMaybe<ImageWhereUniqueInput>;
  Text?: InputMaybe<TextWhereUniqueInput>;
};

export type Image = Entity & {
  __typename?: 'Image';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image?: Maybe<Asset>;
  /** System stage field */
  stage: Stage;
};


export type ImageImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};

export type ImageBlurInput = {
  /** The amount of blurring to apply to the image. The value must be an integer from 1 to 20. */
  amount: Scalars['Int']['input'];
};

/** Adds a border to the image. */
export type ImageBorderInput = {
  /** The background color of the border. The value must be a valid hex color code. Or one of the supported color names. */
  background: Scalars['String']['input'];
  /** The color of the border. The value must be a valid hex color code. Or one of the supported color names. */
  color: Scalars['String']['input'];
  /** The width of the border in pixels. The value must be an integer from 1 to 1000. */
  width: Scalars['Int']['input'];
};

export type ImageCompressInput = {
  /** Preserves the metadata of the image. */
  metadata: Scalars['Boolean']['input'];
};

export type ImageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ImageWhereUniqueInput;
};

/** A connection to a list of items. */
export type ImageConnection = {
  __typename?: 'ImageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ImageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ImageCreateInput = {
  image?: InputMaybe<AssetCreateOneInlineInput>;
};

export type ImageCreateManyInlineInput = {
  /** Create and connect multiple existing Image documents */
  create?: InputMaybe<Array<ImageCreateInput>>;
};

export type ImageCreateOneInlineInput = {
  /** Create and connect one Image document */
  create?: InputMaybe<ImageCreateInput>;
};

export type ImageCreateWithPositionInput = {
  /** Document to create */
  data: ImageCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/**
 * Crops the image to the specified dimensions.
 * The starting points for X and Y coordinates are [0,0], aligning with the top-left corner of the image.
 * The width and height parameters determine the size in pixels of the cropping rectangle.
 * The output will include only the portion of the image within the designated crop area.
 */
export type ImageCropInput = {
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height: Scalars['Int']['input'];
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width: Scalars['Int']['input'];
  /** The x coordinate of the image. The value must be an integer from 0 to 10000. */
  x: Scalars['Int']['input'];
  /** The y coordinate of the image. The value must be an integer from 0 to 10000. */
  y: Scalars['Int']['input'];
};

/** An edge in a connection. */
export type ImageEdge = {
  __typename?: 'ImageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Image;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

/** Identifies documents */
export type ImageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ImageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ImageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ImageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
};

export enum ImageOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type ImageParent = HomePage | Page;

export type ImageParentConnectInput = {
  HomePage?: InputMaybe<HomePageConnectInput>;
  Page?: InputMaybe<PageConnectInput>;
};

export type ImageParentCreateInput = {
  HomePage?: InputMaybe<HomePageCreateInput>;
  Page?: InputMaybe<PageCreateInput>;
};

export type ImageParentCreateManyInlineInput = {
  /** Connect multiple existing ImageParent documents */
  connect?: InputMaybe<Array<ImageParentWhereUniqueInput>>;
  /** Create and connect multiple existing ImageParent documents */
  create?: InputMaybe<Array<ImageParentCreateInput>>;
};

export type ImageParentCreateOneInlineInput = {
  /** Connect one existing ImageParent document */
  connect?: InputMaybe<ImageParentWhereUniqueInput>;
  /** Create and connect one ImageParent document */
  create?: InputMaybe<ImageParentCreateInput>;
};

export type ImageParentUpdateInput = {
  HomePage?: InputMaybe<HomePageUpdateInput>;
  Page?: InputMaybe<PageUpdateInput>;
};

export type ImageParentUpdateManyInlineInput = {
  /** Connect multiple existing ImageParent documents */
  connect?: InputMaybe<Array<ImageParentConnectInput>>;
  /** Create and connect multiple ImageParent documents */
  create?: InputMaybe<Array<ImageParentCreateInput>>;
  /** Delete multiple ImageParent documents */
  delete?: InputMaybe<Array<ImageParentWhereUniqueInput>>;
  /** Disconnect multiple ImageParent documents */
  disconnect?: InputMaybe<Array<ImageParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ImageParent documents */
  set?: InputMaybe<Array<ImageParentWhereUniqueInput>>;
  /** Update multiple ImageParent documents */
  update?: InputMaybe<Array<ImageParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ImageParent documents */
  upsert?: InputMaybe<Array<ImageParentUpsertWithNestedWhereUniqueInput>>;
};

export type ImageParentUpdateManyWithNestedWhereInput = {
  HomePage?: InputMaybe<HomePageUpdateManyWithNestedWhereInput>;
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
};

export type ImageParentUpdateOneInlineInput = {
  /** Connect existing ImageParent document */
  connect?: InputMaybe<ImageParentWhereUniqueInput>;
  /** Create and connect one ImageParent document */
  create?: InputMaybe<ImageParentCreateInput>;
  /** Delete currently connected ImageParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ImageParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ImageParent document */
  update?: InputMaybe<ImageParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ImageParent document */
  upsert?: InputMaybe<ImageParentUpsertWithNestedWhereUniqueInput>;
};

export type ImageParentUpdateWithNestedWhereUniqueInput = {
  HomePage?: InputMaybe<HomePageUpdateWithNestedWhereUniqueInput>;
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type ImageParentUpsertWithNestedWhereUniqueInput = {
  HomePage?: InputMaybe<HomePageUpsertWithNestedWhereUniqueInput>;
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type ImageParentWhereInput = {
  HomePage?: InputMaybe<HomePageWhereInput>;
  Page?: InputMaybe<PageWhereInput>;
};

export type ImageParentWhereUniqueInput = {
  HomePage?: InputMaybe<HomePageWhereUniqueInput>;
  Page?: InputMaybe<PageWhereUniqueInput>;
};

export type ImageQualityInput = {
  /** The quality of the image. The value must be an integer from 1 to 100. */
  value: Scalars['Int']['input'];
};

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']['input']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type ImageSharpenInput = {
  /** The amount of sharpening to apply to the image. The value must be an integer from 1 to 20. */
  amount: Scalars['Int']['input'];
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Blurs the image. */
  blur?: InputMaybe<ImageBlurInput>;
  /** Adds a border to the image. */
  border?: InputMaybe<ImageBorderInput>;
  /** Compresses the image. */
  compress?: InputMaybe<ImageCompressInput>;
  /** Crops the image to the specified dimensions. */
  crop?: InputMaybe<ImageCropInput>;
  /**
   * Changes the quality of the image. The value must be an integer from 1 to 100.
   * Only supported for the following formats jpeg, jpg, webp, gif, heif, tiff, avif.
   */
  quality?: InputMaybe<ImageQualityInput>;
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
  /** Sharpens the image. */
  sharpen?: InputMaybe<ImageSharpenInput>;
};

export type ImageUpdateInput = {
  image?: InputMaybe<AssetUpdateOneInlineInput>;
};

export type ImageUpdateManyInlineInput = {
  /** Create and connect multiple Image component instances */
  create?: InputMaybe<Array<ImageCreateWithPositionInput>>;
  /** Delete multiple Image documents */
  delete?: InputMaybe<Array<ImageWhereUniqueInput>>;
  /** Update multiple Image component instances */
  update?: InputMaybe<Array<ImageUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Image component instances */
  upsert?: InputMaybe<Array<ImageUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ImageUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type ImageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ImageUpdateManyInput;
  /** Document search */
  where: ImageWhereInput;
};

export type ImageUpdateOneInlineInput = {
  /** Create and connect one Image document */
  create?: InputMaybe<ImageCreateInput>;
  /** Delete currently connected Image document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Image document */
  update?: InputMaybe<ImageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Image document */
  upsert?: InputMaybe<ImageUpsertWithNestedWhereUniqueInput>;
};

export type ImageUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ImageUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ImageWhereUniqueInput;
};

export type ImageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ImageUpdateInput;
  /** Unique document search */
  where: ImageWhereUniqueInput;
};

export type ImageUpsertInput = {
  /** Create document if it didn't exist */
  create: ImageCreateInput;
  /** Update document if it exists */
  update: ImageUpdateInput;
};

export type ImageUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ImageUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ImageWhereUniqueInput;
};

export type ImageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ImageUpsertInput;
  /** Unique document search */
  where: ImageWhereUniqueInput;
};

/** Identifies documents */
export type ImageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ImageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ImageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ImageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
};

/** References Image record uniquely */
export type ImageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  SvSe = 'sv_se'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create an asset. Use the returned info to finish the creation process by uploading the asset. */
  createAsset?: Maybe<Asset>;
  /** Create one homePage */
  createHomePage?: Maybe<HomePage>;
  /** Create one navigation */
  createNavigation?: Maybe<Navigation>;
  /** Create one page */
  createPage?: Maybe<Page>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one staff */
  createStaff?: Maybe<Staff>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one homePage from _all_ existing stages. Returns deleted document. */
  deleteHomePage?: Maybe<HomePage>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many HomePage documents
   * @deprecated Please use the new paginated many mutation (deleteManyHomePagesConnection)
   */
  deleteManyHomePages: BatchPayload;
  /** Delete many HomePage documents, return deleted documents */
  deleteManyHomePagesConnection: HomePageConnection;
  /**
   * Delete many Navigation documents
   * @deprecated Please use the new paginated many mutation (deleteManyNavigationsConnection)
   */
  deleteManyNavigations: BatchPayload;
  /** Delete many Navigation documents, return deleted documents */
  deleteManyNavigationsConnection: NavigationConnection;
  /**
   * Delete many Page documents
   * @deprecated Please use the new paginated many mutation (deleteManyPagesConnection)
   */
  deleteManyPages: BatchPayload;
  /** Delete many Page documents, return deleted documents */
  deleteManyPagesConnection: PageConnection;
  /**
   * Delete many Staff documents
   * @deprecated Please use the new paginated many mutation (deleteManyStaffsConnection)
   */
  deleteManyStaffs: BatchPayload;
  /** Delete many Staff documents, return deleted documents */
  deleteManyStaffsConnection: StaffConnection;
  /** Delete one navigation from _all_ existing stages. Returns deleted document. */
  deleteNavigation?: Maybe<Navigation>;
  /** Delete one page from _all_ existing stages. Returns deleted document. */
  deletePage?: Maybe<Page>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one staff from _all_ existing stages. Returns deleted document. */
  deleteStaff?: Maybe<Staff>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one homePage */
  publishHomePage?: Maybe<HomePage>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many HomePage documents
   * @deprecated Please use the new paginated many mutation (publishManyHomePagesConnection)
   */
  publishManyHomePages: BatchPayload;
  /** Publish many HomePage documents */
  publishManyHomePagesConnection: HomePageConnection;
  /**
   * Publish many Navigation documents
   * @deprecated Please use the new paginated many mutation (publishManyNavigationsConnection)
   */
  publishManyNavigations: BatchPayload;
  /** Publish many Navigation documents */
  publishManyNavigationsConnection: NavigationConnection;
  /**
   * Publish many Page documents
   * @deprecated Please use the new paginated many mutation (publishManyPagesConnection)
   */
  publishManyPages: BatchPayload;
  /** Publish many Page documents */
  publishManyPagesConnection: PageConnection;
  /**
   * Publish many Staff documents
   * @deprecated Please use the new paginated many mutation (publishManyStaffsConnection)
   */
  publishManyStaffs: BatchPayload;
  /** Publish many Staff documents */
  publishManyStaffsConnection: StaffConnection;
  /** Publish one navigation */
  publishNavigation?: Maybe<Navigation>;
  /** Publish one page */
  publishPage?: Maybe<Page>;
  /** Publish one staff */
  publishStaff?: Maybe<Staff>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one homePage */
  schedulePublishHomePage?: Maybe<HomePage>;
  /** Schedule to publish one navigation */
  schedulePublishNavigation?: Maybe<Navigation>;
  /** Schedule to publish one page */
  schedulePublishPage?: Maybe<Page>;
  /** Schedule to publish one staff */
  schedulePublishStaff?: Maybe<Staff>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one homePage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishHomePage?: Maybe<HomePage>;
  /** Unpublish one navigation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishNavigation?: Maybe<Navigation>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPage?: Maybe<Page>;
  /** Unpublish one staff from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishStaff?: Maybe<Staff>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one homePage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishHomePage?: Maybe<HomePage>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many HomePage documents
   * @deprecated Please use the new paginated many mutation (unpublishManyHomePagesConnection)
   */
  unpublishManyHomePages: BatchPayload;
  /** Find many HomePage documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyHomePagesConnection: HomePageConnection;
  /**
   * Unpublish many Navigation documents
   * @deprecated Please use the new paginated many mutation (unpublishManyNavigationsConnection)
   */
  unpublishManyNavigations: BatchPayload;
  /** Find many Navigation documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyNavigationsConnection: NavigationConnection;
  /**
   * Unpublish many Page documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPagesConnection)
   */
  unpublishManyPages: BatchPayload;
  /** Find many Page documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPagesConnection: PageConnection;
  /**
   * Unpublish many Staff documents
   * @deprecated Please use the new paginated many mutation (unpublishManyStaffsConnection)
   */
  unpublishManyStaffs: BatchPayload;
  /** Find many Staff documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyStaffsConnection: StaffConnection;
  /** Unpublish one navigation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishNavigation?: Maybe<Navigation>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPage?: Maybe<Page>;
  /** Unpublish one staff from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishStaff?: Maybe<Staff>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one homePage */
  updateHomePage?: Maybe<HomePage>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many homePages
   * @deprecated Please use the new paginated many mutation (updateManyHomePagesConnection)
   */
  updateManyHomePages: BatchPayload;
  /** Update many HomePage documents */
  updateManyHomePagesConnection: HomePageConnection;
  /**
   * Update many navigations
   * @deprecated Please use the new paginated many mutation (updateManyNavigationsConnection)
   */
  updateManyNavigations: BatchPayload;
  /** Update many Navigation documents */
  updateManyNavigationsConnection: NavigationConnection;
  /**
   * Update many pages
   * @deprecated Please use the new paginated many mutation (updateManyPagesConnection)
   */
  updateManyPages: BatchPayload;
  /** Update many Page documents */
  updateManyPagesConnection: PageConnection;
  /**
   * Update many staffs
   * @deprecated Please use the new paginated many mutation (updateManyStaffsConnection)
   */
  updateManyStaffs: BatchPayload;
  /** Update many Staff documents */
  updateManyStaffsConnection: StaffConnection;
  /** Update one navigation */
  updateNavigation?: Maybe<Navigation>;
  /** Update one page */
  updatePage?: Maybe<Page>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one staff */
  updateStaff?: Maybe<Staff>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one homePage */
  upsertHomePage?: Maybe<HomePage>;
  /** Upsert one navigation */
  upsertNavigation?: Maybe<Navigation>;
  /** Upsert one page */
  upsertPage?: Maybe<Page>;
  /** Upsert one staff */
  upsertStaff?: Maybe<Staff>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateHomePageArgs = {
  data: HomePageCreateInput;
};


export type MutationCreateNavigationArgs = {
  data: NavigationCreateInput;
};


export type MutationCreatePageArgs = {
  data: PageCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateStaffArgs = {
  data: StaffCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteHomePageArgs = {
  where: HomePageWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyHomePagesArgs = {
  where?: InputMaybe<HomePageManyWhereInput>;
};


export type MutationDeleteManyHomePagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HomePageManyWhereInput>;
};


export type MutationDeleteManyNavigationsArgs = {
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationDeleteManyNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationDeleteManyPagesArgs = {
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationDeleteManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationDeleteManyStaffsArgs = {
  where?: InputMaybe<StaffManyWhereInput>;
};


export type MutationDeleteManyStaffsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StaffManyWhereInput>;
};


export type MutationDeleteNavigationArgs = {
  where: NavigationWhereUniqueInput;
};


export type MutationDeletePageArgs = {
  where: PageWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteStaffArgs = {
  where: StaffWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishHomePageArgs = {
  to?: Array<Stage>;
  where: HomePageWhereUniqueInput;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyHomePagesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<HomePageManyWhereInput>;
};


export type MutationPublishManyHomePagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<HomePageManyWhereInput>;
};


export type MutationPublishManyNavigationsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationPublishManyNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationPublishManyPagesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationPublishManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationPublishManyStaffsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<StaffManyWhereInput>;
};


export type MutationPublishManyStaffsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<StaffManyWhereInput>;
};


export type MutationPublishNavigationArgs = {
  to?: Array<Stage>;
  where: NavigationWhereUniqueInput;
};


export type MutationPublishPageArgs = {
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
};


export type MutationPublishStaffArgs = {
  to?: Array<Stage>;
  where: StaffWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishHomePageArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: HomePageWhereUniqueInput;
};


export type MutationSchedulePublishNavigationArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: NavigationWhereUniqueInput;
};


export type MutationSchedulePublishPageArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
};


export type MutationSchedulePublishStaffArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: StaffWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishHomePageArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: HomePageWhereUniqueInput;
};


export type MutationScheduleUnpublishNavigationArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: NavigationWhereUniqueInput;
};


export type MutationScheduleUnpublishPageArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: PageWhereUniqueInput;
};


export type MutationScheduleUnpublishStaffArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: StaffWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishHomePageArgs = {
  from?: Array<Stage>;
  where: HomePageWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyHomePagesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<HomePageManyWhereInput>;
};


export type MutationUnpublishManyHomePagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<HomePageManyWhereInput>;
};


export type MutationUnpublishManyNavigationsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationUnpublishManyNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationUnpublishManyPagesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUnpublishManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUnpublishManyStaffsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<StaffManyWhereInput>;
};


export type MutationUnpublishManyStaffsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<StaffManyWhereInput>;
};


export type MutationUnpublishNavigationArgs = {
  from?: Array<Stage>;
  where: NavigationWhereUniqueInput;
};


export type MutationUnpublishPageArgs = {
  from?: Array<Stage>;
  where: PageWhereUniqueInput;
};


export type MutationUnpublishStaffArgs = {
  from?: Array<Stage>;
  where: StaffWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateHomePageArgs = {
  data: HomePageUpdateInput;
  where: HomePageWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyHomePagesArgs = {
  data: HomePageUpdateManyInput;
  where?: InputMaybe<HomePageManyWhereInput>;
};


export type MutationUpdateManyHomePagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: HomePageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HomePageManyWhereInput>;
};


export type MutationUpdateManyNavigationsArgs = {
  data: NavigationUpdateManyInput;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationUpdateManyNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: NavigationUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationUpdateManyPagesArgs = {
  data: PageUpdateManyInput;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUpdateManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: PageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUpdateManyStaffsArgs = {
  data: StaffUpdateManyInput;
  where?: InputMaybe<StaffManyWhereInput>;
};


export type MutationUpdateManyStaffsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: StaffUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StaffManyWhereInput>;
};


export type MutationUpdateNavigationArgs = {
  data: NavigationUpdateInput;
  where: NavigationWhereUniqueInput;
};


export type MutationUpdatePageArgs = {
  data: PageUpdateInput;
  where: PageWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateStaffArgs = {
  data: StaffUpdateInput;
  where: StaffWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertHomePageArgs = {
  upsert: HomePageUpsertInput;
  where: HomePageWhereUniqueInput;
};


export type MutationUpsertNavigationArgs = {
  upsert: NavigationUpsertInput;
  where: NavigationWhereUniqueInput;
};


export type MutationUpsertPageArgs = {
  upsert: PageUpsertInput;
  where: PageWhereUniqueInput;
};


export type MutationUpsertStaffArgs = {
  upsert: StaffUpsertInput;
  where: StaffWhereUniqueInput;
};

export type NavLink = Entity & {
  __typename?: 'NavLink';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  page?: Maybe<Page>;
  /** System stage field */
  stage: Stage;
};


export type NavLinkPageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type NavLinkConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: NavLinkWhereUniqueInput;
};

/** A connection to a list of items. */
export type NavLinkConnection = {
  __typename?: 'NavLinkConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<NavLinkEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type NavLinkCreateInput = {
  page?: InputMaybe<PageCreateOneInlineInput>;
};

export type NavLinkCreateManyInlineInput = {
  /** Create and connect multiple existing NavLink documents */
  create?: InputMaybe<Array<NavLinkCreateInput>>;
};

export type NavLinkCreateOneInlineInput = {
  /** Create and connect one NavLink document */
  create?: InputMaybe<NavLinkCreateInput>;
};

export type NavLinkCreateWithPositionInput = {
  /** Document to create */
  data: NavLinkCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type NavLinkEdge = {
  __typename?: 'NavLinkEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: NavLink;
};

/** Identifies documents */
export type NavLinkManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavLinkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavLinkWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavLinkWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  page?: InputMaybe<PageWhereInput>;
};

export enum NavLinkOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type NavLinkParent = Navigation;

export type NavLinkParentConnectInput = {
  Navigation?: InputMaybe<NavigationConnectInput>;
};

export type NavLinkParentCreateInput = {
  Navigation?: InputMaybe<NavigationCreateInput>;
};

export type NavLinkParentCreateManyInlineInput = {
  /** Connect multiple existing NavLinkParent documents */
  connect?: InputMaybe<Array<NavLinkParentWhereUniqueInput>>;
  /** Create and connect multiple existing NavLinkParent documents */
  create?: InputMaybe<Array<NavLinkParentCreateInput>>;
};

export type NavLinkParentCreateOneInlineInput = {
  /** Connect one existing NavLinkParent document */
  connect?: InputMaybe<NavLinkParentWhereUniqueInput>;
  /** Create and connect one NavLinkParent document */
  create?: InputMaybe<NavLinkParentCreateInput>;
};

export type NavLinkParentUpdateInput = {
  Navigation?: InputMaybe<NavigationUpdateInput>;
};

export type NavLinkParentUpdateManyInlineInput = {
  /** Connect multiple existing NavLinkParent documents */
  connect?: InputMaybe<Array<NavLinkParentConnectInput>>;
  /** Create and connect multiple NavLinkParent documents */
  create?: InputMaybe<Array<NavLinkParentCreateInput>>;
  /** Delete multiple NavLinkParent documents */
  delete?: InputMaybe<Array<NavLinkParentWhereUniqueInput>>;
  /** Disconnect multiple NavLinkParent documents */
  disconnect?: InputMaybe<Array<NavLinkParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing NavLinkParent documents */
  set?: InputMaybe<Array<NavLinkParentWhereUniqueInput>>;
  /** Update multiple NavLinkParent documents */
  update?: InputMaybe<Array<NavLinkParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple NavLinkParent documents */
  upsert?: InputMaybe<Array<NavLinkParentUpsertWithNestedWhereUniqueInput>>;
};

export type NavLinkParentUpdateManyWithNestedWhereInput = {
  Navigation?: InputMaybe<NavigationUpdateManyWithNestedWhereInput>;
};

export type NavLinkParentUpdateOneInlineInput = {
  /** Connect existing NavLinkParent document */
  connect?: InputMaybe<NavLinkParentWhereUniqueInput>;
  /** Create and connect one NavLinkParent document */
  create?: InputMaybe<NavLinkParentCreateInput>;
  /** Delete currently connected NavLinkParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected NavLinkParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single NavLinkParent document */
  update?: InputMaybe<NavLinkParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single NavLinkParent document */
  upsert?: InputMaybe<NavLinkParentUpsertWithNestedWhereUniqueInput>;
};

export type NavLinkParentUpdateWithNestedWhereUniqueInput = {
  Navigation?: InputMaybe<NavigationUpdateWithNestedWhereUniqueInput>;
};

export type NavLinkParentUpsertWithNestedWhereUniqueInput = {
  Navigation?: InputMaybe<NavigationUpsertWithNestedWhereUniqueInput>;
};

export type NavLinkParentWhereInput = {
  Navigation?: InputMaybe<NavigationWhereInput>;
};

export type NavLinkParentWhereUniqueInput = {
  Navigation?: InputMaybe<NavigationWhereUniqueInput>;
};

export type NavLinkUpdateInput = {
  page?: InputMaybe<PageUpdateOneInlineInput>;
};

export type NavLinkUpdateManyInlineInput = {
  /** Create and connect multiple NavLink component instances */
  create?: InputMaybe<Array<NavLinkCreateWithPositionInput>>;
  /** Delete multiple NavLink documents */
  delete?: InputMaybe<Array<NavLinkWhereUniqueInput>>;
  /** Update multiple NavLink component instances */
  update?: InputMaybe<Array<NavLinkUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple NavLink component instances */
  upsert?: InputMaybe<Array<NavLinkUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type NavLinkUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type NavLinkUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: NavLinkUpdateManyInput;
  /** Document search */
  where: NavLinkWhereInput;
};

export type NavLinkUpdateOneInlineInput = {
  /** Create and connect one NavLink document */
  create?: InputMaybe<NavLinkCreateInput>;
  /** Delete currently connected NavLink document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single NavLink document */
  update?: InputMaybe<NavLinkUpdateWithNestedWhereUniqueInput>;
  /** Upsert single NavLink document */
  upsert?: InputMaybe<NavLinkUpsertWithNestedWhereUniqueInput>;
};

export type NavLinkUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<NavLinkUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: NavLinkWhereUniqueInput;
};

export type NavLinkUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: NavLinkUpdateInput;
  /** Unique document search */
  where: NavLinkWhereUniqueInput;
};

export type NavLinkUpsertInput = {
  /** Create document if it didn't exist */
  create: NavLinkCreateInput;
  /** Update document if it exists */
  update: NavLinkUpdateInput;
};

export type NavLinkUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<NavLinkUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: NavLinkWhereUniqueInput;
};

export type NavLinkUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: NavLinkUpsertInput;
  /** Unique document search */
  where: NavLinkWhereUniqueInput;
};

/** Identifies documents */
export type NavLinkWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavLinkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavLinkWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavLinkWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  page?: InputMaybe<PageWhereInput>;
};

/** References NavLink record uniquely */
export type NavLinkWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Navigation = Entity & Node & {
  __typename?: 'Navigation';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Navigation>;
  /** List of Navigation versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  logo?: Maybe<Asset>;
  logoText?: Maybe<Scalars['String']['output']>;
  menuItems: Array<NavigationmenuItemsUnion>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type NavigationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type NavigationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type NavigationHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type NavigationLogoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};


export type NavigationMenuItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NavigationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type NavigationScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type NavigationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type NavigationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: NavigationWhereUniqueInput;
};

/** A connection to a list of items. */
export type NavigationConnection = {
  __typename?: 'NavigationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<NavigationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type NavigationCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  logo?: InputMaybe<AssetCreateOneInlineInput>;
  logoText?: InputMaybe<Scalars['String']['input']>;
  menuItems?: InputMaybe<NavigationmenuItemsUnionCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NavigationCreateManyInlineInput = {
  /** Connect multiple existing Navigation documents */
  connect?: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Create and connect multiple existing Navigation documents */
  create?: InputMaybe<Array<NavigationCreateInput>>;
};

export type NavigationCreateOneInlineInput = {
  /** Connect one existing Navigation document */
  connect?: InputMaybe<NavigationWhereUniqueInput>;
  /** Create and connect one Navigation document */
  create?: InputMaybe<NavigationCreateInput>;
};

/** An edge in a connection. */
export type NavigationEdge = {
  __typename?: 'NavigationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Navigation;
};

/** Identifies documents */
export type NavigationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<NavigationWhereStageInput>;
  documentInStages_none?: InputMaybe<NavigationWhereStageInput>;
  documentInStages_some?: InputMaybe<NavigationWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  logo?: InputMaybe<AssetWhereInput>;
  logoText?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  logoText_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  logoText_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  logoText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  logoText_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  logoText_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  logoText_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  logoText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  logoText_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  logoText_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  menuItems_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  menuItems_some?: InputMaybe<NavigationmenuItemsUnionWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum NavigationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LogoTextAsc = 'logoText_ASC',
  LogoTextDesc = 'logoText_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type NavigationUpdateInput = {
  logo?: InputMaybe<AssetUpdateOneInlineInput>;
  logoText?: InputMaybe<Scalars['String']['input']>;
  menuItems?: InputMaybe<NavigationmenuItemsUnionUpdateManyInlineInput>;
};

export type NavigationUpdateManyInlineInput = {
  /** Connect multiple existing Navigation documents */
  connect?: InputMaybe<Array<NavigationConnectInput>>;
  /** Create and connect multiple Navigation documents */
  create?: InputMaybe<Array<NavigationCreateInput>>;
  /** Delete multiple Navigation documents */
  delete?: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Disconnect multiple Navigation documents */
  disconnect?: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Navigation documents */
  set?: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Update multiple Navigation documents */
  update?: InputMaybe<Array<NavigationUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Navigation documents */
  upsert?: InputMaybe<Array<NavigationUpsertWithNestedWhereUniqueInput>>;
};

export type NavigationUpdateManyInput = {
  logoText?: InputMaybe<Scalars['String']['input']>;
};

export type NavigationUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: NavigationUpdateManyInput;
  /** Document search */
  where: NavigationWhereInput;
};

export type NavigationUpdateOneInlineInput = {
  /** Connect existing Navigation document */
  connect?: InputMaybe<NavigationWhereUniqueInput>;
  /** Create and connect one Navigation document */
  create?: InputMaybe<NavigationCreateInput>;
  /** Delete currently connected Navigation document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Navigation document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Navigation document */
  update?: InputMaybe<NavigationUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Navigation document */
  upsert?: InputMaybe<NavigationUpsertWithNestedWhereUniqueInput>;
};

export type NavigationUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: NavigationUpdateInput;
  /** Unique document search */
  where: NavigationWhereUniqueInput;
};

export type NavigationUpsertInput = {
  /** Create document if it didn't exist */
  create: NavigationCreateInput;
  /** Update document if it exists */
  update: NavigationUpdateInput;
};

export type NavigationUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: NavigationUpsertInput;
  /** Unique document search */
  where: NavigationWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type NavigationWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type NavigationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<NavigationWhereStageInput>;
  documentInStages_none?: InputMaybe<NavigationWhereStageInput>;
  documentInStages_some?: InputMaybe<NavigationWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  logo?: InputMaybe<AssetWhereInput>;
  logoText?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  logoText_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  logoText_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  logoText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  logoText_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  logoText_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  logoText_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  logoText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  logoText_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  logoText_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  menuItems_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  menuItems_some?: InputMaybe<NavigationmenuItemsUnionWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type NavigationWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<NavigationWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Navigation record uniquely */
export type NavigationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type NavigationmenuItemsUnion = NavLink;

export type NavigationmenuItemsUnionConnectInput = {
  NavLink?: InputMaybe<NavLinkConnectInput>;
};

export type NavigationmenuItemsUnionCreateInput = {
  NavLink?: InputMaybe<NavLinkCreateInput>;
};

export type NavigationmenuItemsUnionCreateManyInlineInput = {
  /** Create and connect multiple existing NavigationmenuItemsUnion documents */
  create?: InputMaybe<Array<NavigationmenuItemsUnionCreateInput>>;
};

export type NavigationmenuItemsUnionCreateOneInlineInput = {
  /** Create and connect one NavigationmenuItemsUnion document */
  create?: InputMaybe<NavigationmenuItemsUnionCreateInput>;
};

export type NavigationmenuItemsUnionCreateWithPositionInput = {
  NavLink?: InputMaybe<NavLinkCreateWithPositionInput>;
};

export type NavigationmenuItemsUnionUpdateInput = {
  NavLink?: InputMaybe<NavLinkUpdateInput>;
};

export type NavigationmenuItemsUnionUpdateManyInlineInput = {
  /** Create and connect multiple NavigationmenuItemsUnion component instances */
  create?: InputMaybe<Array<NavigationmenuItemsUnionCreateWithPositionInput>>;
  /** Delete multiple NavigationmenuItemsUnion documents */
  delete?: InputMaybe<Array<NavigationmenuItemsUnionWhereUniqueInput>>;
  /** Update multiple NavigationmenuItemsUnion component instances */
  update?: InputMaybe<Array<NavigationmenuItemsUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple NavigationmenuItemsUnion component instances */
  upsert?: InputMaybe<Array<NavigationmenuItemsUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type NavigationmenuItemsUnionUpdateManyWithNestedWhereInput = {
  NavLink?: InputMaybe<NavLinkUpdateManyWithNestedWhereInput>;
};

export type NavigationmenuItemsUnionUpdateOneInlineInput = {
  /** Create and connect one NavigationmenuItemsUnion document */
  create?: InputMaybe<NavigationmenuItemsUnionCreateInput>;
  /** Delete currently connected NavigationmenuItemsUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single NavigationmenuItemsUnion document */
  update?: InputMaybe<NavigationmenuItemsUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single NavigationmenuItemsUnion document */
  upsert?: InputMaybe<NavigationmenuItemsUnionUpsertWithNestedWhereUniqueInput>;
};

export type NavigationmenuItemsUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  NavLink?: InputMaybe<NavLinkUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type NavigationmenuItemsUnionUpdateWithNestedWhereUniqueInput = {
  NavLink?: InputMaybe<NavLinkUpdateWithNestedWhereUniqueInput>;
};

export type NavigationmenuItemsUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  NavLink?: InputMaybe<NavLinkUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type NavigationmenuItemsUnionUpsertWithNestedWhereUniqueInput = {
  NavLink?: InputMaybe<NavLinkUpsertWithNestedWhereUniqueInput>;
};

export type NavigationmenuItemsUnionWhereInput = {
  NavLink?: InputMaybe<NavLinkWhereInput>;
};

export type NavigationmenuItemsUnionWhereUniqueInput = {
  NavLink?: InputMaybe<NavLinkWhereUniqueInput>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

export type Page = Entity & Node & {
  __typename?: 'Page';
  content: Array<PagecontentUnion>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Page>;
  /** List of Page versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  pageDescription?: Maybe<Scalars['String']['output']>;
  pageTitle?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PageContentArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type PageHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type PagePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PageUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PageWhereUniqueInput;
};

/** A connection to a list of items. */
export type PageConnection = {
  __typename?: 'PageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PageCreateInput = {
  cltvzw18k0ee407ur0nu2148r?: InputMaybe<NavLinkCreateManyInlineInput>;
  content?: InputMaybe<PagecontentUnionCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  pageDescription?: InputMaybe<Scalars['String']['input']>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PageCreateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Create and connect multiple existing Page documents */
  create?: InputMaybe<Array<PageCreateInput>>;
};

export type PageCreateOneInlineInput = {
  /** Connect one existing Page document */
  connect?: InputMaybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: InputMaybe<PageCreateInput>;
};

/** An edge in a connection. */
export type PageEdge = {
  __typename?: 'PageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Page;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** Identifies documents */
export type PageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  content_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  content_some?: InputMaybe<PagecontentUnionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PageWhereStageInput>;
  documentInStages_none?: InputMaybe<PageWhereStageInput>;
  documentInStages_some?: InputMaybe<PageWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  pageDescription?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  pageDescription_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  pageDescription_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pageDescription_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  pageDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  pageDescription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  pageDescription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  pageDescription_starts_with?: InputMaybe<Scalars['String']['input']>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  pageTitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  pageTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pageTitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  pageTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  pageTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  pageTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  pageTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PageDescriptionAsc = 'pageDescription_ASC',
  PageDescriptionDesc = 'pageDescription_DESC',
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PageUpdateInput = {
  cltvzw18k0ee407ur0nu2148r?: InputMaybe<NavLinkUpdateManyInlineInput>;
  content?: InputMaybe<PagecontentUnionUpdateManyInlineInput>;
  pageDescription?: InputMaybe<Scalars['String']['input']>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type PageUpdateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: InputMaybe<Array<PageConnectInput>>;
  /** Create and connect multiple Page documents */
  create?: InputMaybe<Array<PageCreateInput>>;
  /** Delete multiple Page documents */
  delete?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Disconnect multiple Page documents */
  disconnect?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Page documents */
  set?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Update multiple Page documents */
  update?: InputMaybe<Array<PageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Page documents */
  upsert?: InputMaybe<Array<PageUpsertWithNestedWhereUniqueInput>>;
};

export type PageUpdateManyInput = {
  pageDescription?: InputMaybe<Scalars['String']['input']>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
};

export type PageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PageUpdateManyInput;
  /** Document search */
  where: PageWhereInput;
};

export type PageUpdateOneInlineInput = {
  /** Connect existing Page document */
  connect?: InputMaybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: InputMaybe<PageCreateInput>;
  /** Delete currently connected Page document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Page document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Page document */
  update?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Page document */
  upsert?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type PageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PageUpdateInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

export type PageUpsertInput = {
  /** Create document if it didn't exist */
  create: PageCreateInput;
  /** Update document if it exists */
  update: PageUpdateInput;
};

export type PageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PageUpsertInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type PageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  content_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  content_some?: InputMaybe<PagecontentUnionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PageWhereStageInput>;
  documentInStages_none?: InputMaybe<PageWhereStageInput>;
  documentInStages_some?: InputMaybe<PageWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  pageDescription?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  pageDescription_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  pageDescription_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pageDescription_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  pageDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  pageDescription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  pageDescription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  pageDescription_starts_with?: InputMaybe<Scalars['String']['input']>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  pageTitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  pageTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pageTitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  pageTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  pageTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  pageTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  pageTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Page record uniquely */
export type PageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type PagecontentUnion = Hero | Image | StaffList | Text;

export type PagecontentUnionConnectInput = {
  Hero?: InputMaybe<HeroConnectInput>;
  Image?: InputMaybe<ImageConnectInput>;
  StaffList?: InputMaybe<StaffListConnectInput>;
  Text?: InputMaybe<TextConnectInput>;
};

export type PagecontentUnionCreateInput = {
  Hero?: InputMaybe<HeroCreateInput>;
  Image?: InputMaybe<ImageCreateInput>;
  StaffList?: InputMaybe<StaffListCreateInput>;
  Text?: InputMaybe<TextCreateInput>;
};

export type PagecontentUnionCreateManyInlineInput = {
  /** Create and connect multiple existing PagecontentUnion documents */
  create?: InputMaybe<Array<PagecontentUnionCreateInput>>;
};

export type PagecontentUnionCreateOneInlineInput = {
  /** Create and connect one PagecontentUnion document */
  create?: InputMaybe<PagecontentUnionCreateInput>;
};

export type PagecontentUnionCreateWithPositionInput = {
  Hero?: InputMaybe<HeroCreateWithPositionInput>;
  Image?: InputMaybe<ImageCreateWithPositionInput>;
  StaffList?: InputMaybe<StaffListCreateWithPositionInput>;
  Text?: InputMaybe<TextCreateWithPositionInput>;
};

export type PagecontentUnionUpdateInput = {
  Hero?: InputMaybe<HeroUpdateInput>;
  Image?: InputMaybe<ImageUpdateInput>;
  StaffList?: InputMaybe<StaffListUpdateInput>;
  Text?: InputMaybe<TextUpdateInput>;
};

export type PagecontentUnionUpdateManyInlineInput = {
  /** Create and connect multiple PagecontentUnion component instances */
  create?: InputMaybe<Array<PagecontentUnionCreateWithPositionInput>>;
  /** Delete multiple PagecontentUnion documents */
  delete?: InputMaybe<Array<PagecontentUnionWhereUniqueInput>>;
  /** Update multiple PagecontentUnion component instances */
  update?: InputMaybe<Array<PagecontentUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple PagecontentUnion component instances */
  upsert?: InputMaybe<Array<PagecontentUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type PagecontentUnionUpdateManyWithNestedWhereInput = {
  Hero?: InputMaybe<HeroUpdateManyWithNestedWhereInput>;
  Image?: InputMaybe<ImageUpdateManyWithNestedWhereInput>;
  StaffList?: InputMaybe<StaffListUpdateManyWithNestedWhereInput>;
  Text?: InputMaybe<TextUpdateManyWithNestedWhereInput>;
};

export type PagecontentUnionUpdateOneInlineInput = {
  /** Create and connect one PagecontentUnion document */
  create?: InputMaybe<PagecontentUnionCreateInput>;
  /** Delete currently connected PagecontentUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PagecontentUnion document */
  update?: InputMaybe<PagecontentUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PagecontentUnion document */
  upsert?: InputMaybe<PagecontentUnionUpsertWithNestedWhereUniqueInput>;
};

export type PagecontentUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Hero?: InputMaybe<HeroUpdateWithNestedWhereUniqueAndPositionInput>;
  Image?: InputMaybe<ImageUpdateWithNestedWhereUniqueAndPositionInput>;
  StaffList?: InputMaybe<StaffListUpdateWithNestedWhereUniqueAndPositionInput>;
  Text?: InputMaybe<TextUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type PagecontentUnionUpdateWithNestedWhereUniqueInput = {
  Hero?: InputMaybe<HeroUpdateWithNestedWhereUniqueInput>;
  Image?: InputMaybe<ImageUpdateWithNestedWhereUniqueInput>;
  StaffList?: InputMaybe<StaffListUpdateWithNestedWhereUniqueInput>;
  Text?: InputMaybe<TextUpdateWithNestedWhereUniqueInput>;
};

export type PagecontentUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Hero?: InputMaybe<HeroUpsertWithNestedWhereUniqueAndPositionInput>;
  Image?: InputMaybe<ImageUpsertWithNestedWhereUniqueAndPositionInput>;
  StaffList?: InputMaybe<StaffListUpsertWithNestedWhereUniqueAndPositionInput>;
  Text?: InputMaybe<TextUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type PagecontentUnionUpsertWithNestedWhereUniqueInput = {
  Hero?: InputMaybe<HeroUpsertWithNestedWhereUniqueInput>;
  Image?: InputMaybe<ImageUpsertWithNestedWhereUniqueInput>;
  StaffList?: InputMaybe<StaffListUpsertWithNestedWhereUniqueInput>;
  Text?: InputMaybe<TextUpsertWithNestedWhereUniqueInput>;
};

export type PagecontentUnionWhereInput = {
  Hero?: InputMaybe<HeroWhereInput>;
  Image?: InputMaybe<ImageWhereInput>;
  StaffList?: InputMaybe<StaffListWhereInput>;
  Text?: InputMaybe<TextWhereInput>;
};

export type PagecontentUnionWhereUniqueInput = {
  Hero?: InputMaybe<HeroWhereUniqueInput>;
  Image?: InputMaybe<ImageWhereUniqueInput>;
  StaffList?: InputMaybe<StaffListWhereUniqueInput>;
  Text?: InputMaybe<TextWhereUniqueInput>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Fetches an object given its ID */
  entities?: Maybe<Array<Entity>>;
  /** Retrieve a single homePage */
  homePage?: Maybe<HomePage>;
  /** Retrieve document version */
  homePageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple homePages */
  homePages: Array<HomePage>;
  /** Retrieve multiple homePages using the Relay connection interface */
  homePagesConnection: HomePageConnection;
  /** Retrieve a single navigation */
  navigation?: Maybe<Navigation>;
  /** Retrieve document version */
  navigationVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple navigations */
  navigations: Array<Navigation>;
  /** Retrieve multiple navigations using the Relay connection interface */
  navigationsConnection: NavigationConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single page */
  page?: Maybe<Page>;
  /** Retrieve document version */
  pageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pages */
  pages: Array<Page>;
  /** Retrieve multiple pages using the Relay connection interface */
  pagesConnection: PageConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single staff */
  staff?: Maybe<Staff>;
  /** Retrieve document version */
  staffVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple staffs */
  staffs: Array<Staff>;
  /** Retrieve multiple staffs using the Relay connection interface */
  staffsConnection: StaffConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryEntitiesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  where: Array<EntityWhereInput>;
};


export type QueryHomePageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: HomePageWhereUniqueInput;
};


export type QueryHomePageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryHomePagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<HomePageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<HomePageWhereInput>;
};


export type QueryHomePagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<HomePageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<HomePageWhereInput>;
};


export type QueryNavigationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: NavigationWhereUniqueInput;
};


export type QueryNavigationVersionArgs = {
  where: VersionWhereInput;
};


export type QueryNavigationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NavigationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<NavigationWhereInput>;
};


export type QueryNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NavigationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<NavigationWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PageWhereUniqueInput;
};


export type QueryPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryStaffArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: StaffWhereUniqueInput;
};


export type QueryStaffVersionArgs = {
  where: VersionWhereInput;
};


export type QueryStaffsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<StaffOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<StaffWhereInput>;
};


export type QueryStaffsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<StaffOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<StaffWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency']['output'];
  b: Scalars['RGBAHue']['output'];
  g: Scalars['RGBAHue']['output'];
  r: Scalars['RGBAHue']['output'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency']['input'];
  b: Scalars['RGBAHue']['input'];
  g: Scalars['RGBAHue']['input'];
  r: Scalars['RGBAHue']['input'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String']['output'];
  /** Returns Markdown representation */
  markdown: Scalars['String']['output'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST']['output'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String']['output'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Entity & Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json']['output'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | HomePage | Navigation | Page | Staff;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Entity & Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean']['output'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean']['output'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Staff = Entity & Node & {
  __typename?: 'Staff';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Staff>;
  /** List of Staff versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image?: Maybe<Asset>;
  label?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type StaffCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type StaffDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type StaffHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type StaffImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};


export type StaffPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type StaffScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type StaffUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type StaffConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: StaffWhereUniqueInput;
};

/** A connection to a list of items. */
export type StaffConnection = {
  __typename?: 'StaffConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<StaffEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type StaffCreateInput = {
  clu8ojrqk1cn407uqaj3o4zt9?: InputMaybe<StaffListCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
  label?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type StaffCreateManyInlineInput = {
  /** Connect multiple existing Staff documents */
  connect?: InputMaybe<Array<StaffWhereUniqueInput>>;
  /** Create and connect multiple existing Staff documents */
  create?: InputMaybe<Array<StaffCreateInput>>;
};

export type StaffCreateOneInlineInput = {
  /** Connect one existing Staff document */
  connect?: InputMaybe<StaffWhereUniqueInput>;
  /** Create and connect one Staff document */
  create?: InputMaybe<StaffCreateInput>;
};

/** An edge in a connection. */
export type StaffEdge = {
  __typename?: 'StaffEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Staff;
};

export type StaffList = Entity & {
  __typename?: 'StaffList';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  staffs: Array<Staff>;
  /** System stage field */
  stage: Stage;
};


export type StaffListStaffsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<StaffOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StaffWhereInput>;
};

export type StaffListConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: StaffListWhereUniqueInput;
};

/** A connection to a list of items. */
export type StaffListConnection = {
  __typename?: 'StaffListConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<StaffListEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type StaffListCreateInput = {
  staffs?: InputMaybe<StaffCreateManyInlineInput>;
};

export type StaffListCreateManyInlineInput = {
  /** Create and connect multiple existing StaffList documents */
  create?: InputMaybe<Array<StaffListCreateInput>>;
};

export type StaffListCreateOneInlineInput = {
  /** Create and connect one StaffList document */
  create?: InputMaybe<StaffListCreateInput>;
};

export type StaffListCreateWithPositionInput = {
  /** Document to create */
  data: StaffListCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type StaffListEdge = {
  __typename?: 'StaffListEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: StaffList;
};

/** Identifies documents */
export type StaffListManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StaffListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StaffListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StaffListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  staffs_every?: InputMaybe<StaffWhereInput>;
  staffs_none?: InputMaybe<StaffWhereInput>;
  staffs_some?: InputMaybe<StaffWhereInput>;
};

export enum StaffListOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type StaffListParent = Page;

export type StaffListParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
};

export type StaffListParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
};

export type StaffListParentCreateManyInlineInput = {
  /** Connect multiple existing StaffListParent documents */
  connect?: InputMaybe<Array<StaffListParentWhereUniqueInput>>;
  /** Create and connect multiple existing StaffListParent documents */
  create?: InputMaybe<Array<StaffListParentCreateInput>>;
};

export type StaffListParentCreateOneInlineInput = {
  /** Connect one existing StaffListParent document */
  connect?: InputMaybe<StaffListParentWhereUniqueInput>;
  /** Create and connect one StaffListParent document */
  create?: InputMaybe<StaffListParentCreateInput>;
};

export type StaffListParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
};

export type StaffListParentUpdateManyInlineInput = {
  /** Connect multiple existing StaffListParent documents */
  connect?: InputMaybe<Array<StaffListParentConnectInput>>;
  /** Create and connect multiple StaffListParent documents */
  create?: InputMaybe<Array<StaffListParentCreateInput>>;
  /** Delete multiple StaffListParent documents */
  delete?: InputMaybe<Array<StaffListParentWhereUniqueInput>>;
  /** Disconnect multiple StaffListParent documents */
  disconnect?: InputMaybe<Array<StaffListParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing StaffListParent documents */
  set?: InputMaybe<Array<StaffListParentWhereUniqueInput>>;
  /** Update multiple StaffListParent documents */
  update?: InputMaybe<Array<StaffListParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple StaffListParent documents */
  upsert?: InputMaybe<Array<StaffListParentUpsertWithNestedWhereUniqueInput>>;
};

export type StaffListParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
};

export type StaffListParentUpdateOneInlineInput = {
  /** Connect existing StaffListParent document */
  connect?: InputMaybe<StaffListParentWhereUniqueInput>;
  /** Create and connect one StaffListParent document */
  create?: InputMaybe<StaffListParentCreateInput>;
  /** Delete currently connected StaffListParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected StaffListParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single StaffListParent document */
  update?: InputMaybe<StaffListParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single StaffListParent document */
  upsert?: InputMaybe<StaffListParentUpsertWithNestedWhereUniqueInput>;
};

export type StaffListParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type StaffListParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type StaffListParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
};

export type StaffListParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
};

export type StaffListUpdateInput = {
  staffs?: InputMaybe<StaffUpdateManyInlineInput>;
};

export type StaffListUpdateManyInlineInput = {
  /** Create and connect multiple StaffList component instances */
  create?: InputMaybe<Array<StaffListCreateWithPositionInput>>;
  /** Delete multiple StaffList documents */
  delete?: InputMaybe<Array<StaffListWhereUniqueInput>>;
  /** Update multiple StaffList component instances */
  update?: InputMaybe<Array<StaffListUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple StaffList component instances */
  upsert?: InputMaybe<Array<StaffListUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type StaffListUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type StaffListUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: StaffListUpdateManyInput;
  /** Document search */
  where: StaffListWhereInput;
};

export type StaffListUpdateOneInlineInput = {
  /** Create and connect one StaffList document */
  create?: InputMaybe<StaffListCreateInput>;
  /** Delete currently connected StaffList document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single StaffList document */
  update?: InputMaybe<StaffListUpdateWithNestedWhereUniqueInput>;
  /** Upsert single StaffList document */
  upsert?: InputMaybe<StaffListUpsertWithNestedWhereUniqueInput>;
};

export type StaffListUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<StaffListUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: StaffListWhereUniqueInput;
};

export type StaffListUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: StaffListUpdateInput;
  /** Unique document search */
  where: StaffListWhereUniqueInput;
};

export type StaffListUpsertInput = {
  /** Create document if it didn't exist */
  create: StaffListCreateInput;
  /** Update document if it exists */
  update: StaffListUpdateInput;
};

export type StaffListUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<StaffListUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: StaffListWhereUniqueInput;
};

export type StaffListUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: StaffListUpsertInput;
  /** Unique document search */
  where: StaffListWhereUniqueInput;
};

/** Identifies documents */
export type StaffListWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StaffListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StaffListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StaffListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  staffs_every?: InputMaybe<StaffWhereInput>;
  staffs_none?: InputMaybe<StaffWhereInput>;
  staffs_some?: InputMaybe<StaffWhereInput>;
};

/** References StaffList record uniquely */
export type StaffListWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Identifies documents */
export type StaffManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StaffWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StaffWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StaffWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<StaffWhereStageInput>;
  documentInStages_none?: InputMaybe<StaffWhereStageInput>;
  documentInStages_some?: InputMaybe<StaffWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  label?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  label_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  label_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  label_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  label_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  label_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  label_starts_with?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum StaffOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type StaffUpdateInput = {
  clu8ojrqk1cn407uqaj3o4zt9?: InputMaybe<StaffListUpdateManyInlineInput>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  label?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type StaffUpdateManyInlineInput = {
  /** Connect multiple existing Staff documents */
  connect?: InputMaybe<Array<StaffConnectInput>>;
  /** Create and connect multiple Staff documents */
  create?: InputMaybe<Array<StaffCreateInput>>;
  /** Delete multiple Staff documents */
  delete?: InputMaybe<Array<StaffWhereUniqueInput>>;
  /** Disconnect multiple Staff documents */
  disconnect?: InputMaybe<Array<StaffWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Staff documents */
  set?: InputMaybe<Array<StaffWhereUniqueInput>>;
  /** Update multiple Staff documents */
  update?: InputMaybe<Array<StaffUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Staff documents */
  upsert?: InputMaybe<Array<StaffUpsertWithNestedWhereUniqueInput>>;
};

export type StaffUpdateManyInput = {
  label?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type StaffUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: StaffUpdateManyInput;
  /** Document search */
  where: StaffWhereInput;
};

export type StaffUpdateOneInlineInput = {
  /** Connect existing Staff document */
  connect?: InputMaybe<StaffWhereUniqueInput>;
  /** Create and connect one Staff document */
  create?: InputMaybe<StaffCreateInput>;
  /** Delete currently connected Staff document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Staff document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Staff document */
  update?: InputMaybe<StaffUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Staff document */
  upsert?: InputMaybe<StaffUpsertWithNestedWhereUniqueInput>;
};

export type StaffUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: StaffUpdateInput;
  /** Unique document search */
  where: StaffWhereUniqueInput;
};

export type StaffUpsertInput = {
  /** Create document if it didn't exist */
  create: StaffCreateInput;
  /** Update document if it exists */
  update: StaffUpdateInput;
};

export type StaffUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: StaffUpsertInput;
  /** Unique document search */
  where: StaffWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type StaffWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type StaffWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StaffWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StaffWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StaffWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<StaffWhereStageInput>;
  documentInStages_none?: InputMaybe<StaffWhereStageInput>;
  documentInStages_some?: InputMaybe<StaffWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  label?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  label_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  label_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  label_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  label_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  label_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  label_starts_with?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type StaffWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StaffWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StaffWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StaffWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<StaffWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Staff record uniquely */
export type StaffWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type Text = Entity & {
  __typename?: 'Text';
  body?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
};

export type TextConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TextWhereUniqueInput;
};

/** A connection to a list of items. */
export type TextConnection = {
  __typename?: 'TextConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TextEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TextCreateInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TextCreateManyInlineInput = {
  /** Create and connect multiple existing Text documents */
  create?: InputMaybe<Array<TextCreateInput>>;
};

export type TextCreateOneInlineInput = {
  /** Create and connect one Text document */
  create?: InputMaybe<TextCreateInput>;
};

export type TextCreateWithPositionInput = {
  /** Document to create */
  data: TextCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type TextEdge = {
  __typename?: 'TextEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Text;
};

/** Identifies documents */
export type TextManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TextWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TextWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TextWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  body_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  body_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  body_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  body_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  body_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  body_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  body_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  body_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum TextOrderByInput {
  BodyAsc = 'body_ASC',
  BodyDesc = 'body_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type TextParent = HomePage | Page;

export type TextParentConnectInput = {
  HomePage?: InputMaybe<HomePageConnectInput>;
  Page?: InputMaybe<PageConnectInput>;
};

export type TextParentCreateInput = {
  HomePage?: InputMaybe<HomePageCreateInput>;
  Page?: InputMaybe<PageCreateInput>;
};

export type TextParentCreateManyInlineInput = {
  /** Connect multiple existing TextParent documents */
  connect?: InputMaybe<Array<TextParentWhereUniqueInput>>;
  /** Create and connect multiple existing TextParent documents */
  create?: InputMaybe<Array<TextParentCreateInput>>;
};

export type TextParentCreateOneInlineInput = {
  /** Connect one existing TextParent document */
  connect?: InputMaybe<TextParentWhereUniqueInput>;
  /** Create and connect one TextParent document */
  create?: InputMaybe<TextParentCreateInput>;
};

export type TextParentUpdateInput = {
  HomePage?: InputMaybe<HomePageUpdateInput>;
  Page?: InputMaybe<PageUpdateInput>;
};

export type TextParentUpdateManyInlineInput = {
  /** Connect multiple existing TextParent documents */
  connect?: InputMaybe<Array<TextParentConnectInput>>;
  /** Create and connect multiple TextParent documents */
  create?: InputMaybe<Array<TextParentCreateInput>>;
  /** Delete multiple TextParent documents */
  delete?: InputMaybe<Array<TextParentWhereUniqueInput>>;
  /** Disconnect multiple TextParent documents */
  disconnect?: InputMaybe<Array<TextParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing TextParent documents */
  set?: InputMaybe<Array<TextParentWhereUniqueInput>>;
  /** Update multiple TextParent documents */
  update?: InputMaybe<Array<TextParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple TextParent documents */
  upsert?: InputMaybe<Array<TextParentUpsertWithNestedWhereUniqueInput>>;
};

export type TextParentUpdateManyWithNestedWhereInput = {
  HomePage?: InputMaybe<HomePageUpdateManyWithNestedWhereInput>;
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
};

export type TextParentUpdateOneInlineInput = {
  /** Connect existing TextParent document */
  connect?: InputMaybe<TextParentWhereUniqueInput>;
  /** Create and connect one TextParent document */
  create?: InputMaybe<TextParentCreateInput>;
  /** Delete currently connected TextParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected TextParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single TextParent document */
  update?: InputMaybe<TextParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TextParent document */
  upsert?: InputMaybe<TextParentUpsertWithNestedWhereUniqueInput>;
};

export type TextParentUpdateWithNestedWhereUniqueInput = {
  HomePage?: InputMaybe<HomePageUpdateWithNestedWhereUniqueInput>;
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type TextParentUpsertWithNestedWhereUniqueInput = {
  HomePage?: InputMaybe<HomePageUpsertWithNestedWhereUniqueInput>;
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type TextParentWhereInput = {
  HomePage?: InputMaybe<HomePageWhereInput>;
  Page?: InputMaybe<PageWhereInput>;
};

export type TextParentWhereUniqueInput = {
  HomePage?: InputMaybe<HomePageWhereUniqueInput>;
  Page?: InputMaybe<PageWhereUniqueInput>;
};

export type TextUpdateInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TextUpdateManyInlineInput = {
  /** Create and connect multiple Text component instances */
  create?: InputMaybe<Array<TextCreateWithPositionInput>>;
  /** Delete multiple Text documents */
  delete?: InputMaybe<Array<TextWhereUniqueInput>>;
  /** Update multiple Text component instances */
  update?: InputMaybe<Array<TextUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Text component instances */
  upsert?: InputMaybe<Array<TextUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type TextUpdateManyInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TextUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TextUpdateManyInput;
  /** Document search */
  where: TextWhereInput;
};

export type TextUpdateOneInlineInput = {
  /** Create and connect one Text document */
  create?: InputMaybe<TextCreateInput>;
  /** Delete currently connected Text document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Text document */
  update?: InputMaybe<TextUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Text document */
  upsert?: InputMaybe<TextUpsertWithNestedWhereUniqueInput>;
};

export type TextUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<TextUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TextWhereUniqueInput;
};

export type TextUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TextUpdateInput;
  /** Unique document search */
  where: TextWhereUniqueInput;
};

export type TextUpsertInput = {
  /** Create document if it didn't exist */
  create: TextCreateInput;
  /** Update document if it exists */
  update: TextUpdateInput;
};

export type TextUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<TextUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TextWhereUniqueInput;
};

export type TextUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TextUpsertInput;
  /** Unique document search */
  where: TextWhereUniqueInput;
};

/** Identifies documents */
export type TextWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TextWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TextWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TextWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  body_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  body_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  body_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  body_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  body_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  body_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  body_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  body_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References Text record uniquely */
export type TextWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Entity & Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean']['output'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String']['output'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  AppToken = 'APP_TOKEN',
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID']['input'];
  revision: Scalars['Int']['input'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export const ImageBasic = gql`
    fragment imageBasic on Asset {
  url
}
    `;
export const NavLink = gql`
    fragment navLink on NavLink {
  id
  page {
    slug
    pageTitle
  }
}
    `;
export const Hero = gql`
    fragment hero on Hero {
  id
  ingress
  title
  heroImage: image {
    url
  }
}
    `;
export const ImageBlock = gql`
    fragment imageBlock on Image {
  image {
    url
    height
    width
  }
}
    `;
export const Text = gql`
    fragment text on Text {
  id
  title
  body
}
    `;
export const HomePage = gql`
    fragment homePage on HomePage {
  id
  pageTitle
  pageDescription
  content {
    ...hero
    ...imageBlock
    ...text
  }
}
    ${Hero}
${ImageBlock}
${Text}`;
export const Staff = gql`
    fragment staff on Staff {
  name
  label
  image {
    url
  }
}
    `;
export const StaffList = gql`
    fragment staffList on StaffList {
  id
  staffs {
    ...staff
  }
}
    ${Staff}`;
export const Page = gql`
    fragment page on Page {
  id
  pageTitle
  pageDescription
  content {
    ...hero
    ...imageBlock
    ...staffList
    ...text
  }
  slug
}
    ${Hero}
${ImageBlock}
${StaffList}
${Text}`;
export const HomePage = gql`
    query HomePage {
  homePage(where: {id: "cltvxcrkvi8xl07ure2zpwy86"}, stage: DRAFT) {
    ...homePage
  }
}
    ${HomePage}`;
export const NavigationQuery = gql`
    query NavigationQuery {
  navigation(where: {id: "cltvzxqzzjzmx07urcg4ircdf"}, stage: DRAFT) {
    id
    logo {
      ...imageBasic
    }
    logoText
    menuItems {
      ...navLink
    }
  }
}
    ${ImageBasic}
${NavLink}`;
export const Page = gql`
    query Page($slug: String) {
  page(where: {slug: $slug}, stage: DRAFT) {
    ...page
  }
}
    ${Page}`;