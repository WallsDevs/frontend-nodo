Este archivo es para depuración rápida del middleware. No es usado por Next, pero ayuda a saber qué hace:

- Protege rutas que empiezan por `/dashboard`.
- Busca cookies `token` o `jwt`.
- Si no hay token, redirige a `/login`.
- Si es ruta `/dashboard/admin`, intenta decodificar el JWT y verificar el rol `admin`.

Ajusta la lógica si tu JWT contiene la información de rol en otro campo.
