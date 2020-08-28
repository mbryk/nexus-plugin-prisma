/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */





declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  BoolFilter: { // input type
    equals?: boolean | null; // Boolean
    not?: NexusGenInputs['NestedBoolFilter'] | null; // NestedBoolFilter
  }
  BubbleCreateOneWithoutMembersInput: { // input type
    connect?: NexusGenInputs['BubbleWhereUniqueInput'] | null; // BubbleWhereUniqueInput
    create?: NexusGenInputs['BubbleCreateWithoutMembersInput'] | null; // BubbleCreateWithoutMembersInput
  }
  BubbleCreateWithoutMembersInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    id?: string | null; // String
    private: boolean; // Boolean!
  }
  BubbleMembersOrderByInput: { // input type
    firstName?: NexusGenEnums['SortOrder'] | null; // SortOrder
    locationId?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  BubbleMembersWhereInput: { // input type
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
    location?: NexusGenInputs['LocationWhereInput'] | null; // LocationWhereInput
  }
  BubbleWhereInput: { // input type
    AND?: NexusGenInputs['BubbleWhereInput'][] | null; // [BubbleWhereInput!]
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
    members?: NexusGenInputs['UserListRelationFilter'] | null; // UserListRelationFilter
    NOT?: NexusGenInputs['BubbleWhereInput'][] | null; // [BubbleWhereInput!]
    OR?: NexusGenInputs['BubbleWhereInput'][] | null; // [BubbleWhereInput!]
    private?: NexusGenInputs['BoolFilter'] | null; // BoolFilter
  }
  BubbleWhereUniqueInput: { // input type
    id?: string | null; // String
  }
  DateTimeFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null; // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  FloatFilter: { // input type
    equals?: number | null; // Float
    gt?: number | null; // Float
    gte?: number | null; // Float
    in?: number[] | null; // [Float!]
    lt?: number | null; // Float
    lte?: number | null; // Float
    not?: NexusGenInputs['NestedFloatFilter'] | null; // NestedFloatFilter
    notIn?: number[] | null; // [Float!]
  }
  IntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  }
  LocationCreateOneWithoutUserInput: { // input type
    connect?: NexusGenInputs['LocationWhereUniqueInput'] | null; // LocationWhereUniqueInput
    create?: NexusGenInputs['LocationCreateWithoutUserInput'] | null; // LocationCreateWithoutUserInput
  }
  LocationCreateWithoutUserInput: { // input type
    city: string; // String!
    country: string; // String!
  }
  LocationWhereInput: { // input type
    AND?: NexusGenInputs['LocationWhereInput'][] | null; // [LocationWhereInput!]
    city?: NexusGenInputs['StringFilter'] | null; // StringFilter
    country?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    NOT?: NexusGenInputs['LocationWhereInput'][] | null; // [LocationWhereInput!]
    OR?: NexusGenInputs['LocationWhereInput'][] | null; // [LocationWhereInput!]
    User?: NexusGenInputs['UserListRelationFilter'] | null; // UserListRelationFilter
  }
  LocationWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  NestedBoolFilter: { // input type
    equals?: boolean | null; // Boolean
    not?: NexusGenInputs['NestedBoolFilter'] | null; // NestedBoolFilter
  }
  NestedDateTimeFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null; // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  NestedFloatFilter: { // input type
    equals?: number | null; // Float
    gt?: number | null; // Float
    gte?: number | null; // Float
    in?: number[] | null; // [Float!]
    lt?: number | null; // Float
    lte?: number | null; // Float
    not?: NexusGenInputs['NestedFloatFilter'] | null; // NestedFloatFilter
    notIn?: number[] | null; // [Float!]
  }
  NestedIntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  }
  NestedStringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  NestedStringNullableFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringNullableFilter'] | null; // NestedStringNullableFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  PostCreateInput: { // input type
    authors?: NexusGenInputs['UserCreateManyWithoutPostsInput'] | null; // UserCreateManyWithoutPostsInput
    rating: number; // Float!
    status: NexusGenEnums['PostStatus']; // PostStatus!
  }
  PostListRelationFilter: { // input type
    every?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    none?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    some?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
  }
  PostOrderByInput: { // input type
    id?: NexusGenEnums['SortOrder'] | null; // SortOrder
    rating?: NexusGenEnums['SortOrder'] | null; // SortOrder
    status?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  PostUpdateManyMutationInput: { // input type
    rating?: number | null; // Float
    status?: NexusGenEnums['PostStatus'] | null; // PostStatus
  }
  PostWhereInput: { // input type
    AND?: NexusGenInputs['PostWhereInput'][] | null; // [PostWhereInput!]
    authors?: NexusGenInputs['UserListRelationFilter'] | null; // UserListRelationFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    NOT?: NexusGenInputs['PostWhereInput'][] | null; // [PostWhereInput!]
    OR?: NexusGenInputs['PostWhereInput'][] | null; // [PostWhereInput!]
    rating?: NexusGenInputs['FloatFilter'] | null; // FloatFilter
    status?: NexusGenEnums['PostStatus'] | null; // PostStatus
  }
  PostWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  StringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  StringNullableFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringNullableFilter'] | null; // NestedStringNullableFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  UserCreateManyWithoutPostsInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'][] | null; // [UserWhereUniqueInput!]
    create?: NexusGenInputs['UserCreateWithoutPostsInput'][] | null; // [UserCreateWithoutPostsInput!]
  }
  UserCreateWithoutPostsInput: { // input type
    Bubble?: NexusGenInputs['BubbleCreateOneWithoutMembersInput'] | null; // BubbleCreateOneWithoutMembersInput
    firstName: string; // String!
    id?: string | null; // String
    lastName: string; // String!
    location: NexusGenInputs['LocationCreateOneWithoutUserInput']; // LocationCreateOneWithoutUserInput!
  }
  UserListRelationFilter: { // input type
    every?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    none?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    some?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
  }
  UserWhereInput: { // input type
    AND?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    Bubble?: NexusGenInputs['BubbleWhereInput'] | null; // BubbleWhereInput
    bubbleId?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    firstName?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
    lastName?: NexusGenInputs['StringFilter'] | null; // StringFilter
    location?: NexusGenInputs['LocationWhereInput'] | null; // LocationWhereInput
    locationId?: NexusGenInputs['IntFilter'] | null; // IntFilter
    NOT?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    OR?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    posts?: NexusGenInputs['PostListRelationFilter'] | null; // PostListRelationFilter
  }
  UserWhereUniqueInput: { // input type
    id?: string | null; // String
  }
}

export interface NexusGenEnums {
  PostStatus: "DRAFT" | "PUBLISHED"
  SortOrder: "asc" | "desc"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenRootTypes {
  BatchPayload: { // root type
    count: number; // Int!
  }
  Bubble: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // String!
  }
  Location: { // root type
    city: string; // String!
    country: string; // String!
    id: number; // Int!
  }
  Mutation: {};
  Post: { // root type
    id: number; // Int!
    status: NexusGenEnums['PostStatus']; // PostStatus!
  }
  Query: {};
  User: { // root type
    firstName: string; // String!
    id: string; // String!
  }
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  BoolFilter: NexusGenInputs['BoolFilter'];
  BubbleCreateOneWithoutMembersInput: NexusGenInputs['BubbleCreateOneWithoutMembersInput'];
  BubbleCreateWithoutMembersInput: NexusGenInputs['BubbleCreateWithoutMembersInput'];
  BubbleMembersOrderByInput: NexusGenInputs['BubbleMembersOrderByInput'];
  BubbleMembersWhereInput: NexusGenInputs['BubbleMembersWhereInput'];
  BubbleWhereInput: NexusGenInputs['BubbleWhereInput'];
  BubbleWhereUniqueInput: NexusGenInputs['BubbleWhereUniqueInput'];
  DateTimeFilter: NexusGenInputs['DateTimeFilter'];
  FloatFilter: NexusGenInputs['FloatFilter'];
  IntFilter: NexusGenInputs['IntFilter'];
  LocationCreateOneWithoutUserInput: NexusGenInputs['LocationCreateOneWithoutUserInput'];
  LocationCreateWithoutUserInput: NexusGenInputs['LocationCreateWithoutUserInput'];
  LocationWhereInput: NexusGenInputs['LocationWhereInput'];
  LocationWhereUniqueInput: NexusGenInputs['LocationWhereUniqueInput'];
  NestedBoolFilter: NexusGenInputs['NestedBoolFilter'];
  NestedDateTimeFilter: NexusGenInputs['NestedDateTimeFilter'];
  NestedFloatFilter: NexusGenInputs['NestedFloatFilter'];
  NestedIntFilter: NexusGenInputs['NestedIntFilter'];
  NestedStringFilter: NexusGenInputs['NestedStringFilter'];
  NestedStringNullableFilter: NexusGenInputs['NestedStringNullableFilter'];
  PostCreateInput: NexusGenInputs['PostCreateInput'];
  PostListRelationFilter: NexusGenInputs['PostListRelationFilter'];
  PostOrderByInput: NexusGenInputs['PostOrderByInput'];
  PostUpdateManyMutationInput: NexusGenInputs['PostUpdateManyMutationInput'];
  PostWhereInput: NexusGenInputs['PostWhereInput'];
  PostWhereUniqueInput: NexusGenInputs['PostWhereUniqueInput'];
  StringFilter: NexusGenInputs['StringFilter'];
  StringNullableFilter: NexusGenInputs['StringNullableFilter'];
  UserCreateManyWithoutPostsInput: NexusGenInputs['UserCreateManyWithoutPostsInput'];
  UserCreateWithoutPostsInput: NexusGenInputs['UserCreateWithoutPostsInput'];
  UserListRelationFilter: NexusGenInputs['UserListRelationFilter'];
  UserWhereInput: NexusGenInputs['UserWhereInput'];
  UserWhereUniqueInput: NexusGenInputs['UserWhereUniqueInput'];
  PostStatus: NexusGenEnums['PostStatus'];
  SortOrder: NexusGenEnums['SortOrder'];
  String: NexusGenScalars['String'];
  Int: NexusGenScalars['Int'];
  Float: NexusGenScalars['Float'];
  Boolean: NexusGenScalars['Boolean'];
  ID: NexusGenScalars['ID'];
  DateTime: NexusGenScalars['DateTime'];
}

export interface NexusGenFieldTypes {
  BatchPayload: { // field return type
    count: number; // Int!
  }
  Bubble: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // String!
    members: NexusGenRootTypes['User'][]; // [User!]!
  }
  Location: { // field return type
    city: string; // String!
    country: string; // String!
    id: number; // Int!
  }
  Mutation: { // field return type
    createOnePost: NexusGenRootTypes['Post']; // Post!
    updateManyPost: NexusGenRootTypes['BatchPayload']; // BatchPayload!
  }
  Post: { // field return type
    authors: NexusGenRootTypes['User'][]; // [User!]!
    id: number; // Int!
    status: NexusGenEnums['PostStatus']; // PostStatus!
  }
  Query: { // field return type
    user: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  User: { // field return type
    firstName: string; // String!
    id: string; // String!
    location: NexusGenRootTypes['Location']; // Location!
    posts: NexusGenRootTypes['Post'][]; // [Post!]!
  }
}

export interface NexusGenArgTypes {
  Bubble: {
    members: { // args
      after?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      orderBy?: NexusGenInputs['BubbleMembersOrderByInput'][] | null; // [BubbleMembersOrderByInput!]
      where?: NexusGenInputs['BubbleMembersWhereInput'] | null; // BubbleMembersWhereInput
    }
  }
  Mutation: {
    createOnePost: { // args
      data: NexusGenInputs['PostCreateInput']; // PostCreateInput!
    }
    updateManyPost: { // args
      data: NexusGenInputs['PostUpdateManyMutationInput']; // PostUpdateManyMutationInput!
      where?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    }
  }
  Query: {
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    users: { // args
      after?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      before?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
  User: {
    posts: { // args
      after?: NexusGenInputs['PostWhereUniqueInput'] | null; // PostWhereUniqueInput
      before?: NexusGenInputs['PostWhereUniqueInput'] | null; // PostWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['PostOrderByInput'][] | null; // [PostOrderByInput!]
      where?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "BatchPayload" | "Bubble" | "Location" | "Mutation" | "Post" | "Query" | "User";

export type NexusGenInputNames = "BoolFilter" | "BubbleCreateOneWithoutMembersInput" | "BubbleCreateWithoutMembersInput" | "BubbleMembersOrderByInput" | "BubbleMembersWhereInput" | "BubbleWhereInput" | "BubbleWhereUniqueInput" | "DateTimeFilter" | "FloatFilter" | "IntFilter" | "LocationCreateOneWithoutUserInput" | "LocationCreateWithoutUserInput" | "LocationWhereInput" | "LocationWhereUniqueInput" | "NestedBoolFilter" | "NestedDateTimeFilter" | "NestedFloatFilter" | "NestedIntFilter" | "NestedStringFilter" | "NestedStringNullableFilter" | "PostCreateInput" | "PostListRelationFilter" | "PostOrderByInput" | "PostUpdateManyMutationInput" | "PostWhereInput" | "PostWhereUniqueInput" | "StringFilter" | "StringNullableFilter" | "UserCreateManyWithoutPostsInput" | "UserCreateWithoutPostsInput" | "UserListRelationFilter" | "UserWhereInput" | "UserWhereUniqueInput";

export type NexusGenEnumNames = "PostStatus" | "SortOrder";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}