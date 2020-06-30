# NestJS Cookbook

## Full Resource Example

An Excerpt from [NestJS-Documentation](https://docs.nestjs.com/controllers)

```typescript
import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
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
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
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

While the base (built-in) exception filter can automatically handle many cases for you, you may want full control over the exceptions layer. For example, you may want to add logging or use a different JSON schema based on some dynamic factors. Exception filters are designed for exactly this purpose. They let you control the exact flow of control and the content of the response sent back to the client.

```typescript
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response
      .status(status)
      .json({
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

In order to catch every unhandled exception (regardless of the exception type), leave the `@Catch()` decorator's parameter list empty, e.g., `@Catch()`.

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
