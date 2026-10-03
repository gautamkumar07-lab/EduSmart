# REST API Documentation
Base: `/api`
- GET `/health` — service health
- GET `/dashboard` — dashboard summary
- POST `/auth/register` — register
- POST `/auth/login` — JWT login
- POST `/auth/refresh` — rotate token
- POST `/auth/logout` — revoke session
All protected resources use `Authorization: Bearer <JWT>`.
