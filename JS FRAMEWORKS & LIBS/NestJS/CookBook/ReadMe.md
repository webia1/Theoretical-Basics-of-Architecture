# NestJS Cookbook

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [NestJS Cookbook](#nestjs-cookbook)
  - [Getting Started](#getting-started)
    - [`nest/cli`](#nestcli)
    - [`nest generate`](#nest-generate)
  - [Excerpts from File-Structure](#excerpts-from-file-structure)
    - [`app-module.ts`](#app-modulets)
    - [A Custom Decorator](#a-custom-decorator)
    - [A Custom Filter](#a-custom-filter)
    - [A Custom Gateway](#a-custom-gateway)
    - [A Custom Guard](#a-custom-guard)
    - [A Custom Interceptor](#a-custom-interceptor)
    - [A Middleware](#a-middleware)
    - [A Module](#a-module)
    - [A Pipe](#a-pipe)
    - [Provider](#provider)
    - [A Resolver (GraphQL)](#a-resolver-graphql)
    - [A Service](#a-service)
  - [Full Resource Example](#full-resource-example)
  - [Error Handling](#error-handling)
    - [Exception Filters](#exception-filters)
      - [Default Exception Response](#default-exception-response)
      - [Throwing Standard Exceptions](#throwing-standard-exceptions)
      - [Custom Exceptions](#custom-exceptions)
      - [Built-In Exceptions](#built-in-exceptions)
      - [Exception Filters](#exception-filters-1)
      - [Binding Filters](#binding-filters)
      - [Catch Everything](#catch-everything)
  - [Pipes](#pipes)
    - [Built-in pipes](#built-in-pipes)
    - [Binding Pipes](#binding-pipes)
      - [Validation](#validation)
  - [Guards](#guards)
  - [Interceptors](#interceptors)
  - [Trouble Shooting](#trouble-shooting)
    - [Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser](#parsing-error-parseroptionsproject-has-been-set-for-typescript-eslintparser)
      - [`Problem` &rarr; Following errors](#problem-rarr-following-errors)
      - [`Solution`](#solution)

<!-- /code_chunk_output -->

## Getting Started

```bash
npm i -g @nestjs/cli

nest new [project-name]

```

### `nest/cli`

```bash
Command     Alias     Description
new         n         New Project
generate    g         Generates and/or modifies (see next chapter).
build                 Compiles an application
start                 Compiles and runs an application
add                   Imports a library
update      u         Update @nestjs dependencies
info        i         Displays information
```

### `nest generate`

```bash
nest generate service [service-name] # oder
nest g s [service-name]
```

```bash
    Version 7.4.1 - Available schematics:
      ┌───────────────┬─────────────┐
      │ name          │ alias       │
      │ application   │ application │
      │ class         │ cl          │
      │ configuration │ config      │
      │ controller    │ co          │
      │ decorator     │ d           │
      │ filter        │ f           │
      │ gateway       │ ga          │
      │ guard         │ gu          │
      │ interceptor   │ in          │
      │ interface     │ interface   │
      │ middleware    │ mi          │
      │ module        │ mo          │
      │ pipe          │ pi          │
      │ provider      │ pr          │
      │ resolver      │ r           │
      │ service       │ s           │
      │ library       │ lib         │
      │ sub-app       │ app         │
      └───────────────┴─────────────┘
```

## Excerpts from File-Structure

### `app-module.ts`

```typescript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyController } from './ebia/controller/my/my.controller';

@Module({
  imports: [],
  controllers: [AppController, MyController],
  providers: [AppService],
})
export class AppModule {}
```

### A Custom Decorator

```typescript
import { CustomDecorator, SetMetadata } from '@nestjs/common';
export const My = (...args: string[]): CustomDecorator =>
  SetMetadata('my', args);
```

or

```typescript
import { CustomDecorator, SetMetadata } from '@nestjs/common';

export const My = (...args: string[]): CustomDecorator =>
  SetMetadata('my', args);
```

### A Custom Filter

```typescript
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
} from '@nestjs/common';

@Catch()
export class MyFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
```

### A Custom Gateway

```bash
npm i @nestjs/websockets
nest g ga ebia/gateway/my
```

```typescript
import {
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

type MyAny = Record<string, unknown> | unknown;

@WebSocketGateway()
export class MyGateway {
  @SubscribeMessage('message')
  handleMessage(client: MyAny, payload: MyAny): string {
    console.log('Client: ', client);
    console.log('Payload: ', payload);
    return 'Hello world!';
  }
}
```

```typescript
// app.module.ts
@Module({
  // ...
  providers: [AppService, MyGateway],
})
export class AppModule {}
```

### A Custom Guard

```typescript
import {
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class MyGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('ExecutionContext: ', context);
    return true;
  }
}
```

### A Custom Interceptor

```typescript
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> {
    return next.handle();
  }
}
```

### A Middleware

```typescript
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class MyMiddleware implements NestMiddleware {
  use(req, res, next: () => void) {
    next();
  }
}
```

### A Module

```typescript
import { Module } from '@nestjs/common';

@Module({})
export class MyModule {}
```

```typescript
// app.module.ts
import { MyModule } from './ebia/module/my/my.module';

@Module({
  imports: [MyModule], // <-- Module Import
  controllers: [AppController, MyController],
  providers: [AppService, MyGateway],
})
export class AppModule {}
```

### A Pipe

```typescript
import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class MyPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return value;
  }
}
```

### Provider

A Provider is a global available Service:

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class My {}
```

```typescript
@Module({
  imports: [MyModule],
  controllers: [AppController, MyController],
  providers: [/* .. */ My /* .. */],
})
export class AppModule {}
```

### A Resolver (GraphQL)

```typescript
import { Resolver } from '@nestjs/graphql';

@Resolver('My')
export class MyResolver {}
```

### A Service

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class MyService {}
```

## Full Resource Example

An Excerpt from [NestJS-Documentation](https://docs.nestjs.com/controllers)

```typescript
import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCatDto: UpdateCatDto,
  ) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
```

## Error Handling

### Exception Filters

[See Details here](https://docs.nestjs.com/exception-filters)

#### Default Exception Response

```typescript
{
  "statusCode": 500,
  "message": "Internal server error"
}
```

#### Throwing Standard Exceptions

```typescript

// Simple

@Get()
async findAll() {
  throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
}

// Better

@Get()
async findAll() {
  throw new HttpException({
    status: HttpStatus.FORBIDDEN,
    error: 'This is a custom message',
  }, HttpStatus.FORBIDDEN);
}

// When the client calls this endpoint, the response looks like this:

{
  "statusCode": 403,
  "message": "Forbidden"
}

```

#### Custom Exceptions

```typescript
// Class

export class ForbiddenException extends HttpException {
  constructor() {
    super('Forbidden', HttpStatus.FORBIDDEN);
  }
}

// Controller

@Get()
async findAll() {
  throw new ForbiddenException();
}
```

#### Built-In Exceptions

[See Details here](https://docs.nestjs.com/exception-filters#built-in-http-exceptions)

```txt
BadRequestException
UnauthorizedException
NotFoundException
ForbiddenException
NotAcceptableException
RequestTimeoutException
ConflictException
GoneException
HttpVersionNotSupportedException
PayloadTooLargeException
UnsupportedMediaTypeException
UnprocessableEntityException
InternalServerErrorException
NotImplementedException
ImATeapotException
MethodNotAllowedException
BadGatewayException
ServiceUnavailableException
GatewayTimeoutException

```

#### Exception Filters

[See details here](https://docs.nestjs.com/exception-filters#exception-filters-1)

While the base (built-in) exception filter can automatically handle many cases
for you, you may want full control over the exceptions layer. For example, you
may want to add logging or use a different JSON schema based on some dynamic
factors. Exception filters are designed for exactly this purpose. They let you
control the exact flow of control and the content of the response sent back to
the client.

```typescript
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
```

#### Binding Filters

```typescript
@Post()
@UseFilters(new HttpExceptionFilter())
async create(@Body() createCatDto: CreateCatDto) {
  throw new ForbiddenException();
}

// Alternatively, you may pass the class (instead of an instance),
// leaving responsibility for instantiation to the framework,
// and enabling dependency injection.

// Prefer applying filters by using classes instead of
// instances when possible. It reduces memory usage since
// Nest can easily reuse instances of the same class
// across your entire module.

@Post()
@UseFilters(HttpExceptionFilter)
async create(@Body() createCatDto: CreateCatDto) {
  throw new ForbiddenException();
}

// Exception filters can be scoped at different levels:
// method-scoped, controller-scoped, or global-scoped.
// For example, to set up a filter as controller-scoped,
// you would do the following:

@UseFilters(new HttpExceptionFilter())
export class CatsController {}

// To create a global-scoped filter,
// you would do the following:
// WARNING: The useGlobalFilters() method does not
// set up filters for gateways or hybrid applications.


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();


// global filters registered from outside of any module
// (with useGlobalFilters() as in the example above)
// cannot inject dependencies since this is done
// outside the context of any module. In order to solve
// this issue, you can register a global-scoped filter
// directly from any module using the following construction:

import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}

// When using this approach to perform dependency
// injection for the filter, note that regardless
// of the module where this construction is employed,
// the filter is, in fact, global. Where should this
// be done? Choose the module where the filter
// (HttpExceptionFilter in the example above) is defined.
// Also, useClass is not the only way of dealing with
// custom provider registration. Learn more here:
// https://docs.nestjs.com/fundamentals/custom-providers
```

#### Catch Everything

In order to catch every unhandled exception (regardless of the exception type),
leave the `@Catch()` decorator's parameter list empty, e.g., `@Catch()`.

```typescript
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}

// In order to delegate exception processing
// to the base filter, you need to extend BaseExceptionFilter
// and call the inherited catch() method.
// WARNING: Method-scoped and Controller-scoped filters
// that extend the BaseExceptionFilter should not be instantiated
// with new. Instead, let the framework instantiate them automatically.

import { Catch, ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    super.catch(exception, host);
  }
}

// Global filters can extend the base filter.
// This can be done in either of two ways.
// The first method is to inject the
// HttpServer reference when instantiating
// the custom global filter:

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  await app.listen(3000);
}
bootstrap();

// The second method is to use the APP_FILTER
// See examples above
```

## Pipes

[See details here](https://docs.nestjs.com/pipes)

A pipe is a class annotated with the `@Injectable()` decorator. Pipes should
implement the `PipeTransform` interface. Pipes have two typical use cases:

- **transformation**: transform input data to the desired form (e.g., from
  string to integer)
- **validation**: evaluate input data and if valid, simply pass it through
  unchanged; otherwise, throw an exception when the data is incorrect

**HINT**: Pipes run inside the exceptions zone. This means that when a Pipe
throws an exception it is handled by the exceptions layer (global exceptions
filter and any exceptions filters that are applied to the current context).
Given the above, it should be clear that when an exception is thrown in a Pipe,
no controller method is subsequently executed. This gives you a best-practice
technique for validating data coming into the application from external sources
at the system boundary.

### Built-in pipes

Pipes available out-of-the-box are:

- ValidationPipe
- ParseIntPipe
- ParseBoolPipe
- ParseArrayPipe
- ParseUUIDPipe
- DefaultValuePipe

They're exported from the @nestjs/common package.

### Binding Pipes

```typescript
@Get(':id')
async findOne(@Param('id', ParseIntPipe) id: number) {
  return this.catsService.findOne(id);
}

// GET localhost:3000/abc
// will throw an exception like:

{
  "statusCode": 400,
  "message": "Validation failed (numeric string is expected)",
  "error": "Bad Request"
}

// Here's an example of using the ParseUUIDPipe
// to parse a string parameter and validate if is a UUID.

@Get(':uuid')
async findOne(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
  return this.catsService.findOne(uuid);
}

// HINT: When using ParseUUIDPipe() you are parsing UUID
// in version 3, 4 or 5, if you only require a specific
// version of UUID you can pass a version in the pipe options.
```

#### Validation

[See Details here](https://docs.nestjs.com/techniques/validation)

## Guards

[See Details here](https://docs.nestjs.com/guards)

A guard is a class annotated with the @Injectable() decorator. Guards should
implement the CanActivate interface.

Guards have a single responsibility. They determine whether a given request will
be handled by the route handler or not, depending on certain conditions (like
permissions, roles, ACLs, etc.) present at run-time.

**HINT**: Guards are executed after each middleware, but before any interceptor
or pipe.

```typescript
import {
  Injectable,
  CanActivate,
  ExecutionContext,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return matchRoles(roles, user.roles);
  }
}

// In the node.js world, it's common practice to attach
// the authorized user to the request object. Thus, in our
// sample code above, we are assuming that request.user contains
// the user instance and allowed roles. In your app, you will
// probably make that association in your custom
// authentication guard (or middleware).
```

## Interceptors

[See details here](https://docs.nestjs.com/interceptors)

## Trouble Shooting

### Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser

#### `Problem` &rarr; Following errors

- Parsing error: "parserOptions.project" has been set for
  @typescript-eslint/parser.
- The file does not match your project config: .eslintrc.js.
- The file must be included in at least one of the projects provided.

#### `Solution`

Create a `tsconfig.eslint.json` file i your project root with the following
content and restart VSCode:

```json
{
  "compilerOptions": { "strict": true },
  "include": [
    "**/src/**/*.ts",
    "**/test/**/*.ts"
    // etc
  ]
}
```
