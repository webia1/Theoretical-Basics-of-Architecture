# Pact.io Contracts

> [Source](https://docs.pact.io/)

_Contract testing_ is a technique for testing an integration point by checking
each application in isolation to ensure the messages it sends or receives
conform to a shared understanding that is documented in a "contract".

In general, a contract is between a consumer (for example, a client that wants
to receive some data) and a provider (for example, an API on a server that
provides the data the client needs).

Pact is a code-first consumer-driven contract testing tool, and is generally
used by developers and testers who code. The contract is generated during the
execution of the automated consumer tests. A major advantage of this pattern is
that only parts of the communication that are actually used by the consumer(s)
get tested. This in turn means that any provider behaviour not used by current
consumers is free to change without breaking tests.

Unlike a schema or specification (eg. OAS), which is a static artefact that
describes all possible states of a resource, a Pact contract is enforced by
executing a collection of test cases, each of which describes a single concrete
request/response pair - Pact is, in effect, "contract by example".
