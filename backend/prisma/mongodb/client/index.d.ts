
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model eventoActividadDatos
 * 
 */
export type eventoActividadDatos = $Result.DefaultSelection<Prisma.$eventoActividadDatosPayload>
/**
 * Model eventoInicioSesion
 * 
 */
export type eventoInicioSesion = $Result.DefaultSelection<Prisma.$eventoInicioSesionPayload>
/**
 * Model infoOficios
 * 
 */
export type infoOficios = $Result.DefaultSelection<Prisma.$infoOficiosPayload>
/**
 * Model logReportesGenerados
 * 
 */
export type logReportesGenerados = $Result.DefaultSelection<Prisma.$logReportesGeneradosPayload>
/**
 * Model eventoModificacion
 * 
 */
export type eventoModificacion = $Result.DefaultSelection<Prisma.$eventoModificacionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more EventoActividadDatos
 * const eventoActividadDatos = await prisma.eventoActividadDatos.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more EventoActividadDatos
   * const eventoActividadDatos = await prisma.eventoActividadDatos.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.eventoActividadDatos`: Exposes CRUD operations for the **eventoActividadDatos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventoActividadDatos
    * const eventoActividadDatos = await prisma.eventoActividadDatos.findMany()
    * ```
    */
  get eventoActividadDatos(): Prisma.eventoActividadDatosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventoInicioSesion`: Exposes CRUD operations for the **eventoInicioSesion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventoInicioSesions
    * const eventoInicioSesions = await prisma.eventoInicioSesion.findMany()
    * ```
    */
  get eventoInicioSesion(): Prisma.eventoInicioSesionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.infoOficios`: Exposes CRUD operations for the **infoOficios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InfoOficios
    * const infoOficios = await prisma.infoOficios.findMany()
    * ```
    */
  get infoOficios(): Prisma.infoOficiosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logReportesGenerados`: Exposes CRUD operations for the **logReportesGenerados** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LogReportesGenerados
    * const logReportesGenerados = await prisma.logReportesGenerados.findMany()
    * ```
    */
  get logReportesGenerados(): Prisma.logReportesGeneradosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventoModificacion`: Exposes CRUD operations for the **eventoModificacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventoModificacions
    * const eventoModificacions = await prisma.eventoModificacion.findMany()
    * ```
    */
  get eventoModificacion(): Prisma.eventoModificacionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    eventoActividadDatos: 'eventoActividadDatos',
    eventoInicioSesion: 'eventoInicioSesion',
    infoOficios: 'infoOficios',
    logReportesGenerados: 'logReportesGenerados',
    eventoModificacion: 'eventoModificacion'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "eventoActividadDatos" | "eventoInicioSesion" | "infoOficios" | "logReportesGenerados" | "eventoModificacion"
      txIsolationLevel: never
    }
    model: {
      eventoActividadDatos: {
        payload: Prisma.$eventoActividadDatosPayload<ExtArgs>
        fields: Prisma.eventoActividadDatosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eventoActividadDatosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoActividadDatosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eventoActividadDatosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoActividadDatosPayload>
          }
          findFirst: {
            args: Prisma.eventoActividadDatosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoActividadDatosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eventoActividadDatosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoActividadDatosPayload>
          }
          findMany: {
            args: Prisma.eventoActividadDatosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoActividadDatosPayload>[]
          }
          create: {
            args: Prisma.eventoActividadDatosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoActividadDatosPayload>
          }
          createMany: {
            args: Prisma.eventoActividadDatosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.eventoActividadDatosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoActividadDatosPayload>
          }
          update: {
            args: Prisma.eventoActividadDatosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoActividadDatosPayload>
          }
          deleteMany: {
            args: Prisma.eventoActividadDatosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.eventoActividadDatosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.eventoActividadDatosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoActividadDatosPayload>
          }
          aggregate: {
            args: Prisma.EventoActividadDatosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventoActividadDatos>
          }
          groupBy: {
            args: Prisma.eventoActividadDatosGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventoActividadDatosGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.eventoActividadDatosFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.eventoActividadDatosAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.eventoActividadDatosCountArgs<ExtArgs>
            result: $Utils.Optional<EventoActividadDatosCountAggregateOutputType> | number
          }
        }
      }
      eventoInicioSesion: {
        payload: Prisma.$eventoInicioSesionPayload<ExtArgs>
        fields: Prisma.eventoInicioSesionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eventoInicioSesionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoInicioSesionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eventoInicioSesionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoInicioSesionPayload>
          }
          findFirst: {
            args: Prisma.eventoInicioSesionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoInicioSesionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eventoInicioSesionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoInicioSesionPayload>
          }
          findMany: {
            args: Prisma.eventoInicioSesionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoInicioSesionPayload>[]
          }
          create: {
            args: Prisma.eventoInicioSesionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoInicioSesionPayload>
          }
          createMany: {
            args: Prisma.eventoInicioSesionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.eventoInicioSesionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoInicioSesionPayload>
          }
          update: {
            args: Prisma.eventoInicioSesionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoInicioSesionPayload>
          }
          deleteMany: {
            args: Prisma.eventoInicioSesionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.eventoInicioSesionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.eventoInicioSesionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoInicioSesionPayload>
          }
          aggregate: {
            args: Prisma.EventoInicioSesionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventoInicioSesion>
          }
          groupBy: {
            args: Prisma.eventoInicioSesionGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventoInicioSesionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.eventoInicioSesionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.eventoInicioSesionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.eventoInicioSesionCountArgs<ExtArgs>
            result: $Utils.Optional<EventoInicioSesionCountAggregateOutputType> | number
          }
        }
      }
      infoOficios: {
        payload: Prisma.$infoOficiosPayload<ExtArgs>
        fields: Prisma.infoOficiosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.infoOficiosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$infoOficiosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.infoOficiosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$infoOficiosPayload>
          }
          findFirst: {
            args: Prisma.infoOficiosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$infoOficiosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.infoOficiosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$infoOficiosPayload>
          }
          findMany: {
            args: Prisma.infoOficiosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$infoOficiosPayload>[]
          }
          create: {
            args: Prisma.infoOficiosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$infoOficiosPayload>
          }
          createMany: {
            args: Prisma.infoOficiosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.infoOficiosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$infoOficiosPayload>
          }
          update: {
            args: Prisma.infoOficiosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$infoOficiosPayload>
          }
          deleteMany: {
            args: Prisma.infoOficiosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.infoOficiosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.infoOficiosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$infoOficiosPayload>
          }
          aggregate: {
            args: Prisma.InfoOficiosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInfoOficios>
          }
          groupBy: {
            args: Prisma.infoOficiosGroupByArgs<ExtArgs>
            result: $Utils.Optional<InfoOficiosGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.infoOficiosFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.infoOficiosAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.infoOficiosCountArgs<ExtArgs>
            result: $Utils.Optional<InfoOficiosCountAggregateOutputType> | number
          }
        }
      }
      logReportesGenerados: {
        payload: Prisma.$logReportesGeneradosPayload<ExtArgs>
        fields: Prisma.logReportesGeneradosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.logReportesGeneradosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logReportesGeneradosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.logReportesGeneradosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logReportesGeneradosPayload>
          }
          findFirst: {
            args: Prisma.logReportesGeneradosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logReportesGeneradosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.logReportesGeneradosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logReportesGeneradosPayload>
          }
          findMany: {
            args: Prisma.logReportesGeneradosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logReportesGeneradosPayload>[]
          }
          create: {
            args: Prisma.logReportesGeneradosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logReportesGeneradosPayload>
          }
          createMany: {
            args: Prisma.logReportesGeneradosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.logReportesGeneradosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logReportesGeneradosPayload>
          }
          update: {
            args: Prisma.logReportesGeneradosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logReportesGeneradosPayload>
          }
          deleteMany: {
            args: Prisma.logReportesGeneradosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.logReportesGeneradosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.logReportesGeneradosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logReportesGeneradosPayload>
          }
          aggregate: {
            args: Prisma.LogReportesGeneradosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogReportesGenerados>
          }
          groupBy: {
            args: Prisma.logReportesGeneradosGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogReportesGeneradosGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.logReportesGeneradosFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.logReportesGeneradosAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.logReportesGeneradosCountArgs<ExtArgs>
            result: $Utils.Optional<LogReportesGeneradosCountAggregateOutputType> | number
          }
        }
      }
      eventoModificacion: {
        payload: Prisma.$eventoModificacionPayload<ExtArgs>
        fields: Prisma.eventoModificacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eventoModificacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoModificacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eventoModificacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoModificacionPayload>
          }
          findFirst: {
            args: Prisma.eventoModificacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoModificacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eventoModificacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoModificacionPayload>
          }
          findMany: {
            args: Prisma.eventoModificacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoModificacionPayload>[]
          }
          create: {
            args: Prisma.eventoModificacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoModificacionPayload>
          }
          createMany: {
            args: Prisma.eventoModificacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.eventoModificacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoModificacionPayload>
          }
          update: {
            args: Prisma.eventoModificacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoModificacionPayload>
          }
          deleteMany: {
            args: Prisma.eventoModificacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.eventoModificacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.eventoModificacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoModificacionPayload>
          }
          aggregate: {
            args: Prisma.EventoModificacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventoModificacion>
          }
          groupBy: {
            args: Prisma.eventoModificacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventoModificacionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.eventoModificacionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.eventoModificacionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.eventoModificacionCountArgs<ExtArgs>
            result: $Utils.Optional<EventoModificacionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    eventoActividadDatos?: eventoActividadDatosOmit
    eventoInicioSesion?: eventoInicioSesionOmit
    infoOficios?: infoOficiosOmit
    logReportesGenerados?: logReportesGeneradosOmit
    eventoModificacion?: eventoModificacionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model eventoActividadDatos
   */

  export type AggregateEventoActividadDatos = {
    _count: EventoActividadDatosCountAggregateOutputType | null
    _min: EventoActividadDatosMinAggregateOutputType | null
    _max: EventoActividadDatosMaxAggregateOutputType | null
  }

  export type EventoActividadDatosMinAggregateOutputType = {
    id: string | null
  }

  export type EventoActividadDatosMaxAggregateOutputType = {
    id: string | null
  }

  export type EventoActividadDatosCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type EventoActividadDatosMinAggregateInputType = {
    id?: true
  }

  export type EventoActividadDatosMaxAggregateInputType = {
    id?: true
  }

  export type EventoActividadDatosCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type EventoActividadDatosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eventoActividadDatos to aggregate.
     */
    where?: eventoActividadDatosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventoActividadDatos to fetch.
     */
    orderBy?: eventoActividadDatosOrderByWithRelationInput | eventoActividadDatosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eventoActividadDatosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventoActividadDatos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventoActividadDatos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned eventoActividadDatos
    **/
    _count?: true | EventoActividadDatosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventoActividadDatosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventoActividadDatosMaxAggregateInputType
  }

  export type GetEventoActividadDatosAggregateType<T extends EventoActividadDatosAggregateArgs> = {
        [P in keyof T & keyof AggregateEventoActividadDatos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventoActividadDatos[P]>
      : GetScalarType<T[P], AggregateEventoActividadDatos[P]>
  }




  export type eventoActividadDatosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventoActividadDatosWhereInput
    orderBy?: eventoActividadDatosOrderByWithAggregationInput | eventoActividadDatosOrderByWithAggregationInput[]
    by: EventoActividadDatosScalarFieldEnum[] | EventoActividadDatosScalarFieldEnum
    having?: eventoActividadDatosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventoActividadDatosCountAggregateInputType | true
    _min?: EventoActividadDatosMinAggregateInputType
    _max?: EventoActividadDatosMaxAggregateInputType
  }

  export type EventoActividadDatosGroupByOutputType = {
    id: string
    _count: EventoActividadDatosCountAggregateOutputType | null
    _min: EventoActividadDatosMinAggregateOutputType | null
    _max: EventoActividadDatosMaxAggregateOutputType | null
  }

  type GetEventoActividadDatosGroupByPayload<T extends eventoActividadDatosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventoActividadDatosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventoActividadDatosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventoActividadDatosGroupByOutputType[P]>
            : GetScalarType<T[P], EventoActividadDatosGroupByOutputType[P]>
        }
      >
    >


  export type eventoActividadDatosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["eventoActividadDatos"]>



  export type eventoActividadDatosSelectScalar = {
    id?: boolean
  }

  export type eventoActividadDatosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id", ExtArgs["result"]["eventoActividadDatos"]>

  export type $eventoActividadDatosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "eventoActividadDatos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["eventoActividadDatos"]>
    composites: {}
  }

  type eventoActividadDatosGetPayload<S extends boolean | null | undefined | eventoActividadDatosDefaultArgs> = $Result.GetResult<Prisma.$eventoActividadDatosPayload, S>

  type eventoActividadDatosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<eventoActividadDatosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventoActividadDatosCountAggregateInputType | true
    }

  export interface eventoActividadDatosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['eventoActividadDatos'], meta: { name: 'eventoActividadDatos' } }
    /**
     * Find zero or one EventoActividadDatos that matches the filter.
     * @param {eventoActividadDatosFindUniqueArgs} args - Arguments to find a EventoActividadDatos
     * @example
     * // Get one EventoActividadDatos
     * const eventoActividadDatos = await prisma.eventoActividadDatos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends eventoActividadDatosFindUniqueArgs>(args: SelectSubset<T, eventoActividadDatosFindUniqueArgs<ExtArgs>>): Prisma__eventoActividadDatosClient<$Result.GetResult<Prisma.$eventoActividadDatosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventoActividadDatos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {eventoActividadDatosFindUniqueOrThrowArgs} args - Arguments to find a EventoActividadDatos
     * @example
     * // Get one EventoActividadDatos
     * const eventoActividadDatos = await prisma.eventoActividadDatos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends eventoActividadDatosFindUniqueOrThrowArgs>(args: SelectSubset<T, eventoActividadDatosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__eventoActividadDatosClient<$Result.GetResult<Prisma.$eventoActividadDatosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventoActividadDatos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoActividadDatosFindFirstArgs} args - Arguments to find a EventoActividadDatos
     * @example
     * // Get one EventoActividadDatos
     * const eventoActividadDatos = await prisma.eventoActividadDatos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends eventoActividadDatosFindFirstArgs>(args?: SelectSubset<T, eventoActividadDatosFindFirstArgs<ExtArgs>>): Prisma__eventoActividadDatosClient<$Result.GetResult<Prisma.$eventoActividadDatosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventoActividadDatos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoActividadDatosFindFirstOrThrowArgs} args - Arguments to find a EventoActividadDatos
     * @example
     * // Get one EventoActividadDatos
     * const eventoActividadDatos = await prisma.eventoActividadDatos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends eventoActividadDatosFindFirstOrThrowArgs>(args?: SelectSubset<T, eventoActividadDatosFindFirstOrThrowArgs<ExtArgs>>): Prisma__eventoActividadDatosClient<$Result.GetResult<Prisma.$eventoActividadDatosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventoActividadDatos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoActividadDatosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventoActividadDatos
     * const eventoActividadDatos = await prisma.eventoActividadDatos.findMany()
     * 
     * // Get first 10 EventoActividadDatos
     * const eventoActividadDatos = await prisma.eventoActividadDatos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventoActividadDatosWithIdOnly = await prisma.eventoActividadDatos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends eventoActividadDatosFindManyArgs>(args?: SelectSubset<T, eventoActividadDatosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventoActividadDatosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventoActividadDatos.
     * @param {eventoActividadDatosCreateArgs} args - Arguments to create a EventoActividadDatos.
     * @example
     * // Create one EventoActividadDatos
     * const EventoActividadDatos = await prisma.eventoActividadDatos.create({
     *   data: {
     *     // ... data to create a EventoActividadDatos
     *   }
     * })
     * 
     */
    create<T extends eventoActividadDatosCreateArgs>(args: SelectSubset<T, eventoActividadDatosCreateArgs<ExtArgs>>): Prisma__eventoActividadDatosClient<$Result.GetResult<Prisma.$eventoActividadDatosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventoActividadDatos.
     * @param {eventoActividadDatosCreateManyArgs} args - Arguments to create many EventoActividadDatos.
     * @example
     * // Create many EventoActividadDatos
     * const eventoActividadDatos = await prisma.eventoActividadDatos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends eventoActividadDatosCreateManyArgs>(args?: SelectSubset<T, eventoActividadDatosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EventoActividadDatos.
     * @param {eventoActividadDatosDeleteArgs} args - Arguments to delete one EventoActividadDatos.
     * @example
     * // Delete one EventoActividadDatos
     * const EventoActividadDatos = await prisma.eventoActividadDatos.delete({
     *   where: {
     *     // ... filter to delete one EventoActividadDatos
     *   }
     * })
     * 
     */
    delete<T extends eventoActividadDatosDeleteArgs>(args: SelectSubset<T, eventoActividadDatosDeleteArgs<ExtArgs>>): Prisma__eventoActividadDatosClient<$Result.GetResult<Prisma.$eventoActividadDatosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventoActividadDatos.
     * @param {eventoActividadDatosUpdateArgs} args - Arguments to update one EventoActividadDatos.
     * @example
     * // Update one EventoActividadDatos
     * const eventoActividadDatos = await prisma.eventoActividadDatos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends eventoActividadDatosUpdateArgs>(args: SelectSubset<T, eventoActividadDatosUpdateArgs<ExtArgs>>): Prisma__eventoActividadDatosClient<$Result.GetResult<Prisma.$eventoActividadDatosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventoActividadDatos.
     * @param {eventoActividadDatosDeleteManyArgs} args - Arguments to filter EventoActividadDatos to delete.
     * @example
     * // Delete a few EventoActividadDatos
     * const { count } = await prisma.eventoActividadDatos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends eventoActividadDatosDeleteManyArgs>(args?: SelectSubset<T, eventoActividadDatosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventoActividadDatos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoActividadDatosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventoActividadDatos
     * const eventoActividadDatos = await prisma.eventoActividadDatos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends eventoActividadDatosUpdateManyArgs>(args: SelectSubset<T, eventoActividadDatosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventoActividadDatos.
     * @param {eventoActividadDatosUpsertArgs} args - Arguments to update or create a EventoActividadDatos.
     * @example
     * // Update or create a EventoActividadDatos
     * const eventoActividadDatos = await prisma.eventoActividadDatos.upsert({
     *   create: {
     *     // ... data to create a EventoActividadDatos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventoActividadDatos we want to update
     *   }
     * })
     */
    upsert<T extends eventoActividadDatosUpsertArgs>(args: SelectSubset<T, eventoActividadDatosUpsertArgs<ExtArgs>>): Prisma__eventoActividadDatosClient<$Result.GetResult<Prisma.$eventoActividadDatosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventoActividadDatos that matches the filter.
     * @param {eventoActividadDatosFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const eventoActividadDatos = await prisma.eventoActividadDatos.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: eventoActividadDatosFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a EventoActividadDatos.
     * @param {eventoActividadDatosAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const eventoActividadDatos = await prisma.eventoActividadDatos.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: eventoActividadDatosAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of EventoActividadDatos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoActividadDatosCountArgs} args - Arguments to filter EventoActividadDatos to count.
     * @example
     * // Count the number of EventoActividadDatos
     * const count = await prisma.eventoActividadDatos.count({
     *   where: {
     *     // ... the filter for the EventoActividadDatos we want to count
     *   }
     * })
    **/
    count<T extends eventoActividadDatosCountArgs>(
      args?: Subset<T, eventoActividadDatosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventoActividadDatosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventoActividadDatos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoActividadDatosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventoActividadDatosAggregateArgs>(args: Subset<T, EventoActividadDatosAggregateArgs>): Prisma.PrismaPromise<GetEventoActividadDatosAggregateType<T>>

    /**
     * Group by EventoActividadDatos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoActividadDatosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends eventoActividadDatosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eventoActividadDatosGroupByArgs['orderBy'] }
        : { orderBy?: eventoActividadDatosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, eventoActividadDatosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventoActividadDatosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the eventoActividadDatos model
   */
  readonly fields: eventoActividadDatosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for eventoActividadDatos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eventoActividadDatosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the eventoActividadDatos model
   */
  interface eventoActividadDatosFieldRefs {
    readonly id: FieldRef<"eventoActividadDatos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * eventoActividadDatos findUnique
   */
  export type eventoActividadDatosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventoActividadDatos
     */
    select?: eventoActividadDatosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventoActividadDatos
     */
    omit?: eventoActividadDatosOmit<ExtArgs> | null
    /**
     * Filter, which eventoActividadDatos to fetch.
     */
    where: eventoActividadDatosWhereUniqueInput
  }

  /**
   * eventoActividadDatos findUniqueOrThrow
   */
  export type eventoActividadDatosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventoActividadDatos
     */
    select?: eventoActividadDatosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventoActividadDatos
     */
    omit?: eventoActividadDatosOmit<ExtArgs> | null
    /**
     * Filter, which eventoActividadDatos to fetch.
     */
    where: eventoActividadDatosWhereUniqueInput
  }

  /**
   * eventoActividadDatos findFirst
   */
  export type eventoActividadDatosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventoActividadDatos
     */
    select?: eventoActividadDatosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventoActividadDatos
     */
    omit?: eventoActividadDatosOmit<ExtArgs> | null
    /**
     * Filter, which eventoActividadDatos to fetch.
     */
    where?: eventoActividadDatosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventoActividadDatos to fetch.
     */
    orderBy?: eventoActividadDatosOrderByWithRelationInput | eventoActividadDatosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eventoActividadDatos.
     */
    cursor?: eventoActividadDatosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventoActividadDatos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventoActividadDatos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eventoActividadDatos.
     */
    distinct?: EventoActividadDatosScalarFieldEnum | EventoActividadDatosScalarFieldEnum[]
  }

  /**
   * eventoActividadDatos findFirstOrThrow
   */
  export type eventoActividadDatosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventoActividadDatos
     */
    select?: eventoActividadDatosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventoActividadDatos
     */
    omit?: eventoActividadDatosOmit<ExtArgs> | null
    /**
     * Filter, which eventoActividadDatos to fetch.
     */
    where?: eventoActividadDatosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventoActividadDatos to fetch.
     */
    orderBy?: eventoActividadDatosOrderByWithRelationInput | eventoActividadDatosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eventoActividadDatos.
     */
    cursor?: eventoActividadDatosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventoActividadDatos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventoActividadDatos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eventoActividadDatos.
     */
    distinct?: EventoActividadDatosScalarFieldEnum | EventoActividadDatosScalarFieldEnum[]
  }

  /**
   * eventoActividadDatos findMany
   */
  export type eventoActividadDatosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventoActividadDatos
     */
    select?: eventoActividadDatosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventoActividadDatos
     */
    omit?: eventoActividadDatosOmit<ExtArgs> | null
    /**
     * Filter, which eventoActividadDatos to fetch.
     */
    where?: eventoActividadDatosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventoActividadDatos to fetch.
     */
    orderBy?: eventoActividadDatosOrderByWithRelationInput | eventoActividadDatosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing eventoActividadDatos.
     */
    cursor?: eventoActividadDatosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventoActividadDatos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventoActividadDatos.
     */
    skip?: number
    distinct?: EventoActividadDatosScalarFieldEnum | EventoActividadDatosScalarFieldEnum[]
  }

  /**
   * eventoActividadDatos create
   */
  export type eventoActividadDatosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventoActividadDatos
     */
    select?: eventoActividadDatosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventoActividadDatos
     */
    omit?: eventoActividadDatosOmit<ExtArgs> | null
    /**
     * The data needed to create a eventoActividadDatos.
     */
    data?: XOR<eventoActividadDatosCreateInput, eventoActividadDatosUncheckedCreateInput>
  }

  /**
   * eventoActividadDatos createMany
   */
  export type eventoActividadDatosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many eventoActividadDatos.
     */
    data: eventoActividadDatosCreateManyInput | eventoActividadDatosCreateManyInput[]
  }

  /**
   * eventoActividadDatos update
   */
  export type eventoActividadDatosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventoActividadDatos
     */
    select?: eventoActividadDatosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventoActividadDatos
     */
    omit?: eventoActividadDatosOmit<ExtArgs> | null
    /**
     * The data needed to update a eventoActividadDatos.
     */
    data: XOR<eventoActividadDatosUpdateInput, eventoActividadDatosUncheckedUpdateInput>
    /**
     * Choose, which eventoActividadDatos to update.
     */
    where: eventoActividadDatosWhereUniqueInput
  }

  /**
   * eventoActividadDatos updateMany
   */
  export type eventoActividadDatosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update eventoActividadDatos.
     */
    data: XOR<eventoActividadDatosUpdateManyMutationInput, eventoActividadDatosUncheckedUpdateManyInput>
    /**
     * Filter which eventoActividadDatos to update
     */
    where?: eventoActividadDatosWhereInput
    /**
     * Limit how many eventoActividadDatos to update.
     */
    limit?: number
  }

  /**
   * eventoActividadDatos upsert
   */
  export type eventoActividadDatosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventoActividadDatos
     */
    select?: eventoActividadDatosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventoActividadDatos
     */
    omit?: eventoActividadDatosOmit<ExtArgs> | null
    /**
     * The filter to search for the eventoActividadDatos to update in case it exists.
     */
    where: eventoActividadDatosWhereUniqueInput
    /**
     * In case the eventoActividadDatos found by the `where` argument doesn't exist, create a new eventoActividadDatos with this data.
     */
    create: XOR<eventoActividadDatosCreateInput, eventoActividadDatosUncheckedCreateInput>
    /**
     * In case the eventoActividadDatos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eventoActividadDatosUpdateInput, eventoActividadDatosUncheckedUpdateInput>
  }

  /**
   * eventoActividadDatos delete
   */
  export type eventoActividadDatosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventoActividadDatos
     */
    select?: eventoActividadDatosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventoActividadDatos
     */
    omit?: eventoActividadDatosOmit<ExtArgs> | null
    /**
     * Filter which eventoActividadDatos to delete.
     */
    where: eventoActividadDatosWhereUniqueInput
  }

  /**
   * eventoActividadDatos deleteMany
   */
  export type eventoActividadDatosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eventoActividadDatos to delete
     */
    where?: eventoActividadDatosWhereInput
    /**
     * Limit how many eventoActividadDatos to delete.
     */
    limit?: number
  }

  /**
   * eventoActividadDatos findRaw
   */
  export type eventoActividadDatosFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * eventoActividadDatos aggregateRaw
   */
  export type eventoActividadDatosAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * eventoActividadDatos without action
   */
  export type eventoActividadDatosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventoActividadDatos
     */
    select?: eventoActividadDatosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventoActividadDatos
     */
    omit?: eventoActividadDatosOmit<ExtArgs> | null
  }


  /**
   * Model eventoInicioSesion
   */

  export type AggregateEventoInicioSesion = {
    _count: EventoInicioSesionCountAggregateOutputType | null
    _min: EventoInicioSesionMinAggregateOutputType | null
    _max: EventoInicioSesionMaxAggregateOutputType | null
  }

  export type EventoInicioSesionMinAggregateOutputType = {
    id: string | null
    nombreUsuario: string | null
    rol: string | null
    fechaInicio: Date | null
    ip: string | null
  }

  export type EventoInicioSesionMaxAggregateOutputType = {
    id: string | null
    nombreUsuario: string | null
    rol: string | null
    fechaInicio: Date | null
    ip: string | null
  }

  export type EventoInicioSesionCountAggregateOutputType = {
    id: number
    nombreUsuario: number
    rol: number
    fechaInicio: number
    ip: number
    _all: number
  }


  export type EventoInicioSesionMinAggregateInputType = {
    id?: true
    nombreUsuario?: true
    rol?: true
    fechaInicio?: true
    ip?: true
  }

  export type EventoInicioSesionMaxAggregateInputType = {
    id?: true
    nombreUsuario?: true
    rol?: true
    fechaInicio?: true
    ip?: true
  }

  export type EventoInicioSesionCountAggregateInputType = {
    id?: true
    nombreUsuario?: true
    rol?: true
    fechaInicio?: true
    ip?: true
    _all?: true
  }

  export type EventoInicioSesionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eventoInicioSesion to aggregate.
     */
    where?: eventoInicioSesionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventoInicioSesions to fetch.
     */
    orderBy?: eventoInicioSesionOrderByWithRelationInput | eventoInicioSesionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eventoInicioSesionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventoInicioSesions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventoInicioSesions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned eventoInicioSesions
    **/
    _count?: true | EventoInicioSesionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventoInicioSesionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventoInicioSesionMaxAggregateInputType
  }

  export type GetEventoInicioSesionAggregateType<T extends EventoInicioSesionAggregateArgs> = {
        [P in keyof T & keyof AggregateEventoInicioSesion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventoInicioSesion[P]>
      : GetScalarType<T[P], AggregateEventoInicioSesion[P]>
  }




  export type eventoInicioSesionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventoInicioSesionWhereInput
    orderBy?: eventoInicioSesionOrderByWithAggregationInput | eventoInicioSesionOrderByWithAggregationInput[]
    by: EventoInicioSesionScalarFieldEnum[] | EventoInicioSesionScalarFieldEnum
    having?: eventoInicioSesionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventoInicioSesionCountAggregateInputType | true
    _min?: EventoInicioSesionMinAggregateInputType
    _max?: EventoInicioSesionMaxAggregateInputType
  }

  export type EventoInicioSesionGroupByOutputType = {
    id: string
    nombreUsuario: string
    rol: string
    fechaInicio: Date
    ip: string | null
    _count: EventoInicioSesionCountAggregateOutputType | null
    _min: EventoInicioSesionMinAggregateOutputType | null
    _max: EventoInicioSesionMaxAggregateOutputType | null
  }

  type GetEventoInicioSesionGroupByPayload<T extends eventoInicioSesionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventoInicioSesionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventoInicioSesionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventoInicioSesionGroupByOutputType[P]>
            : GetScalarType<T[P], EventoInicioSesionGroupByOutputType[P]>
        }
      >
    >


  export type eventoInicioSesionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombreUsuario?: boolean
    rol?: boolean
    fechaInicio?: boolean
    ip?: boolean
  }, ExtArgs["result"]["eventoInicioSesion"]>



  export type eventoInicioSesionSelectScalar = {
    id?: boolean
    nombreUsuario?: boolean
    rol?: boolean
    fechaInicio?: boolean
    ip?: boolean
  }

  export type eventoInicioSesionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombreUsuario" | "rol" | "fechaInicio" | "ip", ExtArgs["result"]["eventoInicioSesion"]>

  export type $eventoInicioSesionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "eventoInicioSesion"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombreUsuario: string
      rol: string
      fechaInicio: Date
      ip: string | null
    }, ExtArgs["result"]["eventoInicioSesion"]>
    composites: {}
  }

  type eventoInicioSesionGetPayload<S extends boolean | null | undefined | eventoInicioSesionDefaultArgs> = $Result.GetResult<Prisma.$eventoInicioSesionPayload, S>

  type eventoInicioSesionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<eventoInicioSesionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventoInicioSesionCountAggregateInputType | true
    }

  export interface eventoInicioSesionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['eventoInicioSesion'], meta: { name: 'eventoInicioSesion' } }
    /**
     * Find zero or one EventoInicioSesion that matches the filter.
     * @param {eventoInicioSesionFindUniqueArgs} args - Arguments to find a EventoInicioSesion
     * @example
     * // Get one EventoInicioSesion
     * const eventoInicioSesion = await prisma.eventoInicioSesion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends eventoInicioSesionFindUniqueArgs>(args: SelectSubset<T, eventoInicioSesionFindUniqueArgs<ExtArgs>>): Prisma__eventoInicioSesionClient<$Result.GetResult<Prisma.$eventoInicioSesionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventoInicioSesion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {eventoInicioSesionFindUniqueOrThrowArgs} args - Arguments to find a EventoInicioSesion
     * @example
     * // Get one EventoInicioSesion
     * const eventoInicioSesion = await prisma.eventoInicioSesion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends eventoInicioSesionFindUniqueOrThrowArgs>(args: SelectSubset<T, eventoInicioSesionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__eventoInicioSesionClient<$Result.GetResult<Prisma.$eventoInicioSesionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventoInicioSesion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoInicioSesionFindFirstArgs} args - Arguments to find a EventoInicioSesion
     * @example
     * // Get one EventoInicioSesion
     * const eventoInicioSesion = await prisma.eventoInicioSesion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends eventoInicioSesionFindFirstArgs>(args?: SelectSubset<T, eventoInicioSesionFindFirstArgs<ExtArgs>>): Prisma__eventoInicioSesionClient<$Result.GetResult<Prisma.$eventoInicioSesionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventoInicioSesion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoInicioSesionFindFirstOrThrowArgs} args - Arguments to find a EventoInicioSesion
     * @example
     * // Get one EventoInicioSesion
     * const eventoInicioSesion = await prisma.eventoInicioSesion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends eventoInicioSesionFindFirstOrThrowArgs>(args?: SelectSubset<T, eventoInicioSesionFindFirstOrThrowArgs<ExtArgs>>): Prisma__eventoInicioSesionClient<$Result.GetResult<Prisma.$eventoInicioSesionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventoInicioSesions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoInicioSesionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventoInicioSesions
     * const eventoInicioSesions = await prisma.eventoInicioSesion.findMany()
     * 
     * // Get first 10 EventoInicioSesions
     * const eventoInicioSesions = await prisma.eventoInicioSesion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventoInicioSesionWithIdOnly = await prisma.eventoInicioSesion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends eventoInicioSesionFindManyArgs>(args?: SelectSubset<T, eventoInicioSesionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventoInicioSesionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventoInicioSesion.
     * @param {eventoInicioSesionCreateArgs} args - Arguments to create a EventoInicioSesion.
     * @example
     * // Create one EventoInicioSesion
     * const EventoInicioSesion = await prisma.eventoInicioSesion.create({
     *   data: {
     *     // ... data to create a EventoInicioSesion
     *   }
     * })
     * 
     */
    create<T extends eventoInicioSesionCreateArgs>(args: SelectSubset<T, eventoInicioSesionCreateArgs<ExtArgs>>): Prisma__eventoInicioSesionClient<$Result.GetResult<Prisma.$eventoInicioSesionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventoInicioSesions.
     * @param {eventoInicioSesionCreateManyArgs} args - Arguments to create many EventoInicioSesions.
     * @example
     * // Create many EventoInicioSesions
     * const eventoInicioSesion = await prisma.eventoInicioSesion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends eventoInicioSesionCreateManyArgs>(args?: SelectSubset<T, eventoInicioSesionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EventoInicioSesion.
     * @param {eventoInicioSesionDeleteArgs} args - Arguments to delete one EventoInicioSesion.
     * @example
     * // Delete one EventoInicioSesion
     * const EventoInicioSesion = await prisma.eventoInicioSesion.delete({
     *   where: {
     *     // ... filter to delete one EventoInicioSesion
     *   }
     * })
     * 
     */
    delete<T extends eventoInicioSesionDeleteArgs>(args: SelectSubset<T, eventoInicioSesionDeleteArgs<ExtArgs>>): Prisma__eventoInicioSesionClient<$Result.GetResult<Prisma.$eventoInicioSesionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventoInicioSesion.
     * @param {eventoInicioSesionUpdateArgs} args - Arguments to update one EventoInicioSesion.
     * @example
     * // Update one EventoInicioSesion
     * const eventoInicioSesion = await prisma.eventoInicioSesion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends eventoInicioSesionUpdateArgs>(args: SelectSubset<T, eventoInicioSesionUpdateArgs<ExtArgs>>): Prisma__eventoInicioSesionClient<$Result.GetResult<Prisma.$eventoInicioSesionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventoInicioSesions.
     * @param {eventoInicioSesionDeleteManyArgs} args - Arguments to filter EventoInicioSesions to delete.
     * @example
     * // Delete a few EventoInicioSesions
     * const { count } = await prisma.eventoInicioSesion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends eventoInicioSesionDeleteManyArgs>(args?: SelectSubset<T, eventoInicioSesionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventoInicioSesions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoInicioSesionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventoInicioSesions
     * const eventoInicioSesion = await prisma.eventoInicioSesion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends eventoInicioSesionUpdateManyArgs>(args: SelectSubset<T, eventoInicioSesionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventoInicioSesion.
     * @param {eventoInicioSesionUpsertArgs} args - Arguments to update or create a EventoInicioSesion.
     * @example
     * // Update or create a EventoInicioSesion
     * const eventoInicioSesion = await prisma.eventoInicioSesion.upsert({
     *   create: {
     *     // ... data to create a EventoInicioSesion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventoInicioSesion we want to update
     *   }
     * })
     */
    upsert<T extends eventoInicioSesionUpsertArgs>(args: SelectSubset<T, eventoInicioSesionUpsertArgs<ExtArgs>>): Prisma__eventoInicioSesionClient<$Result.GetResult<Prisma.$eventoInicioSesionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventoInicioSesions that matches the filter.
     * @param {eventoInicioSesionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const eventoInicioSesion = await prisma.eventoInicioSesion.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: eventoInicioSesionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a EventoInicioSesion.
     * @param {eventoInicioSesionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const eventoInicioSesion = await prisma.eventoInicioSesion.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: eventoInicioSesionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of EventoInicioSesions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoInicioSesionCountArgs} args - Arguments to filter EventoInicioSesions to count.
     * @example
     * // Count the number of EventoInicioSesions
     * const count = await prisma.eventoInicioSesion.count({
     *   where: {
     *     // ... the filter for the EventoInicioSesions we want to count
     *   }
     * })
    **/
    count<T extends eventoInicioSesionCountArgs>(
      args?: Subset<T, eventoInicioSesionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventoInicioSesionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventoInicioSesion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoInicioSesionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventoInicioSesionAggregateArgs>(args: Subset<T, EventoInicioSesionAggregateArgs>): Prisma.PrismaPromise<GetEventoInicioSesionAggregateType<T>>

    /**
     * Group by EventoInicioSesion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoInicioSesionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends eventoInicioSesionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eventoInicioSesionGroupByArgs['orderBy'] }
        : { orderBy?: eventoInicioSesionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, eventoInicioSesionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventoInicioSesionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the eventoInicioSesion model
   */
  readonly fields: eventoInicioSesionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for eventoInicioSesion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eventoInicioSesionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the eventoInicioSesion model
   */
  interface eventoInicioSesionFieldRefs {
    readonly id: FieldRef<"eventoInicioSesion", 'String'>
    readonly nombreUsuario: FieldRef<"eventoInicioSesion", 'String'>
    readonly rol: FieldRef<"eventoInicioSesion", 'String'>
    readonly fechaInicio: FieldRef<"eventoInicioSesion", 'DateTime'>
    readonly ip: FieldRef<"eventoInicioSesion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * eventoInicioSesion findUnique
   */
  export type eventoInicioSesionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventoInicioSesion
     */
    select?: eventoInicioSesionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventoInicioSesion
     */
    omit?: eventoInicioSesionOmit<ExtArgs> | null
    /**
     * Filter, which eventoInicioSesion to fetch.
     */
    where: eventoInicioSesionWhereUniqueInput
  }

  /**
   * eventoInicioSesion findUniqueOrThrow
   */
  export type eventoInicioSesionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventoInicioSesion
     */
    select?: eventoInicioSesionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventoInicioSesion
     */
    omit?: eventoInicioSesionOmit<ExtArgs> | null
    /**
     * Filter, which eventoInicioSesion to fetch.
     */
    where: eventoInicioSesionWhereUniqueInput
  }

  /**
   * eventoInicioSesion findFirst
   */
  export type eventoInicioSesionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventoInicioSesion
     */
    select?: eventoInicioSesionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventoInicioSesion
     */
    omit?: eventoInicioSesionOmit<ExtArgs> | null
    /**
     * Filter, which eventoInicioSesion to fetch.
     */
    where?: eventoInicioSesionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventoInicioSesions to fetch.
     */
    orderBy?: eventoInicioSesionOrderByWithRelationInput | eventoInicioSesionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eventoInicioSesions.
     */
    cursor?: eventoInicioSesionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventoInicioSesions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventoInicioSesions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eventoInicioSesions.
     */
    distinct?: EventoInicioSesionScalarFieldEnum | EventoInicioSesionScalarFieldEnum[]
  }

  /**
   * eventoInicioSesion findFirstOrThrow
   */
  export type eventoInicioSesionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventoInicioSesion
     */
    select?: eventoInicioSesionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventoInicioSesion
     */
    omit?: eventoInicioSesionOmit<ExtArgs> | null
    /**
     * Filter, which eventoInicioSesion to fetch.
     */
    where?: eventoInicioSesionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventoInicioSesions to fetch.
     */
    orderBy?: eventoInicioSesionOrderByWithRelationInput | eventoInicioSesionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eventoInicioSesions.
     */
    cursor?: eventoInicioSesionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventoInicioSesions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventoInicioSesions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eventoInicioSesions.
     */
    distinct?: EventoInicioSesionScalarFieldEnum | EventoInicioSesionScalarFieldEnum[]
  }

  /**
   * eventoInicioSesion findMany
   */
  export type eventoInicioSesionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventoInicioSesion
     */
    select?: eventoInicioSesionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventoInicioSesion
     */
    omit?: eventoInicioSesionOmit<ExtArgs> | null
    /**
     * Filter, which eventoInicioSesions to fetch.
     */
    where?: eventoInicioSesionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventoInicioSesions to fetch.
     */
    orderBy?: eventoInicioSesionOrderByWithRelationInput | eventoInicioSesionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing eventoInicioSesions.
     */
    cursor?: eventoInicioSesionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventoInicioSesions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventoInicioSesions.
     */
    skip?: number
    distinct?: EventoInicioSesionScalarFieldEnum | EventoInicioSesionScalarFieldEnum[]
  }

  /**
   * eventoInicioSesion create
   */
  export type eventoInicioSesionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventoInicioSesion
     */
    select?: eventoInicioSesionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventoInicioSesion
     */
    omit?: eventoInicioSesionOmit<ExtArgs> | null
    /**
     * The data needed to create a eventoInicioSesion.
     */
    data: XOR<eventoInicioSesionCreateInput, eventoInicioSesionUncheckedCreateInput>
  }

  /**
   * eventoInicioSesion createMany
   */
  export type eventoInicioSesionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many eventoInicioSesions.
     */
    data: eventoInicioSesionCreateManyInput | eventoInicioSesionCreateManyInput[]
  }

  /**
   * eventoInicioSesion update
   */
  export type eventoInicioSesionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventoInicioSesion
     */
    select?: eventoInicioSesionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventoInicioSesion
     */
    omit?: eventoInicioSesionOmit<ExtArgs> | null
    /**
     * The data needed to update a eventoInicioSesion.
     */
    data: XOR<eventoInicioSesionUpdateInput, eventoInicioSesionUncheckedUpdateInput>
    /**
     * Choose, which eventoInicioSesion to update.
     */
    where: eventoInicioSesionWhereUniqueInput
  }

  /**
   * eventoInicioSesion updateMany
   */
  export type eventoInicioSesionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update eventoInicioSesions.
     */
    data: XOR<eventoInicioSesionUpdateManyMutationInput, eventoInicioSesionUncheckedUpdateManyInput>
    /**
     * Filter which eventoInicioSesions to update
     */
    where?: eventoInicioSesionWhereInput
    /**
     * Limit how many eventoInicioSesions to update.
     */
    limit?: number
  }

  /**
   * eventoInicioSesion upsert
   */
  export type eventoInicioSesionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventoInicioSesion
     */
    select?: eventoInicioSesionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventoInicioSesion
     */
    omit?: eventoInicioSesionOmit<ExtArgs> | null
    /**
     * The filter to search for the eventoInicioSesion to update in case it exists.
     */
    where: eventoInicioSesionWhereUniqueInput
    /**
     * In case the eventoInicioSesion found by the `where` argument doesn't exist, create a new eventoInicioSesion with this data.
     */
    create: XOR<eventoInicioSesionCreateInput, eventoInicioSesionUncheckedCreateInput>
    /**
     * In case the eventoInicioSesion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eventoInicioSesionUpdateInput, eventoInicioSesionUncheckedUpdateInput>
  }

  /**
   * eventoInicioSesion delete
   */
  export type eventoInicioSesionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventoInicioSesion
     */
    select?: eventoInicioSesionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventoInicioSesion
     */
    omit?: eventoInicioSesionOmit<ExtArgs> | null
    /**
     * Filter which eventoInicioSesion to delete.
     */
    where: eventoInicioSesionWhereUniqueInput
  }

  /**
   * eventoInicioSesion deleteMany
   */
  export type eventoInicioSesionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eventoInicioSesions to delete
     */
    where?: eventoInicioSesionWhereInput
    /**
     * Limit how many eventoInicioSesions to delete.
     */
    limit?: number
  }

  /**
   * eventoInicioSesion findRaw
   */
  export type eventoInicioSesionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * eventoInicioSesion aggregateRaw
   */
  export type eventoInicioSesionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * eventoInicioSesion without action
   */
  export type eventoInicioSesionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventoInicioSesion
     */
    select?: eventoInicioSesionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventoInicioSesion
     */
    omit?: eventoInicioSesionOmit<ExtArgs> | null
  }


  /**
   * Model infoOficios
   */

  export type AggregateInfoOficios = {
    _count: InfoOficiosCountAggregateOutputType | null
    _avg: InfoOficiosAvgAggregateOutputType | null
    _sum: InfoOficiosSumAggregateOutputType | null
    _min: InfoOficiosMinAggregateOutputType | null
    _max: InfoOficiosMaxAggregateOutputType | null
  }

  export type InfoOficiosAvgAggregateOutputType = {
    idOficio: number | null
    idGrupoTrabajo: number | null
    metroLineal: number | null
    metroCuadrado: number | null
    metroCubico: number | null
    peso: number | null
  }

  export type InfoOficiosSumAggregateOutputType = {
    idOficio: number | null
    idGrupoTrabajo: number | null
    metroLineal: number | null
    metroCuadrado: number | null
    metroCubico: number | null
    peso: number | null
  }

  export type InfoOficiosMinAggregateOutputType = {
    id: string | null
    idOficio: number | null
    idGrupoTrabajo: number | null
    ubicacion: string | null
    fecha: Date | null
    metroLineal: number | null
    metroCuadrado: number | null
    metroCubico: number | null
    peso: number | null
    usuarioModificacion: string | null
    fechaModificacion: Date | null
  }

  export type InfoOficiosMaxAggregateOutputType = {
    id: string | null
    idOficio: number | null
    idGrupoTrabajo: number | null
    ubicacion: string | null
    fecha: Date | null
    metroLineal: number | null
    metroCuadrado: number | null
    metroCubico: number | null
    peso: number | null
    usuarioModificacion: string | null
    fechaModificacion: Date | null
  }

  export type InfoOficiosCountAggregateOutputType = {
    id: number
    idOficio: number
    idGrupoTrabajo: number
    ubicacion: number
    fecha: number
    metroLineal: number
    metroCuadrado: number
    metroCubico: number
    peso: number
    usuarioModificacion: number
    fechaModificacion: number
    _all: number
  }


  export type InfoOficiosAvgAggregateInputType = {
    idOficio?: true
    idGrupoTrabajo?: true
    metroLineal?: true
    metroCuadrado?: true
    metroCubico?: true
    peso?: true
  }

  export type InfoOficiosSumAggregateInputType = {
    idOficio?: true
    idGrupoTrabajo?: true
    metroLineal?: true
    metroCuadrado?: true
    metroCubico?: true
    peso?: true
  }

  export type InfoOficiosMinAggregateInputType = {
    id?: true
    idOficio?: true
    idGrupoTrabajo?: true
    ubicacion?: true
    fecha?: true
    metroLineal?: true
    metroCuadrado?: true
    metroCubico?: true
    peso?: true
    usuarioModificacion?: true
    fechaModificacion?: true
  }

  export type InfoOficiosMaxAggregateInputType = {
    id?: true
    idOficio?: true
    idGrupoTrabajo?: true
    ubicacion?: true
    fecha?: true
    metroLineal?: true
    metroCuadrado?: true
    metroCubico?: true
    peso?: true
    usuarioModificacion?: true
    fechaModificacion?: true
  }

  export type InfoOficiosCountAggregateInputType = {
    id?: true
    idOficio?: true
    idGrupoTrabajo?: true
    ubicacion?: true
    fecha?: true
    metroLineal?: true
    metroCuadrado?: true
    metroCubico?: true
    peso?: true
    usuarioModificacion?: true
    fechaModificacion?: true
    _all?: true
  }

  export type InfoOficiosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which infoOficios to aggregate.
     */
    where?: infoOficiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of infoOficios to fetch.
     */
    orderBy?: infoOficiosOrderByWithRelationInput | infoOficiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: infoOficiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` infoOficios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` infoOficios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned infoOficios
    **/
    _count?: true | InfoOficiosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InfoOficiosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InfoOficiosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InfoOficiosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InfoOficiosMaxAggregateInputType
  }

  export type GetInfoOficiosAggregateType<T extends InfoOficiosAggregateArgs> = {
        [P in keyof T & keyof AggregateInfoOficios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInfoOficios[P]>
      : GetScalarType<T[P], AggregateInfoOficios[P]>
  }




  export type infoOficiosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: infoOficiosWhereInput
    orderBy?: infoOficiosOrderByWithAggregationInput | infoOficiosOrderByWithAggregationInput[]
    by: InfoOficiosScalarFieldEnum[] | InfoOficiosScalarFieldEnum
    having?: infoOficiosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InfoOficiosCountAggregateInputType | true
    _avg?: InfoOficiosAvgAggregateInputType
    _sum?: InfoOficiosSumAggregateInputType
    _min?: InfoOficiosMinAggregateInputType
    _max?: InfoOficiosMaxAggregateInputType
  }

  export type InfoOficiosGroupByOutputType = {
    id: string
    idOficio: number
    idGrupoTrabajo: number
    ubicacion: string
    fecha: Date
    metroLineal: number | null
    metroCuadrado: number | null
    metroCubico: number | null
    peso: number | null
    usuarioModificacion: string
    fechaModificacion: Date
    _count: InfoOficiosCountAggregateOutputType | null
    _avg: InfoOficiosAvgAggregateOutputType | null
    _sum: InfoOficiosSumAggregateOutputType | null
    _min: InfoOficiosMinAggregateOutputType | null
    _max: InfoOficiosMaxAggregateOutputType | null
  }

  type GetInfoOficiosGroupByPayload<T extends infoOficiosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InfoOficiosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InfoOficiosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InfoOficiosGroupByOutputType[P]>
            : GetScalarType<T[P], InfoOficiosGroupByOutputType[P]>
        }
      >
    >


  export type infoOficiosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idOficio?: boolean
    idGrupoTrabajo?: boolean
    ubicacion?: boolean
    fecha?: boolean
    metroLineal?: boolean
    metroCuadrado?: boolean
    metroCubico?: boolean
    peso?: boolean
    usuarioModificacion?: boolean
    fechaModificacion?: boolean
  }, ExtArgs["result"]["infoOficios"]>



  export type infoOficiosSelectScalar = {
    id?: boolean
    idOficio?: boolean
    idGrupoTrabajo?: boolean
    ubicacion?: boolean
    fecha?: boolean
    metroLineal?: boolean
    metroCuadrado?: boolean
    metroCubico?: boolean
    peso?: boolean
    usuarioModificacion?: boolean
    fechaModificacion?: boolean
  }

  export type infoOficiosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idOficio" | "idGrupoTrabajo" | "ubicacion" | "fecha" | "metroLineal" | "metroCuadrado" | "metroCubico" | "peso" | "usuarioModificacion" | "fechaModificacion", ExtArgs["result"]["infoOficios"]>

  export type $infoOficiosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "infoOficios"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      idOficio: number
      idGrupoTrabajo: number
      ubicacion: string
      fecha: Date
      metroLineal: number | null
      metroCuadrado: number | null
      metroCubico: number | null
      peso: number | null
      usuarioModificacion: string
      fechaModificacion: Date
    }, ExtArgs["result"]["infoOficios"]>
    composites: {}
  }

  type infoOficiosGetPayload<S extends boolean | null | undefined | infoOficiosDefaultArgs> = $Result.GetResult<Prisma.$infoOficiosPayload, S>

  type infoOficiosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<infoOficiosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InfoOficiosCountAggregateInputType | true
    }

  export interface infoOficiosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['infoOficios'], meta: { name: 'infoOficios' } }
    /**
     * Find zero or one InfoOficios that matches the filter.
     * @param {infoOficiosFindUniqueArgs} args - Arguments to find a InfoOficios
     * @example
     * // Get one InfoOficios
     * const infoOficios = await prisma.infoOficios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends infoOficiosFindUniqueArgs>(args: SelectSubset<T, infoOficiosFindUniqueArgs<ExtArgs>>): Prisma__infoOficiosClient<$Result.GetResult<Prisma.$infoOficiosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InfoOficios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {infoOficiosFindUniqueOrThrowArgs} args - Arguments to find a InfoOficios
     * @example
     * // Get one InfoOficios
     * const infoOficios = await prisma.infoOficios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends infoOficiosFindUniqueOrThrowArgs>(args: SelectSubset<T, infoOficiosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__infoOficiosClient<$Result.GetResult<Prisma.$infoOficiosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InfoOficios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {infoOficiosFindFirstArgs} args - Arguments to find a InfoOficios
     * @example
     * // Get one InfoOficios
     * const infoOficios = await prisma.infoOficios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends infoOficiosFindFirstArgs>(args?: SelectSubset<T, infoOficiosFindFirstArgs<ExtArgs>>): Prisma__infoOficiosClient<$Result.GetResult<Prisma.$infoOficiosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InfoOficios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {infoOficiosFindFirstOrThrowArgs} args - Arguments to find a InfoOficios
     * @example
     * // Get one InfoOficios
     * const infoOficios = await prisma.infoOficios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends infoOficiosFindFirstOrThrowArgs>(args?: SelectSubset<T, infoOficiosFindFirstOrThrowArgs<ExtArgs>>): Prisma__infoOficiosClient<$Result.GetResult<Prisma.$infoOficiosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InfoOficios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {infoOficiosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InfoOficios
     * const infoOficios = await prisma.infoOficios.findMany()
     * 
     * // Get first 10 InfoOficios
     * const infoOficios = await prisma.infoOficios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const infoOficiosWithIdOnly = await prisma.infoOficios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends infoOficiosFindManyArgs>(args?: SelectSubset<T, infoOficiosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$infoOficiosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InfoOficios.
     * @param {infoOficiosCreateArgs} args - Arguments to create a InfoOficios.
     * @example
     * // Create one InfoOficios
     * const InfoOficios = await prisma.infoOficios.create({
     *   data: {
     *     // ... data to create a InfoOficios
     *   }
     * })
     * 
     */
    create<T extends infoOficiosCreateArgs>(args: SelectSubset<T, infoOficiosCreateArgs<ExtArgs>>): Prisma__infoOficiosClient<$Result.GetResult<Prisma.$infoOficiosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InfoOficios.
     * @param {infoOficiosCreateManyArgs} args - Arguments to create many InfoOficios.
     * @example
     * // Create many InfoOficios
     * const infoOficios = await prisma.infoOficios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends infoOficiosCreateManyArgs>(args?: SelectSubset<T, infoOficiosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InfoOficios.
     * @param {infoOficiosDeleteArgs} args - Arguments to delete one InfoOficios.
     * @example
     * // Delete one InfoOficios
     * const InfoOficios = await prisma.infoOficios.delete({
     *   where: {
     *     // ... filter to delete one InfoOficios
     *   }
     * })
     * 
     */
    delete<T extends infoOficiosDeleteArgs>(args: SelectSubset<T, infoOficiosDeleteArgs<ExtArgs>>): Prisma__infoOficiosClient<$Result.GetResult<Prisma.$infoOficiosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InfoOficios.
     * @param {infoOficiosUpdateArgs} args - Arguments to update one InfoOficios.
     * @example
     * // Update one InfoOficios
     * const infoOficios = await prisma.infoOficios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends infoOficiosUpdateArgs>(args: SelectSubset<T, infoOficiosUpdateArgs<ExtArgs>>): Prisma__infoOficiosClient<$Result.GetResult<Prisma.$infoOficiosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InfoOficios.
     * @param {infoOficiosDeleteManyArgs} args - Arguments to filter InfoOficios to delete.
     * @example
     * // Delete a few InfoOficios
     * const { count } = await prisma.infoOficios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends infoOficiosDeleteManyArgs>(args?: SelectSubset<T, infoOficiosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InfoOficios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {infoOficiosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InfoOficios
     * const infoOficios = await prisma.infoOficios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends infoOficiosUpdateManyArgs>(args: SelectSubset<T, infoOficiosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InfoOficios.
     * @param {infoOficiosUpsertArgs} args - Arguments to update or create a InfoOficios.
     * @example
     * // Update or create a InfoOficios
     * const infoOficios = await prisma.infoOficios.upsert({
     *   create: {
     *     // ... data to create a InfoOficios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InfoOficios we want to update
     *   }
     * })
     */
    upsert<T extends infoOficiosUpsertArgs>(args: SelectSubset<T, infoOficiosUpsertArgs<ExtArgs>>): Prisma__infoOficiosClient<$Result.GetResult<Prisma.$infoOficiosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InfoOficios that matches the filter.
     * @param {infoOficiosFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const infoOficios = await prisma.infoOficios.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: infoOficiosFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a InfoOficios.
     * @param {infoOficiosAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const infoOficios = await prisma.infoOficios.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: infoOficiosAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of InfoOficios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {infoOficiosCountArgs} args - Arguments to filter InfoOficios to count.
     * @example
     * // Count the number of InfoOficios
     * const count = await prisma.infoOficios.count({
     *   where: {
     *     // ... the filter for the InfoOficios we want to count
     *   }
     * })
    **/
    count<T extends infoOficiosCountArgs>(
      args?: Subset<T, infoOficiosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InfoOficiosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InfoOficios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfoOficiosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InfoOficiosAggregateArgs>(args: Subset<T, InfoOficiosAggregateArgs>): Prisma.PrismaPromise<GetInfoOficiosAggregateType<T>>

    /**
     * Group by InfoOficios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {infoOficiosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends infoOficiosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: infoOficiosGroupByArgs['orderBy'] }
        : { orderBy?: infoOficiosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, infoOficiosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInfoOficiosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the infoOficios model
   */
  readonly fields: infoOficiosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for infoOficios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__infoOficiosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the infoOficios model
   */
  interface infoOficiosFieldRefs {
    readonly id: FieldRef<"infoOficios", 'String'>
    readonly idOficio: FieldRef<"infoOficios", 'Int'>
    readonly idGrupoTrabajo: FieldRef<"infoOficios", 'Int'>
    readonly ubicacion: FieldRef<"infoOficios", 'String'>
    readonly fecha: FieldRef<"infoOficios", 'DateTime'>
    readonly metroLineal: FieldRef<"infoOficios", 'Int'>
    readonly metroCuadrado: FieldRef<"infoOficios", 'Int'>
    readonly metroCubico: FieldRef<"infoOficios", 'Float'>
    readonly peso: FieldRef<"infoOficios", 'Float'>
    readonly usuarioModificacion: FieldRef<"infoOficios", 'String'>
    readonly fechaModificacion: FieldRef<"infoOficios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * infoOficios findUnique
   */
  export type infoOficiosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the infoOficios
     */
    select?: infoOficiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the infoOficios
     */
    omit?: infoOficiosOmit<ExtArgs> | null
    /**
     * Filter, which infoOficios to fetch.
     */
    where: infoOficiosWhereUniqueInput
  }

  /**
   * infoOficios findUniqueOrThrow
   */
  export type infoOficiosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the infoOficios
     */
    select?: infoOficiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the infoOficios
     */
    omit?: infoOficiosOmit<ExtArgs> | null
    /**
     * Filter, which infoOficios to fetch.
     */
    where: infoOficiosWhereUniqueInput
  }

  /**
   * infoOficios findFirst
   */
  export type infoOficiosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the infoOficios
     */
    select?: infoOficiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the infoOficios
     */
    omit?: infoOficiosOmit<ExtArgs> | null
    /**
     * Filter, which infoOficios to fetch.
     */
    where?: infoOficiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of infoOficios to fetch.
     */
    orderBy?: infoOficiosOrderByWithRelationInput | infoOficiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for infoOficios.
     */
    cursor?: infoOficiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` infoOficios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` infoOficios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of infoOficios.
     */
    distinct?: InfoOficiosScalarFieldEnum | InfoOficiosScalarFieldEnum[]
  }

  /**
   * infoOficios findFirstOrThrow
   */
  export type infoOficiosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the infoOficios
     */
    select?: infoOficiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the infoOficios
     */
    omit?: infoOficiosOmit<ExtArgs> | null
    /**
     * Filter, which infoOficios to fetch.
     */
    where?: infoOficiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of infoOficios to fetch.
     */
    orderBy?: infoOficiosOrderByWithRelationInput | infoOficiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for infoOficios.
     */
    cursor?: infoOficiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` infoOficios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` infoOficios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of infoOficios.
     */
    distinct?: InfoOficiosScalarFieldEnum | InfoOficiosScalarFieldEnum[]
  }

  /**
   * infoOficios findMany
   */
  export type infoOficiosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the infoOficios
     */
    select?: infoOficiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the infoOficios
     */
    omit?: infoOficiosOmit<ExtArgs> | null
    /**
     * Filter, which infoOficios to fetch.
     */
    where?: infoOficiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of infoOficios to fetch.
     */
    orderBy?: infoOficiosOrderByWithRelationInput | infoOficiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing infoOficios.
     */
    cursor?: infoOficiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` infoOficios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` infoOficios.
     */
    skip?: number
    distinct?: InfoOficiosScalarFieldEnum | InfoOficiosScalarFieldEnum[]
  }

  /**
   * infoOficios create
   */
  export type infoOficiosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the infoOficios
     */
    select?: infoOficiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the infoOficios
     */
    omit?: infoOficiosOmit<ExtArgs> | null
    /**
     * The data needed to create a infoOficios.
     */
    data: XOR<infoOficiosCreateInput, infoOficiosUncheckedCreateInput>
  }

  /**
   * infoOficios createMany
   */
  export type infoOficiosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many infoOficios.
     */
    data: infoOficiosCreateManyInput | infoOficiosCreateManyInput[]
  }

  /**
   * infoOficios update
   */
  export type infoOficiosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the infoOficios
     */
    select?: infoOficiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the infoOficios
     */
    omit?: infoOficiosOmit<ExtArgs> | null
    /**
     * The data needed to update a infoOficios.
     */
    data: XOR<infoOficiosUpdateInput, infoOficiosUncheckedUpdateInput>
    /**
     * Choose, which infoOficios to update.
     */
    where: infoOficiosWhereUniqueInput
  }

  /**
   * infoOficios updateMany
   */
  export type infoOficiosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update infoOficios.
     */
    data: XOR<infoOficiosUpdateManyMutationInput, infoOficiosUncheckedUpdateManyInput>
    /**
     * Filter which infoOficios to update
     */
    where?: infoOficiosWhereInput
    /**
     * Limit how many infoOficios to update.
     */
    limit?: number
  }

  /**
   * infoOficios upsert
   */
  export type infoOficiosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the infoOficios
     */
    select?: infoOficiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the infoOficios
     */
    omit?: infoOficiosOmit<ExtArgs> | null
    /**
     * The filter to search for the infoOficios to update in case it exists.
     */
    where: infoOficiosWhereUniqueInput
    /**
     * In case the infoOficios found by the `where` argument doesn't exist, create a new infoOficios with this data.
     */
    create: XOR<infoOficiosCreateInput, infoOficiosUncheckedCreateInput>
    /**
     * In case the infoOficios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<infoOficiosUpdateInput, infoOficiosUncheckedUpdateInput>
  }

  /**
   * infoOficios delete
   */
  export type infoOficiosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the infoOficios
     */
    select?: infoOficiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the infoOficios
     */
    omit?: infoOficiosOmit<ExtArgs> | null
    /**
     * Filter which infoOficios to delete.
     */
    where: infoOficiosWhereUniqueInput
  }

  /**
   * infoOficios deleteMany
   */
  export type infoOficiosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which infoOficios to delete
     */
    where?: infoOficiosWhereInput
    /**
     * Limit how many infoOficios to delete.
     */
    limit?: number
  }

  /**
   * infoOficios findRaw
   */
  export type infoOficiosFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * infoOficios aggregateRaw
   */
  export type infoOficiosAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * infoOficios without action
   */
  export type infoOficiosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the infoOficios
     */
    select?: infoOficiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the infoOficios
     */
    omit?: infoOficiosOmit<ExtArgs> | null
  }


  /**
   * Model logReportesGenerados
   */

  export type AggregateLogReportesGenerados = {
    _count: LogReportesGeneradosCountAggregateOutputType | null
    _min: LogReportesGeneradosMinAggregateOutputType | null
    _max: LogReportesGeneradosMaxAggregateOutputType | null
  }

  export type LogReportesGeneradosMinAggregateOutputType = {
    id: string | null
    tipoReporte: string | null
    fechaGeneracion: Date | null
    usuario: string | null
    exito: boolean | null
    mensaje: string | null
  }

  export type LogReportesGeneradosMaxAggregateOutputType = {
    id: string | null
    tipoReporte: string | null
    fechaGeneracion: Date | null
    usuario: string | null
    exito: boolean | null
    mensaje: string | null
  }

  export type LogReportesGeneradosCountAggregateOutputType = {
    id: number
    tipoReporte: number
    fechaGeneracion: number
    usuario: number
    parametros: number
    exito: number
    mensaje: number
    _all: number
  }


  export type LogReportesGeneradosMinAggregateInputType = {
    id?: true
    tipoReporte?: true
    fechaGeneracion?: true
    usuario?: true
    exito?: true
    mensaje?: true
  }

  export type LogReportesGeneradosMaxAggregateInputType = {
    id?: true
    tipoReporte?: true
    fechaGeneracion?: true
    usuario?: true
    exito?: true
    mensaje?: true
  }

  export type LogReportesGeneradosCountAggregateInputType = {
    id?: true
    tipoReporte?: true
    fechaGeneracion?: true
    usuario?: true
    parametros?: true
    exito?: true
    mensaje?: true
    _all?: true
  }

  export type LogReportesGeneradosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logReportesGenerados to aggregate.
     */
    where?: logReportesGeneradosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logReportesGenerados to fetch.
     */
    orderBy?: logReportesGeneradosOrderByWithRelationInput | logReportesGeneradosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: logReportesGeneradosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logReportesGenerados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logReportesGenerados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned logReportesGenerados
    **/
    _count?: true | LogReportesGeneradosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogReportesGeneradosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogReportesGeneradosMaxAggregateInputType
  }

  export type GetLogReportesGeneradosAggregateType<T extends LogReportesGeneradosAggregateArgs> = {
        [P in keyof T & keyof AggregateLogReportesGenerados]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogReportesGenerados[P]>
      : GetScalarType<T[P], AggregateLogReportesGenerados[P]>
  }




  export type logReportesGeneradosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: logReportesGeneradosWhereInput
    orderBy?: logReportesGeneradosOrderByWithAggregationInput | logReportesGeneradosOrderByWithAggregationInput[]
    by: LogReportesGeneradosScalarFieldEnum[] | LogReportesGeneradosScalarFieldEnum
    having?: logReportesGeneradosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogReportesGeneradosCountAggregateInputType | true
    _min?: LogReportesGeneradosMinAggregateInputType
    _max?: LogReportesGeneradosMaxAggregateInputType
  }

  export type LogReportesGeneradosGroupByOutputType = {
    id: string
    tipoReporte: string
    fechaGeneracion: Date
    usuario: string
    parametros: JsonValue | null
    exito: boolean
    mensaje: string | null
    _count: LogReportesGeneradosCountAggregateOutputType | null
    _min: LogReportesGeneradosMinAggregateOutputType | null
    _max: LogReportesGeneradosMaxAggregateOutputType | null
  }

  type GetLogReportesGeneradosGroupByPayload<T extends logReportesGeneradosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogReportesGeneradosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogReportesGeneradosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogReportesGeneradosGroupByOutputType[P]>
            : GetScalarType<T[P], LogReportesGeneradosGroupByOutputType[P]>
        }
      >
    >


  export type logReportesGeneradosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipoReporte?: boolean
    fechaGeneracion?: boolean
    usuario?: boolean
    parametros?: boolean
    exito?: boolean
    mensaje?: boolean
  }, ExtArgs["result"]["logReportesGenerados"]>



  export type logReportesGeneradosSelectScalar = {
    id?: boolean
    tipoReporte?: boolean
    fechaGeneracion?: boolean
    usuario?: boolean
    parametros?: boolean
    exito?: boolean
    mensaje?: boolean
  }

  export type logReportesGeneradosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipoReporte" | "fechaGeneracion" | "usuario" | "parametros" | "exito" | "mensaje", ExtArgs["result"]["logReportesGenerados"]>

  export type $logReportesGeneradosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "logReportesGenerados"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tipoReporte: string
      fechaGeneracion: Date
      usuario: string
      parametros: Prisma.JsonValue | null
      exito: boolean
      mensaje: string | null
    }, ExtArgs["result"]["logReportesGenerados"]>
    composites: {}
  }

  type logReportesGeneradosGetPayload<S extends boolean | null | undefined | logReportesGeneradosDefaultArgs> = $Result.GetResult<Prisma.$logReportesGeneradosPayload, S>

  type logReportesGeneradosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<logReportesGeneradosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogReportesGeneradosCountAggregateInputType | true
    }

  export interface logReportesGeneradosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['logReportesGenerados'], meta: { name: 'logReportesGenerados' } }
    /**
     * Find zero or one LogReportesGenerados that matches the filter.
     * @param {logReportesGeneradosFindUniqueArgs} args - Arguments to find a LogReportesGenerados
     * @example
     * // Get one LogReportesGenerados
     * const logReportesGenerados = await prisma.logReportesGenerados.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends logReportesGeneradosFindUniqueArgs>(args: SelectSubset<T, logReportesGeneradosFindUniqueArgs<ExtArgs>>): Prisma__logReportesGeneradosClient<$Result.GetResult<Prisma.$logReportesGeneradosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LogReportesGenerados that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {logReportesGeneradosFindUniqueOrThrowArgs} args - Arguments to find a LogReportesGenerados
     * @example
     * // Get one LogReportesGenerados
     * const logReportesGenerados = await prisma.logReportesGenerados.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends logReportesGeneradosFindUniqueOrThrowArgs>(args: SelectSubset<T, logReportesGeneradosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__logReportesGeneradosClient<$Result.GetResult<Prisma.$logReportesGeneradosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogReportesGenerados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logReportesGeneradosFindFirstArgs} args - Arguments to find a LogReportesGenerados
     * @example
     * // Get one LogReportesGenerados
     * const logReportesGenerados = await prisma.logReportesGenerados.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends logReportesGeneradosFindFirstArgs>(args?: SelectSubset<T, logReportesGeneradosFindFirstArgs<ExtArgs>>): Prisma__logReportesGeneradosClient<$Result.GetResult<Prisma.$logReportesGeneradosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogReportesGenerados that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logReportesGeneradosFindFirstOrThrowArgs} args - Arguments to find a LogReportesGenerados
     * @example
     * // Get one LogReportesGenerados
     * const logReportesGenerados = await prisma.logReportesGenerados.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends logReportesGeneradosFindFirstOrThrowArgs>(args?: SelectSubset<T, logReportesGeneradosFindFirstOrThrowArgs<ExtArgs>>): Prisma__logReportesGeneradosClient<$Result.GetResult<Prisma.$logReportesGeneradosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LogReportesGenerados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logReportesGeneradosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogReportesGenerados
     * const logReportesGenerados = await prisma.logReportesGenerados.findMany()
     * 
     * // Get first 10 LogReportesGenerados
     * const logReportesGenerados = await prisma.logReportesGenerados.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logReportesGeneradosWithIdOnly = await prisma.logReportesGenerados.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends logReportesGeneradosFindManyArgs>(args?: SelectSubset<T, logReportesGeneradosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logReportesGeneradosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LogReportesGenerados.
     * @param {logReportesGeneradosCreateArgs} args - Arguments to create a LogReportesGenerados.
     * @example
     * // Create one LogReportesGenerados
     * const LogReportesGenerados = await prisma.logReportesGenerados.create({
     *   data: {
     *     // ... data to create a LogReportesGenerados
     *   }
     * })
     * 
     */
    create<T extends logReportesGeneradosCreateArgs>(args: SelectSubset<T, logReportesGeneradosCreateArgs<ExtArgs>>): Prisma__logReportesGeneradosClient<$Result.GetResult<Prisma.$logReportesGeneradosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LogReportesGenerados.
     * @param {logReportesGeneradosCreateManyArgs} args - Arguments to create many LogReportesGenerados.
     * @example
     * // Create many LogReportesGenerados
     * const logReportesGenerados = await prisma.logReportesGenerados.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends logReportesGeneradosCreateManyArgs>(args?: SelectSubset<T, logReportesGeneradosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LogReportesGenerados.
     * @param {logReportesGeneradosDeleteArgs} args - Arguments to delete one LogReportesGenerados.
     * @example
     * // Delete one LogReportesGenerados
     * const LogReportesGenerados = await prisma.logReportesGenerados.delete({
     *   where: {
     *     // ... filter to delete one LogReportesGenerados
     *   }
     * })
     * 
     */
    delete<T extends logReportesGeneradosDeleteArgs>(args: SelectSubset<T, logReportesGeneradosDeleteArgs<ExtArgs>>): Prisma__logReportesGeneradosClient<$Result.GetResult<Prisma.$logReportesGeneradosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LogReportesGenerados.
     * @param {logReportesGeneradosUpdateArgs} args - Arguments to update one LogReportesGenerados.
     * @example
     * // Update one LogReportesGenerados
     * const logReportesGenerados = await prisma.logReportesGenerados.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends logReportesGeneradosUpdateArgs>(args: SelectSubset<T, logReportesGeneradosUpdateArgs<ExtArgs>>): Prisma__logReportesGeneradosClient<$Result.GetResult<Prisma.$logReportesGeneradosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LogReportesGenerados.
     * @param {logReportesGeneradosDeleteManyArgs} args - Arguments to filter LogReportesGenerados to delete.
     * @example
     * // Delete a few LogReportesGenerados
     * const { count } = await prisma.logReportesGenerados.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends logReportesGeneradosDeleteManyArgs>(args?: SelectSubset<T, logReportesGeneradosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogReportesGenerados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logReportesGeneradosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogReportesGenerados
     * const logReportesGenerados = await prisma.logReportesGenerados.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends logReportesGeneradosUpdateManyArgs>(args: SelectSubset<T, logReportesGeneradosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LogReportesGenerados.
     * @param {logReportesGeneradosUpsertArgs} args - Arguments to update or create a LogReportesGenerados.
     * @example
     * // Update or create a LogReportesGenerados
     * const logReportesGenerados = await prisma.logReportesGenerados.upsert({
     *   create: {
     *     // ... data to create a LogReportesGenerados
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogReportesGenerados we want to update
     *   }
     * })
     */
    upsert<T extends logReportesGeneradosUpsertArgs>(args: SelectSubset<T, logReportesGeneradosUpsertArgs<ExtArgs>>): Prisma__logReportesGeneradosClient<$Result.GetResult<Prisma.$logReportesGeneradosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LogReportesGenerados that matches the filter.
     * @param {logReportesGeneradosFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const logReportesGenerados = await prisma.logReportesGenerados.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: logReportesGeneradosFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a LogReportesGenerados.
     * @param {logReportesGeneradosAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const logReportesGenerados = await prisma.logReportesGenerados.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: logReportesGeneradosAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of LogReportesGenerados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logReportesGeneradosCountArgs} args - Arguments to filter LogReportesGenerados to count.
     * @example
     * // Count the number of LogReportesGenerados
     * const count = await prisma.logReportesGenerados.count({
     *   where: {
     *     // ... the filter for the LogReportesGenerados we want to count
     *   }
     * })
    **/
    count<T extends logReportesGeneradosCountArgs>(
      args?: Subset<T, logReportesGeneradosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogReportesGeneradosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LogReportesGenerados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogReportesGeneradosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogReportesGeneradosAggregateArgs>(args: Subset<T, LogReportesGeneradosAggregateArgs>): Prisma.PrismaPromise<GetLogReportesGeneradosAggregateType<T>>

    /**
     * Group by LogReportesGenerados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logReportesGeneradosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends logReportesGeneradosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: logReportesGeneradosGroupByArgs['orderBy'] }
        : { orderBy?: logReportesGeneradosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, logReportesGeneradosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogReportesGeneradosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the logReportesGenerados model
   */
  readonly fields: logReportesGeneradosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for logReportesGenerados.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__logReportesGeneradosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the logReportesGenerados model
   */
  interface logReportesGeneradosFieldRefs {
    readonly id: FieldRef<"logReportesGenerados", 'String'>
    readonly tipoReporte: FieldRef<"logReportesGenerados", 'String'>
    readonly fechaGeneracion: FieldRef<"logReportesGenerados", 'DateTime'>
    readonly usuario: FieldRef<"logReportesGenerados", 'String'>
    readonly parametros: FieldRef<"logReportesGenerados", 'Json'>
    readonly exito: FieldRef<"logReportesGenerados", 'Boolean'>
    readonly mensaje: FieldRef<"logReportesGenerados", 'String'>
  }
    

  // Custom InputTypes
  /**
   * logReportesGenerados findUnique
   */
  export type logReportesGeneradosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logReportesGenerados
     */
    select?: logReportesGeneradosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logReportesGenerados
     */
    omit?: logReportesGeneradosOmit<ExtArgs> | null
    /**
     * Filter, which logReportesGenerados to fetch.
     */
    where: logReportesGeneradosWhereUniqueInput
  }

  /**
   * logReportesGenerados findUniqueOrThrow
   */
  export type logReportesGeneradosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logReportesGenerados
     */
    select?: logReportesGeneradosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logReportesGenerados
     */
    omit?: logReportesGeneradosOmit<ExtArgs> | null
    /**
     * Filter, which logReportesGenerados to fetch.
     */
    where: logReportesGeneradosWhereUniqueInput
  }

  /**
   * logReportesGenerados findFirst
   */
  export type logReportesGeneradosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logReportesGenerados
     */
    select?: logReportesGeneradosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logReportesGenerados
     */
    omit?: logReportesGeneradosOmit<ExtArgs> | null
    /**
     * Filter, which logReportesGenerados to fetch.
     */
    where?: logReportesGeneradosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logReportesGenerados to fetch.
     */
    orderBy?: logReportesGeneradosOrderByWithRelationInput | logReportesGeneradosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logReportesGenerados.
     */
    cursor?: logReportesGeneradosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logReportesGenerados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logReportesGenerados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logReportesGenerados.
     */
    distinct?: LogReportesGeneradosScalarFieldEnum | LogReportesGeneradosScalarFieldEnum[]
  }

  /**
   * logReportesGenerados findFirstOrThrow
   */
  export type logReportesGeneradosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logReportesGenerados
     */
    select?: logReportesGeneradosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logReportesGenerados
     */
    omit?: logReportesGeneradosOmit<ExtArgs> | null
    /**
     * Filter, which logReportesGenerados to fetch.
     */
    where?: logReportesGeneradosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logReportesGenerados to fetch.
     */
    orderBy?: logReportesGeneradosOrderByWithRelationInput | logReportesGeneradosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logReportesGenerados.
     */
    cursor?: logReportesGeneradosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logReportesGenerados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logReportesGenerados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logReportesGenerados.
     */
    distinct?: LogReportesGeneradosScalarFieldEnum | LogReportesGeneradosScalarFieldEnum[]
  }

  /**
   * logReportesGenerados findMany
   */
  export type logReportesGeneradosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logReportesGenerados
     */
    select?: logReportesGeneradosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logReportesGenerados
     */
    omit?: logReportesGeneradosOmit<ExtArgs> | null
    /**
     * Filter, which logReportesGenerados to fetch.
     */
    where?: logReportesGeneradosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logReportesGenerados to fetch.
     */
    orderBy?: logReportesGeneradosOrderByWithRelationInput | logReportesGeneradosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing logReportesGenerados.
     */
    cursor?: logReportesGeneradosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logReportesGenerados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logReportesGenerados.
     */
    skip?: number
    distinct?: LogReportesGeneradosScalarFieldEnum | LogReportesGeneradosScalarFieldEnum[]
  }

  /**
   * logReportesGenerados create
   */
  export type logReportesGeneradosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logReportesGenerados
     */
    select?: logReportesGeneradosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logReportesGenerados
     */
    omit?: logReportesGeneradosOmit<ExtArgs> | null
    /**
     * The data needed to create a logReportesGenerados.
     */
    data: XOR<logReportesGeneradosCreateInput, logReportesGeneradosUncheckedCreateInput>
  }

  /**
   * logReportesGenerados createMany
   */
  export type logReportesGeneradosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many logReportesGenerados.
     */
    data: logReportesGeneradosCreateManyInput | logReportesGeneradosCreateManyInput[]
  }

  /**
   * logReportesGenerados update
   */
  export type logReportesGeneradosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logReportesGenerados
     */
    select?: logReportesGeneradosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logReportesGenerados
     */
    omit?: logReportesGeneradosOmit<ExtArgs> | null
    /**
     * The data needed to update a logReportesGenerados.
     */
    data: XOR<logReportesGeneradosUpdateInput, logReportesGeneradosUncheckedUpdateInput>
    /**
     * Choose, which logReportesGenerados to update.
     */
    where: logReportesGeneradosWhereUniqueInput
  }

  /**
   * logReportesGenerados updateMany
   */
  export type logReportesGeneradosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update logReportesGenerados.
     */
    data: XOR<logReportesGeneradosUpdateManyMutationInput, logReportesGeneradosUncheckedUpdateManyInput>
    /**
     * Filter which logReportesGenerados to update
     */
    where?: logReportesGeneradosWhereInput
    /**
     * Limit how many logReportesGenerados to update.
     */
    limit?: number
  }

  /**
   * logReportesGenerados upsert
   */
  export type logReportesGeneradosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logReportesGenerados
     */
    select?: logReportesGeneradosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logReportesGenerados
     */
    omit?: logReportesGeneradosOmit<ExtArgs> | null
    /**
     * The filter to search for the logReportesGenerados to update in case it exists.
     */
    where: logReportesGeneradosWhereUniqueInput
    /**
     * In case the logReportesGenerados found by the `where` argument doesn't exist, create a new logReportesGenerados with this data.
     */
    create: XOR<logReportesGeneradosCreateInput, logReportesGeneradosUncheckedCreateInput>
    /**
     * In case the logReportesGenerados was found with the provided `where` argument, update it with this data.
     */
    update: XOR<logReportesGeneradosUpdateInput, logReportesGeneradosUncheckedUpdateInput>
  }

  /**
   * logReportesGenerados delete
   */
  export type logReportesGeneradosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logReportesGenerados
     */
    select?: logReportesGeneradosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logReportesGenerados
     */
    omit?: logReportesGeneradosOmit<ExtArgs> | null
    /**
     * Filter which logReportesGenerados to delete.
     */
    where: logReportesGeneradosWhereUniqueInput
  }

  /**
   * logReportesGenerados deleteMany
   */
  export type logReportesGeneradosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logReportesGenerados to delete
     */
    where?: logReportesGeneradosWhereInput
    /**
     * Limit how many logReportesGenerados to delete.
     */
    limit?: number
  }

  /**
   * logReportesGenerados findRaw
   */
  export type logReportesGeneradosFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * logReportesGenerados aggregateRaw
   */
  export type logReportesGeneradosAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * logReportesGenerados without action
   */
  export type logReportesGeneradosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logReportesGenerados
     */
    select?: logReportesGeneradosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logReportesGenerados
     */
    omit?: logReportesGeneradosOmit<ExtArgs> | null
  }


  /**
   * Model eventoModificacion
   */

  export type AggregateEventoModificacion = {
    _count: EventoModificacionCountAggregateOutputType | null
    _min: EventoModificacionMinAggregateOutputType | null
    _max: EventoModificacionMaxAggregateOutputType | null
  }

  export type EventoModificacionMinAggregateOutputType = {
    id: string | null
    entidad: string | null
    registroId: string | null
    campo: string | null
    valorAnterior: string | null
    valorNuevo: string | null
    usuario: string | null
    fecha: Date | null
  }

  export type EventoModificacionMaxAggregateOutputType = {
    id: string | null
    entidad: string | null
    registroId: string | null
    campo: string | null
    valorAnterior: string | null
    valorNuevo: string | null
    usuario: string | null
    fecha: Date | null
  }

  export type EventoModificacionCountAggregateOutputType = {
    id: number
    entidad: number
    registroId: number
    campo: number
    valorAnterior: number
    valorNuevo: number
    usuario: number
    fecha: number
    _all: number
  }


  export type EventoModificacionMinAggregateInputType = {
    id?: true
    entidad?: true
    registroId?: true
    campo?: true
    valorAnterior?: true
    valorNuevo?: true
    usuario?: true
    fecha?: true
  }

  export type EventoModificacionMaxAggregateInputType = {
    id?: true
    entidad?: true
    registroId?: true
    campo?: true
    valorAnterior?: true
    valorNuevo?: true
    usuario?: true
    fecha?: true
  }

  export type EventoModificacionCountAggregateInputType = {
    id?: true
    entidad?: true
    registroId?: true
    campo?: true
    valorAnterior?: true
    valorNuevo?: true
    usuario?: true
    fecha?: true
    _all?: true
  }

  export type EventoModificacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eventoModificacion to aggregate.
     */
    where?: eventoModificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventoModificacions to fetch.
     */
    orderBy?: eventoModificacionOrderByWithRelationInput | eventoModificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eventoModificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventoModificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventoModificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned eventoModificacions
    **/
    _count?: true | EventoModificacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventoModificacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventoModificacionMaxAggregateInputType
  }

  export type GetEventoModificacionAggregateType<T extends EventoModificacionAggregateArgs> = {
        [P in keyof T & keyof AggregateEventoModificacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventoModificacion[P]>
      : GetScalarType<T[P], AggregateEventoModificacion[P]>
  }




  export type eventoModificacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventoModificacionWhereInput
    orderBy?: eventoModificacionOrderByWithAggregationInput | eventoModificacionOrderByWithAggregationInput[]
    by: EventoModificacionScalarFieldEnum[] | EventoModificacionScalarFieldEnum
    having?: eventoModificacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventoModificacionCountAggregateInputType | true
    _min?: EventoModificacionMinAggregateInputType
    _max?: EventoModificacionMaxAggregateInputType
  }

  export type EventoModificacionGroupByOutputType = {
    id: string
    entidad: string
    registroId: string
    campo: string
    valorAnterior: string | null
    valorNuevo: string | null
    usuario: string
    fecha: Date
    _count: EventoModificacionCountAggregateOutputType | null
    _min: EventoModificacionMinAggregateOutputType | null
    _max: EventoModificacionMaxAggregateOutputType | null
  }

  type GetEventoModificacionGroupByPayload<T extends eventoModificacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventoModificacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventoModificacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventoModificacionGroupByOutputType[P]>
            : GetScalarType<T[P], EventoModificacionGroupByOutputType[P]>
        }
      >
    >


  export type eventoModificacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entidad?: boolean
    registroId?: boolean
    campo?: boolean
    valorAnterior?: boolean
    valorNuevo?: boolean
    usuario?: boolean
    fecha?: boolean
  }, ExtArgs["result"]["eventoModificacion"]>



  export type eventoModificacionSelectScalar = {
    id?: boolean
    entidad?: boolean
    registroId?: boolean
    campo?: boolean
    valorAnterior?: boolean
    valorNuevo?: boolean
    usuario?: boolean
    fecha?: boolean
  }

  export type eventoModificacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "entidad" | "registroId" | "campo" | "valorAnterior" | "valorNuevo" | "usuario" | "fecha", ExtArgs["result"]["eventoModificacion"]>

  export type $eventoModificacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "eventoModificacion"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      entidad: string
      registroId: string
      campo: string
      valorAnterior: string | null
      valorNuevo: string | null
      usuario: string
      fecha: Date
    }, ExtArgs["result"]["eventoModificacion"]>
    composites: {}
  }

  type eventoModificacionGetPayload<S extends boolean | null | undefined | eventoModificacionDefaultArgs> = $Result.GetResult<Prisma.$eventoModificacionPayload, S>

  type eventoModificacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<eventoModificacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventoModificacionCountAggregateInputType | true
    }

  export interface eventoModificacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['eventoModificacion'], meta: { name: 'eventoModificacion' } }
    /**
     * Find zero or one EventoModificacion that matches the filter.
     * @param {eventoModificacionFindUniqueArgs} args - Arguments to find a EventoModificacion
     * @example
     * // Get one EventoModificacion
     * const eventoModificacion = await prisma.eventoModificacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends eventoModificacionFindUniqueArgs>(args: SelectSubset<T, eventoModificacionFindUniqueArgs<ExtArgs>>): Prisma__eventoModificacionClient<$Result.GetResult<Prisma.$eventoModificacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventoModificacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {eventoModificacionFindUniqueOrThrowArgs} args - Arguments to find a EventoModificacion
     * @example
     * // Get one EventoModificacion
     * const eventoModificacion = await prisma.eventoModificacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends eventoModificacionFindUniqueOrThrowArgs>(args: SelectSubset<T, eventoModificacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__eventoModificacionClient<$Result.GetResult<Prisma.$eventoModificacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventoModificacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoModificacionFindFirstArgs} args - Arguments to find a EventoModificacion
     * @example
     * // Get one EventoModificacion
     * const eventoModificacion = await prisma.eventoModificacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends eventoModificacionFindFirstArgs>(args?: SelectSubset<T, eventoModificacionFindFirstArgs<ExtArgs>>): Prisma__eventoModificacionClient<$Result.GetResult<Prisma.$eventoModificacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventoModificacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoModificacionFindFirstOrThrowArgs} args - Arguments to find a EventoModificacion
     * @example
     * // Get one EventoModificacion
     * const eventoModificacion = await prisma.eventoModificacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends eventoModificacionFindFirstOrThrowArgs>(args?: SelectSubset<T, eventoModificacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__eventoModificacionClient<$Result.GetResult<Prisma.$eventoModificacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventoModificacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoModificacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventoModificacions
     * const eventoModificacions = await prisma.eventoModificacion.findMany()
     * 
     * // Get first 10 EventoModificacions
     * const eventoModificacions = await prisma.eventoModificacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventoModificacionWithIdOnly = await prisma.eventoModificacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends eventoModificacionFindManyArgs>(args?: SelectSubset<T, eventoModificacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventoModificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventoModificacion.
     * @param {eventoModificacionCreateArgs} args - Arguments to create a EventoModificacion.
     * @example
     * // Create one EventoModificacion
     * const EventoModificacion = await prisma.eventoModificacion.create({
     *   data: {
     *     // ... data to create a EventoModificacion
     *   }
     * })
     * 
     */
    create<T extends eventoModificacionCreateArgs>(args: SelectSubset<T, eventoModificacionCreateArgs<ExtArgs>>): Prisma__eventoModificacionClient<$Result.GetResult<Prisma.$eventoModificacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventoModificacions.
     * @param {eventoModificacionCreateManyArgs} args - Arguments to create many EventoModificacions.
     * @example
     * // Create many EventoModificacions
     * const eventoModificacion = await prisma.eventoModificacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends eventoModificacionCreateManyArgs>(args?: SelectSubset<T, eventoModificacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EventoModificacion.
     * @param {eventoModificacionDeleteArgs} args - Arguments to delete one EventoModificacion.
     * @example
     * // Delete one EventoModificacion
     * const EventoModificacion = await prisma.eventoModificacion.delete({
     *   where: {
     *     // ... filter to delete one EventoModificacion
     *   }
     * })
     * 
     */
    delete<T extends eventoModificacionDeleteArgs>(args: SelectSubset<T, eventoModificacionDeleteArgs<ExtArgs>>): Prisma__eventoModificacionClient<$Result.GetResult<Prisma.$eventoModificacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventoModificacion.
     * @param {eventoModificacionUpdateArgs} args - Arguments to update one EventoModificacion.
     * @example
     * // Update one EventoModificacion
     * const eventoModificacion = await prisma.eventoModificacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends eventoModificacionUpdateArgs>(args: SelectSubset<T, eventoModificacionUpdateArgs<ExtArgs>>): Prisma__eventoModificacionClient<$Result.GetResult<Prisma.$eventoModificacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventoModificacions.
     * @param {eventoModificacionDeleteManyArgs} args - Arguments to filter EventoModificacions to delete.
     * @example
     * // Delete a few EventoModificacions
     * const { count } = await prisma.eventoModificacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends eventoModificacionDeleteManyArgs>(args?: SelectSubset<T, eventoModificacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventoModificacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoModificacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventoModificacions
     * const eventoModificacion = await prisma.eventoModificacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends eventoModificacionUpdateManyArgs>(args: SelectSubset<T, eventoModificacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventoModificacion.
     * @param {eventoModificacionUpsertArgs} args - Arguments to update or create a EventoModificacion.
     * @example
     * // Update or create a EventoModificacion
     * const eventoModificacion = await prisma.eventoModificacion.upsert({
     *   create: {
     *     // ... data to create a EventoModificacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventoModificacion we want to update
     *   }
     * })
     */
    upsert<T extends eventoModificacionUpsertArgs>(args: SelectSubset<T, eventoModificacionUpsertArgs<ExtArgs>>): Prisma__eventoModificacionClient<$Result.GetResult<Prisma.$eventoModificacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventoModificacions that matches the filter.
     * @param {eventoModificacionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const eventoModificacion = await prisma.eventoModificacion.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: eventoModificacionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a EventoModificacion.
     * @param {eventoModificacionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const eventoModificacion = await prisma.eventoModificacion.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: eventoModificacionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of EventoModificacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoModificacionCountArgs} args - Arguments to filter EventoModificacions to count.
     * @example
     * // Count the number of EventoModificacions
     * const count = await prisma.eventoModificacion.count({
     *   where: {
     *     // ... the filter for the EventoModificacions we want to count
     *   }
     * })
    **/
    count<T extends eventoModificacionCountArgs>(
      args?: Subset<T, eventoModificacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventoModificacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventoModificacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoModificacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventoModificacionAggregateArgs>(args: Subset<T, EventoModificacionAggregateArgs>): Prisma.PrismaPromise<GetEventoModificacionAggregateType<T>>

    /**
     * Group by EventoModificacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoModificacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends eventoModificacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eventoModificacionGroupByArgs['orderBy'] }
        : { orderBy?: eventoModificacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, eventoModificacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventoModificacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the eventoModificacion model
   */
  readonly fields: eventoModificacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for eventoModificacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eventoModificacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the eventoModificacion model
   */
  interface eventoModificacionFieldRefs {
    readonly id: FieldRef<"eventoModificacion", 'String'>
    readonly entidad: FieldRef<"eventoModificacion", 'String'>
    readonly registroId: FieldRef<"eventoModificacion", 'String'>
    readonly campo: FieldRef<"eventoModificacion", 'String'>
    readonly valorAnterior: FieldRef<"eventoModificacion", 'String'>
    readonly valorNuevo: FieldRef<"eventoModificacion", 'String'>
    readonly usuario: FieldRef<"eventoModificacion", 'String'>
    readonly fecha: FieldRef<"eventoModificacion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * eventoModificacion findUnique
   */
  export type eventoModificacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventoModificacion
     */
    select?: eventoModificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventoModificacion
     */
    omit?: eventoModificacionOmit<ExtArgs> | null
    /**
     * Filter, which eventoModificacion to fetch.
     */
    where: eventoModificacionWhereUniqueInput
  }

  /**
   * eventoModificacion findUniqueOrThrow
   */
  export type eventoModificacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventoModificacion
     */
    select?: eventoModificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventoModificacion
     */
    omit?: eventoModificacionOmit<ExtArgs> | null
    /**
     * Filter, which eventoModificacion to fetch.
     */
    where: eventoModificacionWhereUniqueInput
  }

  /**
   * eventoModificacion findFirst
   */
  export type eventoModificacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventoModificacion
     */
    select?: eventoModificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventoModificacion
     */
    omit?: eventoModificacionOmit<ExtArgs> | null
    /**
     * Filter, which eventoModificacion to fetch.
     */
    where?: eventoModificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventoModificacions to fetch.
     */
    orderBy?: eventoModificacionOrderByWithRelationInput | eventoModificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eventoModificacions.
     */
    cursor?: eventoModificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventoModificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventoModificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eventoModificacions.
     */
    distinct?: EventoModificacionScalarFieldEnum | EventoModificacionScalarFieldEnum[]
  }

  /**
   * eventoModificacion findFirstOrThrow
   */
  export type eventoModificacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventoModificacion
     */
    select?: eventoModificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventoModificacion
     */
    omit?: eventoModificacionOmit<ExtArgs> | null
    /**
     * Filter, which eventoModificacion to fetch.
     */
    where?: eventoModificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventoModificacions to fetch.
     */
    orderBy?: eventoModificacionOrderByWithRelationInput | eventoModificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eventoModificacions.
     */
    cursor?: eventoModificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventoModificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventoModificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eventoModificacions.
     */
    distinct?: EventoModificacionScalarFieldEnum | EventoModificacionScalarFieldEnum[]
  }

  /**
   * eventoModificacion findMany
   */
  export type eventoModificacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventoModificacion
     */
    select?: eventoModificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventoModificacion
     */
    omit?: eventoModificacionOmit<ExtArgs> | null
    /**
     * Filter, which eventoModificacions to fetch.
     */
    where?: eventoModificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventoModificacions to fetch.
     */
    orderBy?: eventoModificacionOrderByWithRelationInput | eventoModificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing eventoModificacions.
     */
    cursor?: eventoModificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventoModificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventoModificacions.
     */
    skip?: number
    distinct?: EventoModificacionScalarFieldEnum | EventoModificacionScalarFieldEnum[]
  }

  /**
   * eventoModificacion create
   */
  export type eventoModificacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventoModificacion
     */
    select?: eventoModificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventoModificacion
     */
    omit?: eventoModificacionOmit<ExtArgs> | null
    /**
     * The data needed to create a eventoModificacion.
     */
    data: XOR<eventoModificacionCreateInput, eventoModificacionUncheckedCreateInput>
  }

  /**
   * eventoModificacion createMany
   */
  export type eventoModificacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many eventoModificacions.
     */
    data: eventoModificacionCreateManyInput | eventoModificacionCreateManyInput[]
  }

  /**
   * eventoModificacion update
   */
  export type eventoModificacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventoModificacion
     */
    select?: eventoModificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventoModificacion
     */
    omit?: eventoModificacionOmit<ExtArgs> | null
    /**
     * The data needed to update a eventoModificacion.
     */
    data: XOR<eventoModificacionUpdateInput, eventoModificacionUncheckedUpdateInput>
    /**
     * Choose, which eventoModificacion to update.
     */
    where: eventoModificacionWhereUniqueInput
  }

  /**
   * eventoModificacion updateMany
   */
  export type eventoModificacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update eventoModificacions.
     */
    data: XOR<eventoModificacionUpdateManyMutationInput, eventoModificacionUncheckedUpdateManyInput>
    /**
     * Filter which eventoModificacions to update
     */
    where?: eventoModificacionWhereInput
    /**
     * Limit how many eventoModificacions to update.
     */
    limit?: number
  }

  /**
   * eventoModificacion upsert
   */
  export type eventoModificacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventoModificacion
     */
    select?: eventoModificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventoModificacion
     */
    omit?: eventoModificacionOmit<ExtArgs> | null
    /**
     * The filter to search for the eventoModificacion to update in case it exists.
     */
    where: eventoModificacionWhereUniqueInput
    /**
     * In case the eventoModificacion found by the `where` argument doesn't exist, create a new eventoModificacion with this data.
     */
    create: XOR<eventoModificacionCreateInput, eventoModificacionUncheckedCreateInput>
    /**
     * In case the eventoModificacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eventoModificacionUpdateInput, eventoModificacionUncheckedUpdateInput>
  }

  /**
   * eventoModificacion delete
   */
  export type eventoModificacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventoModificacion
     */
    select?: eventoModificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventoModificacion
     */
    omit?: eventoModificacionOmit<ExtArgs> | null
    /**
     * Filter which eventoModificacion to delete.
     */
    where: eventoModificacionWhereUniqueInput
  }

  /**
   * eventoModificacion deleteMany
   */
  export type eventoModificacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eventoModificacions to delete
     */
    where?: eventoModificacionWhereInput
    /**
     * Limit how many eventoModificacions to delete.
     */
    limit?: number
  }

  /**
   * eventoModificacion findRaw
   */
  export type eventoModificacionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * eventoModificacion aggregateRaw
   */
  export type eventoModificacionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * eventoModificacion without action
   */
  export type eventoModificacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventoModificacion
     */
    select?: eventoModificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventoModificacion
     */
    omit?: eventoModificacionOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const EventoActividadDatosScalarFieldEnum: {
    id: 'id'
  };

  export type EventoActividadDatosScalarFieldEnum = (typeof EventoActividadDatosScalarFieldEnum)[keyof typeof EventoActividadDatosScalarFieldEnum]


  export const EventoInicioSesionScalarFieldEnum: {
    id: 'id',
    nombreUsuario: 'nombreUsuario',
    rol: 'rol',
    fechaInicio: 'fechaInicio',
    ip: 'ip'
  };

  export type EventoInicioSesionScalarFieldEnum = (typeof EventoInicioSesionScalarFieldEnum)[keyof typeof EventoInicioSesionScalarFieldEnum]


  export const InfoOficiosScalarFieldEnum: {
    id: 'id',
    idOficio: 'idOficio',
    idGrupoTrabajo: 'idGrupoTrabajo',
    ubicacion: 'ubicacion',
    fecha: 'fecha',
    metroLineal: 'metroLineal',
    metroCuadrado: 'metroCuadrado',
    metroCubico: 'metroCubico',
    peso: 'peso',
    usuarioModificacion: 'usuarioModificacion',
    fechaModificacion: 'fechaModificacion'
  };

  export type InfoOficiosScalarFieldEnum = (typeof InfoOficiosScalarFieldEnum)[keyof typeof InfoOficiosScalarFieldEnum]


  export const LogReportesGeneradosScalarFieldEnum: {
    id: 'id',
    tipoReporte: 'tipoReporte',
    fechaGeneracion: 'fechaGeneracion',
    usuario: 'usuario',
    parametros: 'parametros',
    exito: 'exito',
    mensaje: 'mensaje'
  };

  export type LogReportesGeneradosScalarFieldEnum = (typeof LogReportesGeneradosScalarFieldEnum)[keyof typeof LogReportesGeneradosScalarFieldEnum]


  export const EventoModificacionScalarFieldEnum: {
    id: 'id',
    entidad: 'entidad',
    registroId: 'registroId',
    campo: 'campo',
    valorAnterior: 'valorAnterior',
    valorNuevo: 'valorNuevo',
    usuario: 'usuario',
    fecha: 'fecha'
  };

  export type EventoModificacionScalarFieldEnum = (typeof EventoModificacionScalarFieldEnum)[keyof typeof EventoModificacionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type eventoActividadDatosWhereInput = {
    AND?: eventoActividadDatosWhereInput | eventoActividadDatosWhereInput[]
    OR?: eventoActividadDatosWhereInput[]
    NOT?: eventoActividadDatosWhereInput | eventoActividadDatosWhereInput[]
    id?: StringFilter<"eventoActividadDatos"> | string
  }

  export type eventoActividadDatosOrderByWithRelationInput = {
    id?: SortOrder
  }

  export type eventoActividadDatosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: eventoActividadDatosWhereInput | eventoActividadDatosWhereInput[]
    OR?: eventoActividadDatosWhereInput[]
    NOT?: eventoActividadDatosWhereInput | eventoActividadDatosWhereInput[]
  }, "id">

  export type eventoActividadDatosOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: eventoActividadDatosCountOrderByAggregateInput
    _max?: eventoActividadDatosMaxOrderByAggregateInput
    _min?: eventoActividadDatosMinOrderByAggregateInput
  }

  export type eventoActividadDatosScalarWhereWithAggregatesInput = {
    AND?: eventoActividadDatosScalarWhereWithAggregatesInput | eventoActividadDatosScalarWhereWithAggregatesInput[]
    OR?: eventoActividadDatosScalarWhereWithAggregatesInput[]
    NOT?: eventoActividadDatosScalarWhereWithAggregatesInput | eventoActividadDatosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"eventoActividadDatos"> | string
  }

  export type eventoInicioSesionWhereInput = {
    AND?: eventoInicioSesionWhereInput | eventoInicioSesionWhereInput[]
    OR?: eventoInicioSesionWhereInput[]
    NOT?: eventoInicioSesionWhereInput | eventoInicioSesionWhereInput[]
    id?: StringFilter<"eventoInicioSesion"> | string
    nombreUsuario?: StringFilter<"eventoInicioSesion"> | string
    rol?: StringFilter<"eventoInicioSesion"> | string
    fechaInicio?: DateTimeFilter<"eventoInicioSesion"> | Date | string
    ip?: StringNullableFilter<"eventoInicioSesion"> | string | null
  }

  export type eventoInicioSesionOrderByWithRelationInput = {
    id?: SortOrder
    nombreUsuario?: SortOrder
    rol?: SortOrder
    fechaInicio?: SortOrder
    ip?: SortOrder
  }

  export type eventoInicioSesionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: eventoInicioSesionWhereInput | eventoInicioSesionWhereInput[]
    OR?: eventoInicioSesionWhereInput[]
    NOT?: eventoInicioSesionWhereInput | eventoInicioSesionWhereInput[]
    nombreUsuario?: StringFilter<"eventoInicioSesion"> | string
    rol?: StringFilter<"eventoInicioSesion"> | string
    fechaInicio?: DateTimeFilter<"eventoInicioSesion"> | Date | string
    ip?: StringNullableFilter<"eventoInicioSesion"> | string | null
  }, "id">

  export type eventoInicioSesionOrderByWithAggregationInput = {
    id?: SortOrder
    nombreUsuario?: SortOrder
    rol?: SortOrder
    fechaInicio?: SortOrder
    ip?: SortOrder
    _count?: eventoInicioSesionCountOrderByAggregateInput
    _max?: eventoInicioSesionMaxOrderByAggregateInput
    _min?: eventoInicioSesionMinOrderByAggregateInput
  }

  export type eventoInicioSesionScalarWhereWithAggregatesInput = {
    AND?: eventoInicioSesionScalarWhereWithAggregatesInput | eventoInicioSesionScalarWhereWithAggregatesInput[]
    OR?: eventoInicioSesionScalarWhereWithAggregatesInput[]
    NOT?: eventoInicioSesionScalarWhereWithAggregatesInput | eventoInicioSesionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"eventoInicioSesion"> | string
    nombreUsuario?: StringWithAggregatesFilter<"eventoInicioSesion"> | string
    rol?: StringWithAggregatesFilter<"eventoInicioSesion"> | string
    fechaInicio?: DateTimeWithAggregatesFilter<"eventoInicioSesion"> | Date | string
    ip?: StringNullableWithAggregatesFilter<"eventoInicioSesion"> | string | null
  }

  export type infoOficiosWhereInput = {
    AND?: infoOficiosWhereInput | infoOficiosWhereInput[]
    OR?: infoOficiosWhereInput[]
    NOT?: infoOficiosWhereInput | infoOficiosWhereInput[]
    id?: StringFilter<"infoOficios"> | string
    idOficio?: IntFilter<"infoOficios"> | number
    idGrupoTrabajo?: IntFilter<"infoOficios"> | number
    ubicacion?: StringFilter<"infoOficios"> | string
    fecha?: DateTimeFilter<"infoOficios"> | Date | string
    metroLineal?: IntNullableFilter<"infoOficios"> | number | null
    metroCuadrado?: IntNullableFilter<"infoOficios"> | number | null
    metroCubico?: FloatNullableFilter<"infoOficios"> | number | null
    peso?: FloatNullableFilter<"infoOficios"> | number | null
    usuarioModificacion?: StringFilter<"infoOficios"> | string
    fechaModificacion?: DateTimeFilter<"infoOficios"> | Date | string
  }

  export type infoOficiosOrderByWithRelationInput = {
    id?: SortOrder
    idOficio?: SortOrder
    idGrupoTrabajo?: SortOrder
    ubicacion?: SortOrder
    fecha?: SortOrder
    metroLineal?: SortOrder
    metroCuadrado?: SortOrder
    metroCubico?: SortOrder
    peso?: SortOrder
    usuarioModificacion?: SortOrder
    fechaModificacion?: SortOrder
  }

  export type infoOficiosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: infoOficiosWhereInput | infoOficiosWhereInput[]
    OR?: infoOficiosWhereInput[]
    NOT?: infoOficiosWhereInput | infoOficiosWhereInput[]
    idOficio?: IntFilter<"infoOficios"> | number
    idGrupoTrabajo?: IntFilter<"infoOficios"> | number
    ubicacion?: StringFilter<"infoOficios"> | string
    fecha?: DateTimeFilter<"infoOficios"> | Date | string
    metroLineal?: IntNullableFilter<"infoOficios"> | number | null
    metroCuadrado?: IntNullableFilter<"infoOficios"> | number | null
    metroCubico?: FloatNullableFilter<"infoOficios"> | number | null
    peso?: FloatNullableFilter<"infoOficios"> | number | null
    usuarioModificacion?: StringFilter<"infoOficios"> | string
    fechaModificacion?: DateTimeFilter<"infoOficios"> | Date | string
  }, "id">

  export type infoOficiosOrderByWithAggregationInput = {
    id?: SortOrder
    idOficio?: SortOrder
    idGrupoTrabajo?: SortOrder
    ubicacion?: SortOrder
    fecha?: SortOrder
    metroLineal?: SortOrder
    metroCuadrado?: SortOrder
    metroCubico?: SortOrder
    peso?: SortOrder
    usuarioModificacion?: SortOrder
    fechaModificacion?: SortOrder
    _count?: infoOficiosCountOrderByAggregateInput
    _avg?: infoOficiosAvgOrderByAggregateInput
    _max?: infoOficiosMaxOrderByAggregateInput
    _min?: infoOficiosMinOrderByAggregateInput
    _sum?: infoOficiosSumOrderByAggregateInput
  }

  export type infoOficiosScalarWhereWithAggregatesInput = {
    AND?: infoOficiosScalarWhereWithAggregatesInput | infoOficiosScalarWhereWithAggregatesInput[]
    OR?: infoOficiosScalarWhereWithAggregatesInput[]
    NOT?: infoOficiosScalarWhereWithAggregatesInput | infoOficiosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"infoOficios"> | string
    idOficio?: IntWithAggregatesFilter<"infoOficios"> | number
    idGrupoTrabajo?: IntWithAggregatesFilter<"infoOficios"> | number
    ubicacion?: StringWithAggregatesFilter<"infoOficios"> | string
    fecha?: DateTimeWithAggregatesFilter<"infoOficios"> | Date | string
    metroLineal?: IntNullableWithAggregatesFilter<"infoOficios"> | number | null
    metroCuadrado?: IntNullableWithAggregatesFilter<"infoOficios"> | number | null
    metroCubico?: FloatNullableWithAggregatesFilter<"infoOficios"> | number | null
    peso?: FloatNullableWithAggregatesFilter<"infoOficios"> | number | null
    usuarioModificacion?: StringWithAggregatesFilter<"infoOficios"> | string
    fechaModificacion?: DateTimeWithAggregatesFilter<"infoOficios"> | Date | string
  }

  export type logReportesGeneradosWhereInput = {
    AND?: logReportesGeneradosWhereInput | logReportesGeneradosWhereInput[]
    OR?: logReportesGeneradosWhereInput[]
    NOT?: logReportesGeneradosWhereInput | logReportesGeneradosWhereInput[]
    id?: StringFilter<"logReportesGenerados"> | string
    tipoReporte?: StringFilter<"logReportesGenerados"> | string
    fechaGeneracion?: DateTimeFilter<"logReportesGenerados"> | Date | string
    usuario?: StringFilter<"logReportesGenerados"> | string
    parametros?: JsonNullableFilter<"logReportesGenerados">
    exito?: BoolFilter<"logReportesGenerados"> | boolean
    mensaje?: StringNullableFilter<"logReportesGenerados"> | string | null
  }

  export type logReportesGeneradosOrderByWithRelationInput = {
    id?: SortOrder
    tipoReporte?: SortOrder
    fechaGeneracion?: SortOrder
    usuario?: SortOrder
    parametros?: SortOrder
    exito?: SortOrder
    mensaje?: SortOrder
  }

  export type logReportesGeneradosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: logReportesGeneradosWhereInput | logReportesGeneradosWhereInput[]
    OR?: logReportesGeneradosWhereInput[]
    NOT?: logReportesGeneradosWhereInput | logReportesGeneradosWhereInput[]
    tipoReporte?: StringFilter<"logReportesGenerados"> | string
    fechaGeneracion?: DateTimeFilter<"logReportesGenerados"> | Date | string
    usuario?: StringFilter<"logReportesGenerados"> | string
    parametros?: JsonNullableFilter<"logReportesGenerados">
    exito?: BoolFilter<"logReportesGenerados"> | boolean
    mensaje?: StringNullableFilter<"logReportesGenerados"> | string | null
  }, "id">

  export type logReportesGeneradosOrderByWithAggregationInput = {
    id?: SortOrder
    tipoReporte?: SortOrder
    fechaGeneracion?: SortOrder
    usuario?: SortOrder
    parametros?: SortOrder
    exito?: SortOrder
    mensaje?: SortOrder
    _count?: logReportesGeneradosCountOrderByAggregateInput
    _max?: logReportesGeneradosMaxOrderByAggregateInput
    _min?: logReportesGeneradosMinOrderByAggregateInput
  }

  export type logReportesGeneradosScalarWhereWithAggregatesInput = {
    AND?: logReportesGeneradosScalarWhereWithAggregatesInput | logReportesGeneradosScalarWhereWithAggregatesInput[]
    OR?: logReportesGeneradosScalarWhereWithAggregatesInput[]
    NOT?: logReportesGeneradosScalarWhereWithAggregatesInput | logReportesGeneradosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"logReportesGenerados"> | string
    tipoReporte?: StringWithAggregatesFilter<"logReportesGenerados"> | string
    fechaGeneracion?: DateTimeWithAggregatesFilter<"logReportesGenerados"> | Date | string
    usuario?: StringWithAggregatesFilter<"logReportesGenerados"> | string
    parametros?: JsonNullableWithAggregatesFilter<"logReportesGenerados">
    exito?: BoolWithAggregatesFilter<"logReportesGenerados"> | boolean
    mensaje?: StringNullableWithAggregatesFilter<"logReportesGenerados"> | string | null
  }

  export type eventoModificacionWhereInput = {
    AND?: eventoModificacionWhereInput | eventoModificacionWhereInput[]
    OR?: eventoModificacionWhereInput[]
    NOT?: eventoModificacionWhereInput | eventoModificacionWhereInput[]
    id?: StringFilter<"eventoModificacion"> | string
    entidad?: StringFilter<"eventoModificacion"> | string
    registroId?: StringFilter<"eventoModificacion"> | string
    campo?: StringFilter<"eventoModificacion"> | string
    valorAnterior?: StringNullableFilter<"eventoModificacion"> | string | null
    valorNuevo?: StringNullableFilter<"eventoModificacion"> | string | null
    usuario?: StringFilter<"eventoModificacion"> | string
    fecha?: DateTimeFilter<"eventoModificacion"> | Date | string
  }

  export type eventoModificacionOrderByWithRelationInput = {
    id?: SortOrder
    entidad?: SortOrder
    registroId?: SortOrder
    campo?: SortOrder
    valorAnterior?: SortOrder
    valorNuevo?: SortOrder
    usuario?: SortOrder
    fecha?: SortOrder
  }

  export type eventoModificacionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: eventoModificacionWhereInput | eventoModificacionWhereInput[]
    OR?: eventoModificacionWhereInput[]
    NOT?: eventoModificacionWhereInput | eventoModificacionWhereInput[]
    entidad?: StringFilter<"eventoModificacion"> | string
    registroId?: StringFilter<"eventoModificacion"> | string
    campo?: StringFilter<"eventoModificacion"> | string
    valorAnterior?: StringNullableFilter<"eventoModificacion"> | string | null
    valorNuevo?: StringNullableFilter<"eventoModificacion"> | string | null
    usuario?: StringFilter<"eventoModificacion"> | string
    fecha?: DateTimeFilter<"eventoModificacion"> | Date | string
  }, "id">

  export type eventoModificacionOrderByWithAggregationInput = {
    id?: SortOrder
    entidad?: SortOrder
    registroId?: SortOrder
    campo?: SortOrder
    valorAnterior?: SortOrder
    valorNuevo?: SortOrder
    usuario?: SortOrder
    fecha?: SortOrder
    _count?: eventoModificacionCountOrderByAggregateInput
    _max?: eventoModificacionMaxOrderByAggregateInput
    _min?: eventoModificacionMinOrderByAggregateInput
  }

  export type eventoModificacionScalarWhereWithAggregatesInput = {
    AND?: eventoModificacionScalarWhereWithAggregatesInput | eventoModificacionScalarWhereWithAggregatesInput[]
    OR?: eventoModificacionScalarWhereWithAggregatesInput[]
    NOT?: eventoModificacionScalarWhereWithAggregatesInput | eventoModificacionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"eventoModificacion"> | string
    entidad?: StringWithAggregatesFilter<"eventoModificacion"> | string
    registroId?: StringWithAggregatesFilter<"eventoModificacion"> | string
    campo?: StringWithAggregatesFilter<"eventoModificacion"> | string
    valorAnterior?: StringNullableWithAggregatesFilter<"eventoModificacion"> | string | null
    valorNuevo?: StringNullableWithAggregatesFilter<"eventoModificacion"> | string | null
    usuario?: StringWithAggregatesFilter<"eventoModificacion"> | string
    fecha?: DateTimeWithAggregatesFilter<"eventoModificacion"> | Date | string
  }

  export type eventoActividadDatosCreateInput = {
    id?: string
  }

  export type eventoActividadDatosUncheckedCreateInput = {
    id?: string
  }

  export type eventoActividadDatosUpdateInput = {

  }

  export type eventoActividadDatosUncheckedUpdateInput = {

  }

  export type eventoActividadDatosCreateManyInput = {
    id?: string
  }

  export type eventoActividadDatosUpdateManyMutationInput = {

  }

  export type eventoActividadDatosUncheckedUpdateManyInput = {

  }

  export type eventoInicioSesionCreateInput = {
    id?: string
    nombreUsuario: string
    rol: string
    fechaInicio?: Date | string
    ip?: string | null
  }

  export type eventoInicioSesionUncheckedCreateInput = {
    id?: string
    nombreUsuario: string
    rol: string
    fechaInicio?: Date | string
    ip?: string | null
  }

  export type eventoInicioSesionUpdateInput = {
    nombreUsuario?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type eventoInicioSesionUncheckedUpdateInput = {
    nombreUsuario?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type eventoInicioSesionCreateManyInput = {
    id?: string
    nombreUsuario: string
    rol: string
    fechaInicio?: Date | string
    ip?: string | null
  }

  export type eventoInicioSesionUpdateManyMutationInput = {
    nombreUsuario?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type eventoInicioSesionUncheckedUpdateManyInput = {
    nombreUsuario?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type infoOficiosCreateInput = {
    id?: string
    idOficio: number
    idGrupoTrabajo: number
    ubicacion: string
    fecha?: Date | string
    metroLineal?: number | null
    metroCuadrado?: number | null
    metroCubico?: number | null
    peso?: number | null
    usuarioModificacion: string
    fechaModificacion?: Date | string
  }

  export type infoOficiosUncheckedCreateInput = {
    id?: string
    idOficio: number
    idGrupoTrabajo: number
    ubicacion: string
    fecha?: Date | string
    metroLineal?: number | null
    metroCuadrado?: number | null
    metroCubico?: number | null
    peso?: number | null
    usuarioModificacion: string
    fechaModificacion?: Date | string
  }

  export type infoOficiosUpdateInput = {
    idOficio?: IntFieldUpdateOperationsInput | number
    idGrupoTrabajo?: IntFieldUpdateOperationsInput | number
    ubicacion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    metroLineal?: NullableIntFieldUpdateOperationsInput | number | null
    metroCuadrado?: NullableIntFieldUpdateOperationsInput | number | null
    metroCubico?: NullableFloatFieldUpdateOperationsInput | number | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    usuarioModificacion?: StringFieldUpdateOperationsInput | string
    fechaModificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type infoOficiosUncheckedUpdateInput = {
    idOficio?: IntFieldUpdateOperationsInput | number
    idGrupoTrabajo?: IntFieldUpdateOperationsInput | number
    ubicacion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    metroLineal?: NullableIntFieldUpdateOperationsInput | number | null
    metroCuadrado?: NullableIntFieldUpdateOperationsInput | number | null
    metroCubico?: NullableFloatFieldUpdateOperationsInput | number | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    usuarioModificacion?: StringFieldUpdateOperationsInput | string
    fechaModificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type infoOficiosCreateManyInput = {
    id?: string
    idOficio: number
    idGrupoTrabajo: number
    ubicacion: string
    fecha?: Date | string
    metroLineal?: number | null
    metroCuadrado?: number | null
    metroCubico?: number | null
    peso?: number | null
    usuarioModificacion: string
    fechaModificacion?: Date | string
  }

  export type infoOficiosUpdateManyMutationInput = {
    idOficio?: IntFieldUpdateOperationsInput | number
    idGrupoTrabajo?: IntFieldUpdateOperationsInput | number
    ubicacion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    metroLineal?: NullableIntFieldUpdateOperationsInput | number | null
    metroCuadrado?: NullableIntFieldUpdateOperationsInput | number | null
    metroCubico?: NullableFloatFieldUpdateOperationsInput | number | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    usuarioModificacion?: StringFieldUpdateOperationsInput | string
    fechaModificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type infoOficiosUncheckedUpdateManyInput = {
    idOficio?: IntFieldUpdateOperationsInput | number
    idGrupoTrabajo?: IntFieldUpdateOperationsInput | number
    ubicacion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    metroLineal?: NullableIntFieldUpdateOperationsInput | number | null
    metroCuadrado?: NullableIntFieldUpdateOperationsInput | number | null
    metroCubico?: NullableFloatFieldUpdateOperationsInput | number | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    usuarioModificacion?: StringFieldUpdateOperationsInput | string
    fechaModificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type logReportesGeneradosCreateInput = {
    id?: string
    tipoReporte: string
    fechaGeneracion?: Date | string
    usuario: string
    parametros?: InputJsonValue | null
    exito?: boolean
    mensaje?: string | null
  }

  export type logReportesGeneradosUncheckedCreateInput = {
    id?: string
    tipoReporte: string
    fechaGeneracion?: Date | string
    usuario: string
    parametros?: InputJsonValue | null
    exito?: boolean
    mensaje?: string | null
  }

  export type logReportesGeneradosUpdateInput = {
    tipoReporte?: StringFieldUpdateOperationsInput | string
    fechaGeneracion?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: StringFieldUpdateOperationsInput | string
    parametros?: InputJsonValue | InputJsonValue | null
    exito?: BoolFieldUpdateOperationsInput | boolean
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type logReportesGeneradosUncheckedUpdateInput = {
    tipoReporte?: StringFieldUpdateOperationsInput | string
    fechaGeneracion?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: StringFieldUpdateOperationsInput | string
    parametros?: InputJsonValue | InputJsonValue | null
    exito?: BoolFieldUpdateOperationsInput | boolean
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type logReportesGeneradosCreateManyInput = {
    id?: string
    tipoReporte: string
    fechaGeneracion?: Date | string
    usuario: string
    parametros?: InputJsonValue | null
    exito?: boolean
    mensaje?: string | null
  }

  export type logReportesGeneradosUpdateManyMutationInput = {
    tipoReporte?: StringFieldUpdateOperationsInput | string
    fechaGeneracion?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: StringFieldUpdateOperationsInput | string
    parametros?: InputJsonValue | InputJsonValue | null
    exito?: BoolFieldUpdateOperationsInput | boolean
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type logReportesGeneradosUncheckedUpdateManyInput = {
    tipoReporte?: StringFieldUpdateOperationsInput | string
    fechaGeneracion?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: StringFieldUpdateOperationsInput | string
    parametros?: InputJsonValue | InputJsonValue | null
    exito?: BoolFieldUpdateOperationsInput | boolean
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type eventoModificacionCreateInput = {
    id?: string
    entidad: string
    registroId: string
    campo: string
    valorAnterior?: string | null
    valorNuevo?: string | null
    usuario: string
    fecha?: Date | string
  }

  export type eventoModificacionUncheckedCreateInput = {
    id?: string
    entidad: string
    registroId: string
    campo: string
    valorAnterior?: string | null
    valorNuevo?: string | null
    usuario: string
    fecha?: Date | string
  }

  export type eventoModificacionUpdateInput = {
    entidad?: StringFieldUpdateOperationsInput | string
    registroId?: StringFieldUpdateOperationsInput | string
    campo?: StringFieldUpdateOperationsInput | string
    valorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    valorNuevo?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventoModificacionUncheckedUpdateInput = {
    entidad?: StringFieldUpdateOperationsInput | string
    registroId?: StringFieldUpdateOperationsInput | string
    campo?: StringFieldUpdateOperationsInput | string
    valorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    valorNuevo?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventoModificacionCreateManyInput = {
    id?: string
    entidad: string
    registroId: string
    campo: string
    valorAnterior?: string | null
    valorNuevo?: string | null
    usuario: string
    fecha?: Date | string
  }

  export type eventoModificacionUpdateManyMutationInput = {
    entidad?: StringFieldUpdateOperationsInput | string
    registroId?: StringFieldUpdateOperationsInput | string
    campo?: StringFieldUpdateOperationsInput | string
    valorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    valorNuevo?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventoModificacionUncheckedUpdateManyInput = {
    entidad?: StringFieldUpdateOperationsInput | string
    registroId?: StringFieldUpdateOperationsInput | string
    campo?: StringFieldUpdateOperationsInput | string
    valorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    valorNuevo?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type eventoActividadDatosCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type eventoActividadDatosMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type eventoActividadDatosMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type eventoInicioSesionCountOrderByAggregateInput = {
    id?: SortOrder
    nombreUsuario?: SortOrder
    rol?: SortOrder
    fechaInicio?: SortOrder
    ip?: SortOrder
  }

  export type eventoInicioSesionMaxOrderByAggregateInput = {
    id?: SortOrder
    nombreUsuario?: SortOrder
    rol?: SortOrder
    fechaInicio?: SortOrder
    ip?: SortOrder
  }

  export type eventoInicioSesionMinOrderByAggregateInput = {
    id?: SortOrder
    nombreUsuario?: SortOrder
    rol?: SortOrder
    fechaInicio?: SortOrder
    ip?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type infoOficiosCountOrderByAggregateInput = {
    id?: SortOrder
    idOficio?: SortOrder
    idGrupoTrabajo?: SortOrder
    ubicacion?: SortOrder
    fecha?: SortOrder
    metroLineal?: SortOrder
    metroCuadrado?: SortOrder
    metroCubico?: SortOrder
    peso?: SortOrder
    usuarioModificacion?: SortOrder
    fechaModificacion?: SortOrder
  }

  export type infoOficiosAvgOrderByAggregateInput = {
    idOficio?: SortOrder
    idGrupoTrabajo?: SortOrder
    metroLineal?: SortOrder
    metroCuadrado?: SortOrder
    metroCubico?: SortOrder
    peso?: SortOrder
  }

  export type infoOficiosMaxOrderByAggregateInput = {
    id?: SortOrder
    idOficio?: SortOrder
    idGrupoTrabajo?: SortOrder
    ubicacion?: SortOrder
    fecha?: SortOrder
    metroLineal?: SortOrder
    metroCuadrado?: SortOrder
    metroCubico?: SortOrder
    peso?: SortOrder
    usuarioModificacion?: SortOrder
    fechaModificacion?: SortOrder
  }

  export type infoOficiosMinOrderByAggregateInput = {
    id?: SortOrder
    idOficio?: SortOrder
    idGrupoTrabajo?: SortOrder
    ubicacion?: SortOrder
    fecha?: SortOrder
    metroLineal?: SortOrder
    metroCuadrado?: SortOrder
    metroCubico?: SortOrder
    peso?: SortOrder
    usuarioModificacion?: SortOrder
    fechaModificacion?: SortOrder
  }

  export type infoOficiosSumOrderByAggregateInput = {
    idOficio?: SortOrder
    idGrupoTrabajo?: SortOrder
    metroLineal?: SortOrder
    metroCuadrado?: SortOrder
    metroCubico?: SortOrder
    peso?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type logReportesGeneradosCountOrderByAggregateInput = {
    id?: SortOrder
    tipoReporte?: SortOrder
    fechaGeneracion?: SortOrder
    usuario?: SortOrder
    parametros?: SortOrder
    exito?: SortOrder
    mensaje?: SortOrder
  }

  export type logReportesGeneradosMaxOrderByAggregateInput = {
    id?: SortOrder
    tipoReporte?: SortOrder
    fechaGeneracion?: SortOrder
    usuario?: SortOrder
    exito?: SortOrder
    mensaje?: SortOrder
  }

  export type logReportesGeneradosMinOrderByAggregateInput = {
    id?: SortOrder
    tipoReporte?: SortOrder
    fechaGeneracion?: SortOrder
    usuario?: SortOrder
    exito?: SortOrder
    mensaje?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type eventoModificacionCountOrderByAggregateInput = {
    id?: SortOrder
    entidad?: SortOrder
    registroId?: SortOrder
    campo?: SortOrder
    valorAnterior?: SortOrder
    valorNuevo?: SortOrder
    usuario?: SortOrder
    fecha?: SortOrder
  }

  export type eventoModificacionMaxOrderByAggregateInput = {
    id?: SortOrder
    entidad?: SortOrder
    registroId?: SortOrder
    campo?: SortOrder
    valorAnterior?: SortOrder
    valorNuevo?: SortOrder
    usuario?: SortOrder
    fecha?: SortOrder
  }

  export type eventoModificacionMinOrderByAggregateInput = {
    id?: SortOrder
    entidad?: SortOrder
    registroId?: SortOrder
    campo?: SortOrder
    valorAnterior?: SortOrder
    valorNuevo?: SortOrder
    usuario?: SortOrder
    fecha?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}