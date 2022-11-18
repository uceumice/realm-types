# 𝙍𝙚𝙖𝙡𝙢 𝙒𝙞𝙩𝙝 | 𝒯𝓎𝓅ℯ𝓈 ⋆ ˚｡⋆୨˚✧

## Installation

### npm

```bash
npm install "@realm.w/types@latest"
```

### pnpm

```bash
pnpm add "@realm.w/types@latest"
```

### yarn

```bash
yarn install "@realm.w/types@latest"
```

### Globals

Place this file at the root of your `src` directory or at the root of your `functions` source directory for TypeScript Server to infer appropriate types for the global variables.

### global.d.ts

```ts
import 
declare global {
    const context: NormalContext;

    const BSON: {
        ObjectId: InstanceType<ObjectId>
    };
}

```

#### context.ts

```ts
import { Context as __Context } from "@realm.w/types";
import { UserType } from "@realm.w/types/out/functions/context/shared";

// ---- For better structure, and observability, you can 
// ---- define your bindings, variables, etc. in separate files
import { CustomData, ProfileData, DataSources, Environment, Functions, Values } from "./types";

// @ts-expect-error
export type Context<U extends UserType> = __Context<U, Values, Functions, DataSources, Environment, CustomData, ProfileData>;

// ---- For functions which are meant to be invoked by the enduser
export type NormalContext = Context<"normal">;

// ---- For functions which are run by system itself (e.g. triggers/graphql resolvers)
// ---- P.S.: you can redefine global context in scope of certain functions to be sure in typings) 
export type SystemContext = Context<"system">;
```

## Collaboration

You are welcome to propose new features. You can also complain about the bugs, open all sorts of code related issues.

## Licence

MIT
