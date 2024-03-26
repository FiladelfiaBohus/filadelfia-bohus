/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment hero on Hero {\n    id\n    ingress\n    title\n    image {\n      url\n    }\n  }\n": types.HeroFragmentDoc,
    "\n  fragment imageBasic on Asset {\n    url\n  }\n": types.ImageBasicFragmentDoc,
    "\n  fragment navLink on NavLink {\n    id\n    page {\n      slug\n      pageTitle\n    }\n  }\n": types.NavLinkFragmentDoc,
    "\n  fragment personInfo on PersonInfo {\n    id\n    name\n    label\n    image {\n      url\n    }\n  }\n": types.PersonInfoFragmentDoc,
    "\n  fragment homePage on HomePage {\n    id\n    pageTitle\n    pageDescription\n    content {\n      ...hero\n    }\n  }\n  \n": types.HomePageFragmentDoc,
    "\n  query HomePage {\n    homePage(where: { id: \"cltvxcrkvi8xl07ure2zpwy86\" }, stage: DRAFT) {\n      ...homePage\n    }\n  }\n  \n": types.HomePageDocument,
    "\n  query NavigationQuery {\n    navigation(where: { id: \"cltvzxqzzjzmx07urcg4ircdf\" }, stage: DRAFT) {\n      id\n      logo {\n        url\n      }\n      logoText\n      menuItems {\n        ...navLink\n      }\n    }\n  }\n  \n": types.NavigationQueryDocument,
    "\n  fragment page on Page {\n    id\n    pageTitle\n    pageDescription\n    content {\n      ...hero\n    }\n    slug\n  }\n  \n": types.PageFragmentDoc,
    "\n  query Page($slug: String) {\n    page(where: { slug: $slug }, stage: DRAFT) {\n      ...page\n    }\n  }\n  \n": types.PageDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment hero on Hero {\n    id\n    ingress\n    title\n    image {\n      url\n    }\n  }\n"): (typeof documents)["\n  fragment hero on Hero {\n    id\n    ingress\n    title\n    image {\n      url\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment imageBasic on Asset {\n    url\n  }\n"): (typeof documents)["\n  fragment imageBasic on Asset {\n    url\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment navLink on NavLink {\n    id\n    page {\n      slug\n      pageTitle\n    }\n  }\n"): (typeof documents)["\n  fragment navLink on NavLink {\n    id\n    page {\n      slug\n      pageTitle\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment personInfo on PersonInfo {\n    id\n    name\n    label\n    image {\n      url\n    }\n  }\n"): (typeof documents)["\n  fragment personInfo on PersonInfo {\n    id\n    name\n    label\n    image {\n      url\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment homePage on HomePage {\n    id\n    pageTitle\n    pageDescription\n    content {\n      ...hero\n    }\n  }\n  \n"): (typeof documents)["\n  fragment homePage on HomePage {\n    id\n    pageTitle\n    pageDescription\n    content {\n      ...hero\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query HomePage {\n    homePage(where: { id: \"cltvxcrkvi8xl07ure2zpwy86\" }, stage: DRAFT) {\n      ...homePage\n    }\n  }\n  \n"): (typeof documents)["\n  query HomePage {\n    homePage(where: { id: \"cltvxcrkvi8xl07ure2zpwy86\" }, stage: DRAFT) {\n      ...homePage\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query NavigationQuery {\n    navigation(where: { id: \"cltvzxqzzjzmx07urcg4ircdf\" }, stage: DRAFT) {\n      id\n      logo {\n        url\n      }\n      logoText\n      menuItems {\n        ...navLink\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  query NavigationQuery {\n    navigation(where: { id: \"cltvzxqzzjzmx07urcg4ircdf\" }, stage: DRAFT) {\n      id\n      logo {\n        url\n      }\n      logoText\n      menuItems {\n        ...navLink\n      }\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment page on Page {\n    id\n    pageTitle\n    pageDescription\n    content {\n      ...hero\n    }\n    slug\n  }\n  \n"): (typeof documents)["\n  fragment page on Page {\n    id\n    pageTitle\n    pageDescription\n    content {\n      ...hero\n    }\n    slug\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Page($slug: String) {\n    page(where: { slug: $slug }, stage: DRAFT) {\n      ...page\n    }\n  }\n  \n"): (typeof documents)["\n  query Page($slug: String) {\n    page(where: { slug: $slug }, stage: DRAFT) {\n      ...page\n    }\n  }\n  \n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;